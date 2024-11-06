export function Postcomponent(props){
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