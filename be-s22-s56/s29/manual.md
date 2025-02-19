# Javascript - Array Mutator Methods

## Discussion Topic List
- Mutator Methods
    - push() (10 mins)
    - pop() (10 mins)
    - unshift() (15 mins)
    - shift() (15 mins)
    - splice() (15 mins)
    - sort() (10 mins)
    - Total: 75 mins

## Activity Topic List
### Discussed
    - push() (10 mins)
    - pop() (10 mins)
    - unshift() (10 mins)
    - shift() (10 mins)
    - splice() (15 mins)
    - sort() (10 mins)

### Researched
    - fill() (20 mins)
    - compyWithin() (20 mins)
    - reverse() (15 mins)
Total: 120 mins

## Resources

### References

- [JavaScript Arrays (w3schools)](https://www.w3schools.com/js/js_arrays.asp)
- [JavaScript Array (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### Tools/Technologies Version

## Code Discussion

### Folder and File Preparation

#### batchfolder > individual > backend > s29 > discussion > index.html
```html
<!DOCTYPE HTML>
<html>
    <head>
        <title>JavaScript Array Mutator Methods</title>
    </head>
    <body>
        <script src="./index.js"></script>
    </body>
</html>
```

#### batchfolder > individual > backend > s29 > discussion > index.js
```js
console.log('Hello World');
```

### Manipulating Arrays with Array Methods

**Javascript** has **built-in** functions and methods for arrays. This allows us to manipulate and access array items.

There are the 3 kinds of JS Array Methods.
    - Non-Mutators
    - Iterators
    - Mutators

##### Non-Mutator Methods
Non-Mutator Methods allows us to manage and perform tasks on an array without updating the contents of the original array.

##### Iterator Methods
Iterator Methods allow us to loop over elements/items in an array and perform tasks with them.

#### Mutator Methods
Mutator methods allow us to manage and perform tasks on an array by updating the contents of the original array.

For this session, we will discuss **JS Array Mutator Methods**.

### Mutator Methods

- Mutator methods are built-in JS Array methods that "mutate" or change an array after they're created
- These methods manipulate the original array performing various tasks such as adding and removing elements

Let's add the following code in our index.js file:

#### batchfolder > individual > backend > s29 > discussion > index.js
```js
    let fruits = ['Apple', 'Orange', 'Kiwi', 'Dragon Fruit'];
```
push()

- Adds an element in the end of an array AND returns the array's length
- Syntax
    - arrayName.push("itemToPush");

```js
    console.log('Current array:');
    console.log(fruits);
    let fruitsLength = fruits.push('Mango');
    console.log(fruitsLength);
    console.log('Mutated array from push method:');
    console.log(fruits);

    // Adding multiple elements to an array
    fruits.push('Avocado', 'Guava');
    console.log('Mutated array from push method:');
    console.log(fruits);

    //Let's try in a function
    function addFruit(fruit){
        //push the parameter to the array.
        fruits.push(fruit);
    }

    addFruit("Pineapple");

```
pop()

- Removes the last element in an array AND returns the removed element
- Syntax
    - arrayName.pop();

#### batchfolder > individual > backend > s29 > discussion > index.js
```js
    let removedFruit = fruits.pop();
    console.log(removedFruit);
    console.log('Mutated array from pop method:');
    console.log(fruits);

    //Let's try in a function
    function removeFruit(){
        //remove the last item in the array.
        fruits.pop();
    }

    removeFruit();
    console.log(fruits);

```
unshift()

- Adds one or more elements at the beginning of an array
- Syntax
    - arrayName.unshift('elementA');
    - arrayName.unshift('elementA', elementB);

#### batchfolder > individual > backend > s29 > discussion > index.js
```js
    fruits.unshift('Lime', 'Banana');
    console.log('Mutated array from unshift method:');
    console.log(fruits);

    //Let's try in a function
    function unshiftFruit(fruit){
        //add an item at front of the array.
        fruits.unshift(fruit);
    }

    unshiftFruit("calamansi");

```
shift()

- Removes an element at the beginning of an array AND returns the removed element
- Syntax
    - arrayName.shift();

#### batchfolder > individual > backend > s29 > discussion > index.js
```js
    let anotherFruit = fruits.shift();
    console.log(anotherFruit);
    console.log('Mutated array from shift method:');
    console.log(fruits);

    //Let's try in a function
    function shiftFruit(){
        //remove an item at front of the array.
        fruits.shift();
    }

    shiftFruit();
```
splice()

- Simultaneously removes elements from a specified index number and adds elements
- Syntax
    - arrayName.splice(startingIndex, deleteCount, elementsToBeAdded)

#### batchfolder > individual > backend > s29 > discussion > index.js
```js
    fruits.splice(1, 2, 'Lime', 'Cherry');
    console.log('Mutated array from splice method:');
    console.log(fruits);

    //Let's try in a function
    function spliceFruit(index,deleteCount,fruit){
        //remove and add an item at the specified point of the array.
        fruits.splice(index,deleteCount,fruit);
    }

    shiftFruit(1,1,"Avocado");
    shiftFruit(2,1,"Durian")
```
sort()

- Rearranges the array elements in alphanumeric order
- Syntax
   arrayName.sort();

#### batchfolder > individual > backend > s29 > discussion > index.js
```js
    fruits.sort();
    console.log('Mutated array from sort method:');
    console.log(fruits);

```
**Important Note:**
    - The "sort" method is used for more complicated sorting functions.
    - Focus the students on the basic usage of the sort method and discuss it's more advanced usage only when you are confident in the topic.
    - Discussing this might confuse the students more given the amount of topics found in the session.

Note:
    You can add more mini-activities to practice. However, please take note of the time left.

# Activity

## Activity References

- [JS Mutator Methods](https://dev.to/ibrahima92/javascript-array-methods-mutator-vs-non-mutator-15e2)
- [Add JS Object to JS Array](https://stackabuse.com/bytes/push-an-object-to-an-array-in-javascript/)    
- [JS Function Parameters](https://www.w3schools.com/js/js_function_parameters.asp)        
- [JS Reverse Method](https://www.w3schools.com/jsref/jsref_reverse.asp)
- [JS Fill Method](https://www.w3schools.com/jsref/jsref_fill.asp)
- [JS CopyWithin Method](https://www.w3schools.com/jsref/jsref_copywithin.asp)

## Activity Instructions

Member 1:
1. In the S29 folder, create an activity folder and an index.html and index.js file inside of it.
- Create an index.html file to attach our index.js file
- Copy the template from any code-sharing platforms sent by the instructor and paste it in an index.js file.
- Update your local sessions git repository and push to git with the commit message of Add template code s29.
- Console log the message Hello World to ensure that the script file is properly associated with the html file.

2. Create a function called addPokemon which will allow us to register/add new pokemon into the registeredPokemon list.
- this function should be able to receive a string.
- add the received pokemon into the registeredPokemon array.

3. Create a function called deletePokemon which will delete the last pokemon you have added in the registeredPokemon array.
- If the registered is not empty, delete the last pokemon in the registeredPokemon array
- Else return a message:
    - "No pokemon registered"
- Invoke the function.
- Outside the function log the friendsList array.

Member 2:

4. Create a function called displayNumberOfPokemons which will display the amount of registeredPokemon in our array,
- If the registeredPokemon array is empty return the message:
    - "No pokemon registered."
- Else If the registeredPokemon array is not empty, return the number of registered Pokemons.


5. Create a function called sortPokemon which will  sort the registeredPokemon array in alphabetical order when invoked:
- If the registeredPokemon array is empty return the message:
    - "No pokemon registered."
- Else, sort the registeredPokemon array.

6. Create a function called unshiftPokemon which will add a pokemon in the registeredPokemon array using unshift().
- The function will receive a pokemon as argument
- Use unshift method to add the sent argument to the registeredPokemon array
- Invoke the function.
- Outside the function log the registeredPokemon array.

Member 3:

7. Create a function called shiftPokemon which will delete a pokemon in the registeredPokemon array using shift().
- Use shift method to delete the first element to the registeredPokemon array
- Invoke the function.
- Outside the function log the registeredPokemon array.

8. Create a function called registerTrainer which takes 3 arguments, name, level and an array of pokemons.
- Inside the function, create an object called trainer.
    - The trainer object should have 3 properties, trainerName, trainerLevel and pokemons
    - Pass the values of the appropriate parameter to each property.
- Add the trainer variable to the registeredTrainers array.

9. Create a function called reversedPokemon
- Look up the use of reverse() in javascript arrays
- Use reverse() to reverse the current order of registeredPokemon array
- Invoke the function
- Log the registeredPokemon in the console

Member 4:

10. Create a function called copiedPokemon
- Look up the use of copyWithin() in javascript arrays
- Use copyWithin() to copy a range of elements in the registeredPokemons array
11. Create a function called fillPokemon
- This function will recieve a pokemon as argument
- Look up the use of fill() in javascript arrays
- Use fill() to replace a range or all elements in the registeredPokemon array with the pokemon recieved as argument.
- Invoke the function and pass a pokemon as parameters
- Log the registeredPokemon array in the console
12. Create a function called splicePokemon
- This function will recieve a pokemon as argument
- Use splice() to replace an element in the registeredPokemon array with the pokemon recieved as argument.
- Invoke the function and pass a pokemon as parameters
- Log the registeredPokemon array in the console

Member 5:

13. Debug the given code to allow the functions to properly receive and return the correct values and mimic the output.
- Check syntax of the following code.
- Check if correct value is returned or displayed.
- Check the parameters and arguments.
- Check the if else statements
- Check the loop statements
- Check if the array methods used are correct.


All Members:
13. Check out to your own git branch with git checkout -b <branchName>
14. Update your local sessions git repository and push to git with the commit message of Add activity code s29.
15. Add the sessions repo link in Boodle for s29.

## Solution

```jsx
/*
    Create functions which can manipulate our arrays.
*/

/*
    Important note: Don't pass the arrays as an argument to the function. The functions must be able to manipulate the current arrays.
*/

let registeredPokemon = ["Pickachu", "Balbasaur", "Charmander", "Squirtle"];
let registeredTrainers = [];

/*
    
   1. Create a function called addPokemon which will allow us to register/add new pokemon into the registeredPokemon list.
        - this function should be able to receive a string.
        - add the received pokemon into the registeredPokemon array.
*/
    
    function addPokemon(pokemon){
        registeredPokemon.push(pokemon);
    }
    
/*
    2. Create a function called deletePokemon which will delete the last pokemon you have added in the registeredPokemon array.
        - If the registered is not empty, delete the last pokemon in the registeredPokemon array
        - Else return a message:
            - "No registered pokemon."
        - Invoke the function.
        - Outside the function log the registeredPokemon array.

*/

function deletePokemon(){

    if(registeredPokemon.length > 0){

        registeredPokemon.pop();

    } else {
        return "No pokemon registered"
    }

};

/*
    3. Create a function called displayNumberOfPokemons which will display the amount of registeredPokemon in our array,
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

/*
    4. Create a function called sortPokemon which will  sort the registeredPokemon array in alphabetical order when invoked:
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

/* 
    5. Create a function called addPokemonUnshift which will add a pokemon in the registeredPokemon array using unshift().
        - The function will receive a pokemon as argument
        - Use unshift method to add the sent argument to the registeredPokemon array
        - Invoke the function.
        - Outside the function log the registeredPokemon array.
*/
function addPokemonUnshift(pokemon){
    registeredPokemon.unshift(pokemon);
}
/* 
    6. Create a function called deletePokemonShift which will delete a pokemon in the registeredPokemon array using shift().
        - Use shift method to delete the first element to the registeredPokemon array
        - Invoke the function.
        - Outside the function log the registeredPokemon array.
*/
function deletePokemonShift(){
    if(registeredPokemon.length > 0){
        registeredPokemon.shift();
    } else {
        return "No pokemon registered"
    }
}
removedPokemon = deletePokemonShift();
console.log(removedPokemon);
console.log(registeredPokemon);

/*
    7. Create a function called registerTrainer which takes 3 arguments, name, level and an array of pokemons.
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

/* 
    8. Create a function called reversedPokemon
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
    9. Create a function called copiedPokemon
        -Look up the use of copyWithin() in javascript arrays
        -Use copyWithin() to copy a range of elements in the registeredPokemons array
*/
function copiedPokemon(){
    registeredPokemon.copyWithin(2,0);
}
copiedPokemon();
console.log(registeredPokemon);

/* 
    10. Create a function called fillPokemon
        -This function will recieve a pokemon as argument
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
    11. Create a function called splicePokemon
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
```