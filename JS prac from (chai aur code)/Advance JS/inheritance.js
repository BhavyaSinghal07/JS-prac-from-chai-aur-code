// about inheritance

class user {                                
    constructor(userName){
        this.userName = userName
    }

    logMe(){
        console.log(`username is ${this.userName}`)
    }
}

class teacher extends user {                                
    constructor(userName, email, password){  
        super(userName)        // to inherit the the upper class username
        this.email = email
        this.password = password
    }

    //add some aditionam method
    addCourse(){   
        console.log(`new course is added by ${this.userName}`);
    }
}

const data = new teacher("bhavya", "abc@user.com", "07")
console.log(data);   // gives the complete data as teacher class inherits the user class parameter

data.addCourse()     // noneed to console log because console log is in the addCourse method
data.logMe()

console.log(data === teacher)            // false because data is not equals to teacher
console.log(data instanceof teacher)     // true because data is instance of teacher
console.log(data instanceof user)        // true because data is instance of user also
// console.log(teacher instanceof data)     error because data is not class or function hence it is not callable