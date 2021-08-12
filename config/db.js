const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: 'localhost',
  database: process.env.DB,
  password: process.env.PASSWORD,
  port: 5432,
});

pool.query('SELECT NOW() as now', (err, res) => {
  if (err) {
    console.error(err.stack);
  } else {
    console.log('DB Connected');
    console.log(res.rows[0]);
  }
});

module.exports = pool;
