require('express-async-errors');
const express = require('express');
const router = require('../routes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(router);

app.use((error, request, response, next) => {
  console.log('# Error Handler');
  console.log(error);
  response.sendStatus(500);
});

app.listen(PORT, () => {
  console.log(`Serve Running in port ${PORT}`);
});
