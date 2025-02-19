# MTE - Machine Problem 3

## Resources

### References

Sample:

- [Markdown Basics](https://www.markdownguide.org/basic-syntax)
    
### Tools/Technologies Version


## Discussion
```
Instructor's Note:
Check session slides for discussion
```
## Code Along

### 1. Folder and File Preparation
```
Inside the fullstack folder, create an s77 folder.
Inside the s77 folder, create a discussion folder then create index.js
```
### 2. Step 1

#### batchfolder > individual > mte > s77 > discussion > index.js

**Problem #1** : Given an array of product objects, count how many products belong to a specific category. Return the count. If the input is not an array or is empty, return 0.
```js
// Define a function to count how many products belong to a specific category
function countProductsInCategory(products, category) {
    // Validate input is an array; return 0 if not
    if (!Array.isArray(products) || products.length === 0) {
        return 0;
    }
    return products
}

const products = [
    { name: 'Laptop', category: 'Electronics', price: 1000, quantity: 5 },
    { name: 'Keyboard', category: 'Electronics', price: 100, quantity: 15 },
    { name: 'Shirt', category: 'Clothing', price: 20, quantity: 10 }
];

```
#### Instructor's Note:
- Test as you go, [Codepen](https://www.codepen.io/)
- Invoke the function and input the appropriate parameter
- countProductsInCategory(products)

**Problem #1** : Find products in the specified category, return the count of products in the category

```js

// Define a function to count how many products belong to a specific category
function countProductsInCategory(products, category) {
    // Validate input is an array; return 0 if not
    if (!Array.isArray(products) || products.length === 0) {
        return 0;
    }

    // return products

    // Use the .filter() method to find products in the specified category
    const filteredProducts = products.filter(product => product.category === category);

    // Return the count of products in the category
    return filteredProducts.length;
}

const products = [
    { name: 'Laptop', category: 'Electronics', price: 1000, quantity: 5 },
    { name: 'Keyboard', category: 'Electronics', price: 100, quantity: 15 },
    { name: 'Shirt', category: 'Clothing', price: 20, quantity: 10 }
];

```
#### Instructor's Note:
- Test as you go, [Codepen](https://www.codepen.io/)
- Invoke the function and input the appropriate parameter
- countProductsInCategory(products, 'Electronics')

#### Mini-Activity

**Problem #2** : Determine if a product is available in stock by checking if its quantity is greater than 0. Return true if available, false if not. If the input is not an array or is empty, return false.

```js
// Define a function to check if a specific product is available in stock
function isProductAvailable(products, productName) {
    // Check if the input is a valid array
    if (!Array.isArray(products) || products.length === 0) {
        return false;
    }

    // Find the product by name and check its availability
    const product = products.find(product => product.name === productName);

    // Return true if the product is found and its quantity is greater than 0
    return product && product.quantity > 0;
}

// Example usage
const inventory = [
    { name: 'Laptop', category: 'Electronics', price: 1000, quantity: 0 }, // Not available
    { name: 'Headphones', category: 'Electronics', price: 100, quantity: 10 } // Available
];

```
#### Instructor's Note:
- Test as you go, [Codepen](https://www.codepen.io/)
- Invoke the function and input the appropriate parameter
- isProductAvailable(inventory, 'Headphones')

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
Inside the s77 folder, create an activity folder then clone the template.js.
```

### 2. Step 1 - Item 1

#### batchfolder > individual > mte > s77 > activity > template.js

```js
/* calculateTotalAmount function 
Question #1: Calculate the total value of the entire inventory.
Given an array of product objects, each containing `name`, `category`, `price`, and `quantity`, write a function called `getTotalInventoryValue`.
The function takes the array of product objects as input and returns the total value of the entire inventory.
If the input is not an array, return undefined.
*/

const products = [
    { name: 'Laptop', category: 'Electronics', price: 1000, quantity: 5 },
    { name: 'Shirt', category: 'Clothing', price: 20, quantity: 10 },
    { name: 'Book', category: 'Books', price: 15, quantity: 25 },
    { name: 'Headphones', category: 'Electronics', price: 50, quantity: 8 }
];

// Defines a function named getTotalInventoryValue that calculates the total value of inventory from a list of products.
function getTotalInventoryValue(products) {
    // Checks if the provided 'products' variable is not an array.
    if (!Array.isArray(products)) {
        // Logs an error message to the console if 'products' is not an array.
        console.log("Invalid input: The provided input is not an array.");
        // Exits the function and returns undefined due to invalid input.
        return undefined;
    }

    // Initializes a variable to hold the total inventory value, starting at 0.
    let totalValue = 0;
    // Starts a loop to iterate over each product in the 'products' array.
    for (let i = 0; i < products.length; i++) {
        // Retrieves the product at the current index 'i' within the loop.
        const product = products[i];
        // Adds the product's value (price multiplied by quantity) to the total inventory value.
        totalValue += product.price * product.quantity;
    }

    // Returns the calculated total value of all products in the inventory.
    return totalValue;
}
```

#### Instructor's Note:
- Test the function using [Codepen](https://www.codepen.io/)
- Invoke the function and input the appropriate parameter
- sample: getTotalInventoryValue(products)
- getTotalInventoryValue("Not an array")

### 3. Step 2 - Item 2

#### batchfolder > individual > mte > s77 > activity > template.js

```js
/* isUserValid function 
Question #2: Validate a username/password combination.
Given an array of user objects, each containing `username` and `password`, write a function called `isUserValid`.
The function takes the array of user objects and a username/password combination as input and returns true if the combination is valid, and false otherwise.
*/

const users = [
    { username: 'petra', password: 'pass123' },
    { username: 'sasha', password: 'pass456' },
    { username: 'bertholdt', password: 'pass789' }
];

// Defines a function to check if a username and password combination is valid.
function isUserValid(users, username, password) {
    // Loops through each user in the users array.
    for (let i = 0; i < users.length; i++) {
        // Assigns the current user object to a variable for easy access.
        const user = users[i];
        // Checks if the current user's username and password match the given username and password.
        if (user.username === username && user.password === password) {
            // Returns true if a match is found, indicating the user is valid.
            return true;
        }
    }

    // Returns false if no matching user is found after checking the entire array.
    return false;
}

```
#### Instructor's Note:
- Test the function using [Codepen](https://www.codepen.io/)
- Invoke the function and input the appropriate parameter
- sample: isUserValid(users, "petra", "pass123")
- isUserValid(users, "annie", "pass456")
- isUserValid(users, "bertholdt", "pass456")

### 4. Step 3 - Item 3

#### batchfolder > individual > mte > s77 > activity > template.js

```js
/* calculateSalary
 function 
Question #3: Calculate employee salaries.
Given an array of employee objects, each containing `name`, `position`, `hoursWorked`, and `hourlyRate`, write a function called `calculateSalary`.
The function takes the array of employee objects as input and returns an array of employee objects with an additional property `totalSalary`, which represents the total salary earned by each employee.
*/

const employees = [
    { name: 'Yor', position: 'Manager', hoursWorked: 40, hourlyRate: 30 },
    { name: 'Loid', position: 'Developer', hoursWorked: 35, hourlyRate: 25 },
    { name: 'Anya', position: 'Intern', hoursWorked: 20, hourlyRate: 15 }
];

// Defines a function that calculates the total salary for each employee.
function calculateSalary(employees) {
    // Uses the map function to iterate over each employee in the employees array.
    return employees.map(employee => {
        // Calculates the total salary by multiplying the hoursWorked by the hourlyRate for each employee.
        const totalSalary = employee.hoursWorked * employee.hourlyRate;
        // Returns a new object for each employee, spreading the original employee properties and adding the totalSalary property.
        return { ...employee, totalSalary };
    });
}

```
#### Instructor's Note:
- Test the function using [Codepen](https://www.codepen.io/)
- Invoke the function and input the appropriate parameter
- sample: calculateSalary(employees)
- calculateSalary("anya")

### 5. Step 4 - Item 4

#### batchfolder > individual > mte > s77 > activity > template.js

```js
/* getAvailableBooks function 
Question #4: Identify available books in the library.
Given two arrays, `books` and `borrowers`, each book is represented by an object with `title` and `author`, and each borrower by an object with `name` and `books` (books borrowed by the borrower).
Create a program that returns an array of books that are not currently borrowed.
*/

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

// Defines a function to filter out books that are currently borrowed and return those that are available.
function getAvailableBooks(books, borrowers) {
    // Creates a flat array of all book titles currently borrowed by any borrower.
    const borrowedTitles = borrowers.flatMap(borrower => borrower.books);
    // Filters the original books array, removing any books that are in the borrowedTitles array.
    return books.filter(book => !borrowedTitles.includes(book.title));
}

```
#### Instructor's Note:
- Test the function using [Codepen](https://www.codepen.io/)
- Invoke the function and input the appropriate parameter
- sample: getAvailableBooks(books, borrowers)

### 5. Step 4 - Item 4

#### batchfolder > individual > mte > s77 > activity > template.js

```js
/* getTotalSalesByDate function 
Question #5: Analyze sales data.
Given an array of sales objects, each containing `date`, `product`, and `quantity`, write a function called `getTotalSalesByDate`.
The function takes the array of sales objects and a specific date as input and returns the total quantity of products sold on that date.
*/
const sales = [
    { date: '2023-01-01', product: 'Album', quantity: 10 },
    { date: '2023-01-01', product: 'Poster', quantity: 5 },
    { date: '2023-01-02', product: 'Light Stick', quantity: 8 },
    { date: '2023-01-02', product: 'Stickers', quantity: 3 }
];

// Defines a function to compute the total sales for a given date.
function getTotalSalesByDate(sales, date) {
    // Uses the reduce method to iterate over each sale in the sales array.
    return sales.reduce((total, sale) => {
        // Checks if the sale's date matches the specified date.
        // If so, adds the sale's quantity to the running total.
        // If not, returns the current total without modification.
        return sale.date === date ? total + sale.quantity : total;
    }, 0); // Initializes the total with 0.
}

```
#### Instructor's Note:
- Test the function using [Codepen](https://www.codepen.io/)
- Invoke the function and input the appropriate parameter
- sample: removeLowScoresAndCalculateAverage([70, 82, 50, 28, 91, 60], 60)
- removeLowScoresAndCalculateAverage([55, 42, 47], 60)