# Javascript - Array Traversal

### Discussion Topic List
- Creating Arrays (5 mins)
- Examples of Arrays (5 mins)
- .length Property (5 mins)
- Array Index (10 mins)
- Accessing from Arrays (5 mins)
- Adding to Arrays using Index (10 mins)
- Updating Arrays (10 mins)
- Iterating over Arrays (20 mins)
- Multidementional Arrays (5 mins)
Total: 75 mins

### Activity Topic List
#### Discussed
- Creating Arrays (5 mins)
- .length Property (15 mins)
- Array Index (5 mins)
- Adding to Arrays using Index (10 mins)
- Accessing from Arrays (10 mins)
- Updating Arrays (10 mins)
- Iterating over Arrays (30 mins)

#### Researched
- Removing Elements from an array using index (15 mins)
- Shortening Arrays using .length (5 mins)
- Accessing last element using .length (10 mins)
- Clearing out an array using .length property (5 mins)
Total mins: 120 mins

## Resources

### References

- [JavaScript Arrays (w3schools)](https://www.w3schools.com/js/js_arrays.asp)
- [JavaScript Array (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### Tools/Technologies Version

## Code Discussion

### Folder and File Preparation

#### batchfolder > individual > backend > s28 > discussion > index.html
```html
<!DOCTYPE HTML>
<html>
    <head>
        <title>JavaScript Array Traversal</title>
    </head>
    <body>
        <script src="./index.js"></script>
    </body>
</html>
```
#### batchfolder > individual > backend > s28 > discussion > index.js

```js
console.log('Hello World');
```

### Introduction to Arrays

So far we have explored storing values on **individual** variables. However, modelling real-world information is a bit more **complicated** than that. 

Consider a scenario where we need to store values that are related to each other, for example a list of student numbers from a graduation class. To accomplish that with what we currently know, we are going to create a different variable to hold each student number.

It is not only **cumbersome** to write, it is also **hard to manage** these sets of values. To solve this problem, all programming languages have implemented what is called an **array**.

An array in programming is simply a list of data. Let's write the example earlier:

#### batchfolder > groupwork > backend > s28 > discussion > index.html
```js
let studentNumberA = '2020-1923';
let studentNumberB = '2020-1924';
let studentNumberC = '2020-1925';
let studentNumberD = '2020-1926';
let studentNumberE = '2020-1927';
```

Now, with an array, we can simply write the code above like this:

#### batchfolder > individual > backend > s28 > discussion > index.html
```js
let studentNumbers = ['2020-1923', '2020-1924', '2020-1925', '2020-1926', '2020-1927'];
```

We need arrays because it lets us **store multiple values** into a **single variable**.

[https://avantutor.com/blog/arrays/](https://avantutor.com/blog/arrays/)

### Basic Array Structure

#### Arrays

- Arrays are used to store multiple related values in a single variable
- They are declared using square brackets ([]) also known as "Array Literals"
- Commonly used to store numerous amounts of data to manipulate in order to perform a number of tasks
- Arrays also provide access to a number of functions/methods that help in achieving this
- A method is another term for functions associated with an object and is used to execute statements that are relevant to a specific object
- Majority of methods are used to manipulate information stored within the same object
- Arrays are also objects which is another data type
- The main difference of arrays with an object is that it contains information in a form of a "list" unlike objects which uses "properties"
- Syntax
    let/const arrayName = [elementA, elementB, ElementC...]

#### batchfolder > individual > backend > s28 > discussion > index.html
```js
    let grades = [98.5, 94.3, 89.2, 90.1];
    let computerBrands = ['Acer', 'Asus', 'Lenovo', 'Neo', 'Redfox', 'Gateway', 'Toshiba', 'Fujitsu'];
```

Additionally, each data stored in an array is called an element.

It is **not recommended** to have an array with **different data types**.

#### batchfolder > individual > backend > s28 > discussion > index.html
```js
    let mixedArr = [12, 'Asus', null, undefined, {}]; // This is not recommended.
```

This is because an array, by definition, should be a collection of **related** data.

Each element of an array can also be written in a separate line.

#### batchfolder > individual > backend > s28 > discussion > index.html
```js
    let tasks = [
        'drink html',
        'eat javascript',
        'inhale css',
        'bake sass'
    ];
```
You can also store the values of separate variables in an array

#### batchfolder > individual > backend > s28 > discussion > index.html
```js
    //Creating an array with values from variables:
    let city1 = "Tokyo";
    let city2 = "Manila";
    let city3 = "Jakarta";

    let cities = [city1,city2,city3];

    console.log(myTasks);
    console.log(cities);
```

### Array length property

The .length property allows us to get and set the total number of items in an array.

#### batchfolder > individual > backend > s28 > discussion > index.html
```js
    console.log(myTasks.length); 
    console.log(cities.length);

    let blankArr = [];
    console.log(blankArr.length); //results to 0 because the array is empty.
```

length property can also be used with strings. Some array methods and properties can also be used with strings.

#### batchfolder > individual > backend > s28 > discussion > index.html
```js
    let fullname = "Jamie Noble";
    console.log(fullname.length);
```

length property on strings shows the number of characters in a string. Spaces are counted as characters in strings.

### Accessing Elements of an Array

- Accessing array elements is one of the more common tasks that we do with an array
- This can be done through the use of array indexes
- Each element in an array is associated with it's own index/number
- In JavaScript, the first element is associated with the number 0 and increasing this number by 1 for every element
- The reason an array starts with 0 is due to how the language is designed
- Syntax
        arrayName[index];

![Array Visualization](https://avantutor.com/blog/wp-content/uploads/2019/03/cspr_0601.png)

#### batchfolder > individual > backend > s28 > discussion > index.html
```js
    console.log(grades[0]);
    console.log(computerBrands[3]);
    // Accessing an array element that does not exist will return "undefined"
    console.log(grades[20]);

    let lakersLegends = ["Kobe","Shaq","LeBron","Magic","Kareem"];
    //Access the second item in the array:
    console.log(lakersLegends[1]);//Shaq
    //Access the fourth item in the array:
    console.log(lakersLegends[3]);//Magic
```
**Important Note**:
- Array indexes actually refer to an address/location in the device's memory and how the information is stored
- Example array location in memory
    Array address: 0x7ffe9472bad0
    Array[0] = 0x7ffe9472bad0
    Array[1] = 0x7ffe9472bad4
    Array[2] = 0x7ffe9472bad8
- In the example above, the first element and the array itself points to the same memory location and therefore is at 0 elements away from the location of the array itself.

You can also save/store array items in another variable:
#### batchfolder > individual > backend > s28 > discussion > index.html
```js
    let currentLaker = lakersLegends[2];
    console.log(currentLaker);
```

You can also reassign array values using the items' indices
#### batchfolder > individual > backend > s28 > discussion > index.html
```js
    console.log('Array before reassignment');
    console.log(lakersLegends);
    lakersLegends[2] = "Pau Gasol";
    console.log('Array after reassignment');
    console.log(lakersLegends);
```

#### Adding Items into the Array

Using indices, you can also add items into the array.
#### batchfolder > individual > backend > s28 > discussion > index.html
```js
let newArr = [];
console.log(newArr[0]);
```
newArr[0] is undefined because we haven't yet defined the item/data for that index, we can update the index with a new value:

#### batchfolder > individual > backend > s28 > discussion > index.html
```js
newArr[0] = "Cloud Strife";
console.log(newArr);

console.log(newArr[1]);
newArr[1] = "Tifa Lockhart";
console.log(newArr);
```

For now, we can add items at the end of the array. Instead of adding it in the front to avoid the risk of replacing the first items in the array:
#### batchfolder > individual > backend > s28 > discussion > index.html
```js
//newArr[newArr.length-1] = "Aerith Gainsborough"; - will overwrite the last item instead.
newArr[newArr.length] = "Barrett Wallace";
console.log(newArr);
```

There is an array method which will be discussed in the next session which will allow us to add items at the start of the array.

#### Looping over an Array
- You can use a for loop to iterate over all items in an array.
- Set the counter as the index and set a condition that as long as the current index iterated is less than the length of the array, we will run the condition. It is set this way because the index of an array starts at 0.

#### batchfolder > individual > backend > s28 > discussion > index.html
```js
    for(let index = 0; index < newArr.length; index++){

        //You can use the loop counter as index to be able to show each array items in a console log.
        console.log(newArr[index]);

    }
```
Given an array of numbers, you can also show if the following items in the array are divisible by 5 or not. You can mix in an if-else statement in the loop:

#### batchfolder > individual > backend > s28 > discussion > index.html
```js
    let numArr = [5,12,30,46,40];

    for(let index = 0; index < numArr.length; index++){

        if(numArr[index] % 5 === 0){

            console.log(numArr[index] + " is divisible by 5");

        } else {

            console.log(numArr[index] + " is not divisible by 5");

        }

    }
```

## Multidimensional Arrays
The arrays that we were using earlier were **one-dimensional** arrays.

Sometimes, you need to store information that exceeds the form of a one-dimensional array. Some examples are chess boards and multiplication tables.

![readme-images/Untitled%202.png](https://i.etsystatic.com/33357979/r/il/0ea448/3753282264/il_570xN.3753282264_f5bj.jpg)

The code would then look like this:

#### batchfolder > individual > backend > s28 > discussion > index.html
```
let chessBoard = [
    ['a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1'],
    ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'],
    ['a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3'],
    ['a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4'],
    ['a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5'],
    ['a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6'],
    ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'],
    ['a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8']
];
```

The only difference between a one and two-dimensional array is that each element in the array is also an array.

# Activity

**Note**: Copy the code from activity-template.js into the batch Boodle Notes so students can copy the template of the code for this activity.

## Instructions

1. In the S28 folder, create an activity folder, an index.html file inside of it and link the index.js file.
2. Create an index.js file and console log the message Hello World to ensure that the script file is properly associated with the html file.
3. Copy the activity code and instructions from your Boodle Notes into your index.js.

    - **Important note**: Don't pass the users array as an argument to the function.

4. Create a variable groceryList that has a value of an array of grocery items
    - Use Array literals to create the array.
    - log the groceryList array in the console.

5. Create a function which is able to receive a single argument and add the input at the end of the users array.
    - function should be able to receive a single argument.
    - add the input data at the end of the array.
    - The function should not be able to return data.
    - invoke and add an argument to be passed in the function.
    - log the users array in the console.
6. Create a function which is able to receive an index number as a single argument return the item accessed by its index.
    - function should be able to receive a single argument.
    - return the item accessed by the index.
    - Create a global variable called outside of the function called itemFound and store the value returned by the function in it.
        - log the itemFound variable in the console.
7. Create a function which is able to delete the last item in the array and return the deleted item.
    - create a function scoped variable to store the last item in the users array.
    - Look up how to use .length property in accessing the last element of an array and extending/shortening an array.
    - shorten the length of the array by at least 1 to delete the last item.
    - return the last item in the array which was stored in the function scoped variable.
    - create a global scoped variable outside of the function and store the result of the function.
    - log the global scoped variable in the console.
8. Create a function which is able to iterate over the array to display each item in the console.
    - This function will not receive any argument
    - Using a for loop, iterate over the groceryList array to create new array where each element from groceryItems has prefixed number like [1. Milk, 2.Veggies...]
    - Return the newly formed array
    - Invoke the function and store it inside a variable itemsFound 
    - Log the itemsFound variable in the console.
9. Create a function which is able to iterate over the array to search for an item.
    - This function will receive the name of the element as an argument
    - Create an index variable with a value of 0
    - Using a for loop, iterate over the array to search for each index that has the same value as the item.
    - If it found, reassign the value of the variable to the current value of index
    - After the loop, check if the value of the varialbe is not -1
        - If so, return the string "The item exists in the list."
        - If not, return the string "The item is not in the list."
    - Invoke the function to search for an item and store the result in a variable isItemFound.
    - Log the value of isItemFound in the console.
10. Create a function which is able to update a specific item in the array by its index.
    - function should be able to receive 2 arguments, the update and the index number.
    - first, access and locate the item by its index then re-assign the item with the update.
    - this function should not have a return.
    - invoke the function and add the update and index number as arguments.
    - outside of the function, log the users array in the console.
11. Create a function which is able to delete all items in the array.
    - you can modify/set the length of the array.
    - the function should not return anything.
    - invoke the function.
    - outside of the function, Log the users array in the console.
12. Create a function which is able to check if the array is empty.
    - add an if statement to check if the length of the users array is greater than 0.
    - if it is, return false.
    - else, return true.
    - create a global variable called outside of the function  called isUsersEmpty and store the returned value from the function.
        - log the isUsersEmpty variable in the console.

13. Create a function which is able to remove a specific item in the array by index
    - This function will recieve the index as argument
    -Add an if statement to check if the index is less than 0 or greater than or equal to the .length of the groceryList
        - If it is, return invalid index.
    - Else, use for loop to iterate over the groceryList to reassign values starting from the argument sent.
        - Reassign the value of the index into the next element by adding 1 to the current index
    - Outside the loop, decrease the length of the array
    - Return string Element removed successfully.
    - Create a global variable called outside of the function  called isUsersEmpty and store the returned value from the function.
    - Log the isUsersEmpty variable in the console.
14. Update your local backend git repository and push to git with the commit message of Add activity code s28.
15. Add the link in Boodle for s28.

## Solution

```jsx
// 1. Create a variable groceryList that has a value of an array of grocery items
let groceryList = ["Milk","Veggies","Egg","Bread","Cheese"];

console.log("Items to buy:")
console.log(groceryList);

/*
    Important note: Don't pass the array as an argument to the function.
*/

/*
    1. Create a function which is able to receive a single argument and add a grocery item at the end of the groceryList array.
        -function should be able to receive a single argument.
        -add the grocery item at the end of the array.
        -The function should not be able to return anything.
        -invoke and add an argument to be passed in the function.
        -log the groceryList array in the console.
*/
       
function addItem(item){
    groceryList[groceryList.length] = item;
}

addItem("Cooking Oil");
console.log(groceryList);

/*
    2. Create function which is able to receive an index number as a single argument return the item accessed by its index.
        -function should be able to receive a single argument.
        -return the item accessed by the index.
        -Create a global variable called outside of the function called itemFound and store the value returned by the function in it.
        -log the itemFound variable in the console.
*/

function getItemByIndex(index) {
    return groceryList[index];
};

let itemFound = getItemByIndex(2);
console.log(itemFound);

/*
    3. Create function which is able to delete the last item in the array after it is bought and return the deleted item.
        -Create a function scoped variable to store the last item in the groceryList array.
        -Look up how to use .length property in accessing the last element of an array and extending/shortening an array.
        -Shorten the length of the array by at least 1 to delete the last item using .length property.
        -return the last item in the array which was stored in the variable.
*/

function deleteItem() {
    let deleteLastItem = groceryList[groceryList.length - 1];
    groceryList.length--;
    return deleteLastItem;
}

let deletedLastItem = deleteItem();
console.log(deletedLastItem);
console.log(groceryList);
   

/*
    4. Create function which is able to update a specific item in the groceryList array by its index.
        -Function should be able to receive 2 arguments, the update and the index number.
        -First, access and locate the item by its index then re-assign the item with the update.
        -This function should not have a return.
        -Invoke the function and add the update and index number as arguments.
        -Log the groceryList array in the console.
*/

   
function updateItemByIndex(update, index) {
    groceryList[index] = update;
}

updateItemByIndex("Cookies", 3);
console.log(groceryList);

/*
    5. Create function which is able to delete all items in the array.
        -You can modify/set the length of the array.
        -The function should not return anything.

*/

function deleteAll() {
    groceryList.length = 0
    console.log(groceryList);
};

    
deleteAll();


/*
    6. Create a function which is able to check if the array is empty.
        -Add an if statement to check if the length of the users array is greater than 0.
            -If it is, return false.
        -Else, return true.
        -Create a global variable called outside of the function  called isUsersEmpty and store the returned value from the function.
        -Log the isUsersEmpty variable in the console.

*/

function isEmpty() {
    if (groceryList.length > 0) {
        return false
    } else {
        return true
    }
}

isUsersEmpty = isEmpty();
console.log(isUsersEmpty);

/*
    7. Create a function which is able to iterate over the array to display each item in the console.
        -This function will not receive any argument
        -Using a for loop, iterate over the groceryList array to create new array where each element from groceryItems has prefixed number like [1. Milk, 2.Veggies...]
        -Return the newly formed array
        -Invoke the function and store it inside a variable itemsFound 
        - Log the itemsFound variable in the console.
*/
function displayItems() {
    numberedItems = []
    for (let i = 0; i < groceryList.length; i++) {
        numberedItems[i] = `${i + 1}. ${groceryList[i]}`;
    }
    return numberedItems;
}

console.log("Grocery List:");
itemsFound = displayItems();
console.log(itemsFound);
/*
    8. Create a function which is able to iterate over the array to search for an item.
        -This function will receive the name of the element as an argument
        -Create an index variable with a value of 0
        -Using a for loop, iterate over the array to search for each index that has the same value as the item.
        -If it found, reassign the value of the variable to the current value of index
        -After the loop, check if the value of the varialbe is not -1
            -If so, return the string "The item exists in the list."
            -If not, return the string "The item is not in the list."
        -Invoke the function to search for an item and store the result in a variable isItemFound.
        -Log the value of isItemFound in the console.
*/

function searchItem(item) {
    let index = 0;
    for (let i = 0; i < groceryList.length; i++) {
        if (groceryList[i] === item) {
            index = i;
        }
    }
    if (index !== -1) {
        return(`${item} exists in the grocery list at index ${index + 1}.`);
    } else {
        return(`${item} does not exist in the grocery list.`);
    }
}

isItemFound = searchItem("Egg");
```