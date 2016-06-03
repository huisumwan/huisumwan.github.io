function solution(){
  var buttonCheckPerson = document.getElementById("type_person");
  var buttonCheckCompany = document.getElementById("type_company");
  var firstName = document.getElementById("first_name").value;
  var lastName = document.getElementById("last_name").value;
  var email = document.getElementById("email").value;
  var companyName = document.getElementById("company_name").value;
  var phone = document.getElementById("phone").value;
  
  var atPos = email.indexOf("@");
  var validateEmail = email.match(/@/g).length;
  var beforeAt = email.substring(0,atPos - 1).length;
  var afterAt = email.substring(atPos + 1, email.length).length;
  
  
  var phoneLength = phone.length;
  var phoneDigits = "";
  var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0",];
  for(i = 0; i < phoneLength; i++){
    var pointer = phone.substring(i, i+1);
    for(j = 0; j < number.length; j++){
      if(pointer == number[j]){
          phoneDigits = phoneDigits + pointer;
        }
    }
  }
  if(buttonCheckPerson.checked){
    if(firstName === "" || lastName === ""){
      return false;
    }
    else if(validateEmail > 1){
      return false;
    }
    else if(beforeAt < 1 || beforeAt > 65 || afterAt < 1 || afterAt > 65){
      return false;
    }
    else{
      return true;
    }
    
  }
  if(buttonCheckCompany.checked){
    if(companyName === ""){
      return false;
    }
    else if(phoneDigits.length < 6){
      return false;
    }
    else{
      return true;
    }
  }

}
solution();