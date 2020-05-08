'use strict';

const cote = require('cote');
const jimp = require('jimp');

const responder = new cote.Responder({ name: 'thumbnail responder' });

// Create a 100x100 thumbnail with JIMP
const createThumbnail = async (path, filename) => {
  const thumbnail = await jimp.read(path);
  thumbnail.resize(100, jimp.AUTO);

  await thumbnail.writeAsync(`../public/images/thumbnails/${filename}`);
};

responder.on('thumbnail', async (req, done) => {
  const path = `../${req.path}`;
  const filename = `thumb-${req.filename}`;
  await createThumbnail(path, filename);

  done(filename);
});
