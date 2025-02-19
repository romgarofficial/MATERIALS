# JavaScript - Operators and Truth Tables

## Resources
Discussion Topic List:

- Arithmetic Operators
    - Addition Operator (+)
    - Subtraction Operator (-)
    - Multiplication Operator (*)
    - Division Operator (/)
- Assignment Operators
    - Basic Assignment Operator (=)
    - Addition Assignment Operator (+=)
    - Subtraction Assignment Operator (-=)
    - Multiple Operators and Parentheses
- Increment and Decrement
    - Increment Operator (++)
    - Decrement Operator (--)
- Type Coercion
- Comparison Operators
    - Equality Operator (==)
    - Inequality Operator (!=)
    - Strict Equality Operator (===)
    - Strict Inequality Operator (!==)
- Relational Operators
    - Greater Than Operator (>)
    - Greater Than or Equal To Operator (>=)
    - Less Than Operator (<)
    - Less Than or Equal To Operator (<=)
- Logical Operators
    - Logical AND Operator (&&)
    - Logical OR Operator (||)
    - Logical NOT Operator (!)

Research Topic list:
- Modulo Operator (%) 
- Multiplication Assignment Operator (*=)
- Division Assignment Operator (/=) 
- Modulus Assignment Operator (%=)

### References

- [Expressions and Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)
- [Arithmetic Operators](https://www.tutorialspoint.com/computer_programming/computer_programming_operators.htm)   
- [Increment Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment) 
- [Decrement Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Decrement) 
- [Type Coercion](https://developer.mozilla.org/en-US/docs/Glossary/Type_Conversion)   
- [Type Conversion](https://developer.mozilla.org/en-US/docs/Glossary/Type_Conversion)    
- [Equality Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality) 
- [Inequality Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Inequality) 
- [Strict Equality Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality) 
- [Relational Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparison_operators) 
- [Strict Inequality Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_inequality) 
- [Logical AND Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND)  
- [Logical OR Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)
- [Logical NOT Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT)
- [typeof Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
- [Boodle](https://boodle.zuitt.co/login/)
  
    
### Tools/Technologies Version
- N/A

## Code Discussion

### 1. Create an "index.html" file.

#### batchfolder > individual > s23 > discussion >  index.html
```html
 <!DOCTYPE HTML>
<html>
    <head>
        <title>JavaScript Operators and Truth Tables</title>
    </head>
    <body>
    </body>
</html>
```

### 2. Create an "index.js" file and to test if the script is properly linked to the HTML file.

#### batchfolder > individual > s23 > discussion >  index.js
```js
console.log("Hello World!");
```

### 3. Link the "index.js" script file to our HTML file.

#### batchfolder > individual > s23 > discussion >  index.html
```html
<!DOCTYPE HTML>
<html>
    <!-- ... -->
    <body>
        <script src="./index.js"></script>
    </body>
</html>
```

**Important Note:**
- The "script" tag is commonly placed at the bottom of the HTML file right before the closing "body" tag.
- The reason for this is because Javascript's main function in frontend development is to make our websites and applications interactive.
- In order to achieve this, JavaScript selects/targets specific HTML elements in our application and performs a certain output.
- It is added last to allow all HTML and CSS resources to load first before applying any JavaScript code to run.
- Placing the "script" tag at the top the the file might result in errors because since the HTML elements have not yet been loaded when the JavaScript loads, it does not have any valid HTML elements to target/select.


### 4. Add code to the "index.js" file to demonstrate and discuss Arithmetic Operators.

#### batchfolder > individual > s23 > discussion >  index.js

#### [SECTION] Arithmetic Operators
```js
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
```

#### [SECTION] Assignment Operators

```js
// Basic Assignment Operator (=)
// The assignment operator assigns the value of the **right** operand to a variable.
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

// The order of operations can be changed by adding parentheses to the logic */
let pemdas = 1 + (2 - 3) * (4 / 5);
/*
    - By adding parentheses "()", the order of operations are changed prioritizing operations inside the parentheses first then following the MDAS rule for the remaining operations
    - The operations were done in the following order:
        1. 4 / 5 = 0.8
        2. 2 - 3 = -1
        3. -1 * 0.8 = -0.8
        4. 1 + -.08 = .2
*/
console.log("Result of pemdas operation: " + pemdas);

pemdas = (1 + (2 - 3)) * (4 / 5);
/*
    - By adding parentheses "()" to create more complex computations will change the order of operations still following the same rule.
    - The operations were done in the following order:
        1. 4 / 5 = 0.8
        2. 2 - 3 = -1
        3. 1 + -1 = 0
        4. 0 * 0.8 = 0
*/
console.log("Result of pemdas operation: " + pemdas);
```

**Increment and Decrement**
```js
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
```

**Important Note:**
- Refer to "references" section of this file to find the documentations for Expressions and Operators, Arithmetic Operators, Increment Operator and Decrement Operator.


### 5. Add more code to demonstrate and discuss Type Coercion.

#### batchfolder > individual > s23 > discussion >  index.js

#### [SECTION] Type Coercion

```js
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

```

**Important Note:**
- Refer to "references" section of this file to find the documentations for Type Coercion and Type Conversion.
- The typeof operator is used to check the data type of a value/expression and returns a string value of what the data type is.


### 6. Add more code to demonstrate and discuss Comparison Operators.

#### batchfolder > individual > s23 > discussion >  index.js

#### [SECTION] Comparison Operators

```js
// Equality Operator (==)
/* 
    - Checks whether the operands are equal/have the same content
    - Attempts to CONVERT AND COMPARE operands of different data types
    - Returns a boolean value
*/

let juan = 'juan';//this will be used for the comparison operator

// Equality operator

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
```

#### [SECTION] Relational Operators

```js
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
console.log(b >= str);//false
//Since the string is not numeric, The string was converted to a number and it 
//resulted to NaN. 65 is not greater than NaN.
```

**Important Note:**
- Refer to "references" section of this file to find the documentations for equality, inequality, strict equality, strict inequality and relational operators.
- NaN - Not a Number - is the result of unsucessful conversion from String to number of an alphanumeric string. 


### 7. Add more code to demonstrate and discuss Logical Operators.

#### batchfolder > individual > s23 > discussion >  index.js

#### [SECTION] Logical Operators

```js
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
```

#### Instructor's Notes: Go back to slides to show the Logical Operators table. Then Explain the Truthy and Falsy values. That will be the end of the discussion.

**Important Note:**
- Refer to "references" section of this file to find the documentations for Logical AND Operator, Logical OR Operator and Logical NOT Operator.



## Activity

### Activity References
- [JavaScript Remainder Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)
- [JavaScript Multiplication Assignment Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication_assignment)
- [JavaScript Division Assignment Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division_assignment)
- [JavaScript Modulo/Remainder Assignment Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder_assignment)


### Activity Instructions
- Type of Activity:
    - Coding
    - Individual

- Note: Copy the code from activity-template.js into any code sharing platform so students can copy the template of the code for this activity.

#### Instructions
1. In the S23 folder, create an activity folder, an index.html file inside of it and link the index.js file.
2. Create an index.js file and console log the message Hello World to ensure that the script file is properly associated with the html file.
3. Copy the activity code from your Instructor. Paste the activity code to your index.js file.
4. Debug the following code to return the correct value and mimic the output. 
    - Check the value’s data type.
    - Check the if the operator used is correct.
5. Research about Modulo/Remainder Operator
    - Declare a variable named isDivisibleBySeven and initialize it to false.
    - Use the remainder assignment operator to check if the given number is divisible by 7.
    - Log the values of each variable to follow/mimic the output.
6. Research about Multiplication Assignment Operator
    - Use the multiplication assignment operator to multiply the product by 4.
    - Log the value of the total cost in the console to follow/mimic the output.
7. Research about Division Assignment Operator
    - Using the variable quotient,use the division assignment operator to divide the quotient by 3.
    - Log the value of the total cost in the console to follow/mimic the output.
8. Research about Modulo/Remainder Assignment Operator
    - Using the variable modulo,use the modulo assignment operator to get the remainder of the modulo by 3.
    - Log the value of the total cost in the console to follow/mimic the output.
9. Given the values in the code, calculate the total number of minutes in a year and save the result in a variable called resultMinutes.
    - Log the result in the console.
10. Given the values in the code, calculate and convert the temperature from celsius to fahrenheit and save the result in a variable called resultFahrenheit.
    - Log the value of the variable in the console.
11. Given the values in the code, identify if the values of the following variable are divisible by 8.
    - Use a modulo operator to identify the divisibility of the number to 8.
    - Save the result of the operation in an appropriately named variable.
    - Log the value of the remainder in the console.
    - Using the strict equality operator, check if the remainder is equal to 0. Save the returned value of the comparison in a variable called isDivisibleBy8.
    - Log a message in the console if the number is divisible by 8.
    - Log the value of isDivisibleBy8 in the console.
12. Given the values in the code, identify if the values of the following variable are divisible by 4.
    - Use a modulo operator to identify the divisibility of the number to 4.
    - Save the result of the operation in an appropriately named variable.
    - Log the value of the remainder in the console.
    - Using the strict equality operator, check if the remainder is equal to 0. 
    - Save the returned value of the comparison in a variable called isDivisibleBy4. 
    - Log a message in the console if the number is divisible by 4.
    - Log the value of isDivisibleBy4 in the console.
13. Given the values, calculate the average and identify if the average score is greater than 75.
    - Create a new variable called, "average".
    - Calculate the average of the group scores and save it in the average variable.
    - Log the value of average variable.
    - Create a new variable called isPassing.
    - Using a relational operator, display if the average score is greater than 75.
    - Log the value of the isPassing variable.
14. Add your changes.
15. Commit your changes with a concise, imperative statement describing the change. Example: "Added solution for the s23 activity".
16. Add the link in Boodle for s23.


#### Activity Solution:

- Activity Solution can be found in : [activity/index.js](./activity/index.js)

