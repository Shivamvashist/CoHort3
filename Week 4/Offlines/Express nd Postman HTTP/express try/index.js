const express = require("express");

function getSum(num){
    let sum = 0;
    for(let i = 0 ; i<=num ; i++){
        sum = sum+i;
    }
    return sum; 
}

const app = express();

app.get("/",function(req,res){
    // res.send("Hi!");
    const n = req.query.n;
    const sum = getSum(n).toString();
    res.send(`The sum from 0 to ${n} is ${sum}.`);
})

app.listen(3000);