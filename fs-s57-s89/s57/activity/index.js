/*
This code sets up event listeners for both the first name and 
last name input fields. Whenever a key is released in either 
of these input fields, the updateFullName function is called. 
This function retrieves the current values of both input fields 
and updates the text content of the spanFullName element to 
display the full name as a concatenation of the first name and last name.
*/

// Select the input element with the id 'txt-first-name' and 
// store it in the variable txtFirstName
const txtFirstName = document.querySelector('#txt-first-name');

// Select the input element with the id 'txt-last-name' and 
// store it in the variable txtLastName
const txtLastName = document.querySelector('#txt-last-name');

// Select the span element with the id 'span-full-name' and 
// store it in the variable spanFullName
const spanFullName = document.querySelector('#span-full-name');

// Define a function named updateFullName which updates the 
//text content of spanFullName with the concatenated first name and last name
const updateFullName = () => {
    // Get the value of the first name input and store it in the 
    // variable firstName
    let firstName = txtFirstName.value;
    // Get the value of the last name input and store it in the 
    // variable lastName
    let lastName = txtLastName.value;

    // Set the innerHTML of the spanFullName to display the concatenated 
    // first name and last name
    spanFullName.innerHTML = `${firstName} ${lastName}`;
}

// Add an event listener to the txtLastName input element that triggers 
// the updateFullName function when a key is released
txtLastName.addEventListener('keyup', updateFullName);

// Add an event listener to the txtFirstName input element that triggers 
// the updateFullName function when a key is released
txtFirstName.addEventListener('keyup', updateFullName);
