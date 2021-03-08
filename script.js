// Assignment code here

// Arrays for password entries data
function GeneratePassword() {
    var lowerCaseSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upperCaseSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numSet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var specialSet = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", "_", "?", "/", "<", ">", "[", "]"];
    var selectedArray = [];


    var passwordLength = getPasswordLength();
    //End Arrays for password entries data


    var charTypeSelected = false;

    //Whil, If and Else statements
    while (charTypeSelected == false) {
        var lowerCase = getChoice("lowercase");
        var upperCase = getChoice("uppercase");
        var numericCharac = getChoice("numeric");
        var specialCharac = getChoice("special");
        if ((lowerCase) || (upperCase) || (numericCharac) || (specialCharac)) {
            charTypeSelected = true;
        } else {
            window.alert("You must select at least one character type.")
        }
    }

    if (lowerCase) {
        selectedArray = selectedArray.concat(lowerCaseSet);
    }
    if (upperCase) {
        selectedArray = selectedArray.concat(upperCaseSet);
    }
    if (numeric) {
        selectedArray = selectedArray.concat(numSet);
    }
    if (special) {
        selectedArray = selectedArray.concat(specialSet);
    }

    var passwordString = "";


    for (var i = 0; i < passwordLength; i++) {
        passwordString += selectedArray[Math.floor(Math.random() * (selectedArray.length))];
    }
    return passwordString;
}


function getPasswordLength() {
    var userChoice = 0;
    while ((userChoice < 8) || (userChoice > 128)) {
        userChoice = parseInt(window.prompt("Enter the number of characters between 8 and 128: "));

        if (isNaN(userChoice)) {

            userChoice = 0;
        }
        return userChoice;

    }




}









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