
// Method of Array


// Add and Remove items



// at the end of the array 
// 1.push
// 2.pop

// let nums = [10,20,30,40]
// nums.push(80)
// nums.push(3000)

// console.log(nums)

// let popedItem = nums.pop()
// console.log(popedItem);
// console.log(nums);



// beginnig of the array
// 1.shift
//2.unshift
// let nums = [10,20,30,40]

// nums.unshift(50)
// nums.unshift(90)
// console.log(nums);

// let shiftItem = nums.shift()
// console.log(shiftItem);
// console.log(nums);



// Splice(Delete)
//syntax arr.slice(startIndex, endIndex) not including endIndex

// let numbers =["I","Love","JavaScript"]

// console.log(numbers.slice(1,3));
// console.log(numbers);



// let arr = ['t','u','v','w','x','y']

// console.log(arr.slice(-2))
// console.log(arr.slice(2))
// console.log(arr.slice(0))
// console.log(arr.slice(1,3))





// Slice Copy of Array

// let num =[10,20,30,40,50]

// let copynums =num.slice()
// num[0]=100
// console.log(copynums);
// console.log(num);




//Splice of Array

//Swiss knife

// add, delete, replace

//syntax
// arr.splice(starIndex, deleteCount,arg1, arg2,arg3,.......,argN)




// let arr = ["I","Study","Programming"]

// // arr.splice(1,1)
// arr.splice(1,2)
// console.log(arr);


// let arr = ["I","Study","Programming","Right","Now"]

// arr.splice(0,3,"Listen","Music")
// console.log(arr);



// let arr = ["I","Study","Programming","Right","Now"]

// let RemoveElement=arr.splice(0,3,"Listen","Music")
// console.log(RemoveElement);
// console.log(arr);



// let arr = ["I","Study","Programming"]

// arr.splice(2,0,"complex","Skill")

// console.log(arr);


// let arr = [1,2,10]

// arr.splice(-1,0,3,4)

// console.log(arr);





// Method of Concat


// let arr = [10,20]

// console.log(arr.concat([30,40]));

// console.log(arr.concat(30,40),(60,10));
// console.log(arr.concat(30,40),(60,10),(10,30));




// method of iterate


// [10,20,30].forEach(function(item,index,array){
//     console.log(`${item} is at index ${index} in ${array}`);
// })




// Searching in Array
// 1.Method Of indexOf

// let arr = [1,0,false]

// console.log(arr.indexOf(0));
// console.log(arr.indexOf(2));
// console.log(arr.indexOf(false));
// console.log(arr.indexOf(null));
// console.log(arr.indexOf(100));


// 2.method of includes

// let arr = [1,0,false]

// console.log(arr.includes(0));
// console.log(arr.includes(2));
// console.log(arr.includes(false));
// console.log(arr.includes(null));
// console.log(arr.includes(100))


// 3. method of find index 


// let users =[
//     {id:1 ,name:"Amir"},
//     {id:2 ,name:"Tahir"},
//     {id:3 ,name:"Sarwar"},
// ]

// let user =users.find(function(item){
//     console.log(item);
// })

// let user =users.find(function(item){
//     return item.id == 1
// })
// console.log(user);




// methods of Revers


// let nums = [10,20,30,40,50]
// nums.reverse()
// console.log(nums);


//split and join method

// let name = 'jhon , tahir , ayan'
// let arr = name.split(' , ')
// // let arr = name.split(',')
// // let arr = name.split(' ')

// for(let name of arr){
//     console.log(`Send Message to ${name}`);
// }

// // console.log(arr);




let name = 'jhon , tahir , ayan'
let namesArray = name.split(' , ')

console.log(namesArray);

let scr = namesArray.join(' :')
console.log(scr);


