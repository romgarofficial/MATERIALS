# Express.js - Booking System API - Validations

Discussion Topic List
- Adding Validations
    - checkEmailExists
    - login
    - add course
    - get all active courses

Activity Topic List
- Add Validations
    - register user
    - get all courses
    - get specific course
    - archive course
    - activate course



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

### 1. Update the "checkEmailExists" controller function to demostrate the use of data validation

#### discussion > controllers > user.js

```js
/* ... */
const auth = require("../auth");

module.exports.checkEmailExists = (req, res) => {

    if(req.body.email.includes("@")){
        return User.find({ email : req.body.email })
        .then(result => {

            if (result.length > 0) {
                return res.status(409).send(true);
            } else {
                return res.status(404).send(false);
            };
        })
        .catch(error => errorHandler(error, req, res));
    } else{
        res.status(400).send(false)
    }
};
```
IMPORTANT NOTE
- What happens in the user’s browser when running the frontend code we’ve developed is beyond our control. The browser is a black box that, at some point, after the user has interacted with our code, might send us back a piece of data that our application cannot process. There is no guarantee that the data has provided is what we need.
- We can only validate the data coming from users to check if our backend received the information it is intended to receive.
- We have done validations in the earlier stages of our API development. 
- That validation is the schema-level validation wherein we are checking if the data to be stored in our database is aligned with the properties of the models we have set for a collection e.g. User, Course, and Order models
- 409 HTTP Status Code refers to duplicate record which means that there is a duplicate document found in the database
- Usually, true/false response is doesn't test the application response. However, for better communication to the client, it's better to send specific messages to validate whether or not the data received needs correction. This will be discussed further in the next session
- Refer to "references" section of this file to find the documentations for JavaScript includes Method.


### 2. Process a POST request at the "/checkEmail" route using Postman to check for duplicate emails using an incorrect email format.

#### Postman

```json
url: http://localhost:4000/users/checkEmail
method: POST
body: raw + JSON
    {
        "email": "john.mail.com"
    }
```
**IMPORTANT NOTE:**
- this is a simple function to check if the backend application reeives the necessary data from the request body.
- Refer to the references section for the ".includes()" method documentation.

### 3. Update the "loginUser" to simulate the data validation whether the user authentication succeeds or fails

#### discussion > controllers > user.js

```js
/*...*/

module.exports.registerUser = (req, res) => {
    /*...*/
};

/*...*/

module.exports.loginUser = (req, res) => {

    if(req.body.email.includes("@")){
        return User.findOne({ email : req.body.email })
        .then(result => {
            if(result == null){
                // Send status 404
                return res.status(404).send(false);
            } else {
                const isPasswordCorrect = bcrypt.compareSync(req.body.password, result.password);
                if (isPasswordCorrect) {

                    //Send status 200
                    return res.status(200).send({ access : auth.createAccessToken(result)})
                } else {

                    //Send status 401
                    return res.status(401).send(false);
                }
            }
        })
        .catch(error => errorHandler(error, req, res));
    } else{
        return res.status(400).send(false)
    }
};

/*...*/
```

### 4. Process a POST request at the "/login" route using Postman to authenticate a user using incorrect credentials.

#### Postman

```json
// Incorrect email
url: http://localhost:4000/users/login
method: POST
body: raw + JSON
    {
        "email": "john.mail.com",
        "password": "john1234"
    }

// Incorrect password
url: http://localhost:4000/users/login
method: POST
body: raw + JSON
    {
        "email": "john@mail.com",
        "password": "john123333"
    }
```

### 5. Update the "addCourse" controller function to validate the data sent from receieved from the request body

#### discussion > controllers > course.js

```js
/*...*/

//[SECTION] Activity: Create a course
module.exports.addCourse = (req, res) => {

    let newCourse = new Course({
        name : req.body.name,
        description : req.body.description,
        price : req.body.price
    });

    //[SECTION] Activity: Validate if course already exists
    //Check if course exists using the findOne() method
    Course.findOne({ name: req.body.name })
    .then(existingCourse => {
        //if existing course return true
        if (existingCourse) {
            return res.status(409).send(true);
        } else{
            //if not duplicate, save the course
            return newCourse.save()
            .then(result => res.status(201).send(result))
            .catch(error => errorHandler(error, req, res));
        }
    }).catch(error => errorHandler(error, req, res));
};
```

**IMPORTANT NOTE:**
- Sending specific messages will help minimize confusion and make it clearer as to the needed correction in the request, if needed.

### 6. Process a POST request at the "/courses/" route using Postman to create a duplicate course.

#### Postman

