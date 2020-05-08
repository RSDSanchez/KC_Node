var express = require('express');
var router = express.Router();

/**
 *  Create a new Ad
 *  POST /apiv1/createUser
 */

const User = require('../../models/User');

router.post('/', async (req, res, next) => {
  try {
    console.log(req.body);
    const userData = {
      email: req.body.email,
      password: await User.hashPassword(req.body.password),
    };

    console.log(userData);

    const user = new User(userData);

    const createUser = await user.save();
    res.status(201).json({ result: 'ok', user: createUser });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
