


// function printName(name){
//     console.log(`Hi ${name}`);
// }

// printName.city = "Ranchi";

// printName('Amir')

// console.log(printName.city);



//1. methods of function's object version
//2.they are used to control the context of this



// call methods


// const user1 ={
//     name:"Amir",
//     greeting: function(){
//         console.log(`Hello, ${this.name}`);
//     }
// }

// const user2 ={
//     name:"Fharhan",
//     greeting: function(){
//         console.log(`Hello, ${this.name}`);
//     }
// }

// user1.greeting()
// user2.greeting()


//call methods are use to function borrowing


// const user1 ={
//     name:"Amir",
//     greeting: function(){
//         console.log(`Hello, ${this.name}`);
//     }
// }

// const user2 ={
//     name:"Fharhan"
    
// }

// user1.greeting.call(user2)


// const user1 ={
//     name:"Amir",
    
// }

// function greeting(){
//     console.log(`Hello, ${this.name}`);
// }

// const user2 ={
//     name:"Fharhan"
    
// }

// greeting.call(user1)
// greeting.call(user2)



// const user1 ={
//     name:"Amir",
    
// }

// function greeting(city,age){
//     console.log(`Hello, ${this.name} From to ${city} age ${age}`);
// }

// const user2 ={
//     name:"Fharhan"
    
// }

// greeting.call(user1,'Ranchi',21)
// greeting.call(user2,'Ramgarh',30)





// Apply Method



// const user1 ={
//     name:"Amir",
    
// }

// function greeting(city,age){
//     console.log(`Hello, ${this.name} From to ${city} age ${age}`);
// }

// const user2 ={
//     name:"Fharhan"
    
// }

// greeting.apply(user1,['Ranchi',21])
// greeting.apply(user2,['Ramgarh',30])



// bind Method
// bind Method is creates a new function with fixed this

const person = {
    name:'sahil',
    sayHi: function(city,age){
        console.log(`Hello, ${this.name} from ${city} of age ${age}`);
    }

}

const anotherPerson = {
    name:'Faiz',
}


const boundFunction = person.sayHi.bind(anotherPerson,'Hazaribagh',21)
boundFunction()