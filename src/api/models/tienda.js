const mongoose = require('mongoose')

const tiendaSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    adress: { type: String, required: true },
    discos: [{ type: mongoose.Types.ObjectId, ref: 'discos' }]
  },
  {
    timestamps: true
  }
)
const Tienda = mongoose.model('tiendas', tiendaSchema, 'tiendas')
module.exports = Tienda
