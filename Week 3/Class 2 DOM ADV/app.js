todo=[];

function addTask(){
    todo.push(document.querySelector("input").value);
    document.querySelector("input").value="";
    render();
}

function delTask(i){
    todo.splice(i,1)
    render();
}


document.querySelector(".taskInp").addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        addTask()
        console.log("run1")
    }
});


function render(){
    document.querySelector(".taskList").innerHTML = "";
    for (let i = 0; i<todo.length;i++){
        TaskComponent(i)
    }
}

function TaskComponent(i){
    div = document.createElement("div");
    div.className="TaskEl"
    
    input = document.createElement("input");
    input.type="checkBox";
    h1 = document.createElement("h1");
    h1.innerHTML=todo[i];
    btn = document.createElement("button");
    btn.innerHTML="delete"
    btn.className="delBtn"
    btn.id=`task${i}`
    btn.onclick=()=>{
        delTask(i)
    };

    div.appendChild(input);
    div.appendChild(h1);
    div.appendChild(btn);


    document.querySelector(".taskList").appendChild(div);
}