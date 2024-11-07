import { useState,useEffect } from 'react'


function App() {
  const [currentTab, setCurrentTab] = useState(0)
  const [ tabData,setTabData ] = useState({})
  const [load,setLoad] =useState(true)

  let style = {backgroundColor:"red",padding:"10px 20px",borderRadius:10};

  useEffect(()=>{
    console.log(`fetch req on btn ${currentTab}`)

    setLoad(true)

    fetch(`https://jsonplaceholder.typicode.com/todos/${currentTab}`)
    .then(async res => {
      const data = await res.json()
      setTabData(data)
      setLoad(false)
    })

    // .then(res=>res.json()).then(json=>setTabData(json))

  },[currentTab])

  return <div>

    <button onClick={()=>{setCurrentTab(1)}} style={currentTab == 1 ? style :{}} >Todo 1</button>
    <button onClick={()=>{setCurrentTab(2)}} style={currentTab == 2 ? style :{}} >Todo 2</button>
    <button onClick={()=>{setCurrentTab(3)}} style={currentTab == 3 ? style :{}} >Todo 3</button>
    <button onClick={()=>{setCurrentTab(4)}} style={currentTab == 4 ? style :{}} >Todo 4</button>
    <br></br>
    <br></br>
    {load ? "Loading..." : tabData.title }
    <br></br>
  </div>
}

export default App
