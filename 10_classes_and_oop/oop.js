//This is Object literal

const user ={
    username:"Ayush",
    loginCount: 8 ,
    signedIn: true,

    getUserDetails:function()
    {
        console.log(this)//pura current context de dega
        // console.log(`Username:${this.username}`)
        //this ka use isliye karenge kyu ki function to define ho gya he 
        //usko batana bhi to padega ki bhai username he user me usko use karo
    }
}

console.log(user.getUserDetails())

// THIS- current Context ke bare me batata hai 
// user me map function hoga or user1 ke liye bhi map function hoga
// ab map ko kese pata konsa user he user ya user1

//constructor function 
//new instance deta he / new copy deta hai 

function User(username , logicCount , isLoggedIn){
    this.username = username;
    this.logicCount= logicCount;
    this.isLoggedIn = isLoggedIn;

}

// const userOne = User("ayush" , 12 , true);
// const userTwo = User("bhadoria" , 15 , false)
// console.log(userOne);
//ye to value overwrite kar rha he userOne ke , ye to glt hai



const userOne2 = new User("ayush" , 12 , true);
const userTwo2 = new User("bhadoria" , 15 , false)
console.log(userOne2);
console.log(userTwo2);

//new keyword use karte he empty instance create hota hai
//constructor function call hota hai or sare argument ko pack kar ke de deta hai
//this keyword ke vajah se argument inject ho jate hai 
//mil jate hai function ke andar 









