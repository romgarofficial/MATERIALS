# Express.js - Booking System API - Web Security

## Resources

### References

- [Google Cloud Platform](https://console.cloud.google.com/)
- [Implementing Google OAuth2 Authentication in Node.js](https://blog.bitsrc.io/implementing-google-oauth2-authentication-in-node-js-project-using-passport-a-step-by-step-guide-c5e38e9f6071)
- [JavaScript Callbacks (W3 Schools)](https://www.w3schools.com/js/js_callback.asp)
- [Google APP Permissions](https://myaccount.google.com/connections?filters=3,4&hl=en)
    
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

### 1. Create a project in the Google API Console. Refer to the steps found in the slide.

#### Application > Browser
- Refer to the slides for Google API Console Setup

**IMPORTANT NOTES:**
- Refer to "references" section of this file to find the documentations for Google Cloud Platform and Implementing Google OAuth2 Authentication in Node.js.

### 2. Install the necessary packages.

#### rootFolder > terminal

```bash
npm install dotenv passport passport-google-oauth20 express-session
```

### 3. Store the Google Client ID and the Google Client Secret from the Google API Console project.

#### rootFolder > .env

```js
/* ... */
JWT_SECRET_KEY="CourseBookingAPI"
clientID=476194640378-0155ua99ptg5l6lk9jltci9a9dn7bi4l.apps.googleusercontent.com
clientSecret=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
```

### 4. Create a ".env.sample" file that contains all the environment variables for the application.

#### rootFolder > .env.sample

```js
PORT=
JWT_SECRET_KEY=
clientID=
clientSecret=
```

**IMPORTANT NOTES:**
- You may have the students also create a ".env.sample" file which contains the keys to store for the applications environment variables. Just remove the values for all keys which is a good practice to allow other developers to have an idea of what environment variables to use in the application.
- The ".env" file is added in the ".gitignore" file when pushing but leaving the ".env.sample" file available for other developers to copy from when cloning the application.


### 5. Create a passport.js file which will contain the setup configuration for Google OAuth 2.0 authentication.

#### rootFolder > passport.js

```js
// Package for configuring environment variables. Restart of application is recommended to ensure that the env variables are loaded properly.
require('dotenv').config();
// Passport is an authentication middleware for Node.js. It can be added in to any Express-based web application. A comprehensive set of strategies that support authentication using a username and password, Facebook, Twitter, and more.
const passport = require("passport");
// Strategies are algorithms that are used to for specific purposes. In this case authenticating the application using the Google API Console project OAuth Client ID Credentials.
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// This configures Passport to use the Google OAuth 2.0 authentication strategy.
// Uses the Google API Console project OAuth Client ID Credentials (e.g. clientID and clientSecret) to authorize the app to connect to the Google API.
// "callbackURL" is the defined route on how the request will be handled later once a Google Login has been implemented.
passport.use(new GoogleStrategy({
    clientID: process.env.clientID,
    clientSecret: process.env.clientSecret,
    callbackURL: "http://localhost:4000/users/google/callback",
    passReqToCallback: true
},

// This is the callback function that gets executed when a user is successfully authenticated.
// returns the "profile" of the email used in the Google Login containing the user information (e.g. email, firstname, lastname)
function(request, accessToken, refreshToken, profile, done) {
    // "done" is a parameter used in the function that functions as a callback.
    // "done" is considered as a naming convention for callbacks.
    // Callbacks are executed only when called inside the function they are defined in.
    return done(null, profile);
}
));

// This function is used to serialize the user object into a session.
// In this case, the entire user object is serialized.
// The serialized user object is then stored in the session.
passport.serializeUser(function(user, done) {
    done(null, user);
});

// This function is used to deserialize the user object from the session.
// It retrieves the serialized user object from the session and passes it to the "done" callback.
passport.deserializeUser(function(user, done) {
    done(null, user);
});
```

**IMPORTANT NOTES:**
- Refer to "references" section of this file to find the documentations for JavaScript Callbacks (W3 Schools).


### 6. Import the passport and express-session packages.

#### rootFolder > index.js

```js
/* ... */
const mongoose = require("mongoose");
// Google Login
const passport = require('passport');
const session = require('express-session');
require('./passport');


// [SECTION] Environment Setup
/*...*/

app.use(cors(corsOptions));

// [Section] Google Login
// Creates a session with the given data
// resave prevents the session from overwriting the secret while the session is active
// saveUninitialized prevents the data from storing data in the session while the data has not yet been initialized
app.use(session({
    secret: process.env.clientSecret,
    resave: false,
    saveUninitialized: false
}));
// Initializes the passport package when the application runs
app.use(passport.initialize());
// Creates a session using the passport package
app.use(passport.session());

mongoose.connect("mongodb+srv://admin:admin123@cluster0.7iowx.mongodb.net/course-booking-API?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
/*...*/
```

### 7. Create the "isLoggedIn" middleware that checks if the user was successfully authenticated via passport using the Google API

#### rootFolder > auth.js

```js
/*...*/

module.exports.errorHandler = (err, req, res, next) => {
    /*...*/
};

//[SECTION] Middleware to check if the user is authenticated
module.exports.isLoggedIn = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.sendStatus(401);
    }
}
```

### 8. Create the routes for triggering the Google OAauth2 

#### rootFolder > routes > user.js

```js
// Google Login
/*...*/
const auth = require("../auth");
//Google Login
const passport = require('passport');

const { verify, isLoggedIn } = auth;

const router = express.Router();

/*...*/

router.get('/getEnrollments', verify, userController.getEnrollments);

//[SECTION] Google Login
//[SECTION] Route for initiating the Google OAuth consent screen
router.get('/google',
    // Uses the "authenticate" method of passport to verify the email credentials in Google's APIs
    passport.authenticate('google', {
        // Scopes that are allowed when retriving user data
        scope: ['email', 'profile'],
        // Allows the OAuth consent screen to be "prompted" when the route is accessed to select a new account every time the user tries to login.
        // Comment this out and access this route twice to see the difference
        // If removed, automatically redirects the user to "/google/success" route
        // If added, always returns the OAuth consent screen to allow the user to choose an account
        prompt : "select_account"
    }
));

//[SECTION] Route for callback URL for Google OAuth authentication
router.get('/google/callback',
    // If authentication is unsuccessful, redirect to "/users/failed" route
    passport.authenticate('google', {
        failureRedirect: '/users/failed',
    }),
    // If authentication is successful, redirect to "/users/success" route
    function (req, res) {
        res.redirect('/users/success')
    }
);

//[SECTION] Route for failed Google OAuth authentication
router.get("/failed", (req, res) => {
    console.log('User is not authenticated');
    res.send("Failed")
})

//[SECTION] Route for successful Google OAuth authentication
router.get("/success",isLoggedIn, (req, res) => {
    console.log('You are logged in');
    console.log(req.user);
    res.send(`Welcome ${req.user.displayName}`)
})

//[SECTION] Route for logging out of the application
// The logout route does only logs the user out of the application and destroys the session, but upon trying to access the "/google" route again, the user is no longer prompted to choose an email to login if the "prompt : "select_account" option is not added to the "/google" route. This is expected behaviour because the Google OAuth 2, already allows the user access to the "Course Booking API" because the user has been authorized to access the app.
// Navigate to the Google App Permissions to delete all connections with the app (https://myaccount.google.com/connections)
router.get("/logout", (req, res) => {
    // Destroys the session that stores the Google OAuth Client credentials
    // Allows for release of resources when the account information is no longer needed in the browser
    req.session.destroy((err) => {
        if (err) {
            console.log('Error while destroying session:', err);
        } else {
            req.logout(() => {
                console.log('You are logged out');
                // Redirects the page to "http://localhost:4000" route to visual redirection in frontend.
                // Can be replaced in the future with the "home" page route for the frontend.
                res.redirect('/');
            });
        }
    });
});

module.exports = router;
```

### 9. Access the routes in this order to test the functionality of the code.

#### Application > browser


- http://localhost:4000/users/google
    - This will open the OAuth Consent Screen to allow the user to choose the google account to login with
    - Make sure that the "prompt : "select_account" option is commented out at this point.
- http://localhost:4000/users/google
    - Trying to access this route again will redirect the user to the "/users/success" route
- http://localhost:4000/users/logout
    - This will redirect the user to "http://localhost:4000"
- http://localhost:4000/users/google
    - Trying to access this route again will redirect the user to the "/users/success" route
    - Even if the user is logged out, it will not prompt the OAuth Consent Screen because the user has been authorized to access the app during the initial login.
    - To have the user choose the email again, navigate to the Google App Permissions Page (https://myaccount.google.com/connections) Locate the "Course Booking App", select it and and delete all connections with the app.
- http://localhost:4000/users/google
    - Accessing this route after deleting all connections with the app will open the Google OAuth Consent Screen
- http://localhost:4000/users/google
    - Make sure that the "prompt : "select_account" option is not commented out at this point.
    - This will allow the "/users/google" route to always open the OAuth Consent Screen and will prevent the route from redirecting to "users/success" on every login


## Activity

### Activity References
- [Google Cloud Platform](https://console.cloud.google.com/)
- [Implementing Google OAuth2 Authentication in Node.js project using passport: A Step-by-Step Guide](https://blog.bitsrc.io/implementing-google-oauth2-authentication-in-node-js-project-using-passport-a-step-by-step-guide-c5e38e9f6071)
- [JavaScript Callbacks (W3 Schools)](https://www.w3schools.com/js/js_callback.asp)
- [Google APP Permissions](https://myaccount.google.com/connections?filters=3,4&hl=en)

### Activity Instructions
- Type of Activity:
    - Coding
    - GW

#### Instructions

- File and folder preparation instructions.
**Member 1:**

1. Update your local sessions git repo, push with the commit message, "Add discussion s49"

**Member 1,2**

2. Create a new Google API Console project named "Google OAuth Activity" to generate the clientID and clientSecret
3. Store the credentials in the ".env" file. Also create a ".env.sample" file that contains only the keys of the environment variables without the values.
4. Create a ".gitignore" file that prevents the environment variable from being added in the repository.

**Member 3,4:**

5. Create the "passport.js" file and implement it in the index.js file.
6. Create an "auth.js" file for middlewares and create an "isLoggedin" middleware.

**Member 5:**

7. Create the following routes:
- Route for initiating the Google OAuth consent screen (/google)
- Route for callback URL for Google OAuth authentication (/google/callback)
- Route for failed Google OAuth authentication (/failed)
- Route for successful Google OAuth authentication (/success)
- Route for logging out of the application (/logout)

**All members:**

8. Take screenshots of the completed activity and add them inside an “s49-images” folder.
9. Check out to your own git branch with git checkout -b <branchName>.
10. Update your local sessions git repository and push to git with the commit message of Add activity code s49.
11. Add the sessions repo link in Boodle for s49.

#### Activity Solution:

- Repeat all the discussion steps in a freshly installed Node/Express JS application.