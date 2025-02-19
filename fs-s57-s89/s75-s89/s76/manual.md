# MTE - Machine Problem 2

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
Inside the fullstack folder, create an s76 folder.
Inside the s76 folder, create a discussion folder then create index.js
```
### 2. Step 1

#### batchfolder > individual > mte > s76 > discussion > index.js

**Problem #1** : Create a program that returns a number.
```js
function sumOfEvenNumbers(numbers){
    return numbers

}
```
#### Instructor's Note:
- Test as you go, [Codepen](https://www.codepen.io/)
- Invoke the function and input the appropriate parameter
- sumOfEvenNumbers(7)

**Problem #1** : From the current problem, validate that the function should take an array. Check if numbers is not array or not all elements in numbers are integers. 

```js
function sumOfEvenNumbers(numbers){

    if (!Array.isArray(numbers) || !numbers.every(Number.isInteger)) {
        console.log("Invalid input: Please provide an array of integers.");
        return undefined;
    }
    return numbers
}
```
#### Instructor's Note:
- Test as you go, [Codepen](https://www.codepen.io/)
- Invoke the function and input the appropriate parameter
- sumOfEvenNumbers([21, 8, 10])
- sumOfEvenNumbers([21, 8, "10"])

**Problem #1** : From the current problem, accumulate the total of even numbers. 

```js
function sumOfEvenNumbers(numbers) {

    if (!Array.isArray(numbers) || !numbers.every(Number.isInteger)) {
        console.log("Invalid input: Please provide an array of integers.");
        return undefined;
    }
    // return numbers

    let sum = 0; // Initializes a variable sum to 0
    numbers.forEach(number => { // Begins iterating over each element in the numbers array
        if (number % 2 === 0) sum += number; // Directly add even numbers
    });
    return sum; // Returns the accumulated sum of even numbers.
}
```
#### Instructor's Note:
- Test as you go, [Codepen](https://www.codepen.io/)
- Invoke the function and input the appropriate parameter
- sumOfEvenNumbers([21, 8, 10])
- sumOfEvenNumbers([21, 8, "10"])

#### Mini-Activity

**Problem #2** 

```js
// Define a function with two parameters. 

function checkAllPassedWithValidation(scores, passingThreshold){
    return `${scores} and ${passingThreshold}`
}
```
#### Instructor's Note:
- Test as you go, [Codepen](https://www.codepen.io/)
- Invoke the function and input the appropriate parameter
- checkAllPassedWithValidation([65, 90, 80], 60)

```js
// Validate that the first parameter is an array of numbers. If not, return undefined. 

function checkAllPassedWithValidation(scores, passingThreshold){
    
    if (!Array.isArray(scores) || !scores.every(score => typeof score === 'number')) {
        console.log("Invalid input: Scores must be an array of numbers.");
        return undefined;
    }

    return `${scores} and ${passingThreshold}`
}
```
#### Instructor's Note:
- Test as you go, [Codepen](https://www.codepen.io/)
- Invoke the function and input the appropriate parameter
- checkAllPassedWithValidation([65, 90, 80], 60)
- checkAllPassedWithValidation([65, "once", 80], 60)

```js
// Transform each score in `scores` into Pass if it meets or exceeds the `passingThreshold` or Fail otherwise. 
// Store the passing scorres in a new array.

function checkAllPassedWithValidation(scores, passingThreshold) {
    // Input Validation
    if (!Array.isArray(scores) || !scores.every(score => typeof score === 'number')) {
        console.log("Invalid input: Scores must be an array of numbers.");
        return undefined;
    }

    // return `${scores} and ${passingThreshold}`

    // Categorize scores as 'Pass' or 'Fail'
    const passOrFail = scores.map(score => score >= passingThreshold ? 'Pass' : 'Fail');
    // Check if all categorized statuses are 'Pass'
    const allPassed = passOrFail.every(status => status === 'Pass');
    return allPassed;
}
```
#### Instructor's Note:
- Test as you go, [Codepen](https://www.codepen.io/)
- Invoke the function and input the appropriate parameter
- checkAllPassedWithValidation([65, 90, 80], 60)
- checkAllPassedWithValidation([55, 90, 80], 60)
- checkAllPassedWithValidation([65, "once", 80], 60)

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
Inside the s76 folder, create an activity folder then clone the template.js.
```

### 2. Step 1 - Item 1

#### batchfolder > individual > mte > s76 > activity > template.js

