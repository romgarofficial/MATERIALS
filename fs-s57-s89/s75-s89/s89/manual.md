# Session 89 - Mock Tech Interview (MTI)

## Resources

### References

    
### Tools/Technologies Version

## Live Mock Technical Interview

## Step 1
-  Check slides for discussion
  - Discuss Motivation for MTI
  - Discuss Roles and Participants in MTI
  - Discuss Format for Live Interview
    1. Discuss the **Technical Interview Timeline**
    2. Discuss and Explain Roleplay Roles
      - Instructor:
        - Technical Interviewer and Technical Lead from LVM Company
          - Explain that you will be **Strict** and **Stern** but **Approachable**.
          - No need to prove own skills
              e.g. Avoid having to assert own knowledge over the applicant
              “Instead of this, use this”
      - Bootcamper:
        - Junior Developer Applicant for LVM
    3. Explain Mechanics for Students
      - Open Camera
      - Use of Codepen with Screen Sharing
        - Demonstrate briefly use of Codepen and its console.
    4. Upon Entry in Live Interview, Roleplay to begin.

## Step 2
- Distribute Google Form to identify participants for Live Mock Technical Interview
## Step 3
- After quiz, choose 12 participants for Live MTI based on their MTI quiz results
    - Instructor's Note:
        - There will be 3 INT TMs spending time for MTI (use breakout room)
            - 4 participants / INT TM
        - Remaining bootcampers will watch the live MTI
            - Sample: (30 bootcampers)
                - Breakout room 1: Main INT + 1 participant + 6 watchers
                - Breakout room 2: INT 2 + 1 participant + 6 watchers
                - Breakout room 3: INT 3 + 1 participant + 6 watchers
                - Main Google Meet: Waiting area for 9 live MTI participants

  **Instructor's Note**:
    - If not enough bootcampers to participate, then INT TM is expected to handle on a case to case basis

### Technical Interview Timeline

- For the live mock technical interview, follow the guidelines below:

| Time      | Activity |
| ----------- | ----------- |
| 6mins      | Discussion of format (open camera, codepen)       |
| 3mins      | Develop a simple function       |
| 3mins   | Evaluation        |
| 10mins      | Develop a difficult function (pass or fail)       |
|    | If Simple Function Failed - Explain a given code snippet        |
|      | If Simple Function Passed - Develop another function problem      |
| 5mins   | Feedback        |
| 3mins   | Wrap-up        |

### Technical Interview Breakdown

- Mock Technical Interview Duration per Bootcamper: 30 mins maximum.

**- 6 Mins: Format Discussion**

  - Discuss Format for Live Interview with Roleplay
    1. Introduction Dialogue:
      - Good Day, I am "instructorName". I will be your technical interviewer and the technical lead for the LVN Company.
      - "Just to confirm, You are studentName?" 
          "Are you aware of the role you are applying for?"
            - If no, "This is a job for a junior web developer..?
            - "You will be interviewed for the Junior Web Developer position"
          - This interview will have the following parts:
            - Discuss the **Technical Interview Timeline**
      - To Start, Open your camera and Codepen.

**- 3 - 5 Mins: Format Discussion**

- Discuss Format for Simple Function

  - The first task is to develop a simple function. (**Note Which Function Bootcamper had**)

      - List of simple functions (Choose 1 per participant)
      - Solvable under 3 mins. 
        - Create a simple function which can take 2 arguments and is able to:
          - Add two numbers
          - Subtract two numbers
          - Divide two numbers
          - Multiple two numbers
          - Concatenate two strings with a space in-between

**- 3 Mins: Evaluation**  

- Discuss and Evaluate the Simple Function.

  - Allow Bootcamper to demonstrate if function is working.
    - Further Evaluation will be given as feedback.
  - If Simple Function failed

**- 10mins Develop a difficult function (pass or fail)**

- If Simple Function Failed - Explain a given code snippet
- If Simple Function Passed - Develop another function problem


- **If simple function failed (Choose 1 per participant. Note which Question Participant Took)**

    - Ask them to explain a snippet instead, line per line, in their own words
        - Use the ones below
        - Check the [solution here](./solution.js)
