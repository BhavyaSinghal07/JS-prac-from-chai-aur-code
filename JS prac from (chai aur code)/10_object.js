// in this we learn about objects 

// constructor form singleton
// Object.create()      constructor method


// object literals doesn't form singleton

// object literals

const sym = Symbol("key1")    // object symbol

const user = {
    name: "A",
    "full name": "Anbxh Bhxsih",
    age: 21,
    email: "abc@.com",
    loggedIn: false,
    [sym]: "key1"      // use symbol object in another object
}

console.log(user.email)         // give email directly 
console.log(user["email"])      // another method to print email, object consider keys as string
console.log(user["full name"])  // we can't access full name using .
console.log(user[sym])          // give symbol

user.email = "abc@gmail.com"
Object.freeze(user)      // no changes apply
user.email = "abc@gpt.com"
console.log(user.email)



// ******************************************************************PART 2


// other method to declare object

// we can also initialize with an empty object and then pass elements to it
const obj = {}
obj.id = 1234
obj.name = "abc"
obj.mail = "abd@.com"
console.log(obj)


// we can also paas object in object
const obj1 = {
    name : "abd",
    id : 123,
    fullName : {
        firstName : "a",
        lastName : "d"
    }
}
console.log(obj1.fullName.firstName)


// how to merge objects
const obj2 = { 1: "a", 2: "b" }
const obj3 = { 3: "c", 4: "d", 5: "e" }
const obj4 = Object.assign({}, obj2, obj3)     // {} is optional but it is good practice to use
console.log(obj4)


// merge object using spreading
const obj5 ={...obj2, ...obj3}
console.log(obj5)


// to access key and value of object and it store it in array
console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));    // make different array for different entries



// ***************************************************PART 3


// object de-structure

const course = {
    sub: "js",
    lang: "hindi",
    teacher: "hitesh"
}

const {teacher} = course     // {object se jo key leni h vo} = object_name
console.log(teacher)         // de-structure ki help se hume baar baar course.teacher nhi likhna padega sidhe teacher bhi likh skte h
                        // OR
const {teacher: name} = course     // { object se jo key leni h vo : changed name of key } = object_name
console.log(name)         // de-structure ki help se hum changed key name pass kr skte h

// NOTE: object de-structuring is most commonly use in react where we pass parameter in function in ({ }) to access key easily

