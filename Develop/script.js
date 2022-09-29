// Assignment Code

//global variables
var possibleCharacters='';
var passwordLength;
var generateBtn = document.querySelector("#generate");

//getting input from user and setting possible characters
function getInputFromUser(){
  passwordLength=prompt("How many characters do you want in your password?");
  var userSelection=prompt("Type 'l' for lowercase letters: Type 'n' for numbers: Type 'u' for uppercase letters: Type 's' for symbols.");
  if(userSelection.includes('l') ||userSelection.includes('L') ){
    possibleCharacters="abcdefghijklmnopqrstuvwxyz";
  }
  if(userSelection.includes('n') || userSelection.includes('N')){
      possibleCharacters=possibleCharacters+'1234567890';
  }
  if(userSelection.includes('u') || userSelection.includes('U') ){
    possibleCharacters=possibleCharacters+"ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if(userSelection.includes('s') || userSelection.includes('S')){
    possibleCharacters=possibleCharacters+"!@#$%^&*(){}[]<>?";
  }
  return possibleCharacters;
}

//generating a password by selecting random characters from possible characters
function generatePassword(){
  var possibleCharacters=getInputFromUser();
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