```json
//Add a course first
Authorization:
Type: Bearer Token
Token: <Admin token from login>
url: http://localhost:4000/courses/:courseId
method: POST
body: raw + JSON
{
    "name": "JavaScript",
    "description": "Make your page interactive!",
    "price": 5000
}

//Then retry to send the same body request to check for duplicate
```

**IMPORTANT NOTE:**
- Validation does not only work on checking if the format of document correct such as the email. It can also be used in saving object to the database. 
- In this case, it is used to check if the course alredy exists and if the user is an admin to access the addCourse functionality.

### 7. Update the "getAllActive" course controller function. Check if the request finds any course that has "true" value for the "isActive" property in the database. if it does, send the result, if it doesn't, send false

#### discussion > controllers > course.js

```js
/*...*/

module.exports.getAllActive = (req, res) => {

    Course.find({ isActive : true }).then(result => {
        // if the result is not null
        if (result.length > 0){
            // send the result as a response
            return res.status(200).send(result);
        }
        // if there are no results found
        else {
            // send the message as the response
            return res.status(404).send(false)
        }
    }).catch(err => res.status(500).send(err));

};

/*...*/
```
**IMPORTANT NOTE:**
- If time permits, make this miniactivity instead of code along.

### 8. Process a GET request at the "/courses/" route using Postman to retrieve all active courses. Archive all courses to return the 404 error.

#### Postman

```json
url: http://localhost:4000/courses/
method: GET
```


## Activity
### Activity References

