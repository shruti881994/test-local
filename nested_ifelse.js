console.log("nested if and else")

// qstn: ravi = 100, anil = 50, ashok = 10: need to check who is having more money

let ravi = 2000, anil = 50, ashok = 1000;

if(ravi > anil){
    if( ravi > ashok){
        console.log("ravi has enough money")
    }
    else{
        console.log("ashok has enough money")
    }
}
else{
    if(anil > ashok){
        console.log("anil has more money")
    }
    else{
        console.log("ashok has more money")
    }
}
