const mongoose = require("mongoose");


const comments = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId, // Reference for another schema
        ref:"Post", //reference to the post models
    },
    user:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    }
});

module.exports = mongoose.model("Comment",comments);