Sample:
- [mongoose.isValidObjectId(](https://mongoosejs.com/docs/api/mongoose.html#Mongoose.prototype.isValidObjectId())

### Activity Instructions
- Type of Activity:
    - Coding
    - GW

#### Instructions

**Member 1:**

1. Update your local sessions git repo, push with the commit message, "Add discussion s47"

2. Refactor the "registerUser" controller to validate the following: 
    - if the mobileNo. is not composed of exactly 11 characters, send a return false
    - if the email format in the "newUser" object passed does not include "@", send a  return value of false
    - the password in the "newUser" object is composed of less than 8 characters, send a response false
    - If the data is not valid, send the message false
3. Process a postman request to test the route.


**Member 2:**

4. Refactor the getAllCourses controller function to add validation.
    - if no courses available, return a 404 status code with a boolean false.
    - if courses available, return the courses.
5. Process a postman request to test the route.


**Member 3:**

6. Refactor the getCourse controller function to add validation.
    - If no course found, return a 404 status code with a boolean false.
    - If course found, return the course
7. Process a postman request to test the route.


**Member 4:**

8. Update the archiveCourse controller function to add validation.
    - Check if a course was found
    - If course found, check if it was already archived
    - If course already archived, return a 200 status with a message indicating "Course already archived".
    - If course not archived, return a 200 status with a boolean true.
    - If course not found, return a 404 status with a boolean false.
9. Process a postman request to test the route.


**Member 5:**

10. Update the activateCourse controller function to add validation.
    - Check if a course was found
    - If course found, check if it was already activated
    - If course already activated, return a 200 status with a message indicating "Course already activated".
    - If course not activated, return a 200 status with a boolean true.
    - If course not found, return a 404 status with a boolean false.
11. Process a postman request to test the route.


**All members:**

12. Check out to your own git branch with git checkout -b <branchName>.
13. Update your local sessions git repository and push to git. Commit your changes with a concise, imperative statement describing the change. Example: Added solution for the s47 activity.
14. Add the sessions repo link in Boodle for s47.


#### Activity Solution:

### 1. Refactor the "registerUser" controller

#### discussion > controllers > user.js

```js
/*...*/

module.exports.registerUser = (req, res) => {

    // Checks if the email is in the right format
    if (!req.body.email.includes("@")){
        return res.status(400).send(false);
    }
    // Checks if the mobile number has the correct number of characters
    else if (req.body.mobileNo.length !== 11){
        return res.status(400).send(false);
    }
    // Checks if the password has atleast 8 characters
    else if (req.body.password.length < 8) {
        return res.status(400).send(false);
    // If all needed requirements are achieved
    } else {
        let newUser = new User({
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            email : req.body.email,
            mobileNo : req.body.mobileNo,
            password : bcrypt.hashSync(req.body.password, 10)
        })

        return newUser.save()
        .then((result) => res.status(201).send(result))
        .catch(error => errorHandler(error, req, res));
    }
};

/*...*/
```


### 2. Process a POST request at the "/register" route using Postman to register a user with incorrect credentials.

#### Postman

```json
// Incorrect email
url: http://localhost:4000/users/register
method: POST
body: raw + JSON
    {
        "firstName": "Joe",
        "lastName": "Smith",
        "email": "joe.mail.com",
        "mobileNo": "09123456789",
        "password": "joe12345"
    }

// Incorrect mobile number
url: http://localhost:4000/users/register
method: POST
body: raw + JSON
    {
        "firstName": "Joe",
        "lastName": "Smith",
        "email": "joe@mail.com",
        "mobileNo": "0912345678",
        "password": "joe12345"
    }

// Incorrect password
url: http://localhost:4000/users/register
method: POST
body: raw + JSON
    {
        "firstName": "Joe",
        "lastName": "Smith",
        "email": "joe@mail.com",
        "mobileNo": "09123456789",
        "password": "joe1234"
    }
```

### 3. Refactor the getAllCourses controller function to add validation.

#### discussion > controllers > course.js

```js
/*...*/

module.exports.getAllCourses = (req, res) => {
    return Course.find({})
    .then(result => {
        // if the result is not null send status 30 and its result
        if(result.length > 0){
            return res.status(200).send(result);
        }
        else{
            // 404 for not found courses
            return res.status(404).send(false);
        }
    })
    .catch(error => errorHandler(error, req, res));
};

/*...*/
```

### 4. Process a GET request at the "/courses/all" route using Postman to retrieve all active courses. Delete all courses to return the 200 error.
    
#### Postman

```json
url: http://localhost:4000/courses/all
method: GET
```


### 5. Refactor the getCourse controller function to add validation.

#### discussion > controllers > course.js

```js
module.exports.getCourse = (req, res) => {
    Course.findById(req.params.id)
    .then(course => {
        if(course) {
            return res.status(200).send(course);
        } else {
            return res.status(404).send(false);
        }
    })
    .catch(error => errorHandler(error, req, res)); 
};
```

### 6. Process a GET request at the "/courses/specific/:id" route using Postman to retrieve all active courses.
    
#### Postman

```json
url: http://localhost:4000/courses/specific/:id
method: GET
```


### 7. Update the archiveCourse controller function to add validation.

#### discussion > controllers > course.js

```js
/*...*/

module.exports.archiveCourse = (req, res) => {
  
    let updateActiveField = {
        isActive: false
    };

    Course.findByIdAndUpdate(req.params.courseId, updateActiveField)
        .then(course => {
            // Check if a course was found
            if (course) {
                // If course found, check if it was already archived
                if (!course.isActive) {
                    // If course already archived, return a 200 status with a message indicating "Course already archived".
                    return res.status(200).send('Course already archived');
                }
                // If course not archived, return a 200 status with a boolean true.
                return res.status(200).send(true);
            } else {
                // If course not found, return a 404 status with a boolean false.
                return res.status(404).send(false);
            }
        })
        .catch(error => errorHandler(error, req, res));
};

/*...*/
```


### 8. Process a PATCH request at the "/:courseId/archive" route using Postman to retrieve all active courses. 
    
#### Postman

```json
// To test successful course archive
Authorization:
    Type: Bearer Token
    Token: <Admin token from login>
url: http://localhost:4000/courses/:courseId/archive
method: PATCH

// To test if a course already archived
Authorization:
    Type: Bearer Token
    Token: <Non-admin token from login>
url: http://localhost:4000/courses/:courseId/archive
method: PATCH

// To test if course not found
Authorization:
    Type: Bearer Token
    Token: <Admin token from login>
url: http://localhost:4000/courses/1/archive
method: PATCH
```

### 9. Update the "activateCourse" controller method to simulate the use of validation.

#### discussion > controllers > course.js

```js
/*...*/

module.exports.activateCourse = (req, res) => {
  
    let updateActiveField = {
        isActive: true
    }

    Course.findByIdAndUpdate(req.params.courseId, updateActiveField)
        .then(course => {
            // Check if a course was found
            if (course) {
                // If course found, check if it was already activated
                if (course.isActive) {
                    // If course already activated, return a 200 status with a message indicating "Course already activated".
                    return res.status(200).send('Course already activated');
                }
                // If course not yet activated, return a 200 status with a boolean true.
                return res.status(200).send(true);
            } else {
                // If course not found, return a 404 status with a boolean false.
                return res.status(404).send(false);
            }
        })
        .catch(error => errorHandler(error, req, res));
};

/*...*/
```

### 10. Process a PATCH request at the "/:courseId/archive" route using Postman to retrieve all active courses. 
    
#### Postman

```json
// To test successful course activated
Authorization:
    Type: Bearer Token
    Token: <Admin token from login>
url: http://localhost:4000/courses/:courseId/archive
method: PATCH

// To test if a course already activated
Authorization:
    Type: Bearer Token
    Token: <Non-admin token from login>
url: http://localhost:4000/courses/:courseId/archive
method: PATCH

// To test if course not found
Authorization:
    Type: Bearer Token
    Token: <Admin token from login>
url: http://localhost:4000/courses/1/archive
method: PATCH
```