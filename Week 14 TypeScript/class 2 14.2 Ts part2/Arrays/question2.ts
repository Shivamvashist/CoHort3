//Given a list of users, filter out the users that are legal(greater than 18)

interface User {
    firstName: string,
    lastName: string,
    age: number,
}

let Users:User[] = [{
    firstName:"Shivam",
    lastName:"Vashist",
    age: 21 
},{
    firstName:"Shivam1",
    lastName:"Vashist",
    age: 12
},{
    firstName:"Shivam2",
    lastName:"Vashist",
    age: 15 
},{
    firstName:"Shivam3",
    lastName:"Vashist",
    age: 35 
}]

console.log(Users);

function FilterUsers(arr:User[]):User[]{
    
    function isLegal(user:User): boolean {
        if (user.age > 18){
            return true;
        } else {
            return false;
        }
    }

    let legalUsers:User[]=[];

    for(let i = 0; i<arr.length; i++){
        if(isLegal(arr[i])){
            legalUsers.push(arr[i]);
        } 

    }

    return legalUsers;

}
console.log(FilterUsers(Users))


/// OR USE .filter DIRECTLY

function FilterUsers2(arr:User[]) {
    return arr.filter((user)=>user.age > 18);
}

console.log(FilterUsers2(Users));


let a:number[]=[1,2,3,4];
let b:number[] = a.filter((num)=>num===1); 
console.log(b)

/// the .filter works on a boolean , when i sent num-1 = it used it to define truthy and falsy and gave back [2,3,4] as 1-1 is 0 and falsy and 2-1 or others are truthy