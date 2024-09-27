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

    localStorage.setItem("token", command.data.token)

    alert(command.data.msg)


}

async function getAdminData(){
    const app =await axios.get("http://localhost:3000/admin",{
        headers:{
            "token" : localStorage.getItem("token")
        }
    })
    const db = app.data.users;
    const db2 = JSON.stringify(db,null,2)
    document.querySelector(".information").innerHTML = db2
}

async function getUserData() {
    const response = await axios.get("http://localhost:3000/me2",{
        headers:{
            token : localStorage.getItem("token")
        }
    })
    // localStorage.setItem("username",response.data.username)

    document.querySelector(".information").innerHTML = response.data.username

}

function logout(){
    localStorage.removeItem("token");
    document.querySelector(".information").innerHTML = ""
}