// function with a single parameter

// function greet(name) {
//     console.log(`Hello ${name} !`);
// }
// greet('Amir Sohail')
// greet('Tahir Khan')
// greet('Ahmad Raza')
// greet()//undifined



// function with default parameter

// function greet(name='Sahil Ansari') {
//     console.log(`Hello ${name} !`);
// }
// greet('Amir Sohail')
// greet('Tahir Khan')
// greet('Ahmad Raza')
// greet()
// greet()



// function with multiple parameter

// function calculateSum(num1 , num2) {
//     return num1 + num2
// }
// console.log(calculateSum(50 , 39));

// function calculateSum(num1 , num2 ,num3 , num4 ,num5) {
//     return num1 + num2 + num3 + num4 + num5
// }
// console.log(calculateSum(50 , 39 ,77 ,23 ,12));



//function with retuns arguments


// const nums =[ 1, 2, 3, 4 ,5]

// function printArrayElements(arr) {
//     console.log(arr);
// }
// printArrayElements(nums)


// const nums =[ 1, 2, 3, 4 ,5]

// function printArrayElements(arr) {
   
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
    
// }
// }
// printArrayElements(nums)




// function greeting(name,city) {
//    console.log(`Hello ${name} from city ${city} !`); 
// }
// greeting("Ayan","Patratu")




// function greeting({city ,name}) {
//     console.log(`Hello ${name} from city ${city} !`); 
//  }
//  greeting({name:"Ayan", city:"Patratu"})




// function sumWithArguments(){
//     console.log(arguments);
// }

// sumWithArguments(1,2,3)
// sumWithArguments(1,2,3,4,5,6,7,8,9)




// function sumWithArguments(){
//     const argsArray =Array.from(arguments)
//     console.log(argsArray);
// }

// sumWithArguments(1,2,3)
// sumWithArguments(1,2,3,4,5,6,7,8,9)


//using argument object

// function sumWithArguments(){
//     const argsArray =Array.from(arguments)
   
//     //argument.reduce()

//     let sum = argsArray.reduce(function(acc,curr){
//         return acc + curr
//     },0)
//    return sum
// }

// console.log(sumWithArguments(1,2,3));
// console.log(sumWithArguments(1,2,3,4,5,6,7,8,9));





// rest parameter...


// function sumWithArguments(...number){
//     console.log(number);
// }

// console.log(sumWithArguments(1,2,3));
// console.log(sumWithArguments(1,2,3,4,5,6,7,8,9));




function sumWithArguments(...number){
  

    let sum = number.reduce(function(acc,curr){
        return acc + curr
    },0)
   return sum
}

console.log(sumWithArguments(1,2,3));
console.log(sumWithArguments(1,2,3,4,5,6,7,8,9));
