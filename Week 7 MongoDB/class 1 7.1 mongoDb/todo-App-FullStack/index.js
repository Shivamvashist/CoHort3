const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://NinjaVashist:XhRKPWa2Lm8GcfiL@cluster0.abyyl.mongodb.net/todo-app-database");
const { UserModel, TodoModel } = require("./db");

const app = express();
 
app.use(cors());
app.use(express.json());

const JWT_SECRET = "ilovemycode123"

function auth(){

}



app.post("/signup",async function(req,res){
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    await UserModel.create({
        email:email,
        username:username,
        password:password
    })
    res.json({
        msg: "Successfully SignedUp!"
    })

})

app.post("/signin",function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    UserModel.findOne({
        email:
    })

})

app.post("/todo",auth,function(req,res){

})

app.get("/todos",auth,function(req,res){
    
})

app.listen(3000)