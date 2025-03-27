// function greet (user){
//     console.log(user.name);
// }

function greet ( user:{
    name:string,
    age:number
    }) {
    console.log(user.name);
}

let user : {
    name:string,
    age:number
    } = {
    name:"Shivam",
    age:21
}

greet(user);

//Instead of all this and writing the types twice we can create an Interface.

interface UserType {
    name:string,
    age:number
}

function greet2 ( user2 : UserType) {
    console.log(user.name);
}

let user2 : UserType = {
    name:"Shivam",
    age:21
}

greet2(user2);


type SumInput = string | number ;
function sum(a:SumInput,b:SumInput){
    console.log(a+b);
}

sum(2,"hi");