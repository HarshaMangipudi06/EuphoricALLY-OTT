//import express through "require" here
const express = require("express");

//create application through express
const app = express();

//middleware to breakdown request that express understands or parses into a javascript object 
app.use(express.json());

//home route
app.get("/", (req,res)=> 
   {
 res.send("This is EuphoricALLY OTT Backend");
   }
);

//temporary test route
app.post("/test", (req,res)=>
    {
        console.log(req.body);
    
    res.json({
        message : "Data received successfully",
        receivedData : req.body
    });

});

//export the app
module.exports = app;






