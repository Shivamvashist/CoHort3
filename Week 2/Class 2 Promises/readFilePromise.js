const fs = require("fs");

function read(data){
    console.log(data);
}

function error(err){
    console.log("FIle not found: "+err)
}

function readFileAsync(file,encoding){
    return new Promise((resolve,reject)=>{
        fs.readFile(file,encoding,(err,data)=>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}

readFileAsync("a.txt","utf8").then(read).catch(error);