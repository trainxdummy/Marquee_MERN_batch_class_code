
// //promise creation 
// let data = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("message : promise resolved")
//     }, 4000)
// })

// //consumption
// data.then((res) => {
//     console.log("callback runs ")
//     console.log(res)
// })
// .catch((e) => {
//     console.log("error", e)
// })


//-------------------------------


// let p = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve("5 sec passed")
//     }, 5*1000)
// })

// p.then((data) => {
//     console.log(data)
//     console.log("after 5 sec")
// })
// .catch((e) => {
//     console.log("error: ", e.message)

// })



//--------------------------

// setTimeout(() => {
//     console.log("Step 1");
//     setTimeout(() => {
//         console.log("Step 2");
//         setTimeout(() => {
//             console.log("Step 3");
//         }, 5000);
//     }, 5000);
// }, 5000);

//-------------------------
 
// function delayMsg(msg, time){ 
//     return new Promise(function(resolve,reject){
//         setTimeout(() => {
//             console.log(msg)
//             resolve()
//         }, (time * 1000));
//     })
// }


// let p = delayMsg("Step 1", 5)
// .then(() => delayMsg("Step 2", 2))
// .then(() => delayMsg("Step 3", 8))



// // 5 sec : statement1
// // 2 sec : statement 2
// // 8 sec : statement 3

//---------------------------------

// function setTimeoutPromisified(t){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log(`resolved after ${t} sec`)
//             resolve()
//         },t*1000)
//     })
// }


// setTimeoutPromisified(2)
// .then(() => {
//     setTimeoutPromisified(8)
// })
// .then(() => {
//     setTimeoutPromisified(4)
// })


//-------------------------------

// function setTimeoutPromisified(time){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve()
//         }, time * 1000)
//     })
// }

// setTimeoutPromisified(4)
// .then(() => {
//     console.log('A')
//     setTimeoutPromisified(8)
//     .then(() => {
//         console.log('B')
//         setTimeoutPromisified(10)
//         .then(() => {
//             console.log('C')
//         })
//     })
// })


//--------------------------------


let res = fetch("https://dummyjson.com/todos")
res.then(() => {
    res.json
})
console.log(res.json())
