// var obj = {a: 'Custom'};
//  global.a = 'Global';   // in this way we declare a variable in the global object

// function whatsThis() {
//   return this.a;  
// }

// // console.log(global.a,"ABC");

// console.log(whatsThis());            // Global 
// console.log(whatsThis.call(obj));    // custom
// console.log(whatsThis.apply(obj));   // custom


// ----------------------------THIS-------------------------------->

// function Data(name){
//     this.name = name;
//     this.tags = ['red','blue','green']
//     this.age = function(){
//         this.tags.forEach(function tep() {
//             console.log(this.name)
//         }, this)                     // passing 
//     };
// }
// const user = new Data('ask');
// user.age();



// ------------------------------------------------------------------>

// var obj1 = {
//     name: "Pulsar",
//     bike() {
//       console.log(this.name);
//     }
//   }
//   var obj2 = { name: "Gixxer", bike: obj1.bike };
//   var name = "Ninja";
//   var bike = obj1.bike;
  
//   bike();           
//   obj1.bike();    
//   obj2.bike(); 

  //--------------- Explicit binding ----------->

//   function bike() {
//     console.log(this.name);
//   }
  
//   global.name = "Ninja";
//   var obj = { name: "Pulsar" }
  
//   bike();           
//   bike.call(obj);