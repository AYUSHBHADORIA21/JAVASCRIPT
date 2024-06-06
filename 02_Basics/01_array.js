// // array , resize kar skte hai , koi bhi datatype dal skte hai 


// const myArr =   ["ayush" , 12 , 6  , true ]
// const myArr2 = new Array(1 , 2 , 3, 4)
// // console.log(myArr2)
// // console.log(myArr[0]);

// //array method 

// // myArr.push("anushka")
// // myArr.push("Bhadoria")
// // myArr.pop()
// // myArr.unshift("bhadoria")
// // myArr.shift()
// // console.log(myArr.includes("ayush"))
// // console.log(myArr.indexOf(true))

// const newArr = myArr.join();
// //bind bhi ho gya he or string ke value me bhi aa jata he 
// // console.log(typeof(newArr))
// // console.log(typeof(myArr))


// //***********************Slice and splice********************************//
// console.log("A" , myArr);
// const myNewArr1 = myArr.slice(1,3);
// //ye original array me kuch nahi karega 
// console.log(myNewArr1);
// console.log("B" , myArr);

// console.log("A" , myArr);
// const myNewArr2 = myArr.splice(1,3);
// //ye original arry ko manipulate kar dega or last wala range bhi include karega 
// console.log(myNewArr2);
// console.log("B" , myArr);


const marvel_heroes = ["Ironman" , "CaptainAmerica" , "Thor"]
const DC_heroes = ["Supermen" ,"Batman" , "WonderWomen"]

// marvel_heroes.push(DC_heroes);
// console.log(marvel_heroes);

// const all_heroes = marvel_heroes.concat(DC_heroes);
// console.log(all_heroes);


//here we use spread operator ... we can add more than two at same time 
// const all_new_heroes = [...marvel_heroes , ...DC_heroes]
// console.log(all_new_heroes);


// const another_array = [ 1 , 2 , 3 , [4 , 5]  ,6 , [ 7 ,[ 8 , 9]]];
// const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

//agar kese or form me aega or array me convert karna he 

console.log(Array.isArray("ayush"));
console.log(Array.from("ayush"));
console.log(Array.from({ name:"ayush"})); 
//interesting kabhi object nahi dega ye bolega ki bhai ya to key nikal lo ya value 


//multiple value ho gye or usko combine kar ke ek array bana na he 

let score1 = 100 ;
let score2 = 100 ;
let score3 = 100 ;

console.log(Array.of(score1 , score2  , score3));
