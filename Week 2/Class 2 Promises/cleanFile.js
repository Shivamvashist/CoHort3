// const fs = require('fs');

// function onDone(){
//     console.log("File has been cleaned!");
// }



// function cleanFile(file){
//     let fileTxt;
//     fs.readFile(file,encoding="utf-8",(err,data)=>{
//         if(err){
//             console.log("can't reach file");
//         }else{
//             fileTxt = data;
//         }
//     });
//     console.log(fileTxt);
    
// }

// cleanFile("a.txt");


const fs = require("fs");

function onDone(){
    console.log("File has been Cleaned!");
}

function cleanFile(file,fn){
    fs.readFile(file,encoding="utf8",(err,data)=>{
        if(err){
            console.log("File not Found!")
        }else{
            let fileTxt = data;
            fs.writeFile(file,fileTxt.trim(),(err)=>{
                if(err){
                    console.log("Failed to update file!",err);
                }else{
                    fn();
                }
            })
        }
    })

    
}
// cleanFile("a.txt",onDone);

function cleanFilePromisified(file){
    return new Promise(resolve => cleanFile(file,resolve));
}

cleanFilePromisified("a.txt").then(onDone);