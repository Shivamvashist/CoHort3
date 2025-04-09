"use strict";
function UpdateUser(props) {
}
//to prevent repeating readonly => put Readonly<admin> while creating obj
const admin1 = {
    name: "Shivam",
    age: 21
};
admin1.age = 22;
console.log(admin1);
