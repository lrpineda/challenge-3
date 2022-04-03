// Setting the type of characters
//Alphabet
var alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// Special characters
var special = [
  " ",
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
  '"',
];
// Numbers 
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Generate password fuction
var generatePassword = function () {
  // Promt user to set the lenght of the password
  var getLength = function () {
    var theLength = parseInt(
      prompt(
        "Choose the password's length, it has to be at least 8 characters and no more than 128 characters"
      )
    );
    // If the user t
    while (isNaN(theLength) || theLength < 8 || theLength > 128) {
      window.alert("Length needs to be between 8 and 128 characters");
      theLength = parseInt(
        prompt(
          "Choose the password's length, it has to be at least 8 characters and no more than 128 characters"
        )
      );
    }
    return theLength;
  };

  var getCase = function () {
    return confirm(
      "Would you like to include uppercase characters?\n(By default it is all lowercase.)"
    );
  };

  var getNumeric = function () {
    return confirm(
      "Would you like to add numbers?\n(By default it only letters.)"
    );
  };

  var getSpecial = function () {
    return confirm("Would you like special characters?");
  };

  // Setting the criteria
  var criteria = {
    Length: getLength(),
    uppercase: getCase(),
    numeric: getNumeric(),
    specialCharacters: getSpecial(),
    randomizer: function () {
      randomAlpha = alphabet[Math.floor(Math.random() * alphabet.length)];
      randomNum = numbers[Math.floor(Math.random() * numbers.length)];
      randomSpecial = special[Math.floor(Math.random() * special.length)];
      holder = [];
      character = "";
      if (this.uppercase) {
        if (Math.random() > 0.5) {
          holder += randomAlpha.toUpperCase();
        }
      }
      if (this.numeric) {
        holder += randomNum;
      }
      if (this.specialCharacters) {
        holder += randomSpecial;
      }
      holder += randomAlpha;
      if (holder.length > 1) {
        character = holder[Math.floor(Math.random() * holder.length)];
        return character;
      }
      character = holder;
      return character;
    },
  };

  var generatedPass = "";
  for (var i = 0; i < criteria.Length; i++) {
    generatedPass += criteria.randomizer();
  }
  return generatedPass;
};

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
