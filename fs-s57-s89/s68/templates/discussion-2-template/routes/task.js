const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task");
const { verify } = require("../auth");

router.get("/all", verify, taskController.getTasks)
router.post("/", verify, taskController.addTask)
router.patch("/:taskId", verify, taskController.updateTaskStatus)
router.delete("/:taskId", verify, taskController.deleteTask)

module.exports = router;
