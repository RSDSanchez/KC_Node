var express = require('express');
var router = express.Router();

/**
 *  Create a new Ad
 *  POST /apiv1/createUser
 */

const User = require('../../models/User');

router.post('/', async (req, res, next) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
      const error = new Error('No user or password provided');
      error.status = 401;
      res.json({
        error: error.message,
        description: "Your request must provide a body with an 'email' and a 'password' key",
      });
      return;
    }

    const userData = {
      email: email,
      password: await User.hashPassword(password),
    };

    const user = new User(userData);

    const createUser = await user.save();
    res.status(201).json({ result: 'ok', user: createUser });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
