
const promiseOne = new Promise(function(resolve , reject){
    //Do an Aync Task
    //DB calls , cryptography , network
    setTimeout(function(){
        console.log("Async Task is Comeplete");
        resolve()
    },1000)
});


promiseOne.then(function(){
    console.log("promise consumed");
})

// async task to print ho jaega par ye .then wala system chala he nahi
// resolve jo pass kiya tha vo .then se connect he nahi hua 
// resolve call karna padega async function me 

new Promise(function(resolve,reject){
    setInterval(function(){
        console.log("Async Task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})

const promiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
         resolve({username:"Ayush" , email:"ayush1241@gmail.com"})
    },1000);
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true; 
        if(!error){
                resolve({username:"Ayush" , mail:"ayush1241@gmail.com"})
        }else{
                reject("ERROR:SOMETHING WENT WRONG")
        }
    }, 1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{//like a default
    console.log("The promise is either resolve or rejected")
})

const promiseFive = new Promise(function(resolve , reject){
    let error = true; 
    if(!error){
            resolve({username:"Ayush" , mail:"ayush1241@gmail.com"})
    }else{
            reject("ERROR:JS WENT WRONG")
    }
})

// async await 

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()

// mtlb kuch response milne wala hai
// jaha convert  hone me ya fetch hone me time lage waha await laga dete hai
async function getAllUsers(){
    try {
        const response = await fetch('https://randomuser.me/api/')
        const data  = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
    
}

getAllUsers();

fetch('https://randomuser.me/api/')
.then((response)=>{
    return response.json()
})
.then((output)=>{
    console.log(output)
})
.catch((error)=>{
    console.log(error)
})

//fetch jada jaldi execute hota hai
//priority queue lagi hue hai 
//to iske task jada jaldi hote hai

//jab bhi fetch call hota hai to 2 kam/part hote hai
//1st part(data space reserve karne ke liye memory me) => Data(space reserve) , onfulfilled[](resolve),onRejectionp[](reject)
//2nd part(API request handle karne ke liye) => web Browser/Node-->network Request--->success or Failed


//koi bhi response aya kuch bhi ki error hai vo bhi onfulfilled[](resolve) me jaega(Success)
//request gye nahi he / no response to onRejectionp[](reject)

//response ke basis pe onfilfilled[] ya onRejection[] fire honge inme hote hai funtion ye Data ko fulfill karega
//ab ye data jaega response me Global memory mai (apne computer mai)

 
