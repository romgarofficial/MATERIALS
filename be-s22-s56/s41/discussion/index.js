// Setup the dependencies
const express = require("express");
const mongoose = require("mongoose");
// This allows us to use all the routes defined in "taskRoute.js"
const taskRoute = require("./routes/taskRoute");

// Server setup
const app = express();
const port = 4000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Database connection
// Connecting to MongoDB Atlas
mongoose.connect("mongodb+srv://admin:admin1234@cluster0.bjpc8jg.mongodb.net/bXX-to-do?retryWrites=true&w=majority&appName=Cluster0");

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

// Add the task route
// Allows all the task routes created in the "taskRoute.js" file to use "/tasks" route
app.use("/tasks", taskRoute);

// Server listening
if(require.main === module){
	app.listen(port, () => console.log(`Server running at port ${port}`));
}

module.exports = app;

