var express = require('express');
var router = express.Router();
var Donator = require('../Models/donatormodel')
var Others = require('../Models/othersmodel')
var Othersignup = require('../Models/othersmodel')
var DonatorDetails = require('../Models/foodmodel');

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

  router.post('/donator', function(req, res, next){
    var DonatorData = new Donator(req.body);
    DonatorData.save((err,doc)=>
    {
      if (!err) {

        res.redirect("/donator");
  
      } else {
  
        console.log("Error during insert: " + err);
  
      }

    });
    
  });


  router.get('/others', function(req, res, next) {
    res.render('Login/othersignup', {});
  });

  router.post('/others', function(req, res, next){
    var OthersData = new Others(req.body);
    OthersData.save((err,doc)=>
    {
      if (!err) {

        res.redirect("/others");
  
      } else {
  
        console.log("Error during insert: " + err);
  
      }

    });
  });
  router.get('/admin/view-foodcollector', (req,res) => {
    Othersignup.find((err, docs) => {
    if(!err){
    res.render("admin/view-foodcollector", {
    list: docs
    });
    }
    else {
    console.log('Failed to retrieve the Course List: '+ err);
    }
    });
    });  

    router.get('/admin/food-needer', (req,res) => {
      Othersignup.find((err, docs) => {
      if(!err){
      res.render("admin/food-needer", {
      list: docs
      });
      }
      else {
      console.log('Failed to retrieve the Course List: '+ err);
      }
      });
      });  

      router.get('/admin/view-donator', (req,res) => {
        DonatorDetails.find((err, docs) => {
        if(!err){
        res.render("admin/donators", {
        list: docs
        });
        }
        else {
        console.log('Failed to retrieve the Course List: '+ err);
        }
        });
        });  
  
  module.exports = router;