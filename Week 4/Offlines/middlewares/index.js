const express = require("express")

const app = express();

// function isOldEnough(age){
//     if (age>=14){
//         return true;
//     } else {
//         return false;
//     }
// }

function isOldEnoughMiddleware(req,res,next){
    if (req.query.age>=14){
        next();
    } else {
        res.json({
            msg : "Sorry! You are not eligible!"
        })
    }
}
// If any middleware is need to be used in all next midlewares then use => app.use(<middleware name>)

app.use(isOldEnoughMiddleware);

app.get("/ride1", function(req,res){
    res.json({
        msg: "You have Successfully riden the Ride 1 !"
    })
})

app.get("/ride2", function(req,res){
    res.json({
        msg: "You have Successfully riden the Ride 2 !"
    })
})

// app.get("/ride2", function(req,res){
//     if(isOldEnough(req.query.age)){
//         res.json({
//             msg: "You have Successfully riden the Ride 2 !"
//         })
//     } else {
//         res.status(411).json({
//             msg : "Sorry! You are not eligible!"
//         })
//     }
    
// })

app.listen(3000);