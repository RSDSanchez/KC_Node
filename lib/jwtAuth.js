'use strict';

const jwt = require('jsonwebtoken');

module.exports = function () {
  return (req, res, next) => {
    const token = req.get('token') || req.query.token || req.body.token;

    if (!token) {
      const error = new Error('No token provided');
      error.status = 401;
      res.json({ error: error.message });
      //next(error);
      return;
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
      if (err) {
        const error = new Error('Invalid token');
        error.status = 401;
        res.json({ error: error.message });
        //next(error);
        return;
      }
      req.apiAuthUserId = payload._id;
      next();
    });
  };
};
