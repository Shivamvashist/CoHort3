"use strict";
//Given a list of users, filter out the users that are legal(greater than 18)
let Users = [{
        firstName: "Shivam",
        lastName: "Vashist",
        age: 21
    }, {
        firstName: "Shivam1",
        lastName: "Vashist",
        age: 12
    }, {
        firstName: "Shivam2",
        lastName: "Vashist",
        age: 15
    }, {
        firstName: "Shivam3",
        lastName: "Vashist",
        age: 35
    }];
console.log(Users);
function FilterUsers(arr) {
    function isLegal(user) {
        if (user.age > 18) {
            return true;
        }
        else {
            return false;
        }
    }
    let legalUsers = [];
    for (let i = 0; i < arr.length; i++) {
        if (isLegal(arr[i])) {
            legalUsers.push(arr[i]);
        }
    }
    return legalUsers;
}
console.log(FilterUsers(Users));
/// OR USE .filter DIRECTLY
function FilterUsers2(arr) {
    return arr.filter((user) => user.age > 18);
}
console.log(FilterUsers2(Users));
let a = [1, 2, 3, 4];
let b = a.filter((num) => num === 1);
console.log(b);
