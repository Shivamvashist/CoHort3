//PromisifiedWriteFile

const fs = require("fs");

fs.writeFile("b.txt","Hi, this file was written by me",(err)=>{
    if(err){
        console.log("Failed to update file!")
    }else{
        console.log("File has been updated!")
    }
});