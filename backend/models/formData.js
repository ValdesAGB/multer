const mongoose = require('mongoose')

const coverSchema = mongoose.Schema({
  nomImage: { type: String, required: true },
  image: { type: String, required: true },
})

module.exports = mongoose.model('Cover', coverSchema)
