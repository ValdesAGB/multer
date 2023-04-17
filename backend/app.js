const express = require('express')
const mongoose = require('mongoose')
const formDataRoutes = require('./routes/formData')
const path = require('path')

const app = express()
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  )
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  )
  next()
})
app.use(express.json())

mongoose
  .connect(
    'mongodb+srv://ValdesAGB:Pernelle13%40@formdata.kugg4id.mongodb.net/?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'))

app.use('/api/cover', formDataRoutes)
app.use('/images', express.static(path.join(__dirname, 'images')))
module.exports = app
