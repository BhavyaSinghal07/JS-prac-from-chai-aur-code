// function is also an object as array and string is also object

function multilyBy5(num){
    return num * 5
}
multilyBy5.power = 2
console.log(multilyBy5(5));
console.log(multilyBy5.power);
console.log(multilyBy5.prototype);     // shows that function is also an object



// new ex to understand prototype
function User(username, score){
    this.username = username;         
    this.score = score;


}
User.prototype.increment = function(){    // increment is the function name
    this.score++
}
User.prototype.printMe = function(){    // printMe is the function name
    console.log(`score is ${this.score}`)
}

const a = new User("a", 25)   // new keyword is must otherwise it doesn't give output
const b = new User("b", 35)

a.printMe()



// main concept of prototype
let hero = [ "A", "B"]        // it is an array hence only this gets the acess of heyBhavya function
let power = {
    A: "acting",
    B: "boxing",

    getBPower: function(){
        console.log(`B's  power is ${this.B}`)
    }
}

Object.prototype.bhavya = function(){      // it adds bhavya in object through which we call the function and get the access og bhavya function also
    console.log(`bhavya is present`)
}
Array.prototype.heyBhavya = function(){      // it adds bhavya in array
    console.log(`bhavya is absent`)
}

power.bhavya()    // calling the bhavya function
hero.bhavya()

// power.heyBhavya()       it doesn't get access of heyBhavya function because we assign this function only in Array
hero.heyBhavya()



// Inheritance
const teacher = {
    makeVideo: true
}
const teachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: teachingSupport          // accessing of inheritance property
}
teacher.__proto__ = TASupport       // other way to inherrit property that teacher can inherit properties of TASupport

// modern syntax of inheritance
Object.setPrototypeOf(teachingSupport, teacher)



// another example of inheritance
let user = "bhavya     "
String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`${this.name}`)
    console.log(`True length is: ${this.trim().length}`)
}
user.trueLength()