async function Signup(){
    const response = await axios.post("http://localhost:3000/signup",{
        email : document.querySelector(".emailInp").value,
        username : document.querySelector(".usernameInp").value,
        password : document.querySelector(".passwordInp").value
    })
    alert(response.data.msg);
}