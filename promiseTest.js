// to work on promise async and await we need three parts: 
// 1=> async 2=>then return new promise with resolve then 3=>settimeout
const subject1 = async ()=>{
    return new Promise((res)=>{
        setTimeout(()=>{
            res('Subject is Maths');
        }, 2000)
        
    })
}

const subject2 = async ()=>{
    return new Promise((res)=>{
       setTimeout(()=>{
         res('Subject is ENglish')
       }, 1000)
    })
}

const allSub = async ()=>{
    try{
        let sub1 = await subject1();
        console.log(sub1);
        let sub2 = await subject2();
        console.log(sub2);
    }
    catch(err){
        console.log(err)
    }
}
allSub();