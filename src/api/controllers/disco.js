const deleteFile = require('../../utils/deleteFile')
const Disco = require('../models/disco')

const getDiscos = async (req, res, next) => {
  try {
    const discos = await Disco.find()
    return res.status(200).json(discos)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const getDisco = async (req, res, next) => {
  try {
    const { id } = req.params
    const disco = await Disco.findById(id)
    return res.status(200).json(disco)
  } catch (error) {
    console.log(error)
    return res.status(400).json('Error')
  }
}

const postDisco = async (req, res, next) => {
  try {
    const newDisco = new Disco(req.body)

    if (req.file) {
      console.log(req.file)
      newDisco.img = req.file.path
    }

    const discoSaved = await newDisco.save()

    return res.status(201).json(discoSaved)
  } catch (error) {
    console.log(error)
    return res.status(400).json('Error')
  }
}

const updateDisco = async (req, res, next) => {
  try {
    const { id } = req.params
    const newDisco = new Disco(req.body)
    newDisco._id = id

    if (req.file) {
      newDisco.img = req.file.path
      const oldDisco = await Disco.findById(id)
      deleteFile(oldDisco.img)
    }

    const discoUpdated = await Disco.findByIdAndUpdate(id, newDisco, {
      new: true
    })

    if (discoUpdated) {
      return res.status(200).json(discoUpdated)
    }
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const deleteDisco = async (req, res, next) => {
  try {
    const { id } = req.params
    const discoDeleted = await Disco.findByIdAndDelete(id)

    if (!discoDeleted) {
      return res.status(404).json({ message: 'Disco no encontrado' })
    }

    if (discoDeleted.img) {
      deleteFile(discoDeleted.img)
    }

    return res.status(200).json({
      message: 'Elemento eliminado',
      elemento: discoDeleted
    })
  } catch (error) {
    console.log('Error al eliminar disco:', error)
    return res.status(500).json('Error interno del servidor')
  }
}

module.exports = {
  getDiscos,
  postDisco,
  updateDisco,
  deleteDisco,
  getDisco
}
