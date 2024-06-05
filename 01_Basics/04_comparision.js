// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);


// console.log("2">1);
// console.log("02">1);

console.log(null >0)
console.log(null == 0 );
console.log(null >=0);

//the reason is that an equality check == and comparisons ><= 
//<= work differently 
//camparison convert null to numerical value which is 0 .
//that's why console.log(null >=0) true and  console.log(null >0) false

// === strict comparison 

console.log("2"===2);
