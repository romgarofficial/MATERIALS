# Express.js - Booking System API - Introduction to HTTP Status Codes

Discussion Topic List
- HTTP status code  
    - get profile (200)
    - error handler (500)
    - verifyAdmin (403)
    - check email exist (409, 404)
    - enroll a user (403, 201)


Activity Topic List
- HTTP status code update
    - register
    - login
    - add course
    - get all courses
    - get all active courses
    - get specific course
    - update course
    - archive course
    - activate course
- Create new route/controller
    - get enrollments

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

### 1. Add a status code to the "getProfile" course controller method.

### Update the "getProfile" method in the user controllers to demonstrate the use of status codes.

#### discussion > controllers > user.js

```js
 /* ... */

module.exports.getProfile = (req, res) => {
    return User.findById(req.user.id)
    .then(user => {
        user.password = "";
        return res.status(200).send(user);
    })
    .catch(error => errorHandler(error, req, res));
};
```

**IMPORTANT NOTE:**
- The status code of a response is a three-digit integer code that describes the result of the request and the semantics of the response, including whether the request was successful and what content is enclosed (if any). All valid status codes are within the range of 100 to 599, inclusive.
- The first digit of the status code defines the class of response. The last two digits do not have any categorization role. There are five values for the first digit:
    - 1xx (Informational): The request was received, continuing process
    - 2xx (Successful): The request was successfully received, understood, and accepted
    - 3xx (Redirection): Further action needs to be taken in order to complete the request
    - 4xx (Client Error): The request contains bad syntax or cannot be fulfilled
    - 5xx (Server Error): The server failed to fulfill an apparently valid request
- HTTP response status codes indicate whether or not a specific HTTP request has been successfully completed
- For a get request, 200 code refers to successful request, meaning the server processed the request and returned a response back to the client without any errors
- Refer to "references" section of this file to find the documentations for HTTP Status Codes Groups.


### 2. Add a status code to the error handler middleware.

#### discussion > auth.js

```js
/*...*/

// [SECTION] Error Handler
module.exports.errorHandler = (err, req, res, next) => {
    // Log the error
    console.error(err);

    //Add status code 500
    const statusCode = err.status || 500;
    const errorMessage = err.message || 'Internal Server Error';

    // Send a standardized error response
    res.status(statusCode).json({
        error: {
            message: errorMessage,
            errorCode: err.code || 'SERVER_ERROR',
            details: err.details || null
        }
    });
};
```

update the status for verify middleware:

```js

/* ... */

module.exports.verify = (req, res, next) => {
    console.log(req.headers.authorization);

    let token = req.headers.authorization;

    if(typeof token === "undefined"){
        return res.send({ auth: "Failed. No Token" });
    } else {
        console.log(token);		
        token = token.slice(7, token.length);
        console.log(token);

        jwt.verify(token, process.env.JWT_SECRET_KEY, function(err, decodedToken){
            
            if(err){
                return res.status(403).send({
                    auth: "Failed",
                    message: err.message
                });

            } else {

                console.log("result from verify method:")
                console.log(decodedToken);

                req.user = decodedToken;

                next();
            }
        })
    }
};

```

update the status of verifyAdmin middleware:

```js
/*...*/

//[SECTION] Verify Admin
module.exports.verifyAdmin = (req, res, next) => {
    // console.log("result from verifyAdmin method");
    // console.log(req.user);
    if(req.user.isAdmin){
        next();
    } else {
        return res.status(403).send({
            auth: "Failed",
            message: "Action Forbidden"
        })
    }
}

// [SECTION] Error Handler
/*...*/
```

 **IMPORTANT NOTE:**
 - Since we update the Error Hanlder in the auth controller, the status code now for .catch will be 500 and have a standardized error message.
 - 500 http status refers to an internal server error which means that the request is valid, but an error occured in sending the response e.g. database issues, server-side codes, or server problems


### 3. Process a GET request at the "/details" route using postman to retrieve the user details.

#### Postman

```json
Authorization:
    Type: Bearer Token
    Token: <Token from login>
url: http://localhost:4000/users/details
method: GET
```

