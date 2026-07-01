console.log("first line")

for(let i=1; i <= 2; i++){
    console.log("for loop");
}



let i = 2;

while(i >= 0){
    console.log("while loop");
    i--;
}


// //Assignment :Write a function called sum that finds the sum from 1 to a number
// // n = 5  -----> 1+2+3+4+5= 15



function sum(num){
    let sumUptoNum = 0;

    for(let i = 1; i <= num; i++){
        sumUptoNum = sumUptoNum + i; // 1+2 = 3
    }

    return sumUptoNum;
}

console.log(sum(5));



console.log("last line")




let user = {
	name: "Ram",
	age: 19
}

console.log("Ram age is " + user.age);



const user = {
    name : "Ram",
    age : 24,
    address : {
        state : "Delhi",
        pincode : "110053"
    }
}

console.log(user)
console.log(user.address)
console.log(user.address.state)


let a = "50";
console.log(typeof(a)) // string
let b = Number(a)
console.log(typeof(b)) // string


// Number to String
let value = 100;
console.log(typeof(value)) // number

let strValue = String(value); 
console.log(strValue, typeof strValue); // "100" 'string'


// Number to Boolean
let x = 0;
console.log(typeof(x)) // number
let updatedX = Boolean(x)
console.log(updatedX); // false


console.log(Boolean(0));   // false
console.log(Boolean(1));   // true
console.log(Boolean(""));  // false
console.log(Boolean("hi")); // true
console.log(Boolean(null)); // false



console.log("5" == 5);// true
console.log("5" === 5);// false
console.log(5 === 5);// true

console.log(0 == false); //true
console.log(0 === false); //false

console.log(null == undefined)
console.log(null === undefined)




// else if

let score = 40;

if(score >= 86){
    console.log("qualified for the class")
}else if(score >= 65){
    console.log("you can reappear for the test")
}else{
    console.log("you are not allowed to join the class")
}