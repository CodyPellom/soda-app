var express = require('express');
var router = express.Router();
const company = require('../models/company')

/* GET home page. */
router.get('/', function (req, res) => {

    //get all companies
    Company.find().then((comapnies) => {
            res.render('company/index', {
                    companies: companies)
            })

    })

})

// send all compnies to an HBS file


//NEW
//GET
router.get('/new', (req, res) => {
res.render('company/new')
    
})
//CREATE
//POST
router.post('/', (req, res) => {
    const newCompany = new Company({
        name: req.body.name,
        location: req.body.location})
})

newCompany.save().then((savedCompany) => {
    res.redirect(`/companies/${savedCompany._id}`)
})

//SHOW
router.get('/:id', (req, res) => {
    Company.findById(req.params.id).then((company) => {
        res.render('company/show', {
            company: company
        })
    })
})



//EDIT
//GET

//UPDATE
//PUT/PATCT

//DSTROY
//DELETE

module.exports = router