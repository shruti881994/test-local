console.log('callback function');

let greet =(name, callback)=>{
        callback();
    console.log("Hi" +name)

}

let sayby = () =>{
    console.log("hello how are you dear")
}

greet('shru', sayby)
