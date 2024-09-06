
// function main(){
//     console.log("Main is called!");
// }

// // waitfor3s(main);

// function PromiseTime(ms){
//     let p = new Promise(resolve=> {
//         setTimeout(resolve,ms);
//     });
//     console.log(p);
//     return p;
    
// }

// PromiseTime(3000).then(main);


//Sync 4=> 1,2,3,4
//Async 4=> (1,2,3,4)=>2,3,1,4

const fs = require("fs");

let p = fs.readFile("./c.txt","utf8");

console.log(p);
