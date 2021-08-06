const pool = require('../config/db');

const getTodos = async () => {
  try {
    const allTodos = await pool.query('SELECT * FROM todo');
    return allTodos.rows;
  } catch (err) {
    console.error(err.message);
  }
};

const postTodo = async (description) => {
  try {
    const newTodo = await pool.query(
      'INSERT INTO todo (description) VALUES($1) RETURNING *',
      [description]
    );
    return newTodo.rows[0];
  } catch (err) {
    console.log(err.message);
  }
};

const updateTodo = async (id, description) => {
  try {
    const updTodo = await pool.query(
      'UPDATE todo SET description = $1 WHERE todo_id = $2 RETURNING *',
      [description, id]
    );
    return updTodo.rows[0];
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { getTodos, postTodo, updateTodo };
