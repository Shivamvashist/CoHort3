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

app.post("/signin",async function(req,res){
    const email = req.body.email;
    const password = req.body.password;

    const finduser = await UserModel.findOne({
        email:email,
        password:password
    })
    const id = finduser._id;

    if(finduser){
        const token= jwt.sign({id},JWT_SECRET);
        res.header("authorization",token)
        res.json({
            msg:"Logged in!",
            token:token
        })
        
    }

})

function auth(req,res,next){
    const token = req.header.authorization;

    console.log(token);
    const decoded = jwt.verify(token,JWT_SECRET);
    if (decoded){
        req._id = decoded._id;
        next();

    } else {
        res.status(403).json({
            msg:"invalid credentials!"
        })
    }
 
}

app.post("/todo",auth,function(req,res){
    res.send({
        msg:"you are authorized!"
    })
})

app.get("/todos",auth,function(req,res){
    
})

app.listen(3000)