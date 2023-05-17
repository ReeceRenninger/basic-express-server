'use strict';

//TODO: Write middleware, this should check params for a query string with name property. try to do with ternary for practice?
module.exports = (req, res, next) => {
  // req.params.person === 'Reece' ? next() : next('Path parameter must be Reece');
  if (req.query.name === 'Reece') {
    next();
  } else {
    next('Search query must be Reece');
  }
};

// do not need export since its exporting as anoymous function on line 4 already.