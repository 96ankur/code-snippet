function main(param){
    console.log('Inside main');
    const result = new Promise((resolve, reject) => {
        setTimeout(resolve,5000, 10);
    });
    console.log(result);
    return result;
}

main('initial parameter')
        .then(value =>{
            console.log(value);
        })
        .catch(err =>{
            console.error(err);
        });


//--------------------------------------------------------------------->

// function logToConsole(somePromise){
//     somePromise.then(value => console.log(value));
// }

// const somePromise = new Promise((resolve, reject) => resolve('Hello'));

// logToConsole(somePromise);
// logToConsole(Promise.resolve('Hi'))

//----------------------------------------------------------------------->

// function askDealear1(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve('nothing1'), 1000 )
//     });
// }

// function askDealear2(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve('nothing2'), 2000 )
//     });}

// function askDealear3(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve('nothing3'), 4000 )
//     });}

// Promise.all([askDealear1(),askDealear2(),askDealear3()])
//         .then(value => console.log(value))
//         .catch(err => console.log(err))
