// In this we learn how to convert one datatype to another

let score = "37"  // string becausw it is in ""
console.log(typeof score)

let valueInInteger = Number(score)   // it converts score string in Number
console.log(typeof(valueInInteger))


/* Note: Conversion outcomes of any datatype to number:
   "33" => 33
   "33abc" => NaN
   true => 1, false => 0
   null => 0
   undefined => NaN
*/


// conversion of num to boolean
let num = 5
let bool = Boolean(num)
console.log(typeof(bool))
console.log(bool)

/* Note: Conversion outcomes of any datatype to boolean:
   "", 0 => false
   otherthan for each value or string it give true
*/


// conversion of num to string
let no = 4
let str = String(no)
console.log(typeof(str))
console.log(str)

// Note: conversion to string change it to string but give output as it's original value