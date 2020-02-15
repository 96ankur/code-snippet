/**
 * In a promise chaining or nesting when you return a promise inside a then method, and if the returned promise is already 
 * resolved/rejected, it will immediately call the subsequent then/catch method, if not it will wait.
 */
let promise1 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 1000,'foo');
})

promise1.then( promise1SuccessMessage=>{
    console.log(promise1SuccessMessage);
    return promise2;
})
.then( x => {
    console.log(x);
    return promise3;
})
.then(x=>{
    console.log(x)
})
.catch(err => console.log(err));

let promise2 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 2000, 'two');
})

let promise3 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 0, 'three');
})