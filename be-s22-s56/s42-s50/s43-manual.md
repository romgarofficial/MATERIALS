# Express.js - Booking System API - User Registration, Authentication, and JWT's

Discussion Topic List
- routes
    - /register
    - /login
- controllers
    - registerUser
    - loginUser
- bcrypt
- jwt

Activity Topic List
- routes
    - /check-email
    - /details
    - /all
    - /
- controllers
    - checkEmailExists
    - get profile
    - get all courses
    - add course


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
- bcrypt - ^5.1.1
- jsonwebtoken - ^9.0.2
- Postman - ^10.22.13

## Code Discussion

### 1. Create a "routes" folder, create a "user.js" file to store the routes for our users.
#### rootFolder > routes > user.js
*Note: s42-s50 folder will be the rootFolder for this app.*


```js
//[SECTION] Dependencies and Modules
const express = require("express");

//[SECTION] Routing Component
const router = express.Router();


/***** Routes will be placed here *****/



//[SECTION] Export Route System
// Allows us to export the "router" object that will be accessed in our "index.js" file
module.exports = router;
```

**Important Note:**
- All files pertaining to our users are named "user" to follow good practice and standards for naming our files.
- This is confusing for beginners but may be packaged to them by the way the files are accessed. (e.g. "/models/User" refers to the user model and "/routes/user" refers to the user routes file)
- You may change the name of the files (e.g. "userRoutes" for the route file and userController for the controller file) for the student's convenience but make sure to highlight the importance of using these naming conventions which might confuse them when they encounter it in real world application.
- Using these naming conventions also makes it easier during development which shortens the syntax.
- Refer to "references" section of this file to find the documentation for Express JS Routing.

### 2. Implement the main route for our user routes.

#### rootFolder > index.js

```js
/*...*/
const cors = require("cors");

//[SECTION] Routes
// Allows access to routes defined within our application
const userRoutes = require("./routes/user");


/*...*/

mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas.'));

//[SECTION] Backend Routes 
//http://localhost:4000/users
// Defines the "/users" string to be included for all user routes defined in the "user" route file
// Groups all routes in userRoutes under "/users"
app.use("/users", userRoutes);

//[SECTION] Server Gateway Response
if(require.main === module) {
    /*...*/
}

/*...*/
```

### 3. Create a "controllers" folder, create a "user.js" file to store the controller functions that will contain the business logic for our user CRUD operations.

#### rootFolder > controllers > user.js

```js
//[SECTION] Dependencies and Modules
// The "User" variable is defined using a capitalized letter to indicate that what we are using is the "User" model for code readability
const User = require("../models/User");



/***** functions will be placed here *****/
```

**Important Note:**
- Refer to "references" section of this file to find the documentations for Mongoose Queries, Mongoose find Method and JavaScript then Method.


### 4. Create a route for registering a user.

#### rootFolder > routes > user.js

```js
/*...*/

//[SECTION] Route for user registration
router.post("/register", (req, res) => {
    userController.registerUser(req.body).then(resultFromController => res.send(resultFromController));
});

module.exports = router;
```

### 5. Create a controller method for registering a user.

#### rootFolder > controllers > user.js

```js
/*...*/

//[SECTION] User registration
/*
    Steps:
    1. Create a new User object using the mongoose model and the information from the request body
    2. Make sure that the password is encrypted
    3. Save the new User to the database
*/
module.exports.registerUser = (reqBody) => {

    // Creates a variable "newUser" and instantiates a new "User" object using the mongoose model
    // Uses the information from the request body to provide all the necessary information
    let newUser = new User({
        firstName : reqBody.firstName,
        lastName : reqBody.lastName,
        email : reqBody.email,
        mobileNo : reqBody.mobileNo,
        password : reqBody.password
    })

    // Saves the created object to our database
    // Then, return result to the handler function. No return keyword used because we're using arrow function's implicit return feature
    // catch the error and return to the handler function. No return keyword used because we're using arrow function's implicit return feature
    return newUser.save()
    .then((result) => result)
    .catch(err => err)

};
``` 

**Important Note:**
- Refer to "references" section of this file to find the documentations for Mongoose Models.


### 6. Process a POST request at the "/register" route using postman to create a user record.

#### > Postman

```json
url: http://localhost:4000/users/register
method: POST
body: raw + JSON
    {
        "firstName": "John",
        "lastName": "Smith",
        "email": "john@mail.com",
        "mobileNo": "09123456789",
        "password": "john1234"
    }
```

### 7. Install the "bcrypt" package.

#### Application > Terminal
```bash
npm install bcrypt
```

