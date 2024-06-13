class User{
    constructor(username)
    {
        this.username  = username
    }

    logMe()
    {
        console.log(`USERNAME is${this.username}`)
    }
}

class Teacher extends User{
    constructor(username , email, password)
    {
        super(username)//user wale class se username leke aega
        this.email = email
        this.password = password
    }

    addCourse()
    {
        console.log(`A new Course was added by ${this.username}`)
    }
}

const chai = new Teacher("chai" ,"chai@gmail.com", "123")
chai.addCourse();

const masalaChai = new User("masalChai")

// masalaChai.addCourse();
// //nahi hoga access isko addCourse ka 

console.log(chai === Teacher) //false
console.log(chai instanceof Teacher); //true
console.log(chai instanceof User);//true kyu ki User bhi inheritance he hai teacher ka or Teacher se bana he chai




