// Contains all the endpoints for our application
// We separate the routes such that "app.js" only contains information on the server
// We need to use express' Router() function to achieve this
const express = require("express");
// Creates a Router instance that functions as a middleware and routing system
// Allows access to HTTP method middlewares that makes it easier to create routes for our application
const router = express.Router();
// The "taskController" allows us to use the functions defined in the "taskController.js" file
const taskController = require("../controllers/taskController");

// [Section] Routes
// The routes are responsible for defining the URIs that our client accesses and the corresponding controller functions that will be used when a route is accessed
// They invoke the controller functions from the controller files
// All the business logic is done in the controller

// Route to get all the tasks
// This route expects to receive a GET request at the URL "/tasks"
// The whole URL is at "http://localhost:3001/tasks" this is because of the "/tasks" defined in the "app.js" that's applied to all routes in this file
router.get("/", (req, res) => {

	// Invokes the "getAllTasks" function from the "taskController.js" file and sends the result back to the client/Postman
	// "resultFromController" is only used here to make the code easier to understand but it's common practice to use the shorthand parameter name for a result using the parameter name "result"/"res"
	taskController.getAllTasks().then(resultFromController => res.send(resultFromController));

})

// Route to create a new task
// This route expects to receive a POST request at the URL "/tasks"
// The whole URL is at "http://localhost:3001/tasks"
router.post("/", (req, res) => {

	// The "createTask" function needs the data from the request body, so we need to supply it to the function
	// If information will be coming from the client side commonly from forms, the data can be accessed from the request "body" property
	taskController.createTask(req.body).then(resultFromController => res.send(resultFromController));
	
})

// Route to delete a task
// This route expects to receive a DELETE request at the URL "/tasks/:id"
// The whole URL is at "http://localhost:3001/tasks/:id"
// The task ID is obtained from the URL is denoted by the ":id" identifier in the route
// The colon (:) is an identifier that helps create a dynamic route which allows us to supply information in the URL
// The word that comes after the colon (:) symbol will be the name of the URL parameter
// ":id" is a wildcard where you can put any value, it then creates a link between "id" parameter in the URL and the value provided in the URL
	// Ex. 
		// If the route is localhost:3000/tasks/1234
		// "1234" is assigned to the "id" parameter in the URL
router.delete("/:id", (req, res) => {

	// URL parameter values are accessed via the request object's "params" property
	// The property name of this object will match the given URL parameter name
	// In this case "id" is the name of the parameter
	// If information will be coming from the URL, the data can be accessed from the request "params" property
	taskController.deleteTask(req.params.id).then(resultFromController => res.send(resultFromController));

})


// ACTIVITY
// Route to update a task
// This route expects to receive a PUT request at the URL "/tasks/:id"
// The whole URL is at "http://localhost:3001/tasks/:id"
router.put("/:id", (req, res) => {

	// The "updateTask" function will accept the following 2 arguments:
		// "req.params.id" retrieves the task ID from the parameter
		// "req.body" retrieves the data of the updates that will be applied to a task from the request's "body" property
	taskController.updateTask(req.params.id, req.body).then(resultFromController => res.send(resultFromController));

})

// Use "module.exports" to export the router object to use in the "app.js"
module.exports = router;