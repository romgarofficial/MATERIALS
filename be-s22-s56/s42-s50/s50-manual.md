# Express.js - API Development with ChatGPT Assistance

## Resources

### References

- What is ChatGPT?
    - Improving your prompts
    
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

### 1. Integrate and contextualize the generated route code from the chatGPT conversation.

#### 1a. Copy and paste the generated route code from the chatGPT conversation.

#### rootFolder > routes > user.js

```js
/*...*/

router.get("/logout", (req, res) => {
    /*...*/
});

//[SECTION] Route for resetting the user password
router.post('/reset-password', authMiddleware, resetPasswordController.resetPassword);


module.exports = router;
```


#### 1b. Update and contextualize our code.

#### rootFolder > routes > user.js

```js
// Update authMiddleware to our own auth module and use verify instead.
// Update resetPasswordController to userController, our own controller module instead.
// Change the route to put as this is an edit of a document.
router.put('/reset-password', verify, userController.resetPassword);
```

### 2. Integrate and contextualize the generated controller code from the chatGPT conversation.

#### 2a. Copy and paste the generated controller code from the chatGPT conversation.

#### rootFolder > controllers > user.js

```js
/*...*/

const resetPassword = async (req, res) => {
    try {
    const { newPassword } = req.body;
    const { userId } = req.user; // Extracting user ID from the authorization header

    // Hashing the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Updating the user's password in the database
    await User.findByIdAndUpdate(userId, { password: hashedPassword });

    // Sending a success response
    res.status(200).json({ message: 'Password reset successfully' });
    } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    resetPassword
};
```

### 2b. Contextualize generated controller code from the chatGPT conversation.

#### rootFolder > controllers > user.js

```js
/*...*/

module.exports.getEnrollments = (req, res) => {
    /*...*/
};

//[SECTION] Reset password
// Modify how we export our controllers
module.exports.resetPassword = async (req, res) => {

    try {

        // Add a console.log() to check if you can pass data properly from postman
        // console.log(req.body);

        // Add a console.log() to show req.user, our decoded token, does not contain userId property but instead id
        // console.log(req.user);

        const { newPassword } = req.body;

        // update userId to id because our version of req.user does not have userId property but id property instead.
        const { id } = req.user; // Extracting user ID from the authorization header

        // Hashing the new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        
        // Update userId update to id
        // Updating the user's password in the database
        await User.findByIdAndUpdate(id, { password: hashedPassword });

        // Sending a success response
        res.status(200).json({ message: 'Password reset successfully' });

    } catch (error) {

        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
        
    }

};
```

**Important Note:**
- Use postman to test the routes.
- Make sure students uses their own databases.
- They can clone your pushed discussion but make sure to npm install first.


### 3. Login and copy a token to process a POST request at the '/reset-password' route using postman update a user's password.

#### Postman

```json
Authorization:
    Type: Bearer Token
    Token: <Token from login>
url: http://localhost:4000/users/reset-password
method: PUT
body: raw + JSON
    {
        "newPassword" : "newPass1234"
    }
```

**Important Note:**
- Use postman to test the route then try to login with the old password

### 4. Integrate and contextualize the generated route code from the next chatGPT conversation.

### 4a. Copy and paste the generated route code from the next chatGPT conversation.

#### rootFolder > routes > user.js

```js
/*...*/

router.put('/reset-password', verify, userController.resetPassword);

//[SECTION] Update user profile route
router.put('/profile', authMiddleware.authenticateToken, profileController.updateProfile);


module.exports = router;
```

### 4b. Update and contextualize our code.

#### rootFolder > routes > user.js

```js
/*...*/

router.put('/reset-password', verify, userController.resetPassword);

//[SECTION] Route for updating user profile
// Update authMiddleware.authenticateToken to our own auth module and use verify instead.
// Update profileController to userController, our own controller module instead.
router.put('/profile', verify, userController.updateProfile);

module.exports = router;
```

### 5. Integrate and contextualize the generated controller code from the chatGPT conversation.

### 5a. Copy and paste the generated controller code from the chatGPT conversation.

#### rootFolder > controllers > user.js

