'use strict';

const express = require('express');
const router = express.Router();

const Ad = require('../../models/Ad');

/**
 *  Show available tags
 * GET /apiv1/ads/tags
 */

router.get('/', async (req, res, next) => {
  try {
    const tags = await Ad.distinct('tags');
    res.json({ tags: tags });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
