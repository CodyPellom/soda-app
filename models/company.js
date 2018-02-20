const mongoose = require('mongoose'
const companyschema = require('../db/schemas/companySchema')

const Company = mongoose.model('company', companySchema)


module.exports = Company