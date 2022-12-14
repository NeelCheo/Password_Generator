// Assignment Code
var generateBtn = document.querySelector("#generate");

// creates the strings to be converted
var lower ='abcdefghijklmnopqrstuvwxyz'
var upper = lower.toUpperCase();
var special ="!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
var numeric ='1234567890'
// creates the the array version of the strings for the functions to refrence
var charLower = lower.split('');
var charUpper = upper.split('');
var charSpecial = special.split('');
var charNumeric = numeric.split('');



function generatePassword() {
  var password =[]
  //for filling in the charlength at random
  var charAll =[] 
  // for asking conditions in the generate question function
  var pLength = 1;
  var pLower = 'w';
  var pUpper = 'w';
  var pNumeric = 'w';
  var pSpecial = 'w';
  var pLower = 'w';
  //checks and applies char condition to password if y 
  //also adds charset for filling in password length cond
  function applyCondChar(input,charSet){
    if(input.toUpperCase() == 'Y'){
      password.push(charSet[Math.floor(Math.random()*charSet.length)]);
      charAll = charAll.concat(charSet);
    }
  }
  // asks for length
  while(pLength <8 || pLength >128){
    pLength = window.prompt("How many characters (8-128)")
  }
  //START CHAR COND asks and applies char cond accordinglyto password
  while(pUpper.toUpperCase() != 'N' && pUpper.toUpperCase() != 'Y'){
    pUpper = window.prompt("Is uppercase required (Y/N)")
  }
  applyCondChar(pUpper,charUpper)
 
  while(pLower.toUpperCase() != 'N' && pLower.toUpperCase() != 'Y'){
    pLower = window.prompt("Is lowercase required (Y/N)")
  }
  applyCondChar(pLower,charLower)

  while(pNumeric.toUpperCase() != 'N' && pNumeric.toUpperCase() != 'Y'){
    pNumeric = window.prompt("Is numeric Required (Y/N)")
  }
  applyCondChar(pNumeric,charNumeric)

  while(pSpecial.toUpperCase() != 'N' && pSpecial.toUpperCase() != 'Y'){
    pSpecial = window.prompt("Is special Required (Y/N)")
  }
  applyCondChar(pSpecial,charSpecial)
  // END CHAR COND
  while(password.length != pLength){
    password.push(charAll[Math.floor(Math.random()*charAll.length)]);
  }
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
