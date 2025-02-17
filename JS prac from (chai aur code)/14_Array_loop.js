// in this we learn more loops which are mainly based on arrays


// for of loop
const arr = [1,2,3,3,4,5]
for (const i of arr) {
    console.log(i);
    
}


// for of loop on map
const map = new Map()
map.set('IN', 'India')                  // ('key', 'value')
map.set('UN', 'United Nation')
map.set('US', 'United State')
map.set('IN', 'India')                 // ignores it because of repeatation

for (const [key, value] of map) {     // to print key and value both
    console.log(key, ':-', value)
}



/* Note : 1. Can't operate object through for of loop
          2. if we apply for in loop on array it gives us the key as the index numbers of array, to print values we have to apply console.log on arr[key]
          3. Can't operate map through for in loop
          4. we can't pass return in for each because it doesn't return any value
*/


// for in loop on object

const sym = Symbol("key1")    // object symbol

const user = {
    name: "A",
    "full name": "Anbxh Bhxsih",
    age: 21,
    email: "abc@.com",
    loggedIn: false,
    [sym]: "key1"      // use symbol object in another object
}

for (const key in user) {
    console.log(key);          // print all keys of object otherthan symbol
    console.log(` ${key} has value: ${user[key]} `)     // to print keys with values
}



// for each loop on array
let hero = ["thor", "ironman", "spiderman"]
hero.forEach( function(i) {       // there is no requirement to give name to a function just give a parameter
    console.log(i)
})


// another method to apply for each loop
hero.forEach( (item) => {        // using arrow function no need to initialize function or name to a function
    console.log(item)
})


// this for each array can also give the item, index and array
hero.forEach( (item, index, arr) => {        // index and arr are predefined parameters in loop
    console.log(item, index ,arr)
})


// another way to apply for each loop an array which contains object in it
const code = [
    {
        language: "java",
        file_name: "java"
    },                         // , seperation req
    {
        language: "javaScript",
        file_name: "js"
    },
    {
        language: "Python",
        file_name: "py"
    }
]

code.forEach((item) => {
    console.log(item.language)
})
