# MTE - Machine Problem 4

## Resources

### References

Sample:

- [Markdown Basics](https://www.markdownguide.org/basic-syntax)
    
### Tools/Technologies Version


## Discussion
```
Instructor's Note:
Machine Problem 4 will focus on answering the given machine problems for 4 hours. No discussion will be given. 

Proceed with cloning the template.js located inside the activity folder.
```

## Activity

### Activity References

### Activity Instructions

#### Instructions
1. File and folder preparation instructions.
    - Includes file and folder preparations such as template files and folders.
2. Add activity instructions.
    - Add the necessary IDs, classes for bootcampers to add to allow Automated Grading checking.
3. [Research] - Add activity instructions.
    - Add indication if activity part needs research.
4. Submission Mechanics
    - Add the necessary submission mechanics such as repo name, commit messages.

#### Activity Solution:
- Activity Solution can be found in : [./activity/solution.js](./activity/solution.js)

**Solution**

### 1. Folder and File Preparation
```
Inside the s78 folder, create an activity folder then clone the template.js.
```

### 2. Step 1 - Item 1

#### batchfolder > individual > mte > s78 > activity > template.js

```js
/* arrayToObject function 
Question #1: Given an array of objects where each object contains id and value properties, write a function to convert this array into an object where each id is a key, and the corresponding value is the value. Assume all ids are unique.
*/

// Defines a function to convert an array of objects into a single object.
function arrayToObject(array) {
    // Initializes an empty object to hold the result.
    const resultObject = {};

    // Loops through each item in the input array.
    for (let i = 0; i < array.length; i++) {
        // Retrieves the current item from the array.
        const currentItem = array[i];
        // Adds a new property to the result object using the current item's id as the key
        // and the current item's value as the value for that key.
        resultObject[currentItem.id] = currentItem.value;
    }

    // Returns the newly constructed object after the loop completes.
    return resultObject;
}

// Example of how to use the function with an array of objects.
// Each object in the array has an 'id' and a 'value' property.
const arrayOfObjects = [
    { id: 'a1', value: 'Apple' },
    { id: 'b2', value: 'Banana' },
    { id: 'c3', value: 'Cherry' }
];

```

#### Instructor's Note:
- Test the function using [Codepen](https://www.codepen.io/)
- Invoke the function and input the appropriate parameter
- sample: getTotalInventoryValue(products)
- getTotalInventoryValue("Not an array")

### 3. Step 2 - Item 2

#### batchfolder > individual > mte > s78 > activity > template.js

```js
/* concatenateStrings function 
Question #2: Develop a function that concatenates an array of strings using a given delimiter. The function should return a single string comprised of array elements joined by the delimiter.
*/

// Defines a function to concatenate an array of strings using a specified delimiter.
function concatenateStrings(strings, delimiter) {
    // Checks if the first parameter is not an array or the second parameter is not a string.
    // If either check fails, returns an empty string.
    if (!Array.isArray(strings) || typeof delimiter !== 'string') return '';

    // Initializes an empty string to accumulate the result.
    let resultString = '';
    // Loops through each string in the array.
    for (let i = 0; i < strings.length; i++) {
        // Adds the current string to the result string.
        resultString += strings[i];
        // If the current string is not the last one in the array,
        // also adds the delimiter to the result string.
        if (i < strings.length - 1) resultString += delimiter;
    }
    // Returns the concatenated string after the loop completes.
    return resultString;
}
const strings = ['Hello', 'world', 'this', 'is', 'JavaScript'];

```
#### Instructor's Note:
- Test the function using [Codepen](https://www.codepen.io/)
- Invoke the function and input the appropriate parameter
- concatenateStrings(strings, ' ')

### 4. Step 3 - Item 3

#### batchfolder > individual > mte > s78 > activity > template.js

```js
/* findUniqueElements function 
Question #3: Construct a function to identify unique elements within an array. The array can contain primitive data types.
*/

// Defines a function to identify unique elements within an array.
function findUniqueElements(items) {
    // Checks if the provided input is not an array, returning an empty array if the check fails.
    if (!Array.isArray(items)) return [];

    // Initializes an empty array to store unique elements.
    const uniqueElements = [];
    // Loops through each element in the input array.
    for (let i = 0; i < items.length; i++) {
        // Checks if the current element is not already in the uniqueElements array.
        if (uniqueElements.indexOf(items[i]) === -1) {
            // Adds the current element to the uniqueElements array if it's not already present.
            uniqueElements.push(items[i]);
        }
    }
    // Returns the array of unique elements after iterating through all items.
    return uniqueElements;
}
const data = [1, 2, 2, 3, 4, 3, 5];

```
#### Instructor's Note:
- Test the function using [Codepen](https://www.codepen.io/)
- Invoke the function and input the appropriate parameter
- findUniqueElements(data)

### 5. Step 4 - Item 4

#### batchfolder > individual > mte > s78 > activity > template.js

```js
/*  function 
Question #4: Create a program that searches through contacts by name. The search should be case-insensitive and partial matches should be returned.
*/

// Defines a function to search for contacts by name within an array of contacts.
function findContactsByName(contacts, searchString) {
    // Converts the searchString to lowercase for case-insensitive comparison.
    const searchLower = searchString.toLowerCase();
    // Initializes an empty array to store contacts that match the search criteria.
    const matchedContacts = [];

    // Loops through each contact in the contacts array.
    for (let i = 0; i < contacts.length; i++) {
        // Checks if the current contact's name, converted to lowercase, includes the search string.
        if (contacts[i].name.toLowerCase().includes(searchLower)) {
            // Adds the contact to the matchedContacts array if the name matches the search criteria.
            matchedContacts.push(contacts[i]);
        }
    }

    // Returns the array of contacts that matched the search criteria.
    return matchedContacts;
}

const officeContacts = [
    { id: 1, name: 'Michael Scott', role: 'Regional Manager' },
    { id: 2, name: 'Dwight Schrute', role: 'Assistant to the Regional Manager' },
    { id: 3, name: 'Jim Halpert', role: 'Sales Representative' },
    { id: 4, name: 'Pam Beesly', role: 'Receptionist' },
    { id: 5, name: 'Ryan Howard', role: 'Temp' }
];

```
#### Instructor's Note:
- Test the function using [Codepen](https://www.codepen.io/)
- Invoke the function and input the appropriate parameter
- sample: findContactsByName(officeContacts, "dw")

### 5. Step 4 - Item 4

#### batchfolder > individual > mte > s78 > activity > template.js

```js
/*  function 
Question #5: Create a program that adds a new contact, automatically assign a unique id to each new contact, ensuring that the id auto-increments based on the highest existing id in the contacts array.
*/

// Defines a function to add a new contact to an array of contacts.
function addContact(contacts, newContact) {
    // Initializes a variable to track the highest id found in the contacts array.
    let maxId = 0;
    // Iterates over each contact in the contacts array.
    for (let contact of contacts) {
        // Checks if the current contact's id is greater than the current maxId.
        if (contact.id > maxId) {
            // Updates maxId with the current contact's id if it's higher.
            maxId = contact.id;
        }
    }

    // Calculates the next id value by adding one to the highest id found.
    const nextId = maxId + 1;
    // Creates a new contact object, combining the provided newContact info with the next id.
    const contactToAdd = { id: nextId, ...newContact };

    // Adds the newly created contact object to the contacts array.
    contacts.push(contactToAdd);

    // Returns the updated array of contacts, now including the new contact.
    return contacts;
}

let contacts = [
    { id: 1, name: 'Michael Scott', role: 'Regional Manager' },
    { id: 2, name: 'Dwight Schrute', role: 'Assistant to the Regional Manager' },
    { id: 3, name: 'Jim Halpert', role: 'Sales Representative' },
    { id: 4, name: 'Pam Beesly', role: 'Receptionist' }
];


```
#### Instructor's Note:
- Test the function using [Codepen](https://www.codepen.io/)
- Invoke the function and input the appropriate parameter
- addContact(contacts, {name: 'Ryan Howard', role: 'Temp' })