**Important Note:**
- In our application we will be using the bcrypt package to demonstrate how to encrypt password data when registering a user.
- The "bcrypt" package is one of the many packages that we can use to encrypt information but is not commonly recommended because of how simple the algorithm is for creating encrypted passwords which have been decoded by hackers.
- There are other more advanced encryption packages that can be used.
- This is used in the bootcamp to easily demonstrate how encryption works.
- Refer to "references" section of this file to find the documentation for bcrypt Package.


### 8. Implement "bcrypt" in our application and update the "register" controller method.

#### rootFolder > controllers > user.js

```js
const bcrypt = require('bcrypt');
const User = require("../models/User");

/*...*/

module.exports.registerUser = (reqBody) => {

    let newUser = new User({
        /*...*/
        // 10 is the value provided as the number of "salt" rounds that the bcrypt algorithm will run in order to encrypt the password
        password : bcrypt.hashSync(reqBody.password, 10)
    })

    /*...*/

};
```

**Important Note:**
- Make sure to delete all user records in the database before registering for a new user to ensure that all user records found in it would have encrypted passwords.


### 9. Install the "jsonwebtoken" package.

#### Application > Terminal
```bash
npm install jsonwebtoken
```

**Important Note:**
- JSON web tokens are an industry standard for sending information between our applications in a secure manner.
- The "jsonwebtoken" package will allow us to gain access to methods that will help us create a JSON web token.
- Refer to "references" section of this file to find the documentations for JSON Web Tokens and jsonwebtoken Package.


### 10. Create an "auth.js" file to store the methods for creating jsonwebtokens.

#### rootFolder > auth.js

```js
const jwt = require("jsonwebtoken");
// [SECTION] Environment Setup
// import our .env for environment variables
require('dotenv').config();

// [Section] JSON Web Tokens
/*
- JSON Web Token or JWT is a way of securely passing information from the server to the client or to other parts of a server
- Information is kept secure through the use of the secret code
- Only the system that knows the secret code that can decode the encrypted information
- Imagine JWT as a gift wrapping service that secures the gift with a lock
- Only the person who knows the secret code can open the lock
- And if the wrapper has been tampered with, JWT also recognizes this and disregards the gift
- This ensures that the data is secure from the sender to the receiver
*/

//[Section] Token Creation
/*
Analogy
    Pack the gift and provide a lock with the secret code as the key
*/
module.exports.createAccessToken = (user) => {
    // The data will be received from the registration form
    // When the user logs in, a token will be created with user's information
    const data = {
        id : user._id,
        email : user.email,
        isAdmin : user.isAdmin
    };

    // Generate a JSON web token using the jwt's sign method
    // Generates the token using the form data and the secret code with no additional options provided
    // SECRET_KEY is a User defined string data that will be used to create our JSON web tokens
    // Used in the algorithm for encrypting our data which makes it difficult to decode the information without the defined secret keyword
    //Since this is a critical data, we will use the .env to secure the secret key. "Keeping your secrets secret".
    return jwt.sign(data, process.env.JWT_SECRET_KEY, {});
    
};
```

### 11. Let's add the `JWT_SECRET_KEY`to .env file.

#### rootFolder > .env

```js
PORT=4000
JWT_SECRET_KEY="CourseBookingAPI"
```

**Important Note:**
1. You should only get a unique jwt with our "secret" keyword included in the algoritm if you log in to our app with the correct email and password.

2. As a user, You should only get your own details from your own token from logging in.

3. JWT is not meant to store sensitive data. For now, for ease of use and for our MVP, we add the email and isAdmin details of the logged in user, however, in the future, you can limit this to only the id and for every route and feature, you can simply lookup for the user in the database to get his details.

4. JWT is like a more secure passport you use around the app to access certain features meant for your type of user.

5. We will verify the legitimacy of a JWT every time a user access a restricted feature. Each JWT contains a secret only our server knows. IF the jwt has been, in any way, changed, We will reject the user and his tampered token. IF the jwt, does not contain a secret OR the secret is different, we will reject his access and token.

### 12. Create a route for authenticating a user.

#### rootFolder > routes > user.js

```js
/*...*/

router.post("/register", (req, res) => {
    /*...*/
});

//[SECTION] Route for user authentication
router.post("/login", (req, res) => {
    userController.loginUser(req.body).then(resultFromController => res.send(resultFromController));
}); 

module.exports = router;
```

### 13. Create a controller method for authenticating a user.

#### rootFolder > controllers > user.js

