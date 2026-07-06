// console.log(multiply(4, 5)); // 20


// function multiply (a, b) {
//                     return a * b;
// };


// setTimeout(
//     function () {
//         console.log("callback");
//     }
// , 5000);


// setTimeout(
//     () => {
//      console.log("→ function");
// }, 2000)
                


// function add(x,y){
//     return x + y
// }

// let add = (x,y) => { x + y}



// function intro(name, age){
//     return `My name is ${name}, I am ${age} y/o`
// }

// let res = intro("Ram", 24)
// console.log(res)

// let intro = (name, age) => {
//     return `My name is ${name}, I am ${age} y/o`
// }


// let res = intro("Ram", 24)
// console.log(res)


// Immediate Invoked functions Expression (IIFE)

// (() => {
//     console.log("IIFE ran")
// })()


// sayHello();

// function sayHello() {
//   console.log("Hello!");
// }



//function expression doe's get hoisted. throws error. 
// sayBye();

// var sayBye = function () {
//   console.log("Bye!");
// };




// const obj = {
//   name: "Sara",

//   regular: function () {
//     console.log("Regular:", this.name);
//   },

//   arrow: () => {
//     console.log("Arrow:", this.name);
//   },
// };


// obj.regular(); // Regular
// obj.arrow(); // undefined



// console.log(typeof multiply); 
// multiply() 

// var multiply = function (a, b) {
//   return a * b;
// };



// const fact = function f(n) {
//   if (n <= 1) return 1;
//   return n * f(n - 1);
// };

// console.log(fact(4)); //24
// console.log(typeof f); //undefined

// // console.log(typeof fact); //function



