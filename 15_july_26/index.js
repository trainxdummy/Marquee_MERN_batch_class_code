// const user = {
//     name : "Rahul",

//     info : {
//         age : 16,
//         city : "Delhi"
//     }
// }

// const copyObj = {...user} //spread

// copyObj.name = "Nikhil"
// copyObj.info.age = 24

// console.log(user)
// console.log(copyObj)


//---------

const user = {
    name : "Rahul",

    info : {
        age : 16,
        city : "Delhi"
    }
}


const copyObj = structuredClone(user)
copyObj.info.age = 24

console.log(user.info.age)
console.log(copyObj.info.age)

//--------------------