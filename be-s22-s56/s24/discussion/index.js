//console.log("Hello World!");


//Functions
/*
Syntax:
	function functionName() {
		code block (statement)
	}
*/

//Example:
function sayHello() {
    console.log("Hello World!");
}
//function keyword
//sayHello() - function name
//{ console.log("Hello World!");) } - function block

//Calling Functions
//Let's invoke/call the functions that we declared.
sayHello();

//declaredFunction(); // - results in an error, much like variables, we cannot invoke a function we have yet to define. 

//Function Naming Conventions
//good practice
function getCourses() {
    let courses = ["Science 101","Math 101","English 101"];
	console.log(courses); 
}

getCourses();

//Displaying car information
function displayCarInfo(){
    console.log("Brand: Toyota");
	console.log("Type: Sedan");
	console.log("Price: 1,500,000");
}

displayCarInfo();

//Avoid generic names to avoid confusion within your code. For example:
function get() {
    let name = "Dahyun"
    console.log(name);
}

get();

//Avoid pointless and inappropriate function names.
function foo(){
    console.log(25%5);
}

foo();


//Function expression with a function name.
let funcExpression = function funcName() {
    console.log("Hello From The Other Side")
}

funcExpression();

////Anonymous function - a function expression without a name.
let variableFunction = function() {
    console.log("Hello Again!");
};

variableFunction();


//Function Declaration vs. Function Expression
//Syntax
function declaredFunction(){
    console.log("Hello World from declaredFunction()");
}

declaredFunction();


//Hoisting 
//using expression
variableHoisting();

// let variableHoisting = function() {
//     console.log("Hello Again from variableHoisting!");
// };

function variableHoisting() {
    console.log("Hello Again from variableHoisting!");
}

//Reassigning to a new function expression
declaredFunction = function(){
    console.log("Updated declaredFunction");
}

declaredFunction();

variableHoisting = function(){
    console.log("Updated variableHoisting");
}

variableHoisting();

//However, we cannot re-assign a function expression initialized with const.

const constantFunc = function(){
    console.log("Initialized with const!");
}

constantFunc();

// constantFunc = function(){
//     console.log("Cannot be re-assigned!")
// }

// constantFunc(); 


// Global Scope
const globalVariable = "I'm a global variable";

function globalFunction() {
    console.log(globalVariable); // Accessible within the function
}

globalFunction(); // Output: "I'm a global variable"
console.log(globalVariable); // Also accessible outside the function


// Local Scope: Function Scope
function localFunction() {
    const localVariable = "I'm a local variable";
    console.log(localVariable); // Output: "I'm a local variable"
}

localFunction(); // Invoking the function
// console.log(localVariable); // Throws an error - localVariable is not defined outside the function


// Local Scope: Block Scope
{
    const blockVariable = "I'm a block-scoped variable";
    console.log(blockVariable); // Output: "I'm a block-scoped variable"
}

// console.log(blockVariable); // Throws an error - blockVariable is not defined outside the block


//Return Statement
function returnFullName() {

    return "Jeffrey" + ' ' + "Smith" + ' ' + "Bezos";
    console.log("This message will not be printed.");
}

let fullname = returnFullName();
console.log(fullname);

console.log(returnFullName());



// function returnFullAddress(){

//     let fullAddress = {

//         street: "#44 Maharlika St.",
//         city: "Cainta",
//         province: "Rizal",
    
//     };

//     return fullAddress;

// }

// let myAddress = returnAddress();
// console.log(myAddress);

function printPlayerInfo(){

    console.log("Username: " + "white_knight");
    console.log("Level: " + 95);
    console.log("Job: " + "Paladin");

};

let user1 = printPlayerInfo();
console.log(user1);


function returnSumOf5and10(){
    return 5 + 10
}

let sumOf5And10 = returnSumOf5and10();
console.log(sumOf5And10);

let total = 100 + returnSumOf5and10();
console.log(total);


//Simulates getting an array of user names from a database
function getGuildMembers(){

    return ["white_knight","healer2000","masterThief100","andrewthehero","ladylady99"]

}

console.log(getGuildMembers());