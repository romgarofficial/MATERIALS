# JavaScript - Introduction to JSON
### Discussion Topics List
- JSON Objects
- JSON Arrays
- JSON.stringify()
- JSON.parse()

### Activity Topics List
#### Discussed
- JSON Objects
- JSON Arrays
- JSON.stringify()
- JSON.parse()

## Resources

### References

```
Developer's Note:
Provide a list of references used in the manual, including textbooks, online resources, and any other relevant materials.
```

Sample:
- [JSON object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [What Is Serialization](https://hazelcast.com/glossary/serialization/)
- [What Is A Byte](https://searchstorage.techtarget.com/definition/byte)
- [What Are HTTP Request Methods](https://rapidapi.com/blog/api-glossary/http-request-methods/#:~:text=An%20HTTP%20request%20is%20an,is%20assigned%20a%20specific%20purpose.)
- [What Is A Database](https://www.guru99.com/introduction-to-database-sql.html)
- [Node JS Documentation](https://nodejs.org/en/about/)
- [What is Node JS](https://effectussoftware.com/blog/node-js-a-framework/)
- [Express JS Documentation](https://expressjs.com/)
- [What is Parse](https://www.techopedia.com/definition/3853/parse#:~:text=To%20parse%20is%20to%20break,each%20part's%20function%20or%20form.&text=Parsing%20is%20used%20in%20all,transformed%20into%20executable%20machine%20code.)

    
### Tools/Technologies Version

## Code Discussion

### 1. Folder and File Preparation
#### batchfolder > individual > s33 > discussion > index.html
```html
<!DOCTYPE HTML>
<html>
    <head>
        <title>JavaScript ES6 Updates</title>
    </head>
    <body>
        <script src="./script.js"></script>
    </body>
</html>
```
#### batchfolder > individual > s33 > discussion > index.js
```js
console.log("Hello World!");
```

### 2. Step 1

#### JSON Objects
- JSON stands for JavaScript Object Notation
- JSON is also used in other programming languages hence the name JavaScript Object Notation
- Core JavaScript has a built in JSON object that contains methods for parsing JSON objects and converting strings into JavaScript objects
- JavaScript objects are not to be confused with JSON
- JSON is used for serializing different data types into bytes
- Serialization is the process of converting data into a series of bytes for easier transmission/transfer of information
- A byte is a unit of data that is eight binary digits (1 and 0) that is used to represent a character (letters, numbers or typographic symbols)
- Bytes are information that a computer processes to perform different tasks
- Uses double quotes for property names
- Syntax
    {
        "propertyA": "valueA",
        "propertyB": "valueB",
    }

#### batchfolder > individual > s33 > discussion > index.js
```js
// JSON Objects
{
    "city": "Quezon City",
    "province": "Metro Manila",
    "country": "Philippines"
}
```
Add more code to demonstrate and discuss JSON Arrays.

#### batchfolder > individual > s33 > discussion > index.js
```js
"cities": [
    { "city": "Quezon City", "province": "Metro Manila", "country": "Philippines" },
    { "city": "Manila City", "province": "Metro Manila", "country": "Philippines" },
    { "city": "Makati City", "province": "Metro Manila", "country": "Philippines" }
]
```
**Impotant Note**
Feel free to add more code to demonstrate and discuss JSON Objects and Arrays.

#### JSON Methods
- Stringified JSON is a JavaScript object converted into a string to be used in other functions of a JavaScript application
- They are commonly used in HTTP requests where information is required to be sent and received in a stringified JSON format
- Requests are an important part of programming where an application communicates with a backend application to perform different tasks such as getting/creating data in a database
- A frontend application is an application that is used to interact with users to perform different visual tasks and display information while backend applications are commonly used for all the business logic and data processing
- A database normally stores information/data that can be used in most applications
- Commonly stored data in databases are user information, transaction records and product information
- Node/Express JS are two of technologies that are used for creating backend applications which processes requests from frontend applications
- Node JS is a Java Runtime Environment (JRE)/software that is made to execute other software
- Express JS is a NodeJS framework that provides features for easily creating web and mobile applications
- An example of where JSON is also used is on package.json files which an express JS application uses to keep track of information regarding a project

#### batchfolder > individual > s33 > discussion > index.js
```js
let batchesArr = [{ batchName: 'Batch X' }, { batchName: 'Batch Y' }];

// The "stringify" method is used to convert JavaScript objects into a string
console.log('Result from stringify method:');
console.log(JSON.stringify(batchesArr));

let data = JSON.stringify({
    name: 'John',
    age: 31,
    address: {
        city: 'Manila',
        country: 'Philippines'
    }
});

console.log(data);
```
Show the students a sample of a package.json file.


Add more code to demonstrate and discuss Using Stringify Method With Variables.

#### Using Stringify Method With Variables

#### batchfolder > individual > s33 > discussion > index.js
```js
- When information is stored in a variable and is not hard coded into an object that is being stringified, we can supply the value with a variable
- The "property" name and "value" would have the same name which can be confusing for beginners
- This is done on purpose for code readability meaning when an information is stored in a variable and when the object created to be stringified is created, we supply the variable name instead of a hard coded value
- This is commonly used when the information to be stored and sent to a backend application will come from a frontend application
- Syntax
    JSON.stringify({
        propertyA: variableA,
        propertyB: variableB
    });
- Since we do not have a frontend application yet, we will use the prompt method in order to gather user data to be supplied to the user details
```
#### Converting Stringified JSON Into JavaScript Objects
- Objects are common data types used in applications because of the complex data structures that can be created out of them
- Information is commonly sent to applications in stringified JSON and then converted back into objects
- This happens both for sending information to a backend application and sending information back to a frontend application
#### batchfolder > individual > s33 > discussion > index.js
```js
let batchesJSON = `[{ "batchName": "Batch X" }, { "batchName": "Batch Y" }]`;

console.log('Result from parse method:');
console.log(JSON.parse(batchesJSON));

let stringifiedObject = `{ "name": "John", "age": "31", "address": { "city": "Manila", "country": "Philippines" } }`

console.log(JSON.parse(stringifiedObject));
```

## Activity

- [MTE For JavaScript Module]()

```
Developer's Note: 
    Waiting for MTE for Javascript Module to be released
```

### Activity References
```

```
- [Markdown Basics](https://www.markdownguide.org/basic-syntax)

### Activity Instructions
- Type of Activity:
    - MTE for JavaScript Module

#### Instructions
1. Answer the Mock Technical Exam for Javascript Module

#### Activity Solution:
**Solution**


```js

```