# JavaScript - Basic Functions

## Resources

Topic List
- Functions
- Declaration
- Function Invocation/Calling Functions
- Function Naming Conventions
- Expression
- Function Declaration vs Function Expression
- Understanding Scope in JavaScript
    - Global Scope
    - Block/local/Module Scope
    - Function Scope
- Return Statements 
- Console.log vs Return Statement

### References
- [JavaScript Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [JavaScript Declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#function_declarations)
- [Calling Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#calling_functions)
- [Function Naming Conventions](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript#functions)
- [Function Expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#function_expressions)
- [Scope in JavaScript](https://developer.mozilla.org/en-US/docs/Glossary/Scope)
- [Funciton Scope](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#function_scope)
- [Return Statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)
    
### Tools/Technologies Version
- N/A

## Code Discussion

### 1. Create an "index.html" file.
#### batchfolder > individual > s24 > discussion > index.html
```html
<!DOCTYPE HTML>
<html>
    <head>
        <title>JavaScript - Basic Functions</title>
    </head>
    <body>
    </body>
</html>
```

### 2. Create an "index.js" file and to test if the script is properly linked to the HTML file.

#### batchfolder > individual > s24 > discussion > index.js
```js
console.log("Hello World!");
```

### 3. Link the "index.js" script file to our HTML file.
#### batchfolder > individual > s24 > discussion > index.html
```html
<!DOCTYPE HTML>
<html>
    <!-- ... -->
    <body>
        <script src="./index.js"></script>
    </body>
</html>
```

### 4. Link the "index.js" script file to our HTML file.
#### batchfolder > individual > s24 > discussion > index.js

### [SECTION] Functions
- Functions in javascript are lines/blocks of codes that tell our device/application to perform a certain task when called/invoked
- Functions are mostly created to create complicated tasks to run several lines of code in succession
- They are also used to prevent repeating lines/blocks of codes that perform the same task/function

#### [SECTION] Function Declarations
- A function definition (also called a function declaration, or function statement) consists of the function keyword.
```js
/*
Syntax:
    function functionName() {
        code block (statement)
    }
*/
```

1. **function** keyword - used to define a javascript functions
2. **functionName()** - The name of the function. Functions are named to be able to call (or invoke) them later in the code. The parenthesis are used to pass arguments (if any) to the function and execute its code.
3. function block **{}** - the statements which comprise the body of the function. This is where the code to be executed.

```js
//Example:
function sayHello() {
    console.log("Hello World!");
}
//function keyword
//sayHello() - function name
//{ console.log("Hello World!");) } - function block
```

**Defining a function does not execute it. It must be invoked (called) to specifies what to do when the function is called.**

#### [SECTION] Function Invocation/Calling Function
- The code block and statements inside a function is not immediately executed when the function is defined. The code block and statements inside a function is executed when the function is invoked or called.
- It is common to use the term "call a function" instead of "invoke a function".

```js
//Let's invoke/call the functions that we declared.
printName();

//declaredFunction(); // - results in an error, much like variables, we cannot invoke a function we have yet to define. 
```

*How do we name the function?*

#### [SECTION] Function Naming Conventions
- JavaScript function names are also case-sensitive. So, similar to variables, the camelCase approach is the recommended way to declare function names.
- Function names should be definitive of the task it will perform. It usually contains a descriptive nouns and verbs as prefixes.
- For example, if we declare a function to retrieve a courses the function should be getCourses:
```js
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
```

- Avoid generic names to avoid confusion within your code. For example:
```js
function get() {
    let name = "Dahyun"
    console.log(name);
}

get();
```

- Avoid pointless and inappropriate function names.
```js
function foo(){
    console.log(25%5);
}

foo();
```

#### [SECTION] Function Expression
- We use the function keyword and specify a name for the function declaration.
- But a function can also be stored in a variable. This is called a **function expression**.
- A function expression is a function that is created as part of an expression, typically by being assigned to a variable. It can be either named or anonymous.
```js

//Function expression with a function name.
let funcExpression = function funcName() {
    console.log("Hello From The Other Side")
}

funcExpression();
```
- The function expression is assigned to a variable named variableFunction using the assignment operator =.
- The fact that the function has a name (funcName) inside the function expression doesn't affect how it's invoked. The function is still invoked using the variable name (funcExpression) followed by parentheses.

```js
//Anonymous function - a function without a name.
let variableFunction = function() {
    console.log("Hello Again!");
};

variableFunction();
```
- In this code, variableFunction is assigned a function expression. This function expression is anonymous because it doesn't have a name.
- This anonymous function doesn't have a name, but it can still be assigned to a variable (variableFunction in this case) and invoked like any other function.


#### [SECTION] Function Declaration vs. Function Expression
*So what's the difference between these ways of creating functions and why does it matter?*
**It matters because in JavaScript, there are multiple ways to create functions. Each method has its own syntax and behavior, and depending on the specific use case, one may be preferred over the other.**

- One of the difference is the function syntax.
    - Function declaration use the **function** keyword followed by the function name, followed by parentheses. 
    - Declared functions are not executed immediately. They are "saved for later use", and will be executed later, when they are invoked (called upon).
```js
//Function Declaration vs. Function Expression
//Syntax
function declaredFunction(){
    console.log("Hello World from declaredFunction()");
}

declaredFunction();
```
- Function expression is assigned thru variable and Can be named or anonymous just like the sample code above.

- Second, is the function **hoisting**. What is hoisting?
    - Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
- Compared to Function Declaration, Function Expression is not hoisted.
- Let's have an example:
```js
//Hoisting
//Hoisting 
//using expression
variableHoisting();
//This will result in an error.
//Uncaught ReferenceError: Cannot access 'variableFunction' before initialization
//When using the function expression, it must be defined before they are called.

let variableHoisting = function() {
    console.log("Hello Again from variableHoisting!");
};
```

- Using the Function Declaration:
```js
variableHoisting();
//This is what we called hoisted, in function declaration, we can call the function before it is defined.

// let variableHoisting = function() {
//     console.log("Hello Again from variableHoisting!");
// };

function variableHoisting() {
    console.log("Hello Again from variableHoisting!");
}
```
- Hoisted to the top of their scope during the execution phase. Can be called before they are defined.

- You can reassign a declared function/function expression to new function expression.
- In JavaScript, you cannot directly reassign a function declaration to a new function declaration. However, you can change the behavior of a function during the program's execution by assigning new function expressions or objects to the same variable or identifier that was originally used to define the function,
- For Example:
```js
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

constantFunc = function(){
    console.log("Cannot be re-assigned!")
}

constantFunc(); // Uncaught TypeError: Assignment to constant variable.
```

#### [SECTION] Understanding Scope in JavaScript
- Scope determines the accessibility and visibility of variables in JavaScript. It's like the boundaries that define where in your code variables can be used and accessed.
- Types of scope in JavaScript:
Types of Scope

1. **Global Scope:** - Think of global scope as the entire city of JavaScript. Variables declared outside of any function, using `let` or `const`, are in the global scope. **They're accessible from anywhere in your code**, just like landmarks visible throughout the city. However, it's essential to be cautious with global variables to avoid unintentional conflicts and side effects.
```JS
// Global Scope
const globalVariable = "I'm a global variable";

function globalFunction() {
    console.log(globalVariable); // Accessible within the function
}

globalFunction(); // Output: "I'm a global variable"
console.log(globalVariable); // Also accessible outside the function
```

2. **Local Scope:** - There are two types of local scope: function scope and block scope.
    - **Function Scope:** Within the city, each function creates its own barangay with its rules. Variables declared inside a function using let or const are scoped to that function. They can't be accessed from outside the function, similar to how the contents of a house are private to its residents.
    ```js
    // Local Scope: Function Scope
    function localFunction() {
        const localVariable = "I'm a local variable";
        console.log(localVariable); // Output: "I'm a local variable"
    }

    localFunction(); // Invoking the function
    console.log(localVariable); // Throws an error - localVariable is not defined outside the function
    ```

    - **Block Scope:** Imagine each code block ({ }) as a neighborhood park. Variables declared with let or const inside these blocks are scoped to that specific block. They're only accessible within that block, just as activities within a park are limited to those within its boundaries.
    ```js
    // Local Scope: Block Scope
    {
        const blockVariable = "I'm a block-scoped variable";
        console.log(blockVariable); // Output: "I'm a block-scoped variable"
    }

    // console.log(blockVariable); // Throws an error - blockVariable is not defined outside the block
    ```

### Return Statement

- The "return" statement allows us to output a value from a function to be passed to the line/block of code that invoked/called the function.

- returnUserName() is a function that is able to return a value which can then be saved in a variable.

```js
//Return Statement
function returnFullName() {

    return "Jeffrey" + ' ' + "Smith" + ' ' + "Bezos";
    console.log("This message will not be printed.");
}
```

- In our example, the "returnFullName" function was invoked/called in the same line as declaring a variable.
Whatever value is returned from the "returnFullName" function can be stored in a variable.

```js
let fullname = returnFullName();
console.log(fullname);
```

- This way, a function is able to return a value we can further use/manipulate in our program instead of only printing/displaying it in the console.

- Notice that the console.log() after the return is no longer printed in the console that is because ideally any line/block of code that comes after the return statement is ignored because it ends the function execution.

- In this example, console.log() will print the returned value of the returnFullName() function.

```js
console.log(returnFullName());
```
- You can also create a variable inside the function to contain the result and return that variable instead. You can do this for ease of use or for readability.

```js
function returnFullAddress(){

    let fullAddress = {

        street: "#44 Maharlika St.",
        city: "Cainta",
        province: "Rizal",
    
    };

    return fullAddress;

}

let myAddress = returnAddress();
console.log(myAddress);
```

- On the other hand, when a function the only has console.log() to display its result it will return undefined instead:

```js
function printPlayerInfo(){

    console.log("Username: " + "white_knight");
    console.log("Level: " + 95);
    console.log("Job: " + "Paladin");

};

let user1 = printPlayerInfo();
console.log(user1);
```

- The variable user1 returns undefined because printPlayerInfo returns nothing. It only displays the details in the console. 
You cannot save any value from printPlayerInfo() because it does not return anything.

You can return almost any data types from a function.

```js
    
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

```

#### Why Use Return?

Functions not only allow us to repeat a piece of code and display it, it can also allow us to process data and return that processed data to be further used in our program.

Unlike just using a console.log() which only displays data in the console, The return statement allows us to return data from a function which can save in a variable and further use in our program. 

Console logs are preferred to be used only for debugging but for getting or retrieving data from a source, it is preferred to use return so that we can further use this data in our program.


## Activity

### Activity References
- [JavaScript Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [JavaScript Declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#function_declarations)
- [Calling Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#calling_functions)
- [Function Naming Conventions](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript#functions)
- [Function Expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#function_expressions)
- [Scope in JavaScript](https://developer.mozilla.org/en-US/docs/Glossary/Scope)
- [Funciton Scope](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#function_scope)
- [Return Statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)

### Activity Instructions
- Type of Activity:
    - Coding
    - Individual

- Note: Copy the code from activity-template.js into any code sharing platform so students can copy the template of the code for this activity.

#### Instructions
1. In the S24 folder, create an activity folder, an index.html file inside of it and link the index.js file.
2. Create an index.js file and console log the message Hello World to ensure that the script file is properly associated with the html file.
3. Copy the activity code from your Instructor. Paste the activity code to your index.js file.
4. Create a function named getUserInfo which is able to return an object. 

    The object returned should have the following properties:
    
    - key - data type

    - name - String
    - age -  Number
    - address - String
    - isMarried - Boolean
    - petName - String

    Note: Property names given is required and should not be changed.

    To check, create a variable to save the value returned by the function.
    Then log the variable in the console.

    You can also invoke the function in the console to view the returned value of the function.

    Note: This is optional.
5. Create a function named getArtistsArray which is able to return an array with at least 5 names of your favorite bands or artists.
		
    - Note: the array returned should have at least 5 elements as strings.
            function name given is required and cannot be changed.


    To check, create a variable to save the value returned by the function.
    Then log the variable in the console.

    You can also invoke the function in the console to view the returned value of the function.

    Note: This is optional.


6. Create a function named getSongsArray which is able to return an array with at least 5 titles of your favorite songs.

    - Note: the array returned should have at least 5 elements as strings.
            function name given is required and cannot be changed.

    To check, create a variable to save the value returned by the function.
    Then log the variable in the console.

    You can also invoke the function in the console to view the returned value of the function.

    Note: This is optional.
    
7. Create a function named getMoviesArray which is able to return an array with at least 5 titles of your favorite movies.

		- Note: the array returned should have at least 5 elements as strings.
		        function name given is required and cannot be changed.

		To check, create a variable to save the value returned by the function.
		Then log the variable in the console.

		You can also invoke the function in the console to view the returned value of the function.

		Note: This is optional.

8. Create a function named getPrimeNumberArray which is able to return an array with at least 5 prime numbers.

			- Note: the array returned should have numbers only.
			        function name given is required and cannot be changed.

			To check, create a variable to save the value returned by the function.
			Then log the variable in the console.

			You can also invoke the function in the console to view the returned value of the function.

			Note: This is optional.

9. Explore and understand the concept of scope in JavaScript through a series of coding challenges. Use your knowledge of scope to correctly declare and access variables within different scopes.
    - Declare a global variable named globalTreasure and assign it with a string "Golden Key".
	- Write a function named seekGlobalTreasure that returns the value of a text: "Global Treasure Found:" and globalTreasure to the console.
	- Call seekGlobalTreasure to discover the global treasure.

10. Explore and understand the concept of scope in JavaScript through a series of coding challenges. Use your knowledge of scope to correctly declare and access variables within different scopes.
    - Inside the same script, define a function named localQuest.
	- Declare a local variable named localGems inside localQuest and assign it with a string "Shiny Diamonds".
	- Return the value of localGems inside localQuest with a text: "Local Gems Discovered:".
	- Try to access the value of localGems variable outside the localQuest function. Make a note of the result. Remember to uncomment this line after attempting to access.

11. Explore and understand the concept of scope in JavaScript through a series of coding challenges. Use your knowledge of scope to correctly declare and access variables within different scopes.
    - Create a function named revealBlockSecret.
    - Inside the function, declare a variable named blockSecret and assign it with a string "Hidden Treasure".
    - Return the value of blockSecret within the function and explore its mysterious contents with a message, "Block Secret Revealed:" and the block secret value.
    - Uncomment the code that attempts to access blockSecret outside of the function.
    - Observe the journey of blockSecret through the block's hidden passages.
    
12. Debug the following code to allow the functions to return the correct value and mimic the output.
    - Check syntax of the following code.
    - Check if value is returned.
13. Add your changes.
14. Commit your changes with a concise, imperative statement describing the change. Example: "Added solution for the s24 activity".
15. Add the link in Boodle for s24.

#### Activity Solution:
- Activity Solution can be found in : [activity/index.js](./activity/index.js)

