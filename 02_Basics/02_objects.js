//agar object ko literal ke tarah declare karte he to singleton nahi banta
//constructor se manega to hamesa singleton me banega 


//object literal 

const mySym = Symbol("key1");

const  JsUser = {
    name:"ayush Bhadoria",
    age : 18 , 
    [mySym]:"mykey1",
    "hobby" : "kabaddi", 
    location: "Gwalior",
    Mail:"ayushbhadoriya1241@gmail.com",
    isLoggedIn : false,
    lasttimeloggedin: ["mon", "fri"]
}

// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(JsUser["hobby"]);//can't be access though . method 
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

// console.log(JsUser);

// JsUser.Mail = "ayushbhadoriya2896@gmail.com"
// // console.log(JsUser);
// Object.freeze(JsUser)
// JsUser.Mail ="ayush@gmail.com"
// console.log(JsUser);

JsUser.greeting= function()
{
    console.log("hi Brother");
}
JsUser.greetingTow= function()
{
    console.log(`hi how are you ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTow());







