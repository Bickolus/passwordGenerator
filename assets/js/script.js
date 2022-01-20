let generateBtn = document.querySelector("#generate");

function generatePassword() {
  let numberList = "1234567890";
  let upperList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerList = "abcdefghijklmnopqrstuvwxyz"
  let specList = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";

  let validChar = '';
  let currentPassword = '';

  let passLength = prompt("How long do you want your password to be?\nThe length must be between 8 and 128 characters.");

  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert("Please enter a valid number from 8 to 128. No letters, no numbers out of this range, and no nonsense!")
    return '';
  }

  let haveNumbers = confirm("Would you like numbers (0-9) in your password?");
  if (haveNumbers) {
    validChar += numberList;
  }
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
  
  if (validChar == '') {
    alert("One password with nothing in it coming right up!\nHehe, just kidding. Pick at least one criterion please.");
    return '';
  }

  for (let i = 0; i < passLength; i++) {
    currentPassword += validChar[Math.floor(Math.random() * validChar.length)];
  }
  return currentPassword;
}

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);