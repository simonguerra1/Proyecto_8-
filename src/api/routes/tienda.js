const {
  getTiendas,
  postTienda,
  updateTienda,
  deleteTienda,
  getTienda
} = require('../controllers/tienda')

const tiendasRouter = require('express').Router()
tiendasRouter.get('/:id', getTienda)
tiendasRouter.get('/', getTiendas)
tiendasRouter.post('/', postTienda)
tiendasRouter.put('/:id', updateTienda)
tiendasRouter.delete('/:id', deleteTienda)

module.exports = tiendasRouter
