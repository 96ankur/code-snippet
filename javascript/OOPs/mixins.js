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