# Express.js - Introduction
#### Discussion Topics List
- npm init
- npm install
- .gitignore / node_modules
- app.use()
- express.json()
- express.urlencoded()
- app.get()
- res.send()

#### Activity Topics List
##### Discussed
- npm init
- npm install
- .gitignore / node_modules
- app.use()
- express.json()
- express.urlencoded()
- app.get()
- res.send()

## Resources

### References

- [npm init documentation](https://docs.npmjs.com/cli/v7/commands/npm-init)
- [Express JS](https://expressjs.com/)
- [What Is A Middleware](https://www.redhat.com/en/topics/middleware/what-is-middleware)
- [Express JS json Method](http://expressjs.com/en/resources/middleware/body-parser.html#bodyparserjsonoptions)
- [Express JS urlencoded Method](http://expressjs.com/en/resources/middleware/body-parser.html#bodyparserurlencodedoptions)
    
### Tools/Technologies Version

- Express - 4.18.3

## Code Discussion

### 1. Folder and File Preparation
Inside the **s39 folder**, create a **discussion folder** and an **index.js** in the discussion folder.

### 2. Step 1
1. Create a "package.json" file by initializing npm in the discussion folder
#### batchfolder > individual > s39 > discussion > terminal
```js
npm init
```
**Important Note**
- npm stands for "node package manager" which is responsible for assisting us developers with managing dependencies within a project.
- Triggering this command will prompt the user for the different settings that will define the application.
- No changes will be added to the package.json file, just keep on pressing "enter" key on the keyboard to create the default package.json file.
- To prevent pressing the "enter" button upon creation of this file, the command "npm init -y" can be used to easily do this and skip the questionnaire.
- You may highlight the questions asked after inputting the command then showing the students the package.json file to find the same items asked for are available in it.

2. Install expressjs
#### batchfolder > individual > s39 > discussion > terminal
```js
npm install express
```
**Important Note**
- After triggering the command, express will now be listed under the "dependencies" property of the package.json file.
- The "package.json" file is responsible for listing all packages and the versions used in creating the application.
- The version of the package installed is also indicated in the file which prevents applications from breaking if ever new updates are introduced to packages.
- If the students incorrectly install a different package, the command "npm uninstall <package_name>" may be used.
- A specific version of a package may also be installed by using the command "npm install@<version number>" (e.g. npm install@4.17.1).
- This is useful for instances where an older version of the package is preferred to be used or when a current version of a package has bugs that tend to break an application.
- This will create a "node_modules" folder that will contain all the necessary files downloaded for the package.

3. Create a ".gitignore" file.
- The "node_modules" directory should be left on the local machine to keep our git commits lightweight.
#### 
#### batchfolder > individual > s39 > discussion > .gitignore
```
node_modules
```
Important Note:
- When pushing files in a git repository, normally the "node_modules" folder is added in the ".gitignore" file.
- This is because packages installed in a project will create thousands of files that will take a very long time to upload to a git repository.
- Upon successful cloning of a repository using the node package manager, triggering the command "npm install" will install all the missing dependencies with the specified versions in the package.json file to allow the application to work again as intended.
- If a newer version of the package would like to be installed instead, you may trigger the command "npm install <package_name>" to overwrite the current version installed in an application.

4. Create an "index.js" file that will serve as our app's entry point and setup a simple server.
#### batchfolder > individual > s39 > discussion > index.js
```js
// Use the "require" directive to load the express module/package
// A "module" is a software component or part of a program that contains one or more routines
// This is used to get the contents of the express package to be used by our application
// It also allows us access to methods and functions that will allow us to easily create a server
const express = require("express");

// Create an application using express
// This creates an express application and stores this in a constant called app
// In layman's terms, app is our server
const app = express(); 

// For our application server to run, we need a port to listen to
const port = 4000;

// Setup for allowing the server to handle data from requests
// Allows your app to read json data
// Methods used from express JS are middlewares
// Middleware is software that provides common services and capabilities to applications outside of what’s offered by the operating system
// API management is one of the common application of middlewares.
app.use(express.json());
// Allows your app to read data from forms
// By default, information received from the url can only be received as a string or an array
// By applying the option of "extended:true" this allows us to receive information in other data types such as an object which we will use throughout our application
app.use(express.urlencoded({extended:true}));

// Tells our server to listen to the port
// If the port is accessed, we can run the server
// Returns a message to confirm that the server is running in the terminal
app.listen(port, () => console.log(`Server running at port ${port}`));
```
**Important Note**
- Refer to "references" section of this file to find the documentations for What Is A Middleware, Express JS json Method and Express JS urlencoded Method.

5. Create a GET route
#### batchfolder > individual > s39 > discussion > index.js
```js
/*...*/
app.use(express.urlencoded({extended:true}));

// [Section] Routes
// Express has methods corresponding to each HTTP method
// This route expects to receive a GET request at the base URI "/"
// The full base URI for our local application for this route will be at "http://localhost:4000"
// This route will return a simple message back to the client
app.get("/", (req, res) => {

    // Once the route is accessed it will in send a string response containing "Hello World"
    // Compared to the previous session, res.end uses the node JS module's method
    // res.send uses the express JS module's method instead to send a response back to the client
    res.send("Hello World");

});

app.listen(port, () => console.log(`Server running at port ${port}`));
```
6. Process a GET request using postman.
#### Postman
```js
url: http://localhost:4000
method: GET
```
7. Create another GET route and update the app.listen code to allow import into other files.
#### batchfolder > individual > s39 > discussion > index.js
```js
app.get("/", (req, res) => {
    /*...*/
});

// This route expects to receive a GET request at the URI "/hello"
app.get("/hello", (req, res) => {
    res.send("Hello from the /hello endpoint!");
});

// An if statement is added here to ensure that the server starts only when this file is executed directly.
// This prevents the server from starting when the module is imported by other files, allowing for testing and reusability.
if(require.main === module){
    app.listen(port, () => console.log(`Server running at port ${port}`));
}

// Export app for checking
module.exports = { app };
```
8. Process a GET request using postman.
#### Postman
```js
url: http://localhost:4000/hello
method: GET
```
9. Create a POST route
#### batchfolder > individual > s39 > discussion > index.js
```js
/*...*/

app.get("/hello", (req, res) => {
    /*...*/
});

// This route expects to receive a POST request at the URI "/hello"
app.post("/hello", (req, res) => {
    // req.body contains the contents/data of the request body
    // All the properties defined in our Postman request will be accessible here as properties with the same names
    res.send(`Hello there ${req.body.firstName} ${req.body.lastName}!`);
});

// An if statement is added here to ensure that the server starts only when this file is executed directly.
// This prevents the server from starting when the module is imported by other files, allowing for testing and reusability.
if(require.main === module){
    app.listen(port, () => console.log(`Server running at port ${port}`));
}

// Export app for checking
module.exports = { app };
```
10. Process a POST request using postman.
#### Postman
```js
url: http://localhost:4000/hello
method: POST
body: raw + JSON
    {
        "firstName": "John",
        "lastName": "Doe"
    }
```
11. Create an array to use as our mock
#### batchfolder > individual > s39 > discussion > index.js
```js
/*...*/

// An array that will store user objects when the "/register" route is accessed
// This will serve as our mock database
let users = [];
/* ... */

// This route expects to receive a POST request at the URI "/hello"
app.post("/hello", (req, res) => {
    /*...*/
});

```
12. Create a POST route to register a user.
#### batchfolder > individual > s39 > discussion > index.js
```js
/*...*/
let users = [];

// This route expects to receive a POST request at the URI "/register"
// This will create a user object in the "users" variable that mirrors a real world registration process
app.post("/register", (req, res) => {

    console.log(req.body);

    // If contents of the "request body" with the property "username" and "password" is not empty
    if(req.body.username !== '' && req.body.password !== ''){

        // This will store the user object sent via Postman to the users array created above
        users.push(req.body);

        // This will send a response back to the client/Postman after the request has been processed
        res.send(`User ${req.body.username} successfully registered!`);

    // If the username and password are not complete an error message will be sent back to the client/Postman
    } else {

        res.send("Please input BOTH username and password.");

    }

})

// An if statement is added here to ensure that the server starts only when this file is executed directly.
// This prevents the server from starting when the module is imported by other files, allowing for testing and reusability.
if(require.main === module){
    app.listen(port, () => console.log(`Server running at port ${port}`));
}

// Export app for checking
module.exports = { app };
```
13. Process a POST request using postman.
#### Postman
```js
url: http://localhost:4000/register
method: POST
body: raw + JSON
    {
        "username": "johndoe",
        "password": "john1234"
    }
```
14. Create a delete route
#### batchfolder > individual > s39 > discussion > index.js
```js
/* ... */

app.delete("/delete-user",(req,res)=>{

    if(users.length > 0){
        users.pop();
        res.send(users);
    } else {
        res.send("Users collection is empty.");
    }

})

// An if statement is added here to ensure that the server starts only when this file is executed directly.
// This prevents the server from starting when the module is imported by other files, allowing for testing and reusability.
if(require.main === module){
    app.listen(port, () => console.log(`Server running at port ${port}`));
}

// Export app for checking
module.exports = { app };
```




## Activity
### Activity References

### Activity Instructions 1
- Type of Activity:
    - Quiz
#### Instructions
1. Answer the Google Form Quiz
https://docs.google.com/forms/d/e/1FAIpQLSeCZlJJilnsYx8i_IbxO4YNnWlyPQp3xHrWijkNJAO7WAqX8w/viewform

### Activity Instructions 2
- Type of Activity:
    - Coding

#### Instructions
1. Continue the discussion codes inside discussion/index.js
2. Create a PUT route to change the password of a specific user.
    - Create a route "/change-password" that allows a user to change the password of a user in the "users" array.
    - Initialize a "message" variable. 
    - Use a loop to iterate over the users array to find the element that has the same username with the Postman request body
    - Once found
        - the loop should change the password propoerty of the element found with the password from the Postman request body
        - change the value of the message varaiable into "User <username>'s password has been updated"
    - If not found, change the value of the message varaiable into "User does not exist"
    - Send the message back to the client
3. Process a PUT request using Postman
    - Use "/change-password" endpoint in the request
    - Use PUT method
    - Use raw + JSON in creating the request body
4. Create a delete route
    - Create a route "/delete-user" that allows a user to delete a user in the "users" array.
    - If the users array is not empty, delete the last element in the array 
        - Send the updated "users" array back to the client
    - If not, send a message "Users collection is empty
    - Once found
        - the loop should change the password propoerty of the element found with the password from the Postman request body
        - change the value of the message varaiable into "User <username>'s password has been updated"
    - If not found, change the value of the message varaiable into "User does not exist"
    - Send the message back to the client

#### Activity Solution:
**Solution**
```js
/*...*/
// Activity
// This route expects to receive a PUT request at the URI "/change-password"
// This will update the password of a user that matches the information provided in the client/Postman
app.put("/change-password", (req, res) => {

    // Creates a variable to store the message to be sent back to the client/Postman 
    let message;

    // Creates a for loop that will loop through the elements of the "users" array
    for(let i = 0; i < users.length; i++){

        // If the username provided in the client/Postman and the username of the current object in the loop is the same
        if (req.body.username == users[i].username) {

            // Changes the password of the user found by the loop into the password provided in the client/Postman
            users[i].password = req.body.password;

            // Changes the message to be sent back by the response
            message = `User ${req.body.username}'s password has been updated.`;

            // Breaks out of the loop once a user that matches the username provided in the client/Postman is found
            break;

        // If no user was found
        } else {

            // Changes the message to be sent back by the response
            message = "User does not exist.";

        }

    }

    // Sends a response back to the client/Postman once the password has been updated or if a user is not found
    res.send(message);

})

//Activity
// delete a user
app.delete("/delete-user",(req,res)=>{

    if(users.length > 0){
        users.pop();
        return res.send(users);
    } else {
        return res.send("Users collection is empty.");
    }

})
/*...*/
```
