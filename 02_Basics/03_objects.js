//const tinderUser = new Object()
const tinderUser ={}

tinderUser.id = "1234"
tinderUser.name = "ayush bhadoria"
tinderUser.isLoggedin = false 

// console.log(tinderUser)

const regularUser = {
    email:"ayushbhadoria1241@gmail.com",
    fullname:{
        username:{
            firstname:"ayush",
            lastname:"bhadoria"
        }
    }
}

// console.log(regularUser)

const obj1 = {1:"a" ,2:"b"}
const obj2 ={3:"c"  , 4:"d"}
const obj3 = {5:"e" , 6:"f"}

// const obj4 = {obj1 ,obj2 , obj3};
// console.log(obj4);

const obj4 = Object.assign({}/*target alag se object ka form*/ ,obj1 ,obj2 , obj3 )
// console.log(obj4)

//scatter wala method to ha he 

const  obj5 = {...obj1 ,...obj2 ,...obj3 }
// console.log(obj5);


console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty("name"))

