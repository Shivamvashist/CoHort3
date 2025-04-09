//Generics allow u to create components that work with any data type while still providing compile time type safety

function getFirstEle<getEleType>(arr:getEleType[]){
    return arr[2]
}

let arr1 = [1,2,3];

let arr2 = ["abcx","abbd",'ASdds'];
let arr3 = [1,2,"abbd",'ASdds'];

let a = getFirstEle(arr1);
let b = getFirstEle(arr2);
let c = getFirstEle<string>(arr3);
console.log(a)
console.log(b)
console.log(c.toUpperCase())