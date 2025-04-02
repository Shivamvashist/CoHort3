//Given an array of positive integerrs as input, return the maximum value in the array

let arr:number[] =[1,2,3,4];
console.log(arr)

function getMax(arr:number[]){
    let maxValue = 0;

    for (let i = 0; i<arr.length; i++){
        if(arr[i]>maxValue){
            maxValue = arr[i];
        }
    }
    
    return maxValue;

}

console.log(getMax(arr));
// console.log(maxValue);
