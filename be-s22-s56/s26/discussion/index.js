//What are conditional statements?

//Conditional statements allow us to control the flow of our program. It allows us to run a statement/instruction if a condition is met or run another separate instruction if otherwise.

// [SECTION] if, else if and else Statement

let numA = -1;

// if Statement
// Executes a stement if a specified condition is true 

if(numA < 0) {
    console.log('Hello');
}

/*
    Syntax:

    if(condition){
        statement
    }

*/

//The result of the expression added in the if's condition must result to true, else, the statement inside if() will not run.

//You can also check the condition. The expression results to a boolean true because of the use of the less than operator.
console.log(numA < 0)//results to true and so, the if statement was run.

//Let's update the variable and run an if statement with the same condition:
numA = 0

if(numA < 0){
    console.log('Hello again if numA is 0!')
}

//It will not run because the expression now results to false:
console.log(numA < 0)

//Let's take a look at another example:
let city = "New York"

if(city === "New York"){
    console.log("Welcome to New York City!");
}


// else if Clause
/* 
    - Executes a statement if previous conditions are false and if the specified condition is true
    - The "else if" clause is optional and can be added to capture additional conditions to change the flow of a program

*/


let numH = 1;

if(numA < 0) {
    console.log('Hello');
} else if (numH > 0) {
    console.log('World');
}



//We were able to run the else if() statement after we evaluated that the if condition was failed.

//If the if() condition was passed and run, we will no longer evaluate to else if() and end the process there.

numA = 1

if(numA > 0) {
    console.log('Hello');
} else if (numH > 0) {
    console.log('World');
}

//else if() statement was no longer run because the if statement was able to run, the evaluation of the whole statement stops there.

//Let's update the city variable and look at another example:
city = "Tokyo"

if(city === "New York"){
    console.log("Welcome to New York City!")
} else if(city === "Tokyo"){
    console.log("Welcome to Tokyo, Japan!")
}

//Since we failed the condition for the first if(), we went to the else if() and checked and instead passed that condition.

// else Statement
/* 
    - Executes a statement if all other conditions are false
    - The "else" statement is optional and can be added to capture any other result to change the flow of a program
*/

if(numA > 0) {
    console.log('Hello');
} else if (numH === 0) {
    console.log('World');
} else {
    console.log('Again');
}

/*
    Since both the preceding if and else if conditions failed, the else statement was run instead.

    Else statements should only be added if there is a preceding if condition. else statements by itself will not work, however, if statements will work even if there is no else statement.
*/

/*

else {
    console.log("Will not run without an if");
}

*/

//In fact, it results to an error.

/*
else if (numH === 0) {
    console.log('World');
} else {
    console.log('Again');
}*/


//Same goes for an else if, there should be a preceding if() first.



// if, else if and else Statements with functions
/*
    - Most of the times we would like to use if, else if and else statements with functions to control the flow of our application
    - By including them inside functions, we can decide when certain conditions will be checked instead of executing statements when the JavaScript loads
    - The "return" statement can be utilized with conditional statements in combination with functions to change values to be used for other features of our application
*/

let message = 'No message.';
console.log(message);

function determineTyphoonIntensity(windSpeed) {

    if (windSpeed < 30) {
        return 'Not a typhoon yet.';
    } 
    else if (windSpeed <= 61) {
        return 'Tropical depression detected.';
    }
    else if (windSpeed >= 62 && windSpeed <= 88) { // && means AND operator
        return 'Tropical storm detected.';
    }
    else if (windSpeed >= 89 || windSpeed <= 117) { // || means OR operator
        return 'Severe tropical storm detected.';
    }
    else {
        return 'Typhoon detected.';
    }

}

// Returns the string to the variable "message" that invoked it 
message = determineTyphoonIntensity(110);
console.log(message);

/* 
    - We can further control the flow of our program based on conditions and changing variables and results
    - The initial value of "message" was "No message."
    - Due to the conditional statements created in the function, we were able to reassign it's value and use it's new value to print a different output
    - console.warn() is a good way to print warnings in our console that could help us developers act on certain output within our code
*/
if (message == 'Tropical storm detected.') {
    console.warn(message);
}

