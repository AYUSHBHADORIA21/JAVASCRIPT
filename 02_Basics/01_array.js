// array , resize kar skte hai , koi bhi datatype dal skte hai 


const myArr =   ["ayush" , 12 , 6  , true ]
const myArr2 = new Array(1 , 2 , 3, 4)
// console.log(myArr2)
// console.log(myArr[0]);

//array method 

// myArr.push("anushka")
// myArr.push("Bhadoria")
// myArr.pop()
// myArr.unshift("bhadoria")
// myArr.shift()
// console.log(myArr.includes("ayush"))
// console.log(myArr.indexOf(true))

const newArr = myArr.join();
//bind bhi ho gya he or string ke value me bhi aa jata he 
// console.log(typeof(newArr))
// console.log(typeof(myArr))


//***********************Slice and splice********************************//
console.log("A" , myArr);
const myNewArr1 = myArr.slice(1,3);
//ye original array me kuch nahi karega 
console.log(myNewArr1);
console.log("B" , myArr);

console.log("A" , myArr);
const myNewArr2 = myArr.splice(1,3);
//ye original arry ko manipulate kar dega or last wala range bhi include karega 
console.log(myNewArr2);
console.log("B" , myArr);
