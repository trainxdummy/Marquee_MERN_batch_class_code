// const person = {
//     name : "Nikhil Y",
//     greet: function(){
//         console.log( `Good morning Mr. ${this.name}`)
//     } 
// }

// person.greet()

// const person1 = { name : "Rajneesh"};

// person.greet.call(person1)


//

const person = {
    firstName : "Rohan",
    lastName : "Singh",

    fullName: function(city, country) {
      return ` I am ${this.firstName} ${this.lastName} from ${city} ${country}`;
    }
  };


// console.log(person.fullName())
  
const john = { 
                firstName: "John", 
                lastName: "Doe" 


            };

console.log("call: ", person.fullName.call(john, "delhi","India"));  //arg : passing individual argus 
console.log("apply: ",person.fullName.apply(john, ["delhi","India"]));  //arg : passing in an array


let res =  person.fullName.bind(john, "delhi","India"); 

console.log(res());



