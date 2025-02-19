/* 
1. In the S29 folder, create an activity folder and an index.html and index.js file inside of it.
- Create an index.html file to attach our index.js file
- Copy the template from any code-sharing platforms sent by the instructor and paste it in an index.js file.
- Update your local sessions git repository and push to git with the commit message of Add template code s29.
- Console log the message Hello World to ensure that the script file is properly associated with the html file.
2. Create a function called addPokemon which will allow us to register/add new pokemon into the registeredPokemon list.
- this function should be able to receive a string.
- add the received pokemon into the registeredPokemon array.
*/

/*
    Create functions which can manipulate our arrays.
*/

/*
    Important note: Don't pass the arrays as an argument to the function. The functions must be able to manipulate the current arrays.
*/

let registeredPokemon = ["Pikachu", "Balbasaur", "Charmander", "Squirtle"];
console.log(registeredPokemon);
let registeredTrainers = [];
console.log(registeredTrainers);

/*
    
   3. Create a function called addPokemon which will allow us to register/add new pokemon into the registeredPokemon list.
        - this function should be able to receive a string.
        - add the received pokemon into the registeredPokemon array.
*/
    
    function addPokemon(pokemon){
        registeredPokemon.push(pokemon);
    }
    addPokemon("Mewtwo");
    console.log(registeredPokemon);
    
/*
    4. Create a function called deletePokemon which will delete the last pokemon you have added in the registeredPokemon array.
        - If the registered is not empty, delete the last pokemon in the registeredPokemon array
        - Else return a message:
            - "No registered pokemon."
        - Invoke the function.
        - Outside the function log the registeredPokemon array.

*/

function deletePokemon(){
    if(registeredPokemon.length > 0){
        return registeredPokemon.pop();
    } else {
        return "No pokemon registered"
    }
};
let poppedPokemon = deletePokemon();
console.log("Removed pokemon: " + poppedPokemon);
console.log(registeredPokemon);

/*
    5. Create a function called displayNumberOfPokemons which will display the amount of registeredPokemon in our array,
        - If the registeredPokemon array is empty return the message:
            - "No pokemon registered."
        - Else If the registeredPokemon array is not empty, return the number of registered Pokemons.
*/

function displayNumberOfPokemons(){
    if(registeredPokemon.length > 0){
        return registeredPokemon.length
    } else {
        return "No pokemon registered"
    }
}
console.log(displayNumberOfPokemons());

/*
    6. Create a function called sortPokemon which will  sort the registeredPokemon array in alphabetical order when invoked:
        - If the registeredPokemon array is empty return the message:
            - "No pokemon registered."
        - Else, sort the registeredPokemon array.

*/
function sortPokemon(){

    if(registeredPokemon.length > 0){
        registeredPokemon.sort();
    } else {
        return "No pokemon registered"
    }

};
sortPokemon();
console.log(registeredPokemon);

/* 
    7. Create a function called unshiftPokemon which will add a pokemon in the registeredPokemon array using unshift().
        - The function will receive a pokemon as argument
        - Use unshift method to add the sent argument to the registeredPokemon array
        - Invoke the function.
        - Outside the function log the registeredPokemon array.
*/
function unshiftPokemon(pokemon){
    registeredPokemon.unshift(pokemon);
}
unshiftPokemon("Mew");
console.log(registeredPokemon);

/* 
    8. Create a function called shiftPokemon which will delete a pokemon in the registeredPokemon array using shift().
        - Use shift method to delete the first element to the registeredPokemon array
        - Invoke the function.
        - Outside the function log the registeredPokemon array.
*/
function shiftPokemon(){
    if(registeredPokemon.length > 0){
        return registeredPokemon.shift();
    } else {
        return "No pokemon registered"
    }
}
let shiftedPokemon = shiftPokemon();
console.log("Removed pokemon: " + shiftedPokemon);
console.log(registeredPokemon);

/*
    9. Create a function called registerTrainer which takes 3 arguments, name, level and an array of pokemons.
        - Inside the function, create an object called trainer.
            - The trainer object should have 3 properties, trainerName, trainerLevel and pokemons
            - Pass the values of the appropriate parameter to each property.
        - Add the trainer variable to the registeredTrainers array.

*/

function registerTrainer(name,level,pokemons){
    let trainer = {
        trainerName: name,
        trainerLevel: level,
        pokemons: pokemons
    }
    registeredTrainers.push(trainer);
};
registerTrainer("Ash",10,registeredPokemon);
console.log(registeredTrainers);

