const express = require("express");
const app = new express;

app.get("/",function(req,res){
    res.json({
        'hi':1
    });
    
})

app.listen(3000);