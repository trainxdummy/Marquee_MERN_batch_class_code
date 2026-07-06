// function add(a, b, c, d, ...rest) {
//   console.log(a);
//   console.log(b);

//    console.log(rest)
// }

// add(10, 20, 30, 40, 50, 51, 52);



// function sum(...arr){

//     // [ 5, 8, 6, 12 ]
//     let total = 0;

//     for(let i=0; i < arr.length; i++){
//         total = total + arr[i];
//     }

//     console.log(total) 

// }


// sum(5,8,6,12)
// sum(5)



//HOF : map, filter, reduce


// let sum = 0
// sum += Number;

// function sumAll(...arr){
//     return arr.reduce((sum,val) => {
//         return sum + val
//     },0)
// }

// //[10,20,30]


// console.log(sumAll(20,10,30))



// function makeSentence(prefix, ...words) {
//   return prefix + " " + words.join(" ");
// }

// console.log(makeSentence("Hello","my", "name", "is", "Sara" ));


const num = "7";

console.log(num.padStart(5,"0"));
console.log(num.padEnd(5,"0"));


