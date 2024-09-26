const express = require("express");
const cors = require("cors")
const app = express();

app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.json({
        msg: "Basic output"
    })
})

app.post("/sum",function(req,res){
    const a = Number(req.body.a)
    const b = Number(req.body.b)
    res.json({
        answer: a+b
    })
});

app.listen(3000);