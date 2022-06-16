// Challenge code here
function generatePassword(){
  var len = 0;

  const specialChars = ['?','!','-','_','(',')','*','&','^','$','#','@','~',',','.']
    let upperCase = false
    let lowerCase = false
    let numbers = false;
    let special = false;
    var answer;

  while(len < 8 || len > 128){
    len = prompt("Enter the length of the password")
    len = Number(len)
    
    if(len < 8 || len > 128){
      alert("Invalid length. Required (8 - 128)")
    }
  }

  while(answer != "yes" && answer != "no"){
    answer = prompt("Do you want to have lowercase characters")
    answer = answer.toLowerCase();
    if(answer != "yes" && answer != "no"){
      alert("Please answer yes or no")
    }
  }

  if (answer == "yes"){
    lowerCase = true;
  }
  answer = "";

  while(answer != "yes" && answer != "no"){
    answer = prompt("Do you want to have uppercase characters")
    answer = answer.toLowerCase();
    if(answer != "yes" && answer != "no"){
      alert("Please answer yes or no")
    }
  }

  if (answer == "yes"){
    upperCase = true;
  }
  answer = "";

  while(answer != "yes" && answer != "no"){
    answer = prompt("Do you want to have number characters")
    answer = answer.toLowerCase();
    if(answer != "yes" && answer != "no"){
      alert("Please answer yes or no")
    }
  }

  if (answer == "yes"){
    numbers = true;
  }
  answer = "";

  while(answer != "yes" && answer != "no"){
    answer = prompt("Do you want to have special characters")
    answer = answer.toLowerCase();
    if(answer != "yes" && answer != "no"){
      alert("Please answer yes or no")
    }
  }

  if (answer == "yes"){
    special = true;
  }

  if(special || numbers || lowerCase || upperCase){

  }else{
    alert("You have to select atleast one of the character types")
    return ""
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
