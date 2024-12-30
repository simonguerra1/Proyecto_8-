const discosRouter = require('./disco')
const tiendasRouter = require('./tienda')
const mainRouter = require('express').Router()

mainRouter.use('/discos', discosRouter)
mainRouter.use('/tiendas', tiendasRouter)

module.exports = mainRouter
