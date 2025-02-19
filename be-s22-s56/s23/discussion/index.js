console.log("Hello World!");

//Arithmetic Operators
let x = 1397;
let y = 7831;

let sum = x + y;
console.log("Result of addition operator: " + sum);

let difference = x - y;
console.log("Result of subtraction operator: " + difference);

let product = x * y;
console.log("Result of multiplication operator: " + product);

let quotient = x / y;
console.log("Result of division operator: " + quotient);

//Assignment Operators

// Basic Assignment Operator (=)
// The assignment operator adds the value of the right operand to a variable and assigns the result to the variable 
let assignmentNumber = 8;

// Addition Assignment Operator (+=)
// The addition assignment operator adds the value of the right operand to a variable and assigns the result to the variable. 

assignmentNumber = assignmentNumber + 2; 
console.log("Result of addition assignment operator: " + assignmentNumber);

// Shorthand for assignmentNumber = assignmentNumber + 2 
assignmentNumber += 2; 
console.log("Result of addition assignment operator: " + assignmentNumber);

// Subtraction/Multiplication/Division Assignment Operator (-=, *=, /=)
assignmentNumber -= 2; 
console.log("Result of subtraction assignment operator: " + assignmentNumber);



// Multiple Operators and Parentheses
/*
    - When multiple operators are applied in a single statement, it follows the PEMDAS (Parenthesis, Exponents, Multiplication, Division, Addition and Subtraction) rule
    - The operations were done in the following order:
        1. 3 * 4 = 12
        2. 12 / 5 = 2.4
        3. 1 + 2 = 3
        4. 3 - 2.4 = 0.6
*/
let mdas = 1 + 2 - 3 * 4 / 5;
console.log("Result of mdas operation: " + mdas);



// Increment and Decrement
// Operators that add or subtract values by 1 and reassigns the value of the variable where the increment/decrement was applied to 
let z = 1;

// The value of "z" is added by a value of one before returning the value and storing it in the variable "increment" 
let increment = ++z;
console.log("Result of pre-increment: " + increment);
// The value of "z" was also increased even though we didn't implicitly specify any value reassignment
console.log("Result of pre-increment: " + z);

// The value of "z" is returned and stored in the variable "increment" then the value of "z" is increased by one 
increment = z++;
// The value of "z" is at 2 before it was incremented 
console.log("Result of post-increment: " + increment);
/* The value of "z" was increased again reassigning the value to 3 */
console.log("Result of post-increment: " + z);

// The value of "z" is decreased by a value of one before returning the value and storing it in the variable "increment" 
let decrement = --z;
// The value of "z" is at 3 before it was decremented 
console.log("Result of pre-decrement: " + decrement);
// The value of "z" was decreased reassigning the value to 2 
console.log("Result of pre-decrement: " + z);

// The value of "z" is returned and stored in the variable "increment" then the value of "z" is decreased by one 
decrement = z--;
// The value of "z" is at 2 before it was decremented 
console.log("Result of post-decrement: " + decrement);
// The value of "z" was decreased reassigning the value to 1 
console.log("Result of post-decrement: " + z);


//Type Coercion
/*
    - Type coercion is the automatic or implicit conversion of values from one data type to another
    - This happens when operations are performed on different data types that would normally not be possible and yield irregular results
    - Values are automatically converted from one data type to another in order to resolve operations
*/

let numA = '10';
let numB = 12;

/* 
    - Adding/concatenating a string and a number will result is a string
    - This can be proven in the console by looking at the color of the text displayed
    - Black text means that the output returned is a string data type
*/
let coercion = numA + numB;
console.log(coercion);
console.log(typeof coercion);

let numC = 16;
let numD = 14;

/* 
    - The result is a number
    - This can be proven in the console by looking at the color of the text displayed
    - Blue text means that the output returned is a number data type
*/
let nonCoercion = numC + numD;
console.log(nonCoercion);
console.log(typeof nonCoercion);

/* 
    - The result is a number
    - The boolean "true" is also associated with the value of 1
*/
let numE = true + 1;
console.log(numE);

/* 
    - The result is a number
    - The boolean "false" is also associated with the value of 0
*/
let numF = false + 1;
console.log(numF);


// Equality Operator (==)
/* 
    - Checks whether the operands are equal/have the same content
    - Attempts to CONVERT AND COMPARE operands of different data types
    - Returns a boolean value
*/
let juan = 'juan';


console.log(1 == 1);
console.log(1 == 2);
console.log(1 == '1');
console.log(0 == false);
//Compares two strings that are the same 
console.log('juan' == 'juan');
//Compares a string with the variable "juan" declared above 
console.log('juan' == juan);

// Inequality operator
/* 
    - Checks whether the operands are not equal/have different content
    - Attempts to CONVERT AND COMPARE operands of different data types
*/

console.log(1 != 1);
console.log(1 != 2);
console.log(1 != '1');
console.log(0 != false);
console.log('juan' != 'juan');
console.log('juan' != juan);

// Strict Equality operator
/* 
    - Checks whether the operands are equal/have the same content
    - Also COMPARES the data types of 2 values
    - JavaScript is a loosely typed language meaning that values of different data types can be stored in variables
    - In combination with type coercion, this sometimes creates problems within our code (e.g. Java, Typescript)
    - Some programming languages require the developers to explicitly define the data type stored in variables to prevent this from happening
    - Strict equality operators are better to use in most cases to ensure that data types provided are correct
*/

console.log(1 === 1);
console.log(1 === 2);
console.log(1 === '1');
console.log(0 === false);
console.log('juan' === 'juan');
console.log('juan' === juan);

// Strict Inequality operator.
/* 
    - Checks whether the operands are not equal/have the same content
    - Also COMPARES the data types of 2 values
*/
console.log(1 !== 1);
console.log(1 !== 2);
console.log(1 !== '1');
console.log(0 !== false);
console.log('juan' !== 'juan');
console.log('juan' !== juan);

//Relational Operators

//Some comparison operators check whether one value is greater or less than to the other value.

let a = 50;
let b = 65;

//GT or Greater Than operator ( > )
let isGreaterThan = a > b;
//LT or Less Than operator ( < )
let isLessThan = a < b;
//GTE or Greater Than Or Equal operator ( >= ) 
let isGTorEqual = a >= b;
//LTE or Less Than Or Equal operator ( <= ) 
let isLTorEqual = a <= b;

//Like our equality comparison operators, relational operators also return boolean which we can save in a variable or use in a conditional statement.
console.log(isGreaterThan);
console.log(isLessThan);
console.log(isGTorEqual);
console.log(isLTorEqual)

let numStr = "30";
console.log(a > numStr);//true - forced coercion to change the string to a number.
console.log(b <= numStr);//false 65 is not less than or equal to 30.

let str = "twenty";
console.log(b >= str);
//false
//Since the string is not numeric, The string was converted to a number and it 
//resulted to NaN. 65 is not greater than NaN.


//Logical Operators

let isLegalAge = true;
let isRegistered = false;

// Logical And Operator (&& - Double Ampersand)
// Returns true if all operands are true 
let allRequirementsMet = isLegalAge && isRegistered;
console.log("Result of logical AND Operator: " + allRequirementsMet);

// Logical Or Operator (|| - Double Pipe)
// Returns true if one of the operands are true 
let someRequirementsMet = isLegalAge || isRegistered;
console.log("Result of logical OR Operator: " + someRequirementsMet);

// Logical Not Operator (! - Exclamation Point)
// Returns the opposite value 
let someRequirementsNotMet = !isRegistered;
console.log("Result of logical NOT Operator: " + someRequirementsNotMet);
