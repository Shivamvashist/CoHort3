const express = require("express");

const app = new express;
let requests = 0;
function noOfRequests(req,res,next){
    
    requests += 1;
    console.log(requests)
    next();
}

app.use(noOfRequests);

// app.get("/",noOfRequests,function(req,res){
app.get("/",function(req,res){
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    res.send("Express calc")
})



app.get("/add",function(req,res){
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    const sol = a+b;
    res.send(`The sum of ${a} and ${b} = ${sol}`);
})

app.get("/subtract",function(req,res){
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    const sol = a-b;
    res.send(`The difference of ${a} and ${b} = ${sol}`);
})

app.get("/multiply",function(req,res){
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    const sol = a*b;
    res.send(`The product of ${a} and ${b} = ${sol}`);
})

app.get("/divide",function(req,res){
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    const sol = a/b;
    res.send(`The quotient of ${a} and ${b} = ${sol.toFixed(5)}`);
})

app.listen(3000);

