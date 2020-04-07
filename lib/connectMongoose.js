'use strict';

const mongoose = require('mongoose');

const conn = mongoose.connection; // nos podemos suscribir para escuchar el estado de la conexión

conn.on('open', () => {
  console.log('Conectado a MongoDB en', conn.name);
});

conn.on('error', (err) => {
  console.error('Error de conexión', err);
  process.exit(1);
});

mongoose.connect('mongodb://localhost/nodepop', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = conn;
