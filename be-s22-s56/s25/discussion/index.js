// console.log("Hello World!"); 

function printInput(){

	let nickname = prompt("Enter your nickname:");
	console.log("Hi, " + nickname);

}

printInput();

/*
[Section] Functions and Parameters
- We can directly pass data into the function. The function can then call/use that data which is referred as "name" within the function.
- A "parameter" acts as a named variable/container that exists only inside of a function
- It is used to store information that is provided to a function when it is called/invoked.
Syntax:
    function functionName(parameter){
        // code to be executed
    }
*/

function printName(name){

	console.log("My name is " + name);

};

/*
[Section] Invoking functions and arguments
- "Juana", "John" and "Jane" are information/data provided directly into the function, they are called arguments.
- Values passed when invoking a function are called arguments. These arguments are then stored as the parameters within the function.
- Arguments are called for data passed to a function during invocation.
- In the example below that happens is as follows:
    - printName function will be invoked and "Juana" will be stored as the value of the parameter "name"
    - Once the printName function is complete, it is called again and the printName function will be invoked and "John" will be stored as the value of the parameter "name"
    - Lastly, it is called again and the printName function will be invoked and "John" will be stored as the value of the parameter "name"
*/
printName("Juana");

printName("John");

printName("Jane");

/*
[Section] Variables as Arguments
- Variables can also be used as arguments to be able to pass dynamic data used within JavaScript as a result of other operations in the code.
- This allows for code reusability, compared to hard coded values where the information doesn't change allowing functions to perform tasks using different inputs.
*/

let sampleVariable = "Yui";
printName(sampleVariable);

function checkDivisibilityBy8(num){
	let remainder = num % 8;
	console.log("The remainder of " + num + " divided by 8 is: " + remainder);
	let isDivisibleBy8 = remainder === 0;
	console.log("Is " + num + " divisible by 8?");
	console.log(isDivisibleBy8);
}

checkDivisibilityBy8(64);
checkDivisibilityBy8(28);

/*
[Section] Functions as arguments
- Function parameters can also accept other functions as arguments
- Some complex functions use other functions as arguments to perform more complicated results.
- This will be further seen when we discuss array methods.
*/

function argumentFunction(){
    console.log("This function was passed as an argument before the message was printed.")
}

function invokeFunction(argumentFunction){
    argumentFunction();
}

invokeFunction(argumentFunction)

console.log(argumentFunction)

/*
[Section] Multiple Parameters
- In JavaScript, providing more/less arguments than the expected parameters will not return an error.
- Providing less arguments than the expected parameters will automatically assign an undefined value to the parameter.
- In other programming languages, this will return an error stating that "the expected number of arguments do not match the number of parameters".
- Parameter names are just names to refer to the argument. Even if we change the name of the parameters, the arguments will be received in the same order it was passed.
*/

// - "Juan" will be stored in the parameter "firstName".
// - "Dela" will be stored in the parameter "middleName".
// - "Cruz" will be stored in the parameter "lastName".
function createFullName(firstName, middleName, lastName) {

    console.log(firstName + ' ' + middleName + ' ' + lastName);

}

createFullName('Juan', 'Dela', 'Cruz');
createFullName('Jane', 'Dela', 'Cruz', 'Hello');

// Using variables as arguments
let firstName = "John";
let middleName = "Doe";
let lastName = "Smith";

createFullName(firstName, middleName, lastName);

/*
[Section] Argument and Parameter Order
- The order of the argument is the same to the order of the parameters. The first argument will be stored in the first parameter, second argument will be stored in the second parameter and so on.
- results to "Dela Juan Cruz" because "Juan" was received as middleName, "Dela" was received as firstName.
*/

createFullName(firstName, middleName, lastName);

function printFullName(middleName,firstName,lastName){

	console.log(firstName + ' ' + middleName + ' ' + lastName);

}

printFullName('Juan', 'Dela', 'Cruz');