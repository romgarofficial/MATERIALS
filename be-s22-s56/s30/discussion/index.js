    // Non-Mutator Methods
    /*
        - Non-Mutator methods are functions that do not modify or change an array after they're created
        - These methods do not manipulate the original array performing various tasks such as returning elements from an array and combining arrays and printing the output
    */

    let countries = ['US', 'PH', 'CAN', 'SG', 'TH', 'PH', 'FR', 'DE'];

    // indexOf()
    /*
        - Returns the index number of the first matching element found in an array
        - If no match was found, the result will be -1.
        - The search process will be done from first element proceeding to the last element
        - Syntax
            arrayName.indexOf(searchValue);
            arrayName.indexOf(searchValue, fromIndex);
    */
    let firstIndex = countries.indexOf('PH');
    console.log('Result of indexOf method: ' + firstIndex);

    let invalidCountry = countries.indexOf('BR');
    console.log('Result of indexOf method: ' + invalidCountry);

    // lastIndexOf()
    /*
        - Returns the index number of the last matching element found in an array
        - The search process will be done from last element proceeding to the first element
        - Syntax
            arrayName.lastIndexOf(searchValue);
            arrayName.lastIndexOf(searchValue, fromIndex);
    */
    // Getting the index number starting from the last element
    let lastIndex = countries.lastIndexOf('PH');
    console.log('Result of lastIndexOf method: ' + lastIndex);

    // Getting the index number starting from a specified index
    let lastIndexStart = countries.lastIndexOf('PH', 6);
    console.log('Result of lastIndexOf method: ' + lastIndexStart);

    // slice()
    /*
        - Portions/slices elements from an array AND returns a new array
        - Syntax
            arrayName.slice(startingIndex);
            arrayName.slice(startingIndex, endingIndex);
    */

    // Slicing off elements from a specified index to the last element
    let slicedArrayA = countries.slice(2);
    console.log('Result from slice method:');
    console.log(slicedArrayA);

    // Slicing off elements from a specified index to another index
    let slicedArrayB = countries.slice(2, 4);
    console.log('Result from slice method:');
    console.log(slicedArrayB);

    // Slicing off elements starting from the last element of an array
    let slicedArrayC = countries.slice(-3);
    console.log('Result from slice method:');
    console.log(slicedArrayC);

    // concat()
    /*
        - Combines two arrays and returns the combined result
        - Syntax
            arrayA.concat(arrayB);
            arrayA.concat(elementA);
    */
    let tasksArrayA = ['drink html', 'eat javascript'];
    let tasksArrayB = ['inhale css', 'breathe sass'];
    let tasksArrayC = ['get git', 'be node'];

    let tasks = tasksArrayA.concat(tasksArrayB);
    console.log('Result from concat method:');
    console.log(tasks);

    // Combining multiple arrays
    console.log('Result from concat method:');
    let allTasks = tasksArrayA.concat(tasksArrayB, tasksArrayC);
    console.log(allTasks);

    // Combining arrays with elements
    let combinedTasks = tasksArrayA.concat('smell express', 'throw react');
    console.log('Result from concat method:');
    console.log(combinedTasks);


    // Iteration Methods
    /*
        - Iteration methods are loops designed to perform repetitive tasks on arrays
        - Iteration methods loops over all items in an array.
        - Useful for manipulating array data resulting in complex tasks
        - Array iteration methods normally work with a function supplied as an argument
        - How these function works is by performing tasks that are pre-defined within an array's method.
    */

    // forEach()
    /*
        - Similar to a for loop that iterates on each array element.
        - For each item in the array, the anonymous function passed in the forEach() method will be run.
        - The anonymous function is able to receive the current item being iterated or loop over by assigning a parameter.
        - Variable names for arrays are normally written in the plural form of the data stored in an array
        - It's common practice to use the singular form of the array content for parameter names used in array loops
        - forEach() does not return anything.
        - Syntax
            arrayName.forEach(function(indivElement) {
                statement
            })
    */
    allTasks.forEach(function(task) {
        console.log(task);
    });

    // Using forEach with conditional statements
    let filteredTasks = [];

    // Looping through all Array Items
    /*
        - It's good practice to print the current element in the console when working with array iteration methods to have an idea of what information is being worked on for each iteration of the loop
        - Creating a separate variable to store results of array iteration methods are also good practice to avoid confusion by modifying the original array
        - Mastering loops and arrays allow us developers to perform a wide range of features that help in data management and analysis
    */
    allTasks.forEach(function(task) {

        // console.log(task)

        // If the element/string's length is greater than 10 characters
        if(task.length > 10) {

            // console.log(task)

            // Add the element to the filteredTasks array
            filteredTasks.push(task);

        }
    });

    console.log("Result of filtered tasks:");
    console.log(filteredTasks);

    // map() 
    /* 
        - Iterates on each element AND returns new array with different values depending on the result of the function's operation
        - This is useful for performing tasks where mutating/changing the elements are required
        - Unlike the forEach method, the map method requires the use of a "return" statement in order to create another array with the performed operation
        - Syntax
            let/const resultArray = arrayName.map(function(indivElement))
    */

    let numbers = [1, 2, 3, 4, 5];

    let numberMap = numbers.map(function(number) {
        return number * number;
    });

    console.log("Original Array:");
    console.log(numbers);//Original is unaffected by map()
    console.log("Result of map method:");
    console.log(numberMap);//A new array is returned by map() and stored in the variable.

    //map() vs forEach()

    let numberForEach = numbers.forEach(function(number){

        return number * number

    })

    console.log(numberForEach);//undefined. 

    //forEach(), loops over all items in the array as does map(), but forEach() does not return a new array.


    // every() 
    /*
        - Checks if all elements in an array meet the given condition
        - This is useful for validating data stored in arrays especially when dealing with large amounts of data
        - Returns a true value if all elements meet the condition and false if otherwise
        - Syntax
            let/const resultArray = arrayName.every(function(indivElement) {
                return expression/condition;
            })
    */
    let allValid = numbers.every(function(number) {
        return (number < 3);
    });
    console.log("Result of every method:");
    console.log(allValid);

    // some()
    /*
        - Checks if at least one element in the array meets the given condition
        - Returns a true value if at least one element meets the condition and false if otherwise
        - Syntax
            let/const resultArray = arrayName.some(function(indivElement) {
                return expression/condition;
            })
    */
    let someValid = numbers.some(function(number) {
        return (number < 2);
    });
    console.log("Result of some method:");
    console.log(someValid);

    // Combining the returned result from the every/some method may be used in other statements to perform consecutive results
    if (someValid) {
        console.log('Some numbers in the array are greater than 2');
    };

    // filter() 
    /*
        - Returns new array that contains elements which meets the given condition
        - Returns an empty array if no elements were found
        - Useful for filtering array elements with a given condition and shortens the syntax compared to using other array iteration methods
        - Mastery of loops can help us work effectively by reducing the amount of code we use
        - Several array iteration methods may be used to perform the same result
        - Syntax
            let/const resultArray = arrayName.filter(function(indivElement) {
                return expression/condition;
            })
    */
    let filterValid = numbers.filter(function(number) {
        return (number <  3);
    });
    console.log("Result of filter method:");
    console.log(filterValid);

    // No elements found
    let nothingFound = numbers.filter(function(number) {
        return (number = 0);
    })
    console.log("Result of filter method:");
    console.log(nothingFound);

    // Filtering using foreach
    let filteredNumbers = [];

    numbers.forEach(function(number){

        // console.log(number);

        if(number < 3) {
            filteredNumbers.push(number);
        }
    })
    console.log("Result of filter method:");
    console.log(filteredNumbers);

    let products = ['Mouse', 'Keyboard', 'Laptop', 'Monitor'];
    /*
    Important Note:
        - If additional examples would be provided on Iterator methods that are not included in the session, it's recommended to focus the discussion on forEach, map, filter and reduce methods which are common array iterators that we use.
        - Refer to "references" section of this file to find the documentations for JavaScript Array forEach Method, JavaScript Array map Method, JavaScript Array every Method, JavaScript Array some Method, JavaScript Array filter Method, JavaScript String includes Method and JavaScript Reduce Method.
    */
