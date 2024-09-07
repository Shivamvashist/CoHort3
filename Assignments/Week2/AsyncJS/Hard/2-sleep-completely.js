/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

// function sleep(milliseconds) {
// }

// module.exports = sleep;

function haltThread(ms){
    return new Promise(resolve=>{
        const time = new Date().getTime();
        while(new Date().getTime()-time < ms ){
            resolve();
        }
    })
}

haltThread(10000).then(()=>{
    console.log("The thread is now free and working on other tasks")
})