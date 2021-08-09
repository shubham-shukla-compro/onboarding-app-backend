const pool = require('../config/db');

class TaskModel {
  constructor() {}

  async getAllTasks() {
    try {
      const allTasks = await pool.query('SELECT * FROM onboarding_tasks');
      return allTasks.rows;
    } catch (err) {
      console.error(err.message);
    }
  }

  async createTask(module, contents, duration) {
    try {
      const newTask = await pool.query(
        'INSERT INTO onboarding_tasks (module,contents,duration) VALUES($1,$2,$3) RETURNING *',
        [module, contents, duration]
      );
      return newTask.rows[0];
    } catch (err) {
      console.log(err.message);
    }
  }

  async updateTodo(id, description) {
    try {
      const updTodo = await pool.query(
        'UPDATE todo SET description = $1 WHERE todo_id = $2 RETURNING *',
        [description, id]
      );
      return updTodo.rows[0];
    } catch (err) {
      console.log(err.message);
    }
  }
}

module.exports = TaskModel;
