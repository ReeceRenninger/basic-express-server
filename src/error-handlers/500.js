'use strict';
//** This section followed same pattern as Ryan since it seemed like the best formatting for this error. */
module.exports = (error, req, res, next) => {
  // ternary WTF: WHAT, TRUE, FALSE
  const errMess = typeof(error) === 'string' ? error : error.message;
  res.status(500).send({
    error: 500,
    route: req.path,
    query: req.query,
    path: req.params,
    body: req.body,
    message: `Error in Server: ${errMess}`,

  });
};