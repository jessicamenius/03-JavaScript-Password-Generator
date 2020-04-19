document.querySelector("button").addEventListener("click", function (event) {
  event.preventDefault();

  var length = document.querySelector('input[name="length"]').value;

  if (length < 8 || length > 128) {
    alert(
      "The password must be greater or equal to 8 characters and less than or equal to 128 characters"
    );
  } else {
    var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
    var specialChars = "~!@#$%^&*()";
    var numb1 = "1234567890";

    var possibleCharacters = "";
    var checkboxes = document.querySelectorAll('input[name="types"]:checked');

    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].value === "uppercase") {
        possibleCharacters += uppercaseCharacters;
      }
      if (checkboxes[i].value === "lowercase") {
        possibleCharacters += lowercaseCharacters;
      }
      if (checkboxes[i].value === "special") {
        possibleCharacters += specialChars;
      }
      if (checkboxes[i].value === "numb") {
        possibleCharacters += numb1;
      }
    }

    var password = "";

    for (var j = 0; j < length; j++) {
      password += possibleCharacters.charAt(
        Math.floor(Math.random() * possibleCharacters.length)
      );
    }

    document.getElementById("password").innerHTML = password;
  }
});
