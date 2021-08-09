const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/taskController');

const taskController = new TaskController();

router.get('/tasks', taskController.getAllTasks);

router.post('/tasks', taskController.createTask);

// router.get('/tasks/:id', todoController.getTaskController);

// router.put('/tasks/:id', todoController.updateTaskController);

// router.delete('/tasks/:id', todoController.deleteTaskController);

module.exports = router;
