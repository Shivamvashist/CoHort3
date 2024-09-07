/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

// function wait(n) {
// }

// module.exports = wait;


function promisifiedSetTimeout(n){
    return new Promise(resolve=>{
        setTimeout(resolve,n*1000);
    })
}

promisifiedSetTimeout(2).then(()=>{
    console.log("Done!")
})