```js
/*...*/
const User = require("../models/User");
const auth = require("../auth"); //don't forget to add this

module.exports.registerUser = (reqBody) => {
    /*...*/
};

//[SECTION] User authentication
/*
    Steps:
    1. Check the database if the user email exists
    2. Compare the password provided in the login form with the password stored in the database
    3. Generate/return a JSON web token if the user is successfully logged in and return false if not
*/
module.exports.loginUser = (reqBody) => {
    // The "findOne" method returns the first record in the collection that matches the search criteria
    // We use the "findOne" method instead of the "find" method which returns all records that match the search criteria
    return User.findOne({ email : reqBody.email })
    .then(result => {

        // User does not exist
        if(result == null){

            return false;

        // User exists
        } else {

            // Creates the variable "isPasswordCorrect" to return the result of comparing the login form password and the database password
            // The "compareSync" method is used to compare a non encrypted password from the login form to the encrypted password retrieved from the database and returns "true" or "false" value depending on the result
            // A good coding practice for boolean variable/constants is to use the word "is" or "are" at the beginning in the form of is+Noun
                //example. isSingle, isDone, isAdmin, areDone, etc..
            const isPasswordCorrect = bcrypt.compareSync(reqBody.password, result.password);

            // If the passwords match/result of the above code is true
            if (isPasswordCorrect) {

                // Generate an access token
                // Uses the "createAccessToken" method defined in the "auth.js" file
                // Returning an object back to the client application is common practice to ensure information is properly labeled and real world examples normally return more complex information represented by objects
                return { access : auth.createAccessToken(result) }

            // Passwords do not match
            } else {

                return false;

            }

        }

    })
    .catch(err => err)
};
```

### 14. Process a POST request at the "/login" route using postman to authenticate a user.

#### Application > Postman
```json
url: http://localhost:4000/users/login
method: POST
body: raw + JSON
    {
        "email": "john@mail.com",
        "password": "john1234"
    }
```

**Important Notes:**
- The output should be an JWT access token. 
- You can also check the JWT on their website at jwt.io
- JWTs encode and contain the passed details from the login. The most important part of JWT is its signature. Our JWT secret.



## Activity

### Activity References

