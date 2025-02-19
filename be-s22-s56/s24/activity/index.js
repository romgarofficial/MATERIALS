/*
1. In the S24 folder, create an activity folder, an index.html file inside of it and link the index.js file.
2. Create an index.js file and console log the message Hello World to ensure that the script file is properly associated with the html file.
3. Copy the activity code from your Instructor. Paste the activity code to your index.js file.
*/

//console.log("Hello World");


/*
	4. Create a function named getUserInfo which is able to return an object. 

		The object returned should have the following properties:
		
		- key - data type

		- name - String
		- age -  Number
		- address - String
		- isMarried - Boolean
		- petName - String

		Note: Property names given is required and should not be changed.

		To check, create a variable to save the value returned by the function.
		Then log the variable in the console.

		You can also invoke the function in the console to view the returned value of the function.

		Note: This is optional.

*/

function getUserInfo(){

	return {

		name: "John Doe",
		age: 25,
		address: "123 Street, Quezon City",
		isMarried: false,
		petName: "Danny"

	}
}

let userInfo = getUserInfo();
console.log(userInfo);

/*
	5. Create a function named getArtistsArray which is able to return an array with at least 5 names of your favorite bands or artists.
		
		- Note: the array returned should have at least 5 elements as strings.
			    function name given is required and cannot be changed.


		To check, create a variable to save the value returned by the function.
		Then log the variable in the console.

		You can also invoke the function in the console to view the returned value of the function.

		Note: This is optional.
	
*/

function getArtistsArray(){
	return ["Ben & Ben","Arthur Nery","Linkin Park","Paramore","Taylor Swift"];
}

let bandsArray = getArtistsArray();
console.log(bandsArray);


/*
	6. Create a function named getSongsArray which is able to return an array with at least 5 titles of your favorite songs.

		- Note: the array returned should have at least 5 elements as strings.
		        function name given is required and cannot be changed.

		To check, create a variable to save the value returned by the function.
		Then log the variable in the console.

		You can also invoke the function in the console to view the returned value of the function.

		Note: This is optional.
*/

function getSongsArray(){
	return ["Kathang Isip","Binhi","In the End","Bring by Boring Brick","Love Story"];
}

let songsArray = getSongsArray();
console.log(songsArray);


/*
	7. Create a function named getMoviesArray which is able to return an array with at least 5 titles of your favorite movies.

		- Note: the array returned should have at least 5 elements as strings.
		        function name given is required and cannot be changed.

		To check, create a variable to save the value returned by the function.
		Then log the variable in the console.

		You can also invoke the function in the console to view the returned value of the function.

		Note: This is optional.
*/

function getMoviesArray(){
	return ["The Lion King","Meet the Robinsons","Howl's Moving Castle","Tangled","Frozen"];
}

let moviesArray = getMoviesArray();
console.log(moviesArray);


/*
	8. Create a function named getPrimeNumberArray which is able to return an array with at least 5 prime numbers.

			- Note: the array returned should have numbers only.
			        function name given is required and cannot be changed.

			To check, create a variable to save the value returned by the function.
			Then log the variable in the console.

			You can also invoke the function in the console to view the returned value of the function.

			Note: This is optional.
*/


function getPrimeNumberArray(){
	return [2,3,5,7,17]
};


let primeNumberArray = getPrimeNumberArray();
console.log(primeNumberArray)


/*
	9. Explore and understand the concept of scope in JavaScript through a series of coding challenges. Use your knowledge of scope to correctly declare and access variables within different scopes.
		- Declare a global variable named globalTreasure and assign it with a string "Golden Key".
		- Write a function named seekGlobalTreasure that returns the value of a text: "Global Treasure Found:" and globalTreasure to the console.
		- Call seekGlobalTreasure to discover the global treasure.
*/

// Global variable declaration
const globalTreasure = "Golden Key";

// Function to seek global treasure
function seekGlobalTreasure() {
    return "Global Treasure Found:" + globalTreasure;
}

// Call the function to discover the global treasure
let resultOfGlobalTreasure = seekGlobalTreasure();
console.log(resultOfGlobalTreasure)

