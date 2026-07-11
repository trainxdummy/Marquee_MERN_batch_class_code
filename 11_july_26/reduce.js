// const nums = [10,29,12,36,41,93]

// let sum = 0;

// for(let i=0; i < nums.length; i++){
//     sum = sum + nums[i]
// }

// console.log("sum: ",sum)

// //using reduce

// let total = nums.reduce((sum,currVal) => {
//     return sum + currVal
// }, 0)

// //ever shorter,cleaner syntax (optional):
// // let total = nums.reduce((sum, val) => sum + val)


// console.log("total:", total)

/**
 sum = 0; 
 sum = 0 ; currVal = 10;  ===> sum + currVal ===> 0 + 10 = 10
 sum = 10; currVal = 29; ====> 10 + 29 ====> 39
 sum = 39;   currVal = 12 ====> 39 + 12 ===> 51
    .......

 sum = 142
 */



//-------------------


// const nums = [10,29,12,36,41,93,78]
// // Output : 93

// let max = nums[0];

// for(let i=0; i < nums.length; i++){
//     if(nums[i] > max){
//         max = nums[i];
//     }
// }

// console.log(max)

// //using reduce
// let res = nums.reduce((max,val) => {
//     if(val > max) {
//         return val
//     }
//     return max;
// }, nums[0])

// // let res = nums.reduce((max,val) => val > max ? val : max)

// console.log("res", res)


//------------------------------

// const nums = [10,29,12,36,41,93,78]

// // task : filter out odd no. and multiply each item with 2 and return it.

// let res = nums
//             .filter((num) => num %2 !== 0)
//             .map((num) => num *2)

// console.log(res)



//----------------------------


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let res = numbers
//     .filter((num) => num %2 == 0)
//     .map((num) => num * num)
//     .reduce((sum,val) => sum +val, 0)

// console.log(res) //220

//-------------------------------


// marks > 80 (in maths)
const students = [
  { name: "Isha", marks: { math: 85, science: 70 } },
  { name: "Rohan", marks: { math: 60, science: 90 } },
  { name: "Devika", marks: { math: 92, science: 65 } },
  { name: "Kabir", marks: { math: 78, science: 80 } }
];

let res = students
    .filter((list) => list.marks.math > 80)
    .map((list) => list.name)

console.log(res)



// const list = {
//     name : "Isha",
//     marks : {
//         math : 87
//     }
// }

// console.log(list.name)
// console.log(list.marks)
// console.log(list.marks.math)