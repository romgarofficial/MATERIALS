// Problem #1: Given an array of product objects, count how many products belong to a specific category. Return the count. If the input is not an array or is empty, return 0.

// Define a function to count how many products belong to a specific category
function countProductsInCategory(products, category) {
    // Validate input is an array; return 0 if not
    if (!Array.isArray(products) || products.length === 0) {
        return 0;
    }

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

// Problem #2: Determine if a product is available in stock by checking if its quantity is greater than 0. Return true if available, false if not. If the input is not an array or is empty, return false

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