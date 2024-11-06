import { useState,useEffect } from 'react'


function App() {
  const [count,setCount] = useState(0);

  useEffect(()=>{
    setInterval(()=>{
      setCount(c => c+1)
    },1000)
  },[])

  return <div>
    {count}
  </div>

}

export default App
