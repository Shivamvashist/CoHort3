import axios from "axios"

export default async function Todos(){

    async function getTodo(){
        const todoData = await axios.get("https://jsonplaceholder.typicode.com/todos")
        return todoData.data;
    }

    const todos = await getTodo()

    return <div className="flex flex-wrap">
        {todos.map((todo: Itodo) => <Todo title={todo.title} completed={todo.completed} />)}
    </div>


}

interface Itodo {
    title:string,
    completed:boolean
};

function Todo( {title,completed}:Itodo ){

    return <div className="flex w-96  px-4 py-4 border border-white/20 m-2">
        
        <div className="flex gap-2"><input type="checkbox" checked={completed} /><h1 className="font-bold text-2xl font-sans">{title}</h1></div>
    </div>

}

