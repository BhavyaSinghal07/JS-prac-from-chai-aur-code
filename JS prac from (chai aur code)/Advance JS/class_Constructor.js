// in this we study about the class and constructors


class user {                                 // initialize a class
    constructor(userName, email, password){  // initialize parameters in constructur
        this.userName = userName
        this.email = email
        this.password = password
    }

    // pass some methods to update and acess the parameters of constructor

    changeUserName(){                       // method calling within same class
        return `${this.userName.toUpperCase()}`
    }

    editMail(){
        return `${this.email}com`
    }

    encryptPass(){
        return `${this.password}`
    }
    
}

const data = new user("bhavya", "abc@user.", "07")
console.log(data);                  // gives complete data

console.log(data.changeUserName());       
console.log(data.editMail());       
console.log(data.encryptPass());    




// if we don't use class constructor method then how can we do the above task

function User(UserName, email, password){      // initialization of function
        this.UserName = UserName
        this.email = email
        this.password = password
}

// methods to update the parameters of function
    User.prototype.changeUserName = function() {
        return `${this.UserName.toUpperCase()}`
    }

    User.prototype.editMail = function() {
        return `${this.email}com`
    }

    User.prototype.encryptPass = function() {
        return `${this.password}`
    }

// calling the function
const data1 = new User("bhavya", "abc@User.", "07")
console.log(data1);                   // gives complete data

console.log(data.changeUserName());       
console.log(data.editMail());       
console.log(data.encryptPass());    

