import { useState,useEffect } from 'react'


function App() {
  const [count,setCount] = useState(0);
  const [color,setColor] = useState(true);
  
  useEffect(()=>{
    setInterval(()=>{
      setCount(c => c+1)
    },1000)
  },[])

  useEffect(()=>{
    setColor(!color)
  },[count])

  let bgclr = "yellow";
  {color ? bgclr="green" : bgclr="red"}

  return <div style={{height:36,width:40,color:'white',display:'flex',justifyContent:"center",alignItems:"center",borderRadius:20,backgroundColor:bgclr}}>
    {count}
  </div>

}

export default App
