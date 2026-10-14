// let number = 30;
//  number = 40;
// const num = 50;
// console.log(num);
// console.log(number);

let str = "shruti"; //string
let number = 32; //number
let flag = true; // boolean 
let num = null; //null value
console.log(str);
console.log(number);
console.log(flag);
console.log(num);
console.log("Type:",  typeof str);
console.log("Type:",  typeof number);
console.log("Type:",  typeof flag);
console.log("Type:",  typeof num);

// Operators
console.log("Arthmetic Operators");
let a = 10;
let b= 20;
let sum = a+b;
console.log("Addition:", sum);
console.log("Subtraction:", a-b);
console.log("Multiplication:", a*b);
console.log("Division:", a/b);
console.log("Modulus:", a%b); //modulus operator gives remainder

console.log("--------Assignment Operators--------");

let x = 10;
console.log("The value of x is:", x);
let total = 20;
// += operator
 total += x; // total = total + x;
 console.log("The value of total after += operator is:", total);
 total -= x; // total = total - x;
 console.log("The value of total after -= operator is:", total);

//  comparison operators
// ==, !=, ===, !==, >, >=, <, <=
// 1. == : only compares the value of two variables
// 2. === : compares the value and type of data (data type)
// 3. != : not equal to operator
// 4. !== : not equal to operator (checks value and type)
// 5. > : greater than operator
// 6. >= : greater than or equal to operator
// 7. < : less than operator
// 8. <= : less than or equal to operator
console.log("--------Comparison Operators--------");
let num1 =10;
let num2 ="10";
console.log("The value of num1 is true or not:", num1 == num2); // checks only value
console.log("the value of num1 is true or not:", num1 === num2); // checks value and data type

// ternary operator

console.log("--------Ternary Operator--------");
let age = 19;

age > 18 ? console.log("you are eligible for votting" ) : console.log("you are not eligible")
let age1 = 21;
let resultAge = (age1 > 18) ? ("you can drive a car"): ("you cannot drive a car");
console.log("The result of age1 is:", resultAge);

// Template Litral - back tick

console.log("--------Template Litral - back tick--------");
let name = "shruti";
let income = 56567576;
let phone = 989898989;

// our output = `My name is ${name} and my income is ${income} and my phone number is ${phone}`;

console.log(`My name is: "${name}" and my income is ${income} and my phone number is ${phone}`);

// conditional statements

console.log("--------Conditional Statements--------");

let marks = 30;
if(marks >= 80){
    console.log("you got A Grade");
}
else{
    console.log("you got B Grade");
}

// concepts is: this is the qstn
// if user has adhar && pan card => yes thy can open bank account
// if user dont have adhar && pan card => no they cannot open bank account
// example of && logical operator in this both contions should be true
let adhar = false;
let pan = true;

if(adhar && pan){
    console.log("yes you can open bank acc");
}
else{
    console.log("no you cannot open bank acc");
}
