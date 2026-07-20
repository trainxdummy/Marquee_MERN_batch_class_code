
// function Car(brand) {
//   this.brand = brand;
// }

// Car.prototype.honk = function() {
//   console.log("Honk! I am a " + this.brand);
// };


// let c1 = new Car("Toyota");
// let c2 = new Car("Maruti");
// c1.honk();
// c2.honk();



//------------------


const animal = {
    eats :"random"
}

console.log(animal.eats)

const rabbit = {
    jump : "jumping"
}
Object.setPrototypeOf(rabbit, animal)

console.log(rabbit.eats)
console.log(rabbit.hasOwnProperty("jump"))
console.log(rabbit.hasOwnProperty("eats"))


//----------------


function Person(name){
    this.name  = name
}

Person.prototype.greet = function(){

}

console.log(Person.prototype)