### 4. Add a status code to the "checkEmailExists" user controller method.

### Mini-activity Instructions:
*INT note: Let the student add a status code to the "checkEmailExists" user controller method as a recitation*

- Update the "checkEmailExists" to add status codes
    - if there is a duplicate email, send true with 409 http status back to the client
    - if there is no duplicate email, send false with 404 http status back to the client
    - if an error occured in the .catch(), send the error with the 500 http status back to the client

#### discussion > controllers > user.js

```js
/* ... */

module.exports.checkEmailExists = (req, res) => {

    /* ... */
    .then(result => {

        if (result.length > 0) {
            // If there is a duplicate email, send true with 409 http status back to the client
            return res.status(409).send(true);
        } else {
            // If there is no duplicate email, send false with 404 http status back to the client
            return res.status(404).send(false);
        };
    })
    .catch(error => errorHandler(error, req, res));

};
```

**IMPORTANT NOTE:**
- 409 is the http status code for duplicate record which is used when there is another resource with the same data in the request (e.g. email/accounts)
- 404 http status code refers to documents or resources that are not found e.g. pages in the website or documents in the databases
- Refer to "references" section of this file to find the documentations for HTTP Status Codes Groups.

### 5. Process a GET request at the "/checkEmail" route using postman to retrieve the user details

#### Postman

```json
url: http://localhost:4000/users/checkEmail
method: GET
body: raw + JSON
    {
        "email" : "user@gmail.com"
    }
```

**IMPORTANT NOTE:**
- try to compare the status code before and after.


### 6. Create a route and controller method for enrolling a user.

### Create an "/enroll" route in user routes to enroll a user to a course.

#### discussion > routes > user.js

```js
/* ... */

router.get("/details", verify, userController.getProfile);

//[SECTION] Route to enroll user to a course
router.post('/enroll', verify, userController.enroll);

module.exports = router; 
```

### 7. Create an "enroll" user method for the users to enroll to a course.

#### discussion > controllers > user.js

```js
//[SECTION] Dependencies and Modules
const bcrypt = require('bcrypt');
const User = require("../models/User");
//add the enrollment model
const Enrollment = require("../models/Enrollment");


/* ... */
module.exports.getProfile = (req, res) => {
    /* ... */
}

//[SECTION] Enroll a user to a course
/*
    Steps:
    1. Retrieve the user's id
    2. Change the password to an empty string to hide the password
    3. Return the updated user record
*/
module.exports.enroll = (req, res) => {

    // The user's id from the decoded token after verify()
    console.log(req.user.id);
    // The course from our request body
    console.log(req.body.enrolledCourses) ;

    // Process stops here and sends response IF user is an admin
    if(req.user.isAdmin){
        // Admins should not be allowed to enroll to a course, so we need the "verify" to check the req.user.isAdmin
        return res.status(403).send(false);
    }

    let newEnrollment = new Enrollment ({
        // Adds the id of the logged in user from the decoded token
        userId : req.user.id,
        // Gets the courseIds from the request body
        enrolledCourses: req.body.enrolledCourses,
        totalPrice: req.body.totalPrice
    })

    return newEnrollment.save()
    .then(enrolled => {
        return res.status(201).send(true);
    })
    .catch(error => errorHandler(error, req, res));
    
}
```

**IMPORTANT NOTE:**
- 403 http status code refers to unauthorized access. this is used mostly for features of a page that requires an admin/non-admin only users.
- 201 is used instead of 200 since a new record is created in the database in enrolling to a course.
- 500 http status code refers to an internal server error which means that the request is valid, but an error occured in sending the response e.g. database issues, server-side codes, or server problems
- if there are errors in logging in, send 500 http status code

### 8. Process a POST request at the "/enroll" route using postman to enroll a user to courses.

#### Postman

```json
Authorization:
    Type: Bearer Token
    Token: <Non-admin token from login>
url: http://localhost:4000/users/enroll
method: POST
body:  raw + JSON
    {
        "enrolledCourses" : [
            {
                "courseId": "<courseId>"
            },
            {
                "courseId": "<courseId>"
            }
        ],
        "totalPrice": "<Total price of courses>"
    }
```


