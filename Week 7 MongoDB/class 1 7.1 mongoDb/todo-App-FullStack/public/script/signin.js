async function Signin(){
    const response = await axios.post("http://localhost:3000/signin",{
        username:document.querySelector(".username").value,
        password:document.querySelector(".password").value
    })
    alert("Your are Signed in! :"+response.data.token)
}