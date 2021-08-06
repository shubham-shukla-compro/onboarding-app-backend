const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

//middleware
app.use(cors());
app.use(express.json());

const port = process.env.PORT;

app.use('/', require('./routes'));

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
