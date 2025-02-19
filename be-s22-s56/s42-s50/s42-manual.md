# Express.js - Booking System API - Business Use Case Translation to Model Design

Discussion Topic List
- Setup
- .env
- mongoose
- cors
- model
  - Enrollment.js

Activity Topic List
- model
  - Course.js
  - User.js
- .gitignore


## Resources

### References

- [RESTful API Development using Express.js](https://medium.com/automationmaster/restful-api-development-using-express-js-58dc1261c7ba)
- [How to structure an Express.js REST API with best practices](https://blog.treblle.com/egergr/)
- [Top 5 Design Practices of a RESTFUL API using Express.JS](https://dev.to/qbentil/top-5-design-practices-of-a-restful-api-using-expressjs-2i6o)
- [Model Methods](https://mongoosejs.com/docs/api.html#model_Model.findByIdAndUpdate)
    
### Tools/Technologies Version
- node.js - ^20.11.1
- npm - ^10.2.4
- express - ^4.18.3
- mongoose - ^8.2.1
- cors - ^2.8.5
- dotenv - ^16.4.5


## Code Discussion

### 1. Create an "s42-s50" folder and create an empty "index.js" file that will serve as the entry point for our application.

#### batchfolder > groupwork > sessions > backend > s42-s50 > index.js
*Note: s42-s50 folder will be the rootFolder for this app.*

**Important Note:**
- Creating this file first is important before triggering the command to create a Node JS application in the following step.
- Doing this first will automatically set the index.js file in the "package.json" file that will be created when the Node JS application is created.

### 2. Create a Node JS application.

#### Application > Terminal

```bash
npm init --y
```
**Important Note:**
- Triggering the command above will create a "package.json" file that will contain the details about our Node JS application.
- If the "index.js" file was not created beforehand, you may change the "main" property to "index.js" to ensure that it would be the correct file that will be used as the entry point for the Node JS application.
- Upon creation of this file, make sure to check that the correct file is set to ensure no problems will be encountered when trying to run the application.
- Refer to "references" section of this file to find the documentations for npm Documentation and npm init.


### 3. Install the Express JS Framework to be used in creating a basic Express JS application.

#### Application > Terminal

```bash
npm install express
```

**Important Note:**
- Triggering the command above will install the latest version of Express JS framework that we'll be using to easily setup a backend application.
- There may be instances when an older version of a package is needed for a project, one reason for this is that a latest version of an application may have code breaking bugs or a preferred version of a package would like to be used.
- To install older versions of packages, the following syntax may be used:
    - npm install packageName@versionNumber
- Refer to "references" section of this file to find the documentation for Express JS Documentation - Getting Started.


### 4. Create a simple Express JS application.

#### rootFolder > index.js

```js
// [SECTION] Dependencies and Modules
const express = require("express");
    
// [SECTION] Environment Setup
const port = 4000;

// [SECTION] Server Setup
// Creates an "app" variable that stores the result of the "express" function that initializes our express application and allows us access to different methods that will make backend creation easy
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));	

// [SECTION] Server Gateway Response
// if(require.main) would allow us to listen to the app directly if it is not imported to another module, it will run the app directly.
// else, if it is needed to be imported, it will not run the app and instead export it to be used in another file.
if(require.main === module){
    app.listen( port, () => {
        console.log(`API is now online on port ${ port }`)
    });
}

// In creating APIs, exporting modules in the "index.js" file is ommited
// exports an object containing the value of the "app" variable only used for grading.
module.exports = app;
```

**Important Note:**
- Refer to "references" section of this file to find the documentations for Express JS express Function, Express JS json Method and Express JS urlencoded Method.


### 5. Run the Express JS app.

#### Application > Terminal

```bash
nodemon index.js
```

**Important Note:**
- The message from the console log will be displayed in the terminal.


### 6. Add a .env file for specifying the port.
- The `.env` file allows you to centralize your configuration settings, such as environment variables, in one place. 
- This makes it easier to **manage** and **update** these settings, especially in larger projects with multiple configuration options.
- Utilizing environment variables ensures uniformity
- Enhanced Security: It shields sensitive data like API keys and credentials from exposure, reducing the risk of accidental disclosure, especially when sharing code publicly.

**Create the `.env` File: Start by creating a `.env` file in the root directory of your project. Define your `PORT`.**
- you can use the command `touch .env`
- or simply add file in your editor

#### rootFolder > .env

```js
PORT=4000
```

### 7. Install the dotenv Package: After creating the `.env`file, you can install the dotenv package using npm. 
- This package allows you to load the environment variables from the .env file into your Node.js application.

#### Application > Terminal

```bash
npm install dotenv
```

### 8. Load Environment Variables in Your Application: In your main application file `index.js`, require and configure the dotenv package to load the environment variables from the `.env file`. This step should be done at the very beginning of your application startup process.

#### discussion > index.js

```js
// [SECTION] Environment Setup
// const port = 4000;
require('dotenv').config();
```
- Comment out the variable port and change it with the dotenv.config() function.

### 9. Once you've loaded the environment variables using dotenv, you can access them in your application using process.env.VARIABLE_NAME

```js
if(require.main === module){
    // "process.env.PORT || 3000" will use the environment variable if it is available OR will used port 3000 if none is defined
    // This syntax will allow flexibility when using the application locally or as a hosted application
    app.listen(process.env.PORT || 3000, () => {
        console.log(`API is now online on port ${ process.env.PORT || 3000 }`)
    });
}
```

### 10. Install the mongoose package.

#### Application > Terminal

```bash
npm install mongoose
```

**Important Note:**
- Mongoose is a package that we will be using to connect and communicate with our MongoDB Atlas as well as gain access to methods that will make CRUD operations easier to do.
- Refer to "references" section of this file to find the documentation for Mongoose Documentation.

### 11. Connect our Express JS application to our MongoDB Atlas database.


#### rootFolder > .env

```
PORT=4000
MONGODB_STRING="mongodb+srv://admin:admin123@cluster0.7iowx.mongodb.net/course-booking-API?retryWrites=true&w=majority"
```


#### rootFolder > index.js

```js
const express = require("express");
const mongoose = require("mongoose");

/*...*/

//[SECTION] Database Connection 
// Connect to our MongoDB database
mongoose.connect(process.env.MONGODB_STRING, {
    useNewUrlParser: true, //both can be omitted since this will be deprecated in the next version
    useUnifiedTopology: true
});

// Prompts a message in the terminal once the connection is "open" and we are able to successfully connect to our database
mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas.'));

if(require.main === module){
    /*...*/
}

module.exports = { app, mongoose };
```

**Important Note:**
- Mongoose is a package that we will be using to connect and communicate with our MongoDB Atlas as well as gain access to methods that will make CRUD operations easier to do.
- Make sure to export both the "app" and "mongoose" modules for automated grading use.
- Refer to "references" section of this file to find the documentation for Mongoose connect Method.



### 12. Install the cors package.

#### Application > Terminal

```bash
npm install cors
```

Important Note
- By default our backend's CORS setting will prevent any application outside of our Express JS app to process requests to it. Using the cors package will allow us to manipulate this and control what applications may use our app.
- The "cors" package will allow our backend application to be available to our frontend application.
- By default our backend's CORS setting will prevent any application outside of our Express JS app to process requests to it. Using the cors package will allow us to manipulate this and control what applications may use our app.
- Refer to "references" section of this file to find the documentations for Cross-Origin Resource Sharing (CORS) and npm CORS package.



### 13. Implement cors in our backend application.

#### rootFolder > index.js

```js
/*...*/
const mongoose = require("mongoose");
// Allows our backend application to be available to our frontend application
// Allows us to control the app's Cross Origin Resource Sharing settings
const cors = require("cors");

const port = 4000;

/*...*/
app.use(express.urlencoded({ extended: true }));
// Allows all resources to access our backend application
//app.use(cors());

//You can also customize the CORS options to meet your specific requirements.
const corsOptions = {
    //to update the origin of the request
    origin: ['http://localhost:8000'], // Allow requests from this origin (The client's URL) the origin is in array form if there are multiple origins.
    //methods: ['GET', 'POST'], // Allow only specified HTTP methods // optional only if you want to restrict the methods
    //allowedHeaders: ['Content-Type', 'Authorization'], // Allow only specified headers // optional only if you want to restrict the headers
    credentials: true, // Allow credentials (e.g., cookies, authorization headers)
    optionsSuccessStatus: 200 // Provides a status code to use for successful OPTIONS requests, since some legacy browsers (IE11, various SmartTVs) choke on 204.
};

app.use(cors(corsOptions));


mongoose.connect(/*...*/);
/*...*/
```

**Important Note**
- Using `app.use(cors())` is not best practice because it allows all other applications to access our backend app.
- CORS configuration is a common practice in Node.js applications. It helps organize your code and makes it easier to manage and update your CORS settings.

### 14. Return to the Google Slides to discuss the steps in creating data models for an application.

#### Browser > Google Slides

### 15. Return from the Google Slide and continue Step 6 from Data Model Creation.Create a "models" folder and create an "Enrollment.js" file to store the schema for our enrollment.In this schema, we will use a Hybrid approach in our application and add the EnrollmentCourse associative entity and embed it in our enrollment schema instead.

#### rootFolder > models > Enrollment.js

```js
const mongoose = require('mongoose');

//[SECTION] Schema/Blueprint 
const enrollmentSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: [true, 'User ID is Required']
    },
    enrolledCourses: [
        {
            courseId: {
                type: String,
                required: [true, 'Course ID is Required']
            }
        }
    ],
    totalPrice: {
        type: Number,
        required: [true, 'totalPrice is Required']
    },
    enrolledOn: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        default: 'Enrolled'
    }
});

//[SECTION] Model
module.exports = mongoose.model('Enrollment', enrollmentSchema);
```

**Important Note:**
- Make sure to follow the naming convention for model files which should have the folowing:
    - The first letter of the file should be capitalized to indicate that we are accessing the model file.
    - Should use the singular form of the collection.
- We will be following the Model-View-Controllers Framework in creating our backend and frontend application.
- This allows us to follow a certain standard when developing our applications and separating files into their own folders will allow us to easily locate the necessary files we need in developing our app.
- Refer to "references" section of this file to find the documentations for Mongoose Schemas, JavaScript Date object and MVC Framework.


## Activity

### Activity References

- [Mongoose JS Models](https://mongoosejs.com/docs/models.html)
- [.gitignore documentation](https://git-scm.com/docs/gitignore)
- [.gitignore](https://www.w3schools.com/git/git_ignore.asp?remote=github)

### Activity Instructions
- Type of Activity:
    - Coding
    - GW

#### Instructions
**Member 1:**

1. Update your local sessions folder with the git commit message "Added discussion code s42".
2. Search for .gitignore
3. Add .gitignore file in your project and ensure that node_modules and env directories are excluded from being pushed to the remote repository.

**Member 1,2,3:**

4. Create the Course Schema and Model based on our previous ERD.
5. Add the necessary default values and field validation.

**Member 4,5:**

6. Create the User Schema and Model based on our previous ERD.
7. Add the necessary default values and field validation.


**All Members:**

8. Check out to your own git branch with git checkout -b <branchName>
9. Update your local sessions git repository and push to git. Commit your changes with a concise, imperative statement describing the change. Example: Added solution for the s42 activity.
10. Add the sessions repo link in Boodle for s42.

#### Activity Solution:


### 1. Create a ".gitignore" file to add node_modules and env directories to be excluded from being pushed to the remote repository.


#### rootFolder> .gitignore

```
node_modules/
.env
```

### 2. Create a "Course.js" file to store the schema for courses.

#### rootFolder > models > Course.js

```js
//[Section] Activity
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Course Name is Required']
    },
    description: {
        type: String,
        required: [true, 'Course Description is Required']
    },
    price: {
        type: Number,
        required: [true, 'Course Price is Required']
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Course', courseSchema);
```


### 3. Create a "User.js" file to store the schema for users.

#### rootFolder > models > User.js

```js
//[Section] Activity
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    
    firstName: {
        type: String,
        required: [true, 'First Name is Required']
    },
    lastName: {
        type: String,
        required: [true, 'Last Name is Required']
    },
    email: {
        type: String,
        required: [true, 'Email is Required']
    },
    password: {
        type: String,
        required: [true, 'Password is Required']
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    mobileNo: {
        type: String,
        required: [true, 'Mobile Number is Required']
    }
});


module.exports = mongoose.model('User', userSchema);

```





