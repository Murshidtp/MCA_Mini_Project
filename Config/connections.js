const mongoose = require('mongoose');

 mongoose.connect(
   "mongodb://127.0.0.1:27017/Demo",
   { 
     useNewUrlParser: true,
     useUnifiedTopology: true,
    },
    function(err,db)
     {
        if(err) throw err;
       var database = mongoose.connection;
       console.log('Database Created Successfully')
 });

