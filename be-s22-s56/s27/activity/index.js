// console.log("Hello World");

function printOddNumbers(num) {

    let oddNumbers = "The odd numbers found are the following: ";

    for (let count = 0; count <= num; count++) {

        // if remainder is equal to 0
        if (count % 2 === 0) {

            // Tells the code to continue to the next iteration of the loop
            // This ignores all statements located after the continue statement;
            continue;

        }

        // The current value of number is printed out if the remainder is not equal to 0
        console.log("Continue and Break: " + count);
        oddNumbers += count + ", "


        // If the current value of count is greater than 10
        if (count > 10) {

            // Tells the code to terminate/stop the loop even if the expression/condition of the loop defines that it should execute so long as the value of count is less than or equal to 10
            // number values after 10 will no longer be printed
            break;

        }
    }

    return oddNumbers;
}

function generateSalt(length) {
  // Define the characters that can be used in the salt
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  // Initialize an empty string to store the generated salt
  let salt = '';
  // Iterate 'length' times to generate the salt
  for (let i = 0; i < length; i++) {
      // Generate a random index to select a character from the characters string
      const randomIndex = Math.floor(Math.random() * characters.length);
      // Append the selected character to the salt string
      salt += characters[randomIndex];
  }
  // Return the generated salt string
  return salt;
}

let string = 'supercalifragilisticexpialidocious';
console.log(string);

function filterVowels(string) {
    // Initialize an empty string that will hold the result after vowels are filtered out
    let filteredString = '';
    
    // Start a loop that iterates over each character in the input string
    for (let i = 0; i < string.length; i++) {
        // Check if the current character (case-insensitively) is a vowel
        // 'aeiou'.includes(string[i].toLowerCase()) evaluates to true if string[i] is a vowel
        if ('aeiou'.includes(string[i].toLowerCase())) {
            // If the current character is a vowel, skip the rest of the loop and move to the next character
            continue;
        } else {
            // If the current character is not a vowel, add it to the filteredString
            filteredString += string[i];
        }
    }
    // After the loop finishes, return the filtered string which excludes all vowels
    return filteredString;
}


function skipLetterAndStop(string){

let name = string;
let letterACount = 0;

for (let i = 0; i < name.length; i++) {
    
    // If the vowel is equal to a, continue to the next iteration of the loop
    if (name[i].toLowerCase() === "a") {
        console.log("Continue to the next iteration");
        letterACount++
        continue;
    }

    // If the current letter is equal to d, stop the loop
    if (name[i] == "d") {
        console.log("Stopping the loop, letter d is found")
        break;
    }

    // The current letter is printed out based on it's index
    console.log(name[i]);

}

return letterACount;

}


/* 
	6. Debug the following code to allow the functions to properly receive and return the correct values and mimic the output.
		- Check syntax of the following code.
		- Check if value is returned.
		- Check the parameters and arguments.
        - Check the if else statements
        - Check the loop statements
        - Ensure no error in the console.
*/

function register(firstName,lastName,email,password,confirmPassword,mobileNum){

    //returns messages if any of the parameters is not a string or is empty
  
    if(typeof firstName !== "string" || firstName === ""){
      return "First name must be a string and not empty";
    }
  
    if(typeof lastName !== "string" || lastName === ""){
      return "Last name must be a string and not empty";
    }
  
    if(typeof email !== "string" || email === ""){
      return "Email must be a string and not empty";
    }
  
    if(typeof password !== "string" || password === ""){
      return "Password must be a string and not empty";
    }
  
    if(typeof confirmPassword !== "string" || confirmPassword === ""){
      return "Confirm password must be a string and not empty";
    }
  
    if(typeof mobileNum !== "string" || mobileNum === ""){
      return "Mobile number must be a string and not empty";
    }
  
    //return message if mobileNum length is not equal to 11.
    if(mobileNum.length !== 11){
      return "Mobile number must be 11 digits long";
    }
  
    //return message if password and confirmPassword does not match
    if(password !== confirmPassword){
      return "Password and confirm password must match";
    }
  
    //return user object
    return {
  
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      mobileNum: mobileNum
  
    }
  }
  
  let newUser = register("Nayeon","Im","nayeonie@gmail.com","nayeonnie21","nayeonnie21","09266771400");
  console.log(newUser);

  

//Do not modify
//For exporting to test.js
try{
    module.exports = {
      
      printOddNumbers: typeof printOddNumbers !== 'undefined' ? printOddNumbers : null,
      filterVowels: typeof filterVowels !== 'undefined' ? filterVowels : null,
      generateSalt: typeof generateSalt !== 'undefined' ? generateSalt : null,
      skipLetterAndStop: typeof skipLetterAndStop !== 'undefined' ? skipLetterAndStop : null,
      register: typeof register !== 'undefined' ? register : null

    }
} catch(err){

}