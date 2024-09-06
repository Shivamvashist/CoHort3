function random(res) {
    res();
}

let p = new Promise(random);


function a(){console.log("Promise Completed")}


p.then(a);

console.log(p);