```js
/*...*/

module.exports.resetPassword = async (req, res) => {
    /*...*/
};

async function updateProfile(req, res) {
    try {
        // Get the user ID from the authenticated token
        const userId = req.user.id;
        
        // Retrieve the updated profile information from the request body
        const { firstName, lastName, mobileNumber } = req.body;
        
        // Update the user's profile in the database
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { firstName, lastName, mobileNumber },
            { new: true }
        );
        
        res.json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to update profile' });
    }
}
    
module.exports = {
    updateProfile,
};
```

### 5b. Contextualize generated controller code from the chatGPT conversation.

#### rootFolder > controllers > user.js

```js
/*...*/

module.exports.resetPassword = async (req, res) => {
    /*...*/
};

//[SECTION] Update profile
// Update the function to arrow to unify our code formats
// Modify how we export our controllers
module.exports.updateProfile = async (req, res) => {
    try {

        // Add a console.log() to check if you can pass data properly from postman
        // console.log(req.body);

        // Add a console.log() to show req.user, our decoded token, does have id property
        // console.log(req.user);
            
        // Get the user ID from the authenticated token
        const userId = req.user.id;

        // Retrieve the updated profile information from the request body
        // Update the req.body to use mobileNo instead of mobileNumber to match our schema
        const { firstName, lastName, mobileNo } = req.body;

        // Update the user's profile in the database
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { firstName, lastName, mobileNo },
            { new: true }
        );

        res.send(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Failed to update profile' });
    }
}
```

**Important Note:**
- Use postman to test the routes.
- Make sure students uses their own databases.
- They can clone your pushed discussion but make sure to npm install first.


### 6. Login and copy a token to process a POST request at the '/profile' route using postman update a user's details.

#### Postman

```json
Authorization:
    Type: Bearer Token
    Token: <Token from login>
url: http://localhost:4000/users/profile
method: PUT
body: raw + JSON
    {
        "firstName": "updatedFName",
        "lastName": "updatedLName",
        "mobileNo": "09261234123"
    }
```

**Important Note:**
- Use postman to test the route then try to check mongodb


### 7. Integrate and contextualize the generated route code from the next chatGPT conversation.

### 7a. Copy and paste the generated route code from the next chatGPT conversation.

#### rootFolder > routes > course.js

```js
/*...*/

router.patch("/:courseId/activate", verify, verifyAdmin, courseController.activateCourse);

//[SECTION] Update user profile route
router.post('/courses/search', courseController.searchCoursesByName);

module.exports = router;
```

### 7b. Update and contextualize our code.

#### rootFolder > routes > course.js

```js
/*...*/

router.patch("/:courseId/activate", verify, verifyAdmin, courseController.activateCourse);

//[SECTION] Route for searching courses by name
// Update endpoint to remove /courses as we already group our routes under this in index.js
router.post('/search', courseController.searchCoursesByName);

module.exports = router;
```

### 8. Integrate and contextualize the generated controller code from the chatGPT conversation.

### 8a. Copy and paste the generated controller code from the chatGPT conversation.

#### rootFolder > controllers > course.js

```js
/*...*/

const searchCoursesByName = async (req, res) => {
    try {
        const { courseName } = req.body;
    
        // Use a regular expression to perform a case-insensitive search
        const courses = await Course.find({
            name: { $regex: courseName, $options: 'i' }
        });
    
        res.json(courses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
    
module.exports = {
    searchCoursesByName
};
```

### 8b. Contextualize generated controller code from the chatGPT conversation.

#### rootFolder > controllers > course.js

```js
/*...*/

module.exports.activateCourse = (req, res) => {
    /*...*/
};

//[SECTION] Search course by name
// Update the function to arrow to unify our code formats
// Modify how we export our controllers
module.exports.searchCoursesByName = async (req, res) => {
    try {
        const { courseName } = req.body;
    
        // Use a regular expression to perform a case-insensitive search
        const courses = await Course.find({
        name: { $regex: courseName, $options: 'i' }
        });
    
        res.json(courses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
```

**Important Note:**
- Use postman to test the routes.
- Make sure students uses their own databases.
- They can clone your pushed discussion but make sure to npm install first.

### 9. Login and copy a token to process a POST request at the '/profile' route using postman update a user's details.

#### Postman

```json
url: http://localhost:4000/courses/search
method: POST
body: raw + JSON
    {
        "courseName": "ReactJS"
    }
```

**Important Note:**
- Use postman to test the route then try to check mongodb


### 10. Add the following erratic codes in boodle notes and allow students to copy. Use chatGPT to debug the codes.

