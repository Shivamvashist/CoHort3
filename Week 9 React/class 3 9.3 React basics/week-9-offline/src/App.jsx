import React,{useState} from "react"
import { Postcomponent } from "./post";

function App() {
  // const [posts,setPosts]=useState([]);



  const [posts,setPosts]=useState([{
    name:"Shivam",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREFJYOA4MyzlZSghQSHhkxQx03MUJXMykmrw&s",
    subtitle:"20k followers",
    time:"5m ago",
    description:"Hi! this is my first post"
  },{
    name:"Harkirat",
    img:"https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
    subtitle:"Promoted",
    description:"This is a promoted post that has no time and promoted written instead of followers count!"

  }]);

  function addPostFn(){
    setPosts([...posts,{
      name:"Shivam",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREFJYOA4MyzlZSghQSHhkxQx03MUJXMykmrw&s",
      subtitle:"20k followers",
      time:"2m ago",
      description:"Hello everyone! as this is not my first post this has to be very chunky and a part of trial and ok that's it i have wrote enough. Goodbye!"
    }])
  }

  const postComponents = posts.map(post => <Postcomponent 
    name={post.name}
    img={post.img}
    subtitle={post.subtitle}
    time={post.time}
    description={post.description}
  />);


  return (
    <div style={{backgroundColor:"#dfe6e9",height:"100vh"}}>
      <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",gap:20}}>
      <button onClick={addPostFn} >Add post</button>
          

          {/* <Postcomponent 
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
          /> */}
          {postComponents}
      </div>
      <ToggleMessage />
      <ToggleMessage />
      <ToggleMessage />
    </div>

  )
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
