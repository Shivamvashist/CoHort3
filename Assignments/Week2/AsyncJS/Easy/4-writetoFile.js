// Write to a file
// Using the fs library again, try to write to the contents of a file. 
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

fs.writeFile("a.txt","Hi, I am writing this file from a js code!",(err)=>{
    if(err){
        console.log("file not updated",err);
    }else{
        console.log("File has been updated!")
    }
})