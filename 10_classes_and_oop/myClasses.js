class User{

    constructor(username , email , password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword()
    {
        return `${this.password}abc`
    }

    ChangeuserName()
    {
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai" , "chai@fb.com","123")
console.log(chai.encryptPassword());
console.log(chai.ChangeuserName());


//behind the scene 

function User(username ,email , password)
{
    this.username = username;
    this.email = email ;
    this.password = password;
}

User.prototype.encryptPassword = function()
{
    return `${this.password}abc`
}
User.prototype.ChangeuserName = function()
{
    return `${this.username.toUpperCase()}`
}

const tea = new User("Tea" , "chai@fb.com","123")
console.log(tea.encryptPassword());
console.log(tea.ChangeuserName());


