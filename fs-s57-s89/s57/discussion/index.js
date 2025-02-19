/*
This code sets up event listeners for the input element with the 
id 'txt-first-name'. When a key is pressed and released in this 
input field, the first event listener updates the text content of 
the span element with the id 'span-full-name' to match the current 
value of the input. The second event listener logs the target 
element (the input itself) and its value to the console each time 
a key is released.
*/

// Select the input element with the id 'txt-first-name' and store 
// it in the variable txtFirstName
const txtFirstName = document.querySelector('#txt-first-name');

// Select the span element with the id 'span-full-name' and store 
// it in the variable spanFullName
const spanFullName = document.querySelector('#span-full-name');

// Add an event listener to the txtFirstName input element that 
// triggers when a key is released
txtFirstName.addEventListener('keyup', (event) => {
    // Set the innerHTML of the spanFullName to the current 
    // value of the txtFirstName input
    spanFullName.innerHTML = txtFirstName.value;
})

// Add another event listener to the txtFirstName input element 
// that triggers when a key is released
txtFirstName.addEventListener('keyup', (event) => {
    // Log the target element of the event (the txtFirstName 
    // input element) to the console
    console.log(event.target);
    // Log the value of the txtFirstName input element to the console
    console.log(event.target.value);
})
