
// const nums = [1,8,9,14]

// // console.log(...nums)

// const nums2 = [12,16, ...nums]

// console.log(nums2)


//----------------------


// const user = {
//     name : "Raj",
//     class : 12,
//     info : {
//         roll_no : 64,
//     }

// }


// const obj = { ...user}

// console.log(obj )

//------------------------


// const obj1 = { id : 1, name : "Mobile"}
// const obj2 = { category : "Electronics", price : 56000}

// const product = {...obj1,...obj2}

// console.log(product)



//----------------------



// const name = "Nikhil"

// const arr = [...name]
// console.log(arr)



//----------------------




const user = {
    name : "Raj",
    class : 12,
    info : {
        roll_no : 64,
    }

}


const obj = { ...user}

obj.name = "Nikhil"
obj.info.roll_no = 24;

console.log(obj )
console.log(user )