console.log(typeof(null))
console.log(typeof(undefined))



let a = 10, b = 3;

console.log(a + b);  
console.log(a - b);  
console.log(a * b);  
console.log(a / b); 
console.log(a % b); 
console.log(a ** b); 

// Increment / Decrement
let x = 5;
console.log(x++); //5
console.log(x);  //6

console.log(++x); //7

console.log(x--); // 7
console.log(x) // 6

console.log(--x); //5


console.log(10 == "10"); //true 
console.log(10 === "10"); //false
console.log(10 != "10");   // false
console.log(10 !== "10");  //true


let age = 10;
let hasID = true;


console.log(age >= 18 && hasID); //true
console.log(age >= 18 && hasID); //false if age is 10,



let isWeekend = false;
let isHoliday = true;

console.log(isWeekend || isHoliday); //true
console.log(isWeekend && isHoliday); //false


let age = 21;

age >= 18 ? console.log("allowed to vote") : console.log("not allowed to vote");



let name = undefined ;

console.log(name || "Anonysmous");
console.log(name ?? "Anonysmous");



let a = null;
let b = 0;
console.log(a || "default1"); //default1
console.log(a ?? "default2") //default2


let score = 85;
let result = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
console.log(result); //B



console.log(1 && 2 && 3); 
console.log(0 && 2 && 3);
console.log(1 || 2 || 3);
console.log(0 || "" || "found me");


let isLoggedIn = false;
let isAdmin = true;
console.log(!isLoggedIn && isAdmin);  //true
console.log(isLoggedIn && isAdmin);  //false

console.log(!isLoggedIn || !isAdmin); //true
console.log(!(isLoggedIn && isAdmin)); //true


let user = undefined;
let age = 0;

console.log(user?.age ?? "no age set"); //
console.log(age ?? "fallback"); //0
console.log(age || "fallback"); //fallback