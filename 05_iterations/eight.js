//reduce 

//syntax
// const initialvalue = 0 ; 
// const sumwithinitial  = array1.reduce((accumulator , currentvalue)=>(
//   accumulator+ currentvalue
// ), initialvalue);

const myNums = [1,2 , 3, 4,5 ,6]

// const myTotal = myNums.reduce(function(acc , currval){
//     return acc+currval;
// } , 0 )

//or

const myTotal = myNums.reduce((acc , currval)=>(acc+currval))
// console.log(myTotal)

const shoppingChart = [
    {
        itemName:"Js course",
        price:999
    },
    {
        itemName:"py course",
        price:1999
    },
    {
        itemName:"c++ course",
        price:599
    }
]

const priceToPay = shoppingChart.reduce((acc , item)=>(
    acc+item.price
) , 0 )

console.log(priceToPay)
