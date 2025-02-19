const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 4000;

mongoose.connect("mongodb+srv://admin:1234@cluster0.zlyew.mongodb.net/postDB"
);

let db = mongoose.connection; 
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => console.log("We're connected to the cloud database"));

app.use(express.json());
app.use(express.urlencoded({extended:true})); 

const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");

//http://localhost:4000/users
app.use("/users", userRoutes);
//http://localhost:4000/courses
app.use("/posts", postRoutes);

// Listen to the port, meaning, if the port is accessed, we run the server

//An if statement is added here to be able to export the following app/server for checking.
if(require.main === module){
	app.listen(port, () => console.log(`Server running at port ${port}`));
}

module.exports = app;
 
