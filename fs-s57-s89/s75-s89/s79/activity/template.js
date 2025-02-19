// Question #1: Add a new book with the following properties:
// Automatic unique ID assignment
// Title and author should be a string
// Year should be a positive number
// Status defaults to true

function addBook(library, newBook) {

}

// Question #2: Retrieve either details of a specific book by its ID or an array of details for all books, optionally filtered by availability. 

function getBooks(library, id = null, filterAvailable = null) {
   
}

// Question #3: Update a book's availability status after validating the book exists and ensuring the new status differs from the current.

function updateBookAvailability(library, id, isAvailable) {
   
}

// Question #4: Remove a book by its ID only if it is marked as unavailable.
function removeBook(library, id) {

}

// Question #5: List all books, with an option to filter by their availability status.

function listBooks(library, filterAvailable = null) {

}

try{
    module.exports = {

        addBook: typeof addBook !== 'undefined' ? addBook : null,
        getBooks: typeof getBooks !== 'undefined' ? getBooks : null,
        updateBookAvailability: typeof updateBookAvailability !== 'undefined' ? updateBookAvailability : null,
        removeBook: typeof removeBook !== 'undefined' ? removeBook : null,
        listBooks: typeof listBooks !== 'undefined' ? listBooks : null,

    }

} catch(err){

}