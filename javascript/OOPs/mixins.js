
//? ----------------------------------------- MIXINS -----------------------------

/**
 * In JavaScript we can only inherit from a single object. There can be only one [[Prototype]] for
 * an object. And a class may extend only one other class.
 * 
 */

function mixin(target, ...sources ){          // rest operator
    Object.assign(target, ...sources);        // spread operator
}
const canEat = {
    eat: function() {
        this.hunger -- ;
        console.log('eating');
    }
};

const canWalk = {
    walk: function() {
        console.log('Walking');
    }
};

const canSwim = {
    swim: function(){
        console.log('Swim');
    }
}

// const person = Object.assign({}, canEat, canWalk);

function Person(){
}

mixin(Person.prototype, canEat, canWalk);

const person = new Person();
console.log(person);

function Goldfish(){
}

mixin(Goldfish.prototype, canEat, canSwim);

const goldfish = new Goldfish();



//! ----------------------------------------------------------------------------------------------------

let mixin = {
    madeIn() {
        console.log('This car was made in year 2019!');
    }
}

let carMixin = {
    __proto__: mixin,

    madeIn() {
        super.madeIn();
    }
};

class SUV{
    constructor(doors, engine, color, brand) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
        this.brand = brand;
        this.wheels = 4;
        this.ac = true; 

       // assign mixin
       Object.assign(this, carMixin);
    }

    myBrand() {
        return console.log(`This SUV is a ${this.brand}`);
    }
}

const cx5 = new SUV(4,'V6','grey', 'mazda');
console.log(cx5.madeIn());


