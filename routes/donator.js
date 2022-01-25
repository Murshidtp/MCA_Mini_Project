var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    
    res.render('donator/donator', {});   
});
// router.post('/donator/donator', function(req, res, next){
//     console.log(req.body);
// });

module.exports = router;
