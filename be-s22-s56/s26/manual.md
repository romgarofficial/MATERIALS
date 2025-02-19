# JavaScript - Selection Control Structures

Discussion Topic List
If, Else If and Else Statements - 30 mins
Truthy and Falsy - 10 mins
Conditional (Ternary) Operator - 15 mins
Try Catch Finally Statements - 15 mins
Total: 75 mins

Activity Topic List
Discussed
If, Else If and Else Statements - 30 mins
Truthy and Falsy - 10 mins
Conditional (Ternary) Operator - 15 mins
Try Catch Finally Statements - 15 mins

Researched
Switch Statements - 15 mins

Total: 120 mins

# References
- [If Else If Else Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [Console Warn Method](https://developer.mozilla.org/en-US/docs/Web/API/console/warn)
- [Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
- [JavaScript Expressions and Statement](https://medium.com/launch-school/javascript-expressions-and-statements-4d32ac9c0e74)
- [Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
- [Conditional (ternary) Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
- [Console Prompt Method](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)
- [Switch Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
- [Break Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break)
- [Try Catch Finally Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
- [Error Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [typeof Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

# Code Discussion

1. Folder and File Preparation

**batchfolder > individual > s26 > discussion > index.html**

```html
<!DOCTYPE HTML>
<html>
    <head>
        <title>JavaScript Selection Control Structures</title>
    </head>
    <body>
    </body>
</html>
```

**batchfolder > individual > s26 > discussion > index.js**

```js
   console.log("Hello World!"); 
```

2. Link the "index.js" script file to our HTML file.

**batchfolder > individual > s26 > discussion > index.js**

```js
<!DOCTYPE HTML>
<html>
    <!-- ... -->
    <body>
    	<script src="./index.js"></script>
    </body>
</html>
```

**IMPORTANT NOTE:**
- The "script" tag is commonly placed at the bottom of the HTML file right before the closing "body" tag.
- The reason for this is because Javascript's main function in frontend development is to make our websites and applications interactive.
- In order to achieve this, JavaScript selects/targets specific HTML elements in our application and performs a certain output.
- It is added last to allow all HTML and CSS resources to load first before applying any JavaScript code to run.
- Placing the "script" tag at the top the the file might result in errors because since the HTML elements have not yet been loaded when the JavaScript loads, it does not have any valid HTML elements to target/select.

3. Add more code to demonstrate and discuss If Else If and Else Statement.

**batchfolder > individual > s26 > discussion > index.js**

```js
// [SECTION] if, else if and else Statement

let numG = -1;

// if Statement
// Executes a stement if a specified condition is true 
if(numG < 0) {
    console.log('Hello');
}

if(numG < 0) {
    console.log('Hello');
}

let numH = 1;

// else if Clause
/* 
    - Executes a statement if previous conditions are false and if the specified condition is true
    - The "else if" clause is optional and can be added to capture additional conditions to change the flow of a program
*/
if(numG > 0) {
    console.log('Hello');
} else if (numH > 0) {
    console.log('World');
}

// else Statement
/* 
    - Executes a statement if all other conditions are false
    - The "else" statement is optional and can be added to capture any other result to change the flow of a program
*/
if(numG > 0) {
    console.log('Hello');
} else if (numH = 0) {
    console.log('World');
} else {
    console.log('Again');
}

// if, else if and else Statements with functions
/*
    - Most of the times we would like to use if, else if and else statements with functions to control the flow of our application.
    - By including them inside functions, we can decide when certain conditions will be checked instead of executing statements when the JavaScript loads.
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
    else if (windSpeed >= 89 && windSpeed <= 117) { // || means OR operator
        return 'Severe tropical storm detected.';
    }
    else {
        return 'Typhoon detected.';
    }

}

// Returns the string to the variable "message" that invoked it 
message = determineTyphoonIntensity(69);
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
```

**IMPORTANT NOTE:**
- At this point, the students' knowledge regarding objects are only about creating objects.
- Use the word "function" to describe the "warn" method and inform the students that this will be further discussed in detail on the discussion about JavaScript Objects.
- Refer to "references" section of this file to find the documentations for If Else If Else Statement andConsole Warn Method.

4. Add more code to demonstrate and discuss Truthy and Falsy.

**batchfolder > individual > s26 > discussion > index.js**

```js
/*...*/

if (message == 'Tropical storm detected.') {
    /*...*/
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
```

**IMPORTANT NOTE:**
- This topic is important for students to know to avoid future errors in code and to help them better understand how conditional statements work in detail.
- This also helps reinforce the concept of what expressions and statements are.
- It also reinforces why JavaScript is a loosely typed language and will help the ease of transition when learning strongly typed languages like Java.
- This will also help understand the concept of type coercion, the inner workings of how a programming language interprets data and why it is important to learn.
- Refer to "references" section of this file to find the documentations for Truthy, JavaScript Expressions and Statement and Falsy.

5. Add more code to demonstrate and discuss Conditional (Ternary) Operators.

**batchfolder > individual > s26 > discussion > index.js**

```js
/*...*/

if (undefined) { 
    /*...*/
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
```

**IMPORTANT NOTE:**
- Refer to "references" section of this file to find the documentations for Conditional (ternary) Operator and Console Prompt Method.

6. Add more code to demonstrate and discuss Switch Statements.

**batchfolder > individual > s26 > discussion > index.js**

```js
/*...*/
		console.log("Result of Ternary Operator in functions: " + legalAge + ', ' + name);

// [SECTION] Switch Statement
/* 
    - Can be used as an alternative to an if, "else if and else" statement where the data to be used in the condition is of an expected input
    - The ".toLowerCase()" function/method will change the input received from the prompt into all lowercase letters ensuring a match with the switch case conditions if the user inputs capitalized or uppercased letters
    - The "expression" is the information used to match the "value" provided in the switch cases
    - Variables are commonly used as expressions to allow varying user input to be used when comparing with switch case values
    - Switch cases are considered as "loops" meaning it will compare the "expression" with each of the case "values" until a match is found
    - The "break" statement is used to terminate the current loop once a match has been found
    - Removing the "break" statement will have the switch statement compare the expression with the values of succeeding cases even if a match was found
    - Syntax
        switch (expression) {
            case value:
                statement;
                break;
            default:
                statement;
                break;
        }
*/
let day = prompt("What day of the week is it today?").toLowerCase();
console.log(day);

switch (day) {
    case 'monday': 
        console.log("The color of the day is red");
        break;
    case 'tuesday':
        console.log("The color of the day is orange");
        break;
    case 'wednesday':
        console.log("The color of the day is yellow");
        break;
    case 'thursday':
        console.log("The color of the day is green");
        break;
    case 'friday':
        console.log("The color of the day is blue");
        break;
    case 'saturday':
        console.log("The color of the day is indigo");
        break;
    case 'sunday':
        console.log("The color of the day is violet");
        break;
    default:
        console.log("Please input a valid day");
        break;
}
````

**IMPORTANT NOTE:**
- At this point, the students' knowledge regarding loops is non-existent.
- This is the first time that students will be introduced to loops.
- Focus the discussion on how a switch statement is similar to an if else if and else statement and inform them that the topic about loops will be discussed in the next session.
- Refer to "references" section of this file to find the documentations for Switch Statement and Break Statement.

7. Add more code to demonstrate and discuss Try Catch Finally Statements.

**batchfolder > individual > s26 > discussion > index.js**

```js
switch (day) {
    /*...*/
}

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

        // Attempt to execute a code
        alerat(determineTyphoonIntesity(windSpeed));

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

/*
Important Note:
	- There are more practical uses for the "try catch finally" statement, however in the examples provided above this is just a simple implementation of it.
	- The reason for this is because diving deep into the concept and discussion of error handling will confuse the students where the focus of the discussion is to provide them with the basic fundamentals of JavasScript.
	- Refer to "references" section of this file to find the documentations for Try Catch Finally Statement, Error Object and typeof Operator.
*/
```

# Optional Mini-Activities

The following code may be provided as mini-activities but are optional and not required.

````js
/*oddOrEvenChecker -  practice if else with function*/

function oddOrEvenChecker(num){

    if(num % 2 === 0 ){
        alert(num + " is even!")
    } else {
        alert(num + " is odd!")
    }

}

oddOrEvenChecker(54);


/*ageChecker = practice if else with function and return keyword*/

function ageChecker(num){
    if(num < 18){
        alert(num + " is underaged!");
        return false;
    } else {
        alert(num + " is allowed to drink!");
        return true;
    }
}

let isAllowedToDrink = ageChecker(19);
console.log(isAllowedToDrink);



/*practice switch with function*/
function determineComputerUser(computerNumber) {
    let user;

    switch (computerNumber) {
        case 1: 
            user = 'Linus Torvalds';
            break;
        case 2:
            user = 'Steve Jobs';
            break;
        case 3:
            user = 'Sid Meier';
            break;
        case 4:
            user = 'Onel de Guzman';
            break;
        case 5:
            user = 'Christian Salvador';
            break;
        default:
            user = computerNumber + ' is out of bounds.';
            break;
    }

    return user;
}

console.log(determineComputerUser(3));

/*Longer activity- could be given as home work or after class practice*/
function playQuestions(){

    let score = 0;
    alert("Q1. Which is the largest ocean in the world? Atlantic Ocean,Pacific Ocean,Indian Ocean?")
    let answer = prompt("What is the name of the largest ocean in the world?").toLowerCase();
    switch(answer){
        case "atlantic ocean":
            alert("Wrong. The answer: Pacific Ocean!");
            break;
        case "indian ocean":
            alert("Wrong. The answer: Pacific Ocean!");
            break;
        case "pacific ocean":
            alert("Correct Answer: Pacific Ocean!");
            score++;
            break;
        default:
            alert("Wrong. The answer: Pacific Ocean!");
            break;
    }
    alert("Your current score is: "+score);
    alert("Q2. What is the capital of China? Beijing,Tokyo or Seoul?")
    answer = prompt("What is the capital of China?").toLowerCase();
    switch(answer){
        case "tokyo":
            alert("Wrong. The answer: Beijing!");
            break;
        case "seoul":
            alert("Wrong. The answer: Beijing!");
            break;
        case "beijing":
            alert("Correct Answer: Beijing!");
            score++;
            break;
        default:
            alert("Wrong. The answer: Beijing!");
            break;
    }
    alert("Your current score is: "+score);
    alert("Q3. How many planets are in the Solar System? 9,8 or 10?")
    answer = prompt("How many planets are in the Solar System?").toLowerCase();
    switch(answer){
        case "9":
            alert("Wrong. The answer: 8!");
            break;
        case "10":
            alert("Wrong. The answer: 8!");
            break;
        case "8":
            alert("Correct Answer: 8!");
            score++;
            break;
        default:
            alert("Wrong. The answer: 8!");
            break;
    }
    alert("Thank you for playing.")
    alert("Your final score is: " + score);
}


playQuestions();
````

# Activity:

**Note to instructors:**
- Copy the code from activity-template.js into the batch Boodle Notes so students can copy the template of the code for this activity.

Instructions that can be provided to the students for reference:

## Activity References:
- [JS If Statement](https://www.w3schools.com/js/js_if_else.asp)
- [JS Switch](https://www.w3schools.com/js/js_switch.asp)
- [JS Math.Round()](https://www.w3schools.com/jsref/jsref_round.asp)

## Activity:

Member 1:
1. In the s26 folder, create an activity folder.
- Create an index.html file to attach our index.js file
- Copy the template provided by your instructor and paste it in an index.js file.
- Update your local sessions git repository and push to git with the commit message of Add template code s26.
- Console log the message Hello World to ensure that the script file is properly associated with the html file.
2. Create a function called login which is able to receive 3 parameters called username,password and role.
- add an if statement to check if the username is an empty string or undefined or if the password is an empty string or undefined or if the role is an empty string or undefined.
- if it is, return the following to inform the user that their input should not be empty:
- "Inputs must not be empty"

Member 2:
3. Add an else statement to the if statement in the login function. Inside the else statement add a switch to check the user's role add 3 cases and a default:
- Look up JS Switch Statements to be able to accomplish the output for this activity.
- if the user's role is admin, return the following message:
- "Welcome back to the class portal, admin!"
- if the user's role is teacher, return the following message:
- "Thank you for logging in, teacher!"
- if the user's role is a student, return the following message:
- "Welcome to the class portal, student!"
- if the user's role does not fall under any of the cases, as a default, return a message:
-  "Role out of range."

Member 3:
4. Create a function called checkAverage which is able to receive 4 numbers as arguments calculate its average and log a message for  the user about their letter equivalent in the console.
- add parameters appropriate to describe the arguments.
- create a new function scoped variable called average.
- calculate the average of the 4 number inputs and store it in the variable average.
- research the use of Math.round() and round off the value of the average variable.
- update the average variable with the use of Math.round()
- console.log() the average variable to check if it is rounding off first.

Member 4:
5. Add an if statement in the checkAverage function to check if the value of avg is less than or equal to 74.
- if it is, return the following message:
- "Hello, student, your average is <show average>. The letter equivalent is F"
6. Add an else if statement to check if the value of avg is greater than or equal to 75 and if average is less than or equal to 79.
- if it is, return the following message:
- "Hello, student, your average is <show average>. The letter equivalent is D"
7. Add an else if statement to check if the value of avg is greater than or equal to 80 and if average is less than or equal to 84.
- if it is, return the following message:
- "Hello, student, your average is <show average>. The letter equivalent is C"

Member 5:
8. Continue to add an else if statement in the checkAverage function to check if the value of avg is greater than or equal to 85 and if average is less than or equal to 89.
- if it is, return the following message:
- "Hello, student, your average is <show average>. The letter equivalent is B"
9. Add an else if statement to check if the value of avg is greater than or equal to 90 and if average is less than or equal to 95.
- if it is, return the following message:
- "Hello, student, your average is <show average>. The letter equivalent is A"
10. Add an else if statement to check if the value of average is greater than 96.
- if it is, return the following message:
- "Hello, student, your average is <show average>. The letter equivalent is A+"

All Members
11. Check out to your own git branch with git checkout -b <branchName>
12. Update your local sessions git repository and push to git with the commit message of Add activity code s26.
13. Add the sessions repo link in Boodle for s26.

# Solution:

1. Create an "activity" folder, an "index.html" file inside of it and link the "index.js" file.

**batchfolder > groupwork > s26 > activity > index.html**

```html
<!DOCTYPE HTML>
<html>
    <head>
        <title>Activity: JavaScript Selection Control Structures</title>
    </head>
    <body>
    	<script src="./index.js"></script>
    </body>
</html>
```

**batchfolder > groupwork > s26 > activity > index.js**

```js
console.log("Hello World");
```

2. Create a login function which is able to receive 3 parameters called username,password and role.

**batchfolder > groupwork > s26 > activity > index.js**

```js
function login(username,password,role){

    if(username === "" || username === undefined || password === "" || password === undefined || role === "" || role === undefined){

        return "Inputs must not be empty";

    } else {
        switch (role){
            case "admin":
                return "Welcome back to the class portal, admin!";
                break;
            case "teacher":
                return "Thank you for logging in, teacher!";
                break;
            case "student":
                return "Welcome to the class portal, student!";
                break;
            default:
                return "Role out of range.";
                break;
        }
    }

}
```

4. Create a function which is able to receive 4 numbers as arguments calculate its average and log a message for the user about their letter equivalent in the console.

**batchfolder > groupwork > s26 > activity > index.js**

```js
function checkAverage(grade1,grade2,grade3,grade4){


	let average = (grade1+grade2+grade3+grade4)/4;
	average = Math.round(average);

	if(average <= 74){
	    return "Hello, student, your average is: " + average + ". The letter equivalent is F";
	} else if(average >= 75 && average <= 79){
	    return "Hello, student, your average is: " + average + ". The letter equivalent is D";
	} else if(average >= 80 && average <= 84){
	    return "Hello, student, your average is: " + average + ". The letter equivalent is C";
	} else if(average >= 85 && average <= 89){
	    return "Hello, student, your average is: " + average + ". The letter equivalent is B";
	} else if(average >= 90 && average <= 95){
	    return "Hello, student, your average is: " + average + ". The letter equivalent is A";
	} else if(average >= 96){
	    return "Hello, student, your average is: " + average + ". The letter equivalent is A+";
	}

}
```