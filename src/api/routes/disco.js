const upload = require('../../middlewares/file')
const {
  getDiscos,
  postDisco,
  updateDisco,
  deleteDisco,
  getDisco
} = require('../controllers/disco')

const discosRouter = require('express').Router()

discosRouter.get('/', getDiscos)
discosRouter.post('/', upload.single('img'), postDisco)
discosRouter.put('/:id', upload.single('img'), updateDisco)
discosRouter.delete('/:id', deleteDisco)
discosRouter.get('/:id', getDisco)

module.exports = discosRouter
