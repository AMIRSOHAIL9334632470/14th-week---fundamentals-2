// declaration of Array

// 1.using square bracket
// 2.Using array constructor
//3.Using Array literal



// Using square bracket


// let numbersArray = []

// console.log(Array.isArray(numbersArray));



// let numbersArray1 = [10,20,30,40,50]

// console.log(numbersArray1);


//Using array constructor

// let Fruits = new Array('Oranges','Mangoes','Bananas')

// console.log(Fruits);



// let Fruits = new Array(5)

// console.log(Fruits.length);



//Using Array literal



// let mixedArray = Array('Apples',true,10,{name:"ayan"})

// let mixedArray = Array['Apples',true,10,{name:"ayan"}]
// console.log(mixedArray);




//access the array

// let nums = [10,30,40,50,60,54]

// nums[3]=true
// console.log(nums[3]);
// console.log(nums);

// delete nums[2]
// console.log(nums);





// Basic iteration



let nums = [10,20,30,40,50]

// for (let i = 0; i < nums.length; i++) {
// console.log(`at index ${i} value is ${nums[i]}`);
    
// }

// let i =0
// while (i < nums.length) {
//     console.log(`at index ${i} value is ${nums[i]}`);
//     i++
// }



//for of loop


for(let num of nums){
    console.log(`value is ${nums}`);
}