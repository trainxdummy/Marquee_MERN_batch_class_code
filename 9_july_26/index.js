
function hello(){
    console.log("hello")
}

setTimeout(hello,5*1000)



setInterval(function(){
    console.log("hi again")
},2000)

//---------------------------------



console.log("Start")

setTimeout(function(){
    console.log("hi again")
},2000)


console.log("End")


//----------------------

let count = 0;

let clock = setInterval(() => {
    count += 1
    console.log(count)
}, 1000)


setTimeout(() => {
    clearInterval(clock)
},6000)



//-----------------------

let timer = 10;

function countDown(){
    console.log(timer)
    timer -= 1;

    if(timer < 0) {
        clearInterval(clock)
    }
}
let clock = setInterval(countDown,1000)

setTimeout(function(){
    clearInterval(clock)
},6000)



//------------------------

console.log("1")

setTimeout(() => {
    console.log("2")
}, 1000)

console.log("3")

//--------------------
//setInterval

function poll(){
    console.log("fetched Database at: ", new Date().toLocaleTimeString())
}

setInterval(poll, 2000)


//----------------------------
//setTimeout + recursion


function poll(){
    console.log("fetched Database at: ", new Date().toLocaleTimeString())

    setTimeout(poll,2000)
}

setTimeout(poll, 2000)




// countdown with resume, pause function

let count = 10;
var clock ;

function countDown(){
    
    clock = setInterval(()=>{
    console.log(count);
    count --;

    if(count < 0){
            clearInterval(clock);
        }
    }, 1000)
}

function pause(){
    console.log("pause at: ",count)
    clearInterval(clock);
}

function resume(){
    console.log("resumed at :", count)
    countDown()
}

countDown();

setTimeout(pause, 3500)
setTimeout(resume, 8000)