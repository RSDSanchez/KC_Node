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
      picture: 'iphonexs.jpg',
      tags: ['mobile'],
    },
    {
      name: 'iPhone 11',
      type: 'buy',
      price: 1200,
      picture: 'iphone11.jpg',
      tags: ['mobile'],
    },
    {
      name: 'MacBook Pro 16',
      type: 'sell',
      price: 2500,
      picture: 'macbookpro16.jpg',
      tags: ['work'],
    },
    {
      name: 'iPhone 11',
      type: 'sell',
      price: 1000,
      picture: 'iphone11.jpg',
      tags: ['mobile'],
    },
    {
      name: 'iPad Air',
      type: 'sell',
      price: 500,
      picture: 'ipadair.jpg',
      tags: ['mobile'],
    },
    {
      name: 'iPad Pro',
      type: 'buy',
      price: 1100,
      picture: 'ipadpro.jpg',
      tags: ['work'],
    },
    {
      name: 'Apple Watch Serie 3',
      type: 'sell',
      price: 250,
      picture: 'applewatchs3.jpg',
      tags: ['lifestyle'],
    },
    {
      name: 'iWatch Serie 5',
      type: 'buy',
      price: 500,
      picture: 'applewatchs5.jpg',
      tags: ['lifestyle'],
    },
    {
      name: 'MacBook Air (new)',
      type: 'buy',
      price: 900,
      picture: 'macbookairnew.jpg',
      tags: ['work'],
    },
    {
      name: 'MacBook Air',
      type: 'buy',
      price: 1200,
      picture: 'macbookair.jpg',
      tags: ['work'],
    },
  ]);
};
