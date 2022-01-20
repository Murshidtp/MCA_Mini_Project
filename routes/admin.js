var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('admin/admin', {});

});
router.get('/view-foodcollector', function(req, res, next){
    res.render('admin/view-foodcollector', {});

});
router.get('/', function(req, res, next){
    res.render('admin/admin', {});

});
module.exports = router;
