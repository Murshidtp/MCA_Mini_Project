var express = require('express');
var router = express.Router();

var Donator = require('../Models/donatormodel')
var Food = require('../Models/foodmodel');
var FoodDetails = require('../Models/foodmodel');
const dotenv = require('dotenv')

dotenv.config()


router.get('/', (req,res) => {
    FoodDetails.find((err, docs) => {
    if(!err){
        res.render("others/foodcollector", {
    list: docs
    });
    }
    else {
    console.log('Failed to retrieve the Course List: '+ err);
    }
    });
    });  

    router.get('/contact', function(req, res, next){
        res.render('contact', {});
    });
    router.get('/about', function(req, res, next){
        res.render('about', {});
    });


 

    
router.get('/message', function(req, res, next){
    res.render('others/message', {});
});




module.exports = router;

