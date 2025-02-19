// console.log('Hello World');

// [SECTION] Exponent Operator

const firstNum = 8 ** 2; 
console.log(firstNum);

const secondNum = Math.pow(8, 2);
console.log(secondNum);

// [SECTION] Template Literals
/*
	- Allows to write strings without using the concatenation operator (+)
	- Greatly helps with code readability
*/

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

/*
	- Template literals allow us to write strings with embedded JavaScript expressions
	- expressions are any valid unit of code that resolves to a value
	- "${}" are used to include JavaScript expressions in strings using template literals
*/
const interestRate = .1;
const principal = 1000;

console.log(`The interest on your savings account is: ${principal * interestRate}`);

// [SECTION] Array Destructuring
/*
	- Allows to unpack elements in arrays into distinct variables
	- Allows us to name array elements with variables instead of using index numbers
	- Helps with code readability
	- Syntax
		let/const [variableName, variableName, variableName] = array;
*/

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

// [SECTION] Arrow Functions
/*
	- Compact alternative syntax to traditional functions
	- Useful for code snippets where creating functions will not be reused in any other portion of the code
	- Adheres to the "DRY" (Don't Repeat Yourself) principle where there's no longer need to create a function and think of a name for functions that will only be used in certain code snippets
*/

/*
const variableName = () => {
	console.log()
}
*/

const hello = () => {
	console.log("Hello world!");
}

// Pre-Arrow Function and Template Literals
/*
	- Syntax
		function functionName(parameterA, parameterB, parameterC) {
			console.log();
		}
*/

function printFullName (firstName, middleInitial, lastName) {
    console.log(firstName + ' ' + middleInitial + '. ' + lastName);
}

printFullName("John", "D", "Smith");


// Arrow Function
/*
	- Syntax
		let/const variableName = (parameterA, parameterB, parameterC) => {
			console.log();
		}
*/

const printFullName = (firstName, middleInitial, lastName) => {
    console.log(`${firstName} ${middleInitial}. ${lastName}`);
}

printFullName("John", "D", "Smith");

const students = ["John", "Jane", "Judy"];

// [SECTION] Implicit Return Statement
/*
	- There are instances when you can omit the "return" statement
	- This works because even without the "return" statement JavaScript implicitly adds it for the result of the function
*/

// Pre-Arrow Function

const add = (x, y) => {
    return x + y;
}

let total = add(1,2);
console.log(total);

// Arrow Function
const add = (x, y) => x + y;

let total = add(1,2);
console.log(total);

// [SECTION] Class-Based Object Blueprints
/*
	- Allows creation/instantiation of objects using classes as blueprints
*/

// Creating a class
/*
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
*/
class Car {
	constructor(brand, name, year) {
		this.brand = brand;
		this.name = name;
		this.year = year;
	}
}

// Instantiating an object
/*
	- The "new" operator creates/instantiates a new object with the given arguments as the values of it's properties
	- No arguments provided will create an object without any values assigned to it's properties
	- let/const variableName = new ClassName();
*/
// let myCar = new Car();

/*
	- Creating a constant with the "const" keyword and assigning it a value of an object makes it so we can't re-assign it with another data type
	- It does not mean that it's properties cannot be changed/immutable
*/
const myCar = new Car();

console.log(myCar);

// Values of properties may be assigned after creation/instantiation of an object
myCar.brand = "Ford";
myCar.name = "Ranger Raptor";
myCar.year = 2021;

console.log(myCar);

// Creating/instantiating a new object from the car class with initialized values
const myNewCar = new Car("Toyota", "Vios", 2021);

console.log(myNewCar);

// [SECTION] ES14 Updates

/* toSorted() */

/* 
	What is to toSorted()? 
	The toSorted() method is a new addition to JavaScript in ES14. 
	It allows you to sort an array by returning a new array instead of updating the original array. 
	
	The syntax for toSorted() is as follows:
	array.toSorted()
*/

	let array = [1, 2, 3, 4, 5];
	//toSorted() should be able to return a new sorted array.
	let sortedArray = array.toSorted();

	//This allows us to sort an array without updatign the original array.
	console.log("Original Array: ", array);
	console.log("Sorted New Array: ", sortedArray);

	//Unlike the use of sort() which updates the original array.
	array.sort();
	console.log("Original Array: ", array);

/* findLast() */

/* What is findLast()?
	The findLast() method is a new addition to JavaScript in ES14. 
	It allows you to find the last occurrence of an element in an array. 
	Unlike find() which iterates the whole array but stops upon the first match of the condition.
	
	The syntax for findLast() is as follows:
	array.findLast(function(){
		return condition;
	})
*/

let arrayNumbers = [15,2,8,6,24,23];

//findLast() allows us to find the last match of the condition.
//findLast() much like find() iterates over the whole array but instead it starts from the last index of the array.

//The number 23 will be shown first because findLast starts iteration at the end of the array
let lastEvenNumber = arrayNumbers.findLast((number) => {
	console.log(number);

	return number % 2 === 0;
});

console.log(lastEvenNumber); //should be equal to 24 as this is the last even number in the array.

/* toSpliced() */

/* What is toSpliced()?
	The toSpliced() method is a new addition to JavaScript in ES14. 
	It allows you to create an updated new array from the original array by removing or adding elements. 
	
	The syntax for toSpliced() is as follows:
	array.toSpliced(startIndex, deleteCount, ...items)

		- toSpliced() takes in three parameters: startIndex, deleteCount, and items.
		- startIndex is the index of the first element to be removed.
		- deleteCount is the number of elements to be removed.
*/

let songsList = ["Uhaw", "Ddu Ddu Ddu", "Raining In Manila", "Ere", "Jopay"]

//toSpliced() allows us to create an updated new array from the original array.
let updatedSongsList = songsList.toSpliced(2, 1, "Buloy");

console.log("Original Array: ", songsList);
console.log("Updated Array: ", updatedSongsList);

songsList.splice(2, 1, "Binhi");
console.log("Original Array: ", songsList);