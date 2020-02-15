// ---------------- creation of object------------------>

// METHOD 1: factory function

function factory(name, age){
    return {
        name,
        age
    }
}

const obj = factory('ankur', 20);
console.log(obj)

// Method 2: Constructor

function Create(name, age){
    this.name = name;
    this.age = age;
}

const obj1 = new Create('ankur', 20);
console.log(obj1);

// Method 3: Object() constructor

const obj2 = new Object();

obj2.name = 'ankur';
obj2.age = 12;

console.log(obj2);

// Method 4: Object.create()

const obj3 = Object.create(obj2); // this "create" method make obj2 as the prototype of the obj3
console.log(obj3);

