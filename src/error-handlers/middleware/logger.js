'use strict';

// TODO: Performs a console.log with the request method and path
// TODO: Import this into your server and set it up to run at the application level for all routes

const logger = (req, res, next) => {
  console.log('Logger was activated!','Request path:', req.path, ',Request method:', req.method);
  next();
};

module.exports = logger;