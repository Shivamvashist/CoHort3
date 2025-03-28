// types are like interfaces but we can union and Intersection in a Type but not in Interface

type StrNumUnion = string | number ;

function sum(a:StrNumUnion,b:StrNumUnion){
    console.log(a+" and "+b)
    // console.log((a as number)+(b as string));
    console.log((a as any)+(b as any));
} 

//now a and b can be either string or number 


sum(12,"summ");


type obj1 = {
    firstName:string,
    age:number
}

type obj2 = {
    lastname:string,
    age:number
}

type obj3 = obj1 & obj2 ;

let object : obj3 = {
    firstName:"Shivam",
    lastname:"Vashist",
    age:21
}
console.log(object);
