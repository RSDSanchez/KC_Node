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
      tags: ['mobile'],
    },
    {
      name: 'iPhone 11',
      type: 'buy',
      price: 1200,
      picture:
        'https://www.tuimeilibre.com/4075-large_default/apple-iphone-11-64gb-negro-libre.jpg',
      tags: ['mobile'],
    },
    {
      name: 'MacBook Pro 16',
      type: 'sell',
      price: 2500,
      picture:
        'https://www.tuimeilibre.com/4075-large_default/apple-iphone-11-64gb-negro-libre.jpg',
      tags: ['work'],
    },
    {
      name: 'iPhone 11',
      type: 'sell',
      price: 1000,
      picture:
        'https://www.tuimeilibre.com/4075-large_default/apple-iphone-11-64gb-negro-libre.jpg',
      tags: ['mobile'],
    },
    {
      name: 'iPad Air',
      type: 'sell',
      price: 500,
      picture:
        'https://www.tuimeilibre.com/4075-large_default/apple-iphone-11-64gb-negro-libre.jpg',
      tags: ['mobile'],
    },
    {
      name: 'iPad Pro',
      type: 'buy',
      price: 1100,
      picture:
        'https://www.tuimeilibre.com/4075-large_default/apple-iphone-11-64gb-negro-libre.jpg',
      tags: ['work'],
    },
    {
      name: 'iWatch Serie 3',
      type: 'sell',
      price: 250,
      picture:
        'https://www.tuimeilibre.com/4075-large_default/apple-iphone-11-64gb-negro-libre.jpg',
      tags: ['lifestyle'],
    },
    {
      name: 'iWatch Serie 5',
      type: 'buy',
      price: 500,
      picture:
        'https://www.tuimeilibre.com/4075-large_default/apple-iphone-11-64gb-negro-libre.jpg',
      tags: ['lifestyle'],
    },
    {
      name: 'MacBook Air (new)',
      type: 'buy',
      price: 900,
      picture:
        'https://www.tuimeilibre.com/4075-large_default/apple-iphone-11-64gb-negro-libre.jpg',
      tags: ['work'],
    },
    {
      name: 'MacBook Air',
      type: 'buy',
      price: 1200,
      picture:
        'https://www.tuimeilibre.com/4075-large_default/apple-iphone-11-64gb-negro-libre.jpg',
      tags: ['work'],
    },
  ]);
};
