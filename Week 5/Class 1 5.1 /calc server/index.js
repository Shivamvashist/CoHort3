const express = require("express");

const app = new express;

app.get("/",function(req,res){
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

