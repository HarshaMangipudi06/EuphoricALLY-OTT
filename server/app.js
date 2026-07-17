//import express through "require" here
const express = require("express");

//create application through express
const app = express();

//handle route
app.get("/", (req,res)=> 
   {
 res.send("This is EuphoricALLY OTT Backend");
   }
);

//export the app
module.exports = app;




