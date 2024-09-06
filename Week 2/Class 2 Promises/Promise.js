// function setTimeoutPromisified(ms){
//     return new Promise(resolve => setTimeout(resolve, ms));
// }



// function main(){
//     console.log("Hi")
// }

// setTimeoutPromisified(4000).then(main);

// function waitfor3s(resolve){
//     setTimeout(resolve,3000);
// }

function main(){
    console.log("Done 1");
}

function PromiseTime(ms){
    return new Promise((resolve) =>{ setTimeout(resolve,ms)});
}

PromiseTime(3000).then(main);


// function setTimeoutPromisified() {
//     return new Promise(()=>{
//         console.log("Done");
//     });
// }
