const TaskModel = require('../models/taskModel');

const taskModel = new TaskModel();

class TodoController {
  constructor() {}

  async getAllTasks(req, res, next) {
    try {
      const allTasks = await taskModel.getAllTasks();
      res.json(allTasks);
    } catch (err) {
      console.error(err.message);
    }
  }

  async createTask(req, res, next) {
    try {
      const { module, contents, duration } = req.body;
      const newTask = await taskModel.createTask(module, contents, duration);
      res.json(newTask);
    } catch (err) {
      console.error(err.message);
    }
  }

  // getTaskController = async (req, res, next) => {
  //   try {
  //     const task = await todoModel.getTask();
  //     res.json(task);
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };

  // updateTaskController = async (req, res, next) => {
  //   try {
  //     const { id } = req.params;
  //     const { description } = req.body;
  //     const updTask = await todoModel.updateTask(id, description);
  //     res.json(updTask);
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };

  // deleteTaskController = async (req, res, next) => {
  //   try {
  //     const { id } = req.params;
  //     const { description } = req.body;
  //     const delTask = await todoModel.deleteTask(id, description);
  //     res.json(delTask);
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };
}

module.exports = TodoController;
