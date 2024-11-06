import React,{useState} from "react"
function App() {
  const [count,setCount]=useState(0)

  return (
    <div style={{backgroundColor:"#dfe6e9",height:"100vh"}}>
      <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",gap:20}}>
          <Postcomponent />
          <Postcomponent />
          <Postcomponent />
      </div>
    </div>

  )
}

function Postcomponent(){
  return <div style={{
    width:300,
    borderRadius:10,
    border:"1px solid black",
    backgroundColor: "white",
    padding:20
  }}>
    <div style={{display:"flex",gap:16}}>
      <img src={"https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"} style={{
        width:40,height:40,borderRadius:20
      }}/>
      <div>
        <b>100xdevs</b>
        <div>23,888 followers</div>
        <div>12m</div>
      </div>
    </div>
    <div>What to know and how to win big!</div>
  </div>
}

export default App
