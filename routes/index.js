var express = require('express');
var router = express.Router();

const Ad = require('../models/Ad');

/**
 *  Show Ads in Index
 */
router.get('/', async (req, res, next) => {
  try {
    const tagsAvailable = await Ad.distinct('tags');

    const name = req.query.name;
    const type = req.query.type;
    const tag = req.query.tag;
    const price = req.query.price;
    const limit = parseInt(req.query.limit || 10);
    const skip = parseInt(req.query.skip);
    const sort = req.query.sort;
    const fields = req.query.fields;

    const filter = {};

    if (typeof name !== 'undefined') {
      filter.name = new RegExp(name, 'i');
    }
    if (typeof type !== 'undefined') {
      filter.type = type;
    }
    if (tagsAvailable.indexOf(tag) >= 0) {
      filter.tags = tag;
    }
    if (price !== undefined && price.indexOf('-') >= 0) {
      filter.price = splitRange(price);
    } else if (price !== undefined && price.indexOf('-') === -1) {
      filter.price = price;
    }

    res.locals.ads = await Ad.list(filter, limit, skip, sort, fields);
    res.locals.tagsAvailable = tagsAvailable;

    console.log(filter);

    res.render('index');
  } catch (error) {
    next(error);
  }
});

/**
 *  Function to split a price range in **-** format and return a search criteria object
 */
const splitRange = (range) => {
  const values = range.split('-');

  if (!values[0]) return { $lt: values[1] };
  if (!values[1]) return { $gt: values[0] };
  if (values[0] && values[1]) return { $lt: values[1], $gt: values[0] };
};

module.exports = router;
