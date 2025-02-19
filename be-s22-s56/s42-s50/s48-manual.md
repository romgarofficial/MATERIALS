# Express.js - Booking System API - RESTful Response

Discussion Topic List
- Adding meaningful RESTful responses
    - addCourse
    - getAllCourses
    - checkEmailExists

Activity Topic List
- Add meaningful RESTful responses
    - course controller
        - getAllActive
        - getCourse
        - updateCourse
        - archiveCourse
        - activateCourse
    - user controller 
        - register
        - loginUser
        - getProfile
        - enroll
        - getEnrollments


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

## Introduction

- In building a robust Booking System API with Express.js, ensuring that responses adhere to RESTful principles is crucial for effective communication between the server and client applications. 
- A RESTful response follows a standardized structure and status codes, providing clear feedback to the client about the success or failure of their requests. 
- In this context, we'll explore how to design and implement RESTful responses in our Booking System API using Express.js, ensuring consistency, clarity, and reliability in our communication protocols.

### 1. Update the "addCourse" controller method within controllers and implement a meaningful RESTful response.

#### rootFolder > controllers > course.js

```js
/* ... */

module.exports.addCourse = (req, res) => {

    let newCourse = new Course({
        name : req.body.name,
        description : req.body.description,
        price : req.body.price
    });

    //[SECTION] Activity: Validate if course already exists
    Course.findOne({ name: req.body.name })
    .then(existingCourse => {
        if (existingCourse) {
            // Sent { message: 'Course already exists' }
		    
            // Notice that we didn't response directly in string, instead we added an object with a value of a string. This is a proper response from API to Client. Direct string will only cause an error when connecting it to your frontend.
		    
            // using res.send({ key: value }) is a common and appropriate way to structure a response from an API to the client. This approach allows you to send structured data back to the client in the form of a JSON object, where "key" represents a specific piece of data or a property, and "value" is the corresponding value associated with that key.
            return res.status(409).send({ message: 'Course already exists' });
        } else{
            return newCourse.save()
            /*
            Response Body: The response body is a JSON object containing key-value pairs. It can be:

                - success: true - sending a boolean value of true indicates that the course was added successfully.
                
                - message: A descriptive message indicating that the course was added successfully. This provides clear feedback to the client about the outcome of their request.

                - result: Additional details about the newly created course. Including the result of the creation operation in the response allows the client to immediately access information about the newly created resource without needing to make an additional request.
            */
            .then(result => res.status(201).send({ 
                    success: true,
                    message: 'Course added successfully', 
                    result: result 
                }))
            .catch(error => errorHandler(error, req, res));
        }
    }).catch(error => errorHandler(error, req, res));
};

/* ... */
```

**IMPORTANT NOTES:**
- Structured Approach: The updated code indeed provides a more structured and reliable approach to handling the addition of a course in the API. It includes proper error handling, validation, and structured responses.

- Customizable Response: The response body can be customized to provide more specific feedback to the client. This customization allows developers to tailor the response messages according to the application's requirements or the specific needs of the client consuming the API.

- Flexibility in Response Structure: The response body can indeed be structured differently if needed, as long as it remains appropriate and adheres to best practices for API design. The key is to ensure that the response structure is consistent, clear, and intuitive for clients interacting with the API.


### 2. Check the route "/" in postman in adding a course.

#### Postman

```json
// Add a new course
Authorization:
    Type: Bearer Token
    Token: <Admin token from login>
url: http://localhost:4000/courses/
method: POST
body: raw + JSON
    {
        "name": "JavaScript",
        "description": "Make your page interactive!",
        "price": 5000
    }

//Re-send the request to check the response message for Course already exists.
```

### 3. Update the "getAllCourses" controller method within controllers and implement a meaningful RESTful response.

#### rootFolder > controllers > course.js

