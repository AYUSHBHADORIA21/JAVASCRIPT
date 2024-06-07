// let a = 10
// const b = 20
// var c = 300

{}  //this is called scope 

if(true){
    let a = 10
    const b = 20
    // var c = 30 // or c = 30 ye bhi same he kam karega change kar dega value 
}

//a define nahi hoga bhar scope ke andar he rhega 
// console.log(a);
//b bhi define nahi hoga scope ke bhar 
// console.log(b);
//c dekha dega ye scope ke bhar bhi declare ho gya 
// console.log(c)    
// globally c=300 declare kiya tha par c ke value function me hamne 30 kar de or 30 print ho gya
//problem he ye bht badhi 


let a = 300 ;

if(true){
    let a = 10;
    // console.log(a)
}
// console.log(a)

function one()
{
    //parent ke andar username he to child(function Two()) uske value ko access kar skta he
    const username = "Ayush_bhdoria"

    function two()
    {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website)   //function ke bhar uske variable ko access nahi kar pae

    // two()
}
// one()

if(true)
    {
        const username = "bhadoria"
        if(username === "bhadoria")
            {
                const website = "Youtube"
                // console.log(username+website);
            }
            // console.log(website) // function ke bhar nahi kar skta uske variable ko access
    }
    // console.log(username)// same reason as above

//+++++++++++++++++++++interesting+++++++++++++++++++++++++++++++++++++++++++

console.log(addone(5)); // we can define it here edhar bhi call kar dega isko bolenge hoisting

function addone(num)// normal function declaration
{
    return  num+1;
}

// console.log(addTwo(5))// isko call nahi kar skte function se phele function ke badh he call kar skte he 

const addTwo = function(num1)// another type of fucntion declaration
{
    return num+2;
}