#### rootFolder > routes > course.js

```js
/*...*/
router.post('/:courseId/enrolled-users', getEmailsOfEnrolledUsers;
```

### 10a. Copy and paste the generated controller code from boodle notes.

#### rootFolder > controllers > course.js

```js
/*...*/
const getEmailsOfEnrolledUsers = async (req, res) => {
    const courseId = req.body.courseId;

    try {
            // Find enrollments by courseId
            const enrollments = await Enrollment.find({ 'enrolledCourses.courseId': courseId });
    if (!enrollments.length) {
                return res.status(404).json({ message: 'Course not found' });
            }
    // Get the userIds of enrolled users from the enrollments
            const userIds = enrollments.map(enrollment => enrollment.userId);
    // Find the users with matching userIds
            const enrolledUsers = await User.find({ _id: { $in: userIds } });
    // Extract the emails from the enrolled users
            const emails = enrolledUsers.map(user => user.email);
    res.status(200).json({ userEmails: emails });
        } catch (error) {
            res.status(500).json({ message: 'An error occurred while retrieving enrolled users' });
        }
};
```

### 10b. Copy and paste the debugged route code from chatGPT. 

#### rootFolder > routes > course.js

```js
//[SECTION] Route for getting enrolled users by course
// Contextualize it to use our courseController.
// Update to use get instead.
router.get('/:courseId/enrolled-users', courseController.getEmailsOfEnrolledUsers);
```

### 10c. Copy and paste the debugged controller code from chatGPT. 

#### rootFolder > controllers > course.js

```js
const Course = require("../models/Course");
//Import the User model
const User = require("../models/User");
const Enrollment= require("../models/Enrollment");

/*...*/

module.exports.searchCoursesByName = async (req, res) => {
    /*...*/
};

//[SECTION] Get enrolled users via course ID
// Contextualize it to use our module export approach.
module.exports.getEmailsOfEnrolledUsers = async (req, res) => {
    const courseId = req.params.courseId;

    try {
        // Find enrollments by courseId
        const enrollments = await Enrollment.find({ 'enrolledCourses.courseId': courseId });
    if (!enrollments.length) {
            return res.status(404).json({ message: 'Course not found' });
        }
    // Get the userIds of enrolled users from the enrollments
        const userIds = enrollments.map(enrollment => enrollment.userId);
    // Find the users with matching userIds
        const enrolledUsers = await User.find({ _id: { $in: userIds } });
    // Extract the emails from the enrolled users
        const emails = enrolledUsers.map(user => user.email);
    res.status(200).json({ userEmails: emails });
        } catch (error) {
            res.status(500).json({ message: 'An error occurred while retrieving enrolled users' });
        }
};
```

### 11. Login and copy a token to process a POST request at the '/profile' route using postman update a user's details.

#### Postman

```json
url: http://localhost:4000/courses/<courseId>/enrolled-users
 method: GET
```

**Important Note:**
- Use postman to test the route then try to check mongodb



## Activity

### Activity References

- [Tips for Improving Your Coding With ChatGPT](https://betterprogramming.pub/10-tips-for-improving-your-coding-with-chatgpt-3e589de3aff3)

### Activity Instructions
- Type of Activity:
    - Coding
    - Individual

#### Instructions
1. Using chatGPT, generate code to add the following features in our ExpressJS Booking API, provide chatGPT with the needed model from our app in your prompt:

2. Implement a way to let an admin user update another user as an admin.
	- The user id is passed in the request body.
	- The route needs an admin token.
	- Returns a message if update is successful.

3. Implement a search functionality for courses. Allow users to search for courses based on price range. 
	- Price range can be added in request body.
		- maxPrice and minPrice
	- All users can access this route.
	- Returns an array of courses with prices within the given price range.

4. Create a route and controller to update the enrollment status of a user for a specific course. 
	- This will allow an admin to mark a user as enrolled or completed or cancelled.
	- You can pass the status with the request body.
	- You can pass the id of the user in the request body.
	- You can pass the id of the course in the request body.

5. Provide a txt/readme file that contains the following:
	- Regular user email and password
	- Admin user email and password

6. Update your local sessions repo.
7. Push to git with the commit message of Add activity code s50.
8. Add the repo link in Boodle for s50.


#### Activity Solution:

Solutions may vary from each student. Use postman to check each route.