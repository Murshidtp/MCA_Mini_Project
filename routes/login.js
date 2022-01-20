var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/', function(req, res, next) {
    res.render('Login/login', {});
    
  });
/* GET donator signup page. */
  router.get('/donator', function(req, res, next) {
    res.render('Login/Donatersignup', {});
  });
  /* GET others signup page. */
  router.get('/others', function(req, res, next) {
    res.render('Login/othersignup', {});
  });
  module.exports = router;