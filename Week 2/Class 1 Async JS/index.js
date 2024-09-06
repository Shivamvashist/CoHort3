// function sum(a,b){
//     return a+b ;
// }

// let ans = sum(2,3);

// console.log(ans);

const fs = require("fs");

function func(err,data){
    if(err){
        console.log("File Not Found!");
    }
    else{
        console.log(data);
    }
}

fs.readFile("b.txt","utf8",func);
fs.readFile("a.txt","utf8",func);

setTimeout(function morning(){
    console.log("Good Morning!")
},2000)


let i = 0;
while(i<10000000000){
    i++
}

console.log("Done!")
