//forin loop me key se chalu hote he forof me to direct value access kar skte he isme key hote he 
const myObject = {
    js:"javascript",
    cpp:"C++",
    rb:"ruby",
    swift:"swift by app"
}

for (const key in myObject) {
    // console.log(`${key} shortcut for ${myObject[key]}`)
}

const prog =[ "Js" , "py" , "rb" ,"java" , "cpp" ]


for (const key in prog) {
    // console.log(prog[key])
}



//map iteratable nahi he 
const map = new Map()
map.set("IN" , "india")
map.set("USA"  ,"United State Of America")
map.set("FR" , "France")

for (const key in map) {
    console.log(`${map[key]} is pincode for ${key}`)
}


