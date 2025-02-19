/* 
1. In the S28 folder, create an activity folder, an index.html file inside of it and link the index.js file.
2. Create an index.js file and console log the message Hello World to ensure that the script file is properly associated with the html file.
3. Copy the activity code and instructions from your Boodle Notes into your index.js.
*/
// 4. Create a variable groceryList that has a value of an array of grocery items
let groceryList = ["Milk","Veggies","Egg","Bread","Cheese"];

console.log("Items to buy:")
console.log(groceryList);

/*
    Important note: Don't pass the array as an argument to the function.
*/

/*
    5. Create a function which is able to receive a single argument and add a grocery item at the end of the groceryList array.
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
    6. Create function which is able to receive an index number as a single argument return the item accessed by its index.
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
    7. Create function which is able to delete the last item in the array after it is bought and return the deleted item.
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
    8. Create function which is able to update a specific item in the groceryList array by its index.
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
    9. Create a function which is able to iterate over the array to display each item in the console.
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
    10. Create a function which is able to iterate over the array to search for an item.
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
console.log(isItemFound);

/*
11. Create a function which is able to remove a specific item in the array by index
    - This function will recieve the index as argument
    -Add an if statement to check if the index is less than 0 or greater than or equal to the .length of the groceryList
        -If it is, return invalid index.
    -Else, use for loop to iterate over the groceryList to reassign values starting from the argument sent.
        -reassign the value of the index into the next element by adding 1 to the current index
    -Outside the loop, decrease the length of the array
    -Return string Element removed successfully.
    -Create a global variable called outside of the function  called isUsersEmpty and store the returned value from the function.
    -Log the isUsersEmpty variable in the console.
*/

function removeElement(indexToRemove) {
    if (indexToRemove < 0 || indexToRemove >= groceryList.length) {
        return"Invalid index."; 
    }
    elementToRemove = groceryList[indexToRemove];
    // Shift elements after the target index to the left
    for (let i = indexToRemove; i < groceryList.length - 1; i++) {
        groceryList[i] = groceryList[i + 1];
    }

    // Reduce the length of the array by 1
    groceryList.length -= 1;

    return `${elementToRemove} removed successfully.`;
}

// Test the removeElement function
removedElement = removeElement(1); // Remove "Banana" at index 1
console.log(removedElement); // Output: "Element removed successfully."
console.log(groceryList);

/*
12. Create function which is able to delete all items in the array.
    -You can modify/set the length of the array.
    -The function should not return anything.
*/

function deleteAll() {
    groceryList.length = 0
    console.log(groceryList);
};
deleteAll();
/*
13. Create a function which is able to check if the array is empty.
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

try{
    module.exports = {

        groceryList: typeof groceryList !== 'undefined' ? groceryList : null,
        addItem: typeof addItem !== 'undefined' ? addItem : null,
        getItemByIndex: typeof getItemByIndex !== 'undefined' ? getItemByIndex : null,
        deleteItem: typeof deleteItem !== 'undefined' ? deleteItem : null,
        deletedLastItem: typeof deletedLastItem !== 'undefined' ? deletedLastItem : null,
        updateItemByIndex: typeof updateItemByIndex !== 'undefined' ? updateItemByIndex : null,
        displayItems: typeof displayItems !== 'undefined' ? displayItems : null,
        itemsFound: typeof itemsFound !== 'undefined' ? itemsFound : null,
        searchItem: typeof searchItem !== 'undefined' ? searchItem : null,
        removeElement: typeof removeElement !== 'undefined' ? removeElement : null,
        isItemFound: typeof isItemFound !== 'undefined' ? isItemFound : null,
        removeElement: typeof removeElement !== 'undefined' ? removeElement : null,
        removedElement: typeof removedElement !== 'undefined' ? removedElement : null,
        deleteAll: typeof deleteAll !== 'undefined' ? deleteAll : null,
        isEmpty: typeof isEmpty !== 'undefined' ? isEmpty : null
    }
} catch(err){

}