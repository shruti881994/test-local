console.log('Sync and Async understanding');

// synchronous example
console.log('start 1'); //executes 1st
console.log('start 2'); //after completing 1st execution the 2nd one executes
console.log('start 3'); //after completing 1st and 2nd execution the 3rd one executes
//  here is the samll example:
//  shruti => left house at 11am , but she needs to reach office at 11.30
//  laxmi => shruti reached laxmi house at 11.10 but laxmi is takign time to redy so shruti hast to wait 
// meenaxi=> shruti and laxmi both reached meenaxi house at 11.25 but she is telling to wait for 5min
// to overcome of this we need Async

// async example
console.log('shruti');
setTimeout(()=>{
console.log('Shru')
},3000)
console.log('Hey Shruti')