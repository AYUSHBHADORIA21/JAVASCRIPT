// agar cuurent context ko refer karna he to this keyword ka use karte hai 
//current context  ka mtlb jitna user ke andar he 
const user  = {
    username : "Ayush",
    price:999,

    WelcomeMessage:function()
    {
        console.log(`${this.username} , Welcome to the website`);
        // console.log(this)//current context(value) ke batt karta he use scope ke 
    }
}

// user.WelcomeMessage();
// user.username = "Bhadoria"
// user.WelcomeMessage();// bhadoria print karega kyu ki current context me ab bhadoria ke ayush ke jagah

// console.log(this) //abhi ye he node environment me or usme koi context hai he nahi ha
// par console pe jake run karoge normal inspect kar ke to usme window dekhaega 

// function chai()
// {
//     let username = "ayush"
//     console.log(this.username);  /// ye nahi chalega undefined de dega!!
// }
// chai()

// const chai = function()
// {
//     let username = "ayush"
//     console.log(this.username); // edhar bhi undefined he aega
// }

// chai()

const chai = () =>//arrow function 
{
    let username = "ayush"
    console.log(this.username); // edhar bhi undefined he aega
}

// chai()

const  addTwo = (num1 , num2) =>{
    return num1 + num2;
}

// const aa = addTwo(3 , 4)
// console.log(aa)

//Implesit return 
//agar ek he line ka return statement he to 
// {} ye hata do or return bhi hata do direct likh lo 

const  addTwo1 = (num1 , num2) => num1 + num2 ;

console.log(addTwo1(3,4))

const  addTwo2 = (num1 , num2) => (num1 + num2) ;
//() agar ye use karenge to return nahi likhna pdga
//same output as addTwo1 function

const  addTwo3 = (num1 , num2) => ({username:"ayush"}) ; 
//yaha pe hame {} isme rap around karna he hoga kyu ki object ese he return hoga



