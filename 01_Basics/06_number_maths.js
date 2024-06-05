const score = 400 
console.log(score)

//if we want to declare the number exclusively then we use 
//the constructor who is calling the number as a object 

// const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// const otherNumber = 23.8932 ;
// console.log(otherNumber.toPrecision(2))
// console.log(otherNumber.toPrecision(3))

// const hundered = 1000000
// console.log(hundered.toLocaleString("en-IN"))


//+++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-6));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.6));

console.log(Math.random());
console.log((Math.random()*10)+1)
console.log((Math.floor(Math.random()*10))+1)


let min = 10 ; 
let max= 20 ; 


console.log(Math.floor(Math.random()*(max-min+1))+min);