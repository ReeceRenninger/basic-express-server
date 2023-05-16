'use strict';

//TODO: Write middleware, try to do with ternary for practice?
module.exports = (req, res, next) => {
  // req.params.person === 'Reece' ? next() : next('Path parameter must be Reece');
  if (req.params.person === 'Reece') {
    next();
  } else {
    next('Path parameter must be Reece');
  }
};

// do not need export since its exporting as anoymous function on line 4 already.