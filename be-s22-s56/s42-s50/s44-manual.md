# Express.js - Booking System API - Middlewares

Discussion Topic List
- Token Verification
- Handler function vs. Middleware
- Middleware
    - verify
    - verifyAdmin
- routes/controllers 
    - get profile
    - add course

Activity Topic List
- routes/controllers
    - login
    - register
    - check email
    - get all courses
    - get active courses
    - get specific courses


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

### 1. Create a "verify" method in "auth.js" file to verify the validity of the JWT and to decode the given token as needed.

#### discussion > auth.js

```js
/*...*/
module.exports.createAccessToken = (user)=>{
    /*...*/
}

//[SECTION] Token Verification
/*
Analogy
    Receive the gift and open the lock to verify if the the sender is legitimate and the gift was not tampered with
- Verify will be used as a middleware in ExpressJS. Functions added as argument in an expressJS route are considered as middleware and is able to receive the request and response objects as well as the next() function. Middlewares will be further elaborated on later sessions.
*/

module.exports.verify = (req, res, next) => {
    console.log(req.headers.authorization);

    // "req.headers.authorization" contains sensitive data and especially our token
    let token = req.headers.authorization;

    // This if statement will first check if a token variable contains "undefined" or a proper jwt.  we will check token's data type with "typeof", if it is "undefined" we will send a message to the client. Else if it is not, then we return the token.
    if(typeof token === "undefined"){
        return res.send({ auth: "Failed. No Token" });
    } else {
        console.log(token);		
        token = token.slice(7, token.length);
        console.log(token);

        //[SECTION] Token decryption
        /*
        Analogy
            Open the gift and get the content
        - Validate the token using the "verify" method decrypting the token using the secret code.
        - token - the jwt token passed from the request headers.
        - JWT_SECRET_KEY - the secret word from earlier which validates our token.
        - function(err,decodedToken) - err contains the error in verification, decodedToken contains the decoded data within the token after verification
        */
        // "err" is a built-in variable of express to handle errors
        jwt.verify(token, process.env.JWT_SECRET_KEY, function(err, decodedToken){
            
            //If there was an error in verification, an erratic token, a wrong secret within the token, we will send a message to the client.
            if(err){
                return res.send({
                    auth: "Failed",
                    message: err.message
                });

            } else {

                // Contains the data from our token
                console.log("result from verify method:")
                console.log(decodedToken);
                
                // Else, if our token is verified to be correct, then we will update the request and add the user's decoded details.
                req.user = decodedToken;

                // next() is an expressJS function which allows us to move to the next function in the route. It also passes details of the request and response to the next function/middleware.
                next();
            }
        })
    }
};
```


### 2. Update the get details route to include the "verify" method.

### Update the get details route to include the "verify" method. The "verify" method will be added in the middle of our route. This is called a "middleware".

#### discussion > routes > user.js

```js
/*...*/
const userController = require("../controllers/user");
//Import the auth module and deconstruct it to get our verify method.
const { verify } = require("../auth");
const router = express.Router();

/*...*/

router.post("/details", verify, (req, res)=>{

    // Handler function has access to the request object.
    // Handler function should have access to "req.user" data if the the given token to the route is legitimate. This is possible because of the "next" function in the verify function found inside the "auth.js" file.
    console.log("result from details route:")
    console.log(req.user);

    userController.getProfile(req.body).then(resultFromController => res.send(resultFromController));
});

/*...*/
```



### 3. Process a POST request at the "/details" route using postman to retrieve the details of the user.

#### Postman

```json
Authorization:
    Type: Bearer Token
    Token: <Token from login>
url: http://localhost:4000/users/details
method: POST
```

**Important Note:**
- Run this twice. First without a jwt. Second with a jwt.
- Show successful with Token. 
	- Because of next() it should continue to the handler function and log "req.user" in the console.
- Show unsuccessful without token.
	- Should show our message and not continue to our handler function.


### 4. Since we already have access to the req.user in the handler function which already contains the details of the login user, let's simply pass the "req.user.id" to our controller instead of the "req.body".

#### discussion > routes > user.js

