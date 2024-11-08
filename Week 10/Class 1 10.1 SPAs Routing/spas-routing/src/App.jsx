import { useEffect, useState } from 'react'
import { BrowserRouter,Routes,Route,Link, useNavigate,Outlet } from 'react-router-dom'

function App() {

  return <div>
    {/* <a href="/">Allen</a> | <a href="/neet/online-coaching-class-11">Class 11</a> | <a href="/neet/online-coaching-class-12">Class 12</a> */}
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Layout/>} >
          <Route index element={<Landing />} />
          <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
          <Route path="/neet/online-coaching-class-12" element={<Class12Program />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </div>
}

function Layout(){
  return <div>
    <Link to="/">Allen</Link> | 
    <Link to="/neet/online-coaching-class-11">Class 11</Link> | 
    <Link to="/neet/online-coaching-class-12">Class 12</Link>
    <Outlet />
  </div>
 
}


function ErrorPage(){

  const navigate = useNavigate();

  useEffect(()=>{
    let interval = setInterval(()=>{
    navigate("/")
    },5000)

    return ()=>{clearInterval(interval)}
  },[])

  return <div>
    <h1>page not found!</h1>
    <br></br>
    Redirecting to home....
  </div>
}

function Landing() {
  return <div>
    Welcome to Allen!
  </div>
}

function Class11Program() {
  return <div>
    Neet Programs for class 11th
  </div>
}

function Class12Program() {

  const navigate = useNavigate();

  useEffect(()=>{
    let interval = setInterval(()=>{
    navigate("/")
    },10000)

    return ()=>{clearInterval(interval)}
  },[])

  return <div>
    Neet Programs for class 12th and class 11 as addons
  </div>
}

export default App
