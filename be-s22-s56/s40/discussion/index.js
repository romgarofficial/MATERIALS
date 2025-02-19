const express = require("express");
// Mongoose is a package that allows creation of Schemas to model our data structures
// Also has access to a number of methods for manipulating our database
const mongoose = require("mongoose");

const app = express();
const port = 4000;

// [Section] MongoDB connection

// Connect to the database by passing in your connection string, remember to replace the password and database names with actual values
// Due to updates in Mongo DB drivers that allow connection to it, the default connection string is being flagged as an error
// By default a warning will be displayed in the terminal when the application is run, but this will not prevent Mongoose from being used in the application
// { newUrlParser : true } allows us to avoid any current and future errors while connecting to Mongo DB

// Syntax
	// mongoose.connect("<MongoDB connection string>", { useNewUrlParser : true });

// Connecting to MongoDB Atlas
// INT note: replace with your own connection string.
mongoose.connect("mongodb+srv://admin:1234@cluster0.zlyew.mongodb.net/taskDB?retryWrites=true&w=majority"
);


// Set notifications for connection success or failure
// Connection to the database
// Allows to handle errors when the initial connection is establised
// Works with the on and once Mongoose methods
let db = mongoose.connection; 
// If a connection error occurred, output in the console
// console.error.bind(console) allows us to print errors in the browser console and in the terminal
// "connection error" is the message that will display if an error is encountered
db.on("error", console.error.bind(console, "connection error"));

// If the connection is successful, output in the console
mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas.'));

// [Section] Mongoose Schemas

// Schemas determine the structure of the documents to be written in the database
// Schemas act as blueprints to our data
// Use the Schema() constructor of the Mongoose module to create a new Schema object
// The "new" keyword creates a new Schema
const taskSchema = new mongoose.Schema({ 
	// Define the fields with the corresponding data type
	// For a task, it needs a "task name" and "task status"
	// There is a field called "name" and its data type is "String"
	name : String,
	// There is a field called "status" that is a "String" and the default value is "pending"
	status : { 
		type : String,
		// Default values are the predefined values for a field if we don't put any value
		default : "pending"
	}
})

// [Section] Models
// Uses schemas and are used to create/instantiate objects that correspond to the schema
// Models use Schemas and they act as the middleman from the server (JS code) to our database
// Server > Schema (blueprint) > Database > Collection

// The variable/object "Task"can now used to run commands for interacting with our database
// "Task" is capitalized following the MVC approach for naming conventions
// Models must be in singular form and capitalized
// The first parameter of the Mongoose model method indicates the collection in where to store the data
// The second parameter is used to specify the Schema/blueprint of the documents that will be stored in the MongoDB collection
// Using Mongoose, the package was programmed well enough that it automatically converts the singular form of the model name into a plural form when creating a collection in postman
const Task = mongoose.model("Task", taskSchema); 

// [Section] Creation of todo list routes
// Setup for allowing the server to handle data from requests
// Allows your app to read json data
app.use(express.json());
// Allows your app to read data from forms
app.use(express.urlencoded({extended:true})); 

// Creating a new task
// Business Logic
/*
1. Add a functionality to check if there are duplicate tasks
	- If the task already exists in the database, we return an error
	- If the task doesn't exist in the database, we add it in the database
2. The task data will be coming from the request's body
3. Create a new Task object with a "name" field/property
4. The "status" property does not need to be provided because our schema defaults it to "pending" upon creation of an object
*/

app.post("/tasks", (req, res)=> {
	
	// Check if there are duplicate tasks
	// "findOne" is a Mongoose method that acts similar to "find" of MongoDB
	// findOne() returns the first document that matches the search criteria as a single object.
	// findOne() can send the possible result or error in another method called then() for further processing.
	// .then() is chained to another method that is able to return a value or an error.
	// .then() waits for the previous method to complete its process. It will only run once the previous method is able to return a value or error.
	// .then() method can then process the returned result or error in a callback method inside it.
	// the callback method in the then() will be able to receive the result or error returned by the previous method it is attached to.
	// the .findOne() method returns the result first and the error second as parameters.
	// Call back functions in mongoose methods are programmed this way to store the returned results in the first parameter and any errors in the second parameter
	// If there are no matches, the value of result is null
	// "err" is a shorthand naming convention for errors
	Task.findOne({name : req.body.name}).then((result, err) => {
		// If a document was found and the document's name matches the information sent via the client/Postman
		if(result != null && result.name == req.body.name){
			// Return a message to the client/Postman
			return res.send("Duplicate task found");

		// If no document was found
		} else {

			// Create a new task and save it to the database
			let newTask = new Task({
				name : req.body.name
			});

			// The "save" method will store the information to the database
			// Since the "newTask" was created/instantiated from the Mongoose Schema it will gain access to this method to save to the database
			// The "save()" method can send the result or error in another JS method called then()
			// the .save() method returns the result first and the error second as parameters.
			newTask.save().then((savedTask, saveErr) => {
				// If there are errors in saving
				if(saveErr){

					// Will print any errors found in the console
					// saveErr is an error object that will contain details about the error
					// Errors normally come as an object data type
					return console.error(saveErr);

				// No error found while creating the document
				} else {

					// Return a status code of 201 for created
					// Sends a message "New task created" on successful creation
					return res.status(201).send("New task created");

				}
			})
		}

	})
})
/* 
================
Activity
================ 
*/

