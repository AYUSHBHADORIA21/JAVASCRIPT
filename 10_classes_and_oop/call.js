//mann lo function call kiya uske andar ek or function call kiya callme()
//agr callme ko kon bataega this kisko refer karna hai ye to function ko refer karega 
//yaha pe this global execution context 
//global EC ka problem ye hai ki jab window wala environment hai to window ko access kart hai
//par agar node wala environment hai to {} empty object ata hai

function SetUsername(username){
    this.username = username
}

function CreateUser(username , email , password)
{
    // SetUsername(username)
    //dekkat ho to video dekh lena
    //ye method call he nahi ho rha he iska reference diya hai he call nahi kiya 
    SetUsername.call(this , username)//ye kudh ka this bana ke SetUserName ko de diya hai
    //this yaha pe current execution context kese or ko pass kar rha he upar wale ko SetUserName ko

    this.email = email
    this.password = password
}

const chai = new CreateUser("chai" , "chai@gmail.com", "123")
console.log(chai);
//ab ye username wala section print he nahi karega 


