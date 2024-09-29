const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
// const mongoose = require("mongoose");
const { UserModel, TodoModel } = require("./db");

const app = express();
 
app.use(cors());
app.use(express.json());

const JWT_SECRET = "ilovemycode123"

function auth(){

}



app.post("/signup",function(req,res){
    const username = req.body.username;
    const password = req.body.password;

})

app.post("/signin",function(req,res){
    const username = req.body.username;
    const password = req.body.password;
})

app.post("/todo",auth,function(req,res){

})

app.get("/todos",auth,function(req,res){
    
})

app.listen(3000)