function Shape(){
}

Shape.prototype.duplicate = function(){
    console.log('duplicate');
}

function Circle(radius){
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);   // here prototypical inheritance in action 

Circle.prototype.draw = function(){
    console.log('draw');
}


const c = new Circle(1);
const s = new Shape();

/**                                          --------------> OBJECT BASE
 *                                          | 
 *                                          |
 *                         ----------->  SHAPE BASE
 *                         |
 *                         |
 *             -------->CIRCLE BASE
 *             |             
 *             |
 *             c
 */

// --------------------------------------------------------------------------------------------------->

                        ///----------- Resetting the constructor ----------------------//////////////////

/**
 *   In the above example before prototipical inheritance 
 *   
 *   => "Circle.prototype.constructor" is equal to "Circle" 
 * 
 *   But after that this is not equal, rather this becomes eqaul to "Shape" constructor
 * 
 *  therefore we have to add 
 *  ===>  "Circle.prototype.constructor = Circle"
 * 
 * 
 *         
 *           /////////////////////////////////////////////////////
 *          /////                                           /////
 *           ///  WHENEVER YOU RESET THE CONSTRUCTOR       /////
 *          ///   PROPERTY, ALWAYS RESET THE CONSTRUCTOR  /////
 *         ///    AS WELL                                /////
 *        ///                                           /////
 *       ///////////////////////////////////////////////////
 * 
 */

 //-------------------------------------------------------------------------------------------------->

                    ///-------- CALLING THE SUPER CONSTRUCTOR ---------------////////////////////////

 function Shape1(color){
     this.color = color;
}

Shape1.prototype.duplicate1 = function(){
    console.log('duplicate');
}

function Circle1(radius,color){
    Shape1.call(this, color)     // this is how we call the super constructor
    this.radius = radius;
}

Circle1.prototype = Object.create(Shape1.prototype);   
Circle1.prototype.constructor = Circle1

Circle1.prototype.draw1 = function(){
    console.log('draw');
}


const c1 = new Circle1(1,'red');
const s1 = new Shape1();

 //-------------------------------------------------------------------------------------------------->

 //////////////////////-------- INTERMEDIATE FUNCTION INHERITANCE ---------------////////////////////////

 function Shape2(color){
    this.color = color;
}

Shape2.prototype.duplicate2 = function(){
   console.log('duplicate');
}

function extend(Child, Parent){       // this extend function is what we called intermediate inheritance function       
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child 
}

function Circle2(radius,color){
   Shape2.call(this, color)    
   this.radius = radius;
}
extend(Circle2, Shape);

Circle2.prototype.draw2 = function(){
   console.log('draw');
}

function Square2(size){
    this.size = size;
}
extend(Square2, Shape);

const c2 = new Circle2(1,'red');
const s2 = new Shape2();


//-------------------------------------------------------------------------------------------------->

                                ///-------- METHOD OVERRIDING ---------------////////////////////////
 
function Shape3(){
    this.color = color;
}

Shape3.prototype.duplicate3 = function(){
   console.log('duplicate');
}

function extend(Child, Parent){             
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child 
}

function Circle3(){
}

extend(Circle3, Shape3);
Circle3.prototype.duplicate3 = function(){
    console.log('duplicate circle');
 }


const c3 = new Circle3();


//-------------------------------------------------------------------------------------------------->

                                ///-------- POLYMORPHISM ---------------////////////////////////

function Shape4(){
    this.color = color;
}

Shape3.prototype.duplicate4 = function(){
   console.log('duplicate');
}

function extend(Child, Parent){             
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child 
}

function Circle4(){
}

extend(Circle4, Shape4);
Circle3.prototype.duplicate4 = function(){
    console.log('duplicate circle');
 }


function Square(){
}

extend(Square, Shape5);

Square.prototype.duplicate = function(){
    console.log('duplicate square');
}

const shapes = [
    new Circle4(),
    new Square()
]

for(let shape of shapes)
    shape.duplicate();


//-------------------------------------------------------------------------------------------------->

//                  Don't go beyond one level of inheritance

/**
 *           ///////////////////////////////////////////////////
 *          /////                                           ///
 *         ///    FAVOR COMPOSITION OVER INHERITANCE       ///
 *        ///                                           /////
 *       ///////////////////////////////////////////////////
 * 
 */