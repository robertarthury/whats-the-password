// Assignment code here
let arr = [] 
function generatePassword() {
  // 1. prompt the user for password criteria
  const numberOfCharacters = window.prompt('How many Characters? (between 8-128)', '');
  //  a. password length between 8 < 128
  //only allow a numeric answer between 8 and 128
  if (numberOfCharacters > 128 || numberOfCharacters < 8){
    window.prompt('Please pick a number between 8-128');
  } else if (numberOfCharacters < 129 || numberOfCharacters > 7){
    console.log(numberOfCharacters);
  }
 //  b. special characters,
  let useSpecialCharacters = window.confirm('Use Special Characters?');
  console.log(useSpecialCharacters);
 // lowerCase, upperCase,
  let useLowerUppercase = window.confirm('Include both uppercase and lowercase characters?');
  console.log(useLowerUppercase);
  //numbers
  let useNumbers = window.confirm('Include numbers as well in your password?')
    console.log(useNumbers);

  // 2. validate the input
  // 3. generate password
  
  
    let smallLetter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let capitolLetter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    let signs = ['~','!','@','#','$','%','^','&','*','(',')','_','+','-','=','>','<','/']
    let figures = ['1','2','3','4','5','6','7','8','9','0']
   
    let allDigits = [...smallLetter, ...capitolLetter, ...signs, ...figures]
    for (let i = 0; i < allDigits.length; i++){ 
      let picker = Math.floor(Math.random() * allDigits.length)
      arr.push(allDigits[picker])
    }
    
  
  
  

  // 4. display the generated password
  arr.length = 10;
    return arr.join('');
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