// Getting all the tasks

// Business Logic
/*
1. Retrieve all the documents
2. If an error is encountered, print the error
3. If no errors are found, send a success status back to the client/Postman and return an array of documents
*/

app.get("/tasks", (req, res) => {

	// "find" is a Mongoose method that is similar to Mongodb "find", and an empty "{}" means it returns all the documents and stores them in the "result" parameter of the callback function
	Task.find({}).then((result, err) => {

		// If an error occurred
		if (err) {

			// Will print any errors found in the console
			return console.log(err);

		// If no errors are found
		} else {

			// Status "200" means that everything is "OK" in terms of processing
			// The "json" method allows to send a JSON format for the response
			// The returned response is purposefully returned as an object with the "data" property to mirror real world complex data structures
			return res.send(result)

		}

	})
})

//Get single task
app.post('/search-task',(req,res)=>{
	Task.findOne({name: req.body.name}).then((result,err)=>{

		if(err){
			// Will print any errors found in the console
			return console.log(err);
		} else {
			return res.send(result)
		}

	})
})

//User Schema/Model
const userSchema = new mongoose.Schema({
    firstName: String,
	lastName: String,
	email: String,
    password : String
})
const User = mongoose.model("User", userSchema);

// Registering a user
// Business Logic
/*
1. Add a functionality to check if there are duplicate tasks
	- If the user already exists in the database, we return an error
	- If the user doesn't exist in the database, we add it in the database
2. The user data will be coming from the request's body
3. Create a new User object with a "username" and "password" fields/properties
*/

// Route for creating a user
app.post("/register", (req, res)=> {

	// Finds for a document with the matching username provided in the client/Postman
	User.findOne({ email : req.body.email }).then((result, err) => {
		console.log(result)
		// Check for duplicates
		if(result != null && result.email == req.body.email){

			return res.send("Duplicate email found");

		// No duplicates found
		} else {

			// If the username and password are both not blank
			if(req.body.firstName !== '' && req.body.lastName !== '' && req.body.email !== '' && req.body.password !== ''){

				// Create/instantiate a "newUser" from the "User" model
                let newUser = new User({
					firstName: req.body.firstName,
					lastName: req.body.lastName,
					email: req.body.email,
                    password : req.body.password
                });
    
    			// Create a document in the database
                newUser.save().then((savedUser, saveErr) => {

                    // If an error occurred
                    if(saveErr){

                    	// Return an error in the client/Postman
                        return console.error(saveErr);

                    // If no errors are found
                    } else {

                    	// Send a response back to the client/Postman of "created"
                        return res.send(savedUser);

                    }

                })

            // If at least one of the fields are left blank
            } else {

            	/// Send a response back to the client/Postman of "created"
                return res.send("All fields must be provided");
            }			
		}
	})
})

// Route for logging in a user
app.post("/login", (req, res)=> {

	User.findOne({ email : req.body.email }).then((result, err) => {

		// Check if email exists in the database.
		if(result != null && result.email == req.body.email){

			//if it is check password from db and req.body match
			if(result.password === req.body.password){
				return res.send("Thank you for logging in!")
			} else {
				//else, send a message to the client.
				return res.send("Wrong Password")
			}

		// If email does not exist in the database
		} else {
			return res.send("Email does not exist");			
		}
	})

})

// Listen to the port, meaning, if the port is accessed, we run the server

//An if statement is added here to be able to export the following app/server for checking.
if(require.main === module){
	app.listen(port, () => console.log(`Server running at port ${port}`));
}

//Export both app and mongoose for checking
module.exports = {app,mongoose};
 
