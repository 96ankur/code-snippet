/**
 * In chaining of then 2nd then will wait unitl 1st the is resolved
 */

let promise1 = new Promise(function(resolve, reject){
    setTimeout(resolve, 0, 'first');
  });
  
  promise1.then(x => {
    return promise2;
  }).then( x => {
    return promise3;
  }).then( x => {
    console.log(x);
  })
  
  let promise2 = new Promise(function(resolve, reject){
    setTimeout(resolve, 1000, 'first');
  }).then(x => {
    return x;
  }).then( x=>{
    return 10;
  });
  
  let promise3 = new Promise(function(resolve, reject){
    setTimeout(resolve, 1000, 'third');
  })

  //------------------------------------------------------------------------------->

  // function main(){
//   console.log('Inside main function');
//   return new Promise((resolve, reject) => {
//     setTimeout(function(){
//       console.log('setTimeout executed');
//       resolve(3);
//     }, 1000);
//   });
// }

// main().then(result => {
//     console.log('Inside first then: ',result);
//     const promise = new Promise((resolve, reject)=>{
//       setTimeout(function(){
//           console.log();
//           resolve(2)
//         }, 1000)
//     });
//     throw new Error('Something not went wrong')
//     return promise;
//   })
//   .catch(err => {
//     console.log(err);
//   })
//   .then(result => {
//     console.log(result);
//   });