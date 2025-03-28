"use strict";
const person = {
    name: "Shivam",
    age: 21,
    greet: () => {
        return "hi" + person.name;
    },
};
console.log(person.greet());
