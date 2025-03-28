interface People {
    name: string,
    age: number, 
    greet():string,
    // greet2:()=>string
}

const person:People = {
    name:"Shivam",
    age: 21,
    greet: () => {
        return "hi "+person.name;
    },
}
console.log(person.greet())