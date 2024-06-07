// immediately Invoke Function Expression(IIFE)
// immediately function execute karna he to 
//1. jese he program chalu ho vese he uska database connect ho jae program se 
//2. kabhi kabhi function me jo declare kar rhe ho vo global scope se 
//  pollute ho jate he . na hone hone ke liye IIFE ka use karte he ham 
//  global scope ke pollution ko hatane ke liye 

// function chai()
// {
//     console.log(`DB CONNECTED`)
// }

// chai()

// ()()
//phela () to function ka declaration ke liye dusara () function ke execution ke liye
(function chai()
{
    //named IIFE he 
    console.log(`DB CONNECTED`)
})();

// ye invoke to ho gya he par isko pata nahi he ki kaha rukna he chalta
// rhega or neche wale or bhi function ko execute nahi hone dega islye ham ";" laga te he 

((name) => {
    //simple IIFE he
    console.log(`DB CONNECTED ${name}`)
})("Ayush");

// ; ye laga ke phela function terminate karna padega tabhi dusara function likh paenge 
