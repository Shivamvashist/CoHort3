import React, { useState } from 'react';




function App() {
  return <div>
    <h1>Hi There!</h1>
    <Counter></Counter>
  </div>

}

function Counter() {

  const [count, setCount] = useState(0);
  
  function onClickFn(){
    setCount(count + 1);
  }

  return<div> 
  <h1>{count}</h1>
  <button onClick={onClickFn}>Counter</button>
  </div>


  
  
}

export default App