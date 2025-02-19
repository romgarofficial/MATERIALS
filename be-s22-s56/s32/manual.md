# Javascript ES6 Updates

### Discussion Topic List
- Exponent (5 mins)
- Template Literals (5 mins)
- Array Destructuring (5 mins)
- Arrow Functions (10 mins)
- Implicit Return Statement (5 mins)
- Class-based Object Blueprints (10 mins)
- toSorted() (5 mins)
- findLast() (15 mins)
- toSpliced() (10 mins)

Total: 75 mins

### Activity Topic List
#### Discussed
- Exponent (5 mins)
- Template Literals (5 mins)
- Array Destructuring (5 mins)
- Arrow Functions (10 mins)
- Implicit Return Statement (5 mins)
- Class-based Object Blueprints (10 mins)
- toSorted() (5 mins)
- findLast() (10 mins)
- toSpliced() (10 mins)

### Researched
- Object Destructuring - 15 mins
- Arrow Function with Loops - 10 mins
- Default Function Argument Value - 10 mins
- find() - 10 mins
- toReversed() - 10 mins
- with() - 10 mins

Total: 120 mins

## Resources

### References
- [JavaScript ES6](https://www.w3schools.com/js/js_es6.asp)
- [JavaScript Exponentation Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [JavaScript Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [JavaScript Expressions and Statements](https://medium.com/launch-school/javascript-expressions-and-statements-4d32ac9c0e74)
- [JavaScript Destructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [JavaScript Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [JavaScript Default Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [JavaScript Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [JavaScript toSorted Method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast)
- [JavaScript findLast Method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [JavaScript toSpliced Method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced)
    
### Tools/Technologies Version
```

```

## Code Discussion

### 1. Folder and File Preparation
#### batchfolder > individual > s32 > discussion > index.html
```html
<!DOCTYPE HTML>
<html>
    <head>
        <title>Activity: JavaScript ES6 Updates</title>
    </head>
    <body>
        <script src="./script.js"></script>
    </body>
</html>
```
#### batchfolder > individual > s32 > discussion > index.js
```js
console.log("Hello World!");
```

### 2. Step 1

#### Exponent Operator

#### batchfolder > individual > s32 > discussion > index.js
```js
// [SECTION] Exponent Operator

const firstNum = 8 ** 2; 
console.log(firstNum);

const secondNum = Math.pow(8, 2);
console.log(secondNum);
```
#### Template Literals
- Allows to write strings without using the concatenation operator (+)
- Greatly helps with code readability

#### batchfolder > individual > s32 > discussion > index.js
```js
/*...*/
console.log(secondNum);
// [SECTION] Template Literals
let name = "John";

// Pre-Template Literal String
// Uses single quotes ('')
let message = 'Hello ' + name + '! Welcome to programming!';
console.log("Message without template literals:" + message)

// Strings Using Template Literal
// Uses backticks (``)
message = `Hello ${name}! Welcome to programming!`;
console.log(`Message without template literals: ${message}`)

// Multi-line Using Template Literals
const anotherMessage = `
${name} attended a math competition.
He won it by solving the problem 8 ** 2 with the solution of ${firstNum}.
`

console.log(anotherMessage);
```
- Template literals allow us to write strings with embedded JavaScript expressions
- expressions are any valid unit of code that resolves to a value
- "${}" are used to include JavaScript expressions in strings using template literals

#### batchfolder > individual > s32 > discussion > index.js
```js
const interestRate = .1;
const principal = 1000;

console.log(`The interest on your savings account is: ${principal * interestRate}`);
```
#### Array Destructuring
- Allows to unpack elements in arrays into distinct variables
- Allows us to name array elements with variables instead of using index numbers
- Helps with code readability
- Syntax
    let/const [variableName, variableName, variableName] = array;

#### batchfolder > individual > s32 > discussion > index.js
```js
/*...*/

console.log(`The interest on your savings account is: ${principal * interestRate}`);
// [SECTION] Array Destructuring
const fullName = ["Juan", "Dela", "Cruz"];

// Pre-Array Destructuring
console.log(fullName[0]);
console.log(fullName[1]);
console.log(fullName[2]);

console.log(`Hello ${fullName[0]} ${fullName[1]} ${fullName[2]}! It's nice to meet you.`)

// Array Destructuring
const [firstName, middleName, lastName] = fullName;

console.log(firstName);
console.log(middleName);
console.log(lastName);

console.log(`Hello ${firstName} ${middleName} ${lastName}! It's nice to meet you.`);

```
#### Arrow Function
- Compact alternative syntax to traditional functions
- Useful for code snippets where creating functions will not be reused in any other portion of the code
- Adheres to the "DRY" (Don't Repeat Yourself) principle where there's no longer need to create a function and think of a name for functions that will only be used in certain code snippets
- Syntax:
    const variableName = () => {
    console.log()
    }
#### batchfolder > individual > s32 > discussion > index.js

```js
const hello = () => {
    console.log("Hello world!");
}
```
#### Pre-Arrow Function without Template Literals
- Syntax
    function functionName(parameterA, parameterB, parameterC) {
        console.log();
    }
#### batchfolder > individual > s32 > discussion > index.js
```js
function printFullName (firstName, middleInitial, lastName) {
    console.log(firstName + ' ' + middleInitial + '. ' + lastName);
}

printFullName("John", "D", "Smith");
```
**Important Note**
- comment out this codes before running the next codes.

#### Arrow Function with Template Literals
- Syntax
    const variableName = () => {
    console.log()
    }
#### batchfolder > individual > s32 > discussion > index.js
```js
const printFullName = (firstName, middleInitial, lastName) => {
    console.log(`${firstName} ${middleInitial}. ${lastName}`);
}

printFullName("John", "D", "Smith");

const students = ["John", "Jane", "Judy"];
```
#### Implicit Return Statement
- There are instances when you can omit the "return" statement
- This works because even without the "return" statement JavaScript implicitly adds it for the result of the function

#### Pre Arrow function without Implicit Return Statement
#### batchfolder > individual > s32 > discussion > index.js
```js
const add = (x, y) => {
    return x + y;
}

let total = add(1,2);
console.log(total);
```

#### Arrow Function with Implicit Return Statement
#### batchfolder > individual > s32 > discussion > index.js
```js
const add = (x, y) => x + y;

let total = add(1,2);
console.log(total);
```
#### Class-Based Object Blueprints
- Allows creation/instantiation of objects using classes as blueprints
- Creating a class blueprint
    - The constructor is a special method of a class for creating/initializing an object for that class.
    - The "this" keyword refers to the properties of an object created/initialized from the class
    - By using the "this" keyword and accessing an object's property, this allows us to reassign it's values
    - Syntax
        class className {
            constructor(objectPropertyA, objectPropertyB) {
                this.objectPropertyA = objectPropertyA;
                this.objectPropertyB = objectPropertyB;
            }
        }
#### batchfolder > individual > s32 > discussion > index.js
```js
class Car {
    constructor(brand, name, year) {
        this.brand = brand;
        this.name = name;
        this.year = year;
    }
}
```
- Instantiating an object
    - The "new" operator creates/instantiates a new object with the given arguments as the values of it's properties
    - No arguments provided will create an object without any values assigned to it's properties
    - Syntax:
        - let/const variableName = new ClassName();
#### batchfolder > individual > s32 > discussion > index.js
```js
let myCar = new Car();
```
**Important Note**
Comment out this codes before running the next codes.

- Instantiation using const keyword
    - Creating a constant with the "const" keyword and assigning it a value of an object makes it so we can't re-assign it with another data type
    - It does not mean that it's properties cannot be changed/immutable
#### batchfolder > individual > s32 > discussion > index.js
```js
const myCar = new Car();

console.log(myCar);
```
- Values of properties may be assigned after creation/instantiation of an object
```js
myCar.brand = "Ford";
myCar.name = "Ranger Raptor";
myCar.year = 2021;

console.log(myCar);

// Creating/instantiating a new object from the car class with initialized values
const myNewCar = new Car("Toyota", "Vios", 2021);

console.log(myNewCar);
```

#### ES14 Updates
- toSorted()
    - The toSorted() method is a new addition to JavaScript in ES14. 
    - It allows you to sort an array by returning a new array instead of updating the original array. 
    - The syntax for toSorted() is as follows:
    array.toSorted()
#### batchfolder > individual > s32 > discussion > index.js
```js
let array = [1, 2, 3, 4, 5];
//toSorted() should be able to return a new sorted array.
let sortedArray = array.toSorted();

//This allows us to sort an array without updatign the original array.
console.log("Original Array: ", array);
console.log("Sorted New Array: ", sortedArray);

//Unlike the use of sort() which updates the original array.
array.sort();
console.log("Original Array: ", array);
```
- findLast()
    - The findLast() method is a new addition to JavaScript in ES14. 
    - It allows you to find the last occurrence of an element in an array. 
    - Unlike find() which iterates the whole array but stops upon the first match of the condition.
    - The syntax for findLast() is as follows:
        - array.findLast(function(){
            return condition;
        })
#### batchfolder > individual > s32 > discussion > index.js
```js
let arrayNumbers = [15,2,8,6,24,23];

//findLast() allows us to find the last match of the condition.
//findLast() much like find() iterates over the whole array but instead it starts from the last index of the array.

//The number 23 will be shown first because findLast starts iteration at the end of the array
let lastEvenNumber = arrayNumbers.findLast((number) => {
    console.log(number);
});
```
**Important Note**
Refactor the codes to use findLast() with the condition to match
#### batchfolder > individual > s32 > discussion > index.js
```js
//The number 23 will be shown first because findLast starts iteration at the end of the array
let lastEvenNumber = arrayNumbers.findLast((number) => {
    console.log(number);

    return number % 2 === 0;
});

console.log(lastEvenNumber); //should be equal to 24 as this is the last even number in the array.
```
- toSpliced
    - The toSpliced() method is a new addition to JavaScript in ES14. 
    - It allows you to create an updated new array from the original array by removing or adding elements. 
    - The syntax for toSpliced() is as follows:
    array.toSpliced(startIndex, deleteCount, ...items)
        - toSpliced() takes in three parameters: startIndex, deleteCount, and items.
        - startIndex is the index of the first element to be removed.
        - deleteCount is the number of elements to be removed.
#### batchfolder > individual > s32 > discussion > index.js
```js
let songsList = ["Uhaw", "Ddu Ddu Ddu", "Raining In Manila", "Ere", "Jopay"]

//toSpliced() allows us to create an updated new array from the original array.
let updatedSongsList = songsList.toSpliced(2, 1, "Buloy");

console.log("Original Array: ", songsList);
console.log("Updated Array: ", updatedSongsList);
```
- splice() vs toSpliced()
    - splice() updates the original array
    - toSpliced() creates a new array
#### batchfolder > individual > s32 > discussion > index.js
```js
songsList.splice(2, 1, "Binhi");

console.log("Original Array: ", songsList);
```


## Activity
### Activity References
Sample:
- [JavaScript Destructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [JavaScript Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [JavaScript Default Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [ES14 Updates](https://www.infoworld.com/article/3703571/all-the-new-features-in-ecmascript-2023-es14.html)
- [JavaScript toReversed Method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed)
- [JavaScript find Method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [JavaScript with Method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/with)

### Activity Instructions

Member 1:
1. In the s32 folder, create an activity folder and an index.html and index.js file inside of it.
- Create an index.html file to attach our index.js file
- Copy the template provided by your Instructor and paste it in an index.js file.
- Update your local sessions git repository and push to git with the commit message of Add template code s32.
- Console log the message Hello World to ensure that the script file is properly associated with the html file.
2. Create a function called getCube which will receive a number as argument
- using exponent operator, return the cube of the number argument
3. Create a variable called cubedNumber.
- using template literals store the string "The cube of 2 is <invoke getCube function>">
    - use 2 as an argument when invoking the getCube function
- console log the cubedNumber variable.
4. Destructure the given array from into the following variables:
- houseNumber
- street
- state
- zipCode
5. Then, print out a message with the full address using Template Literals.

Member 4:
7. Loop through the given array using forEach, an arrow function and using the implicit return statement to print out the numbers.
    - Look up on the use case of array iteration in combination with arrow function in JavaScript.
8. Create a variable called reduceNumber and using the reduce array method and an arrow function, return the sum of all the numbers in the given array.

Member 5:
9. Create a class of a Book and a constructor that will accept a title, author, year and status with "Available" as default value as it’s properties. Have a default value of "Available" for the status property.
    - Look up how to setup default values of properties in a constructor.
10. Create/instantiate a new object from the class Book and store them inside an array called books.
11. Create a function booksSortedByYear to sort the books array by year.
    - This will receive two arguments.
    - Use a comparator function to sort the books by year.
    - Return the newly created sorted books array.
12. Create a function findCheckedOut to find the last book in the books array that has Check out status.
12. Create a function findCheckedOut to find the last book in the books array that has Check out status.
    - This function will receive an array as argument.
    - Use findLast() to find the last book that has Check out status.
    - Return the book found.
13. Create a function called booksToReplace to replace a book in the books array with a new book.
    - This function will receive a book object as argument.
    - Use toSplice() to replace the book in the books array with the book argument.
    - Return the newly created sorted books array.
14. Create a function called reversedBooks to reverse the current order of the books array.
    - Look up the use of toReversed() in javascript es14 update.
    - This function will receive an array as argument.
    - Use toReversed() to reverse the current order of the books array.
    - Return the newly created sorted books array.
15. Create a function called searchBookByTitle to search for a book in the books array using the title.
15. Create a function called searchBookByTitle to search for a book in the books array using the title.
    - Look up the use of find() in javascript es14 update.
    - This function will receive an array and a title as argument.
    - Use find() to search for a book in the books array using the title.
    - Return the newly created sorted books array.
16. Create a function called checkOutBook to change the status of a bought book into "Checked Out"
    - Look up the use of with() in javascript es14 update.
    - This function will receive a book as an argument
    -  Use with() to change the status of the book book argument into "Checked Out"
    - Return the updated book object.


All Members:
17. Check out to your own git branch with git checkout -b <branchName>
18. Update your local sessions git repository and push to git with the commit message of Add activity code s32.
19. Add the sessions repo link in Boodle for s32.


#### Activity Solution:
```js
//Important Note: Do not change the variable names. All required classes, variables and function names are listed in the exports.

// Exponent Operator
const getCube = 2 ** 3;

// Template Literals
console.log(`The cube of 2 is ${getCube}`);

// Array Destructuring
const address = ["258", "Washington Ave NW", "California", "90011"];

const [ houseNumber, street, state, zipCode ] = address;

console.log(`I live at ${houseNumber} ${street}, ${state} ${zipCode}`);

// Object Destructuring (reasearched)
const animal = {
	name: "Lolong",
	species: "saltwater crocodile",
	weight: "1075 kgs",
	measurement: "20 ft 3 in"
}

const { name, species, weight, measurement } = animal;

console.log(`${name} was a ${species}. He weighed at ${weight} with a measurement of ${measurement}.`);

// Arrow Functions (reasearched)
let numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => console.log(number));

let reduceNumber = numbers.reduce((x, y) => x + y);

// [SECTION] Default Function Argument Value
// Provides a default argument value if none is provided when the function is invoked

const greet = (name = 'User') => {
    return `Good morning, ${ name }!`;
}

console.log(greet());

console.log(reduceNumber);

// Javascript Classes
class Book {
  constructor(title, author, year, status = 'Available') {
    this.title = title;
    this.author = author;
    this.year = year;
    this.status = status;
  }
}
book1 = new Book("JavaScript: The Good Parts", "Douglas Crockford", 2011)
book2 = new Book("Eloquent JavaScript", "Marijn Haverbeke", 2008, "Checked Out")
book3 = new Book("You Don't Know JS", "Kyle Simpson", 2015)

let books = [
  book1,
  book2,
  book3
];

// Using toSorted() to sort books by year
function booksSortedByYear(a, b) {
toSortedBooks = books.toSorted((a, b) => a.year - b.year);
return toSortedBooks;
}
let sortedBooks = booksSortedByYear();
console.log(sortedBooks);

// Use findLast() to find the last bought book
function findLastBought(array) {
  // Using findLast() to find the last book added to the "Checked Out" status
  let lastCheckedOut = array.findLast(element => element.status === "Checked Out");
  return lastCheckedOut;
}
let checkedOut = findLastBought(books);
console.log(checkedOut);

// Using toSpliced() to replace a book
function booksToReplace(newBook) {
  toSplicedBooks = books.toSpliced(2, 1, newBook); // Adds at index 2, removes 1 book
  return toSplicedBooks;
}
replacementBook = new Book("JavaScript Everywhere", "Adam D. Scott", 2020);
let splicedBooks = booksToReplace(replacementBook);
console.log(splicedBooks);
// does not affect the original array
console.log("Original Array:",books);

function reversedBooks(books) {
  toReversedBooks = books.toReversed();
  return toReversedBooks;
}
let booksReversed = reversedBooks(books);
console.log("reversed books: ", booksReversed);

function searchBooksByTitle(books, searchTitle) {
  // Using find() to locate a book by title
  let foundBook = books.find(element => element.title === searchTitle);
  return foundBook;
}
let searchBook = searchBooksByTitle(books, "JavaScript: The Good Parts");
console.log(searchBook);

// Simulating the check-out process using 'with()' - assuming it's a method to update the book's status
function checkOutBook(book) {
  // Using with() to update the book's status
  with(book) {
    status = "Checked Out";
  }
  return book;
}
// book4 = new Book("A Smarter Way to Learn JavaScript", "Mark Myers", 2014, "Available");
let boughtBook = checkOutBook(books[0]);
console.log(boughtBook);
console.log(books);
  
//Do not modify
//For exporting to test.js
//All variables and function names needed are added here.
try{
    module.exports = {

        getCube: typeof getCube !== 'undefined' ? getCube : null,
        houseNumber: typeof houseNumber !== 'undefined' ? houseNumber : null,
        street: typeof street !== 'undefined' ? street : null,
        state: typeof state !== 'undefined' ? state : null,
        zipCode: typeof zipCode !== 'undefined' ? zipCode : null,
        name: typeof name !== 'undefined' ? name : null,
        species: typeof species !== 'undefined' ? species : null,
        weight: typeof weight !== 'undefined' ? weight : null,
        measurement: typeof measurement !== 'undefined' ? measurement : null,
        reduceNumber: typeof reduceNumber !== 'undefined' ? reduceNumber : null,
        Dog: typeof Dog !== 'undefined' ? Dog : null

    }
} catch(err){

}
```
