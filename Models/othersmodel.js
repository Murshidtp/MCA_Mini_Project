const mongoose = require('mongoose')

const OthersSchema = new mongoose.Schema({

    category : {type:String,required:true},
    name : {type:String,required:true },
    place : {type:String,required:true },
    district : {type:String,required:true },
    phone : {type:Number,required:true},
    email :  {type:String,required:true,unique:true},
    password : {type:String,required:true},
    confirmpass : {type:String,required:true}
});
module.exports = mongoose.model('Othersignup',OthersSchema);
