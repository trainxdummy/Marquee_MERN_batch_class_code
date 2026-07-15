// function orderPlaced() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Order placed");
//       resolve();
//     }, 1000);
//   });
// }

// function foodPrepared() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Food prepared");
//       resolve();
//     }, 1000);
//   });
// }

// function foodDelivered() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Food delivered");
//       resolve();
//     }, 1000);
//   });
// }

// orderPlaced()
//   .then(() => foodPrepared())
//   .then(() => foodDelivered())
//   .then(() => console.log("Order complete!"));



//-----------------------------------------------------




// async function hello(){
//     return "hello"
// }

// console.log(hello())
// console.log(hello())


//----------------------


// async/ await

// function fetchData(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve("data fetch unsuccessful!!")
//         }, 3000)
//     })
// }


// async function getData(){
//     try{
//         let res = await fetchData()
//         console.log("res:", res)
//     }
//     catch(e){
//         console.log(e)
//     }
// }

// getData()

/*
    ASYNC/AWAIT TASK :

        make a function named `Sleep` that take 't' time and return a promise, and gets resolved after 't' seconds.
        You have to pass these time values : 4sec  8sec    12sec

        //output            :at 4sec : "4 sec passed"
                            after 8sec : "8 sec passed"
                            after 12sec : "12 sec passed"
*/


// function sum(n) {
// 	let ans = 0;
	
// 	for (let i = 1; i <= n; i++) {
// 		ans = ans + i
// 	}
	
// 	return ans;
// }

// const ans1 = sum(100);
// console.log(ans1);

// const ans2 = sum(1000);
// console.log(ans2);

// const ans3 = sum(10000);
// console.log(ans3);



//----------------------

// function count(){
//     let sum = 0;
//     for(let i =0; i < 10_000_000_000; i++){
//         sum += 1;
//     }

//     console.log('sum:', sum)
// }

// console.log("start")
// count();
// console.log("end")


//--------------------

const fs = require("fs");

// console.log("start reading ")

// fs.readFile("helloo.txt", "utf-8", (err, content)=> {
//     if(err){
//         console.log("error: ", err.message)
//         return;
//     }

//     console.log(content)
// })


// console.log("FINISHED ")


//----------------sync version --------

// console.log("START")

// try{
//     let content = fs.readFileSync("hellFDHDFHo.txt","utf8")
//     console.log("content:", content)
// }
// catch(e){
//     console.log("no such file exist")
// }

// console.log("END")


//-----------------------------