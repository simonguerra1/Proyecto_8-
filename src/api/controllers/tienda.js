const Tienda = require('../models/tienda')

const getTiendas = async (req, res, next) => {
  try {
    const tiendas = await Tienda.find()
    return res.status(200).json(tiendas)
  } catch (error) {
    console.log(error)

    return res.status(400).json('Error')
  }
}

const getTienda = async (req, res, next) => {
  try {
    const { id } = req.params
    const tienda = await Tienda.findById(id).populate('discos')
    return res.status(200).json(tienda)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const postTienda = async (req, res, next) => {
  try {
    const newTienda = new Tienda(req.body)
    const tiendaSaved = await newTienda.save()
    return res.status(201).json(tiendaSaved)
  } catch (error) {
    console.error('Error Saving Disco:', error)
    return res.status(400).json('Error')
  }
}

const updateTienda = async (req, res, next) => {
  try {
    const { id } = req.params
    const { name, adress, discos: nuevosDiscos } = req.body

    const tienda = await Tienda.findById(id)

    if (name) tienda.name = name
    if (adress) tienda.adress = adress

    await Tienda.updateOne(
      { _id: id },
      { $addToSet: { discos: { $each: nuevosDiscos } } }
    )

    const tiendaActualizada = await tienda.save()
    return res.status(200).json(tiendaActualizada)
  } catch (error) {
    console.log(error)
    return res.status(400).json('Error')
  }
}

const deleteTienda = async (req, res, next) => {
  try {
    const { id } = req.params
    const tiendaDeleted = await Tienda.findByIdAndDelete(id)
    return res.status(200).json({
      message: 'Elemento Eliminado',
      elemento: tiendaDeleted
    })
  } catch (error) {
    return res.status(400).json('Error')
  }
}

module.exports = {
  getTiendas,
  postTienda,
  updateTienda,
  deleteTienda,
  getTienda
}
