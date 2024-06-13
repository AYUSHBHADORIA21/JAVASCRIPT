//javascript have a prototpal behaviour
//agar koi chij nahi milte to layer by layer jata rheta hai
// parent ko access karte hai grandparent ko access karte hai 
// har nahi manti jab tka usko null value na mil jae


//JS me har ek chij object hai jo property object ke pasas
//available hai vo array or string me bhi available hai 
//vo nahi pata ke ye usme applicable hai ke nahi 

// Array-----> object-----> NULL
//string----->Object------> NULL

function multipleby5(num){
    return num*5;
}

console.log(multipleby5(5));

//function function bhi hota hai or usko object ke tarah behave hota hai
//at the end har chij object se milte hai 

//this ka mtlb jis (jisne ne bhi bulaya he uska context store kar do )

function createUser(username , score)
{
    this.username = username;
    this.score = score ; 
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

// const chai = createUser("chai", 25);
// const tea =createUser("tea",250);

// chai.printMe();
//error aega isme can't read the property of undefined

//properties inject hue hai jab function se 
//const chai me value transfer kare to isko bataya nahi 
// iske liye new keyword ka use kiya 

const chai = new createUser("chai", 25);
chai.printMe();