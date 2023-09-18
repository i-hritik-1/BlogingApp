const mongoose = require("mongoose");

const posts = new mongoose.Schema({
   title:{
    type:String,
    required:true,
   },
   body:{
    type:String,
    required:true,
   },
   likes:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Like",
   }],
   comments:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Comment",
   }],
});


module.exports = mongoose.model("Post",posts)

/*

    Agar ek model ke andar doosra model use kar raha ho to id use karni hai.
    
*/