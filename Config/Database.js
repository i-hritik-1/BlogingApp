const mongoose = require("mongoose");


require("dotenv").config();

const connectDB = () =>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{
        console.log("DataBse Connection success.");
    })
    .catch((err)=>{
        console.log("Error Encountered.");
        console.log(err.message);
        console.exit(1);
    })
}

module.exports = connectDB;