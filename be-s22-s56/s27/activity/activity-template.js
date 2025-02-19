// console.log("Hello World");


//Objective 1
//Add code here
//Note: function name is numberLooper








//Objective 2
let string = 'supercalifragilisticexpialidocious';
console.log(string);

//Add code here


/* 
	6. Debug the following code to allow the functions to properly receive and return the correct values and mimic the output.
		- Check syntax of the following code.
		- Check if value is returned.
		- Check the parameters and arguments.
        - Check the if else statements
        - Check the loop statements
        - Ensure no error in the console.
*/

function register(firstName,lastName,email,password,confirmPassword,mobileNum,address,city,country){

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

  if(typeof password !== "string" || password !== ""){
    return "Password must be a string and not empty";


  if(typeof confirmPassword !== "string" || confirmPassword === ""){
    return "Confirm password must be a string and not empty";
  }

  if(typeof mobileNum !== "string" || mobileNum === ""){
    "Mobile number must be a string and not empty";
  }

  //return message if mobileNum length is not equal to 11.
  if(mobileNum.length !== 11){
    return "Mobile number must be 11 digits long";
  }

  //return message if password and confirmPassword does not match
  if(password = confirmPassword){
    return "Password and confirm password must match";
  }

  console.log {

    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    mobileNum: mobileNo

  }
}

let newUser = register("Nayeon","Im","nayeonie@gmail.com","nayeonnie21","Nayeonnie21","+63251212401");
console.log(newUser);


//Do not modify
//For exporting to test.js
try{
    module.exports = {
      printOddNumbers: typeof printOddNumbers !== 'undefined' ? printOddNumbers : null,
      filterVowels: typeof filterVowels !== 'undefined' ? filterVowels : null,
      generateSalt: typeof generateSalt !== 'undefined' ? generateSalt : null,
      skipLetterAndStop: typeof skipLetterAndStop !== 'undefined' ? skipLetterAndStop : null,
      register: typeof register !== 'undefined' ? register : null,
    }
} catch(err){

}