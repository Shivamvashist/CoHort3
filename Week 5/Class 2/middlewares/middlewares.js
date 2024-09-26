//Assignments => 
// Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console
// Create a middleware that counts total number of requests sent to a server. Also create an endpoint that exposes it


const express = require("express");

const app = new express;
let requests = 0;
function noOfRequests(req,res,next){
    
    requests += 1;
    console.log("Total requests : "+requests)
    next();
}

function requestInfo(req,res,next){
    console.log("Method : "+req.method)

    const fullUrl = req.protocol + '://' + req.get(`host`)+ req.originalUrl;//re.hostname
    console.log(`Full URL is: ${fullUrl}`);

    console.log("Time : "+new Date());
    next();
}



app.get("/admin",function(req,res){
    res.json({
        "Total Requests" : `${requests}`


    })
})



app.use(noOfRequests);
app.use(requestInfo);

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
