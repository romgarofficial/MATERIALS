// Fibonacci Sequence Generator
function generateFibonacci(n) {
    let fib = [0, 1]; // Initialize array with the first two Fibonacci numbers
    for (let i = 2; i < n; i++) { // Start loop from 2 as the first two numbers are predefined
      fib[i] = fib[i - 1] + fib[i - 2]; // Each number is the sum of the two preceding ones
    }
    return fib.slice(0, n); // Return the first 'n' Fibonacci numbers
  }
  
  // String Reverser
  function reverseString(str) {
    let reversed = ''; // Initialize an empty string for the reversed version
    for (let i = str.length - 1; i >= 0; i--) { // Iterate backwards through the original string
      reversed += str[i]; // Append each character to the reversed string
    }
    return reversed; // Return the reversed string
  }
  
  // Palindrome Checker
  function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, ''); // Normalize the string: lowercase and remove non-alphanumeric chars
    const reversed = reverseString(str); // Reuse reverseString to get the reversed version of the normalized string
    return str === reversed; // Check if the original and reversed strings are the same
  }
  
  // Factorial Calculator
  function calculateFactorial(n) {
    if (n === 0) return 1; // Base case: 0! is 1
    let factorial = 1; // Initialize factorial result
    for (let i = 1; i <= n; i++) { // Loop from 1 to 'n'
      factorial *= i; // Multiply factorial by each number up to 'n'
    }
    return factorial; // Return the factorial of 'n'
  }
  
  // Anagram Detector
  function areAnagrams(str1, str2) {
    // Normalize and sort both strings
    str1 = str1.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
    str2 = str2.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
    return str1 === str2; // Compare the sorted strings
  }
  
  // Array Intersection Finder
  function findIntersection(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item)); // Return elements common to both arrays
  }
  
  // Word Counter
  function countWords(str) {
    return str.split(/\s+/).filter(word => word !== '').length; // Split by whitespace, filter out empty strings, count words
  }
  
  // Sum of Primes Calculator
  function sumOfPrimes(n) {
    function isPrime(num) { // Helper function to check if a number is prime
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return num > 1;
    }
    let sum = 0; // Initialize sum
    for (let i = 2; i <= n; i++) { // Loop from 2 to 'n'
      if (isPrime(i)) sum += i; // Add prime numbers to sum
    }
    return sum; // Return the sum of primes up to 'n'
  }
  
  // Missing Number Finder
  function findMissingNumber(arr) {
    const n = arr.length + 1; // Calculate the length 'n' the array should have
    const expectedSum = (n * (n + 1)) / 2; // Calculate the expected sum of numbers from 1 to 'n'
    const actualSum = arr.reduce((acc, num) => acc + num, 0); // Calculate the actual sum of the array
    return expectedSum - actualSum; // The difference is the missing number
  }
  
  // Common Elements Finder
  function findCommonElements(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item)); // Return elements common to both arrays
  }
  
  // FizzBuzz Implementer
  function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) { // Loop from 1 to 'n'
      if (i % 3 === 0 && i % 5 === 0) { // For multiples of both 3 and 5, print "FizzBuzz"
        console.log("FizzBuzz");
      } else if (i % 3 === 0) { // For multiples of 3, print "Fizz"
        console.log("Fizz");
      } else if (i % 5 === 0) { // For multiples of 5, print "Buzz"
        console.log("Buzz");
      } else {
        console.log(i); // For all other numbers, print the number itself
      }
    }
  }
  
  // Valid Parentheses Checker
  function isValidParentheses(str) {
    const stack = []; // Use a stack to track opening parentheses
    const brackets = { ')': '(', '}': '{', ']': '[' }; // Map closing to opening brackets
    for (let char of str) { // Iterate through each character of the string
      if (brackets[char]) { // If the character is a closing bracket
        if (stack.pop() !== brackets[char]) return false; // Pop from stack and check if it matches the corresponding opening bracket
      } else {
        stack.push(char); // If it's an opening bracket, push to stack
      }
    }
    return stack.length === 0; // If stack is empty, all parentheses were valid
  }
  
  // Maximum Element Finder
  function findMaximum(arr) {
    let max = arr[0]; // Assume the first element is the maximum
    for (let i = 1; i < arr.length; i++) { // Iterate through the array starting from the second element
      if (arr[i] > max) max = arr[i]; // If current element is greater than max, update max
    }
    return max; // Return the maximum element
  }
  