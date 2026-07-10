// const arr = [10,20,30,40,50]

// let res = arr.map(function(num){
//     return `num : ${num + 1}`
// })

// console.log(res)


// const newArr = []; //[20,40,60,80,100]

// // for(let i=0; i < arr.length; i++){
// //     newArr.push(arr[i]*2)
// // }
// // console.log(newArr)

// // map

// let res = arr.map(function(num){
//     return num *2
// })

// //using arrow fun syntax
// let res1 = arr.map((num) => num *2)

// console.log(res)
// console.log(res1)


// Practice problem

const basket = ["mango","cherry","plum","orange","kiwi"]

//output : 
// ["mango juice","cherry juice","plum juice","orange juice","kiwi juice"]
//----------------------------

let res = basket.map((fruit) => `${fruit} juice`)
console.log(res)




