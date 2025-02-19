/* 
1. In the s32 folder, create an activity folder and an index.html and index.js file inside of it.
- Create an index.html file to attach our index.js file
- Copy the template from code-sharing platforms given by the instructor and paste it in an index.js file.
- Update your local sessions git repository and push to git with the commit message of Add template code s32.
- Console log the message Hello World to ensure that the script file is properly associated with the html file.
*/

//Important Note: Do not change the variable names. All required classes, variables and function names are listed in the exports.

/* 
2. Create a variable called getCube and use the exponent operator to compute for the cube of 2. (A cube is any number raised to 3)
*/
// Exponent Operator
function getCube(number){
  return number ** 3;
}
number = 2

/* 
3. Using Template Literals, print out the value of the getCube variable with a message of The cube of <inputNum> is <cubedValue>
*/
// Template Literals
console.log(`The cube of ${number} is ${getCube(number)}`);

/* 
4. Destructure the given array from into the following variables:
- houseNumber
- street
- state
- zipCode
5. Then, print out a message with the full address using Template Literals.
*/
// Array Destructuring
const address = ["258", "Washington Ave NW", "California", "90011"];

const [ houseNumber, street, state, zipCode ] = address;

console.log(`I live at ${houseNumber} ${street}, ${state} ${zipCode}`);


/* 
6. Destructure the given object and print out a message with the details of the animal using Template Literals.
*/
// Object Destructuring (reasearched)
const animal = {
	name: "Lolong",
	species: "saltwater crocodile",
	weight: "1075 kgs",
	measurement: "20 ft 3 in"
}

const { name, species, weight, measurement } = animal;

console.log(`${name} was a ${species}. He weighed at ${weight} with a measurement of ${measurement}.`);

/* 
7. Loop through the given array using forEach, an arrow function and using the implicit return statement to print out the numbers.
    - Look up on the use case of array iteration in combination with arrow function in JavaScript.
*/
// Arrow Functions (reasearched)
let numbers = [1, 2, 3, 4, 5];

function numbersForEach (){
  numbers.forEach((number) => console.log(number));
}

/* 
8. Create a variable called reduceNumber and using the reduce array method and an arrow function, return the sum of all the numbers in the given array.
*/
let reduceNumber = numbers.reduce((x, y) => x + y);

console.log(reduceNumber);
/* 
9. Create a class of a Book and a constructor that will accept a title, author, year and status with "Available" as default value as it’s properties. Have a default value of "Available" for the status property.
    - Look up how to setup default values of properties in a constructor.
*/
const greet = (name = 'User') => {
    return `Good morning, ${ name }!`;
}
console.log(greet());

/* 
10. Create/instantiate a new object from the class Book and store them inside an array called books.
*/
// Javascript Classes
class Book {
  constructor(title, author, year, status = 'Available') {
    this.title = title;
    this.author = author;
    this.year = year;
    this.status = status;
  }
}
book1 = new Book("JavaScript: The Good Parts", "Douglas Crockford", 2011, "Checked Out")
book2 = new Book("Eloquent JavaScript", "Marijn Haverbeke", 2008, "Checked Out", "Available")
book3 = new Book("You Don't Know JS", "Kyle Simpson", 2015, "Checked Out")

let books = [
  book1,
  book2,
  book3
];

/* 
11. Create a function booksSortedByYear to sort the books array by year.
    - This will receive two arguments.
    - Use a comparator function to sort the books by year.
    - Return the newly created sorted books array.
*/
// Using toSorted() to sort books by year
function booksSortedByYear() {
toSortedBooks = books.toSorted((a, b) => a.year - b.year);
return toSortedBooks;
}
let sortedBooks = booksSortedByYear();
console.log(sortedBooks);

/* 
12. Create a function findLastBought to find the last book in the books array that has Check out status.
    - This function will receive an array as argument.
    - Use findLast() to find the last book that has Check out status.
    - Return the book found.
*/
// Use findLast() to find the last bought book
function findLastBought(array) {
  // Using findLast() to find the last book added to the "Checked Out" status
  let lastCheckedOut = array.findLast(element => element.status === "Checked Out");
  return lastCheckedOut;
}
let checkedOut = findLastBought(books);
console.log(checkedOut);

/* 
13. Create a function called booksToReplace to replace a book in the books array with a new book.
    - This function will receive a book object as argument.
    - Use toSplice() to replace the book in the books array with the book argument.
    - Return the newly created sorted books array.
*/
// Using toSpliced() to replace a book
function booksToReplace(newBook) {
  toSplicedBooks = books.toSpliced(2, 1, newBook); // Adds at index 2, removes 1 book
  return toSplicedBooks;
}
replacementBook = new Book("JavaScript Everywhere", "Adam D. Scott", 2020, "Available");
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
        address: typeof address !== 'undefined' ? address : null,
        houseNumber: typeof houseNumber !== 'undefined' ? houseNumber : null,
        street: typeof street !== 'undefined' ? street : null,
        state: typeof state !== 'undefined' ? state : null,
        zipCode: typeof zipCode !== 'undefined' ? zipCode : null,
        animal: typeof animal !== 'undefined' ? animal : null,
        name: typeof name !== 'undefined' ? name : null,
        species: typeof species !== 'undefined' ? species : null,
        weight: typeof weight !== 'undefined' ? weight : null,
        measurement: typeof measurement !== 'undefined' ? measurement : null,
        numbersForEach: typeof numbersForEach !== 'undefined' ? numbersForEach : null,
        reduceNumber: typeof reduceNumber !== 'undefined' ? reduceNumber : null,
        numbers: typeof numbers !== 'undefined' ? numbers : null,
        greet: typeof greet !== 'undefined' ? greet : null,
        Book: typeof Book !== 'undefined' ? Book : null,
        books: typeof books !== 'undefined' ? books : null,
        sortedBooks: typeof sortedBooks !== 'undefined' ? sortedBooks : null,
        booksSortedByYear: typeof booksSortedByYear !== 'undefined' ? booksSortedByYear : null,
        findLastBought: typeof findLastBought !== 'undefined' ? findLastBought : null,
        booksToReplace: typeof booksToReplace !== 'undefined' ? booksToReplace : null,
        replacementBook: typeof replacementBook !== 'undefined' ? replacementBook : null,
        reversedBooks: typeof reversedBooks !== 'undefined' ? reversedBooks : null,
        booksReversed: typeof booksReversed !== 'undefined' ? booksReversed : null,
        searchBooksByTitle: typeof searchBooksByTitle !== 'undefined' ? searchBooksByTitle : null,
        searchBook: typeof searchBook !== 'undefined' ? searchBook : null,
        checkOutBook: typeof checkOutBook !== 'undefined' ? checkOutBook : null,
        boughtBook: typeof boughtBook !== 'undefined' ? boughtBook : null

    }
} catch(err){

}