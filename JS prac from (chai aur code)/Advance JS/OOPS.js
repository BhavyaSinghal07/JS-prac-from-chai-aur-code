// basically js doesn't have classes old version have classes, JS is proto-type based language whiles classes is only syntactic sugar over
// object is a collection of properties and methods like toLowerCase
// parts of oop: object literal, constructor function, prototype, classes, instances(new, this)
// 4 key words of oops: abstraction, encapsulation, polymorphism, inheritance


// object literal : contains properties like methods, functions
const user = {
    userName: "bhavya",
    loginCount: 8,
    signedIn: true,

    getUserDetail: function(){
        console.log(`username: ${this.userName}`)      // here we have to write this to give instruction to user to use userName from parent object
        console.log(this)                           // here we're not assigning any instruction to this hence it gives us complete data of object
    }
}
console.log(user)
console.log(user.getUserDetail());



// constructor
function User(username, loginCount, isLogged){
    this.username = username;         // this key word is use here to instruct that this is a variable and you have to store right side value to left
    this.loginCount = loginCount;
    this.isLogged = isLogged;

    return this
}
const u1 = User("bhavya", 12, true)
const u2 = User("java", 12, true)        // this updates the u1 data even we are not call it throught console.log, because we have not use new keyword 
const u3 = new User("js", 12, true)      // this doesn't updates the previous data because here we're using new keyword which is constructor
console.log(u1)        // this gives all the above data but with extra data
