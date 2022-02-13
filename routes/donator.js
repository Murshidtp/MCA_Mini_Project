var express = require('express');
var router = express.Router();
var Food = require('../Models/foodmodel');


const dotenv = require('dotenv')

dotenv.config()

router.get('/', function(req, res, next){
    
    res.render('donator/donator', {});   
});
router.post('/', function(req, res, next){
    var FoodData = new Food(req.body);
    FoodData.save((err,doc)=>
    {
      if (!err) {

        res.redirect('/donatorhome');
  
      } else {
  
        console.log("Error during insert: " + err);
      }
    }); 
  });
  router.get('/contact', function(req, res, next){
    res.render('contact', {});
});
router.get('/about', function(req, res, next){
  res.render('about', {});
});

  


//   router.get('/othershome', (req,res) => {
//     FoodDetails.find((err, docs) => {
//     if(!err){
//         res.render("others/foodcollector", {
//     listo: docs
//     });
//     }
//     else {
//     console.log('Failed to retrieve the Course List: '+ err);
//     }
//     });
//     });  


module.exports = router;
