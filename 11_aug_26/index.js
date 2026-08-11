// declaration of a promise

let p1 = new Promise((resolve,reject)=> {
    setTimeout(() => {
        if(1){
            resolve("promise resolved")
        }else{
            reject("promise rejected")
        }
    }, 1000)
})


function callback(msg){
    console.log("msg:", msg)
}

p1
.then(callback)
.catch((msg)=>{
    console.log("error:", msg)
})



function delayLog(msg) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(msg);
            resolve();
        }, 1000);
    });
}

delayLog("Step 1")
  .then(() => delayLog("Step 2"))
  .then(() => delayLog("Step 3"));





console.log('Start');

setTimeout(() => console.log('Timeout'), 0);

Promise.resolve().then(() => console.log('Promise'));

console.log('End');   