"use strict";
// types are like interfaces but we can union and Intersection in a Type but not in Interface
function sum(a, b) {
    console.log(a + " and " + b);
    console.log(a + b);
}
//now a and b can be either string or number 
sum(12, "summs");
let object = {
    firstName: "Shivam",
    lastname: "Vashist",
    age: 21
};
console.log(object);