/*
	10. Explore and understand the concept of scope in JavaScript through a series of coding challenges. Use your knowledge of scope to correctly declare and access variables within different scopes.
		- Inside the same script, define a function named localQuest.
		- Declare a local variable named localGems inside localQuest and assign it with a string "Shiny Diamonds".
		- Attempt to returns the value of localGems inside localQuest with a text: "Local Gems Discovered:".
		- Try to access the value of localGems variable outside the localQuest function. Make a note of the result. Remember to uncomment this line after attempting to access.
*/

// Function for the local quest
function localQuest() {
    // Local variable declaration
    const localGems = "Shiny Diamonds";
    
    // Log the value of localGems inside the function
    return "Local Gems Discovered:" + localGems;
}

// Call the function to embark on the local quest
let resultOfLocalQuest = localQuest();
console.log(resultOfLocalQuest)

// Attempt to access localGems outside the function
// console.log("Attempt to Access Local Gems:", localGems); // Uncommenting this line will result in an error

/*
	11. Explore and understand the concept of scope in JavaScript. Use your knowledge of scope to correctly declare and access variables within different scopes.
		- Create a function named revealBlockSecret.
		- Inside the function, declare a variable named blockSecret and assign it with a string "Hidden Treasure".
		- Return the value of blockSecret within the function and explore its mysterious contents with a message, "Block Secret Revealed:" and the block secret value.
		- Uncomment the code that attempts to access blockSecret outside of the function.
		- Observe the journey of blockSecret through the block's hidden passages.
*/

function revealBlockSecret() {
    // Variable declaration within the block
    const blockSecret = "Hidden Treasure";
    
    // Log the value of blockSecret within the block
    return "Block Secret Revealed:" + blockSecret;
}
let resultOfRevealBlockSecret = revealBlockSecret();
console.log(resultOfRevealBlockSecret);

// Attempt to access blockSecret outside the block
// console.log("Attempt to Access Block Secret:", blockSecret); // Uncommenting this line will result in an error


/* Debugging */
/* 
	12. Debug the following code to allow the functions to return the correct value and mimic the output.
	- Check syntax of the following code.
	- Check if value is returned.

*/

	function getItemName() {
		let name = "The Golden Sword";
		return name;
	}
	
	let itemName = getItemName();
	console.log("The name of the item is:")
	console.log(itemName);


	function getItemPrice() {
		let price = 2000;
		return price;
	}
	
	let itemPrice = getItemPrice();
	console.log("The price of the item is:");
	console.log(itemPrice);

	function getRequiredJob() {
		let jobs = ["Warrior", "Knight", "Paladin"];
		return jobs;
	}
	
	let requiredJob = getRequiredJob();
	console.log("The required job to use the item is:")
	console.log(requiredJob);

/*
13. Add your changes.
14. Commit your changes with a concise, imperative statement describing the change. Example: "Added solution for the s24 activity".
15. Add the link in Boodle for s24.
*/






//Do not modify
//For exporting to test.js
try{
	module.exports = {

		getUserInfo: typeof getUserInfo !== 'undefined' ? getUserInfo : null,
		getArtistsArray: typeof getArtistsArray !== 'undefined' ? getArtistsArray : null,
		getSongsArray: typeof getSongsArray !== 'undefined' ? getSongsArray : null,
		getMoviesArray: typeof getMoviesArray !== 'undefined' ? getMoviesArray : null,
		getPrimeNumberArray: typeof getPrimeNumberArray !== 'undefined' ? getPrimeNumberArray : null,
		seekGlobalTreasure: typeof seekGlobalTreasure !== 'undefined' ? seekGlobalTreasure : null,
		localQuest: typeof localQuest !== 'undefined' ? localQuest : null,
		revealBlockSecret: typeof revealBlockSecret !== 'undefined' ? revealBlockSecret : null,
		getItemName: typeof getItemName !== 'undefined' ? getItemName : null,
		getItemPrice: typeof getItemPrice !== 'undefined' ? getItemPrice : null,
		getRequiredJob: typeof getRequiredJob !== 'undefined' ? getRequiredJob : null,

	}
} catch(err){

}