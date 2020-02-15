class Shape{

    area(){
        return 0;
    }
}
class Circle extends Shape{

    constructor(radius){
        super();
        this.radius = radius;
    }
    area(){
        return Math.PI * this.radius ** 2;
    }
}
class Rectangle extends Shape{
    constructor(length, breadth){
        super();
        this.length = length;
        this.breadth = breadth;
    }
    area(){
        return this.length * this.breadth;
    }
}

const circle = new Circle(2);
const rec = new Rectangle(2,3);

console.log(circle.area());
console.log(rec.area())