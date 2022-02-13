const mongoose = require('mongoose')

const FoodSchema = new mongoose.Schema({
    
    name : {type:String,required:true},
    mobile : {type:Number,required:true},
    location : {type:String,required:true },
    district : {type:String,required:true },
    food : {type:String,required:true},
    quantity : {type:Number,required:true}

});
module.exports = mongoose.model('FoodDetails',FoodSchema);