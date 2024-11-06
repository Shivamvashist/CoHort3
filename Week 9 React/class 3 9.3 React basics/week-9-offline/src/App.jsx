import React,{useState} from "react"
function App() {
  const [count,setCount]=useState(0)

  return (
    <div style={{backgroundColor:"#dfe6e9",height:"100vh"}}>
      <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",gap:20}}>
          <Postcomponent 
            name={"Shivam"}
            img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREFJYOA4MyzlZSghQSHhkxQx03MUJXMykmrw&s"}
            subtitle={"20k followers"}
            time={"5m ago"}
            description={"Hi! this is my first post"}
          />
          
          <Postcomponent 
            name={"Harkirat"}
            img={"https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"}
            subtitle={"Promoted"}
            description={"This is a promoted post that has no time and promoted written instead of followers count!"}
          />

          <Postcomponent 
            name={"Shivam"}
            img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREFJYOA4MyzlZSghQSHhkxQx03MUJXMykmrw&s"}
            subtitle={"20k followers"}
            time={"3m ago"}
            description={"Alod when aeew do not do anything so we not to do it and lets d ti  asdn and also mnake a sandwhicth"}
          />
      </div>
      <ToggleMessage />
    </div>

  )
}


function Postcomponent(props){
  return <div style={{
    width:300,
    borderRadius:10,
    border:"1px solid gray",
    backgroundColor: "white",
    padding:20,
  }}>
    <div style={{display:"flex",gap:16,fontSize:14}}>
      <img src={props.img} style={{
        width:40,height:40,borderRadius:20
      }}/>
      <div>
        <b>{props.name}</b>
        <div>{props.subtitle}</div>
        {/* CONDITIONAL RENDERING */}
        {props.time ? <div>{props.time} <img style={{width:10,paddingLeft:2}} src="https://www.svgrepo.com/show/6230/clock.svg" /></div> : null}
        {/* or just {props.time && <div>time nd icon</div>} */}
      </div>
    </div>
    <br></br>
    <div>{props.description}</div>
  </div>
}

function ToggleMessage(){

  const [isVisible,setVisible] = useState(false)

  function toggle(){
    setVisible(!isVisible)
  }

  return <div >
    <button onClick={toggle} >Toggle message</button>
    {isVisible ? <p>This is a conditionally rendered message</p> : null} 
  </div>

}

export default App
