import { createContext, useContext, useState } from 'react'

//Light bulb , button - on/off 

const BulbContext = createContext();

function BulbProvider({children}){

  const [bulbOn,setBulbOn] = useState(true);

  return <BulbContext.Provider value={{
    bulbOn: bulbOn,
    setBulbOn: setBulbOn
  }}>
    {children}
  </BulbContext.Provider>


}


function App() {



  return <div>
    
    <BulbProvider>
      <LightBulb />
      <LightBulb />
    </BulbProvider>

  </div>
}

function LightBulb() {
  return <div>
    <BulbState />
    <ToggleBulbState  />
  </div>
}

function BulbState() {

  const {bulbOn} = useContext(BulbContext)

  return <div>
    {/* {props.bulbOn ? <svg style={{height:90}} fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 468.759 468.759" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M234.38,0c-72.257,0-131.039,59.728-131.039,133.146c0,29.205,16.976,55.49,31.951,78.672 c8.831,13.66,17.165,26.563,19.036,36.209c5.261,27.225,8.275,91.806,8.299,92.456c0.212,4.516,3.921,8.068,8.449,8.068h126.611 c2.329,0,4.552-0.952,6.147-2.642c1.596-1.697,2.424-3.967,2.293-6.283c-1.572-28.307-0.484-78.489,9.127-92.699 c1.666-2.459,3.582-5.178,5.65-8.156c16.656-23.759,44.514-63.541,44.514-105.632C365.406,59.734,306.636,0,234.38,0z M307.062,229.092c-2.146,3.047-4.091,5.85-5.805,8.367c-13.252,19.588-13.074,72.359-12.389,94.193H179.114 c-0.993-18.535-3.794-64.025-8.195-86.822c-2.494-12.874-11.266-26.451-21.42-42.183c-13.716-21.226-29.247-45.273-29.247-69.496 c0-64.096,51.199-116.235,114.122-116.235c62.924,0,114.123,52.139,114.123,116.235 C348.502,169.911,322.554,206.956,307.062,229.092z M168.864,361.118h131.033v65.521c0,12.318-7.979,22.662-19.026,26.445 c-2.052,8.973-10.025,15.675-19.612,15.675h-53.765c-9.587,0-17.566-6.702-19.612-15.675 c-11.038-3.783-19.024-14.127-19.024-26.445v-65.521H168.864z M215.985,41.304c0.919,3.212-0.931,6.567-4.152,7.48 c-59.32,17.002-59.92,80.741-59.92,83.442c0,3.34-2.692,6.059-6.041,6.064h-0.012c-3.333,0-6.041-2.687-6.053-6.023 c0-0.75,0.473-75.566,68.698-95.116C211.694,36.232,215.066,38.083,215.985,41.304z M319.119,163.687 c-1.194,1.327-2.843,1.998-4.492,1.998c-1.442,0-2.902-0.515-4.055-1.555c-2.482-2.24-2.684-6.064-0.438-8.553 c19.15-21.258,3.168-47.242,3.003-47.502c-1.785-2.831-0.935-6.567,1.892-8.346c2.825-1.785,6.561-0.932,8.346,1.894 C330.728,113.3,339.311,141.294,319.119,163.687z"></path> </g> </g></svg> : <svg style={{height:90}} fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 468.759 468.759" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M234.374,0c-72.256,0-131.033,59.728-131.033,133.146c0,29.205,16.976,55.49,31.951,78.672 c8.825,13.66,17.153,26.563,19.024,36.209c5.267,27.225,8.281,91.806,8.311,92.456c0.207,4.516,3.922,8.068,8.449,8.068h126.611 c2.323,0,4.54-0.952,6.142-2.642c1.596-1.697,2.43-3.967,2.299-6.283c-1.572-28.307-0.49-78.489,9.127-92.699 c1.666-2.459,3.582-5.178,5.65-8.156c16.645-23.759,44.514-63.541,44.514-105.632C365.406,59.734,306.63,0,234.374,0z M307.05,229.092c-2.134,3.047-4.091,5.85-5.805,8.367c-13.246,19.588-13.068,72.359-12.377,94.193h-109.76 c-0.993-18.535-3.783-64.025-8.189-86.822c-2.489-12.874-11.26-26.451-21.427-42.183c-13.71-21.226-29.247-45.273-29.247-69.496 c0-64.096,51.199-116.235,114.128-116.235c62.929,0,114.128,52.139,114.128,116.235 C348.502,169.911,322.554,206.956,307.05,229.092z M168.853,361.118h131.033v65.521c0,12.318-7.979,22.662-19.021,26.445 c-2.046,8.973-10.031,15.675-19.618,15.675h-53.759c-9.587,0-17.572-6.702-19.618-15.675 c-11.038-3.783-19.024-14.127-19.024-26.445v-65.521H168.853z"></path> </g> </g></svg> } */}
    {bulbOn ? <img style={{height:90}} src='https://i.pinimg.com/564x/cc/5d/d8/cc5dd827daf96d90daeb93978f9dddc1.jpg'></img> : <img style={{height:90}} src="https://i.pinimg.com/564x/1d/8e/d5/1d8ed5030732954e3a657a146f61de60.jpg"></img> }
  </div>
}

function ToggleBulbState() {

  const {setBulbOn} = useContext(BulbContext)

  return <div>
    <button onClick={()=>{setBulbOn(c=>!c)}} >Toggle</button>
  </div>
}



// function App() {

//   const [bulb,setBulb] = useState(false)

//   return <div>
//     bulb {bulb ? "on":"off"}
//     <button onClick={()=>{
//       setBulb(!bulb)
//     }}>Toggle</button>
//   </div>
// }

export default App
