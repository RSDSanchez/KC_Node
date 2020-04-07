'use strict';

const mongoose = require('mongoose');

const adSchema = mongoose.Schema({
  name: String,
  type: String,
  price: Number,
  picture: String,
  tags: [String],
});

/* adSchema.statics.lista = function (filtro, limit, skip, sort, fields) {
  const query = Ad.find(filtro);
  query.limit(limit);
  query.skip(skip);
  query.sort(sort);
  query.select(fields);
  return query.exec();
}; */

const Ad = mongoose.model('Ad', adSchema);

module.exports = Ad;