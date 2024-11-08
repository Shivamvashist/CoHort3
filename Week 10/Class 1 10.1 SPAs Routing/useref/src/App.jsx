import { useState,useEffect,useRef } from 'react'
import {BrowserRouter,Routes,Route,Outlet,Link} from 'react-router-dom'

function App() {

  const inputRef = useRef();

  return <div>
    Sign up
    <input ref={inputRef} type='text' placeholder='name'></input>
    <input type='text' placeholder='password'></input>
    <button onClick={()=>{inputRef.current.focus()}}>Submit</button>
  </div>
}



export default App
