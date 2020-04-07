var express = require('express');
var router = express.Router();

const Ad = require('../../models/Ad');

/**
  - Lista de anuncios con posibilidad de paginación. Con filtros por tag, tipo de anuncio
    (venta o búsqueda), rango de precio (precio min. y precio max.) y nombre de artículo
    (que empiece por el dato buscado)
  - Lista de tags existentes
  - Creación de anuncio
 */

/**
 *  Show all Ads
 *  GET /apiv1/ads
 */
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

    const docs = await Ad.list(filter);
    res.json(docs);
  } catch (error) {
    next(error);
  }
});

/**
 *  Show available tags
 * GET /apiv1/ads/tags
 */

module.exports = router;