// [SECTION] Truthy and Falsy
/* 
    - In JavaScript a "truthy" value is a value that is considered true when encountered in a Boolean context
    - Values are considered true unless defined otherwise
    - Falsy values/exceptions for truthy:
        1. false
        2. 0
        3. -0
        4. ""
        5. null
        6. undefined
        7. NaN
*/

// Truthy Examples
/* 
    - If the result of an expression in a condition results to a truthy value, the condition returns true and the corresponding statements are executed
    - Expressions are any unit of code that can be evaluated to a value
*/ 
if (true) { 
    console.log('Truthy');
}

if (1) { 
    console.log('Truthy');
}

if ([]) { 
    console.log('Truthy');
}

// Falsy Examples
if (false) { 
    console.log('Falsy');
}

if (0) { 
    console.log('Falsy');
}

if (undefined) { 
    console.log('Falsy');
}

// [SECTION] Conditional (Ternary) Operator
/* 
    - The Conditional (Ternary) Operator takes in three operands:
        1. condition
        2. expression to execute if the condition is truthy
        3. expression to execute if the condition is falsy
    - Can be used as an alternative to an "if else" statement
    - Ternary operators have an implicit "return" statement meaning that without the "return" keyword, the resulting expressions can be stored in a variable
    - Commonly used for single statement execution where the result consists of only one line of code
    - For multiple lines of code/code blocks, a function may be defined then used in a ternary operator
    - Syntax
        (expression) ? ifTrue : ifFalse;
*/

// Single statement execution
let ternaryResult = (1 < 18) ? true : false;
console.log("Result of Ternary Operator: " + ternaryResult)

// Multiple statement execution
/* Both functions perform two separate tasks which changes the value of the "name" variable and returns the result storing it in the "legalAge" variable */
let name;

function isOfLegalAge() {
    name = 'John';
    return 'You are of the legal age limit';
}

function isUnderAge() {
    name = 'Jane';
    return 'You are under the age limit';
}

/* 
    - The "prompt" function creates a pop-up message in the browser that can be used to gather user input
    - Input received from the prompt function is returned as a string data type
    - The "parseInt" function converts the input received into a number data type
    - Pressing on the "cancel" button on a prompt will return a value of "null"
    - Converting null to an integer/number will result to a NaN (Not a Number) value
    - This can be useful for instances where a frontend application has not yet been created and can be used to test varying data
*/
let age = parseInt(prompt("What is your age?"));
console.log(age);
let legalAge = (age > 18) ? isOfLegalAge() : isUnderAge();
console.log("Result of Ternary Operator in functions: " + legalAge + ', ' + name);

// [SECTION] Try-Catch-Finally Statement
/*
    - "try catch" statements are commonly used for error handling
    - There are instances when the application returns an error/warning that is not necessarily an error in the context of our code
    - These errors are a result of an attempt of the programming language to help developers in creating efficient code
    - They are used to specify a response whenever an exception/error is received
    - It is also useful for debugging code because of the "error" object that can be "caught" when using the try catch statement
    - In most programming languages, an "error" object is used to provide detailed information about an error and which also provides access to functions that can be used to handle/resolve errors to create "exceptions" within our code
    - The "finally" block is used to specify a response/action that is used to handle/resolve errors
*/

function showIntensityAlert(windSpeed) {
    try {

        alerat(determineTyphoonIntensity(windSpeed));

    // error/err are commonly used variable names used by developers for storing errors
    } catch (error) {

        // The "typeof" operator is used to check the data type of a value/expression and returns a string value of what the data type is
        console.log(typeof error);

        // Catch errors within 'try' statement
        // In this case the error is an unknown function 'alerat' which does not exist in Javascript
        // The "alert" function is used similarly to a prompt to alert the user
        // "error.message" is used to access the information relating to an error object
        console.warn(error.message);

    } finally {

        // Continue execution of code regardless of success and failure of code execution in the 'try' block to handle/resolve errors
        alert('Intensity updates will show new alert.');

    }
}

showIntensityAlert(56);
