// console.log(we are learning Date, TimeRanges, setTimeout, setInterval)

let currDate = new Date();
console.log(currDate);
console.log(currDate.getFullYear());
console.log(currDate.getMonth()+1);
console.log(currDate.getUTCHours());

// setInterval() : is used to exceute a function repeatedly after a given interval of time in milliseconds

// setInterval(()=>{
// console.log('shruti')
// }, 1000)

// setTimeout is used to execute a fucntion after a specifed delay in milliseconds but it only runs once
setTimeout(()=>{
console.log('Hi Shruti');
}, 2000);

