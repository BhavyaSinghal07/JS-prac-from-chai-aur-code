// about the example maths pi value in js
/* basically in this ex we study that why we can't change the value of maths PI as:
   console.log(Math.PI)         gives 3.14159....
   Math.PI = 5
   console.log(Math.PI)         also gives 3.14159.... doesn't override
*/


// getOwnPropertyDescriptor gives the description on the property of objects
const d = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(d);     // gives the property of PI that it can't be change able 



// we can also make our own object examples which can't be override
const user = {
    name: "A",
    age: 21,
    email: "abc@.com",

    order: function(){
        console.log("to check for of loop iterate it or not")     // to check for of loop iterate it or not
    }
}
console.log(Object.getOwnPropertyDescriptor(user, "name"));   // this method doesn't give the property of user as user is object and we can only get access to find description of property of object

// change the property of object so that no one can change the value of object
Object.defineProperty(user, 'name',{
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(user, "name"));    // to check that writable and enumerable is updated or not

// another method to iterate the object
for (let [key, value] of Object.entries(user)) {     // use Object.entries to iterate the key value of user object

    if(typeof value !== 'function'){           // avoid the function scope in the object
        console.log(`${key} : ${value}`);      // this doesn't give name because we have change the property of name
    }
}

