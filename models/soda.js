const mongoose = require('mongoose'
const sodaschema = require('../db/schemas/sodaSchema')

const Soda = mongoose.model('soda', sodaSchema)


module.exports = Soda