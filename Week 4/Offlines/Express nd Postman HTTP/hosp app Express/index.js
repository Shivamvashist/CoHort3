const express = require("express");
const app = new express;

app.use(express.json());


var users = [{
    name: "John",
    Kidneys: [{
        healthy:false
    },{
        healthy:true
    },{
        healthy:false
    },{
        healthy:false
    },{
        healthy:false
    },{
        healthy:true
    },{
        healthy:false
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
    const totalKidneys = users[0].Kidneys.length;
    for(let i=0;i< totalKidneys;i++){
        users[0].Kidneys[i] = {healthy:true}
    }
    res.json({
        msg : "Kidneys has been healed!"
    })
})

app.delete("/",function(req,res){
    const newKidneys = [];
    let totalKidneys = users[0].Kidneys;
    for(let i=0;i< totalKidneys.length;i++){
        if(users[0].Kidneys[i].healthy){
            newKidneys.push({healthy:true})
        }
    }
    users[0].Kidneys = newKidneys;
    res.json({msg : "unHealthy kidneys has been removed"})
})



app.listen(3001);
