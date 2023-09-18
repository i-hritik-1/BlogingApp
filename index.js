const express = require("express");
const app  = express();

require("dotenv").config();
PORT = process.env.PORT || 4000;

app.use(express.json());

const Blog = require("./Routes/Blog");
app.use("/api/v1",Blog);

const dbConnect = require("./Config/Database");
dbConnect();

app.listen(PORT, ()=>{
    console.log(`Running Successfully at PORT ${PORT}`);
})


app.get("/",(req,res)=>{
    res.send(`<h1> This is my home page </h1>`);
});