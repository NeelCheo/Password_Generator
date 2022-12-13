// Assignment Code
var generateBtn = document.querySelector("#generate");
// var alphabet = ['abcdefghijklmnopqrstuvwxyz']
// var c = alphabet.split('')
// console.log(c)

function generatePassword() {
  pLength = window.prompt("What length is password (1-128)")
  pLower = window.prompt("Is lowercase required (Y/N)")
  pUpper = window.prompt("Is uppercase required (Y/N)")
  pNumeric = window.prompt("Is Numeric Required (Y/N)")
  pSpecial = window.prompt("Is special Required (Y/N)")
}










// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
