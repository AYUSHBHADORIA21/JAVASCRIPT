// const Email = "ayush@gmail.com"

// if(Email){
//         console.log("Got The Mail");
// }
// else{
//     console.log("Dont have the User Mail");
// }

//falsy vlaues

// false  , 0 , -0 , BigInt 0n , "" , null , undefined , Nan

//truthy

//falsy value chor ke sab (surprise) Ex.  "0" , "False" , " " , [] , {} , function(){}

const emptyObject = {}

if(Object.keys(emptyObject).length === 0 )//array ban ke aa jaega Keys ka 
{

}



//Nullish Coalesing Operator(??):null undefined
//kese database se call kiya to null value aa jae to uske  backup or saftey ke liye 
let val1  ; 
val1 = null??10 
// console.log(val1);

//terniary operator 
// condition ? true : false 

const iceTeaPrice = 100 
iceTeaPrice >=60 ? console.log("Out of budget") : console.log("Under Budget")