## Activity

### Activity References
```
Developer's Note:
Include references to aid bootcampers in research and activity development.
```
Sample:
- [HTTP Methods](https://httpwg.org/specs/rfc9110.html#status.codes)
        
### Activity Instructions
- Type of Activity:
    - Coding
    - GW

#### Instructions

**Member 1:**

1. Update your local sessions git repo, push with the commit message, "Add discussion s46".

2. Update the register user controller to use the appropriate HTTP status codes.
3. Update the login user controller to use the appropriate HTTP status codes.
4. Reprocess the requests to check if the status codes are correctly integrated in the response.


**Member 2:**
5. Update the add course controller to use the appropriate HTTP status codes.
6. Update the get all courses controller to use the appropriate HTTP status codes.
7. Reprocess the requests to check if the status codes are correctly integrated in the response.


**Member 3:**
8. Update the get all active controller to use the appropriate HTTP status codes.
9. Update the get specific course controller to use the appropriate HTTP status codes.
10. Update the update course controller to use the appropriate HTTP status codes.
11. Reprocess the requests to check if the status codes are correctly integrated in the response.

**Member 4:**

12. Update the archive course controller to use the appropriate HTTP status codes.
13. Update the activate course controller to use the appropriate HTTP status codes.
14. Reprocess the requests to check if the status codes are correctly integrated in the response.


**Member 5:**
15. Create a route "/get-enrollments" for getting the enrollments of the logged in user using GET method.
    - Apply the verify middleware to test if a user is logged in.
    - Provide the token of a non admin user to test if the route works.
16. Create a controller method "getEnrollments()" for getting the users enrolled course.
    - Look for the user document in the database
    - If there are no results found, return false
    - If there is a document found, return the "enrollments" array in the object
    - Send the appropriate http status code for each possible response.
    - Catch the error and send it to the client as a response.
17. Process a GET request at the "/get-enrollments" route using postman to get user enrollments array

**All members:**
18. Check out to your own git branch with git checkout -b <branchName>.
19. Update your local sessions git repository and push to git. Commit your changes with a concise, imperative statement describing the change. Example: Added solution for the s46 activity.
20. Add the sessions repo link in Boodle for s46.




#### Activity Solution:

### 1. Update the user controllers to use the appropriate HTTP status codes.
#### discussion > controllers > user.js

```js
/* ... */
//[SECTION] User registration
module.exports.registerUser = (req,res) => {

    /* ... */

    return newUser.save()
    // Sends 201 http status code if the registration is successful
    .then((result) => res.status(201).send(result))
    .catch(error => errorHandler(error, req, res));
}

/* ... */
```

**IMPORTANT NOTE:**
- 201 is used instead of 200 since a new record is created in the database in registering a new account.
- 200 would be valid as well, but for more clarity, 201 is used to highlight a new document creation.
- 500 http status refers to an internal server error which means that the request is valid, but an error occured in sending the response e.g. database issues, server-side codes, or server problems
- Refer to "references" section of this file to find the documentations for HTTP Status Codes Groups.

```js
//[SECTION] User authentication

module.exports.loginUser = (req, res) => {
    return User.findOne({ email : req.body.email })
    .then(result => {
        if(result == null){
            // Send status 404
            return res.status(404).send(false);
        } else {
            const isPasswordCorrect = bcrypt.compareSync(req.body.password, result.password);
            if (isPasswordCorrect) {

                //Send status 201
                return res.status(201).send({ access : auth.createAccessToken(result)})
            } else {

                //Send status 401
                return res.status(401).send(false);
            }
        }
    })
    .catch(error => errorHandler(error, req, res));
};
```

**IMPORTANT NOTE:**
- unlike register, sending 200 is more appropriate upon successful logging in since we're just looking for a document in the database and match it with the credentials sent from the request body.
- 404 http status code refers to documents or resources that are not found e.g. pages in the website or documents in the database
- 401 http status code refers to unauthorized access. this is used mostly if the credentials provided in the request body do not match the document found in the database
- 500 http status refers to an internal server error which means that the request is valid, but an error occured in sending the response e.g. database issues, server-side codes, or server problems
- If there are errors in logging in, send 500 http status code


### 2. Update the course controllers to use the appropriate HTTP status codes.
#### discussion > controllers > course.js

```js
//[SECTION] Activity: Add a course
module.exports.addCourse = (req, res) => {

    /*...*/

    return newCourse.save()
    //add status 201
    .then(result => res.status(201).send(result))
    .catch(error => errorHandler(error, req, res));

};


//[SECTION] Activity: Retrieve all courses
module.exports.getAllCourses = (req, res) => {

    return Course.find({})
    //add status 200
    .then(result => res.status(200).send(result))
    .catch(error => errorHandler(error, req, res));

};

//[SECTION] Activity: Retrieve all active courses
module.exports.getAllActive = (req, res) => {

    Course.find({ isActive: true })
    //add status 200
    .then(course => res.status(200).send(course))
    .catch(error => errorHandler(error, req, res));

};


//[SECTION] Activity: Retrieve a specific course
module.exports.getCourse = (req, res) => {

    Course.findById(req.params.courseId)
    //add status 200
    .then(course => res.status(200).send(course))
    .catch(error => errorHandler(error, req, res));
    
};


//[SECTION] Activity: Update a course
module.exports.updateCourse = (req, res)=>{

    /*...*/

    return Course.findByIdAndUpdate(req.params.courseId, updatedCourse)
    .then(course => {
        if (course) {
            //add status 200
            res.status(200).send(true);
        } else {
            // add status 404
            res.status(404).send(false);
        }
    })
    .catch(error => errorHandler(error, req, res));
};


//[SECTION] Activity: Archive a course
module.exports.archiveCourse = (req, res) => {

    /* ... */

    return Course.findByIdAndUpdate(req.params.courseId, updateActiveField)
    .then(course => {
        if (course) {
            //add status 200
            res.status(200).send(true);
        } else {
            //add status 400
            res.status(400).send(false);
        }
    })
    .catch(error => errorHandler(error, req, res));
};

//[SECTION] Activity: Activate a course
module.exports.activateCourse = (req, res) => {

    /* ... */
    
    return Course.findByIdAndUpdate(req.params.courseId, updateActiveField)
    .then(course => {
        if (course) {
            //add status 200
            res.status(200).send(true);
        } else {
            //add status 400
            res.status(400).send(false);
        }
    })
    .catch(error => errorHandler(error, req, res));
};

```


### 3. Process a request using postman. 

#### Postman


### 4. Create a route "/getEnrollments" for getting the enrollments of the logged in user using GET method.

#### discussion > routes > user.js

```js
/*...*/

router.post('/enroll', verify, userController.enroll);

//[SECTION] Activity: Route to get the user's enrollements array
router.get('/get-enrollments', verify, userController.getEnrollments);

module.exports = router;
```

    
### 5. Create a controller method "getEnrollments()" for getting the users enrolled course.

#### discussion > controllers > user.js

```js
const bcrypt = require('bcrypt');
const User = require("../models/User");
const Enrollment = require("../models/Enrollment");

/*...*/

module.exports.enroll = (req, res) => {
    /* ... */
}

//[SECTION] Activity: Get enrollments
/*
    Steps:
    1. Use the mongoose method "find" to retrieve all enrollments for the logged in user
    2. If no enrollments are found, return a 404 error. Else return a 200 status and the enrollment record
*/
module.exports.getEnrollments = (req, res) => {
    return Enrollment.find({userId : req.user.id})
        .then(enrollments => {
            if (enrollments.length > 0) {
                return res.status(200).send(enrollments);
            }
            return res.status(404).send(false);
        })
        .catch(error => errorHandler(error, req, res));
};
```
   
### 6. Process a PUT request at the "/getEnrollments" route using postman to get user enrollments array

#### Postman

```json
Authorization:
    Type: Bearer Token
    Token: <Non-admin token from login>
url: http://localhost:4000/users/get-enrollments
method: GET
```