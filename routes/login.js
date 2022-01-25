var express = require('express');
var router = express.Router();
var Donator = require('../Models/usermodel')
const dotenv = require('dotenv')

dotenv.config()


/* GET login page. */
router.get('/', function(req, res, next) {
    res.render('Login/login', {});
    });


/* GET donator signup page. */
  router.get('/donator', function(req, res, next) {
    res.render('Login/Donatersignup', {});
  });
  // router.post('/', function(req, res, next){
  //   console.log(req.body);
  // });

  router.post('/', function(req, res, next){
    var myData = new Donator(req.body);
    myData.save((err,doc)=>
    {
      if (!err) {

        res.redirect("/donator");
  
      } else {
  
        console.log("Error during insert: " + err);
  
      }

    });
    //   .then(item => {
    // Donatorres.redirect('/donator');
    //   })
    //   .catch(err => {
    //     res.status(400).send("unable to save to database");
        
    //   });
    // return res.redirect('/donator');
  });

    //  var SaveUser = new UserModel({
    //   username = req.body.username,
    //   mobile = req.body.mobile,
    //   email = req.body.email,
    //   password = req.password,
    //   cpass = req.body.cpass,
    //  });   




  // router.post('/donator', function (req,res, next) {
  //   try{
  //     const newDonator = new UserModel({

  //       username = req.body.username,
  //       mobile = req.body.mobile,
  //       email = req.body.email,
  //       password = req.password,
  //       cpass = req.body.cpass
  //   })
  //   const register =  newDonator.save();
  //   return res.redirect('/donator');

  //   }catch(err){
  //     res.status(400).send(err);
  //   }
    
  // });


  router.get('/others', function(req, res, next) {
    res.render('Login/othersignup', {});
  });
  
  module.exports = router;