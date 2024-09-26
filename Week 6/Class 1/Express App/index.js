const express = require("express");

const app = express();

let users = [{
    name:John
}]

app.use(express.json());

app.post("/signup",function(req,res){
    
})

app.post("/signin",function(req,res){
    
})


app.listen(3000);