// // const user = {
// //     name : "Nikhil",
// //     age : 24,
// //     intro : function(){
// //         console.log(`Hi, I am ${this.name}, ${this.age} y/o`)
// //     }
// // }

// // console.log(user.name)
// // console.log(user.age)

// // user.intro()


// //---------------------

// function Student (name,standard){
//     this.name = name;
//     this.standard = standard

//     this.greet = function(){
//         console.log( `Hi ${this.name}, good morning.`)
//     }
// }

// let s1 = new Student("Raj", 12)

// console.log(s1.name)
// console.log(s1.standard)
// console.log(s1.greet())

// console.log("------------")

// let s2 = new Student("Rahul", 24)
// console.log(s2.name)
// console.log(s2.standard)

// let res = s2.greet();
// console.log(res)




//--------------------



// const person = {
//     name : "Rajneesh",
//     "fav color" : "blue"
// }

// // console.log(person.name)
// // console.log(person["fav color"])

// // //add

// // person.sport = "football"
// // console.log(person.sport)


// let key = "name"
// console.log(person["name"])




//-------

// const student = {
//     name : "Raj",
//     age : 12
// }




// const arr = [1,2,3]


// // console.log(Object.keys(student))
// // console.log(Object.values(student))
// // console.log(Object.entries(student))

// for(let [key,val] of Object.entries(student)){ // [ [ 'name', 'Raj' ], [ 'age', 12 ] ]
//     console.log(`${key} -> ${val}`)
// }


//------------


const student = {
    name : "Raj",
    age : 12,
    info : {
        city : "delhi"
    }
}

// console.log(student.info) //undefined
// console.log(student.info?.city)

console.log(student.greet?.())