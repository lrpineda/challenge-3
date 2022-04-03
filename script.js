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
    // If the user types the wrong length, ask again
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

  // Confirm if user wants uppercase on some of the characters
  var getCase = function () {
    return confirm(
      "Would you like to include uppercase characters?\n(By default it is all lowercase.)"
    );
  };
  // Confirm if the user wants numers
  var getNumeric = function () {
    return confirm(
      "Would you like to add numbers?\n(By default it only letters.)"
    );
  };
  // Confirm if the user wants special characters
  var getSpecial = function () {
    return confirm("Would you like special characters?");
  };

  // Setting the criteria object
  var criteria = {
    Length: getLength(),
    uppercase: getCase(),
    numeric: getNumeric(),
    specialCharacters: getSpecial(),

    // function to randomize a character depending on the criteria set by the user
    randomizer: function () {
      randomAlpha = alphabet[Math.floor(Math.random() * alphabet.length)];
      randomNum = numbers[Math.floor(Math.random() * numbers.length)];
      randomSpecial = special[Math.floor(Math.random() * special.length)];
      holder = [];
      character = "";

      // Confirm if the user wants uppercase letters
      if (this.uppercase) {
        // Randomize the times letters are uppercase
        if (Math.random() > 0.5) {
          holder += randomAlpha.toUpperCase();
        }
      }

      // Confirm if the user wants numbers
      if (this.numeric) {
        holder += randomNum;
      }
      // Confirm if the user wants special characters
      if (this.specialCharacters) {
        holder += randomSpecial;
      }
      holder += randomAlpha;

      // Once we have one of each (one random number, one random letter, one special character) 
      // we will randomize it again to only return one character
      if (holder.length > 1) {
        character = holder[Math.floor(Math.random() * holder.length)];
        return character;
      }
      character = holder;
      return character;
    },
  };

  var generatedPass = "";
  //Based on the criteria's length, we will generate a password with one random character at a time.
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
