// Question #1: Calculate the total value of the entire inventory.
// Given an array of product objects, each containing `name`, `category`, `price`, and `quantity`, write a function called `getTotalInventoryValue`.
// The function takes the array of product objects as input and returns the total value of the entire inventory.
// If the input is not an array, return undefined.

const products = [
    { name: 'Laptop', category: 'Electronics', price: 1000, quantity: 5 },
    { name: 'Shirt', category: 'Clothing', price: 20, quantity: 10 },
    { name: 'Book', category: 'Books', price: 15, quantity: 25 },
    { name: 'Headphones', category: 'Electronics', price: 50, quantity: 8 }
];

function getTotalInventoryValue(products) {

}

// Question #2: Validate a username/password combination.
// Given an array of user objects, each containing `username` and `password`, write a function called `isUserValid`.
// The function takes the array of user objects and a username/password combination as input and returns true if the combination is valid, and false otherwise.

const users = [
    { username: 'petra', password: 'pass123' },
    { username: 'sasha', password: 'pass456' },
    { username: 'bertholdt', password: 'pass789' }
];

function isUserValid(users, username, password) {

}

// Question #3: Calculate employee salaries.
// Given an array of employee objects, each containing `name`, `position`, `hoursWorked`, and `hourlyRate`, write a function called `calculateSalary`.
// The function takes the array of employee objects as input and returns an array of employee objects with an additional property `totalSalary`, which represents the total salary earned by each employee.

const employees = [
    { name: 'Yor', position: 'Manager', hoursWorked: 40, hourlyRate: 30 },
    { name: 'Loid', position: 'Developer', hoursWorked: 35, hourlyRate: 25 },
    { name: 'Anya', position: 'Intern', hoursWorked: 20, hourlyRate: 15 }
];

function calculateSalary(employees) {

}

// Question #4: Identify available books in the library.
// Given two arrays, `books` and `borrowers`, each book is represented by an object with `title` and `author`, and each borrower by an object with `name` and `books` (books borrowed by the borrower).
// Write a function called `getAvailableBooks` that returns an array of books that are not currently borrowed.

const books = [
    { title: 'Pride and Prejudice', author: ' Jane Austen'},
    { title: 'To Kill a Mockingbird', author: 'Harper Lee'},
    { title: 'A Brief History of Time', author: 'Stephen Hawking'},
    { title: 'The Da Vinci Code', author: 'Dan Brown'},
    { title: 'Gone Girl', author: ' Gillian Flynn'}
];

const borrowers = [
    { name: 'Ranpo', books: ['The Da Vinci Code'] },
    { name: 'Dazai', books: ['Gone Girl'] }
];

function getAvailableBooks(books, borrowers) {

}

// Question #5: Analyze sales data.
// Given an array of sales objects, each containing `date`, `product`, and `quantity`, write a function called `getTotalSalesByDate`.
// The function takes the array of sales objects and a specific date as input and returns the total quantity of products sold on that date.

const sales = [
    { date: '2023-01-01', product: 'Album', quantity: 10 },
    { date: '2023-01-01', product: 'Poster', quantity: 5 },
    { date: '2023-01-02', product: 'Light Stick', quantity: 8 },
    { date: '2023-01-02', product: 'Stickers', quantity: 3 }
];

function getTotalSalesByDate(sales, date) {

}


// Exporting functions for testing (Do not modify)
try {
    module.exports = {
        getTotalInventoryValue,
        isUserValid,
        calculateSalary,
        getAvailableBooks,
        getTotalSalesByDate, 
        products,
        users,
        employees,
        books,
        borrowers,
        sales
    };
} catch(err) {
    // Error handling if needed
}