```js
/* ... */

module.exports.getAllCourses = (req, res) => {
    return Course.find({})
    .then(result => {
        if(result.length > 0){
            //This provides the client with the requested data in a clear and structured manner so that they can immediately access the information without needing to make an additional request. So no need to add any more information.
            return res.status(200).send(result);
        }
        else{
            // Respond with a message indicating no courses were found.
            return res.status(404).send({ message: 'No courses found' });
        }
    })
    .catch(error => errorHandler(error, req, res));
};

/* ... */
```

### 4. Run the request for getting all courses in Postman. You may delete the courses in the database to get the "No courses found." error message

#### Postman

```json
Authorization:
    Type: Bearer Token
    Token: <Admin token from login>
url: http://localhost:4000/courses/
method: GET
```

### 5. Update the "checkEmailExists" controller method within controllers and implement a meaningful RESTful response.

#### rootFolder > controllers > user.js

```js
/* ... */

module.exports.checkEmailExists = (req, res) => {

    if(req.body.email.includes("@")){
        return User.find({ email : req.body.email })
        .then(result => {

            if (result.length > 0) {
                // Respond with appropriate message based on the search result
                return res.status(409).send({ message: "Duplicate email found" });
            } else {
                return res.status(404).send({ message: "No duplicate email found" });
            };
        })
        .catch(error => errorHandler(error, req, res));
    } else{
        // Respond with an error message for invalid email format
        res.status(400).send({ message: "Invalid email format" })
    }
};

/* ... */
```

### 6. Run the request for checking email in Postman.

#### Postman

```json
// Check the response for duplicate email
url: http://localhost:4000/users/checkEmail
method: POST
body: raw + JSON
    {
        "email": "john@mail.com"
    }

//Check the response for no duplicate email
//Check the response for invalid email format
```


## Activity

### Activity References


### Activity Instructions
- Type of Activity:
    - Coding
    - GW

#### Instructions
1. Update your local sessions git repo, push with the commit message, "Add discussion s48".

Add a meaningful RESTful response in user and course controller. Make sure to add an appropriate status code and message.

**Member 1:**

2. Get all active courses:
    - if the course is active, return the course.
    - if there is no active courses, return message: 'No active courses found'.
    - Test it in Postman.
    - Note in testing the routes in postman, you can create a new database without data.
3. Get a specific course:
    - if the course is found, return the course.
    - if the course is not found, return message: 'Course not found'.
    - Test it in Postman.

**Member 2:**

4. Update a course:
    - if the course is found, return success: true and send a message: 'Course updated successfully'.
    - if the course is not found, return messaeg: 'Course not found'.
    - Test it in Postman.
5. Archive a course:
    - if the course isActive is already false, send a message: 'Course already archived' and return the course: course.
    - if the course is successfully archived, return true and send a message: 'Course archived successfully'.
    - if the course is not found, return message: 'Course not found'
    - Test it in Postman.


**Member 3:**

6. Activate a course:
    - if the course isActive is already true, send a message: 'Course already activated', and return the course: course.
    - if the course is successfully activated, return success: true and send a message: 'Course activated successfully'.
    - if the course is not found, return message: 'Course not found'
    - Test it in Postman.

7. Register a user:
    - if the email is not in the right format, send a message: 'Invalid email format'.
    - if the mobile number is not in the correct number of characters, send a message: 'Mobile number is invalid'.
    - If the password is not atleast 8 characters, send a message: 'Password must be atleast 8 characters long'.
    - if all needed requirements are achieved, send a success message: 'User registered successfully' and return the newly created user.
    - Test it in Postman.


**Member 4:**

8. Login a user:
    - if the email used in not in the right format, send a message: 'Invalid email format'.
    - if the email is not found, send a message: 'No email found'.
    - if the email and password is incorrect, send a message: 'Incorrect email or password'.
    - if all needed requirements are achieved, send a success message: 'User logged in successfully' and return the access token.
    - Test it in Postman.


9. Get user profile: 
    - if the user is found, return the user.
    - if the user not found, send a message: 'User not found' with a status code 404
    - Test it in Postman.
    - Note: if no validation, add the validation needed to achieved the desired output based on the instruction.
    

**Member 5:**

