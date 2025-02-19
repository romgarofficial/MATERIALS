# Array Non-Mutator Methods
# Learning Objectives

At the end of the session, the students are expected to:

- manage sets of related data by using JavaScript arrays.

# Resources

## Supplemental Materials

- [JavaScript Arrays (w3schools)](https://www.w3schools.com/js/js_arrays.asp)
- [JavaScript Array (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

# Lesson Proper

# Code Discussion

## Folder and File Preparation

Create a folder named **s30**, a folder named **discussion** inside the **s30** folder, then a file named **index.html** and **index.js** inside the **discussion** folder.

## Manipulating Arrays with Array Methods

**Javascript** has **built-in** functions and methods for arrays. This allows us to manipulate and access array items.

Arrays can either be **mutated** or **iterated**.

Array **mutations** seek to **modify** the contents of an array while array **iterations** aim to **evaluate** and **loop** over each element in an array.

### Non-Mutator Methods

- Non-Mutator methods are functions that do not modify or change an array after they're created
- These methods do not manipulate the original array performing various tasks such as returning elements from an array and combining arrays and printing the output

```js
    let countries = ['US', 'PH', 'CAN', 'SG', 'TH', 'PH', 'FR', 'DE'];
```
indexOf()

- Returns the index number of the first matching element found in an array
- If no match was found, the result will be -1.
- The search process will be done from first element proceeding to the last element
- Syntax
    - arrayName.indexOf(searchValue);
    - arrayName.indexOf(searchValue, fromIndex);
```js
let firstIndex = countries.indexOf('PH');
console.log('Result of indexOf method: ' + firstIndex);

let invalidCountry = countries.indexOf('BR');
console.log('Result of indexOf method: ' + invalidCountry);
```

lastIndexOf()

- Returns the index number of the last matching element found in an array
- The search process will be done from last element proceeding to the first element
- Syntax
    - arrayName.lastIndexOf(searchValue);
    - arrayName.lastIndexOf(searchValue, fromIndex);

```js
// Getting the index number starting from the last element
let lastIndex = countries.lastIndexOf('PH');
console.log('Result of lastIndexOf method: ' + lastIndex);

// Getting the index number starting from a specified index
let lastIndexStart = countries.lastIndexOf('PH', 6);
console.log('Result of lastIndexOf method: ' + lastIndexStart);
```

slice()

- Portions/slices elements from an array AND returns a new array
- Syntax
    - arrayName.slice(startingIndex);
    - arrayName.slice(startingIndex, endingIndex);

```js
// Slicing off elements from a specified index to the last element
let slicedArrayA = countries.slice(2);
console.log('Result from slice method:');
console.log(slicedArrayA);

// Slicing off elements from a specified index to another index
let slicedArrayB = countries.slice(2, 4);
console.log('Result from slice method:');
console.log(slicedArrayB);

// Slicing off elements starting from the last element of an array
let slicedArrayC = countries.slice(-3);
console.log('Result from slice method:');
console.log(slicedArrayC);
```

toString()
- Returns an array as a string separated by commas
- Syntax
    - arrayName.toString();
```js
let stringArray = countries.toString();
console.log('Result from toString method:');
console.log(stringArray);
```

concat()

- Combines two arrays and returns the combined result
- Syntax
    - arrayA.concat(arrayB);
    - arrayA.concat(elementA);

```js
let tasksArrayA = ['drink html', 'eat javascript'];
let tasksArrayB = ['inhale css', 'breathe sass'];
let tasksArrayC = ['get git', 'be node'];

let tasks = tasksArrayA.concat(tasksArrayB);
console.log('Result from concat method:');
console.log(tasks);

// Combining multiple arrays
console.log('Result from concat method:');
let allTasks = tasksArrayA.concat(tasksArrayB, tasksArrayC);
console.log(allTasks);

// Combining arrays with elements
let combinedTasks = tasksArrayA.concat('smell express', 'throw react');
console.log('Result from concat method:');
console.log(combinedTasks);
```
join()

- Returns an array as a string separated by specified separator string
- Syntax
    - arrayName.join('separatorString');

```js
let users = ['John', 'Jane', 'Joe', 'Robert'];

console.log(users.join());
console.log(users.join(''));
console.log(users.join(' - '));
```
### Iteration Methods

- Iteration methods are loops designed to perform repetitive tasks on arrays
- Iteration methods loops over all items in an array.
- Useful for manipulating array data resulting in complex tasks
- Array iteration methods normally work with a function supplied as an argument
- How these function works is by performing tasks that are pre-defined within an array's method.

forEach()

- Similar to a for loop that iterates on each array element.
- For each item in the array, the anonymous function passed in the forEach() method will be run.
- The anonymous function is able to receive the current item being iterated or loop over by assigning a parameter.
- Variable names for arrays are normally written in the plural form of the data stored in an array
- It's common practice to use the singular form of the array content for parameter names used in array loops
- forEach() does not return anything.
- Syntax
    - arrayName.forEach(function(indivElement) {
            statement
        })
```js
allTasks.forEach(function(task) {
    console.log(task);
});

// Using forEach with conditional statements
let filteredTasks = [];

```
Looping through all Array Items

- It's good practice to print the current element in the console when working with array iteration methods to have an idea of what information is being worked on for each iteration of the loop
- Creating a separate variable to store results of array iteration methods are also good practice to avoid confusion by modifying the original array
- Mastering loops and arrays allow us developers to perform a wide range of features that help in data management and analysis

```js
allTasks.forEach(function(task) {

    // console.log(task)

    // If the element/string's length is greater than 10 characters
    if(task.length > 10) {

        // console.log(task)

        // Add the element to the filteredTasks array
        filteredTasks.push(task);

    }
});

console.log("Result of filtered tasks:");
console.log(filteredTasks);


//Let's try with an array of objects
let adminList = [];

let users = [
    {
        username: "peterSmith",
        isAdmin: false
    },
    {
        username: "andrewJones99",
        isAdmin: true
    },
    {
        username: "alexMartin",
        isAdmin: false
    },
    {
        username: "smithyS",
        isAdmin: true
    }

];

//Just like a loop we can iterate over each object in the array using forEach(). Which means that the function given as an argument will be run for each item in the array:

//In this example, each item in the array is represented as user parameter.
//For each item in the array, we will run the code block.
users.forEach(user => {

    //You can console log for each item in the array
    //each object is displayed in the console.
    console.log(user)

    //You can then add an if statement and push only user objects whose isAdmin is equal to true
    if(user.isAdmin === true){
        //Push the current user's username being looped into the adminList array.
        adminList.push(user.username)
    }    

})

//The adminList should now contain the usernames of all admin users.
console.log(adminList);

//However, the users array remains the same.
console.log(users);

```
map() 

- Iterates on each element AND returns new array with different values depending on the result of the function's operation
- This is useful for performing tasks where mutating/changing the elements are required
- Unlike the forEach method, the map method requires the use of a "return" statement in order to create another array with the performed operation
- Syntax
    - let/const resultArray = arrayName.map(function(indivElement))

```js
let numbers = [1, 2, 3, 4, 5];

let numberMap = numbers.map(function(number) {

    //console.log(number) //log the current item being iterated or looped over in the console.
    return number * number;
});

console.log("Original Array:");
console.log(numbers);//Original is unaffected by map()
console.log("Result of map method:");
console.log(numberMap);//A new array is returned by map() and stored in the variable.

//map() vs forEach()

let numberForEach = numbers.forEach(function(number){

    //console.log(number) //log the current item being iterated or looped over in the console.
    return number * number

})

console.log(numberForEach);//undefined. 

//forEach(), loops over all items in the array as does map(), but forEach() does not return a new array.
```

every() 

- Checks if all elements in an array meet the given condition
- This is useful for validating data stored in arrays especially when dealing with large amounts of data
- Returns a true value if all elements meet the condition and false if otherwise
- Syntax
    - let/const resultArray = arrayName.every(function(indivElement) {
            return expression/condition;
        })

```js
let allValid = numbers.every(function(number) {
    return (number < 3);
});
console.log("Result of every method:");
console.log(allValid);
```

some()

- Checks if at least one element in the array meets the given condition
- Returns a true value if at least one element meets the condition and false if otherwise
- Syntax
    - let/const resultArray = arrayName.some(function(indivElement) {
            return expression/condition;
        })
```js
let someValid = numbers.some(function(number) {
    return (number < 2);
});
console.log("Result of some method:");
console.log(someValid);

// Combining the returned result from the every/some method may be used in other statements to perform consecutive results
if (someValid) {
    console.log('Some numbers in the array are greater than 2');
};
```

filter() 

- Returns new array that contains elements which meets the given condition
- Returns an empty array if no elements were found
- Useful for filtering array elements with a given condition and shortens the syntax compared to using other array iteration methods
- Mastery of loops can help us work effectively by reducing the amount of code we use
- Several array iteration methods may be used to perform the same result
- Syntax
    - let/const resultArray = arrayName.filter(function(indivElement) {
            return expression/condition;
        })

```js
let filterValid = numbers.filter(function(number) {
    return (number <  3);
});
console.log("Result of filter method:");
console.log(filterValid);

// No elements found
let nothingFound = numbers.filter(function(number) {
    return (number = 0);
})
console.log("Result of filter method:");
console.log(nothingFound);

// Filtering using foreach
let filteredNumbers = [];

numbers.forEach(function(number){

    // console.log(number);

    if(number < 3) {
        filteredNumbers.push(number);
    }
})
console.log("Result of filter method:");
console.log(filteredNumbers);

//Let's try an array of objects

let movies = [

    {
        name: "The Godfather",
        rating: 5
    },
    {
        name: "Star Wars IV: A New Hope",
        rating: 4
    },
    {
        name: "Schindler's List",
        rating: 5
    }

];

//filtered array of movies that have rating of at least 5

let fiveStarMovies = movies.filter(movie => {
    //Similar to other iterator methods, filter will loop over all items in the array.
    console.log(movie)

    //All items which will satisfy the given condition or return true will be added to the filtered array.
    return movie.rating > 5;

})

console.log(fiveStarMovies);
```
includes()

- includes() method checks if the argument passed can be found in the array.
    - it returns a boolean which can be saved in a variable.
        - returns true if the argument is found in the array.
        - returns false if it is not.
    - Syntax:
        arrayName.includes(<argumentToFind>)

```js

    let products = ['Mouse', 'Keyboard', 'Laptop', 'Monitor'];

    let productFound1= products.includes("Mouse");

    console.log(productFound);//returns true

    let productFound2 = products.includes("Headset");

    console.log(productFound);//returns false
```

- Methods can be "chained" using them one after another
- The result of the first method is used on the second method until all "chained" methods have been resolved.
-forEach() cannot be chained as it does not return anything.
- How chaining resolves in our example:
    1. The "product" element will be converted into all lowercase letters
    2. The resulting lowercased string is used in the "includes" method
```js
let filteredProducts = products.filter(function(product){
    return product.toLowerCase().includes('a');
})

console.log(filteredProducts);
```
reduce() 
- Evaluates elements from left to right and returns/reduces the array into a single value
- Syntax
    - let/const resultArray = arrayName.reduce(function(accumulator, currentValue) {
            return expression/operation
        })
    - The "accumulator" parameter in the function stores the result for every iteration of the loop
    - The "currentValue" is the current/next element in the array that is evaluated in each iteration of the loop
    - How the "reduce" method works
        1. The first/result element in the array is stored in the "accumulator" parameter
        2. The second/next element in the array is stored in the "currentValue" parameter
        3. An operation is performed on the two elements
        4. The loop repeats step 1-3 until all elements have been worked on
```js
let iteration = 0;

let reducedArray = numbers.reduce(function(x, y) {
    // Used to track the current iteration count and accumulator/currentValue data
    console.warn('current iteration: ' + ++iteration);
    console.log('accumulator: ' + x);
    console.log('currentValue: ' + y);

    // The operation to reduce the array into a single value
    return x + y;
});
console.log("Result of reduce method: " + reducedArray);

// reducing string arrays
let list = ['Hello', 'Again', 'World'];

let reducedJoin = list.reduce(function(x, y) {
    return x + ' ' + y;
});
console.log("Result of reduce method: " + reducedJoin);
```
**Important Note:**
    - If additional examples would be provided on Iterator methods that are not included in the session, it's recommended to focus the discussion on forEach, map, filter and reduce methods which are common array iterators that we use.
    - Refer to "references" section of this file to find the documentations for JavaScript Array forEach Method, JavaScript Array map Method, JavaScript Array every Method, JavaScript Array some Method, JavaScript Array filter Method, JavaScript String includes Method and JavaScript Reduce Method.

# Activity
=================================
Activity Documentation References
=================================

### Activity References
- [JS Non-Mutator Methods](https://dev.to/ibrahima92/javascript-array-methods-mutator-vs-non-mutator-15e2)
- [JS Iterator Methods](https://www.w3schools.com/js/js_array_iteration.asp)
- [JS Array of Objects](https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/)
- [JS Array includes Method](https://www.w3schools.com/jsref/jsref_includes_array.asp)
- [JS Array Reduce Method](https://www.w3schools.com/jsref/jsref_reduce.asp)
- [JS Array toString Method](https://www.w3schools.com/jsref/jsref_tostring_array.asp)
- [JS Array join Method](https://www.w3schools.com/jsref/jsref_join.asp)

Member 1:

1. In the S30 folder, create an activity folder and an index.html and index.js file inside of it.
- Create an index.html file to attach our index.js file
- Copy the template from boodle notes and paste it in an index.js file.
- Update your local sessions git repository and push to git with the commit message of Add template code s30.
- Console log the message Hello World to ensure that the script file is properly associated with the html file.
2. Create a function called displayValues() which is able to receive an array of numbers and display cubed values in the console.
     -  Use the forEach() method to print each number’s cubed value on a new line.

Member 2:

3. Write a function called celsiusToFahrenheit that takes an array of Celsius temperatures as input and returns an array of converted values to Fahrenheit.
    - Create a new variable inside the function called convertedArray.
    - Use the map() method to convert each temperature to Fahrenheit and save it into the variable. 
    - Return the convertedArray variable.
4. Write a function called areAllEven that takes an array of numbers as input and returns a boolean which determines if all the numbers given are even or not.
    - Create a new variable inside the function called isEven.
    - Use the every() method to check if all the numbers are even and save the result into the variable. 
    - Return the isEven variable.

Member 3:

5. Write a function called hasDivisibleBy8 that takes an array of numbers as input and returns a boolean which determines if the array contains at least one number divisible by 8.
    - Create a new variable called hasDivisible
    - Use the some() method to check if at least one of the given values is divisible by 8, save the result in the hasDivisible variable.
    - Return the hasDivisible variable.

Member 4:

6. Write a function called filterEvenNumbers that takes an array of numbers as input and returns a new array containing only the even numbers from the original array.
    - Create a new variable called filteredNum
    - Use the filter() method to create a new array of only the even numbers from the original array save it in the filteredNum variable.
    - Return the filteredNum variable.

Member 5:

7. Write a function called getProductNames which is able to receive an array of product objects and return a new array of only the name values of each product.
8. Write a function called getProductNames which is able to receive an array of product objects and return a new array of only the name values of each product.
    - Create a new variable called productNames
    - Use the map() method to return only the product names of each product object into a new array which we can save in the productNames variable.
    - Return the productNames variable.

All Members:
9. Check out to your own git branch with git checkout -b <branchName>
10. Update your local sessions git repository and push to git with the commit message of Add activity code s30.
11. Add the sessions repo link in Boodle for s30.



## Solution

```jsx
/*
    Create functions which can manipulate our arrays.
*/
/*
    
   1. Create a function called displayValues() which is able to receive an array of numbers and display cubed values in the console.
        - Use the forEach() method to print the square of each number on a new line.
*/

    function displayCubedValues(values){
        values.forEach(value => {
            console.log(value**3);
        })
    }


/*
    2. Write a function called celsiusToFahrenheit that takes an array of Celsius temperatures as input returns an array of converted values to Fahrenheit.
        - Create a new variable inside the function called convertedArray.
        - Use the map() method to convert each temperature to Fahrenheit and save it into the variable. 
        - return the convertedArray variable.
*/

    function celsiusToFahrenheit(celsiusArr){

        let convertedArray = celsiusArr.map(function(celsius) {
            return (celsius * 9/5) + 32;
          });

          return convertedArray;
    }


/*
    3. Write a function called areAllEven that takes an array of numbers as input and returns a boolean which determines if all the numbers given are even or not.
        - Create a new variable inside the function called isEven.
        - Use the every() method to check if all the numbers are even and save the result into the variable. 
    T   - Return the isEven variable.

*/


// function areAllEven(numbers) {
//     return numbers.every(function(number) {
//       return number % 2 === 0;
//     });
//   }

    function areAllEven(numbers) {
        let isEven = numbers.every(function(number) {
        return number % 2 === 0;
        });

        return isEven;
    }
    

/*
   4. Write a function called hasDivisibleBy8 that takes an array of numbers as input returns a boolean which determines if the array contains at least one number divisible by 8.
    - Create a new variable called hasDivisible
    - Use the some() method to check if at least one of the given values is divisible by 8, save the result in the hasDivisible variable.
    - Return the hasDivisible variable.

*/

    function hasDivisibleBy8(numbers){
        let hasDivisible = numbers.some(number => {
            return number % 8 === 0;
        })

        return hasDivisible;
    }



/*
    5. Write a function called filterEvenNumbers that takes an array of numbers as input and returns a new array containing only the even numbers from the original array.
        - Create a new variable called filteredNum
        - Use the filter() method to create a new array of only the even numbers from the original array save it in the filteredNum variable.
        - Return the filteredNum variable.

*/

    function filterEvenNumbers(numbers){
        
        let filteredNum;
        filteredNum = numbers.filter(number => {
            return number % 2 === 0;
        })

        return filteredNum;

    }

/*
    6. Write a function called getProductNames which is able to receive an array of product objects and return a new array of only the name values of each product.
        - Create a new variable called productNames
        - Use the map() method to return only the product names of each product object into a new array which we can save in the productNames variable.
        - Return the productNames variable.

*/

    let productsArray = [
        {
            name: "Shampoo",
            price: 90
        },
        {
            name: "Toothbrush",
            price: 50
        },
        {
            name: "Soap",
            price: 25
        },
        {
            name: "Toothpaste",
            price: 45
        },
    ];


    function getProductNames(products){

        let productNames = products.map(product => product.name);

        return productNames;

    }


//Do not modify
//For exporting to test.js
try{
    module.exports = {

        getCubedValues: typeof getCubedValues !== 'undefined' ? getCubedValues : null,
        areAllEven: typeof areAllEven !== 'undefined' ? areAllEven : null,
        hasDivisibleBy8: typeof hasDivisibleBy8 !== 'undefined' ? hasDivisibleBy8 : null,
        celsiusToFahrenheit: typeof celsiusToFahrenheit !== 'undefined' ? celsiusToFahrenheit : null,
        filterEvenNumbers: typeof filterEvenNumbers !== 'undefined' ? filterEvenNumbers : null,
        getProductNames: typeof getProductNames !== 'undefined' ? getProductNames : null,

    }
} catch(err){

}
```