console.log("switch case");
// qstn: A person have 50,000 then he can purchase iwatch 
// if persone has 70,000 then u can purchase iphone, 
// if persone has 100000 then u can purchase mac
// if persone has 1000000 then u can purchase mac book pro

let person = 70000;

switch(person){
  case 100000: console.log("you can purchase mac") 
  break;
  case 50000: console.log("you can purchase i-watch")
  break;
  case 70000: console.log("you can purchase iphone")
  break;
  case 1000000: console.log("you can purchase macbook pro")
break;
  default: console.log('Invalid')
}