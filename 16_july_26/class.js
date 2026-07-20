// class Student {

//   constructor(name, id) {
//     this.name = name;    
//     this.id = id;        
//   }
  
//   introduce() {          
//     console.log("Hi, I am " + this.name + "with id:" + this.id);
//   }

// }

// let s1 = new Student("Nikhil", 64); 
// s1.introduce();   






//---------------

// class Circle{

//     salary = 80000

//     constructor(radius){
//         this.radius = radius;
//     }

//     get area(){
//         return Math.PI * this.radius**2;
//     }

//     set diameter(val){
//         this.radius = val/2
//     }

//     get getSalary(){
//         console.log(`my salary is ${this.salary}`)
//     }
// }

// let c1 = new Circle(5)
// console.log(c1.radius)
// console.log(c1.area)

// console.log("-------")

// c1.diameter = 20;

// console.log(c1.radius)
// console.log(c1.area)


//----------------------

// class Employee{
//     static salary = 80000;
//     static count = 0;

//     constructor(name){
//         this.name = name;
//         Employee.count++;
//     }

//     static getSalary(){
//         console.log(`my salary is ${this.salary}`)
//     }
    
//     static getEmployeeCount(){
//         console.log (`total employees so far: ${Employee.count}`)
//     }
// }

// let emp1 = new Employee("Ram")
// let emp2 = new Employee("Suray")
// let emp3 = new Employee("Rahul")

// Employee.getSalary()
// Employeec.getEmployeeCount()

//-------------------


// class Foo {
//   constructor(name) {
//     this.name = name;
//   }

//   getNameSeparator() {
//     return "-";
//   }
// }
	

// class FooBar extends Foo {

//   constructor(name, index) {
//     super(name);
//     this.index = index;
//   }

//   getNameSeparator() {
//     return "/";
//   }

//   getFullName() {
//     return this.name + super.getNameSeparator() + this.index;
//   }
// }

// const firstFooBar = new FooBar("foo", 1);

// console.log(firstFooBar.name);
// console.log(firstFooBar.getFullName());


//----------


class Rectangle{
    constructor(width, height){
        this.name = "Rectangle"
        this.width = width;
        this.height = height;
    }

    get getArea(){
        return this.width * this.height
    }
}


class Square extends Rectangle{

    constructor(side){
        super(side, side)
        this.name = "Square"
    }
}

let s1 = new Square(5)

console.log(s1.getArea)
console.log(s1.name)