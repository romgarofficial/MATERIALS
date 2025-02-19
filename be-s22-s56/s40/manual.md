# Express.js - Data Persistence via Mongoose ODM
#### Discussion Topics List
- MongoDB db creation
- Package instalation
- Basic server creation
- Mongoose
- MongoDB connection
- Schema
- Model
- Route

#### Activity Topics List


## Resources

### References
- [npm init](https://docs.npmjs.com/cli/v7/commands/npm-init)
- [MongoDB Atlas](https://cloud.mongodb.com/)
- [Get Started With Atlas](https://docs.atlas.mongodb.com/getting-started/)
- [Express JS](https://expressjs.com/)
- [What Is Mongoose](https://mongoosejs.com/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)
- [What Are Drivers](https://www.digitalcitizen.life/what-are-drivers-why-do-you-need-them/)
- [Mongoose Deprecation Warnings](https://mongoosejs.com/docs/deprecations.html)
- [Mongoose Connections](https://mongoosejs.com/docs/connections.html)
- [MongoDB String URI Format](https://docs.mongodb.com/manual/reference/connection-string/)
- [console.error.bind](https://www.tjvantoll.com/2015/12/29/console-error-bind/)
- [Default MongoDB Port](https://docs.mongodb.com/manual/reference/default-mongodb-port/#:~:text=27017,setting%20in%20a%20configuration%20file.)
- [Mongoose Schemas](https://mongoosejs.com/docs/guide.html)
- [Mongoose Models](https://mongoosejs.com/docs/models.html)
- [Mongoose findOne Method](https://mongoosejs.com/docs/api.html#model_Model.findOne)
- [Mongoose save Method](https://mongoosejs.com/docs/models.html#constructing-documents)
- [Mongoose 7.x Dropped Callback Functions](https://mongoosejs.com/docs/migrating_to_7.html#dropped-callback-support)
- [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
    
### Tools/Technologies Version

- node - ^20.11.1
- npm - 10.2.4
- express - ^4.18.3
- mongoose - ^8.2.1
- postman - ^10.22.13

## Code Discussion

### 1. Folder and File Preparation
Inside the **s40 folder**, create a **discussion folder** and an **index.js** inside the discussion folder.
### 2. Code Along
1. Create MongoDB database
- This step may be skipped entirely as adding the database name in the connection string and creating documents will prompt MongoDB to create the database.
#### Browser > MongoDB
```js
Database Name: bXXX_to-do
```
2. Get the MongoDB connection string from MongoDB Atlas
- If the students have not successfully setup their Mongo DB Atlas accounts, you may use the documentation below to guide the students on how to set it up.
- The databases of the students should have been set up at this time due to previous sessions related to Mongo DB discussions.
#### Browser > MongoDB
```
mongodb+srv://admin:<password>@cluster0.7iowx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```
**Important Note**
- If the students have not successfully setup their Mongo DB Atlas accounts, you may use the documentation below to guide the students on how to set it up.
- The databases of the students should have been set up at this time due to previous sessions related to Mongo DB discussions.

3. Create a "package.json" file by initializing npm in the discussion folder

#### batchfolder > individual > s40 > discussion > terminal
```
npm init
```
**Important Note**
- npm stands for "node package manager" which is responsible for assisting us developers with managing dependencies within a project.
- Triggering this command will prompt the user for the different settings that will define the application.
- No changes will be added to the package.json file, just keep on pressing "enter" key on the keyboard to create the default package.json file.
- To prevent pressing the "enter" button upon creation of this file, the command "npm init -y" can be used to easily do this and skip the questionnaire.
- You may highlight the questions asked after inputting the command then showing the students the package.json file to find the same items asked for are available in it.


4. Install Express JS and Mongoose
#### batchfolder > individual > s40 > discussion > terminal
```
npm install express mongoose
```
**Important Note**
- After triggering the command, express and mongoose will now be listed under the "dependencies" property of the package.json file.
- This will create a "node_modules" folder that will contain all the necessary files downloaded for the package.
- **Create .gitignore** file like the previous session to prevent uploading the "node_modules" in the cloud repository.
- The "package.json" file is responsible for listing all packages and the versions used in creating the application.
- The version of the package installed is also indicated in the file which prevents applications from breaking if ever new updates are introduced to packages.
- If the students incorrectly install a different package, the command "npm uninstall <package_name>" may be used.
- A specific version of a package may also be installed by using the command "npm install@<version number>" (e.g. npm install@4.17.1).
- This is useful for instances where an older version of the package is preferred to be used or when a current version of a package has bugs that tend to break an application.

5. Setup a basic Express JS server
#### batchfolder > individual > s40 > discussion > index.js
```js
const express = require("express");

const app = express();
const port = 4000;

// [Section] Creation of todo list routes
// Setup for allowing the server to handle data from requests
// Allows your app to read json data
app.use(express.json());
// Allows your app to read data from forms
app.use(express.urlencoded({extended:true})); 

// Listen to the port, meaning, if the port is accessed, we run the server
//Important Note:
//if(require.main === module) is only added for checking activity. This can be removed when running the app on student side.

if(require.main === module){
    app.listen(port, () => console.log(`Server running at port ${port}`));
}

//Export both app and mongoose for only for checking
module.exports = {app,mongoose};
```
6. Import Mongoose Package
- Mongoose is a package that allows creation of Schemas to model our data structures
- Also has access to a number of methods for manipulating our database
```js
const express = require("express");

const mongoose = require("mongoose");

const app = express();
/*...*/
```

7. Connect to MongoDB

MongoDB Connection
- Connect to the database by passing in your connection string, remember to replace the password and database names with actual values
- Due to updates in Mongo DB drivers that allow connection to it, the default connection string is being flagged as an error
- By default a warning will be displayed in the terminal when the application is run, but this will not prevent Mongoose from being used in the application
- { newUrlParser : true } allows us to avoid any current and future errors while connecting to Mongo DB

- Syntax
    // mongoose.connect("<MongoDB Atlas connection string>", { useNewUrlParser : true });

#### batchfolder > individual > s40 > discussion > index.js

```js
// Connecting to MongoDB Atlas
mongoose.connect("mongodb+srv://admin:<password>@cluster0.7iowx.mongodb.net/bXX-to-do?retryWrites=true&w=majority"
);
// Connecting to MongoDB locally
// 27017 is the default port on where mongo instances are run in a device
// mongoose.connect("mongodb://localhost:27017/bXX-to-do"
// );
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
db.once("open", () => console.log("We're connected to the cloud database"));

app.use(express.json());

/*...*/
```
**Important Note**
- Don't forget to change the MongoDB Atlas connection string to your own credentials to be able to show students the output of the discussion.

8. Run the backend application to test if everything is working as intended
#### batchfolder > individual > s40 > discussion > index.js
```js
nodemon index.js
```
9. Create a Task schema
- Schemas determine the structure of the documents to be written in the database
- Schemas act as blueprints to our data
#### batchfolder > individual > s40 > discussion > index.js
```js
/*...*/
db.once("open", () => console.log("We're connected to the cloud database"));

// [Section] Mongoose Schemas
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

app.use(express.json());
/*...*/
```
**Important Note**
- Schemas are used as blueprints that define the data structure of the documents that will be stored in MongoDB
- It allows easier validation of data that helps us focus on the business logic of our code rather than the technical side of things

10. Create a Task model
// Schemas are used to create/instantiate objects that correspond to the schema
// Models use Schemas and they act as the middleman from the server (JS code) to our database
// Server > Schema (blueprint) > Database > Collection
#### batchfolder > individual > s40 > discussion > index.js
```js
// The variable/object "Task" and "User" can now used to run commands for interacting with our database
// "Task" and "User" are both capitalized following the MVC approach for naming conventions
// Models must be in singular form and capitalized
// The first parameter of the Mongoose model method indicates the collection in where to store the data
// The second parameter is used to specify the Schema/blueprint of the documents that will be stored in the MongoDB collection
// Using Mongoose, the package was programmed well enough that it automatically converts the singular form of the model name into a plural form when creating a collection in postman
const Task = mongoose.model("Task", taskSchema); 

app.use(express.json());
```
**Important Note**
- The Models are what allows us to gain access to methods that will allow us perform CRUD functions on our database with ease
- So long as the singular form of the model name is in the English language, Mongoose will be able to automatically create a collection name in mongo DB of it's plural form

11. Create a POST route to create a new task
#### batchfolder > individual > s40 > discussion > index.js
```js
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
    // findOne() and other mongoose query methods fetches data from another server. In our mongoose's case, our mongodb atlas database.
    // .then() is chained to another method that usually fetches data from another server.
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
                    
                    // Send a message "New task created" on successful creation
                    return res.send("New task created");

                }
            })
        }

    })
})

if(require.main === module){
    app.listen(port, () => console.log(`Server running at port ${port}`));
}

module.exports = app;
```
**Important Note**
- Updated code to comply to Mongoose 7.x changes which disallows callback methods in findOne(),find(), etc.

12. Process a POST request at the "/tasks" route using postman to get create a task.
#### Postman
```
url: http://localhost:4000/tasks
method: POST
body: raw + JSON
    {
        "name": "Eat"
    }
```
13. Create a GET request to retrieve all the tasks.

```js
/*...*/
app.post("/tasks", (req, res)=> {
    /*...*/
})

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
            // send the result to the client.
            return res.send(result)

        }

    })
})


if(require.main === module){
    app.listen(port, () => console.log(`Server running at port ${port}`));
}

module.exports = app;
```


## Activity

### Activity References

- [Express JS](https://expressjs.com/)
- [What Is Mongoose](https://mongoosejs.com/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)
- [What Are Drivers](https://www.digitalcitizen.life/what-are-drivers-why-do-you-need-them/)
- [Mongoose Deprecation Warnings](https://mongoosejs.com/docs/deprecations.html)
- [Mongoose Connections](https://mongoosejs.com/docs/connections.html)
- [MongoDB String URI Format](https://docs.mongodb.com/manual/reference/connection-string/)
- [console.error.bind](https://www.tjvantoll.com/2015/12/29/console-error-bind/)
- [Default MongoDB Port](https://docs.mongodb.com/manual/reference/default-mongodb-port/#:~:text=27017,setting%20in%20a%20configuration%20file.)
- [Mongoose Schemas](https://mongoosejs.com/docs/guide.html)
- [Mongoose Models](https://mongoosejs.com/docs/models.html)
- [Mongoose findOne Method](https://mongoosejs.com/docs/api.html#model_Model.findOne)
- [Mongoose save Method](https://mongoosejs.com/docs/models.html#constructing-documents)
- [Mongoose 7.x Dropped Callback Functions](https://mongoosejs.com/docs/migrating_to_7.html#dropped-callback-support)
- [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

### Activity Instructions
- Type of Activity:
    - Coding
    - GW

#### Instructions
Member 1:
1. Update your local sessions folder with the git commit message: “Add discussion s40”
2. Create a get request to retrieve all the tasks
    - Use "/tasks" endpoint for this route
    - Retrieve all documents
    - if an error is encountered, print the error
    - if no errors are found, send a success status back to the client and return an array of documents

Member 2:

3. Create a POST route that accesses the "/search-task" route which accepts a task name and returns the appropriate task to the client.
    - Seach for an item in the database using the name from the request body
    - if there are errors in doing so, pring the errors
    - else, send the task found back to the client
4. Create a User schema/model
	- Create the following properties inside the schema
		- firstName(String)
        - lastName(String)
        - email(String)
        - password(String)
    - Use mongoose.model to create a model from the user schema and store it inside User variable.

Member 3:

5. Create a POST route that accesses the "/register" route to create a user.
	- Use the data in the request body to register a new user.
        - Properties must be the same as the User schema created by member 2
6. Add functionalities to the route to check if there are duplicate users:
	- The user data will be coming from the request's body
	- If the user already exists in the database, we return a message to the client:
		- "Duplicate username found"
	- Else, If the username doesn't exist in the database, add an else statement, then inside it:
		- Check if any of the request body fields are not empty.
			- If it is not empty
				- Create a new User object with the complete fields/properties that matches our schema and save it in our database.
					- If there errors in saving, return the error.
					- Else, send a message to the client:
						- "New user registered"
						- Add an 201 HTTP Status Code.
			- Else, send a message to the client with the following message:
				- "All fields must be provided"

Member 4:
7. Create a POST route that accesses the "/login" route to login a user.
	- Use the data in the request body to login a user
		- Properties from the request body should contain email and password
    - Add functionalities to the route to check if the email given exists in the database:
	- The user data will be coming from the request's body
	- If the email exists in the database: 
		- Add an if statement to check if the found user's password is the same as the password given from the request body.
			- If it is the same, send the following message to the client:
				- "Thank you for logging in"
			- Else, send the following message to the client:
				- "Wrong Password."
	- Else if the email does not exist, send a message to the client with the following message:
		- "Email does not exist"
Member 5:
8. Process a GET request at the "/tasks" route using postman to get all tasks.
	- Save the postman collection for the requests.
9. Process a POST request at the "/register" route using postman to register a user.
	- Save the postman collection for the requests.
10. Process a POST request at the "/login" route using postman to login a user.
	- Save the postman collection for the requests.
	
All Members:
11. Check out to your own git branch with git checkout -b <branchName>
12. Update your local sessions git repository and push to git with the commit message of Add activity code s40.
13. Add the sessions repo link in Boodle for s40.

#### Activity Solution:
**Solution**

```js
// Getting all the tasks
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

// user login
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
```
