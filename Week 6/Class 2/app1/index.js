//Create an AUTH middleware;

const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const JWT_PROMISE = "himynameisshivam";

app.use(express.json());

// function AuthMid(req,res,next){
//     const token = req.header.token;
//     const decode = jwt.verify(token,JWT_PROMISE)

//     // const findUser = users.find(user=>user.username===decode.username)

//     if(decode.username){
//         next();
//     }else{
//         res.json({
//             msg:"Unauthorized access!"
//         })
//     }
// }

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
        res.header("token",token)
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
    // const findUser = users.find(user=>user.username===decodedusername)
    if(!decodedusername){
        res.json({
            msg : "invalid Token"
        })
        
    }else{
        res.json({
            username:decodedusername,
            msg:"Session continues"
        })
    }
    
})

app.get("/admin",function(req,res){
    res.json({
        users
    })
})

app.listen(3000);