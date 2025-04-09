"use strict";
// type UserName = {
//     [key:string]:string
// }
const Users = {
    "ras@sa": "Shivam",
    "ras@1212": "Shivam2"
};
// MAP
const users = new Map();
users.set("abc@123", { name: "Shivam", age: 21 });
const user1 = users.get("abc@123");
// users.delete
console.log(users);
