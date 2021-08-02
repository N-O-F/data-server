require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const server = express();
server.use(express.json())
server.use(express.urlencoded({extended:true}));
server.use(cors())
const PORT = process.env.PORT || 5002;

const dataRouter = require("./routers");
server.use("/data",dataRouter)



mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true
}).then(()=>{
    server.listen(PORT);
    console.log(`started data server at ${PORT} at ${Date.now()}`)
}).catch(err=>{
    console.error(err);
})