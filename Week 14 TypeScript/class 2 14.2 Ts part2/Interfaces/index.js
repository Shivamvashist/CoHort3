"use strict";
;
let user = {
    name: "Shivam",
    age: 21,
    address: {
        city: "Bahadurgarh",
        country: "India",
        pincode: 124507,
    },
};
// console.log(user);
function isLegal(user) {
    // console.log(user.age)
    if (user.age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLegal(user));
// let a = 1;
// console.log(a);
