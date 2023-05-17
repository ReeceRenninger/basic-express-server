'use strict';

const express = require('express');

//errorhandlers/tester import
const errorHandler = require('./error-handlers/500');
const notFound = require('./error-handlers/404');
const validator = require('./error-handlers/middleware/validator');
const logger = require('./error-handlers/middleware/logger');
// singleton of express
const app = express();

//middleware
app.use(express.json());


app.use(logger); // TODO: should perform a request method and path and should run for ALL routes
//endpoints
app.get('/', (req, res, next) => {
  res.status(200).send('Server is alive!');
});


app.get('/person', validator, (req, res, next) => {
  console.log('query for person endpoint: ', req.query);
  res.status(200).send('Name should appear!');
});


//using the error handlers that are modularized
app.use('*', notFound); // 404 error handler
app.use(errorHandler); // catch all error handler, //!! THIS NEEDS TO BE PLACED LAST IN FILE

//listener to start server, imported to index.js at root
const start = (port) => app.listen(port, () => console.log('Server is living on port:', port));


//export
module.exports = { start, app };