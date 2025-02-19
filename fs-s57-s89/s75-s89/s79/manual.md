# MTE - Machine Problem 5

## Resources

### References

Sample:

- [Markdown Basics](https://www.markdownguide.org/basic-syntax)
    
### Tools/Technologies Version


## Discussion
```
Instructor's Note:
Machine Problem 5 will focus on answering CRUD machine problems for 4 hours. No discussion will be given. 

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
Inside the s79 folder, create an activity folder then clone the template.js.
```

### 2. Step 1 - Item 1

#### batchfolder > individual > mte > s79 > activity > template.js

```js
/* addBook function 
Question #1: Add a new book with the following properties:
// Automatic unique ID assignment
// Title and author should be a string
// Year should be a positive number
// Status defaults to true
*/

// Defines a function to add a new book to a library array.
function addBook(library, newBook) {
    // Uses the reduce method to find the highest book id in the library.
    const maxId = library.reduce((max, book) => Math.max(max, book.id), 0);
    // Sets the id of the new book to one more than the highest id found.
    newBook.id = maxId + 1;
    
    // Validates the new book's details: title and author should not be empty,
    // and yearPublished should be a positive number.
    if (!newBook.title || !newBook.author || typeof newBook.yearPublished !== 'number' ||
        newBook.yearPublished <= 0) {
        // Logs an error message if the book details are invalid.
        console.error("Invalid book details.");
        // Returns false to indicate the book was not added.
        return false;
    }

    // Sets the isAvailable property of the new book to true, indicating it's available for borrowing.
    newBook.isAvailable = true;
    // Adds the validated and completed new book to the library array.
    library.push(newBook);
    
    // Returns true to indicate the book was successfully added.
    return true;
}


let library = [
    { id: 1, title: 'ABNKKBSNPLAko?!', author: 'Bob Ong', yearPublished: 2001, isAvailable: true },
    { id: 2, title: 'Ligo na U, Lapit na Me', author: 'Eros Atalia', yearPublished: 2009, isAvailable: true },
    { id: 3, title: 'Kikomachine Komix Blg. 9: Ang Susi ng Siglo', author: 'Manix Abrera', yearPublished: 2016, isAvailable: false },
    { id: 4, title: 'Para Kay B (o kung paano dinevastate ng pag-ibig ang 4 out of 5 sa atin)', author: 'Ricky Lee', yearPublished: 2008, isAvailable: true },
    { id: 5, title: 'Smaller and Smaller Circles', author: 'F.H. Batacan', yearPublished: 2002, isAvailable: false }
];

```

#### Instructor's Note:
- Test the function using [Codepen](https://www.codepen.io/)
- Invoke the function and input the appropriate parameter
- addBook(library, { title: 'iStatus Nation', author: 'Joselito D. Delos Reyes', yearPublished: 2014 });

### 3. Step 2 - Item 2

#### batchfolder > individual > mte > s79 > activity > template.js

```js
/* getBooks function 
Question #2: Retrieve either details of a specific book by its ID or an array of details for all books, optionally filtered by availability. 
*/

function getBooks(library, id = null, filterAvailable = null) {
    // Checks if an ID is provided for a specific book search.
    if (id) {
        // Attempts to find a book by the given ID. Returns the book object or null if not found.
        return library.find(book => book.id === id) || null;
    }
    // If no specific ID is provided, filters books based on availability status if filterAvailable is not null.
    // Returns either all books or those that match the availability filter.
    return library.filter(book => filterAvailable === null || book.isAvailable === filterAvailable);
}

```
#### Instructor's Note:
- Test the function using [Codepen](https://www.codepen.io/)
- Invoke the function and input the appropriate parameter
- All books: getBooks(library)
- A specific book: getBooks(library, 1)
- Filter by availability: getBooks(library, null, true)

### 4. Step 3 - Item 3

#### batchfolder > individual > mte > s79 > activity > template.js

```js
/* updateBookAvailability function 
Question #3: Update a book's availability status after validating the book exists and ensuring the new status differs from the current.
*/

function updateBookAvailability(library, id, isAvailable) {
    // Checks if isAvailable parameter is a boolean, ensuring valid input.
    if (typeof isAvailable !== 'boolean') {
        console.error("Availability status must be a boolean.");
        return false;
    }
    // Searches for the book by ID.
    const book = library.find(book => book.id === id);
    // If the book isn't found, logs an error and returns false.
    if (!book) {
        console.error("Book not found.");
        return false;
    }
    // If the book's current availability matches the intended update, logs this status and returns false.
    if (book.isAvailable === isAvailable) {
        console.log(`Book availability is already set to ${isAvailable}.`);
        return false;
    }
    // Updates the book's availability status.
    book.isAvailable = isAvailable;
    console.log(`Book availability updated.`);
    return true;
}


```
#### Instructor's Note:
- Test the function using [Codepen](https://www.codepen.io/)
- Invoke the function and input the appropriate parameter
- sample: findContactsByName(officeContacts, "dw")

### 5. Step 4 - Item 4

#### batchfolder > individual > mte > s79 > activity > template.js

```js
/* removeBook function 
Question #4: Remove a book by its ID only if it is marked as unavailable.
*/

function removeBook(library, id) {
    // Finds the index of the book by ID.
    const index = library.findIndex(book => book.id === id);
    // If no book is found, logs an error and returns false.
    if (index === -1) {
        console.error("Book not found.");
        return false;
    }
    // Checks if the book is available. If it is, prevents removal and returns false.
    if (library[index].isAvailable) {
        console.log("Book must be unavailable to be removed.");
        return false;
    }
    // Removes the book from the library array if it's unavailable.
    library.splice(index, 1);
    console.log("Book removed.");
    return true;
}

```
#### Instructor's Note:
- Test the function using [Codepen](https://www.codepen.io/)
- Invoke the function and input the appropriate parameter
- removeBook(library, 2);

### 6. Step 5 - Item 5

#### batchfolder > individual > mte > s79 > activity > template.js

```js
/*  function 
Question #5: List all books, with an option to filter by their availability status.
*/

function listBooks(library, filterAvailable = null) {
    // Validates the filterAvailable parameter to ensure it's either true, false, or null.
    if (filterAvailable !== null && typeof filterAvailable !== 'boolean') {
        console.error("Filter must be true, false, or null.");
        return [];
    }
    // Filters books based on the availability status if filterAvailable is specified,
    // otherwise returns all books.
    return library.filter(book => filterAvailable === null || book.isAvailable === filterAvailable);
}


```
#### Instructor's Note:
- Test the function using [Codepen](https://www.codepen.io/)
- Invoke the function and input the appropriate parameter
- All books: listBooks(library)
- Available books only: listBooks(library, true)
