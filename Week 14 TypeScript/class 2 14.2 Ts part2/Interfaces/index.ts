interface User {
    name: string, //I can also put a specific string here and it will only accepty that particular string =>name:"Shivam" | "Abhinav",
    age: number,
    address: Address,
    // {
    //     city: string,
    //     country: string,
    //     pincode: number,
    // },
};


interface Office {
    address: Address,
    // address: {
    //     city: string,
    //     country: string,
    //     pincode: number,
    // },
}

//NOw the address part is repeating so we'll define an address interface separately

interface Address {
    city: string,
    country: string,
    pincode: number,
}

// now use it in both of them

let user:User = {
    name : "Shivam",
    age : 21 ,
    address: {
        city: "Bahadurgarh",
        country: "India",
        pincode: 124507,
    },
};



// console.log(user);

function isLegal(user: User):boolean{
    
    // console.log(user.age)

    if(user.age>=18){
        return true;
    } else {
        return false;
    }

}

console.log(isLegal(user))
