
// ---------------- creation of object------------------>
// Method 3: Object() constructor

const obj2 = new Object();

obj2.name = 'ankur';
obj2.age = 12;

console.log(obj2);

// Method 4: Object.create()

const obj3 = Object.create(obj2); // this "create" method make obj2 as the prototype of the obj3
console.log(obj3);


// ----------------------------------------- A FACTORY FUNCTION----------------------------------------->
function createCircle(radius,x,y){
    return {
        radius,
        location: {
            x,
            y
        },
        draw: function(){
            console.log("draw");
        }
    }
}

let circle1 = createCircle(1,1,1);
circle1.draw();

// ------------------------------------------- CONSTRUCTOR -------------------------------------------------->

/**
 *  WHEN WE USE new operator THEN 3 THINGS HAPPENS:
 *  
 *  1) first new creates an object 
 *  2) then new will set 'this' to point to that object
 *  3) finally new will return that object
 * 
 */

 /**
  *  "this" is a reference to the object that is calling the consturtor function.
  * 
  *   Actually this is referencing to the global object and is made to point to the 
  *   object that is created by new operator.
  * 
  *   When we are using browser then 'this' points to window object
  *   and when we are using node environment then 'this' points to gobal object
  */

function Circle(radius){
    this.radius = radius  
    this.draw   = function(){
        console.log("draw");
    }
}

const another = new Circle(1); 

//  --------------------------------------------------------------------------------------------------------> 

//  Every object has a constructor property.
 
console.log(another.constructor)

/*  that constructor property is used to reference to the function that is used to create
    that object.

        let x = {}

    In this case Javascript will translate into:
    
        let x = new Object()

    then x.constructor will give "Object()"
*/

//--------------------------------------------------------------------------------------------------------->

/**
 *                  //////////////////////////////////////////////////////
 *                  ///                                            //////
 *                  /// EVERY FUNCTION IS AN OBJECT IN JAVASCRIPT //////
 *                  ///                                           /////
 *                  //////////////////////////////////////////////////
 * 
 */

 /**
  *  When we create a function :
   
        function Circle(radius){
            this.radius = radius  
            this.draw   = function(){
                console.log("draw");
            }
        }

  *  then it is represented like this internally:

        const Circle = new Function('radius', `  // internally javacript uses this function constructor
            this.radius = radius                 // to create this object
            this.draw   = function(){
                console.log("draw");
            }
        `)
        
  * Now we can call this function like this:

        const circle = new Circle(1);

  * this is exactly similar to:

        Circle.call({},1)  // "this" will point to this object
  */


  //-------------------------------------------------------------------------------------------------->

  /**
   *     /////////////////////////////////////////////////
   *    ///                                            //
   *   /// PRIMITIVES ARE COPIED BY THEIR VALUE       //
   *  ///  OBJECTS ARE COPIED BY THEIR REFERENCE     //
   * ///                                            //
   * /////////////////////////////////////////////////
   *  
   */

//----------------------------------------------------------------------------------------------------->

// ENUMERATING PROPERTIRES OF OBJECTS

function Circle(radius){
    this.radius = radius  
    this.draw   = function(){
        console.log("draw");
    }
}

const circle2 = new Circle(1); 

for (let key in circle2){
    console.log(key,circle2[key]);
}

const keys = Object.keys(circle2);        // To get all the keys
console.log(keys);

if('radius' in circle2)                     // To check the existance of property and method
    console.log('circle has a radius');


// ----------------------------------------------------------------------------------------------------->

//////////////////////////------------ ABSTRACTION-------//////////////////////

/**
 *  When we declare variable with "this" keyword then these variable belongs to that object
 *  but when we use let then those variable does not belongs to object but remains with the function.
 * 
 *  By doing so we can create private properties and methods of an object
 */
function Circle(radius){
    this.radius = radius;
    
    let defaultLocation = {x: 0, y: 0};

    let computeOptimumLocation =  function(){
        // ......
    }

    this.draw   = function(){
        computeOptimumLocation();
        
        // defaultLocation   a "let" variable
        // this.radius       a "this" varaible

        console.log("draw");
    }
}

const circle3 = new Circle(1); 


//----------------------------------------------------------------------------------------------------->

//? //////////////////////-------------- GETTER AND SETTER -------------------------///////////////


function Circle(radius){
    this.radius = radius;
    
    let defaultLocation = {x: 0, y: 0};
 
    this.getDefaultLocation = function() {      // this is a getter function 
        return defaultLocation;
    }

    this.draw   = function(){
        console.log("draw");
    }

    Object.defineProperty(this, 'defaultLocation', {  // this will create a property
        get: function(){
            return defaultLocation;
        },
        set: function(value){
            if(!value.x || !value.y)
                throw new Error('Invalid location.');
            
            defaultLocation = value;
        }
    });
}

const circle4 = new Circle(1); 
circle4.defaultLocation = {x: 5, y: 6}
console.log(circle4.defaultLocation)