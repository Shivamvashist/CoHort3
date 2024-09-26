const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
// const JWT_SECRET = jsonwebtoken();

const JWT_SECRET = "hello2323"

// const users = [];

const users = [{"username":"shi","password":"123"},{"username":"shi","password":"12323231"},{"username":"shivam","password":"123"},{"username":"shivam2","password":"123123"},{"username":"shiv","password":"123123123"}];

// let users = [{
//     name:"John",
//     auth:[{
//         username:John,
//         password:123,
//         Token:John123,
//     }]
// }]

app.use(express.json());

// function generateToken(){
//     let options = [
//         'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
//         'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
//         's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A',
//         'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
//         'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
//         'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1',
//         '2', '3', '4', '5', '6', '7', '8', '9'
//       ]
//     let token = "";
//     for(let i = 0;i<32;i++){
//         token += options[Math.floor(Math.random() * options.length)]
//     }
//     return token;
// }


app.post("/signup",function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    // Input validations using zod later

    users.push({
        username:username,
        password:password
    })

    res.json({
        msg: "Signedup Successfully"
    })
})

app.post("/signin",function(req,res){
    // const token = generateToken();
    const username = req.body.username;
    const password = req.body.password;

    let findUser = users.find(user => user.username == username && user.password == password)

    if(findUser){
        const token = jwt.sign({
            username:username
        },JWT_SECRET)
        console.log(username)

        console.log(findUser.username)

        // findUser.token = token;

        res.json({
            message: token
        })

    }else{
        res.status(403).json({
            msg:"invalid credentials!"
        })
    }
})

app.get("/me",function(req,res){
    const token = req.headers.token;//jwt
    const decodeinfo = jwt.verify(token,JWT_SECRET);
    const username = decodeinfo.username; 
    const findUser = users.find(user => user.username == username);
    if(findUser){
        res.json({
            username:findUser.username,
            password:findUser.password
        })
    }else{
        res.status(403).json({
            msg:"token invalid!"
        })
    }
})

app.get("/admin",(req,res)=>{
    res.send(users);
})




app.listen(3000);