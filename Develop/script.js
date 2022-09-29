// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword(){
  var possibleCharacters='';
  var lowerCase=prompt("Do you want lowercase letters in your password? Type y or n");
  var numbers=prompt("Do you want numbers in your password? Type y or n")
  if(lowerCase==='y' || lowerCase==='Y' ){
    possibleCharacters="abcdefghijklmnopqrstuvwxyz";
  }
    if(numbers==='y' || numbers==='Y'){
      possibleCharacters=possibleCharacters+'1234567890';
  }
  var length=possibleCharacters.length-1;
  var randomCharacters='';
  for(var i=0;i<10;i++){
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