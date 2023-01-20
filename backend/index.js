require('dotenv').config();
const express = require('express');
const questionRouter = require('./questionRoutes');

const app = express();

const PORT = process.env.PORT || 3000;
app.use('/api/questions', questionRouter)
app
  .listen(PORT)
  .on('error', (error) => console.log(`ERROR: ${error.message}`))
  .on('listening', () => console.log(`Server listening port ${PORT}`));
