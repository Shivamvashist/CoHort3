import { useState,useEffect,useRef } from 'react'
import {BrowserRouter,Routes,Route,Outlet,Link} from 'react-router-dom'



//BUILDING a clock with a start and stop button;


function App() {

  const [currentCount,setCurrentCount] = useState(1);

  // const [timer,setTimer]=useState(0);
// We will use useRef here instead of useState to prevent extra rerender and also this state is useless as no where shown in html

const timer = useRef()

  function onStart(){
    let value = setInterval(()=>{
      setCurrentCount(c=>c+1)
    },1000)
    timer.current=value
  }

  function onStop(){
    clearInterval(timer.current);
  }

  return <div>
    <Signup />

    <div style={{padding:10}}>
      <button onClick={onStart}  style={{margin:10}}>Start Clock</button>
      {currentCount}
      <button onClick={onStop} style={{margin:10}}>Stop Clock</button>
    </div>


  </div>
}




function Signup() {

  const inputRef = useRef();

  return <div>
    Sign up
    <input ref={inputRef} type='text' placeholder='name'></input>
    <input type='text' placeholder='password'></input>
    <button onClick={()=>{inputRef.current.focus()}}>Submit</button>
  </div>
}
export default App
