'use strict';

const conn = require('./lib/connectMongoose');
const Ad = require('./models/Ad');

conn.once('open', async () => {
  try {
    await initAds();
    conn.close();
  } catch (err) {
    console.error('Hubo un error:', err);
    process.exit(1);
  }
});

const initAds = async () => {
  await Ad.deleteMany();
  await Ad.insertMany([
    {
      name: 'iPhone XS',
      type: 'buy',
      price: 900,
      picture:
        'https://www.tuimeilibre.com/4075-large_default/apple-iphone-11-64gb-negro-libre.jpg',
      tags: ['lifestyle'],
    },
    {
      name: 'iPhone 11',
      type: 'buy',
      price: 1200,
      picture:
        'https://www.tuimeilibre.com/4075-large_default/apple-iphone-11-64gb-negro-libre.jpg',
      tags: ['lifestyle'],
    },
  ]);
};
