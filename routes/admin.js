var express = require('express');
var router = express.Router();


const dotenv = require('dotenv')

dotenv.config()


router.get('/', function(req, res, next){
    res.render('admin/admin', {});

});
router.get('/view-foodcollector', function(req, res, next){
    res.render('admin/view-foodcollector', {});
});
router.get('/', function(req, res, next){
    res.render('admin/admin', {});

});


router.get('/view-donator', function(req, res, next){
    res.render('admin/donators', {});
});



router.get('/', function(req, res, next){
    res.render('admin/admin', {});
});


router.get('/food-needer', function(req, res, next){
    res.render('admin/food-needer', {});
});
router.get('/', function(req, res, next){
    res.render('admin/admin', {});

});


module.exports = router;