```js
/* calculateTotalAmount function 
Question #1: Create a program that calculate the total order amount. 
Input should be an array, if not an array, return undefined.
*/

// Defines a function named calculateTotalAmount that takes one parameter, orderAmounts.
function calculateTotalAmount(orderAmounts) {
    // Checks if the provided orderAmounts argument is not an array.
    if (!Array.isArray(orderAmounts)) {
        // Logs a message to the console indicating the input is invalid because it's not an array.
        console.log("Invalid input: The provided input is not an array.");
        // Ends the function execution and returns undefined if the input is not an array.
        return undefined;
    }

    // Initializes a variable named total with 0. This will hold the sum of the numbers.
    let total = 0;
    // Starts a loop that iterates over each element in the orderAmounts array.
    for (let i = 0; i < orderAmounts.length; i++) {
        // Adds the current element (orderAmounts[i]) to the total variable.
        total += orderAmounts[i];
    }
    // After the loop has finished, returns the accumulated total sum of the array elements.
    return total;
}

```

#### Instructor's Note:
- Test the function using [Codepen](https://www.codepen.io/)
- Invoke the function and input the appropriate parameter
- sample: calculateTotalAmount([120, 450, 30, 200, 90])
- calculateTotalAmount("not an array")
- isPalindrome(123)


### 3. Step 2 - Item 2

#### batchfolder > individual > mte > s76 > activity > template.js

```js
/* filterTitlesByKeyword function 
Question #2: Create a program that takes an array of blog post titles and a keyword. 
All array elements should be a string.
The search should be case-insensitive.
Return undefined if the inputs are not of the expected data types
*/

// Defines a function named filterTitlesByKeyword with two parameters: titles (an array of strings) and keyword (a string).
function filterTitlesByKeyword(titles, keyword) {
    // Checks if titles is not an array, any title within titles is not a string, or keyword is not a string.
    if (!Array.isArray(titles) || titles.some(title => typeof title !== 'string') || typeof keyword !== 'string') {
        // Logs a message to the console if the validation fails.
        console.log("Invalid input: Please provide an array of strings for titles and a string for the keyword.");
        // Exits the function and returns undefined due to invalid input.
        return undefined;
    }

    // Filters titles by keyword. Converts both title and keyword to lowercase to ensure case-insensitive comparison.
    let filteredTitles = titles.filter(title => title.toLowerCase().includes(keyword.toLowerCase()));

     // Check if there are no matching titles
    if (filteredTitles.length === 0) {
        return "No matching titles found.";
    }
    
    // Returns the filtered list of titles that contain the keyword.
    return filteredTitles;
}

```
#### Instructor's Note:
- Test the function using [Codepen](https://www.codepen.io/)
- Invoke the function and input the appropriate parameter
- sample: filterTitlesByKeyword(["Grand Blue Dreaming", "Blue Exorcist", "Black Butler", "Violet Evergarden", "Black Clover"], "blue")
- filterTitlesByKeyword(["Black Swan", "Red Flavor", "Blue Hour", "Pink Venom"], "yellow")
- filterTitlesByKeyword([11, 23, 31, 44], "one")

### 4. Step 3 - Item 3

#### batchfolder > individual > mte > s76 > activity > template.js

```js
/* formatUsernames function 
Question #3: Create a program that takes an array of usernames and returns a new array.
Return undefined if the input is not an array.
All array elements should be a string.
The first letter of the username should be capitalized and prefixed by "User:".
*/

// Defines a function to format a list of usernames.
function formatUsernames(usernames) {
    // Checks if the input is an array and all its elements are strings.
    if (!Array.isArray(usernames) || usernames.some(username => typeof username !== 'string')) {
        // Logs a warning if the input does not meet the criteria.
        console.log("Invalid input: Please provide an array of strings.");
        // Exits the function and returns undefined to indicate an error.
        return undefined;
    }

    // Initializes an empty array to store the formatted usernames.
    let formattedUsernames = [];
    // Loops through each username in the input array.
    for (let i = 0; i < usernames.length; i++) {
        // Capitalizes the first letter of the username and adds the rest of the username as it is.
        let capitalized = usernames[i].charAt(0).toUpperCase() + usernames[i].slice(1);
        // Adds the formatted username to the formattedUsernames array with a prefix "User: ".
        formattedUsernames.push("User: " + capitalized);
    }
    // Returns the array of formatted usernames.
    return formattedUsernames;
}

```

#### Instructor's Note:
- Test the function using [Codepen](https://www.codepen.io/)
- Invoke the function and input the appropriate parameter
- sample: formatUsernames(["v", "jin", "joon"])
- formatUsernames([13, 31, 3])

### 5. Step 4 - Item 4

#### batchfolder > individual > mte > s76 > activity > template.js

```js
/* optimizeDeliverySchedule function 
Question #4: Create a program that returns a sorted merged list of unique delivery dates
Validate both inpus are arrays and contain only integers, if not return undefined
*/

// Defines a function to optimize delivery schedules by combining dates from two warehouses.
function optimizeDeliverySchedule(datesWarehouse1, datesWarehouse2) {
    // Validates that both parameters are arrays and all their elements are integers.
    if (!Array.isArray(datesWarehouse1) || !Array.isArray(datesWarehouse2) ||
        !datesWarehouse1.every(Number.isInteger) || !datesWarehouse2.every(Number.isInteger)) {
        // Logs an error message if either parameter is not an array of integers.
        console.log("Invalid input: Both parameters must be arrays of integers.");
        // Returns undefined to indicate an error in input validation.
        return undefined;
    }

    // Initializes an empty array to store the unique combined dates.
    let combinedDates = [];
    // Concatenates the two arrays to merge all dates into one array.
    let allDates = datesWarehouse1.concat(datesWarehouse2);
    // Loops through the concatenated array to check for and eliminate duplicates.
    for (let i = 0; i < allDates.length; i++) {
        // Checks if the current date is not already included in combinedDates.
        if (combinedDates.indexOf(allDates[i]) === -1) {
            // Adds the date to combinedDates if it's not a duplicate.
            combinedDates.push(allDates[i]);
        }
    }

    // Sorts the combined array of dates in ascending order.
    combinedDates.sort((a, b) => a - b);

    // Returns the sorted array of unique dates, optimizing the delivery schedule.
    return combinedDates;
}

```
#### Instructor's Note:
- Test the function using [Codepen](https://www.codepen.io/)
- Invoke the function and input the appropriate parameter
- sample: optimizeDeliverySchedule([7, 3, 5, 15], [4, 7, 2, 15])
- optimizeDeliverySchedule([7, 3, "four", 15], [4, 7, 2, 15])

### 5. Step 4 - Item 4

#### batchfolder > individual > mte > s76 > activity > template.js

```js
/* removeLowScoresAndCalculateAverage function 
Question #5: Develop a program that removes all scores that are below a certain threshold. 
Calculate the average of the remaining scores.
Validate that the array is comprised of integers.
Return the average score rounded to two decimal places. 
If after filtering there are no scores left or the input is invalid, return undefined
*/

// Defines a function to filter out low scores and calculate the average of the remaining scores.
function removeLowScoresAndCalculateAverage(scores, threshold) {
    // Checks if the input 'scores' is an array of numbers between 0 and 100.
    if (!Array.isArray(scores) || !scores.every(score => typeof score === 'number' && score >= 0 && score <= 100)) {
        // Logs a message if the input validation fails.
        console.log("Invalid input: Please provide an array of integer scores between 0 and 100.");
        // Exits the function and returns undefined to indicate invalid input.
        return undefined;
    }

    // Initializes an empty array to store scores that are above or equal to the threshold.
    let filteredScores = [];
    // Loops through the scores array.
    for (let i = 0; i < scores.length; i++) {
        // Checks if the current score is greater than or equal to the threshold.
        if (scores[i] >= threshold) {
            // Adds the score to the filteredScores array if it meets the condition.
            filteredScores.push(scores[i]);
        }
    }

    // Checks if there are no scores above the threshold.
    if (filteredScores.length === 0) return undefined; // Returns undefined if no scores meet the criteria.

    // Calculates the sum of the filtered scores.
    let sum = filteredScores.reduce((acc, score) => acc + score, 0);
    // Calculates the average of the filtered scores.
    let average = sum / filteredScores.length;

    // Returns the average, rounded to two decimal places.
    return parseFloat(average.toFixed(2));
}

```
#### Instructor's Note:
- Test the function using [Codepen](https://www.codepen.io/)
- Invoke the function and input the appropriate parameter
- sample: removeLowScoresAndCalculateAverage([70, 82, 50, 28, 91, 60], 60)
- removeLowScoresAndCalculateAverage([55, 42, 47], 60)