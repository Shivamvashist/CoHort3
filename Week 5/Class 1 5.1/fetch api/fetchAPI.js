const express = require("express");

const app = new express;

app.get("/",function(req,res){

    

    res.json({
        msg : "Hi"
    })
})



app.listen(3000)