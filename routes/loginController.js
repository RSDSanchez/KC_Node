'use strict';
const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

class LoginController {
  /**
   * POST /apiv1/login
   */
  async postJWT(req, res, next) {
    try {
      const email = req.body.email;
      const password = req.body.password;

      const user = await User.findOne({ email });

      if (!user || !(await bcrypt.compare(password, user.password))) {
        const error = new Error('Invalid credentials');
        error.status = 401;
        next(error);
        return;
      }

      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1d',
      });

      // responder
      res.json({ token });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new LoginController();
