console.log(a);
var a = 10; 

//-------------------------

function sayHi() {
  console.log("Hi there!");
}


sayHi(); 



//----------------

console.log(x); 
var x = 5;
console.log(x); 


//-------------


console.log(y);//reference error 
let y = 10;



//------------------------

let sum = a + 5; 

console.log(sum)

let a = 5;
 
//--------------------------

console.log(y); 
let y = 10;


//-------------------------


var f = function greet() {
    console.log("Hello");
}


//------------------------------------

expression(); 

var expression = function hoisting() {
  console.log('Will this work?');
};

// hoisting(); // not accessible (only accessible in hoisting func)



//------------------------



function f() {
    function g() {
        console.log(x) 
    }

    g()

    let x = 1;
}

f()

//------------------------



//var can be redeclared and reassigned in the same scope
// let can be redeclare (but should be diff scope) and can be reassigned val;
// let can be redeclare (but should be diff scope) and can't be reassigned val;


let b = 2;
const c = 3;

b = 20;    
c = 30;    

if(1){
    let b = 200; 
}


//------------------

if (true) {
  var x = 1;
}
console.log(x); //1

if (true) {
  let y = 2;
}
console.log(y);//error


//---------------


for ( let i = 0; i < 3; i++) { // 1,2,3
  console.log(i)
}


//-----------


console.log(typeof foo); //function
console.log(typeof bar); // undefined


function foo() {

}

var bar = function () {

};




//----------------

if(1){
    console.log(x); 
  let x = 2;
}




//--------------------


let a = 100;

function hoist() {
  console.log(message);
  console.log("a inside hoist: ", a)

  var message='Hoisting is all the rage!'
  
  a = 200;
  console.log("a inside hoist after updating value: ", a)
}

console.log("a outside hoist: ", a) //100

hoist();

//100
//undefined
//100
//200