//Array Methods
    
//Javascript has built-in functions and methods for arrays. This allows us to manipulate and access array items.
// Mutator Methods
    /*
        - Mutator methods are functions that "mutate" or change an array after they're created
        - These methods manipulate the original array performing various tasks such as adding and removing elements
    */

//Let's add the following code in our index.js file:
    let fruits = ['Apple', 'Orange', 'Kiwi', 'Dragon Fruit'];
    console.log(fruits);
    // checks the number of fruits in the array
    console.log(fruits.length);

// push()

// - Adds an element in the end of an array AND returns the array's length
// - Syntax
//     - arrayName.push("itemToPush");

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

// pop()

// - Removes the last element in an array AND returns the removed element
// - Syntax
//     - arrayName.pop();

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

// unshift()

// - Adds one or more elements at the beginning of an array
// - Syntax
//     - arrayName.unshift('elementA');
//     - arrayName.unshift('elementA', elementB);

    fruits.unshift('Lime', 'Banana');
    console.log('Mutated array from unshift method:');
    console.log(fruits);

    //Let's try in a function
    function unshiftFruit(fruit){
        //add an item at front of the array.
        fruits.unshift(fruit);
    }

    unshiftFruit("calamansi");

    
// shift()

// - Removes an element at the beginning of an array AND returns the removed element
// - Syntax
//     - arrayName.shift();

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


// splice()

// - Simultaneously removes elements from a specified index number and adds elements
// - Syntax
//     - arrayName.splice(startingIndex, deleteCount, elementsToBeAdded)

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

// sort()

// - Rearranges the array elements in alphanumeric order
// - Syntax
//    arrayName.sort();

    fruits.sort();
    console.log('Mutated array from sort method:');
    console.log(fruits);

// **Important Note:**
//     - The "sort" method is used for more complicated sorting functions.
//     - Focus the students on the basic usage of the sort method and discuss it's more advanced usage only when you are confident in the topic.
//     - Discussing this might confuse the students more given the amount of topics found in the session.