- [Express JS Routing](https://expressjs.com/en/guide/routing.html)
- [Mongoose Queries](https://mongoosejs.com/docs/queries.html)


### Activity Instructions
- Type of Activity:
    - Coding
    - GW

#### Instructions
**Member 1:**

1. Update your local sessions git repo, push with the commit message, "Add rootFolder s43".
2. Create a '/check-email' route that will accept the user’s email to check if the email exists in the database.
3. Create a checkEmailExists controller method for checking if the email exists in the database.
   - Receives user's email from the request body
   - Find the document in the database using the user's email. Use mongoose "find" method to find duplicate emails.
   - Use the "then" method to send a response back to the client appliction based on the result of the "find" method

**Member 2:**

4. Create a '/details' route that will accept the user’s Id to retrieve the details of a user.
5. Create a getProfile controller method for retrieving the details of the user:
	- Receives user's ID from the request body.
	- Find the document in the database using the user's ID
	- Reassign the password of the returned document to an empty string
	- Return the result back to the client
	
**Member 3:**

6. In the index.js, define the "/courses" string to be included for all course routes defined in the "course" route file
	- Group all routes in courseRoutes under "/courses"
7. Create the courses' route and controller files in their appropriate folders.
8. Create a new GET route with the  "/" endpoint which will be used to retrieve all Course documents from the database.
9. Create a getAllCourses controller method for getting all Course documents
	- Find all Course documents
	- Return the result to the client

**Member 4,5:**

10. Create a POST course route with the "/" endpoint which will be used to create a new Course document.
11. Create an addCourse controller method for creating a new Course document.
   - Receives details of the course from the request body.
   - Create a new course document using the save() method.
   - Send the created document back to the client.
12. Process a GET request at the "/check-email" route using postman to check if the email exists in the database.
13. Process a GET request at the "/details" route using postman to retrieve the details of the user.
14. Process a POST request at the "/" route using postman to create a new course.
15. Process a GET request at the "/all" route using postman to get all courses.
16. Save the postman collection and export inside the root folder.

**All Members:**

17. Check out to your own git branch with git checkout -b <branchName>.
18. Update your local sessions git repository and push to git. Commit your changes with a concise, imperative statement describing the change. Example: Added solution for the s43 activity.
19. Add the sessions repo link in Boodle for s43.

#### Activity Solution:


### 1. Create a route for retrieving the user details.
#### rootFolder > routes > user.js

```js
/*...*/
//[SECTION] Activity: Routes for duplicate email
router.post("/check-email", (req, res) => {
    userController.checkEmailExists(req.body).then(resultFromController => res.send(resultFromController));
});

router.post("/register", (req, res) => {
    /*...*/
}); 

router.post("/login", (req, res) => {
    /*...*/
}); 

//[Section] Activity: Route for retrieving user details
router.post("/details", (req,res)=>{
    userController.getProfile(req.body).then(resultFromController => res.send(resultFromController));
});

module.exports = router;
```


### 2. Create a controller method for retrieving the user details.

#### rootFolder > controllers > user.js

```js
//[SECTION] Check if the email already exists
/*
    Steps: 
    1. Use mongoose "find" method to find duplicate emails
    2. Use the "then" method to send a response back to the client appliction based on the result of the "find" method
*/
module.exports.checkEmailExists = (reqBody) => {

    // The result is sent back to the client via the "then" method found in the route file
    return User.find({ email : reqBody.email })
    .then(result => {

        // The "find" method returns a record if a match is found
        if (result.length > 0) {

            return true;

        // No duplicate email found
        // The user is not yet registered in the database
        } else {

            return false;
        };
    })
    .catch(err => err)
};

/*...*/

module.exports.loginUser = (reqBody) => {
			/*...*/
		};

//[Section] Activity: Retrieve user details
/*
    Steps:
    1. Retrieve the user document using it's id
    2. Change the password to an empty string to hide the password
    3. Return the updated user record
*/
module.exports.getProfile = (reqBody) => {

    return User.findById(reqBody.id)
    .then(result => {
        result.password = "";
        return result;
    })
    .catch(err => err)
};
```


### 3. Process a POST request at the "/details" route using postman to retrieve the details of the user.

#### Postman

```json
//check duplicate emails
url: http://localhost:4000/users/check-email
method: POST
body: raw + JSON
    {
        "email": "john@mail.com"
    }

//get details of user
url: http://localhost:4000/users/details
method: POST
body: raw + JSON
    {
        "id": "6538fb97ead98c6bcc51223d"
    }
```

### 4. Create a "course.js" file to store the routes for our courses and create the routes for creating a course and retrieving all courses. Require user controller.

#### rootFolder > routes > course.js

```js
//[SECTION] Activity: Dependencies and Modules
const express = require("express");
const courseController = require("../controllers/course");

//[SECTION] Activity: Routing Component
const router = express.Router();

//[SECTION] Activity: Route for creating a course
router.post("/", (req,res)=>{
    courseController.addCourse(req.body).then(resultFromController => res.send(resultFromController));
}); 

//[SECTION] Activity: Route for retrieving all courses
router.get("/all", (req,res)=>{
    courseController.getAllCourses().then(resultFromController => res.send(resultFromController));
}); 

//[SECTION] Activity: Export Route System
// Allows us to export the "router" object that will be accessed in our "index.js" file
module.exports = router;
```

### 5. Create a "course.js" file to store the controller functions that will contain the business logic for our course CRUD operations.

#### rootFolder > controllers > course.js   

```js
//[SECTION] Activity: Dependencies and Modules
const Course = require("../models/Course");

//[SECTION] Activity: Create a course
/*
    Steps: 
    1. Instantiate a new object using the Course model and the request body data
    2. Save the record in the database using the mongoose method "save"
    3. Use the "then" method to send a response back to the client appliction based on the result of the "save" method
*/
module.exports.addCourse = (reqBody) => {

    // Creates a variable "newCourse" and instantiates a new "Course" object using the mongoose model
    // Uses the information from the request body to provide all the necessary information
    let newCourse = new Course({
        name : reqBody.name,
        description : reqBody.description,
        price : reqBody.price
    });

    // Saves the created object to our database
    return newCourse.save().then(result => result).catch(err => err)
}; 


//[SECTION] Activity: Retrieve all courses
/*
    Steps: 
    1. Retrieve all courses using the mongoose "find" method
    2. Use the "then" method to send a response back to the client appliction based on the result of the "find" method
*/
module.exports.getAllCourses = (reqBody) => {

    return Course.find({})
    .then(result => result)
    .catch(err => err);

};
```


### 6. Implement the main route for our course routes.

#### rootFolder > index.js

```js
/*...*/
const userRoutes = require("./routes/user");
//[SECTION] Activity: Allows access to routes defined within our application
const courseRoutes = require("./routes/course");


/*...*/

mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas.'));

//[SECTION] Backend Routes 
//http://localhost:4000/users
// Defines the "/users" string to be included for all user routes defined in the "user" route file
// Groups all routes in userRoutes under "/users"
app.use("/users", userRoutes);
//[SECTION] Activity: Add course routes
app.use("/courses", courseRoutes);


/*...*/
```


### 7. Process a POST request at the "/courses" route using postman to create a course.

#### Postman

```json
url: http://localhost:4000/courses
method: POST
body: raw + JSON
    {
       "name": "HTML",
		"description": "Learn the fundamentals of programming",
		"price": 500
    }
```


### 8. Process a GET request at the "/all" route using postman to retrieve all courses.

#### Postman

```json
url: http://localhost:4000/courses/all
method: GET
```