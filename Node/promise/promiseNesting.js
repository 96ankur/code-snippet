let promise1 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 1000,'foo');
})

promise1.then( promise1SuccessMessage=>{
    return promise2.then(x =>{
        console.log(x);
        console.log(promise1SuccessMessage);
        return 'three';
    })
})
.then( x => console.log(x))
.catch(err => console.log(err));

let promise2 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 2000, 'two');
})