const TaskModel = require('../models/taskModel');

const taskModel = new TaskModel();

class TaskController {
  constructor() {}

  async getAll(req, res, next) {
    try {
      const allTasks = await taskModel.getAll();
      res.json(allTasks);
    } catch (err) {
      console.error(err.message);
    }
  }

  async create(req, res, next) {
    try {
      const { module, contents, duration } = req.body;
      if (module === '' || contents === '' || duration === '') {
        return res.status(500).json('Please Fill all the fields');
      }
      await this.validator_fun();
      const newTask = await taskModel.create(module, contents, duration);
      res.status(200).json(newTask);
    } catch (err) {
      console.error(err.message);
    }
  }
}

module.exports = TaskController;
