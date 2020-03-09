//? CLASS IS A PROTOTYPE

//! ALL THE METHODS DEFINED IN A CLASS ARE PRESENT IN THE PROTOTYPE OF THE OBJECT OF THE CLASS

// class Rectangle {
//  constructor(height, width) { // A constructor can use super keyword to execute the constructor of super class.
//      this.height = height;
//      this.width = width;
//  }
// }

// -----------------------------------------> A CLASS IS EXECUTED IN STRICT MODE  ---------------------------

//An important difference between function declarations and class declarations is that function declarations
//are hoisted and class declarations are not. You first need to declare your class and then access it.

// Function declatation and expression can be overwritten but class can not be overwritten

// const p = new Rectangle(); // ReferenceError
// class Rectangle {}

//   --------- CLASS declaration can done by two type --------------------

// //!  Method:  unnamed

// let Rectangle = class {                   // this method of class declaration is known as class expression
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
//   };
//   console.log(Rectangle.name);

// //*  output: "Rectangle"
  
// //!  Method:  named
//   let Rectangle1 = class Rectangle2 {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
//   };
//   console.log(Rectangle1.name);

// //*  output: "Rectangle2"


//? -------------------------------------- GETTER AND SETTER -----------------------------

const _radius = new WeakMap();

class Circle{
    constructor(_radius){
        _radius.set(this, radius);
    }

    get radius() {
        return _radius.get(this);
    }

    set radius(value){
        if(value <= 0) throw new Error('Invalid radius');
        _radius.set(this, value);
    }
}

const c = new Circle(1);
console.log(c.radius);    // reading value
c.radius = 2;             // setting value

//? ------------------------- STATIC METHOD -----------------------------

// Static methods are called without instantiating their class and cannot be called through a class instance.

// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }

//   static distance(a, b) {
//     const dx = a.x - b.x;
//     const dy = a.y - b.y;

//     return Math.hypot(dx, dy);
//   }
// }

// // const p1 = new Point(5, 5);
// // const p2 = new Point(10, 10);

// console.log(Point.distance({x:5, y: 5}, {x: 10, y: 10}));
//* Output: 7.0710678118654755

// ----------------------------------------------------------------------------------------->

// class Animal { 
//   speak() {
//     return this;
//   }
//   static eat() {
//     return this;
//   }
// }

// let obj = new Animal();
// console.log(obj.speak()); // Animal {}
// let speak = obj.speak;
// console.log(speak()); // undefined

// console.log(Animal.eat()) // class Animal
// let eat = Animal.eat;
// console.log(eat()); // undefined

//? --------------------------------- PUBLIC AND PRIVATE PROPERTIES--------------------------------->

//! ------> PUBLIC FIELDS

// class Rectangle {
//   height = 0;
//   constructor(height, width) {    
//     this.height = height;
//     this.width = width;
//   }
// }

// const obj = new Rectangle(10, 20);
// console.log(obj)

//! --------> PRIVATE FIELDS

    // TODO ----------------------- Using Symbol() ----------------------------------------------------->

    // const _radius = Symbol();
    // const _draw = Symbol();
    // class Circle{
    //     constructor(radius){
    //         this[_radius] = radius;
    //     }
    //     [_draw]() {
    //     }
    // }
    // const c = new Circle(1);
    // console.log(c);

    // TODO ----------------------- Using WeakMap() ----------------------------------------------------->

    /**
     * WeakMap creats an object in which keys are objects and values can be anything
     */

    // const _radius = new WeakMap();
    // const _move = new WeakMap();

    // class Circle{
    //     constructor(radius){
    //         _radius.set(this, radius);
    //         _move.set(this, () => {            // use arrow function only becoz function expression will made
    //             console.log('move', this);     // 'this' undefined whereas arrow function will point to the
    //         })                                 // current object.
    //     }

    //     draw(){
    //         _move.get(this)();

    //         console.log('draw');
    //     }
    // }

    // const c = new Circle(1);


