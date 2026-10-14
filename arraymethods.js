// array methods
// 1) Push() : Adds one or more elements to the end of the Array.
// 2) Pop(): Removed the last Element from the array and returns that Element.
// 3) shift(): Removes the first element from the array and returns it.
// 4) unshift(): Adds one or more elements to the begning of the array

let arr = [10,20,30,40];
// push method
arr.push(50);
console.log("push pop", arr);
console.log("Before pop", arr);
arr.pop();
console.log("after pop", arr);
arr.shift();
console.log("after shift", arr);
arr.unshift(0);
console.log("unshift", arr);

// find method: fReturns the first element that satisfies the provided testing function
let findnumber = arr.find(data=>data>20)
console.log("This is the greatest number", findnumber);


// inccludes method: Determines whether an array contains a certain value. it returns true or false
console.log(arr.includes(20));

// concat() method: Merges two or more arrays and returns a new array
let arr1 = [1,2,3,4,5,6];
let arr2 = [10,60];
let merge = arr1.concat(arr2);
console.log(merge);

// joine(): joins all array elements into a string, with an optional sepeator
let array = ["shruti", "viju", 'meenaxi', "anil", "ashok"];
let joined = array.join(" ... ");
console.log("joine method:", joined);

// splice(): Adds or removes elements from the array
let sp_arr = [1,2,3,4,5,6];
let element = sp_arr.splice(2, 2, "apple");
console.log(sp_arr);
// splice(2=indexnumber, 2= elements, "apple"= what u want to display that u can write here);

// slice(): Returns a shallow copy of a portion of an array

let sl_arr = [10, 20, 30, 40, 50];
let sliced = sl_arr.slice(1,4);
console.log('sliced array:', sliced);

// sort(); sorts the elements of the array (alphabetical by default, can be customized)
// let sort_arr = [3, 1, 4, 2];
// let sorting = sort_arr((a, b)=> a - b);
// console.log(sorting);

//findIndex(): Returns the index of the first element that satisfies a test
let arrindiex = [5,12,23,10];
let index = arrindiex.findIndex((el) => el > 20);
console.log("find index", index);

// from(): creates an array from an array like or iterable object
let str = "shruti";
let fromstr = Array.from(str);
console.log(fromstr);

// isArray(): checks if the given value is an array
let array1 = [1,2,3,4];
let string = "shruti";
console.log(Array.isArray(array1));
console.log(Array.isArray(string));