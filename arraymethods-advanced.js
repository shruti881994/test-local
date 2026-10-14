console.log("we are learning map, filter and resduce");
// High order Array Methods: map, filter and reduce
// 1) map(): Creates and return new array by applying a function to each element of the original array
// 2) filter: creates and returns a new array with elements that pass a specified test condition
// 3) reduce: Reduces an array to a signle value by applying a function to each element

// map() method example
let array = [1,2,3,4];
let result = array.map((i)=>i*2);
console.log("New array:", result);

// filter() method example
let array1 = [1,2,3,4,5,6,7,8];
let result1 = array1.filter((e)=>e % 2 == 0);
console.log("Filtered result:",result1)

// reduce() method example
let arr = [1,2,3,4,5,6];
let sum = arr.reduce((prevValue, element)=>{
    console.log("Previous Value is:", prevValue, "Element is:", element);
    return prevValue + element
} );
console.log("the sum is:", sum);
// understanding purpose
// prevValue, element => prevValue + element
// 0        , 1       => 0         + 1      = result is 1
// 1        , 2       => 1         + 2      = result is 3