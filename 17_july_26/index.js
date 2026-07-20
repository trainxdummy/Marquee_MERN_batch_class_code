// class BankAccount {
//     #balance = 0;

//     deposit(amount){
//         this.#balance += amount;
//     }

//     getBalance (){
//         console.log(`balance is ${this.#balance}`)
//     }
// }

// let b1 = new BankAccount()

// b1.deposit(500);
// b1.getBalance();

// console.log(b1.#balance)



//----------

// class User {
//   static userCount = 0;
//   #username;

//   constructor(username) {
//     this.#username = username;
//     User.userCount++;  
//   }

//   sayHello() {
//     console.log(`Hello, I'm ${this.#username}`);
//   }

//   static getUserStats() {
//     console.log(`Total users created: ${User.userCount}`);
//   }
// }

// const user1 = new User("Alice"); 
// const user2 = new User("Bob");    
// const user3 = new User("Charlie"); 

// user1.sayHello();     
// user2.sayHello();    
// user3.sayHello();    

// User.getUserStats();  



//------------------


// class Temperature {
//   #celsius = 0;

//   constructor(celsius){
//     this.celsius = celsius;
//   }

//   get toFahrenheit() {
//     return this.#celsius * 9 / 5 + 32;
//   }

//   set toCelcius(value) {
//     this.#celsius = (value - 32) * 5 / 9;
//   }

//   get readCelcius(){
//     return this.#celsius;
//   }
// }

// let temp1 = new Temperature(90)

// console.log("celcius: ", temp1.toFahrenheit)

// temp1.toCelcius = 200; //updated the val

// console.log(temp1.readCelcius);


//----------------


