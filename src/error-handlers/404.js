'use strict';

//trying anoymous functions to rename w/e I want on import
module.exports = (req, res, next) => {
  res.status(404).send({
    error: 404,
    route: req.baseUrl,
    message: 'Not Found!', // ask why a trailing comma is required here?
  });
};