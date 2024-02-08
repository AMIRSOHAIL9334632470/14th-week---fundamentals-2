// let a = 10;

// let b = 20;

// function add() {
//    // block of code
//    console.log(a + b); 
// }
// add() //function calling
// add()
// add()
// add()
// add()


function add( a , b)//parameters
 {
    
    console.log(a + b); 
 }
 add( 50 , 10)//arguments

// fuction declaration
 function add( a , b)
 {
    
    console.log(a + b); 
 }
 add( 50 , 10)
 add( 20 , 20)
 add( 50 , 80)
 add( 90 , 60)




 // function first class citizens

let sum = function add(a ,b){
    console.log( a + b);
}
console.log(sum(78 ,90));




function x(callback) {
    console.log("Hello");
    callback()
}

function y() {
    console.log("Bye");
}

x(y)


// function add(a,b){
//     return function sum(){

//     }
// }





function add( a , b)
 {
    
  return a + b; 
 }
let sum1= add( 50 , 10)
console.log(sum1);