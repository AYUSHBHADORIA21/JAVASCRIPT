const arr = [1 ,2 ,3 , 4 , 5]

for (const val of arr) {
    // console.log(val);
}

const greeting = "hello World"

for (const val of greeting) {
    if(val == " ") continue;
    // console.log(val)
}


const map = new Map()
map.set("IN" , "india")
map.set("USA"  ,"United State Of America")
map.set("FR" , "France")

// console.log(map);

for (const [key , value] /*destructuring the array*/ of map) {
    // console.log(key+":-"+value)
}

const myObjects = {
    game1: "NFS",
    game2:"Spider-men"
}

// not for the object iterations
// for (const val of myObjects) {
//     console.log(val)
// }

