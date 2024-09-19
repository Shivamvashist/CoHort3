const express = require("express");
const app = new express;

app.use(express.json());


var users = [{
    name: "John",
    Kidneys: [{
        healthy:false
    },{
        healthy:true
    }]

}]



app.get("/",function(req,res) {
    const JohnKidneys = users[0].Kidneys
    const noOfKidneys = JohnKidneys.length;
    const noOfHealthyKidneys = JohnKidneys.filter(kidney => kidney.healthy === true ).length
    const noOfUnHealthyKidneys = JohnKidneys.filter(kidney => kidney.healthy === false ).length
    // console.log(`Total Kidneys = ${noOfKidneys} \nHealthy Kidneys = ${noOfHealthyKidneys} \nUnHealthy Kidneys = ${noOfUnHealthyKidneys}`)
    res.json({
        noOfKidneys,
        noOfHealthyKidneys,
        noOfUnHealthyKidneys
    })

})

app.post("/",function(req,res) {
    const addKidney = req.body.addKidney
    users[0].Kidneys.push({
        healthy: addKidney
    })
    res.json({
        msg : "Done!!!"
    })
})

app.put("/",function(req,res){

})

app.delete("/",function(req,res){

})

app.listen(3000);