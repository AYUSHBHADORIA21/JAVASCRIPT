const accountID = 123442
let accountEmail = "ayushbhadoria_21302@aitpune.edu.in"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState ; 
//account = 2 //can't be changed becase it is constant

/*
    dont use the var 
    because of issue in block scope and functional scope
*/
console.log(accountID)

accountEmail = "ayushbhadoriya1241@gmail.com"
accountPassword ="121212121"
accountCity="Pune"

console.table([accountID ,accountEmail ,accountPassword ,accountCity , accountState])
