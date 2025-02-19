# Express.js - Modules, Parameterized Routes
#### Discussion Topics List
- Basic server setup + package installations
- Separation of concerns
    - Model
    - Routes
    - Controllers

#### Activity Topics List
- Basic server setup + package installations
- Separation of concerns
    - Model
    - Routes
    - Controllers

## Resources

### References

- [npm init](https://docs.npmjs.com/cli/v7/commands/npm-init)
- [Express JS](https://expressjs.com/)
- [What Is Mongoose](https://mongoosejs.com/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)
- [MVC Framework](https://www.tutorialspoint.com/mvc_framework/mvc_framework_introduction.htm)
- [Express JS Routing](https://expressjs.com/en/guide/routing.html)
- [Mongoose find Method](https://mongoosejs.com/docs/api.html#model_Model.find)
- [Mongoose save Method](https://mongoosejs.com/docs/api.html#document_Document-save)
- [Express JS Static and Dynamic Routes](https://dev.to/reiallenramos/create-an-express-api-static-and-dynamic-routes-33lb)
- [Mongoose findById](https://mongoosejs.com/docs/api.html#model_Model.findById)
    
### Tools/Technologies Version

- node - ^20.11.1
- npm - 10.2.4
- express - ^4.18.3
- mongoose - ^8.2.1
- postman - ^10.22.13

## Code Discussion

### 1. Folder and File Preparation

Inside the **s40 folder**, create a **discussion folder** and an **index.js** inside the discussion folder.

### 2.
1. Create a **package.json** inside discussion folder
#### batchfolder > individual > s41 > discussion > terminal

```
npm init -y
```
2. Install **express and mongoose** 
#### batchfolder > individual > s41 > discussion > terminal
```
npm install express mongoose
```
**Important Note**
- After triggering the command, express and mongoose will now be listed under the "dependencies" property of the package.json file.
- This will create a "node_modules" folder that will contain all the necessary files downloaded for the package.
- The "package.json" file is responsible for listing all packages and the versions used in creating the application.
- The version of the package installed is also indicated in the file which prevents applications from breaking if ever new updates are introduced to packages.
- If the students incorrectly install a different package, the command "npm uninstall <package_name>" may be used.
- A specific version of a package may also be installed by using the command "npm install@<version number>" (e.g. npm install@4.17.1).
- This is useful for instances where an older version of the package is preferred to be used or when a current version of a package has bugs that tend to break an application.


3. Setup a **basic Express JS server**
#### batchfolder > individual > s41 > discussion > terminal
```js
// Setup the dependencies
const express = require("express");
const mongoose = require("mongoose");

// Server setup
const app = express();
const port = 4000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Database connection
// Connecting to MongoDB Atlas
mongoose.connect("mongodb+srv://admin:admin123@cluster0.7iowx.mongodb.net/bXX-to-do?retryWrites=true&w=majority"
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
mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas.'));

// Server listening
// Server listening
if(require.main === module){
    app.listen(port, () => console.log(Server running at port ${port}));
}

module.exports = { app, mongoose };
```

4. Create a **"taskRoute.js"** file that will contain all the routes for our application and a route for getting all the tasks.
### Routes
- The routes are responsible for defining the URIs that our client accesses and the corresponding controller functions that will be used when a route is accessed
- They invoke the controller functions from the controller files
- All the business logic is done in the controller
#### batchfolder > individual > s41 > discussion > routes > taskRoutes.js
```js
// Contains all the endpoints for our application
// We separate the routes such that "index.js" only contains information on the server
// We need to use express' Router() function to achieve this
const express = require("express");
// Creates a Router instance that functions as a middleware and routing system
// Allows access to HTTP method middlewares that makes it easier to create routes for our application
const router = express.Router();
// Route to get all the tasks
// This route expects to receive a GET request at the URL "/tasks"
// The whole URL is at "http://localhost:4000/tasks" this is because of the "/tasks" defined in the "index.js" that's applied to all routes in this file
router.get("/", (req, res) => {
    // Invokes the "getAllTasks" function from the "taskController.js" file and sends the result back to the client/Postman
    taskController.getAllTasks();
})
// Use "module.exports" to export the router object to use in the "index.js"
module.exports = router;
```
5. Create a "task.js" file and create a schema and a model.
#### batchfolder > individual > s41 > discussion > task.js

```js
// Create the Schema, model and export the file
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({

    name : String,
    status : {
        type : String,
        default : "pending"
    }

});

// "module.exports" is a way for Node JS to treat this value as a "package" that can be used by other files
module.exports = mongoose.model("Task", taskSchema);
```
6. Create a "taskController.js" file that will contain all the business logic of our application and create a function for getting all the tasks.
- Controllers contain the functions and business logic of our Express JS application
- Meaning all the operations it can do will be placed in this file
#### batchfolder > individual > s41 > discussion > controllers > taskController.js
```js
// Uses the "require" directive to allow access to the "Task" model which allows us to access Mongoose methods to perform CRUD functions
// Allows us to use the contents of the "task.js" file in the "models" folder
const Task = require("../models/task");

// Controller function for getting all the tasks
// Defines the functions to be used in the "taskRoute.js" file and exports these functions
module.exports.getAllTasks = () => {

    // The "return" statement, returns the result of the Mongoose method "find" back to the "taskRoute.js" file which invokes this function when the "/tasks" routes is accessed
    // The "then" method is used to wait for the Mongoose "find" method to finish before sending the result back to the route and eventually to the client/Postman
    return Task.find({}).then(result => {

        // The "return" statement returns the result of the MongoDB query to the "result" parameter defined in the "then" method
        return result;

    })

}
```

7. Import the "taskRoutes.js" file in taskRoute.js.
#### batchfolder > individual > s41 > discussion > routes > taskRoutes.js
```js
/*...*/
const router = express.Router();
// The "taskController" allows us to use the functions defined in the "taskController.js" file
const taskController = require("../controllers/taskController");

router.get("/", (req, res) => {
    /*...*/
})

/*...*/
```
8. Return the result back to the client/Postman.
#### batchfolder > individual > s41 > discussion > routes > taskRoutes.js
```js
/*...*/

router.get("/", (req, res) => {

    // "resultFromController" is only used here to make the code easier to understand but it's common practice to use the shorthand parameter name for a result using the parameter name "result"/"res"
    taskController.getAllTasks().then(resultFromController => res.send(resultFromController));

})

/*...*/
```

9. Import the "taskRoute.js" file.
#### batchfolder > individual > s41 > discussion > index.js
```js
/*...*/
const mongoose = require("mongoose");
// This allows us to use all the routes defined in "taskRoute.js"
const taskRoute = require("./routes/taskRoute");

const app = express();
/*...*/
```
10. Create a route for base URL for the tasks.
#### batchfolder > individual > s41 > discussion > index.js
```js
/*...*/

// mongoose.connect("mongodb://localhost:27017/bXX-to-do", 
    /*...*/
// );

// Add the task route
// Allows all the task routes created in the "taskRoute.js" file to use "/tasks" route
app.use("/tasks", taskRoute);

// Server listening
if(require.main === module){
    app.listen(port, () => console.log(Server running at port ${port}));
}

module.exports = app;
```
11. Process a GET request at the "/tasks" route using postman to get all the tasks.
#### Postman
```js
url: http://localhost:4000/tasks
method: GET
```

12. Create a route for creating a task.
#### batchfolder > individual > s41 > discussion > routes > taskRoutes.js
```js
/*...*/

router.get("/", (req, res) => {
    /*...*/
})

// Route to create a new task
// This route expects to receive a POST request at the URL "/tasks"
// The whole URL is at "http://localhost:4000/tasks"
router.post("/", (req, res) => {

    // The "createTask" function needs the data from the request body, so we need to supply it to the function
    // If information will be coming from the client side commonly from forms, the data can be accessed from the request "body" property
    taskController.createTask(req.body);
    
})

module.exports = router;
```
13. Create a controller function for creating a task.
#### batchfolder > individual > s41 > discussion > controllers > taskController.js
```js
/*...*/

module.exports.getAllTasks = () => {
    /*...*/
}

// Controller function for creating a task
// The request body coming from the client was passed from the "taskRoute.js" file via the "req.body" as an argument and is renamed as a "reqBody" parameter in the controller file
module.exports.createTask = (reqBody) => {

    // Creates a task object based on the Mongoose model "Task"
    let newTask = new Task({
        
        // Sets the "name" property with the value received from the client/Postman
        name : reqBody.name

    })

    // Saves the newly created "newTask" object in the MongoDB database
    // The "then" method waits until the task is stored in the database or an error is encountered before returning a "true" or "false" value back to the client/Postman
    // The "then" method will accept the following 2 arguments:
        // The first parameter will store the result returned by the Mongoose "save" method
        // The second parameter will store the "error" object
    // Compared to using a callback function on Mongoose methods discussed in the previous session, the first parameter stores the result and the error is stored in the second parameter which is the other way around
        // Ex.
            // newUser.save((saveErr, savedTask) => {})
    return newTask.save().then((task, error) => {

        // If an error is encountered returns a "false" boolean back to the client/Postman
        if (error) {

            console.log(error);
            // If an error is encountered, the "return" statement will prevent any other line or code below it and within the same code block from executing
            // Since the following return statement is nested within the "then" method chained to the "save" method, they do not prevent each other from executing code
            // The else statement will no longer be evaluated
            return false;

        // Save successful, returns the new task object back to the client/Postman
        } else {

            return task; 

        }

    })

}
```

14. Return the result back to the client/Postman.
#### batchfolder > individual > s41 > discussion > routes > taskRoutes.js
```js
/*...*/

router.post("/", (req, res) => {

    taskController.createTask(req.body).then(resultFromController => res.send(resultFromController));
    
})

/*...*/
```
15. Process a POST request at the "/tasks" route using postman to create a task.
```js
url: http://localhost:4000/tasks
method: POST
body: raw + JSON
    {
        "name": "Eat"
    }
```
Even though we can send the error message back to the client, you will find that the error actually crashes our API. We instead should be able to catch this error and prevent our api from crashing. Let's update our controller method to add a catch method.
#### batchfolder > individual > s41 > discussion > controllers > taskController.js
```js
module.exports.createTask = (reqBody) => {

    /* ... */

    // Saves the newly created "newTask" object in the MongoDB database
    // The "then" method waits until the task is stored in the database or an error is encountered before returning a "true" or "false" value back to the client/Postman
    // The "then" method will accept the following 2 arguments:
        // The first parameter will store the result returned by the Mongoose "save" method
        // The second parameter will store the "error" object
    // Compared to using a callback function on Mongoose methods discussed in the previous session, the first parameter stores the result and the error is stored in the second parameter which is the other way around
        // Ex.
            // newUser.save((saveErr, savedTask) => {})

    // Callback function such as this is enough to send a simple error message, however, it does not prevent crashing the application.
    // Instead, let's use the catch() method to catch the error and send a message.
    // This makes the code shorter and more readable as it now implies:
    // The then() method receives the result of .save() method and returns it.
    // The catch() method catches and receives any error to prevent crashing and returns a false boolean.

    //Then/Catch is a shorter alternative to traditional callback functions.
    
    return newTask.save()
    .then((task) => task)
    .catch(err => false)

}
```
**Important Note**
- Rerun the Postman request after changing the codes to see if error handling works

16. Create a route for deleting a task.
- The whole URL is at "http://localhost:4000/tasks/:id"
- The task ID is obtained from the URL is denoted by the ":id" identifier in the route
- The colon (:) is an identifier that helps create a dynamic route which allows us to supply information in the URL
- The word that comes after the colon (:) symbol will be the name of the URL parameter
- ":id" is a wildcard where you can put any value, it then creates a link between "id" parameter in the URL and the value provided in the URL
- Example. 
    - If the route is localhost:3000/tasks/1234
    - "1234" is assigned to the "id" parameter in the URL
#### batchfolder > individual > s41 > discussion > routes > taskRoute.js
```js
// Route to delete a task
// This route expects to receive a DELETE request at the URL "/tasks/:id"
router.delete("/:id", (req, res) => {

    // URL parameter values are accessed via the request object's "params" property
    // The property name of this object will match the given URL parameter name
    // In this case "id" is the name of the parameter
    // If information will be coming from the URL, the data can be accessed from the request "params" property
    taskController.deleteTask(req.params.id);

})

module.exports = router;
```

17. Create a controller function for deleting a task
#### batchfolder > individual > s41 > discussion > controllers > taskController.js
```js
// Controller function for deleting a task
// "taskId" is the URL parameter passed from the "taskRoute.js" file

// Business Logic
/*
    1. Look for the task with the corresponding id provided in the URL/route
    2. Delete the task using the Mongoose method "findByIdAndRemove" with the same id provided in the route
    3. Then Send the deleted course back to the client. 
    4. Catch the Error and send a false boolean
*/

// The task id retrieved from the "req.params.id" property coming from the client is renamed as a "taskId" parameter in the controller file
module.exports.deleteTask = (taskId) => {
    
    // The "findByIdAndRemove" Mongoose method will look for a task with the same id provided from the URL and remove/delete the document from MongoDB
    // The Mongoose method "findByIdAndRemove" method looks for the document using the "_id" field
    return Task.findByIdAndRemove(taskId)
    .then((removedTask) => removedTask)
    .catch(err => false)

}
```
18. Return the result back to the client/Postman.
#### batchfolder > individual > s41 > discussion > routes > taskRoute.js
```js
/*...*/

router.delete("/:id", (req, res) => {

    taskController.deleteTask(req.params.id).then(resultFromController => res.send(resultFromController));

})
```
19. Process a DELETE request at the "/tasks/:id" route using postman to delete a task.
#### Postman
```
url: http://localhost:4000/tasks/:id
method: DELETE
```


## Activity

### Activity References
- [npm init](https://docs.npmjs.com/cli/v7/commands/npm-init)
- [Express JS](https://expressjs.com/)
- [What Is Mongoose](https://mongoosejs.com/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)
- [MVC Framework](https://www.tutorialspoint.com/mvc_framework/mvc_framework_introduction.htm)
- [Express JS Routing](https://expressjs.com/en/guide/routing.html)
- [Mongoose find Method](https://mongoosejs.com/docs/api.html#model_Model.find)
- [Mongoose save Method](https://mongoosejs.com/docs/api.html#document_Document-save)
- [Express JS Static and Dynamic Routes](https://dev.to/reiallenramos/create-an-express-api-static-and-dynamic-routes-33lb)
- [Mongoose findById](https://mongoosejs.com/docs/api.html#model_Model.findById)

### Activity Instructions
- Type of Activity:
    - Coding
    - GW

#### Instructions
Member 1:

1. Continue the discussion and create a route for updating a task using put method.
    - Use "/:id" route endpoint
        - look up the use of wildcard (:) identifier
        - use put method
    - import the controller function used for updating a task under the taskController.js
        - look up the use of req.params
        - send two parameters for updateTask controller function
            - id parameter inside req.params
            - request body
2. Create a controller function "updateTask" that will accept a task id of a task to be updated
    - Use findById to search the task collection using the task id parameter sent from the routes 
    - once found, change the name of the task
        - the new name should come from the request body parameter sent from the routes
    - Save the document
    - Return the task removed
    - catch any errors that may occur
3. In the routes, return the result back to the client
    - Process Postman requests for the routes and save the postman collection.

Member 2:

4. Create a new folder called s41-activity. 
	- Create an index.js file
	- Inside initialize a new npm project using npm init -y
	- Install the correct packages
		mongoose and express
	- Copy the template provided by your Instructor into the index.js as added by the instructor.
5. Update your local sessions folder with the git commit message "Added activity code s41"
6. Create the models, controllers and routes folder.
7. Analyze the content of the index.js file and create the appropriate model, route and controller files.
	- Follow the correct file name conventions.
8. Clean and update the index.js file.
9. Create and add the appropriate model files in the models folder.

Member 3:

10. Add and group all post routes together under "/posts" in the index.js
11. Add and group all user routes together under "/users" in the index.js
12. Update the create posts route into its appropriate route and controller files.
13. Update the get all posts route into its appropriate route and controller files.
14. Update the update post route into its appropriate route and controller files.\
15. Process requests for the routes and save the postman collection



Member 4:

16. Update the delete post route into its appropriate route and controller files.
17. Process requests for the routes and save the postman collection.
18. Update the user register route into its appropriate route and controller files.
19. Update the login route into its appropriate route and controller files.
20. Process requests for the routes and save the postman collection

Member 5:

21. Create a update user details route with "/:id/change-details" endpoint with its appropriate controller.
	- Note that we are not updating the whole document. Use the correct HTTP method.
	- Pass the user id to be updated in the route as route params.
	- The new firstName, lastName, email is passed in the request body.
	- Use the appropriate method to update the user and its password field ONLY.
	- Then, send a true boolean if update was complete.
	- Catch and return a false boolean if there was an error while updating.
22. Process requests for the routes and save the postman collection.

All Members:

23. Check out to your own git branch with git checkout -b <branchName>
24. Update your local sessions git repository and push to git with the commit message of Add activity code s41.
25. Add the sessions repo link in Boodle for s41.

#### Activity Solution:
```
Developer's Note: 
    There are 2 cases possible in activity solution:
    - Activities with exclusive activity folder:
```
- Activity Solution can be found in : [activity/index.js](./activity/index.js)

```
Developer's Note: 
    There are 2 cases possible in activity solution:
    - No exclusive activity folder. Activity is added together with discussion files:
```
**Solution**

1. Create a route for retrieving the user details:
#### batchfolder > individual > s41 > discussion > routes > taskRoute.js
```js
// Route to update a task
// This route expects to receive a PUT request at the URL "/tasks/:id"
// The whole URL is at "http://localhost:3001/tasks/:id"
router.put("/:id", (req, res) => {

	// The "updateTask" function will accept the following 2 arguments:
		// "req.params.id" retrieves the task ID from the parameter
		// "req.body" retrieves the data of the updates that will be applied to a task from the request's "body" property
	taskController.updateTask(req.params.id, req.body).then(resultFromController => res.send(resultFromController));

})
```
#### batchfolder > individual > s41 > discussion > controllers > tasController.js

```js
// Controller function for updating a task

// Business Logic
/*
	1. Get the task with the id using the Mongoose method "findById"
	2. Replace the task's name returned from the database with the "name" property from the request body
	3. Save the task
*/

// The task id retrieved from the "req.params.id" property coming from the client is renamed as a "taskId" parameter in the controller file
// The updates to be applied to the document retrieved from the "req.body" property coming from the client is renamed as "newContent"
module.exports.updateTask = (taskId, newContent) => {
	
	// The "findById" Mongoose method will look for a task with the same id provided from the URL
	// "findById" is the same as "find({"_id" : value})"
	// The "return" statement, returns the result of the Mongoose method "findById" back to the "taskRoute.js" file which invokes this function 
	return Task.findById(taskId).then((result, error) => {

		// If an error is encountered returns a "false" boolean back to the client/Postman
		if(error){

			console.log(err);
			return false;

		}

		// Results of the "findById" method will be stored in the "result" parameter
		// It's "name" property will be reassigned the value of the "name" received from the request
		result.name = newContent.name;

		// Saves the updated object in the MongoDB database
		// The document already exists in the database and was stored in the "result" parameter
		// Because of Mongoose we have access to the "save" method to update the existing document with the changes we applied
		// The "return" statement returns the result of the "save" method to the "then" method chained to the "findById" method which invokes this function
		return result.save().then((updatedTask, saveErr) => {

			// If an error is encountered returns a "false" boolean back to the client/Postman
			if (saveErr){

				// The "return" statement returns a "false" boolean to the "then" method chained to the "save" method which invokes this function
				console.log(saveErr);
				return false;

			// Update successful, returns the updated task object back to the client/Postman
			} else {

				/// The "return" statement returns a "false" boolean to the "then" method chained to the "save" method which invokes this function
				return updatedTask;

			}
		})
	})
}
```
