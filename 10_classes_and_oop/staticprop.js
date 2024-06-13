class User {
    constructor(username)
    {
        this.username = username
    }

    logMe()
    {
        console.log(`Username : ${this.username}`);

    }

    static createId()
    {
        return '123'
    }
}

const ayush = new User("ayush")
console.log(ayush.createId());
//static hai to access nahi milega use object ko jo us class ka instance leke banaya hai 

