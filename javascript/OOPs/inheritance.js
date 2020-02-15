// |||||||||||||||||||||||||||||---------------------------- INHERITANCE --------------------------------------||||||||||||||||||||||||||||||||
// -------------------------------------- Sub classing with extends ------------------------------------------------------------>


// If there is a constructor present in the subclass, it needs to first call super() before using "this".

// class Animal { 
//     constructor(name) {
//       this.name = name;
//     }
    
//     speak() {
//       console.log(`${this.name} makes a noise.`);
//     }
//   }
  
//   class Dog extends Animal {               // inheritance
//     constructor(name) {
//       super(name); // call the super class constructor and pass in the name parameter
//     }
  
//     speak() {
//       console.log(`${this.name} barks.`);
//     }
//   }
  
//   let d = new Dog('Mitzie');
//   d.speak(); // Mitzie barks.
  
  
  // ----------------------------------------------------------------------------------------------------------->
  
  //  The super keyword is used to call corresponding methods of super class.
  
//   class Cat { 
//     constructor(name) {
//       this.name = name;
//     }
    
//     speak() {
//       console.log(`${this.name} makes a noise.`);
//     }
//   }
  
//   class Lion extends Cat {        // here constructor is also inherited from the Cat class.
//     speak() {
//       super.speak();             // this is calling the speak() function of the Cat class
//       console.log(`${this.name} roars.`);
//     }
//   }
  
//   let l = new Lion('Fuzzy');
//   l.speak();

  // --------------------------------  HAS A inheritance----------------------------------------->


  class ClassA { 
    constructor(name) {
      this.name = name;
    }
    
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class ClassB { 
      constructor(name){
          this.prop = new ClassA(name)
      }       
    display() {
      this.prop.speak();
    }
  }

  const obj = new ClassB('Lion');
  obj.display()