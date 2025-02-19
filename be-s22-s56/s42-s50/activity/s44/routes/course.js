//[SECTION] Activity: Dependencies and Modules
const express = require("express");
const courseController = require("../controllers/course");

const auth = require("../auth");

const { verify, verifyAdmin } = require("../auth");

//[SECTION] Activity: Routing Component
const router = express.Router();

//[SECTION] Activity: Route for creating a course
router.post("/", verify, verifyAdmin, courseController.addCourse); 

//[SECTION] Activity: Route for retrieving all courses
router.get("/all", verify, verifyAdmin, courseController.getAllCourses);

//[SECTION] Activity: Route for retrieving all active courses
router.get("/", courseController.getAllActive);

//[SECTION] Activity: Route for retrieving a specific course
router.post("/specific", courseController.getCourse);

//[SECTION] Activity: Export Route System
// Allows us to export the "router" object that will be accessed in our "index.js" file
module.exports = router;