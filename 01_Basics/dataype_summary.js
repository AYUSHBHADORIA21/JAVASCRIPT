// #Primitive(call by value  / kahi se kahi copy karte he to reference nahi diya jata he 
//            copy kar ke diya jata hai )

// 7 types : string , number ,boolean , null  , undefined , Symbol , BigInt 


// const id = Symbol("123123")
// const addressId = Symbol("123123")

// console.log(id == addressId);

// reference (NON Primitive)

//Array , Object , Functions


//```````````````````````````````````````````````````````````````````````````````````````````````

//stack(Primitive) and heap(Non-Primitive)

let MyOccupation = "Enginner";

let NewOccupation = MyOccupation;
NewOccupation = "Leiutenant"

//ab ye stack me value store karega mtlb Newocupation Copy store karega Myoccupation ki
//agar NewOccupation me change karenge to MyOccupation me change nahi hoga kyu ki 
//hamne wake by reference nahi uthae he copy uthae he MyOccuptaion ki 

let UserOne = {
    name:"ayush",
    rollNo:21
}

let UserTwo = UserOne;

UserTwo.rollNo = 29 ; 

console.log(UserOne);
console.log(UserTwo);

//edhar by reference call hoga thik mtlb ye he ke isme 
//ek to heap me value store hogi upar se by reference call hoga sab kuch 
//agar UserOne point kar rha he ek value ko tu UserTwo bhi point karega uski value ko 
//value me change mtlb dono users me change 


//UserOne(name) hoga to stack me save par uski value jaega Heap me udhar se by reference call hoga