```js
/*...*/

router.post("/login", (req, res) => {
    /*...*/
}); 

// Update the method to "get" since we won't be sending data from the request body anymore.
router.get("/details", verify, (req, res)=>{

    // console.log("result from details route:")
    // console.log(req.user);

    userController.getProfile(req.user.id).then(resultFromController => res.send(resultFromController));
}); 

module.exports = router;
```

### 5. Update the "getProfile" controller and receive the "req.user.id" as "userId" parameter.

#### discussion > controllers > user.js

```js
/*...*/

module.exports.loginUser = (reqBody) => {
    /*...*/
};

module.exports.getProfile = (userId) => {

    return User.findById(userId)
    .then(result => {
        result.password = "";
        return result;
    })
    .catch(err => err);

};
```

### 6. Process a GET request at the "/details" route using postman to retrieve the details of the user.

#### Postman

```json
Authorization:
    Type: Bearer Token
    Token: <Token from login>
url: http://localhost:4000/users/details
method: GET
```

### 7. Return to the Google Slides to discuss middlewares.
#### Google Slides


### 8. Update the routes and controllers to add controllers as middleware instead of having a handler function.

### Update the "user" route file to use the "getProfile" controller method as a middleware.

#### discussion > routes > user.js

```js
/*...*/

router.post("/login", (req, res) => {
    /*...*/
}); 

// The "getProfile" controller method is passed as middleware, the controller will have access to the "req" and "res" objects.
// This will also make our code look cleaner and easier to read as our routes no longer deal with logic.
// All business logic will now be handled by the controller.
router.get("/details", verify, userController.getProfile);

module.exports = router;
```

### 9. Update the "user" controller file and the "getProfile" method to handle the "request" and "response" objects as it is now a middleware.

#### discussion > controllers > user.js

```js
/*...*/

// The "getProfile" method now has access to the "req" and "res" objects because of the "next" function in the "verify" method.
module.exports.getProfile = (req,res) => {

    // The "return" keyword ensures the end of the getProfile method.
    // Since getProfile is now used as a middleware it should have access to "req.user" if the "verify" method is used before it.
    // Order of middlewares is important. This is because the "getProfile" method is the "next" function to the "verify" method, it receives the updated request with the user id from it.
    return User.findById(req.user.id)
    .then(user => {
        user.password = "";
        res.send(user);
    })
    .catch(err => err)

};
```

**Important Note:**
- With this, routes now simply handle the activation of the controller.
- Controllers now handle all business logic.
- The controllers now end the cycle as it is now expected to use res.send() and send a response.
- next can be omitted from a middleware/controller if it will not pass the data to another function.
- Controllers as middleware then make our code more readable and modular. Where you can simply add or remove controllers or middleware from a route.

### 10. Create a "verifyAdmin" method that will check if the user trying to access the route is an admin before running the controller.

#### discussion > auth.js

```js
/*...*/

module.exports.verify = (req, res, next) => {
    /*...*/
}

//[SECTION] Verify Admin

// The "verifyAdmin" method will only be used to check if the user is an admin or not.
// The "verify" method should be used before "verifyAdmin" because it is used to check the validity of the jwt. Only when the token has been validated should we check if the user is an admin or not.
// The "verify" method is also the one responsible for updating the "req" object to include the "user" details/decoded token in the request body.
// Being an ExpressJS middleware, it should also be able to receive the next() method.
module.exports.verifyAdmin = (req, res, next) => {

    // console.log() is used to confirm that "req.user" is added if the "verify" method comes first
    // Else, it will be undefined.
    console.log("result from verifyAdmin method");
    console.log(req.user);

}
```

**Important Note:**
- Refer to "references" section of this file to find the documentations for JSON Web Tokens and jsonwebtoken Package.


### 11. Update the create course route to use "verifyAdmin" as middleware.

#### discussion > routes > course.js

```js
/*...*/		
const courseController = require("../controllers/course");
const auth = require("../auth");

// Deconstruct the "auth" module so that we can simply store "verify" and "verifyAdmin" in their variables and reuse it in our routes.
const { verify, verifyAdmin } = auth;

router.post("/", verify, verifyAdmin, (req,res) => {
    /*...*/
});

/*...*/
```


### 12. Trigger the "login" request via postman, copy the jwt and add it in the headers for the postman request to create a course. "verifyAdmin" logs the user in the console.

#### Postman

