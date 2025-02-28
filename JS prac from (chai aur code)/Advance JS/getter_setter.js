// use of getter and setter

// class get set
class user {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    // we can give the different value to the user so that the data privacy will maintained 
    get password(){            // here we must have to use the same name as the property name
        return `${this._password}bh@vy@`     // change the variable password and update the value
    }
    set password(value){
        this._password = value
    }

}

const bhavya = new user("abc@.com", "097")
console.log(bhavya.password);

/* Note: now the password is always 097 but if anyone want to se it, it will shown as updated password */



// another method to use get and set function
// function get set
function User (email, password){
        this._email = email           // this ke saath vo var jo hm get ke saath lenge and right of = vo jo hmne initialize kiya h
        this.password = password
        
    Object.defineProperty(this, 'email',{
        get: function(){                             // here we must have to use the same name as the property name
            return this._email.toUpperCase()     // change the variable email and update the value
        },
        set: function(value){
            this._email = value
        }
    })
}

const data = new User("abc@.com", "097")
console.log(data.email);



// object get set
const user1 = {
    _name: "bhavya",
    email: "abc@.com",

    get name(){             // doesn't matters that we use _name or name hence it is complex to use
        return this._name.toUpperCase()
    },
    set name(value){
        this._name = value
    }
}

const data1 = Object.create(user1)
console.log(data1.name);

