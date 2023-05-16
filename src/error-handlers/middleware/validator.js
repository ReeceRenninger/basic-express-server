'use strict';


//TODO: Write middleware, try to do with ternary for practice?
module.exports = (req, res, next) => {
  req.params.person === 'Reece' ? next() : next('Path parameter must be Reece');
};