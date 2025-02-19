//[SECTION] Dependencies and Modules
const express = require('express');
const userController = require('../controllers/user');
const { verify } = require("../auth");

//[SECTION] Routing Component
const router = express.Router();

//[SECTION] Checking if the email already exists
router.post("/check-email", userController.checkEmailExists);

//[SECTION] Route for User Registration
router.post("/register", userController.registerUser);

//[SECTION] Route for User Login
router.post("/login", userController.loginUser);


//[Section] Activity: Route for retrieving user details
router.post("/details", verify, userController.getProfile);


module.exports = router;


