# JavaScript - Repetition Control Structures

## Discussion Topic List
While Loops - 15 mins
Do-While Loops - 10 mins
For Loops - 10 mins
For Loops with Strings - 40 mins
Continue and Break Statements - 30 mins
Total: 75 mins

## Activity Topic List
**Discussed**
While Loops - 15 mins
Do-While Loops - 10 mins
For Loops - 10 mins
For Loops with Strings - 40 mins

**Researched**
Continue and Break Statements - 45 mins

Total: 120 mins

# References
- [JavaScript Expressions and Statement](https://medium.com/launch-school/javascript-expressions-and-statements-4d32ac9c0e74)
- [Loops and Iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [Statements](https://www.teamten.com/lawrence/programming/intro/intro2.html)
- [Iteration](https://teachcomputerscience.com/iterations/)
- [JavaScript While Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
- [Decrement Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Decrement)
- [JavaScript Do While Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)
- [Number Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [JavaScript parseInt() Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
- [JavaScript for Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
- [Increment Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length)
- [JavaScript String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [JavaScript String .length Property](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length)
- [JavaScript .toLowerCase() Method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
- [Continue Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue)
- [Break Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break)

# Code Discussion

1. Folder and File Preparation

**batchfolder > individual > s27 > discussion > index.html**

```html
<!DOCTYPE HTML>
<html>
    <head>
        <title>JavaScript Loops</title>
    </head>
    <body>
    </body>
</html>
```

**batchfolder > individual > s27 > discussion > index.js**

```js
   console.log("Hello World!"); 
```

2. Link the "index.js" script file to our HTML file.

**batchfolder > individual > s27 > discussion > index.js**

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

3. Add code to the "index.js" file to demonstrate and discuss While Loops.

**batchfolder > individual > s27 > discussion > index.js**

```js
console.log("Hello World!");

// [Section] While Loop
/*
    - A while loop takes in an expression/condition
    - Expressions are any unit of code that can be evaluated to a value
    - If the condition evaluates to true, the statements inside the code block will be executed
    - A statement is a command that the programmer gives to the computer
    - A loop will iterate a certain number of times until an expression/condition is met
    - "Iteration" is the term given to the repetition of statements
    - Syntax
        while(expression/condition) {
            statement
        }
*/


let count = 5;

// While the value of count is not equal to 0
while(count !== 0) {

    // The current value of count is printed out
    console.log("While: " + count);

    // Decreases the value of count by 1 after every iteration to stop the loop when it reaches 0
    // Loops occupy a significant amount of memory space in our devices
    // Make sure that expressions/conditions in loops have their corresponding increment/decrement operators to stop the loop
    // Forgetting to include this in loops will make our applications run an infinite loop which will eventually crash our devices
    // After running the script, if a slow response from the browser is experienced or an infinite loop is seen in the console quickly close the application/browser/tab to avoid this
    count--;

}
```

**IMPORTANT NOTE:**
- Refer to "references" section of this file to find the documentations for JavaScript Expressions and Statement, Loops and Iteration, Statements, Iteration, JavaScript While Loop and Decrement Operator.

4. Add more code to demonstrate and discuss Do While Loops.

**batchfolder > individual > s27 > discussion > index.js**

```js
/*...*/

while(count !== 0) {
	/*...*/
}

// [Section] Do While Loop
/*
    - A do-while loop works a lot like the while loop. But unlike while loops, do-while loops guarantee that the code will be executed at least once.
    - Syntax
        do {
            statement
        } while (expression/condition)
*/

/*
    - The "Number" function works similarly to the "parseInt" function
    - Both differ significantly in terms of the processes they undertake in converting information into a number data type and other features that help with manipulating data
    - The "prompt" function creates a pop-up message in the browser that can be used to gather user input
    - How the Do While Loop works:
        1. The statements in the "do" block executes once
        2. The message "Do While: " + number will be printed out in the console
        3. After executing once, the while statement will evaluate whether to run the next iteration of the loop based on given expression/condition (e.g. number less than 10)
        4. If the expression/condition is not true, another iteration of the loop will be executed and will be repeated until the condition is met
        5. If the expression/condition is true, the loop will stop
*/


let number = Number(prompt("Give me a number"));

do {

    // The current value of number is printed out
    console.log("Do While: " + number);

    // Increases the value of number by 1 after every iteration to stop the loop when it reaches 10 or greater
    // number = number + 1
    number += 1;

// Providing a number of 10 or greater will run the code block once and will stop the loop
} while (number < 10)
```

**IMPORTANT NOTE:**
- In order to have the students focus on certain portions of the discussion, comment out previous loops defined in the "index.js" file.
- This also prevents students with older model devices from crashing and slowing down during the discussion.
- It is best to provide the students with the step by step procedure of the loops iteration to give them a better idea of how loops work.
- Refer to "references" section of this file to find the documentations for JavaScript Do While Loop, Number Function and JavaScript parseInt() Function.

5. Add more code to demonstrate and discuss For Loops.

**batchfolder > individual > s27 > discussion > index.js**

```js
/*...*/

do {
    /*...*/
} while (number < 10)

// [Section] For Loop
/*
    - A for loop is more flexible than while and do-while loops. It consists of three parts:
        1. The "initialization" value that will track the progression of the loop.
        2.  The "expression/condition" that will be evaluated which will determine whether the loop will run one more time.
        3. The "finalExpression" indicates how to advance the loop.
    - Syntax
        for (initialization; expression/condition; finalExpression) {
            statement
        }
*/

/*
    - Will create a loop that will start from 0 and end at 20
    - Every iteration of the loop, the value of count will be checked if it is equal or less than 20
    - If the value of count is less than or equal to 20 the statement inside of the loop will execute
    - The value of count will be incremented by one for each iteration
*/


for (let count = 0; count <= 20; count++) {

    // The current value of count is printed out
    console.log(count);

}
```

**IMPORTANT NOTE:**
- Refer to "references" section of this file to find the documentations for JavaScript for Loop and Increment Operator.

6. Create other loops to demonstrate For Loops with strings.

**batchfolder > individual > s27 > discussion > index.js**

```js
for (let count = 0; count <= 20; count++) {
	/*...*/
}


let myString = "alex";
// Characters in strings may be counted using the .length property
// Strings are special compared to other data types in that it has access to functions and other pieces of information another primitive data type might not have
console.log(myString.length);

// Accessing elements of a string
// Individual characters of a string may be accessed using it's index number
// The first character in a string corresponds to the number 0, the next is 1 up to the nth number
console.log(myString[0]);
console.log(myString[1]);
console.log(myString[2]);

// Will create a loop that will print out the individual letters of the myString variable
for(let x = 0; x < myString.length; x++){

    // The current value of myString is printed out using it's index value
    console.log(myString[x])

}


// Create a string named "myName" with a value of your name
let myName = "AlEx";

/*
    - Creates a loop that will print out the letters of the name individually and print out the number 3 instead when the letter to be printed out is a vowel
    - How this For Loop works:
        1. The loop will start at 0 for the the value of "i"
        2. It will check if "i" is less than the length of myName (e.g. 0)
        3. The if statement will check if the value of myName[i] converted to a lowercase letter is equivalent to any of the vowels (e.g. myName[0] = a, myName[0] = e, myName[0] = i, myName[0] = o, myName[0] = u)
        4. If the expression/condition is true the console will print the number 3.
        5. If the letter is not a vowel the console will print the letter
        6. The value of "i" will be incremented by 1 (e.g. i = 1)
        7. Then the loop will repeat steps 2 to 6 until the expression/condition of the loop is false
*/
for (let i=0; i < myName.length; i++){

    // console.log(myName[i].toLowerCase());

    // If the character of your name is a vowel letter, instead of displaying the character, display number "3"
    // The ".toLowerCase()" function/method will change the current letter being evaluated in a loop to a lowercase letter ensuring that the letters provided in the expressions below will match
    if (
        myName[i].toLowerCase() == "a" ||
        myName[i].toLowerCase() == "i" ||
        myName[i].toLowerCase() == "u" ||
        myName[i].toLowerCase() == "e" ||
        myName[i].toLowerCase() == "o"
    ){
        // If the letter in the name is a vowel, it will print the number 3
        console.log(3);
    } else {
        // Print in the console all non-vowel characters in the name
        console.log(myName[i])
    }

}
````

**IMPORTANT NOTE:**
- Refer to "references" section of this file to find the documentations for JavaScript String, JavaScript String .length Property and JavaScript .toLowerCase() Method.

# Activity:

**Note to instructors:**
- Copy the code from activity-template.js into the batch Boodle Notes so students can copy the template of the code for this activity.

Instructions that can be provided to the students for reference:

## Activity References:
- [Continue Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue)
- [Break Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break)

## Activity:

Member 1:
1. In the S27 folder, create an activity folder and an index.html and index.js file inside of it.
- Create an index.html file to attach our index.js file
- Copy the template provided by your Instructor and paste it in an index.js file.
- Update your local sessions git repository and push to git with the commit message of Add template code s27.
- Console log the message Hello World to ensure that the script file is properly associated with the html file.
2. Create a JavaScript Function called printOddNumbers that takes in a number as an input and uses loops to output only odd numbers
- Create a variable called oddNumbers with a string value of "The odd numbers found are the following: "
- Look up Continue and Break Statements to be able to complete the output for this activity.
- The loop should print numbers based on a given value.
- Create an if statement to check if the number is an even number use the continue statement to skip the loop to the next iteration.
- To check if a number is even, use the modulo operator.
- If the current number is odd, concatenate the number to the oddNumbers variable to create a string with the intiial value and the odd numbers found.
- Create another if statement to check if the current value is greater than 10, if it is, use the break statement to stop the loop.
- Once the loop is complete, return the variable oddNumbers.

Member 2:
3. Create a JavaScript function called generateSalt that takes a number number as input.
- Define a constant variable named characters that contains all the characters that can be used in the salt. This includes uppercase letters, lowercase letters, and digits.
4. Create an empty string variable named salt to store the generated salt.
5. Use a for loop to iterate length times to generate the salt.
- Research the use of Math.floor and Math.random
    - Generate a randomIndex variable between 0 and the length of the characters string minus 1 using Math.random() and Math.floor().
    - Use the randomIndex to select a character from the characters string and append the selected character to the salt string.
    - Return the generated salt string


Member 3:
8. Create a function called filterVowels. Inside the function, create a variable called filteredString.
9. It should contain a for Loop that will iterate through the individual letters of the given string variable based on it’s length.
10. In the loop, add an if statement that will check if the letter of the string is equal to a vowel and continue to the next iteration of the loop if it is true.
11. In the loop, add an else statement that will add the current letter being looped to the given filteredString variable.

Member 4:
11. Create a function called skipLetterAndStop which will input a string and loop through a string and print out letters that are not the letter "a" and will stop if the current letter is "d".
- Create a function called skipLetterAndStop which will be a for loop that will iterate through the length of the string.
- Create a variable called name and which will store the value of the provided string.
- Create a variable called letterACount which will have a value of 0 that will be used to track the number of letter "a"s found in the string.
- Look up Continue and Break Statements to be able to complete the output for this activity.
- Create an if statement that will check if the current letter in the string is equal to "a". If it is, print a console message saying "Continue to the next iteration" and increment the value of the variable letterCountA by 1.
- Create another if statement that will check if the current letter in the string is equal to "d". If it is, use the break statement to stop the loop and print a console message saying "Stopping the loop, letter d is found".
- Once the loop is complete, return the value of the variable letterACount

Member 5:
12. Debug the given code to allow the functions to properly receive and return or display the correct values and mimic the output.
- Check the  syntax of the given code.
- Check if proper value is returned or displayed.
- Check the parameters and arguments.
- Check the if else statements
- Check the if conditions
- Check the loop statements
- Check the loop conditions


All Members
13. Check out to your own git branch with git checkout -b <branchName>
14. Update your local sessions git repository and push to git with the commit message of Add activity code s27.
15. Add the sessions repo link in Boodle for s27.

# Solution:

Check the activity solution from [./activity/index.js](./activity/index.js)