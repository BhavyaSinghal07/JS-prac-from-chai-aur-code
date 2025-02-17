// In this we study about the string operations 

console.log("hello" + " Bhavya")    // concatenation
console.log(1 + 2)                  // addition because both are num
console.log("1" + 2)                // concatenation beacause one num and one string
console.log("1" + "2")              // concatenation beacause both are string
console.log(1 + "2")                // concatenation beacause one num and one string

// exceptions in java because of ecma documentation rules
// instead of these exceptions use parenthesis
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")

console.log(+true)         // also an exception
console.log(+"")
// console.log(true+)      throws error



/////*********************************************************************** 

// some other string operations

const name = "Bhavya"
const marks = 75
console.log(`hello my name is ${name}, I've got secured ${marks} marks`);  // new way to concatenate string
console.log(`hello my name is ${name.toUpperCase()}, I've got secured ${marks} marks`);  // we can also apply function in between

console.log(name.charAt(2))      // indexing start from 0
console.log(name.indexOf("a"))

const newStr = "bhjxhbbbhj"
const Str = newStr.slice(-8,4)    // can use negative index value
console.log(Str)

const Str1 = newStr.substring(0,4)
console.log(Str1)

const Str2 = newStr.substring(-8,4)    // avoid -ve index start from 0
console.log(Str2)

const Str3 = "    tuxavxja     "
console.log(Str3.trim())             // trim the extra space

const Str4 = "abcdefh"
console.log(Str4.replace('h', 'g'))  // replace('jise change krna h', 'jisse change krna h')
