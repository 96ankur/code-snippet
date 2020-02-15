/**
 * A PROTOTYPE is just a regular object in memory.
 * Every Object in javascript has a prototype or parent, except the root object
 */

 let obj = {};  // this object has a prototype object called as "Object"

 console.log(obj.toString()) // as there is no toString() method defined in the obj, therefore
                            // this method is defined in the prototype object of this obj.

  let myArray = [];
/**
 *  We can use ".push" function for this array but we have not declared it any where, still it is present.
 *  It is present in the object that is the prototype of all the arrays in the javascript.
 * 
 *  This above mentioned object also has a prototype, which is an object of all the objects in
 *  the javascript 
 * 
 *                                          --------------> OBJECT BASE
 *                                          | 
 *                                          |
 *                         ----------->  ARRAY BASE
 *                         |
 *                         |
 *                       myArray
 * 
 *                                         MULTILEVEL INHERITANCE
 */

// ------------------------------------------------------------------------------------------------->

 /**
 *                  ////////////////////////////////////////////////////////
 *                  //////                                            /////
 *                  ////// Objects created by a given constructor    /////
 *                  ////// will have the same prototype             /////
 *                  //////                                         /////
 *                  ////// Similarly Arrays created by a given    /////
 *                  ////// an array  constructor will have       /////
 *                  ////// the same prototype                   /////
 *                  //////                                     /////
 *                  ///////////////////////////////////////////////
 * 
 */

function Circle(radius){
    this.radius = radius  
    this.draw   = function(){
        console.log("draw");
    }
}

const circle = new Circle(1); 

/**
                                            --------> OBJECT BASE
 *                                          | 
 *                                          |
 *                         -----------> CIRCLE BASE  (Circle.prototype)
 *                         |
 *                         |
 *                       circle
 */

 // ---------------------------------------------------------------------------------------------------->

 ////////////////------------------------ PROPERTY DESCRIPTORS -------------------------///////////////

let person = { name: "Jhon"};
let ObjectBase = Object.getPrototypeOf(person); // this function will return prototype of person
// console.log(ObjectBase);
let descriptor = Object.getOwnPropertyDescriptor(ObjectBase,'toString'); // this will return an object
                                                    // which we call a property descriptor

/**
 *  console.log(descriptor); 
 *      output of the above console.log
 *              {
 *                  configurable: true,             it means we can delete this property
 *                  enumerable  : flase,            this property is not show up in "Object.keys"
 *                  value       : f toString(),   
 *                  writable    : true              this means we can overwrite this method
 *              }
 * 
 *      when we create an object, we can set these attributes for the properties 
 * 
 * */                                                    

 let otherPerson = {name: 'Jhon'};

 Object.defineProperty(otherPerson,'name',{
//    enumerable:false,
      writable: true,
      configurable: false

 });
// delete otherPerson.name
// otherPerson.name = 'ankur'

 console.log(Object.keys(otherPerson));

 //---------------------------------------------------------------------------------------------------->

 ////////////// ------------------ CONSTRUCTOR PROTOTYPES--------------------------////////////////////

 /**
  *  As functions in javascript are objects, therfore constructor functions are also objects
  *  hence constructor function have properties and methods.
  * 
  *  There is one property called "prototype", it is an object which is the prototype of all the objects
  *  that are created by this constructor function 
  */

 function Circle(radius){
    this.radius = radius;  
}

const circle2 = new Circle(1)

console.log(circle2.constructor)

//----------------------------------------------------------------------------------------------------->

/////////////////-------- INSATANCE MEMBERS--------------///////////////////////

/**
 * function Circle(radius){
    this.radius = radius; 
    this.draw = function(){
        console.log('draw');
    } 
   }

    const c1 = new Circle(1);
    const c2 = new Circle(1);

    These two objects has separate copies of draw method in the memory, this results in wastage of memory.

    Solution to this problem is that we take this draw mehtod out of the circle object and put it in its
    prototype.

 */

    function Circle(radius){
        // Instance members
        this.radius = radius;  

        this.move = function(){
            this.draw();
            console.log('move')
        }
    }

    // Prototype members
    Circle.prototype.draw = function (){
        console.log('draw');
    } 

    const c1 = new Circle(1);
    
    Circle.prototype.toString = function(){
        return `Circle with radius ${this.radius}`
    }

    console.log(c1)

    // --------------------------------------------------------------------------------------

    /** 
     *   draw method is avaliable even we create it after object creation
    */

    function Circle(radius){
        // Instance members
        this.radius = radius;  

        this.move = function(){
            console.log('move')
        }
    }

    const c2 = new Circle(1);

    // Prototype members
    Circle.prototype.draw = function (){
        console.log('draw');
    } 

    c2.draw();

    console.log(Object.keys(c1));   // returns instance members

    for (let key in c2) console.log(key);   // returns all members (instance or (own) + prototype)

    /**
   *  ///////////////////////////////////////////////////////
   * //////                                           /////
   * ///// DON'T MODIFY OBJECTS YOU DON'T OWN        /////
   * ///                                            /////
   * ///////////////////////////////////////////////////
   * 
   * 
   *    Array.prototype.shuffle = function(){
   *    //...
   *    }
   *    
   *    const array = [];
   *    array.shuffle();
   */