// Assignment Code

//global variables
var possibleCharacters;
var passwordLength;
var generateBtn = document.querySelector("#generate");


//getting input from user and setting possible characters
function getInputFromUser(){
  possibleCharacters="";
  var upperCase=confirm("Do you want uppercase letters in your password? If yes Select 'ok' OR select 'cancel'");
  var LowerCase=confirm("Do you want lowercase letters in your password? If yes Select 'ok' OR select 'cancel'");
  var numbers=confirm("Do you want numbers in your password? If yes Select 'ok' OR select 'cancel'");
  var symbols=confirm("Do you want special characters in your password? If yes Select 'ok' OR select 'cancel'");
    if(LowerCase){
      possibleCharacters="abcdefghijklmnopqrstuvwxyz";
    }
    if(numbers){
        possibleCharacters=possibleCharacters+"1234567890";
    }
    if(upperCase) {
      possibleCharacters=possibleCharacters+"ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if(symbols){
      possibleCharacters=possibleCharacters+"!@#$%^&*(){}[]<>?";
    }
    if(possibleCharacters==="") {
      getInputFromUser();
    }
}

//checking whether the password length got from user is a valid number
// and it is between 8 and 128
function isValid(len){
  if(len<128 && len>=8){
    passwordLength===len;
    return true;
  }
  else{
    getPasswordLength(); 
  }  
}

//getting password length from user
function getPasswordLength(){
  passwordLength=prompt("How many characters do you want in your password? Select a number from 8 to 128");
  if(isValid(passwordLength)){
    getInputFromUser();
  }
}

//generating a password by selecting random characters from possible characters
function generatePassword(){
  getPasswordLength();
  var length=possibleCharacters.length-1;
  var randomCharacters='';
  for(var i=0;i<passwordLength;i++){
    randomNo=Math.floor((Math.random())*length);
    randomCharacters=randomCharacters+possibleCharacters[randomNo];
  }
  return randomCharacters;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);