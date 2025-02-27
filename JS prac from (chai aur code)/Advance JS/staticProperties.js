class user {                                
    constructor(userName){
        this.userName = userName
    }

    logMe(){
        console.log(`username is ${this.userName}`)
    }

    static createId(){       // some times we didn't want to give access to all bhavya const to access this method hence we let it as static which makes it inaccessible
        return `123`
    }
}

const bhavya = new user("bhavya")
// console.log(bhavya.createId());     because we make createId as static hence it is inaccessible and through error
