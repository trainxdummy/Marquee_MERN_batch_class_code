
// const arr = [20,45,12,6,85, 56,72]


// let res = arr.filter(function(num){
//     if(num > 50){
//         return num
//     }
// })


// let res = arr.filter((num) => num > 50 )

// console.log(res)



//-----------------------------

// const arr = [20,45,12,6,85, 56,72]


// console.log(arr.filter((x) => x %2 == 0))


//----------------------------


// const basket = ["mango","cherry","plum","orange","kiwi","watermelon", "pineapple"]

// let res = basket.filter(function(fruit){
//     if(fruit.length >= 5){
//         return fruit;
//     }
// })

// another : using arrow fn
// let res2 = basket.filter((fruit) => fruit.length >= 5 )

// console.log(res2)



//-------------------

const students = [
    { name : "Ram", status : true},
    { name : "Shyam", status : false},
    { name : "Vinod", status : true},
    { name : "Rahul", status : false},
    { name : "Suraj", status : true},
]

let res = students
    .filter(s => s.status == true)
    .map(list => list.name)

console.log(res) ////[ 'Ram', 'Vinod', 'Suraj' ]

/**
 [
    { name: 'Ram', status: true },
    { name: 'Vinod', status: true },
    { name: 'Suraj', status: true }
 ]
 */

// let result2 = result.map(list => list.name)
// console.log(result2) 