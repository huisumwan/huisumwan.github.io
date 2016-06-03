function myFunction(S) {
  var string = S;
  var newString = "";
  var reformatNewString = "";
  var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0",];
  if(string.length < 2){
    return;
  }
   for(i = 0; i < string.length; i++){
      var pointer = S.substring(i, i+1); 
      for(j = 0; j < number.length; j++){
        if(pointer == number[j]){
          newString = newString + pointer;
        }
      }
    }
    if(newString.length == 3){
      return;
    }
    if(newString.length == 4){
      for(k = 0; k < newString.length; k++){
        reformatNewString = reformatNewString + newString.substring(k, k+1);
        if((k + 1) % 2 === 0){
          reformatNewString += "-";
        }
      }
    }
    else{
      for(l = 0; l < newString.length; l++){
        reformatNewString = reformatNewString + newString.substring(l, l+1);
        if((l + 1) % 3 === 0){
          reformatNewString += "-";
        }
      }
    }
    if(reformatNewString.substring(reformatNewString.length - 1, reformatNewString.length) === "-"){
      reformatNewString = reformatNewString.substring(0, reformatNewString.length - 1);
    }
    if(reformatNewString.substring(reformatNewString.length - 2, reformatNewString.length - 1) === "-"){
      reformatNewString = reformatNewString.substring(0, reformatNewString.length - 3) + "-" + reformatNewString.substring(reformatNewString.length - 3,reformatNewString.length - 2) + reformatNewString.substring(reformatNewString.length - 1,reformatNewString.length);
    }

} 