const todoModel = require('../models/todoModel');

const getTodoController = async (req, res, next) => {
  try {
    const allTodos = await todoModel.getTodos();
    res.json(allTodos);
  } catch (err) {
    console.error(err.message);
  }
};

const postTodoController = async (req, res, next) => {
  try {
    const { description } = req.body;
    const newTodo = await todoModel.postTodo(description);
    res.json(newTodo);
  } catch (err) {
    console.error(err.message);
  }
};

const updateTodoController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updTodo = await todoModel.updateTodo(id, description);
    res.json(updTodo);
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = {
  getTodoController,
  postTodoController,
  updateTodoController,
};
