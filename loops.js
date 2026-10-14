// console.log("----we are learning loops---")

// type of loops
// 1. for loops - number of iteration known
// 2. while loop
// 3. do - while loop

let name = "shruti";
for(let i=0; i<5; i++){
console.log(name);
}

let i = 1;
while(i<=10){
    console.log("shru", i)
    i++;
}
let num = 10;
let sum = 0;
while ( num!= 0 ){
    sum += num;
    console.log('Number= '+num+' sum = ',sum);
    num--;
}

let j = 12;
do{
    console.log("Do - While Loop", j)
}while(j>10);

