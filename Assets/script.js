// Assignment Code
var generateBtn = document.querySelector("#generate");

//all possible choices
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var bigLetters =  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'] ;
var smallLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] ;
var symbols = ['!', '%', '+', '/', "'", '@', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// creates a function for all the criteria
function criteria() {
var valid = false
// started a do while loop to run the a loop as long as the condition is true 
do {
var length = prompt("Choose a password between 8 and 128 characters.");
var chooseNumbers = confirm('Do you want your password to contain numbers?');
var chooseupper = confirm("Do you want your password to contain upper case letters?");
var chooselower = confirm("Do you want your password to contain lower case letters?");
var chooseymbols = confirm("Do you want your password to contain symbols?");

// made the var responses contain multiple objects with the '{}'
var responses = {
  length: length, 
  chooseNumbers:chooseNumbers,
  chooseupper: chooseupper,
  chooselower: chooselower,
  chooseymbols: chooseymbols,
  
}
//created if and else if statements to create alerts given certain criteria
if((length < 8)||(length > 128))
  alert("Please choose a password between 8 and 128");
else if((!chooseupper)&&(!chooselower)&&(!chooseymbols)&&(!chooseNumbers))
  alert("You must choose atleast one!");
else 
 valid = true ;
// "!" makes the above stament valid = false into valid = true 
} while(!valid);
return responses;
} 
// fucntion that generates random password
function generatePassword() {
//input the above criteria function into the variable passwordChoices
  var passwordChoices = criteria();
  var combo = [];
  var randomPassword = "";

// this if statement created to allow for random charactors to be pushed

  if(passwordChoices.chooseNumbers) {
    for (var i of numbers)
      combo.push(i);
  }
  if(passwordChoices.chooselower) {
    for(var i of smallLetters)
      combo.push(i);
  }
  if(passwordChoices.chooseupper) {
    for (var i of bigLetters)
      combo.push(i);
  }
  if(passwordChoices.chooseymbols) {
    for(var i of symbols)
      combo.push(i);
  }


  console.log(combo);

// initially had =+ which was causing a NaN error //
  for(var i = 0; i < passwordChoices.length; i++) {
   randomPassword += combo[Math.floor(Math.random() * combo.length)];
    
  }
  console.log(randomPassword);

  return(randomPassword);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

