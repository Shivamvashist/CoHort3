class shape{
    constructor(color){
        this.color = color;
    }

    paint(){
        console.log(`Painting the Shape ${this.color}`)
    }

    area(){
        return "Needs to be defined in subclass";
    }

    getInfo(){
        console.log(`A shape with color ${this.color}`)
    }
}



class rectangle extends shape{
    constructor(height,width,color){
        super(color);
        this.height = height;
        this.width = width;

    }

    area(){
        return this.height*this.width;

    }

    getInfo(){
        console.log(`A ${this.color} Rectangle with area = ${this.area()}`);
    }


}

const r1 = new shape("red");
r1.paint();
console.log(r1.area());
r1.getInfo();

const r2 = new rectangle(10,20,"yellow");
r2.paint();
console.log(r2.area());
r2.getInfo();