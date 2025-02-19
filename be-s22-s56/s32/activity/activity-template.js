//Important Note: Do not change the variable names. 
//All required classes, variables and function names are listed in the exports.

// Exponent Operator

// Template Literals

// Array Destructuring
const address = ["258", "Washington Ave NW", "California", "90011"];

// Object Destructuring
const animal = {
	name: "Lolong",
	species: "saltwater crocodile",
	weight: "1075 kgs",
	measurement: "20 ft 3 in"
}


// Arrow Functions
let numbers = [1, 2, 3, 4, 5];

// Javascript Classes


// ES14 Updates

// booksSortedByeYear()

// findLastBought()

// booksToReplace()

// reversedBooks()

// searchBooksByTitle()

// checkOutBook()



//Do not modify
//For exporting to test.js
//Note: Do not change any variable and function names. All variables and functions to be checked are listed in the exports.
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