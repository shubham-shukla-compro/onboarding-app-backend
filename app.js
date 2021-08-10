const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

dotenv.config();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Onboarding App API',
      version: '1.0.0',
      description: 'A simple Express Onboarding App API',
    },
    servers: [
      {
        url: 'http://localhost:8000',
      },
    ],
  },
  apis: ['./routes/*.js'],
};

const specs = swaggerJsDoc(options);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));

//middleware
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.use('/', require('./routes'));

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT} `);
});
