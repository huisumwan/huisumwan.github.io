<?php
	//ini_set('display_errors', '1');
	//require 'test.cfg';
	include "config/Rally.cfg"; 
  	include "source/rallylib.mod"; 
	//require_once "config/ccapp.cfg";
  	date_default_timezone_set('America/New_York');
	
  	$echoStr = '';
	
	require 'schools/Created/createdSchools.cfg';
	require 'schools/schools.cfg';
	$previewerRows = "";
	$schoolList = array();
	$s = array(
		'schoolID',
	    'school',
	    'district',
	    'city',
	    'state',
	    'product',
	    'created',
	    'expires',
	    'unixExpireTime',
	);

	


	$heading = "<h1>RALLY! Education Schools Info</h1>";
	$style = '
	<style>
		td,th {
			border:1px solid black;
			margin: 4px;
			text-align:right;
		}
	</style>';

	echo $style;
	echo $heading;
	$echoStr .= '<h2>Total current schools: $currentSchools, Total expired schools: $expiredSchools</h2>';
	$echoStr .= "<a href='test.csv' target='csvList'>Download .csv file</a><br /><br />";
	echo '<table><tr>';
	$hRow = '<th>School ID</th><th>School Name</th><th>District</th><th>City</th><th>State</th> <th>Product</th> <th>Created</th> <th>Expiration</th></tr>';
	echo $hRow;
	$currentSchools;
	$expiredSchools;

	$now = strtotime("now");
	$expireSoon = strtotime("1 month", $now);
	

	$schoolDirArray = array();
	$schoolIdArray = array();
	$schoolExpireTime = array();
	$schoolProductArray = array();

	foreach($createdSchools as $createdSchoolName => $schoolID){
		foreach($schoolID as $schoolArrayItem => $schoolArrayItemValue){

			$$schoolArrayItem = $schoolArrayItemValue;
			
		}
		$schoolDirArray[] = $schoolID['district'];
		$schoolIdArray[] = $createdSchoolName;	
		$schoolExpireTime[] = $schoolID['expires'];

		$productSchoolName = $createdSchoolName;
		$productSchoolName = array();
		

		$schoolFileDir = "schools/$district/$school";
		$schoolFile = "schools/$district/$school/school.cfg";

		//echo "<br>" . $schoolFile . "<br>";
		if (!file_exists($schoolFile)) continue;
		include $schoolFile;
		
		foreach($schoolInfo as $schoolInfoArrayItem => $schoolInfoArrayItemValue){
			$$schoolInfoArrayItem = $schoolInfoArrayItemValue;
			//echo "<br> Line 75 " . $schoolInfoArrayItem;
			//echo "<br> Line 76 " . $schoolInfoArrayItemValue;
			if($schoolInfoArrayItem == "address"){
				foreach($address as $addressArrayItem => $addressArrayItemValue){
					$$addressArrayItem = $addressArrayItemValue;
				}
			}
			foreach($RES_Products as $productID => $productInfo){
				//echo "<br>" . $productID; 
				if($schoolInfoArrayItem == $productID){
					$productSchoolName[] = $schoolInfoArrayItem . "(" . $schoolInfoArrayItemValue['limit'] . ")";
					$schoolProductArray[$createdSchoolName] = $productSchoolName;
				}
			}
		}
	}

	$expireSoonArray = array();
	$expiredArray = array();
	$newSchoolList = array();
	for($i = 0; $i < count($createdSchools); $i++){
		$schoolDir = "schools/" . $schoolDirArray[$i] . "/" . $schoolIdArray[$i];
		//echo "<br>" . $schoolDir;
		if(is_dir($schoolDir)){
			$schoolID = $schoolIdArray[$i];
			$schoolExpire = $schoolExpireTime[$i];
			$b = convertDate($schoolExpire);
			$a = scanSchools($schoolDir, $schoolID, $schoolExpire, $b, $schoolProductArray[$schoolID]);
			$unixExpireTime = $a['unixExpireTime'];
			//echo "<br>" . $unixExpireTime . " " . $now;
			if($unixExpireTime <= $now){
				$expiredArray[] = $a;
			}
			else if(!($unixExpireTime <= $expireSoon && $unixExpireTime > $now)){
				$schoolList[] = $a;
			}
			else{
				$expireSoonArray[] = $a;
			}
		}
	}

	uasort($expireSoonArray, 'sortExpireSoon');
	uasort($schoolList, 'sortSchoolList');
	uasort($expiredArray, 'sortExpired');

	function sortExpireSoon($a, $b){
		return $a['unixExpireTime'] - $b['unixExpireTime'];
	}
	function sortSchoolList($a, $b){
		return $b['unixExpireTime'] - $a['unixExpireTime'];
	}
	function sortExpired($a, $b){
		if($a['unixExpireTime'] !== $b['unixExpireTime']){
			return $b['unixExpireTime'] - $a['unixExpireTime'];
		}
		else{
			return strcmp($a['state'], $b['state']);
		}	
	}
	
	$newSchoolList = array_merge($expireSoonArray, $expiredArray, $schoolList);

	for($i = 0; $i < count($newSchoolList); $i++){
		$hRow = '<tr>';
		$hRow .= "<td>" . $newSchoolList[$i]['schoolID'] . "</td>";
		$hRow .= "<td>" . $newSchoolList[$i]['school'] . "</td>";
		$hRow .= "<td>" . $newSchoolList[$i]['district'] . "</td>";
		$hRow .= "<td>" . $newSchoolList[$i]['city'] . "</td>";
		$hRow .= "<td>" . $newSchoolList[$i]['state'] . "</td>";
		$hRow .= "<td style = 'width:20%; word-break:keep-all;'>" . $newSchoolList[$i]['product'] . "</td>";
		$hRow .= "<td>" . $newSchoolList[$i]['created'] . "</td>";
		

		if($newSchoolList[$i]['unixExpireTime'] <= $now){
			$expiredSchools++;
			$hRow .= "<td style='background-color:red;'>" . $newSchoolList[$i]['expires'] . "</td>";
			//echo "<br> expired <br>";
		}
		else if($newSchoolList[$i]['unixExpireTime'] <= $expireSoon && $b > $now){
			$currentSchools++;
			$hRow .= "<td style='background-color:green;'>" . $newSchoolList[$i]['expires'] . "</td>";
			//echo "<br> expires soon <br>";
		}
		else{
			$currentSchools++;
			$hRow .= "<td>" . $newSchoolList[$i]['expires'] . "</td>";
			//echo "<br> not expired <br>";
		}
		$hRow .= '</tr>';
		$echoStr .= $hRow;
	}	
	$echoStr .= "</table><br>";

	
	

	echo translate($echoStr);
	function scanSchools($dir, $schoolID, $schoolExpire, $convertedTime, $schoolProductArray) {
		$dh = opendir($dir);
		while (($file = readdir($dh)) !== false) {
		if ($file !== 'school.cfg') continue;
		//echo "<br />filename: $file";
		$theFile = "$dir/$file";
		if (is_dir($theFile)) scanSchools($theFile);
			if ($file == 'school.cfg') {
				//echo "<br />filename: $dir/$file";
				require "$dir/$file";
				$s['schoolID'] = $schoolID;
	 			$s['school'] = $schoolInfo['school'];
				$s['district'] = $schoolInfo['districtID'];
				$s['city'] = $schoolInfo['address']['city'];
				$s['state'] = $schoolInfo['address']['state'];
				$s['product'] = $schoolProductArray[0];
				for($i = 1; $i < count($schoolProductArray); $i++){
					$s['product'] .= ", " . $schoolProductArray[$i];
				}
				$s['created'] = $schoolInfo['created'];
				$s['expires'] = $schoolExpire;
				$s['unixExpireTime'] = $convertedTime;

			}
		}
		return $s;	
	}

	function convertDate($expiresTime){
		$unixExpireTime = strtotime($expiresTime);
		return $unixExpireTime;
	}

	$csvFile = 'test.csv';
	$fp = fopen($csvFile, 'w');
	fputcsv($fp, array('School ID', 'School Name', 'District', 'City', 'State', 'Product', 'Created', 'Expiration'));
	foreach($newSchoolList as $a){
		fputcsv($fp, $a);	
	}
	fclose($fp);


	//echo "<br>done! ";
?>