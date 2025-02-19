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
    
function addPokemon(){
    
}
    
/*
    4. Create a function called deletePokemon which will delete the last pokemon you have added in the registeredPokemon array.
        - If the registered is not empty, delete the last pokemon in the registeredPokemon array
        - Else return a message:
            - "No registered pokemon."
        - Invoke the function.
        - Outside the function log the registeredPokemon array.

*/

function deletePokemon(){
    
};

/*
    5. Create a function called displayNumberOfPokemons which will display the amount of registeredPokemon in our array,
        - If the registeredPokemon array is empty return the message:
            - "No pokemon registered."
        - Else If the registeredPokemon array is not empty, return the number of registered Pokemons.
*/

function displayNumberOfPokemons(){
    
}

/*
    6. Create a function called sortPokemon which will  sort the registeredPokemon array in alphabetical order when invoked:
        - If the registeredPokemon array is empty return the message:
            - "No pokemon registered."
        - Else, sort the registeredPokemon array.

*/
function sortPokemon(){

};

/* 
    7. Create a function called unshiftPokemon which will add a pokemon in the registeredPokemon array using unshift().
        - The function will receive a pokemon as argument
        - Use unshift method to add the sent argument to the registeredPokemon array
        - Invoke the function.
        - Outside the function log the registeredPokemon array.
*/
function unshiftPokemon(){
    
}

/* 
    8. Create a function called shiftPokemon which will delete a pokemon in the registeredPokemon array using shift().
        - Use shift method to delete the first element to the registeredPokemon array
        - Invoke the function.
        - Outside the function log the registeredPokemon array.
*/
function shiftPokemon(){
    
}

/*
    9. Create a function called registerTrainer which takes 3 arguments, name, level and an array of pokemons.
        - Inside the function, create an object called trainer.
            - The trainer object should have 3 properties, trainerName, trainerLevel and pokemons
            - Pass the values of the appropriate parameter to each property.
        - Add the trainer variable to the registeredTrainers array.

*/

function registerTrainer(){
    
};

/* 
    10. Create a function called reversedPokemon which will  which will reverse the current order of the registeredPokemon array using reverse()
        - Look up the use of reverse() in javascript arrays
        - Use reverse() to reverse the current order of registeredPokemon array
        - Invoke the function
        - Log the registeredPokemon in the console
*/
function reversePokemon(){
    
}

/* 
    11. Create a function called copiedPokemon which will  which will replace some pokemon with duplicates
        -Look up the use of copyWithin() in javascript arrays
        -Use copyWithin() to copy a range of elements in the registeredPokemons array
*/
function copiedPokemon(){

}

/* 
    12. Create a function called fillPokemon which will  which will replace elements in the registeredPokemon array with static values using fill():
        -This function will receive a pokemon as argument
        -Look up the use of fill() in javascript arrays
        -Use fill() to replace all elements in the registeredPokemon array with the pokemon recieved as argument.
        -Invoke the function and pass a pokemon as parameters
        -Log the registeredPokemon array in the console
*/

function fillPokemon(){
    
}

/* 
    13. Create a function called splicePokemon
        -This function will recieve a pokemon as argument
        -Use splice() to replace an element in the registeredPokemon array with the pokemon recieved as argument.
        -Invoke the function and pass a pokemon as parameters
        -Log the registeredPokemon array in the console
*/
function splicePokemon(){
    
}


/* 

    14. Debug the following code to allow the functions to properly receive and return the correct values and mimic the output.

        - Check syntax of the following code.
        - Check if value is returned.
        - Check the parameters and arguments.
        - Check the if else statements
        - Check the loop statements
        - Check if the array methods used are correct.
        - Ensure no errors in the console.

*/

    let numbers = [1, 2, 3, 4, 6, 8, 9, 10, 12, 13, 20, 25];

    function returnEvenNumbers(arr) {

        if (arr.length > 0) {
            return "The array is empty.";
        }

        let isAllNumbers = arr.every(num => typeOf num === "Number")

        if(isAllNumbers === false){
            return "The array does not contain all numbers."


        let isAllPositiveIntegers = arr.....some(num => num > 0)

        if(isAllPositiveIntegers === false){
            return "The array does not contain all positive integers."
        }

        return arr.find(num => num%2 === 0!);

    }

    let messageIfEmptyArr = findEvenNumber([]);
    console.log("Message if the array is empty:")
    console.log(messageIfEmptyArr);

    let messageIfNotAllNumbers = findEvenNumber([1, 2, 3, "25", 4]);
    console.log("Message if the array does not contain all number data type:")
    console.log(messageIfNotAllNumbers);


    let messageIfNotAllPositiveIntegers = findEvenNumber([1, 2, 3, -25, 4]);
    console.log("Message if the array does not contain all positive integers:")
    console.log(messageIfNotAllPositiveIntegers);

    let evenNumbers = findEvenNumber(numbers);
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