// Setup the dependencies
const express = require("express");
const mongoose = require("mongoose");
// This allows us to use all the routes defined in "taskRoute.js"
const taskRoute = require("./routes/taskRoute");

// Server setup
const app = express();
const port = 3001;
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Database connection
// Connecting to MongoDB Atlas
mongoose.connect("mongodb+srv://admin:admin123@cluster0.7iowx.mongodb.net/bXX-to-do?retryWrites=true&w=majority", 
	{ 
		useNewUrlParser : true,  
		useUnifiedTopology : true
	}
);

// Connecting to MongoDB locally
// 27017 is the default port on where mongo instances are run in a device
// mongoose.connect("mongodb://localhost:27017/bXX-to-do", 
// 	{ 
// 		useNewUrlParser : true,  
// 		useUnifiedTopology : true
// 	}
// );

// Add the task route
// Allows all the task routes created in the "taskRoute.js" file to use "/tasks" route
app.use("/tasks", taskRoute);

// Server listening
app.listen(port, () => console.log(`Now listening to port ${port}`));
