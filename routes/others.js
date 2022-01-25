var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    let donate = [
        {
            id : "1",
            name : "Murshid",
            mobileno : "7907406874",
            place : "makkarapparamba",
            district : "malappuram",
            food :"meals",
            quantity: "5"
        },
        {
            id : "2",
            name : "Murshid",
            mobileno : "7907406874",
            place : "makkarapparamba",
            district : "malappuram",
            food :"meals",
            quantity: "7"
        }
    ]
    res.render('others/foodcollector', {donate});

});
module.exports = router;

