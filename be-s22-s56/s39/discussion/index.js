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

// [Section] Routes
// Express has methods corresponding to each HTTP method
// This route expects to receive a GET request at the base URI "/"
// The full base URI for our local application for this route will be at "http://localhost:3000"
// This route will return a simple message back to the client
/*
app.get("/", (req, res) => {

    // Once the route is accessed it will in send a string response containing "Hello World"
    // Compared to the previous session, res.end uses the node JS module's method
    // res.send uses the express JS module's method instead to send a response back to the client
    res.send("Hello World");

});
*/

// This route expects to receive a GET request at the URI "/hello"
/*
app.get("/hello", (req, res) => {
    res.send("Hello from the /hello endpoint!");
});
*/

// This route expects to receive a POST request at the URI "/hello"
app.post("/hello", (req, res) => {
    // req.body contains the contents/data of the request body
    // All the properties defined in our Postman request will be accessible here as properties with the same names
    res.send(`Hello there ${req.body.firstName} ${req.body.lastName}!`);
});

// An array that will store user objects when the "/signup" route is accessed
// This will serve as our mock database
let users = [];

// This route expects to receive a POST request at the URI "/signup"
// This will create a user object in the "users" variable that mirrors a real world registration process
app.post("/signup", (req, res) => {

    console.log(req.body);

    // If contents of the "request body" with the property "username" and "password" is not empty
    if(!req.body.hasOwnProperty("username") && !req.body.hasOwnProperty("password")) {
           return res.send("Request body is missing username or password!");
    }
    
    if(req.body.username !== '' && req.body.password !== ''){

        // This will store the user object sent via Postman to the users array created above
        users.push(req.body);

        // This will send a response back to the client/Postman after the request has been processed
        return res.send(`User ${req.body.username} successfully registered!`);

    // If the username and password are not complete an error message will be sent back to the client/Postman
    } 
    else {

        return res.send("Please input BOTH username and password.");

    }

})

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


// Tells our server to listen to the port
// If the port is accessed, we can run the server
// Returns a message to confirm that the server is running in the terminal
// Listen to the port, meaning, if the port is accessed, we run the server

// An if statement is added here to ensure that the server starts only when this file is executed directly.
// This prevents the server from starting when the module is imported by other files, allowing for testing and reusability.
if(require.main === module){
    app.listen(port, () => console.log(`Server running at port ${port}`));
}

// Export app for checking
module.exports = { app };

