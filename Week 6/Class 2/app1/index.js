const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const JWT_PROMISE = "himynameisshivam";

app.use(express.json());

const users=[];

app.post("/signup",function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    // users.push({
    //     username:username,
    //     password:password
    // })

    users.push({
        username,
        password
    })
    
    res.json({
        msg:"Successfully Signed Up!"
    })
})

app.post("/signin",function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    const findUser = users.find(user=>user.username===username && user.password===password);

    if(findUser){
        const token = jwt.sign({username:findUser.username},JWT_PROMISE)
        res.json({
            msg:"Successfully Signed In!",
            token : token
        })
    }else{
        res.status(403).json({
            msg:"Invalid credentials"
        })
    }
})

app.get("/me",function(req,res){
    const token = req.headers.token
    const decodeInfo = jwt.verify(token,JWT_PROMISE)
    const decodedusername = decodeInfo.username;
    const findUser = users.find(user=>user.username===decodedusername)
    if(decodeInfo.username){
        res.json({
            username:findUser.username,
            password:findUser.password
        })
    }else{
        res.json({
            msg : "invalid Token"
        })
    }
    
})

app.listen(3000);