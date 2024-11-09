import { useState } from 'react'

//Light bulb , button - on/off 


function App() {

  const [bulb,setBulb] = useState(false)

  return <div>
    bulb {bulb ? "on":"off"}
    <button onClick={()=>{
      setBulb(!bulb)
    }}>Toggle</button>
  </div>
}

export default App
