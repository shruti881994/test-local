console.log('function scope learning')

let globalvar = 20;
const display = ()=>{
    // let globalvar = 10;
    console.log('inside the display funciton:', globalvar); //local scope
}
display();
console.log('outside the display fucniton', globalvar); //global scope

// block scope

let blockscope = 20;
if(true){
    console.log("inside block", blockscope); // this is block scope 
}
console.log("outside:", blockscope);