console.log('Promises in javascript');
// A Promise in javascript is an object represnting the eventual result (success/failure) of an asynchromous operation
// states of promise:
// 1. pending: Initial state operation hasn't completed.
// 2. fullfilled: operation succeeded, giving a resolved value.
// 3. Rejected: operation failed, providing a reason(error).

let dohomework = new Promise((resolve, reject)=>{
    let completed = true; //change to false to test rejection
    console.log('starting the my homework');
    setTimeout(()=>{
        if(completed){
            // console.log('Homework Finished');
            resolve({msg: 'Homework Finished', val:20});
        }
        else{
            reject(`Didn't Finished Homework`)
        }
    }, 2000); // 2sec only
})

dohomework.then(msg=>console.log(msg)).catch(err=>console.log(err));