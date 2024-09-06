class rectangle{
    constructor(height,width,color){
        this.height=height;
        this.width=width;
        this.color=color;
    }

    parameter(){
        return 2*(this.height+this.width) ;
    }

    area(){
        return this.height*this.width;
    }
    info(){
        console.log(`This is a ${this.color} colored rectangle with area = ${this.area()} and parameter = ${this.parameter()}`)
    }
};



const r1 = new rectangle(10,20,"yellow");
r1.info();
console.log("area = "+r1.area()+" and Parameter = "+r1.parameter());



//Date Class
const now = new Date();
console.log(now.toISOString())


// Maps

const map = new Map();
map.set('name','Shivam');
console.log(map.get('name'));