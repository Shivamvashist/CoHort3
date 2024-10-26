import React, { useState,useEffect } from 'react';





function App() {

  const [counterVisible,setCounterVisible]=useState(true);



  useEffect(function(){
    setInterval(()=>{
      setCounterVisible(c=>!c)
    },10000)
  },[])

  return <div>
    <h1>Hi There!</h1>
    {/* {counterVisible ? <Counter></Counter> : null} */}
  <div style={{visibility: counterVisible ? "visible" : "hidden"}} ><Counter></Counter></div>
  </div>


}

function Counter() {

  const [count, setCount] = useState(0);
  

  function onClickFn(){
    setCount(count + 1);
  }

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

  return<div> 
  <h1>{count}</h1>
  <button onClick={onClickFn}>Counter</button>
  </div>


  
  
}

export default App