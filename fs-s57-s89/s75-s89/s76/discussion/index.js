// Problem #1 : Create a function that filters out odd numbers, keeps only even numbers, and calculates the sum of the remaining even numbers.

function sumOfEvenNumbers(numbers) {
    if (!Array.isArray(numbers) || !numbers.every(Number.isInteger)) {
        console.log("Invalid input: Please provide an array of integers.");
        return undefined;
    }

    let sum = 0;
    numbers.forEach(number => {
        if (number % 2 === 0) sum += number; // Directly add even numbers
    });
    return sum;
}

// Problem #2 : Given an array of student scores, categorize each score as 'Pass' or 'Fail' based on a passing threshold. Then, check if all students have passed.
function checkAllPassedWithValidation(scores, passingThreshold) {
    // Input Validation
    if (!Array.isArray(scores) || !scores.every(score => typeof score === 'number')) {
        console.log("Invalid input: Scores must be an array of numbers.");
        return undefined;
    }

    // Categorize scores as 'Pass' or 'Fail'
    const passOrFail = scores.map(score => score >= passingThreshold ? 'Pass' : 'Fail');
    // Check if all categorized statuses are 'Pass'
    const allPassed = passOrFail.every(status => status === 'Pass');
    return allPassed;
}


