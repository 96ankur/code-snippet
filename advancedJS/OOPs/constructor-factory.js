/**
 *  ///////////////////////////    IMPORTANT   //////////////////////////////
 *         Function always take the global scope
 *       & Method (that belongs to the object) always belongs to the object
 * 
 */


// function factory(name, age){           //factory function
//     return {
//         name,
//         age
//     }
// }

// const obj = factory('ankur', 10);
//  console.log(obj);

                 const createUser = ({ userName, avatar }) => ({
                     userName,
                     avatar,
                     setUserName (userName) {
                       this.userName = userName;
                       return this;
                     }
                   });

                   console.log(createUser({ userName: 'echo', avatar: 'echo.png' }));



//----------------------------------------------------------- - constructor ------------------------>

    // function Data(name, age){
    //     // this = {};
    //     this.name = name;
    //     this.age = age;
    
    //     // return this;
    // }

    // const user = Data('as', 12);
    // console.log(global.name);

// ------------------------------------->
    // calling constructor function without new keyword
    // then "this" add properties to the global object
            // function Data(name, age){
            //     this.name = name;
            //     this.age = age;
            //     this.sayHello = function(){
            //         console.log(this.name);
            //     }
            // }
        
            // const obj1 = Data('xyz', 25);
            // obj1.sayHello()         //error  
            // global.sayHello()      // xyz

// ------------------------------->

var Person = function (firstName, lastName) {

    if (!(this instanceof Person)) {
        console.log('ankur')
        return new Person(firstName, lastName);
    }

    this.firstName = firstName;
    this.lastName = lastName;
}

console.log(new Person('as', 'er'))

// --------------------------------------------->

        // function Foo() {
        //     this.bar = 'baz';
        //     return { baz: 'bif' };
        //   }

        //   const obj = new Foo();
        //   console.log(obj intanceof(Foo));       // false

