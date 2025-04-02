// Assignment 1
/// Interfaces vs Types
// Create 2 types called user and admin,
// Create a fn that takes either a user or an admin as an input, and returns a string saying "Welcome, [name]"

interface Admin {
    name: string,
    perrmissions: string
}

interface User {
    name: string,
    age:number
}

type AdminOrUser = User | Admin;

function greet(user: AdminOrUser){
    console.log(user.name)
}