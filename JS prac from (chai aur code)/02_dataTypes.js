// in this we're going to learn about data types

"use strict";   // used to treat all js code as newer version but now there is no requirement to use it software automatically compare it with new version

// alert(3+3)   we're using node js not browser so no requirement to use it, otherwise it provide error

let name = "njsd"  // use "" because the value is string
let age = 18
let check = true
let state = null   // empty not undefined

/* data types:
   Number =>  2 ti pow 53
   bigint
   String => ""
   Boolean => true/false
   null =>  standard value
   undefined
   symbol =>  unique
   object 
*/

/* Primitive Datatype: String, Number, Boolean, null, undefined, Symbol, BIgInt
   Reference (Non Primitive): Array, Objects, Functions
*/


// Array, object and function
const hero = ["Avengers", "naagraj", "22"];

let obj = {
   name: "Avenger",
   age: 22,
}

const funct = function(){
   console.log("hello")
}
console.log(typeof funct)    // function


console.log(typeof age)   // provide the data type of age variable
console.log(typeof null)   // object because it is a standard datatype


/* Note: MDN, ECMA provides the document which contains the standard syntax of js
         here Number contains all the datatypes as int, float double e.t.c.
*/



// **************************************************** MAP
// Map is an special type data type which also work as object
// map is unique for key value i.e. if any value is repeated then it ignores it and also gives output in sequence

const map = new Map()
map.set('IN', 'India')                  // ('key', 'value')
map.set('UN', 'United Nation')
map.set('US', 'United State')
map.set('IN', 'India')                 // ignores it because of repeatation
console.log(map)