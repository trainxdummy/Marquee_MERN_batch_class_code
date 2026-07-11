// // promise creation
// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("promise resolved")
//     },3000)
// })

// console.log("p:", p)

// // promise consumption

// //.then() waits for promise to get resolved, only then it gets triggered
// p.then((res) => { 
//     console.log("p:", p)
//     console.log(res)
// })
// .catch((err) =>{ // catches the error
//     console.log("error:", err)
// })



///----------------------------

function asynOperation(resolve, reject){
    setTimeout(() => {
        resolve("promise resolved")
    }, 4000)
}

let p2 = new Promise(asynOperation)
console.log("p2:", p2)

function callBack(res){
    console.log("p2:", p2)
    console.log(res)
}

p2.then(callBack).catch((err) => console.log("error", err))



