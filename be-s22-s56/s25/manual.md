# JavaScript - Function Parameters and Return Values

## Discussion Topic List
- Functions - 10 mins
- Functions and Parameters - 10 mins
- Invoking Functions and Arguments - 10 mins
- Variables as Arguments - 10 mins
- Functions as Arguments - 10 mins
- Multiple Parameters - 15 mins
- Argument and Parameter Order - 10 mins
Total: 75 mins

## Activity Topic List
**Discussed**
- Functions - 10 mins
- Functions and Parameters - 10 mins
- Invoking Functions and Arguments - 10 mins
- Variables as Arguments - 10 mins
- Functions as Arguments - 10 mins
- Multiple Parameters - 15 mins
- Argument and Parameter Order - 10 mins

**Researched**

Total: 120 mins

# References
- [Parameters and Arguments in Javascript](https://codeburst.io/parameters-arguments-in-javascript-eb1d8bd0ef04)
- [Return statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)
- [console.log()](https://developer.mozilla.org/en-US/docs/Web/API/console/log)
- [Function Naming Conventions](https://medium.com/swlh/how-to-better-name-your-functions-and-variables-e962a4ef335b)

# Code Discussion

1. Folder and File Preparation

**batchfolder > individual > s25 > discussion > index.html**

```html
<!DOCTYPE HTML>
<html>
    <head>
        <title>Javascript - Function Parameters and Return Statements</title>
    </head>
    <body>
    </body>
</html>
```

**batchfolder > individual > s25 > discussion > index.js**

```js
console.log("Hello World!"); 
```

2. Link the "index.js" script file to our HTML file.

**batchfolder > individual > s25 > discussion > index.html**

```html
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

3. Add code to the "index.js" file to demonstrate and discuss Functions with prompts.

**Functions**

What are functions?
- Functions in javascript are lines/blocks of codes that tell our device/application to perform a certain task when called/invoked.
- Functions are mostly created to create complicated tasks to run several lines of code in succession.
- They are also used to prevent repeating lines/blocks of codes that perform the same task/function.

**batchfolder > individual > s25 > discussion > index.js**

```js
// console.log("Hello World!"); 

function printInput(){

	let nickname = prompt("Enter your nickname:");
	console.log("Hi, " + nickname);

}

printInput();
````

**IMPORTANT NOTE:**
- In the previous session that we can gather data from user input using a prompt() window.
- Commonly, this is not ideal because prompt is a feature of JS that's built to have a simple functionality for gathering user input, styling and manipulating the data may not be easy to execute using it.
- For other cases, functions can also process data directly passed into it instead of relying only on Global Variables and prompt().

4. Add more code to demonstrate and discuss Parameters.

**batchfolder > individual > s25 > discussion > index.js**

```js
//...

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
```

5. Add more code to demonstrate and discuss Arguments.

**batchfolder > individual > s25 > discussion > index.js**

```js
//...

function printName(name){
    //...
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
```

**IMPORTANT NOTE:**
- Function arguments cannot be used by a function if there are no parameters provided within the function.

6. Add more code to demonstrate and discuss variables as arguments.

**batchfolder > individual > s25 > discussion > index.js**

```js
//...
printName("Jane");

/*
[Section] Variables as Arguments
- Variables can also be used as arguments to be able to pass dynamic data used within JavaScript as a result of other operations in the code.
- This allows for code reusability, compared to hard coded values where the information doesn't change allowing functions to perform tasks using different inputs.
*/

let sampleVariable = "Yui";
printName(sampleVariable);
````

**IMPORTANT NOTE:**
- This can also do the same using prompt(), however, take note that prompt() outputs a string. Strings are not ideal for mathematical computations.

7. Add more code to demonstrate and discuss Functions and Prompts.

**batchfolder > individual > s25 > discussion > index.js**

```js
//...

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
```

7. Add more code to demonstrate and discuss Functions as arguments.

**Functions as Arguments**
- Function parameters can also accept other functions as arguments
- Some complex functions use other functions as arguments to perform more complicated results.
- This will be further seen when we discuss array methods.

**batchfolder > individual > s25 > discussion > index.js**

```js
//...

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
````

**IMPORTANT NOTE:**
- Adding and removing the parentheses "()" impacts the output of JavaScript heavily
- When a function is used with parentheses "()", it denotes invoking/calling a function
- A function used without a parenthesis is normally associated with using the function as an argument to another function
- finding more information about a function in the console using console.log()

8. Add more code to demonstrate and discuss using multiple parameters.

**Using Multiple Parameters**
- Multiple "arguments" will correspond to the number of "parameters" declared in a function in succeeding order.

**batchfolder > individual > s25 > discussion > index.js**

```js
console.log(argumentFunction);

/*
[Section] Multiple Parameters
- In JavaScript, providing more/less arguments than the expected parameters will not return an error.
- Providing less arguments than the expected parameters will automatically assign an undefined value to the parameter.
- In other programming languages, this will return an error stating that "the expected number of arguments do not match the number of parameters".
- Parameter names are just names to refer to the argument. Even if we change the name of the parameters, the arguments will be received in the same order it was passed.
*/

- "Juan" will be stored in the parameter "firstName".
- "Dela" will be stored in the parameter "middleName".
- "Cruz" will be stored in the parameter "lastName".
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
```

**IMPORTANT NOTE:**
- In JavaScript, providing more/less arguments than the expected parameters will not return an error.
- Providing less arguments than the expected parameters will automatically assign an undefined value to the parameter.
- In other programming languages, this will return an error stating that "the expected number of arguments do not match the number of parameters".
- Parameter names are just names to refer to the argument. Even if we change the name of the parameters, the arguments will be received in the same order it was passed.

9. Add more code to demonstrate and discuss argument and parameter order.

** Argument and Parameter Order**
- The order of the argument is the same to the order of the parameters. The first argument will be stored in the first parameter, second argument will be stored in the second parameter and so on.

**batchfolder > individual > s25 > discussion > index.js**

```js
//...

/*
[Section] Argument and Parameter Order
- The order of the argument is the same to the order of the parameters. The first argument will be stored in the first parameter, second argument will be stored in the second parameter and so on.
*/

createFullName(firstName, middleName, lastName);

function printFullName(middleName,firstName,lastName){

	console.log(firstName + ' ' + middleName + ' ' + lastName);

}

printFullName('Juan', 'Dela', 'Cruz');
````

# Optional Mini-Activities

The following code may be provided as mini-activities but are optional and not required.

````js
/*print numbers - practice arguments and parameters*/
function printNumbers(num1,num2){
	console.log("The numbers passed as arguments are:")
	console.log(num1);
	console.log(num2);
}

printNumbers(5,2);

/*print names - practice multiple arguments and parameters*/
function printFriends(friend1,friend2,friend3){
	console.log("My three friends are: " + friend1 + ", " + friend2 + ", and " + friend3);
}

printFriends("Martin","Kevin","Jerome");

/*Check divisibility by 4*/
function checkDivisibilityBy4(num){
	let remainder = num % 4;
	console.log("The remainder of " + num + " divided by 4 is: " + remainder);
	let isDivisibleBy4 = remainder === 0;
	console.log("Is " + num + " divisible by 4?");
	console.log(isDivisibleBy8);
}

/*debugging practice*/
/*correct the following function:*/

function isEven(num){
	console.log(number % 2 = 0) 
}

function isOdd(num1){
	num2/2 !== 0;
}

let numEven = isEven(20);
let numOdd = isOdd(31);

console.log(numEven);
console.log(numOdd);
````

# Activity:

**Note to instructors:**
- Copy the code from activity-template.js into the batch Boodle Notes so students can copy the template of the code for this activity.

Instructions that can be provided to the students for reference:

## Activity References:
- [Parameters and Arguments in Javascript](https://codeburst.io/parameters-arguments-in-javascript-eb1d8bd0ef04)
- [Return statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)
- [console.log()](https://developer.mozilla.org/en-US/docs/Web/API/console/log)
- [Function Naming Conventions](https://medium.com/swlh/how-to-better-name-your-functions-and-variables-e962a4ef335b)

## Activity:

1. In the S25 folder, create an activity folder, an index.html file inside of it and link the index.js file.
2. Create an index.js file and console log the message Hello World to ensure that the script file is properly associated with the html file.
3. 3. Create a function called addNum which will be able to add two numbers.
	- 2 Numbers must be provided as arguments.
	- function should return the sum of the 2 numbers.
4. Create a function called subNum which will be able to subtract two numbers.
	- 2 Numbers must be provided as arguments.
	- function should return result of subtraction.
5. Create a new variable called sum.
	- This sum variable should be able to receive and store the result of addNum function.
6. Create a new variable called difference.
	- This difference variable should be able to receive and store the result of subNum function.
	- Log the value of sum variable in the console.
	- Log the value of difference variable in the console.
7. Create a function which will be able to multiply two numbers.
	- Numbers must be provided as arguments.
	Return the result of the multiplication.
8. Create a function which will be able to divide two numbers.
	- Numbers must be provided as arguments.
	- Return the result of the division.
9. Create a new variable called product.
	- This product variable should be able to receive and store the result of multiplication function.
10. Create a new variable called quotient.
	- This quotient variable should be able to receive and store the result of division function.
	- Log the value of product variable in the console.
	- Log the value of quotient variable in the console.
11. Create a function which will be able to get total area of a circle from a provided radius.
- a number should be provided as an argument.
- look up the formula for calculating the area of a circle with a provided/given radius.
- look up the use of the exponent operator.
- return the result of the area calculation.
12. Create a new variable called circleArea.
- This variable should be able to receive and store the result of the circle area calculation.
- Log the value of the circleArea variable in the console.
13. Create a function which will be able to get total average of four numbers.
- 4 numbers should be provided as an argument.
- look up the formula for calculating the average of numbers.
- return the result of the average calculation.
14. Create a new variable called averageVar.
- This variable should be able to receive and store the result of the average calculation
- Log the value of the averageVar variable in the console.
15. Create a function which will be able to check if you passed by checking the percentage of your score against the passing percentage.
- this function should take 2 numbers as an argument, your score and the total score.
- First, get the percentage of your score against the total. You can look up the - formula to get percentage.
- Using a relational operator, check if your score percentage is bthan 75, the passing percentage. Save the value of the comparison in a variable called isPassed.
- return the value of the variable isPassed.
- This function should return a boolean.
16. Create a new variable called isPassingScore.
- This variable should be able to receive and store the boolean result of the function.
- Log the value of the isPassingScore variable in the console.
17. Debug the give code to allow the functions to properly receive and return the correct values and mimic the output.
- Check syntax of the give code.
- Check if value is returned.
- Check the parameters and arguments
18. Update your local backend git repository and push to git with the commit message of Add activity code s18.
19. Add the link in Boodle for s25.

# Solution:

Sample Output:
![images/solution.png](images/solution.png)

```js
function addNum(num1,num2){
	return num1 + num2;
};

function subNum(num1,num2){
	return num1 - num2;
};
console.log("Displayed sum of 5 and 15");
addNum(5,15);
console.log("Displayed difference of 20 and 5");
subNum(20,5);

function multiplyNum(num1,num2){
	return num1*num2;
};

function divideNum(num1,num2){
	return num1/num2;
};


let product = multiplyNum(50,10);
let quotient = divideNum(50,10);

console.log("The product of 50 and 10:")
console.log(product);
console.log("The quotient of 50 and 10:")
console.log(quotient);

function getCircleArea(radius){
/*	let area = 3.1416*(radius**2);
	return area;*/

	return 3.1416*(radius**2)
};

let areaCircle = getCircleArea(15);

console.log("The result of getting the area of a circle with 15 radius:")
console.log(areaCircle);

function getAverage(num1,num2,num3,num4){

/*	let average = (num1+num2+num3+num4)/4
	return average*/

	return (num1+num2+num3+num4)/4
}

let averageVar = getAverage(20,40,60,80);
console.log("The average of 20,40,60 and 80: ");
console.log(averageVar);



function checkIfPassed(score,total){

/*	let isPassed = (score/total)*100 > 75;
	return isPassed;*/

	return (score/total)*100 > 75;

}

let isPassingScore = checkIfPassed(38,50);
console.log("Is 38/50 a passing score?")
console.log(isPassingScore);
```