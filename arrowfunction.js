// Functions in JS

console.log('JS Functions');

// function decalation
function sum(a,b){
    console.log(`sum of ${a} and ${b} = ${a+b}`)
}
// function call
sum(10, 2);
sum(20, 10);
sum(100, 2);

function print(){
    console.log("shruti");
}
print();

function multiply(a, b){
    console.log(`multiply of this ${a} and ${b} is ${a*b}`)
}
multiply(2, 2);

function mul(a,b,c){
    return a*b*c;
}
const res = mul(2,3,4);
console.log("Result is:", res);

function greet(name){
    return ` hello ${name}`;
}
let result1 = greet('shruti');
console.log(result1);

// arrow functione xample
const greeting = ()=>
console.log('shrutiumadi')
greeting();

let mult = (a, b)=> a*b;
console.log("Multiply:", mult(10,10));

