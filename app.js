const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const pool = require('./config/db');

dotenv.config();

//middleware
app.use(cors());
app.use(express.json());

const port = process.env.PORT;

app.get('/todos', async (req, res) => {
  const allTodos = await pool.query('SELECT * FROM todo');
  res.json(allTodos.rows);
});

app.post('/todos', async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      'INSERT INTO todo (description) VALUES($1) RETURNING *',
      [description]
    );
    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
