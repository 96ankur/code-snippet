// const Promise = require('bluebird');

let promise1 = new Promise((resolve, reject)=>{
    setTimeout(function(){
        // console.log('one');
        resolve('one')
    }, 1000);
});

let promise2 = new Promise((resolve, reject)=>{
    setTimeout(function(){
        // console.log('two');
        resolve('two')
    }, 2000);
});

let promise3 = new Promise((resolve, reject)=>{
    setTimeout(function(){
        // console.log('three');
        resolve('three')
    }, 3000);
});
let promise4 = new Promise((resolve, reject)=>{
    setTimeout(function(){
        // console.log('four');
        resolve('four')
    }, 4000);
})

async function test(){
    const data = /* await */ Promise.all([promise1,promise2,promise3,promise4]);
    console.log('ankur',data);
}

test();
// Promise.all([promise1,promise2,promise3,promise4])
//        .then(data => {
//            data.map
//        })
//        .catch(err => console.log(err));
// var parallel = function(do1Param, do2Param) {
//     return Promise.race([promise1, promise2, promise3, promise4])
//   }
  
//   parallel(1, 2)
//     .spread((res1, res2, res3, res4) => {
//       console.log(res1);
//       console.log(res2);
//       console.log(res3);
//       console.log(res1);
//     });

//---------------------------> Promise.all()

// Promise.all([promise1, promise2, promise3, promise4])
// .then(res => console.log(res))
// .catch(err => console.log(err))

/* ---------------------------> */ //Promise.allSettled()

// Promise.allSettled([promise1, promise2, promise3, promise4])
// .then(res => console.log(res))
// .catch(err => console.log(err))

//---------------------------> Promise.map()

// let i =0;
// let start = process.hrtime();
// Promise.map([promise1, promise2, promise3, promise4], (res) => {
//    console.log('res: ',res = res+i++);
//     return res
// })
//   .then((result) => {
//       console.log(result)
//       let end = process.hrtime(start);
//       console.log("Execution time:", end[0]+(end[1]/10 **9))
//    });

//-------------------------------> Promise.any()

// Promise.any([promise4, promise2, promise3, promise1])
//        .then(res => console.log('Inside then',res))
//        .catch(err => console.log('err: ',err))

//-------------------------------> Promise.race()

// Promise.race([promise4, promise2, promise3, promise1])
//        .then(res => console.log('Inside then',res))
//        .catch(err => console.log('err: ',err))