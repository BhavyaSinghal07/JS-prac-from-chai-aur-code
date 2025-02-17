// in this we study about mnumber system and use of maths in js

// numbers

const num = 100
console.log(num.toFixed(2))    // after decimal fixed to only 2 digit

const num1 = 456.8765
console.log(num1.toPrecision(3))   // overall 3 digit and estimated

const num2 = 10000000
console.log(num2.toLocaleString('en-IN'))    // convert into the indian standard number


//*************************************************** */

// Maths

console.log(Math)      // it is an object itself for js
console.log(Math.abs(-4))
console.log(Math.round(9.6))
console.log(Math.ceil(4.5))
console.log(Math.floor(4.2))

console.log(Math.random())       // it gives a random valuebetween 0 to 1
console.log(Math.random()*10 +1)    // gives value greater then 1, apply + 1 because random can be zero
console.log((Math.random()*10) +1)
console.log(Math.floor(Math.random()*10) + 1)      // gives random floor value

// to get random between a particular range min max
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
