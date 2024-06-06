function addNumber(Number1 , Number2)/*parameter*/
{
    console.log(Number1+Number2);
}

// addNumber(2,"3")
//addNumber(2,null)

// const result = addNumber(3 , 4)
// console.log("Result:" , result) // result he undefined because there is no return typr in fucntion

function addNumber(Number1 , Number2)/*parameter*/
{
    let result = (Number1+Number2);
    return result ; 
}

// const result = addNumber(3 , 5)// ab kar dega kyu ki return value he 
// console.log(result);

function loginUserMessage(Username = "AYUSH")//default value set kar do nahi to agar argument
                                            // nahi denge to undefined print karega 
{
    if(!Username)
        {
            console.log("enter the name firsst")
            return ; 
        }
        return `${Username} !! hey there`
}

// console.log(loginUserMessage("BHADORIA"))//( " ")  undefined dega kuch value he nahi de he 



function calculateCart(...num1)
{
    return num1;
}

// console.log(calculateCart(100 , 200 , 300))
//we can add more argument if function is accepting only one paramter 

const user ={
    username :"ayush bhadoria",
    price: 200
}

function handleObject(userObject )
{
    console.log(`username is ${userObject.username} and the price is ${userObject.price}`)

}

// handleObject(user)

// handleObject({
//     username:"bhadoria",
//     price:900
// });

const newArray = [200 , 300 , 400]

function returnSecondValue(getArray)
{
    return getArray[1];
}

// console.log(returnSecondValue(newArray));
console.log(returnSecondValue([500 , 400 , 200 ]))
