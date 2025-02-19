# Express.js - Booking System API - Exception Handling

Discussion Topic List
- Error Handling
    - Promise.catch()
    - try-catch block
    - Console.error()
- Error Handling Middleware
    - addCourse
- req.params
    - get specific course

Activity Topic List
- Add Error Handling Middleware
    - get all courses
    - get all active
    - check email
    - register
    - login
    - get profile
- Create new routes/controllers
    - update a course
    - archive a course
    - activate a course

## Resources

### References

- [Markdown Basics](https://www.markdownguide.org/basic-syntax)
    
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

### 1. Enhance the "addCourse" function in controller file by sending the error back as a response. 

**[SECTION] Use Promise.catch()**
- Promise-based methods return "Promises" which can be chained with a .catch() method to handle any errors that occur during execution. This method allows you to handle errors in a more declarative way and can make your code more readable.
- Using .catch() is considered a best practice for handling errors within JavaScript Promise blocks. (A Promise in JavaScript represents the eventual completion or failure of an asynchronous operation along with its resulting value.)
- Because .then() operates asynchronously, we utilize .catch() exclusively to handle any errors that may arise from promise resolution.


#### > discussion > controllers > course.js

```js
module.exports.addCourse = (req, res) => {

    let newCourse = new Course({
        /*...*/
    });

    return newCourse.save()
    .then(result => res.send(result))
    // Error handling is done using .catch() to capture any errors that occur during the course save operation.

    // .catch(err => err) captures the error but does not take any action, it's only capturing the error to pass it on to the next .then() or .catch() method in the chain. Postman is waiting for a response to be sent back to it but is not receiving anything.
    // .catch.catch(err => res.send(err)) captures the error and takes action by sending it back to the client/Postman with the use of "res.send"
    .catch(err => res.send(err));

}
```


### 2. Run the request in Postman and intentionally use "nam" for the "name" key for demonstrating an error.

#### Postman

```json
//INT note: try to run the request in Postman both the .catch(err => err) and .catch(err => res.send(err))

Authorization:
    Type: Bearer Token
    Token: <Admin token from login>
url: http://localhost:4000/courses/
method: POST
body: raw + JSON
    {
        "nam": "ReactJS",
        "description": "Make your websites load faster.",
        "price": 10000
    }

//Error should look like this:
"errors": {
    "name": {
        "name": "ValidatorError",
        "message": "Course Name is Required",
        "properties": {
            "message": "Course Name is Required",
            "type": "required",
            "path": "name"
        },
        "kind": "required",
        "path": "name"
    }
},
"_message": "Course validation failed",
"name": "ValidationError",
"message": "Course validation failed: name: Course Name is Required"
```
**IMPORTANT NOTE:**
- Intentionally use "nam" for the "name" key for demonstrating an error. The client will respond with a message: "Error in Variables".

### 3. Add a try-catch block to the "addCourse" method.

#### discussion > controllers > course.js

```js
module.exports.addCourse = (req, res) => {

    try {

        let newCourse = new Course({
            // Intentionally add a wrong request value in the parameter of name
            name : reqBody.name,
            description : req.body.description,
            price : req.body.price
        });

        // Return is used here to end the controller function
        return newCourse.save()
        .then(result => res.send(result))

        // Error handling is done using .catch() to catch any errors that occur during the course save operation.
        .catch(err => res.send(err))

    } catch (err) {

        // An additional try...catch block is added to catch errors that might occur during variable assignments or other synchronous operations.
        res.send("Error in Variables");
    }

}
```

**IMPORTANT NOTE:**
- Upon observing the function's logic, we noticed that error handling is done using .catch() to capture any errors that occur during the course save operation. However, there is no exception handling in place for capturing errors during variable assignments. Given that these operations are synchronous, we can employ a try-catch block to manage errors related to variable assignments.
- In the "Before" version, the error handling using .catch() is appropriate for handling promises and asynchronous operations.
- The "After" version adds a try...catch block but doesn't cover asynchronous operations (e.g. the save() method). This can lead to unhandled promise rejections if an error occurs during the asynchronous operation.
- It's essential to handle both synchronous and asynchronous errors effectively to ensure robust error handling in your application.
- Depending on your use case, you might need to combine both approaches to handle both synchronous and asynchronous errors appropriately. Always ensure that you're catching and handling errors at the right level in your code.


### 4. Process a POST request to the "/courses/" route in Postman to demonstrate the result of try-catch block.

#### Postman

```json
Authorization:
    Type: Bearer Token
    Token: <Admin token from login>
url: http://localhost:4000/courses/
method: POST
body: raw + JSON
    {
        "nam": "JavaScript",
        "description": "Make your page interactive!",
        "price": 5000
    }  
```

**IMPORTANT NOTE:**
- Intentionally use "nam" for the "name" key for demonstrating an error. The client will respond with a message: "Error in Variables".



### 5. Update the "addCourse" method to demonstrate the use of "console.error".

#### discussion > controllers > course.js

```js
/*...*/

module.exports.addCourse = (req, res) => {

    try {
        /*...*/
    } catch (err) {
        // This will only be displayed in terminal
        console.log("result of console.error:")
        console.error(err);

        //In a development or debugging context, sending the actual error object might be useful, but in a production environment, it's better to provide a user-friendly and secure error response. 

	    //In practice, you would tailor your error handling based on your application's requirements, security considerations, and the level of detail you want to expose to clients.

        /*
        Use console.error when:

				- You want to log the error for debugging and monitoring purposes, especially in production environments.
				- You need to log additional information or stack traces that can aid in debugging.
				- The information is not suitable or safe to be exposed to end-users.

        The practice of separating console logging for developers and sending clear, user-friendly error messages to clients is a good approach for handling errors in an Express.js controller.
        */

        // This will be the response to the client
        res.send("Error in Variables");
    }
}

/*...*/
```

**IMPORTANT NOTE:**
- Replicate the error by sending a Postman request to observe each error handling response.
- We can log the errors to the console for better debugging and error tracking by using console.error().
- Though both console.log() and console.error() provide the same information, console.error() provides a better visual cue to developers to spot errors both in code and in the console. console.error() is displayed in a browser's log with a red warning and text while console.log() prints the error as plain text in the browser's inspect tool and is commonly used for general purpose logging.
- Use console.error when:
    - You want to log the error for debugging and monitoring purposes, especially in production environments.
    - You need to log additional information or stack traces that can aid in debugging.


### 6. Remove the "try-catch" block from the "addCourse" method in the "course" controller.

**IMPORTANT NOTE:**
- Alternatively, you may comment out the whole "addCourse" method and add the code above to keep notes for the students for the try-catch block.

### [SECTION] Error Handling Middleware

- In complex applications, handling errors in each individual route or function can be cumbersome and repetitive. To streamline error management, we can employ Error Handling Middleware.
- Error Handling Middleware acts as a centralized mechanism to intercept and manage errors across the application. By defining error-handling logic in a single middleware function, we can ensure consistent error responses and simplify code maintenance.
- With Error Handling Middleware, developers can focus on implementing business logic in route handlers, while the middleware handles error processing, logging, and response generation. This approach improves code organization, enhances maintainability, and promotes consistency in error handling throughout the application.

### Add Error Handling Middleware

#### discussion > auth.js

```js
//[SECTION] Verify Admin
/*...*/


// [SECTION] Error Handler
module.exports.errorHandler = (err, req, res, next) => {
    // Log the error
    console.error(err);

    // if the error object contains a message property, we use it as the error message; otherwise, we default to 'Internal Server Error'.
    // || -> It ensures that default values are used in such cases, providing a fallback mechanism for error handling.
    const errorMessage = err.message || 'Internal Server Error';

    // Send a standardized error response
    //We construct a standardized error response JSON object with the appropriate error message, status code, error code, and any additional details provided in the error object.
    res.json({
        error: {
            message: errorMessage,
            errorCode: err.code || 'SERVER_ERROR',
            details: err.details || null
        }
    });
};
```

### 7. Add the Error Handling Middleware to the "addCourse" method in the "course" controller.

#### discussion > controllers > course.js

```js
/*...*/
const { errorHandler } = require('../auth');


module.exports.addCourse = (req, res) => {

    let newCourse = new Course({
        name : req.body.name,
        description : req.body.description,
        price : req.body.price
    });

    return newCourse.save()
    .then(result => res.send(result))
    .catch(error => errorHandler(error, req, res)); // Use the errorHandler middleware

};

/*...*/
```

**IMPORTANT NOTE:**
- In this setup, the addCourse controller function in course.js catches any errors that occur during the save operation and passes them to the errorHandler middleware imported from auth.js. This ensures that any errors are handled consistently across your application. Remember to adjust the error handling logic in the errorHandler middleware according to your specific requirements.

### 8. Let's update the get specific course with the use of req.params to get the course ID, then add the Error Handline Middleware.

#### discussion > routes > course.js

```js
/*...*/

//If the intention is to retrieve data (e.g., getting a course by ID), it should typically use the GET method so let's change our to GET.
// "/specific/:id": This is the route path for the GET request. 
//It consists of a string literal /specific/ followed by a route parameter :id. 
//Route parameters are denoted by a colon (:) followed by a parameter name. 
//In this case, :id represents a placeholder for the unique identifier of the specific resource being targeted by the request. This allows the route handler to handle requests targeting different resources based on their unique identifiers.
router.get("/specific/:id", courseController.getCourse);

/*...*/
```

### 9. Use the req.params in getting the course ID and add the Error Handling Middleware.

#### discussion > controllers > course.js

```js
module.exports.getCourse = (req, res) => {

    // req.params.id is used to access the value of the id route parameter extracted from the URL. (/specific/:id)
    Course.findById(req.params.id)
    .then(course => res.send(course))
    .catch(error => errorHandler(error, req, res));
    
};
```

### 10. Process postman requests to check if the route works properly after modifying the respective controller.

#### Postman

```json
// Retrieve a specific course
url: http://localhost:4000/courses/specific/:id
method: GET
```

IMPORTANT NOTE:
- Get the value of courseId in the url parameter from the MongoDB or from other Postman requests like get all courses or get all active courses.



## Activity

### Activity References

- [Error Handling Middleware](https://medium.com/@arunchaitanya/understanding-normal-middleware-and-error-handling-middleware-in-express-js-d3ecbd9b9849)
- [Routing - Route Parameters](https://expressjs.com/en/guide/routing.html#route-parameters)
- [findByIdAndUpdate](https://mongoosejs.com/docs/tutorials/findoneandupdate.html)

### Activity Instructions
- Type of Activity:
    - Coding
    - GW

#### Instructions

**Member 1:**

1. Update your local sessions git repo, push with the commit message, "Add discussion s45".
2. Add the Error Handling Middleware to the following controllers:
    - get all courses
    - get all active
    - check email
    - register
    - login
    - get profile

**Member 2 & 3:**

3. Create a route "/:courseId" for updating a course using PATCH method. 
    - This route should implement JWT authentication and extract the course ID from the URL. 
    - Note that only administrators are allowed to archive courses.
4. Create a controller method "updateCourse" for updating a course obtaining the course ID from the request params.
    - Create an object containing the data from the request body.
    - Retrieve and update a course using the mongoose "findByIdAndUpdate" method, passing the ID of the record to be updated as the first argument and an object containing the updates to the course.
    - Send a response back to the client with the boolean true if successful.
    - Catch the error and send it to the client as a response.
5. Process a PATCH request at the /:courseId route using postman to update a course


**Member 4:**
6. Create a route "/:courseId/archive" for archiving a course using PATCH method. 
    - Establish a route that exclusively deactivates the course. 
    - This route should implement JWT authentication and extract the course ID from the URL. 
    - Note that only administrators are allowed to archive courses.
7. Create a controller method "archiveCourse" for archiving a course obtaining the course ID from the request params.
    - Soft Delete/Deactivating a course by simply updating the course "isActive" status into "false".
    - Send a response back to the client with the boolean true if successful.
	- Catch the error and send it to the client as a response.
8. Process a PATCH request at the /:courseId/archive route using postman to archive a course.

**Member 5:**

9. Create a route "/:courseId/activate" for activating a course using PATCH method. 
    - Create a route that restores courses that have been deactivated. 
    - This route should implement JWT authentication and extract the course ID from the URL. 
    - Note that only administrators are allowed to activate courses. 
10. Create a controller method "activateCourse" for activating a course obtaining the course ID from the request params.
	- Simply update the course "isActive" status into "true".
    - Send a response back to the client with the boolean true if successful.
	- Catch the error and send it to the client.
11. Process a PATCH request at the /:courseId/activate route using postman to activate a course.

**All members:** 

12. Check out to your own git branch with git checkout -b <branchName>.
13. Update your local sessions git repository and push to git. Commit your changes with a concise, imperative statement describing the change. Example: Added solution for the s45 activity.
14. Add the sessions repo link in Boodle for s45.



#### Activity Solution:

### 1. Add the Error Handling Middleware to the following controllers:

#### discussion > controllers > course.js

```js
/*...*/

//[SECTION] Activity: Retrieve all courses
module.exports.getAllCourses = (req, res) => {

    return Course.find({})
    .then(result => res.send(result))
    .catch(error => errorHandler(error, req, res));

};


//[SECTION] Activity: Retrieve all active courses
module.exports.getAllActive = (req, res) => {

    Course.find({ isActive: true })
    .then(result => res.send(result))
    .catch(error => errorHandler(error, req, res));

};
```

#### discussion > controllers > user.js

```js
/*...*/

//deconstruct errrorHandler from auth
const { errorHandler } = auth;

//[SECTION] Check if the email already exists
module.exports.checkEmailExists = (req, res) => {
    return User.find({ email : req.body.email })
    .then(result => {

        if (result.length > 0) {
            return res.send(true);
        } else {
            return res.send(false);
        };
    })
    .catch(error => errorHandler(error, req, res));
};

//[SECTION] User registration
module.exports.registerUser = (req,res) => {
    let newUser = new User({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        mobileNo : req.body.mobileNo,
        password : bcrypt.hashSync(req.body.password, 10)
    })

    return newUser.save()
    .then((result) => res.send(result))
    .catch(error => errorHandler(error, req, res));
};

//[SECTION] User authentication
module.exports.loginUser = (req, res) => {
    return User.findOne({ email : req.body.email })
    .then(result => {
        if(result == null){
            return res.send(false);
        } else {
            const isPasswordCorrect = bcrypt.compareSync(req.body.password, result.password);
            if (isPasswordCorrect) {
                return res.send({ access : auth.createAccessToken(result)});
            } else {
                return res.send(false);
            }
        }
    })
    .catch(error => errorHandler(error, req, res));
};

//[Section] Activity: Retrieve user details
module.exports.getProfile = (req, res) => {
    return User.findById(req.user.id)
    .then(user => {
        user.password = "";
        res.send(user);
    })
    .catch(error => errorHandler(error, req, res));

};
```


### 2. Create a route "/:courseId" for updating a course using PATCH method. 

#### discussion > routes > course.js

```js
/* ... */

router.post("/specific", courseController.getCourse);

//[SECTION] Route for updating a course (Admin)
router.patch("/:courseId", verify, verifyAdmin, courseController.updateCourse);

module.exports = router;
```

### 3. Create a controller method "updateCourse" for updating a course obtaining the course ID from the request params.

#### discussion > controllers > course.js

```js
/*...*/

module.exports.getCourse = (req, res) => {
    /*...*/
};

//[SECTION] Update a course
/*
    Steps: 
    1. Create an object containing the data from the request body
    2. Retrieve and update a course using the mongoose "findByIdAndUpdate" method, passing the ID of the record to be updated as the first argument and an object containing the updates to the course
    3. Use the "then" method to send a response back to the client appliction based on the result of the "find" method
*/
module.exports.updateCourse = (req, res)=>{

    let updatedCourse = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    }

    // findByIdandUpdate() finds the the document in the db and updates it automatically
    // req.body is used to retrieve data from the request body, commonly through form submission
    // req.params is used to retrieve data from the request parameters or the url
    // req.params.courseId - the id used as the reference to find the document in the db retrieved from the url
    // updatedCourse - the updates to be made in the document
    return Course.findByIdAndUpdate(req.params.courseId, updatedCourse)
    .then(course => {
        if (course) {
            res.send(true);
        } else {
            res.send(false);
        }
    })
    .catch(error => errorHandler(error, req, res));
};
```


### 4. Process a PATCH request at the /:courseId route using postman to update a course

#### Postman

```json
Authorization:
    Type: Bearer Token
    Token: <Admin token from login>
url: http://localhost:4000/courses/:courseId
method: PATCH
body: raw + JSON
    {
        "name": "CSS",
        "description": "Make your websites look cool",
        "price": 2000
    }
```

**IMPORTANT NOTE:**
- Get the value of courseId in the url parameter from the MongoDB or from other Postman requests like get all courses or get all active courses.

### 5. Create a route "/:courseId/archive" for archiving a course using PATCH method. 

#### discussion > routes > course.js

```js
/*...*/

router.patch("/:courseId", verify, verifyAdmin, courseController.updateCourse);

//[SECTION] Activity: Route to archiving a course (Admin)
router.patch("/:courseId/archive", verify, verifyAdmin, courseController.archiveCourse);

module.exports = router
```

**Important Note:**
- A "PATCH" request is used instead of "DELETE" request because of our approach in archiving and hiding the courses from our users by "soft deleting" records instead of "hard deleting" records which removes them permanently from our databases.

### 6. Create a controller method "archiveCourse" for archiving a course obtaining the course ID from the request params.

#### discussion > controllers > course.js

```js
/*...*/

module.exports.updateCourse = (req, res) => {
    /*...*/
};

//[SECTION] Archive a course
/*
    Steps: 
    1. Create an object and with the keys to be updated in the record
    2. Retrieve and update a course using the mongoose "findByIdAndUpdate" method, passing the ID of the record to be updated as the first argument and an object containing the updates to the course
    3. If a course is updated send a response of "true" else send "false"
    4. Use the "then" method to send a response back to the client appliction based on the result of the "findByIdAndUpdate" method
*/
module.exports.archiveCourse = (req, res) => {

    let updateActiveField = {
        isActive: false
    }

    return Course.findByIdAndUpdate(req.params.courseId, updateActiveField)
    .then(course => {
        if (course) {
            res.send(true);
        } else {
            res.send(false);
        }
    })
    .catch(error => errorHandler(error, req, res));
};
```

**Important Note:**
- In managing databases, it's common practice to soft delete our records and what we would implement in the "delete" operation of our application
- The "soft delete" happens here by simply updating the course "isActive" status into "false" which will no longer be displayed in the frontend application whenever all active courses are retrieved
- This allows us access to these records for future use and hides them away from users in our frontend application
// There are instances where hard deleting records is required to maintain the records and clean our databases
- The use of "hard delete" refers to removing records from our database permanently


### 7. Process a PATCH request at the /:courseId/archive route using postman to archive a course.

#### Postman

```json
Authorization:
    Type: Bearer Token
    Token: <Admin token from login>
url: http://localhost:4000/courses/:courseId/archive
method: PATCH
```


### 8. Create a route "/:courseId/activate" for activating a course using PATCH method. 

#### discussion > routes > course.js

```js
/*...*/

router.patch("/:courseId/archive", verify, verifyAdmin, courseController.archiveCourse);

//[SECTION] Activity: Route to activating a course (Admin)
router.patch("/:courseId/activate", verify, verifyAdmin, courseController.activateCourse);

module.exports = router;
```


### 9. Create a controller method "activateCourse" for activating a course obtaining the course ID from the request params.

#### discussion > controllers > course.js

```js
/*...*/

module.exports.archiveCourse = (req, res) => {
    /*...*/
};

//[SECTION] Activate a course
/*
    Steps: 
    1. Create an object and with the keys to be updated in the record
    2. Retrieve and update a course using the mongoose "findByIdAndUpdate" method, passing the ID of the record to be updated as the first argument and an object containing the updates to the course
    3. If the user is an admin, update a course else send a response of "false"
    4. If a course is updated send a response of "true" else send "false"
    5. Use the "then" method to send a response back to the client appliction based on the result of the "findByIdAndUpdate" method
*/
module.exports.activateCourse = (req, res) => {

    let updateActiveField = {
        isActive: true
    }
    
    return Course.findByIdAndUpdate(req.params.courseId, updateActiveField)
    .then(course => {
        if (course) {
            res.send(true);
        } else {
            res.send(false);
        }
    })
    .catch(error => errorHandler(error, req, res));
};
```

### 10. Process a PATCH request at the /:courseId/activate route using postman to activate a course.

#### Postman

```json
Authorization:
    Type: Bearer Token
    Token: <Token from login>
url: http://localhost:4000/courses/:courseId/archive
method: PATCH
```