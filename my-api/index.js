const app = require("./app");
const dotenv=require('dotenv')
dotenv.config({path:'./config.env'})
const mongoose = require('mongoose')


app.listen(8098,function () {
    console.log("This is from env "+ process.env.RUNNING_PORT)
});


