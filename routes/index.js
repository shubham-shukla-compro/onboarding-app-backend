const express = require('express');
const router = express.Router();

const todoController = require('../controllers/todoController');

router.get('/todos', todoController.getTodoController);

router.post('/todos', todoController.postTodoController);

router.put('/todos/:id', todoController.updateTodoController);

module.exports = router;
