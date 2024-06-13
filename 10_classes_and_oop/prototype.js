let myName = "AYush     "
let mychannel = "chai   "

console.log(myName.length);
console.log(mychannel.length);

//bar bar trim().length nahi lagana chata mai 
//ek method/property bana dena chata hu jo hamesa use karu

let myHeros = ["thor" , "spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`)
    }

}

Object.prototype.ayush = function()
{
    console.log("Ayush is present in all object")
}

heroPower.ayush();
myHeros.ayush();

//top level ke hyarchicy access kar liya  udhar he ayush() declare
//kar diya to usko har koi access kar skta hai 

// Array.prototype.heyAyush() = function(){
//     console.log("HII Ayush")
// }

// heroPower.heyAyush();
//kya method agar ham sirf array ko denge to vo 
//object me bhi inject hogi ? nahi hogi 


//inhertance
const User = {
    name:"ayush",
    email:"ayush@gmail.com"
}
const Teacher = {
    makeVideo: true 
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment:"JS assignment",
    fullTime:true , 
    __proto__: TeachingSupport
}

//or

Teacher.__proto__ = User

//morden syntax

Object.setPrototypeOf(TeachingSupport , Teacher)

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`)
}

myName.trueLength()
"Ayush".trueLength()
"IceTea".trueLength()