10. Enroll a user to a course:
    - if the user is an admin, send a message 'Admin is forbidden'.
    - if the user successfully enrolled, return success: true and send a message 'Enrolled successfully'.
    - Test it in Postman.

11. Get enrollments of a user:
    - if the user is found, return the enrollments.
    - if the user is not found, send a message: 'No user found'.
    - Test it in Postman.
    - Note: if no validation, add the validation needed to achieved the desired output based on the instruction.

**All members:**

12. Check out to your own git branch with git checkout -b <branchName>.
13. Update your local sessions git repository and push to git. Commit your changes with a concise, imperative statement describing the change. Example: Added solution for the s48 activity.
14. Add the sessions repo link in Boodle for s48.




#### Activity Solution:

### 1. Get all active courses:

#### rootFolder > controllers > course.js

```js
module.exports.getAllActive = (req, res) => {

    Course.find({ isActive : true }).then(result => {
        if (result.length > 0){
            //if the course is active, return the course.
            return res.status(200).send(result);
        }
        else {
            //if there is no active courses, return 'No active courses found'.
            return res.status(200).send({ message: 'No active courses found' });
        }
    }).catch(err => res.status(500).send(err));

};
```

### 2. Get a specific course:

#### rootFolder > controllers > course.js

```js
module.exports.getCourse = (req, res) => {
    Course.findById(req.params.courseId)
    .then(course => {
        if (course) {
            //if the course is found, return the course.
            return res.status(200).send(course);
        } else {
            //if the course is not found, return 'Course not found'.
            return res.status(404).send({ message: 'Course not found' });
        }
    })
    .catch(error => errorHandler(error, req, res)); 
};
```

### 3. Update a course:

#### rootFolder > controllers > course.js

```js
module.exports.updateCourse = (req, res)=>{

    let updatedCourse = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    }
    return Course.findByIdAndUpdate(req.params.courseId, updatedCourse)
    .then(course => {
        if (course) {
            //if the course is found, return the course and send a message 'Course updated successfully'.
            res.status(200).send({ success: true, message: 'Course updated successfully' });
        } else {
            //if the course is not found, return 'Course not found'.
            res.status(404).send({ message: 'Course not found' });
        }
    })
    .catch(error => errorHandler(error, req, res));
};
```



### 4. Archive a course:

#### rootFolder > controllers > course.js

```js
module.exports.archiveCourse = (req, res) => {
  
    let updateActiveField = {
        isActive: false
    };

    Course.findByIdAndUpdate(req.params.courseId, updateActiveField)
        .then(course => {
            if (course) {
                if (!course.isActive) {
                    //if the course isActive is already false, send a message 'Course already archived' and return the course.
                    return res.status(200).send({ 
                        message: 'Course already archived',
                        course: course
                        });
                }
                //if the course is successfully archived, return true and send a message 'Course archived successfully'.
                return res.status(200).send({ 
                            success: true, 
                            message: 'Course archived successfully'
                        });
            } else {
                //if the course is not found, return 'Course not found'
                return res.status(404).send({ message: 'Course not found' });
            }
        })
        .catch(error => errorHandler(error, req, res));
};
```


### 5. Activate a course:

### rootFolder > controllers > course.js

```js
module.exports.activateCourse = (req, res) => {
  
    let updateActiveField = {
        isActive: true
    }

    Course.findByIdAndUpdate(req.params.courseId, updateActiveField)
        .then(course => {
            if (course) {
                if (course.isActive) {
                    // if the course isActive is already true, send a message 'Course already activated', and return the course.
                    return res.status(200).send({ 
                        message: 'Course already activated', 
                        course: course
                    });
                }
                //if the course is successfully activated, return true and send a message 'Course activated successfully'.
                return res.status(200).send({
                    success: true,
                    message: 'Course activated successfully'
                });
            } else {
                // if the course is not found, return 'Course not found'
                return res.status(404).send({ message: 'Course not found' });
            }
        })
        .catch(error => errorHandler(error, req, res));
};
```

### 6. Register a user:

#### rootFolder > controllers > user.js

