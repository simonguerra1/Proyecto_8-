require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/config/db')
const mainRouter = require('./src/api/routes/main')
const cloudinary = require('cloudinary').v2

const app = express()

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

connectDB()

//linea para poder recojer datos json
app.use(express.json())

app.use('/api/v1', mainRouter)

app.use('*', (req, res, next) => {
  return res.status(404).json('Route Not Found.')
})

app.listen(3000, () => {
  console.log('Servidor levantado: http://localhost:3000')
})
