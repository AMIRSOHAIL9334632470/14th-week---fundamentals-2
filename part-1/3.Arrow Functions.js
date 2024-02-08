// function add(a,b) {
//     return a + b;
    
// }
// let sum = add( 4 , 6)
// console.log(sum);


                //    OR
  
// let add = ( a,b) =>{
//     return a + b;
// }
// let sum = add(4,9)
// console.log(sum);


                  // OR

//  let add = ( a,b) =>a + b;
//  let sum = add(4,9)
// console.log(sum);     


// let printNum = a => console.log(a);
// printNum(7)




// Difference between Regular Function and Arrow Function

// 1.argument
// 2.Syntax
// 3.binding of this



//Regular Function

//arguments
// function add(){
// console.log(arguments);
// }
// add(10,20,30,40,50)



//Syntax

// function add(){
//     console.log(arguments);
//     }

//     let add1  = () =>console.log(arguments);
//     add(10,20,30,40,50)
//     add1(10,20,30,40,50)



// binding of this


// const person ={
//     name: 'john',
//     greet:function(){
//         console.log(`Hello, my name is ${this.name}`);
//     },
//     greetTwo: () =>{
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }
// person.greet();
// person.greetTwo();




//use for new keyword


function RegularFunction(name){
    this.name = name;
}
const RegularObj = new RegularFunction('JOHN')
console.log(RegularObj);


const ArrowFunction = (name) => {
    this.name;
}
const arrowObj = new ArrowFunction('Peter');
console.log("arrowObj");