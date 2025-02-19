// Problem #1: Create a program that determines the temperature of water:
// Accept a single argument temperature, which represents the temperature of the water in degrees Celsius.
// Validate that temperature is a number. If temperature is not a number, return undefined.
// Determine and return the state of water ("solid", "liquid", or "gas") at the given temperature. Use the following information:
// Water is solid (ice) at temperatures below 0°C.
// Water is liquid between 0°C and 100°C, inclusive.
// Water is gas (steam) at temperatures above 100°C.

function determineWaterState(temperature) {
    // Validation: Check if temperature is a number
    if (typeof temperature !== 'number') {
        return undefined;
    }

    // Determine the state of water based on the temperature
    if (temperature < 0) {
        return "solid"; // Water is solid below 0°C
    } else if (temperature <= 100) {
        return "liquid"; // Water is liquid between 0°C and 100°C
    } else {
        return "gas"; // Water is gas above 100°C
    }
}

// Problem #2 : Create a program that calculates the sum of all numbers up to a given number n. The function should:
// - Accept a single argument n, which is the number up to which the sum should be calculated.
// - Validate that n is a positive integer. If n is not a positive integer, return undefined.
// - Use a loop to calculate the sum of all numbers from 1 up to and including n.
// - Return the sum.

function sumUpToN(n) {
    // Validation: Check if n is a positive integer
    if (typeof n !== 'number' || n < 1 || n % 1 !== 0) {
        return undefined;
    }

    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}
