// in this we learn about array

let arr = [1,2,3,4,5]
console.log(arr[3])    // give 3rd index value where indexing start from 0

// array methods
arr.push(6)     // push 6 at last
arr.push(7)
arr.pop()       // pop the last value not require to provide any particular value in method
arr.unshift(8)  // add 8 at start of array on 0th index
arr.shift()     // pop the 1st value of array at 0th index
console.log(arr)

console.log(arr.includes(9))    // output in boolean
console.log(arr.indexOf(9))     // element nhi h isliye index -1

const newArr = arr.join()     // converts the array into string
console.log(newArr)


//***************************** imp concept
console.log("A", arr)

const arr1 = arr.slice(1,3)
console.log(arr1)        // doesn't include 3rd index element
console.log("B", arr)    // after that also give complete array 

const arr2 = arr.splice(1,3)
console.log(arr2)        // include 3rd index element
console.log("C", arr)    // splice out the particular indexed array from orignal



//****************************************************ARRAY PART 2

let hero = ["thor", "ironman", "spiderman"]
let actor = ["Sid", "shahid", "vickey"]

hero.push(actor)       // push the complete array in the hero array and changes the whole hero array originally
console.log(hero)
console.log(hero[3][1])   // gives the 1st element of 3rd elemented array

let movie = ["a", "b", "c"]    // need to take anothe array because hero array changes completely
acting = movie.concat(actor)   // requires a new array storage for concatention
console.log(acting)            // concatenate array as an individual element

// concatenating spreading method
const all = [...movie, ...actor]
console.log(all)


const another = [1,2,3, [4,5,6], 7, [8,9], 10]
const real = another.flat(Infinity)       // concatenate the array as different array in single elements
console.log(real)


// some other methodes
console.log(Array.isArray("Bhavya"))
console.log(Array.from("bhavya"))
console.log(Array.of("bhavya"))
console.log(Array.from({name: "bhavya"}))   

let s1 = 100
let s2 = 200
let s3 = 300
console.log(Array.of(s1, s2, s3))
