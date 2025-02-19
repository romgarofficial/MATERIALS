# MTE - Machine Problem 1

## Resources

### References

Sample:

- [Markdown Basics](https://www.markdownguide.org/basic-syntax)
    
### Tools/Technologies Version


## Discussion
```
Instructor's Note:
Check session slides for discussion
```
## Code Along

### 1. Folder and File Preparation
```
Inside the fullstack folder, create an s75 folder.
Inside the s75 folder, create a discussion folder then create index.js
```
### 2. Step 1

#### batchfolder > individual > mte > s75 > discussion > index.js

**Problem #1** : Create a program that determines the temperature of water, accept a single argument temperature, which represents the temperature of the water in degrees Celsius.

```js
function determineWaterState(temperature){
    return temperature

}
```
#### Instructor's Note:
- Test as you go, [Codepen](https://www.codepen.io/)
- Invoke the function and input the appropriate parameter
- determineWaterState(13)

**Problem #1** : From the current problem, validate that temperature is a number. If temperature is not a number, return undefined.

```js
function determineWaterState(temperature){
    
    // return temperature

    // Validation: Check if temperature is a number
    if(typeof temperature !== 'number'){
        return undefined;
    }
    // if number, return the value of temperature
    return temperature
}
```
#### Instructor's Note:
- Test as you go, [Codepen](https://www.codepen.io/)
- Invoke the function and input the appropriate parameter
- determineWaterState("seven")
- determineWaterState(104)

**Problem #1** : From the current problem, determine and return the state of water ("solid", "liquid", or "gas") at the given temperature. Use the following conditions:
- Water is solid (ice) at temperatures below 0C (0 celsius)
- Water is liquid between 0C and 100C.
- Water is gas (steam) at temperature above 100C

```js
function determineWaterState(temperature){
    // Validation: Check if temperature is a number
    if(typeof temperature !== 'number'){
        return undefined;
    }
    // // if number, return the value of temperature
    // return temperature

    // Determine the state of water based on the temperature
    if (temperature < 0) {
        return "solid"; // Water is solid below 0°C
    } else if (temperature <= 100) {
        return "liquid"; // Water is liquid between 0°C and 100°C
    } else {
        return "gas"; // Water is gas above 100°C
    }
}
```
#### Instructor's Note:
- Test as you go, [Codepen](https://www.codepen.io/)
- Invoke the function and input the appropriate parameter
- determineWaterState("seven")
- determineWaterState(-10)
- determineWaterState(37)
- determineWaterState(100)

#### Mini-Activity

**Problem #2** : Create a program that calculates the sum of all numbers up to a given number n. The function should:
- Accept a single argument n, which is the number up to which the sum should be calculated.
- Validate that n is a positive integer. If n is not a positive integer, return undefined.
- Use a loop to calculate the sum of all numbers from 1 up to and including n.
- Return the sum.

```js
// Create the function that accepts a single argument. 

function sumUpToN(n){
    return n
}
```
#### Instructor's Note:
- Test as you go, [Codepen](https://www.codepen.io/)
- Invoke the function and input the appropriate parameter
- sumUpToN(7)

```js
// Validate that n is a positive integer. If n is not a positive integer, return undefined.

function sumUpToN(n){
    if (typeof n !== 'number' || n < 1 || n % 1 !== 0) {
        return undefined;
    }
    return n
}
```
#### Instructor's Note:
- Test as you go, [Codepen](https://www.codepen.io/)
- Invoke the function and input the appropriate parameter
- sumUpToN(false)
- sumUpToN("Twice")
- sumUpToN(13)

```js
// Use a loop to calculate the sum of all numbers from 1 up to and including n. Then return the sum.

function sumUpToN(n) {
    // Validation: Check if n is a positive integer
    if (typeof n !== 'number' || n < 1 || n % 1 !== 0) {
        return undefined;
    }

    // return n

    let sum = 0; // variable for accumulated sum of integers
    for (let i = 1; i <= n; i++) {   // for loop is for iteration from 1 to n. 
        sum += i;   // each value of i is added to the sum 
    }
    // by the end of the loop, sum contains the total of all integers from 1 to n. 

    return sum;     // outputs the result
}
```
#### Instructor's Note:
- Test as you go, [Codepen](https://www.codepen.io/)
- Invoke the function and input the appropriate parameter
- sumUpToN(5) // Expect 15
- sumUpToN(10) // Expect 55

## Activity

### Activity References

### Activity Instructions

#### Instructions
1. File and folder preparation instructions.
    - Includes file and folder preparations such as template files and folders.
2. Add activity instructions.
    - Add the necessary IDs, classes for bootcampers to add to allow Automated Grading checking.
3. [Research] - Add activity instructions.
    - Add indication if activity part needs research.
4. Submission Mechanics
    - Add the necessary submission mechanics such as repo name, commit messages.

#### Activity Solution:
- Activity Solution can be found in : [./activity/solution.js](./activity/solution.js)

**Solution**

### 1. Folder and File Preparation
```
Inside the s75 folder, create an activity folder then clone the template.js.
```

### 2. Step 1 - Item 1

#### batchfolder > individual > mte > s75 > activity > template.js

```js
/* isPalindrome function 
Question #1: Create a program to check if a given string is a palindrome or not. 
Add validation, if the argument is not a string, return undefined. 
Palindrome words should be 3 characters and up.
*/

// Declare the function isPalindrome with one parameter, string
function isPalindrome(string) {
    // Check if the input is not a string or if its length is less than 3 characters
    if (typeof string !== 'string' || string.length < 3) {
        // Return undefined if either condition is true, indicating invalid input
        return undefined;
    }

    // Initialize a for loop with two variables: i starting from 0 and j from the last index of the string
    for (let i = 0, j = string.length - 1; i < j; i++, j--) {
        // Inside the loop, check if the characters at positions i and j are not the same
        if (string[i] !== string[j]) {
            // If the characters are different, return false indicating the string is not a palindrome
            return false;
        }
    }

    // If the loop completes without finding any mismatched characters, return true
    return true;
}
```

#### Instructor's Note:
- Test the function using [Codepen](https://www.codepen.io/)
- Invoke the function and input the appropriate parameter
- sample: isPalindrome("racecar")
- isPalindrome("purple")
- isPalindrome(123)


### 3. Step 2 - Item 2

#### batchfolder > individual > mte > s75 > activity > template.js

```js
/* isIsogram function 
Question #2: Create a program that checks an isogram. 
An isogram is a word where there are no repeating letters.
The function should disregard text casing before doing anything else.
If the function finds a repeating letter, return false. Otherwise, return true.
*/

// Define the function isIsogram with one parameter, text
function isIsogram(text) {
    // Convert the input text to lowercase to ensure case-insensitive comparison
    text = text.toLowerCase();
    // Initialize an empty array to keep track of the letters encountered
    let letters = [];

    // Iterate through each character of the input text
    for (let i = 0; i < text.length; i++) {
        // Check if the current letter has already been encountered by looking in the letters array
        if (letters.indexOf(text[i]) !== -1) {
            // If the letter is found in the array, return false indicating the text is not an isogram
            return false;
        } else {
            // If the letter is not found, add it to the letters array for future checks
            letters.push(text[i]);
        }
    }

    // If the loop completes without finding any duplicate letters, return true indicating the text is an isogram
    return true;
}
```

#### Instructor's Note:
- Test the function using [Codepen](https://www.codepen.io/)
- Invoke the function and input the appropriate parameter
- sample: isIsogram("seven")
- isIsogram("real")

### 4. Step 3 - Item 3

#### batchfolder > individual > mte > s75 > activity > template.js

```js
/* isLeapYear function 
Question #3: Create a program to determine if a given year is a leap year. 
The program should check if the input is a positive integer representing a year. 
If the input is not a valid year (i.e., not a positive integer), the program should return undefined.
*/

// Define the function isLeapYear with one parameter, year
function isLeapYear(year) {
    // Check if the input year is not a number, is non-positive, or is not an integer
    if (typeof year !== 'number' || year <= 0 || year % 1 !== 0) {
        // If any of these conditions are true, return undefined to indicate invalid input
        return undefined;
    }

    // Leap year calculation logic
    // A year is a leap year if it is divisible by 4 but not by 100, unless it is also divisible by 400
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        // If the year satisfies the leap year conditions, return true
        return true;
    } else {
        // If the year does not satisfy the leap year conditions, return false
        return false;
    }
}
```

#### Instructor's Note:
- Test the function using [Codepen](https://www.codepen.io/)
- Invoke the function and input the appropriate parameter
- sample: isLeapYear("1996")
- isLeapYear(1996)
- isLeapYear(2013)

### 5. Step 4 - Item 4

#### batchfolder > individual > mte > s75 > activity > template.js

```js
/* purchase function 
Question #4: Create a program that checks the age to give the proper price 
Return undefined for people aged below 13.
Return the discounted price (rounded off) for students aged 13 to 21 and senior citizens. (20% discount)
Return the rounded off price for people aged 22 to 64.
The returned value should be a string.
*/

// Define the function purchase with two parameters: age and price
function purchase(age, price) {
    // Check if the buyer's age is less than 13
    if (age < 13) {
        // If true, return undefined, possibly indicating ineligible for purchase
        return undefined;
    } 
    // Check if the buyer's age is between 13 and 21 inclusive, or 65 and older
    else if ((age >= 13 && age <= 21) || age >= 65) {
        // If true, apply a 20% discount to the price and return it, formatted to 2 decimal places
        return (price * 0.8).toFixed(2);
    } 
    // If none of the above conditions are met (ages 22 to 64)
    else {
        // Return the original price, formatted to 2 decimal places
        return price.toFixed(2);
    }
}
```
#### Instructor's Note:
- Test the function using [Codepen](https://www.codepen.io/)
- Invoke the function and input the appropriate parameter
- sample: purchase(12, 150)
- purchase(28, 150)
- purchase(72, 150)

### 5. Step 4 - Item 4

#### batchfolder > individual > mte > s75 > activity > template.js

```js
/* countLetter function 
Question #5: Develop a program that calculates the frequency of a specific letter's appearance within a given sentence.
Check first whether the letter is a single character.
If letter is a single character, count how many times a letter has occurred in a given sentence then return count.
If letter is invalid, return undefined.
*/

// Define the function countLetter with two parameters: letter and sentence
function countLetter(letter, sentence) {
    // Initialize a variable to keep track of the letter count
    let result = 0;

    // Check if the letter parameter is not a single character
    if (letter.length !== 1) {
        // If the letter is not a single character, return an error message
        return "Invalid letter input";
    }

    // Check if the sentence is too short (empty or a single character)
    if (sentence.length <= 1) {
        // If the sentence is invalid, return an error message
        return "Invalid sentence input";
    }

    // Convert the letter and the sentence to lowercase to ensure case-insensitive comparison
    const lowercaseLetter = letter.toLowerCase();
    const lowercaseSentence = sentence.toLowerCase();

    // Loop through each character in the lowercase version of the sentence
    for (let i = 0; i < lowercaseSentence.length; i++) {
        // Check if the current character matches the lowercase letter
        if (lowercaseSentence[i] === lowercaseLetter) {
            // If there's a match, increment the result counter
            result++;
        }
    }

    // After the loop, check if the result counter is greater than 0
    return result > 0 ? result : undefined;
    // If the letter was found, return the count, otherwise return undefined
}


```
#### Instructor's Note:
- Test the function using [Codepen](https://www.codepen.io/)
- Invoke the function and input the appropriate parameter
- sample: countLetter("a", "the quick brown fox jumps over a lazy dog")
- countLetter('ab', "This should return an error message");
- countLetter('t', "t");