```js
// Question 1: 
// Instructor: Copy the code below and give it to the bootcamper. 
// Bootcamper: Copy the code in Codepen and explain the snippet line per line
function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  const reversed = reverseString(str);
  return str === reversed;
}

// Question 2: 
// Instructor: Copy the code below and give it to the bootcamper. 
// Bootcamper: Copy the code in Codepen and explain the snippet line per line
function countWords(str) {
  return str.split(/\s+/).filter(word => word !== '').length;
}

// Question 3: 
// Instructor: Copy the code below and give it to the bootcamper. 
// Bootcamper: Copy the code in Codepen and explain the snippet line per line
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// Question 4: 
// Instructor: Copy the code below and give it to the bootcamper. 
// Bootcamper: Copy the code in Codepen and explain the snippet line per line
function isValidParentheses(str) {
  const stack = [];
  const brackets = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let char of str) {
    if (brackets[char]) {
      const top = stack.pop();
      if (top !== brackets[char]) return false;
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}

```
**- If simple function passed (Choose 1 per participant. Note which Question Participant Took)**

- Check the [solution here](./solution.js)

    - List of difficult functions:
        - Fibonacci Sequence:
            - Write a JavaScript function to generate the first 'n' numbers in the Fibonacci sequence.
        - Reverse a String:
            - Create a JavaScript function that reverses a given string without using the built-in reverse method.
        - Palindrome Checker:
            - Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backward). Ignore spaces, punctuation, and capitalization.
        - Factorial Calculator:
            - Implement a JavaScript function that calculates the factorial of a given number 'n.'
        - Anagram Detector:
            - Create a JavaScript function that determines if two given strings are anagrams of each other.
        - Array Intersection:
            - Write a JavaScript function that takes two arrays as input and returns an array containing their intersection (elements that are common to both arrays).
        - Counting Words in a String:
            - Create a JavaScript function that counts the number of words in a given string. Consider words as groups of characters separated by spaces.
        - Sum of Primes:
            - Write a JavaScript function to find and return the sum of all prime numbers within a given range (e.g., from 1 to 'n').
        - Find the Missing Number:
            - Create a JavaScript function that finds the missing number in an array of consecutive integers. The array is not necessarily sorted.
        - Common Elements in Arrays:
            - Write a JavaScript function that takes two arrays and returns an array of common elements found in both arrays.
        - FizzBuzz: 
            - Implement the classic "FizzBuzz" problem in JavaScript. Write a function that prints numbers from 1 to 'n' but replaces multiples of 3 with "Fizz," multiples of 5 with "Buzz," and multiples of both with "FizzBuzz."
        - Valid Parentheses:
            - Write a JavaScript function to determine whether a given string containing only parentheses ('(', ')', '{', '}', '[', ']') is valid. The string is valid if all opened parentheses are closed in the correct order.
        - Maximum Element in an Array:
            - You are given an array of numbers. Write a JavaScript function to find the maximum element in the array without using any built-in functions (e.g., Math.max(), Array.prototype.reduce(), etc.).

    - Allow Bootcamper to demonstrate function if finished.

- **5mins - Feedback**

    - Give Feedback in Function Coding
      - Good Practices:
        - Function and Variable Naming.
        - Use of Array Methods.

- **3mins - Wrap Up**
 - Conclusion
    - Thank Bootcamper for allowing interview and tell them that we will be sending them an email for their feedback.
    - Signal End of Interview
    - Once Finished with Interview, Return to Main Meet.  

### Open Discussion

- After all interviews are finished, return to main meet:

  - Discuss the following talking points in improving in Live Interviews.
    - Discuss with interviewees:
      - Do they feel more confident after seeing the MTI?
        - If not, that’s okay, simply practicing more is needed
        - If yes, that’s good, then ask why
    - Keep practicing, under time constraints when solving problems
        - Demonstrate use of Leet Code and similar platforms for practice.
        - Encourage to practice with ChatGPT using the prompt.
        - “Give me a problem to solve usually given in entry-level software developer tech interviews, written in Javascript”.
    - Discuss that tech interviewers are more or less the same, expecting them to code.
        - Actual interviewers may even be more stricter and harder
