interface People {
    name: string,
    age: number, 
    greet():string,
    // greet2:()=>string
}

let person:People = {
    name:"Shivam",
    age: 21,
    greet: () => {
        return "hi "+person.name;
    },
}
console.log(person.greet())

class Manager implements People {
    // name: string;
    // age:number;

    // constructor(name:string,age:number){
    //     this.name = name;
    //     this.age = age;
        
    // }

    constructor( public name:string, public age:number ){
        this.name = name;
        this.age = age;
        
    }

    greet() {
        return "Hi "+this.name;
    }
    
}

let man1 = new Manager("Shivam",21);
let man2 = new Manager("Shivam2",21);
console.log(man1.greet())
console.log(man2)


// name: string;
// age:number;

// constructor(name:string,age:number){
//     this.name = name;
//     this.age = age;
    
// }
// 
//
//IN THIS WE WERE DECLARING THE TYPES TWICE SO INSTEAD WE USE PARAMETER PROPERTIES 
//OR WE PUT PUBLIC IN FRONT OF VARIABLES IN CONSTRUCTOR

class God extends Manager {
    constructor(name:string, age:number){
        super(name, age)
    }
}