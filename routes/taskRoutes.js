const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

router
  .route("/tasks")
  .get(taskController.getTasks)
  .post(taskController.createTask);

module.exports = router;
