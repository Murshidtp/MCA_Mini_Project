const mongoose = require('mongoose')

const DonatorSchema = new mongoose.Schema({

    username : {type:String,required:[true,'username is must required']},
    mobile : {type:Number,required:true},
    email :  {type:String,required:true,unique:true},
    password : {type:String,required:true},
    confirmpass : {type:String,required:true}    
});

// const FoodSchema = new mongoose.Schema({
//     name : {type:String,required:true},
//     mobile : {type:Number,required:true},
//     location : {type:String,required:true },
//     district : {type:String,required:true },
//     food : {type:String,required:true},
//     quantity : {type:Number,required:true}

// }); 

module.exports = mongoose.model('Donatorsignup',DonatorSchema);
// module.exports = mongoose.model('FoodDetails',FoodSchema); 

