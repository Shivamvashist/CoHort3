//How to asign a return type to a function;
//Write a fn that calculates the sum of two functions;

function fn1(){
    return 3;
}

function fn2(){
    return 4;
}

function fn3(){
    console.log(fn1()+fn2());
}

fn3();

function sum(a:number,b:number){
    return a+b ;
}
console.log(sum(4,5));