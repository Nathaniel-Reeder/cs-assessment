const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(smallArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(smallArray);
let resultsInsert = perf.stop();


console.log('Results for the smallArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

//---------------------------------------------------
//            | Insert       |  Append              |
//---------------------------------------------------
//Tiny:       | 27.1 micro   |  66.1 micro          |
//---------------------------------------------------
//Small:      | 39.6 micro   |  80.7 micro          |
//---------------------------------------------------
//Med:        | 130.9 micro  |  133.2 micro         |
//---------------------------------------------------
//Large:      | 8.1 ms       |  453.2 microsecond   |
//---------------------------------------------------
//XtraLarge:  | 723.8 ms     |  3.2 ms              |
//---------------------------------------------------

//The Insert function is initially faster, but as the array gets larger, the time it takes to complete grows more quickly than the time it takes the Append function does so in the end it is much less effiecient.  Both functions use a for loop, the time the for loop takes to run increases as the array length increases. The append function uses the .push method that appends to the end of the array, which uses a simple arithmetic operation (for example, length property + 1).  Append therefore increases linearly (O(n)) based on the array.length

//The Insert function is ultimately so slow because it uses unshift. This is because it has to calculate the new index of subsequent items in the array. In the worst case, the new term is at the begining of the array and it has to do that for every item in the array. This is called every time the for loop iterates, also based on the array length.  n here is the value of the array length, so n*n or in big O notation, O(n^2)

