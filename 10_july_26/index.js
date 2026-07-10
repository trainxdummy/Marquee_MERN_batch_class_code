function greet(){
    console.log("hello")
}

let callGreet =  greet;
callGreet()

//---------------------------

function operate(fn, a, b){
    return fn(a,b)
}

function add(a,b){
    return a + b
}

let res = operate(add, 10, 20)
console.log(res)

//----------------------