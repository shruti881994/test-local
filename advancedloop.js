// Advanced loop's in JS
// for..in loop: Iterates over the keys(propertied) of an object or the indices of an array
// for..of loop: Iterates over the values of iterable objects like arrays ,strings, maps etc
// forEach(): Executes a fucniton once for each element in an array (Cannot be used to break the loop)



// for in loop example: when we need to show both key and value we can use this loop
const phone = {
    brand: 'Apple',
    model: 'Iphone 14',
    Price: '90000',
    camera: '20mp',
    ram: '16gb',
}

for(let key in phone){
    console.log(key, phone[key]);
}

// for of loop example
const nums = [10,20,30,40,50];
for(let value of nums){
    console.log(value)
}

// forEach loop exmaple

let number = [10,20,30,40,50];
number.forEach((value, index, number)=>{
    console.log(value, " = " , index, " = ",  number);
})