```json
Authorization:
    Type: Bearer Token
    Token: <Token from login>
url: http://localhost:4000/courses/
method: POST
body:  raw + JSON
    {
        "name": "JavaScript",
        "description": "Make your web pages interactive.",
        "price": 5000
    }
```

**Important Note:**
- The result of this postman request will not resolve and will continue to send a request. This is because the "next" function is not added in the "verifyAdmin" method preventing postman from completing the request, because the "request" object will never be passed on to the "addCourse" controller method.
- You can run 2 postman requests to highlight the importance of middleware orders. First with the "verify" method before the "verifyAdmin" method which results in the user details. The second, with "verifyAdmin" first before "verify" in the middleware chain which results in "undefined".

### 13. Update the "verifyAdmin" method to add an if-else statement for Admin verification.

#### discussion > auth.js

```js
/*...*/

module.exports.verifyAdmin = (req, res, next) => {

    // console.log("result from verifyAdmin method");
    // console.log(req.user);

    // Checks if the owner of the token is an admin.
    if(req.user.isAdmin){
        // If it is, move to the next middleware/controller using next() method.
        next();
    } else {
        // Else, end the request-response cycle by sending the appropriate response and status code.
        return res.status(403).send({
            auth: "Failed",
            message: "Action Forbidden"
        })
    }
}
```

### 14. Process a POST request at the "/courses" route using postman to create a course.

#### Postman

```json
Authorization:
	Type: Bearer Token
	Token: <Token from login>
url: http://localhost:4000/courses/
method: POST
body:  raw + JSON
    {
        "name": "JavaScript",
        "description": "Make your web pages interactive.",
        "price": 5000
    }
```

**Important Note:**
- You can run 2 postman requests first with a regular user and next with an admin.
- For now, you can manually change a user Admin to true in MongoDB.

### 15. Update the "course" route to use controllers as middlewares instead of as a handler function.

### Update the "course" route file to use the "addCourse" controller method as a middleware.

#### discussion > routes > course.js

```js
/*...*/
const courseController = require("../controllers/course");
const auth = require("../auth");

// Deconstruct the "auth" module so that we can simply store "verify" and "verifyAdmin" in their variables and reuse it in our routes.
const {verify, verifyAdmin} = auth;

/*...*/
const router = express.Router();

router.post("/", verify, verifyAdmin, courseController.addCourse);

router.get("/all", (req,res)=>{
    /*...*/
});

/*...*/
```

### 16. Update the "course" controller file and the "addCourse" method to handle the "request" and "response" objects as it is now a middleware.

#### discussion > controllers > course.js

```js
/*...*/

module.exports.addCourse = (req, res) => {

    let newCourse = new Course({
        name : req.body.name,
        description : req.body.description,
        price : req.body.price
    });

    // Return is used here to end the controller function
    return newCourse.save()
    .then(result => res.send(result))
    .catch (err => err);

}
```

### 17. Process a POST request to check if the route works with our controller as middleware.

#### Postman

```json
Authorization:
    Type: Bearer Token
    Token: <Admin token from login>
url: http://localhost:4000/courses/
method: POST
body:  raw + JSON
    {
        "name": "CSS",
        "description": "Create a better design and layout for your website.",
        "price": 1000
    }
```

## Activity

