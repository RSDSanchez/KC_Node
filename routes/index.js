var express = require('express');
var router = express.Router();

const Ad = require('../models/Ad');

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const name = req.query.name;
    const type = req.query.type;

    const filter = {};

    if (typeof name !== 'undefined') {
      filter.name = new RegExp(name, 'i');
    }
    if (typeof type !== 'undefined') {
      filter.type = type;
    }
    res.locals.ads = await Ad.list(filter);

    res.render('index');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
