import React, { useState,useEffect } from 'react';





function App() {

  const [counterVisible,setCounterVisible]=useState(true);

  const [count, setCount] = useState(0);

  useEffect(function() {
    console.log("on Mount")
    let clock = setInterval(function(){
      console.log("inside Interval")
      setCount(count=>count+1);
    },1000);
  
    return function(){
      console.log("on unmount")
      clearInterval(clock)
    }
  },[]);

  useEffect(function(){
    setInterval(()=>{
      setCounterVisible(c=>!c)
    },10000)
  },[])

  return <div>
    <h1>Hi There!</h1>
    {counterVisible ? <Counter count={count} ></Counter> : null}
  </div>



}

function Counter(props) {

  function onClickFn(){
    setCount(props.count + 1);
  }

  return<div> 
  <h1>{props.count}</h1>
  <button onClick={onClickFn}>Counter</button>
  </div>
 
}

export default App