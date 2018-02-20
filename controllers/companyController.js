var express = require('express');
var router = express.Router();
const company = require('../models/company')

/* GET home page. */
router.get('/', function (req, res) => {

            //get all companies
            Company.find().then((comapnies) => {
                    res.send(companies)
                })

            })

        // send all compnies to an HBS file

        module.exports = router;

        //SHOW

        //NEW

        //CREATE

        //EDIT

        //UPDATE

        //DELETE

        module.exports = router