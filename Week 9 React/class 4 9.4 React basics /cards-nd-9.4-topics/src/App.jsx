
function App() {
  
  return <div>
    <Card>
      <h1>Header</h1>
    </Card>
    <Card2>
      <h2>Card title</h2>
      <p>This is some content inside the card.</p>
    </Card2>
    <Card2>
      <h2>Card title 2</h2>
      <textarea></textarea>
      <p>This is some another content.</p>
    </Card2>
  </div>

}

function Card( {children} ) {
  return <div style={{
    background:"black",
    borderRadius: 10,
    color:"white",
    padding:20,
    margin:10,
    display:"flex",
    justifyContent:"center"
    }} >
    {children}
  </div>
}

function Card2({children}){
  return <div style={{
    border:'1px solid #ccc',
    borderRadius:'5px',
    padding:'20px',
    margin:'10px',
    boxShadow: '2px 2px 5px rgba(0,0,0,0.3)',
  }} >
    {children}
  </div>
}

export default App
