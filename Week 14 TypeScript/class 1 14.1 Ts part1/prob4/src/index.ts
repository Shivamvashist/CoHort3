//create a fn that takes another fn as an input and runs it after 1 sec.

function delayedCall(fn:()=>void){
    setTimeout(fn,2000)
}

let fn1 = () => {
    console.log("Hello")
}

delayedCall(fn1);

// delayedCall(()=>{
//     console.log("Hello")
// })
