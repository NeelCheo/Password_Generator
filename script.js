// Assignment Code
var generateBtn = document.querySelector("#generate");

// creates the strings to be converted
var lower ='abcdefghijklmnopqrstuvwxyz'
var upper = lower.toUpperCase();
var special ="!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
var numbers ='1234567890'
// creates the the array version of the strings for the functions to refrence
var charLower = lower.split('');
var charUpper = upper.split('');
var charSpecial = special.split('');
var charNumbers = numbers.split('');
//for filling in the charlength at random
var charAll = charLower.concat(charUpper,charNumbers,charSpecial);


function generatePassword() {
  var password =[]
  // pLength = window.prompt("What length is password (8-128)")
  // pLower = window.prompt("Is lowercase required (Y/N)")
  // pUpper = window.prompt("Is uppercase required (Y/N)")
  // pNumeric = window.prompt("Is Numeric Required (Y/N)")
  // pSpecial = window.prompt("Is special Required (Y/N)")

  //returns password array as string for the writePassword function to print
  return password.join('');
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
