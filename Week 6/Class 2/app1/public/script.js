async function signup(){
    const username = document.getElementById("signupUser").value ;
    const password = document.getElementById("signupPass").value ;

    const command = await axios.post("http://localhost:3000/signup",{
        username:username,
        password:password
    })
    // alert("Successfully Signed Up")
    alert(command.data.msg)
}

async function signin(){
    const username = document.getElementById("signinUser").value ;
    const password = document.getElementById("signinPass").value ;

    const command = await axios.post("http://localhost:3000/signin",{
        username:username,
        password:password
    })

    localStorage.setItem("token",command.data.token)

    alert(command.data.msg)


}

async function getdata(){
    const app = axios.get("http://localhost:3000/admin")
}