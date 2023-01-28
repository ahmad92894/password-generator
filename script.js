// Assignment Code
var generateBtn = document.querySelector("#generate");
// document.getElementById("generate").addEventListener("click", generatePassword)


// these are the options
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCaseletters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseletters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specialCharacters = ['!','@','#','$','%','&','*','(',')','-','_','+','=']
var availableOptions = [];


// // this is how you get a known index
// var firstCharOfNumArray = numericCharacters[0]; // '0'
// var firstCharOfLowArray = lowerCaseletters[0]; // 'a'
// var secondCharOfSpecialArray = specialCharacters[1] // '@'


// create a function that asks the user a bunch of questions and returns an obj w/ those answers
function promptuser () {
  var userChoice = prompt ("please select password legnth between 8 and 128 characters");
  var upperCaseletters = confirm("would you like to use uppercase?");
  var lowerCaseletters = confirm("would you like to use lowercase?");
  var numericCharacters = confirm("would you like to use numericCharacters");
  var specialCharacters = confirm("would you like to use special characters");
  
  
  if (userChoice < 8 || userChoice > 128) {
    alert ("password doesnt meet criteria")
  } else {
    // prompt ("would you like numeric characters")
  }
  if (!upperCaseletters && !lowerCaseletters && !numericCharacters && !specialCharacters) {
    alert("please select at least one")
    return "please select one character"
    }
    
    var userPassword = {
      length: userChoice,
      hasNumeric: numericCharacters,
      hasLower: lowerCaseletters,
      hasUpper: upperCaseletters,
      hasSpecial: specialCharacters,
  }
      console.log(userPassword);
    
   
  
  // if (passwordLength < 8 || passwordLength > 128);
  // var passwordLength = 8;
  
  
  return userPassword
    

}
function generatePassword(userInfo){

}
// Write password to the #password input
function writePassword() {
  //alert("working");
  var userresponse = promptuser();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var options

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// TA pseudo code//
//user clicks a button
  //event listener, calling a function to write password
  //inside our function we prompt for password length
    //var passwordLength = prompt("How many characters would you like your password to contain?"); //what does prompt return??
      //we need to validate the prompt so that it meets criteria, must be a number, gt 8 lt 129
    //then user is prompted password length 

    //if(passwordLength < 8){
      //alert('Password length must be at least 8 characters');
    //}
    
//then user confirms for password criteria
  //var hasNumeric = confirm("Click OK to confirm including numeric characters.");
  //var hasLower = confirm("Click OK to confirm including Lower characters.");
  //var hasUpper = confirm("Click OK to confirm including Upper characters.");
  //var hasSpecial = confirm("Click OK to confirm including Special characters.");

  //if(hasNumeric === false && hasLower === false && hasUpper === false && hasSpecial === false){
      //alert('Must select at least one character type');
  //}

  //object to store user input
  //var userPassword = {
      //length: passwordLength,
      //hasNumeric: hasNumeric,
      //hasLower: hasLower,
      //hasUpper: hasUpper,
      //hasSpecial: hasSpecial,
  //}
  // return userPassword;


// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);



  //create another function to generate the password
  //var userOptions = getOptions();
  //we have an array to store each criteria
  //var possibleChars = [];
  //var result = [];
  //var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  //if(userOptions.hasNumeric === true){
    //possibleChars = possibleChars.concat(numericCharacters);
  //}
  
//the password is displayed to the screen


/*
input is the users choices


processing



output is a password
-- a password is a collection of chars based on the users choices
if the user chose 10 char w/ only lower and nums
ex: 's5ds85c4c5'
*/
