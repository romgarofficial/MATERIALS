// [SECTION] Syntax, Statements and Comments

console.log("Hello World");

// Comments:
    // Comments are parts of the code that gets ignored by the language
    // Comments are meant to describe the written code

    /*
    There are two types of comments:
        1. The single-line comment denoted by two slashes
        2.The multi-line comment denoted by a slash and asterisk 
    */  

// [SECTION] Variables, Declarations, and Initialization


// Declaring Variables
let myVariable;
console.log(myVariable);

let hello;
console.log(hello);

// let hello;


//Best Practices in Naming Variables
//1. Descriptive
let firstName = "Michael"; // good variable name
console.log(firstName);
let pokemon = 25000; // bad variable name
console.log(pokemon);

//2. Start with a lowercase letter
let LastName = "Smith"; // bad variable name
console.log(LastName);
let lastName = "Smith"; // good variable name
console.log(lastName);

//3. Do not add spaces 
//let first name = "Mike";
//camelCase sample
let emailAddress = "mike@email.com";
console.log(emailAddress);
//Underscores sample
let product_description = "lorem ipsum";
console.log(product_description);
let product_id = "250000ea1000"
console.log(product_id); 

//4. Avoid using a variable with a reserved keyword.
// const let = "hello"; //SyntaxError: let is disallowed as a lexically bound name
// console.log(let);



// Declaring and initializing variables
let productName = 'desktop computer';
console.log(productName);

let productPrice = 18999;
console.log(productPrice);

const interest = 3.539;
console.log(interest)


// Reassigning variable values
productName = 'Laptop';
console.log(productName);

//let variable cannot be re-declared within its scope. So while this will work:
let friend = 'Kate';

//this will return an error
// let friend = 'Jane'; // error: Identifier 'friend' has already been declared


//while const cannot be updated or re-declared
// Values of constants cannot be changed and will simply return an error
//let's use the const that we declared earlier:
// interest = 4.489; //TypeError: Assignment to constant variable.


// Reassigning variables vs initializing variables

// Declares a variable first
let supplier;

// Initialization is done after the variable has been declared
supplier = "John Smith Tradings";
console.log(supplier);

// This is considered as reassignment because it's initial value was already declared
supplier = "Zuitt Store";
console.log(supplier);


//Can you declare a const variable without initialization? No. An error will occur.
//example:
    // const pi; //SyntaxError: Missing initializer in const declaration
    // pi=3.1416;
    // console.log(pi)



// [SECTION] Data Types

// 1. Boolean
let isMarried = false;
let inGoodConduct = true;
console.log("isMarried: " + isMarried);
console.log("isGoodConduct: " + inGoodConduct);

// 2. null
//null is use when you want to explicitly indicate that a variable has no value or is intentionally empty.
let spouse = null;
console.log(spouse);

// 3. undefined
let fullName;
console.log(fullName);

// 4. Number

//Integers/Whole Numbers
let myNumber = 0;
let headcount = 26;
console.log(headcount);

//Decimal Numbers/Fractions
let grade = 98.7;
console.log(grade);

// Exponential Notation
let planetDistance = 2e10;
console.log(planetDistance);

// 5. BigInt
const bigInteger = 9007199254740992n; //The n is used to explicitly denote that the number should be treated as a BigInt rather than a regular JavaScript number.

console.log(bigInteger);

// 6. String
let myString = '';
let country = 'Philippines';
let province = "Metro Manila"; 
console.log(country);
console.log(province);


// 7. Arrays
// similar data types
// Syntax
    // let/const arrayName = [elementA, elementB, elementC, ...]
let grades = [98.7, 92.1, 90.2, 94.6];
console.log(grades);

// different data types
// storing different data types inside an array is not recommended because it will not make sense to in the context of programming
let details = ["John", "Smith", 32, true];
console.log(details);




// 8. Objects
let person = {

    fullName: 'Juan Dela Cruz',
    age: 35,
    isMarried: false,
    contact: ["+63917 123 4567", "8123 4567"],
    address: {
        houseNumber: '345',
        city: 'Manila'
    }

}

console.log(person);

// They're also useful for creating abstract objects
let myGrades = {
    firstGrading: 98.7, 
    secondGrading: 92.1, 
    thirdGrading: 90.2, 
    fourthGrading: 94.6
}

console.log(myGrades);






