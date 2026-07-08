function outer() {
  let count = 5; 
  
  function inner() {
    count += 1
    console.log(count); 
  }

  return inner
}

var inner = outer()
inner()//6
inner()//7
inner()//8

console.log("---------------------")

var inner2 = outer();
inner2()//6
inner2()//7
inner2()//8
inner2()//9
inner2()//10




//--------------------




function sample() {
  let num = 10; 
  
  function showNum() {
    console.log(num); 
  }
  
  num = 42; 
  return showNum; 
}

const result = sample(); 
result();   