### Activity References
- [ExpressJS Middleware](https://expressjs.com/en/guide/using-middleware.html)

- [Postman Auth Tab](https://learning.postman.com/docs/sending-requests/authorization/specifying-authorization-details/)

### Activity Instructions
- Type of Activity:
    - Coding
    - GW

#### Instructions

##### Member 1:
1. Update your local sessions git repo, push with the commit message, "Add discussion s44".
2. Update the login route and controller to use controller as a middleware.
    - Send the same response messages from the previous activity.
3. Update the register route and controller to use controller as a middleware.
	- This route does not need a token.
    - Send the same response messages from the previous activity.
##### Member 2:
4. Update the check email route and controller to use the controller as a middleware.
	- This route does not need a token.
	- Send the same response messages from the previous activity.
5. Create postman requests for all activity routes. Save and export the postman collection inside the root folder.
##### Member 3:
6. Update the get all courses route and controller to use controller as a middleware.
	- Add the correct middlewares to validate admin-only access
	- Send the same response messages from the previous activity.
##### Member 4:
7. Create a new GET route and controller to get active courses only in the endpoint "/".
	- Make sure to use controller as a middleware.
	- This route does not need a token.
	- Add the controller name as getAllActive
	- Find all active courses.
		- Then, send the courses to the client.
		- Catch the error
##### Member 5:
8. Create a new POST route and controller to retrieve a specific course in the endpoint "/specific".
   - This route does not need a token.
   - Pass the course id request body
   - Make sure to add the controller as a route middleware
   - Add the controller name as getCourse
	- Find the document by its id.
		- Then, send the result to the client as a response.
		- Catch the error.
##### All members:
9. Check out to your own git branch with git checkout -b <branchName>.
10. Update your local sessions git repository and push to git. Commit your changes with a concise, imperative statement describing the change. Example: Added solution for the s44 activity.
11. Add the sessions repo link in Boodle for s44.



#### Activity Solution:


### 1. Update the "user" route file to use the controller methods as a middlewares.

#### discussion > routes > user.js

```js
/*...*/

router.post("/check-email", userController.checkEmailExists);

router.post("/register", userController.registerUser);

router.post("/login", userController.loginUser);

/*...*/
```

### 2. Update the "user" controller file to handle the "request" and "response" objects.

#### discussion > controllers > user.js

```js
/*...*/

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
    .catch(err => err);
};


//[SECTION] User registration
module.exports.registerUser = (req, res) => {
    let newUser = new User({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        mobileNo : req.body.mobileNo,
        password : bcrypt.hashSync(req.body.password, 10)
    })

    return newUser.save()
    .then((result) => res.send(result))
    .catch(err => err)
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
    .catch(err => err);
};

/*...*/
```

### 3. Process postman requests to check if the routes work with our controllers as middlewares.
#### Postman

```json
// Check if email exists
url: http://localhost:4000/users/checkEmail
method: POST
body:  raw + JSON
    {
        "email": "email@gmail.com"
    }

// Register user
url: http://localhost:4000/users/register
method: POST
body:  raw + JSON
    {
        "firstName": "Joe",
        "lastName": "Smith",
        "email": "joe@mail.com",
        "mobileNo": "09123456789",
        "password": "joe1234"
    }

// Login user
url: http://localhost:4000/users/login
method: POST
body:  raw + JSON
    {
        "email": "email@gmail.com",
        "password": "password"
    }
```


### 4. Update the "course" route file to use the controller methods as a middlewares.
#### discussion > routes > course.js

```js
/*...*/

router.post("/", verify, verifyAdmin, courseController.addCourse);

router.get("/all", verify, verifyAdmin, courseController.getAllCourses);

router.get("/", courseController.getAllActive);

router.post("/specific", courseController.getCourse);

module.exports = router;
```

### 5. Update the "user" controller file to handle the "request" and "response" objects.
#### discussion > controllers > user.js

```js
/*...*/

module.exports.addCourse = (req, res) => {
    /*...*/
}; 

module.exports.getAllCourses = (req, res) => {

    return Course.find({})
    .then(result => res.send(result))
    .catch(err => err)

};

//[SECTION] Retrieve all active courses
/*
    Steps: 
    1. Retrieve all courses using the mongoose "find" method with the "isActive" field values equal to "true"
    2. Use the "then" method to send a response back to the client appliction based on the result of the "find" method
*/
module.exports.getAllActive = (req, res) => {

    Course.find({ isActive: true })
    .then(result => res.send(result))
    .catch(err => err);

};

//[SECTION] Retrieve a specific course
/*
    Steps: 
    1. Retrieve a course using the mongoose "findById" method
    2. Use the "then" method to send a response back to the client appliction based on the result of the "find" method
*/
module.exports.getCourse = (req, res) => {

    Course.findById(req.body.id)
    .then(course => res.send(course))
    .catch(err => err);
    
};
```

### 6. Process postman requests to check if the routes work with our controllers as middlewares.

#### Postman

```json
// Retrieve all courses
Authorization:
    Type: Bearer Token
    Token: <Admin token from login>
url: http://localhost:4000/courses/all
method: GET


// Get all active courses
url: http://localhost:4000/courses/
method: GET


// Retrieve a specific course
url: http://localhost:4000/courses/specific
method: POST
body:  raw + JSON
    {
        "id" : "<Course Id>"
    }
```