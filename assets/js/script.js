// Assignment Code
let generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Various Declarations for character types
  let numberList = "1234567890";
  let upperList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerList = "abcdefghijklmnopqrstuvwxyz"
  let specList = "!#$%&()*+,-./:;<=>?@[]^_`{|}~"; //space, backslash, single, and double quotations are omitted

  /* 
  The variable validChar represents the allowed character types.
  It may be empty currently, but it will fill up as the user
  enables different character types in their password
  */
  let validChar = '';
  let currentPassword = '';


  //The user will be prompted with this window first, asking for password length 
  let passLength = prompt("How long do you want your password to be?\nThe length must be between 8 and 128 characters.");

  // If they do not input a valid number, close function immediately
  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert("Please enter a valid number from 8 to 128. No letters, no numbers out of this range, and no nonsense!")
    return '';
  }

  //A confirmation messages telling user if they want number properties in their passwords
  let haveNumbers = confirm("Would you like numbers (0-9) in your password?");
  // If they allow it, the available number characters get added to validChar
  if (haveNumbers) {
    validChar += numberList;
  }
  // The rest of the confirmations and if statements follow the same pattern
  let haveUppercase = confirm("Would you like uppercase letters (A-Z) in your password?");
  if (haveUppercase) {
    validChar += upperList;
  }
  let haveLowercase = confirm("Would you like lowercase letters (a-z) in your password?");
  if (haveLowercase) {
    validChar += lowerList;
  }
  let haveSpecial = confirm("Would you like special characters (!@#$, etc) in your password?");
  if (haveSpecial) {
    validChar += specList;
  }

  // If validChar string is still empty (meaning they said no to everything), close function immediately
  if (validChar == '') {
    alert("One password with nothing in it coming right up!\nHehe, just kidding. Pick at least one criterion please.");
    return '';
  }

  /* 
  Time to generate a randomized string! This loop will 
  randomly select characters in the validChar string. It will 
  keep putting them in the currentPassword string until the
  length of the currentPassword string is equal to the length 
  that the user wanted their password to be.
  */
  for (let i = 0; i < passLength; i++) {
    currentPassword += validChar[Math.floor(Math.random() * validChar.length)];
  }
  return currentPassword;
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);