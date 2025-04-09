// type UserName = {
//     [key:string]:string
// }

// const Users: UserName = {
//     "ras@sa":"Shivam",
//     "ras@1212":"Shivam2"
// }

// RECORD

type UserName = Record<string,string>

const Users: UserName = {
    "ras@sa":"Shivam",
    "ras@1212":"Shivam2"
}


type Users={
    name:string,
    age:number
}


// MAP

const users = new Map<string,Users>()

users.set("abc@123",{name:"Shivam",age:21});

const user1 = users.get("abc@123")

// users.delete

console.log(users)