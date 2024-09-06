// // Promisified version of fs.readfile

// const fs = require("fs");

// function read(err,data){
//     console.log(data);
// }

// fs.readFile("a.txt","utf8",read);


// function PromisifiedSetTimeout(ms) {
//     return new Promise(resolve => setTimeout(resolve,ms))
// };

// PromisifiedSetTimeout(3000).then(()=>{
//     console.log("Promise done !")
// })


// // Proimsified fs.readFile
// function readFileAsync(file,encoding){
//     return new Promise(resolve => {fs.readFile(file,encoding,(err,data) => {resolve(data)}) });
// } 

// readFileAsync("a.txt","utf8");




//RETRY

// const fs = require("fs");

// function readFileAsync(file,encoding) {
//     return new Promise((resolve,reject) => {fs.readFile(file,encoding,(err,data)=>{
//         if (err){
//             reject(err)}
//             else{
//                 resolve(data);
//             }
            
//         })
//     })
// }

// readFileAsync("a.txt","utf8");

// RETRY

// const fs = require("fs");

// function read(err,data){
//     if(err){
//         console.log("File not found!");
//     }else{
//         console.log(data);
//     }
// }

// function PromiseRead(path,encoding){
//     return new Promise((resolve) => {fs.readFile(path,encoding,resolve)});
    
// }

// PromiseRead("a.txt","utf8").then(read);


// TRY 4

const fs = require("fs");

function readFile1(resolve,reject){
    fs.readFile("a.txt","utf8",(err,data)=>{
        if(err){
            reject(err);
        }else{
            resolve(data);
        }
    })
}

function read(data){
        console.log(data);
}

function read2(err){
    console.log("File not found!");
}

// readFile1(read);

function readFileAsync(){
    return new Promise(readFile1);
    
}

readFileAsync().then(read).catch(read2);

