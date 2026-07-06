// let fruits = ["Apple", "Orange", "Plum"];   

// // fruits.pop();

// let removed = fruits.shift()
// console.log("removed", removed)

// fruits.push("guava")
// fruits.push("berry")

// fruits.unshift("watermelon")

// for(let fruit of fruits){
//     console.log(fruit)
// }

// console.log("newly added", fruits[0])

// console.log("array start length", fruits.length)

// console.log( fruits[0] ); // Apple
// console.log( fruits[1] ); // Orange
// console.log( fruits[2] ); // Plum


// fruits[2] = "Pear";
// console.log(fruits[2]);

// fruits[3] = "Pineapple";
// console.log(fruits[3])

// console.log("array current length", fruits.length)

// fruits.push("Mango");
// fruits.push("Grapes");
// fruits.push("Cherry");
// console.log("array current length", fruits.length)



let arr = ["I", "go", "home"];

// console.log("length:", arr.length)
// delete arr[1]; 
// console.log(arr)
// console.log("length:", arr.length)


arr.splice(1,1);
console.log(arr)



// console.log( arr[1] ); // undefined

// // now arr = ["I",  , "home"];
// alert( arr.length ); // 3




let arr2 = ["I", "study", "JavaScript", "right", "now"];


arr2.splice(0,0,"Start")
console.log(arr2);


console.log("start length", arr2.length);

arr2.splice(0, 3, "Let's", "dance");
console.log("end length", arr2.length);

console.log(arr2); 