```js
module.exports.registerUser = (req, res) => {

    // Checks if the email is in the right format
    if (!req.body.email.includes("@")){
        // if the email is not in the right format, send a message 'Invalid email format'.
        return res.status(400).send({ message: 'Invalid email format' });
    }
    // Checks if the mobile number has the correct number of characters
    else if (req.body.mobileNo.length !== 11){
        // if the mobile number is not in the correct number of characters, send a message 'Mobile number is invalid'.
        return res.status(400).send({ message: 'Mobile number is invalid' });
    }
    // Checks if the password has atleast 8 characters
    else if (req.body.password.length < 8) {
        // If the password is not atleast 8 characters, send a message 'Password must be atleast 8 characters long'.
        return res.status(400).send({ message: 'Password must be atleast 8 characters long' });
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
        // if all needed requirements are achieved, send a success message 'User registered successfully' and return the newly created user.
        .then((result) => res.status(201).send({
            message: 'User registered successfully',
            user: result
        }))
        .catch(error => errorHandler(error, req, res));
    }
};
```


### 7. Login a user:
      
#### rootFolder > controllers > user.js

```js
module.exports.loginUser = (req, res) => {

    if(req.body.email.includes("@")){
        return User.findOne({ email : req.body.email })
        .then(result => {
            if(result == null){
                // if the email is not found, send a message 'No email found'.
                return res.status(404).send({ message: 'No email found' });
            } else {
                const isPasswordCorrect = bcrypt.compareSync(req.body.password, result.password);
                if (isPasswordCorrect) {
                    // if all needed requirements are achieved, send a success message 'User logged in successfully' and return the access token.
                    return res.status(200).send({ 
                        message: 'User logged in successfully',
                        access : auth.createAccessToken(result)
                        })
                } else {
                    // if the email and password is incorrect, send a message 'Incorrect email or password'.
                    return res.status(401).send({ message: 'Incorrect email or password' });
                }
            }
        })
        .catch(error => errorHandler(error, req, res));
    } else{
        // if the email used in not in the right format, send a message 'Invalid email format'.
        return res.status(400).send({ message: 'Invalid email format' });
    }
};
```

### 8. Get user profile: 

#### rootFolder > controllers > user.js

```js
module.exports.getProfile = (req, res) => {
    return User.findById(req.user.id)
    .then(user => {

        if(!user){
            // if the user has invalid token, send a message 'invalid signature'.
            return res.status(403).send({ message: 'invalid signature' })
        }else {
            // if the user is found, return the user.
            user.password = "";
            return res.status(200).send(user);
        }  
    })
    .catch(error => errorHandler(error, req, res));
};
```

### 9. Enroll a user to a course:

#### rootFolder > controllers > user.js

```js
module.exports.enroll = (req, res) => {

    console.log(req.user.id);
    console.log(req.body.enrolledCourses) ;

    if(req.user.isAdmin){
        // if the user is an admin, send a message 'Admin is forbidden'.
        return res.status(403).send({ message: 'Admin is forbidden' });
    }

    let newEnrollment = new Enrollment ({
        userId : req.user.id,
        enrolledCourses: req.body.enrolledCourses,
        totalPrice: req.body.totalPrice
    })

    return newEnrollment.save()
    .then(enrolled => {
        // if the user successfully enrolled,return true and send a message 'Enrolled successfully'.
        return res.status(201).send({
            success: true,
            message: 'Enrolled successfully'
        });
    })
    .catch(error => errorHandler(error, req, res));
    
}
```

### 10. Get enrollments of a user:
    
    

##### rootFolder > controllers > user.js

```js
module.exports.getEnrollments = (req, res) => {
    return Enrollment.find({userId : req.user.id})
        .then(enrollments => {
            if (enrollments.length > 0) {
                // if there are enrolled courses, return the enrollments.
                return res.status(200).send(enrollments);
            }
            // if there is no enrolled courses, send a message 'No enrolled courses'.
            return res.status(404).send({
                message: 'No enrolled courses'
            });
        })
        .catch(error => errorHandler(error, req, res));
};
```