/* 
    10. Create a function called reversedPokemon which will  which will reverse the current order of the registeredPokemon array using reverse()
        - Look up the use of reverse() in javascript arrays
        - Use reverse() to reverse the current order of registeredPokemon array
        - Invoke the function
        - Log the registeredPokemon in the console
*/
function reversePokemon(){
    registeredPokemon.reverse();
}
reversePokemon();
console.log(registeredPokemon);

/* 
    11. Create a function called copiedPokemon which will  which will replace some pokemon with duplicates
        -Look up the use of copyWithin() in javascript arrays
        -Use copyWithin() to copy a range of elements in the registeredPokemons array
*/
function copiedPokemon(){
    registeredPokemon.copyWithin(2,0);
}
copiedPokemon();
console.log(registeredPokemon);

/* 
    12. Create a function called fillPokemon which will  which will replace elements in the registeredPokemon array with static values using fill():
        -This function will receive a pokemon as argument
        -Look up the use of fill() in javascript arrays
        -Use fill() to replace all elements in the registeredPokemon array with the pokemon recieved as argument.
        -Invoke the function and pass a pokemon as parameters
        -Log the registeredPokemon array in the console
*/

function fillPokemon(pokemon){
    registeredPokemon.fill(pokemon,0,3);
}
fillPokemon("Charizard");
console.log(registeredPokemon);

/* 
    13. Create a function called splicePokemon
        -This function will recieve a pokemon as argument
        -Use splice() to replace an element in the registeredPokemon array with the pokemon recieved as argument.
        -Invoke the function and pass a pokemon as parameters
        -Log the registeredPokemon array in the console
*/
function splicePokemon(pokemon){
    registeredPokemon.splice(0,1,pokemon);
}
splicePokemon("Pikachu");
console.log(registeredPokemon);

/* 

    14. Debug the following code to allow the functions to properly receive and return the correct values and mimic the output.

        - Check syntax of the following code.
        - Check if value is returned.
        - Check the parameters and arguments.
        - Check the if else statements
        - Check the loop statements
        - Check if the array methods used are correct.
        - Ensure no Errors in the console.

*/

    let numbers = [1, 2, 3, 4, 6, 8, 9, 10, 12, 13, 20, 25];

    function returnEvenNumbers(arr) {

        if (arr.length === 0) {
            return "The array is empty.";
        }

        let isAllNumbers = arr.every(num => typeof num === "number")

        if(isAllNumbers === false){
            return "The array does not contain all numbers."
        }

        let isAllPositiveIntegers = arr.every(num => num > 0)

        if(isAllPositiveIntegers === false){
            return "The array does not contain all positive integers."
        }

        return arr.filter(num => num % 2 === 0);

    }

    let messageIfEmptyArr = returnEvenNumbers([]);
    console.log("Message if the array is empty:")
    console.log(messageIfEmptyArr);

    let messageIfNotAllNumbers = returnEvenNumbers([1, 2, 3, "25", 4]);
    console.log("Message if the array does not contain all number data type:")
    console.log(messageIfNotAllNumbers);


    let messageIfNotAllPositiveIntegers = returnEvenNumbers([1, 2, 3, -25, 4]);
    console.log("Message if the array does not contain all positive integers:")
    console.log(messageIfNotAllPositiveIntegers);

    let evenNumbers = returnEvenNumbers(numbers);
    console.log("Even numbers in the array:")
    console.log(evenNumbers);


//Do not modify
//For exporting to test.js
try{
    module.exports = {

        registeredPokemon: typeof registeredPokemon !== 'undefined' ? registeredPokemon : null,
        registeredTrainers: typeof registeredTrainers !== 'undefined' ? registeredTrainers : null,
        addPokemon: typeof addPokemon !== 'undefined' ? addPokemon : null,
        deletePokemon: typeof deletePokemon !== 'undefined' ? deletePokemon : null,
        displayNumberOfPokemons: typeof displayNumberOfPokemons !== 'undefined' ? displayNumberOfPokemons : null,
        sortPokemon: typeof sortPokemon !== 'undefined' ? sortPokemon : null,
        unshiftPokemon: typeof unshiftPokemon !== 'undefined' ? unshiftPokemon : null,
        shiftPokemon: typeof shiftPokemon !== 'undefined' ? shiftPokemon : null,
        registerTrainer: typeof registerTrainer !== 'undefined' ? registerTrainer : null,
        reversePokemon: typeof reversePokemon !== 'undefined' ? reversePokemon : null,
        copiedPokemon: typeof copiedPokemon !== 'undefined' ? copiedPokemon : null,
        fillPokemon: typeof fillPokemon !== 'undefined' ? fillPokemon : null,
        splicePokemon: typeof splicePokemon !== 'undefined' ? splicePokemon : null,
        returnEvenNumbers: typeof returnEvenNumbers !== 'undefined' ? returnEvenNumbers : null
    }
} catch(err){

}