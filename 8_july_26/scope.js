var a = 100;

function hoist() {
  a = 20;
  var b = 100;
}

hoist();

console.log(a); // 20


console.log(b); //reference error



//----------------------------



function test() {
  var x = 10;
  console.log(x); //10
}

test();

console.log(x); // error



//---------------

if (true) {
  var a = 1;
  let b = 2;
  const c = 3;

}

// console.log(a); //1
// console.log(b); 
// console.log(c); // error



//-----------------
let animal1 = "rabbit";

function animal(){
    if(true){
        animal1 = "cat";
        const animal2 = "dog";
        let animal3 = "rat";
    }
    // console.log(animal1);
    // console.log(animal2); //error
    // console.log(animal3);
}

console.log(animal1);

animal();



//-----------------

function hoist() {
  console.log(message);
  
  var message='Hoisting is all the rage!'
}

hoist();


//--------------------------



let a = "outside";

function test() {
	let a = "inside";
	console.log(a); //inside
}

test();

console.log(a); //outside



//------------------------



function foo() {
  let z = 7;
  console.log(z);
}

foo();

console.log(z)


//-----------------



