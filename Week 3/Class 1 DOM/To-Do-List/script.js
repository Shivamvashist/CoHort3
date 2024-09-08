

// function getTask(){
//     const task = document.querySelector("input");
//     console.log(task.value);
//     let p = document.querySelector("ul").innerHTML;
//     document.querySelector("ul").innerHTML= `${p.innerHTML} <li>${task.value}</li>`;
//     console.log(p);
// }


// let p = document.querySelector("ul").innerHTML;
// console.log(p.trim());



// console.log(p);

function getTask(){
    const task = document.querySelector("input");
    document.querySelector("ul").innerHTML = document.querySelector("ul").innerHTML + `<li>${task.value}</li>`
}