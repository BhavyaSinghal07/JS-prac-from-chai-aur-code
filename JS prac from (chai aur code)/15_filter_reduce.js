// in this we study about filter and reduce


// filter
const arr = [1,2,3,4,5,6]
const val = arr.filter((num) => {
    return num >=4                 // must require to write return because we initialize num out of scope
})
console.log(val)


// implicit manner to apply a filter
const arr1 = [1,2,3,4,5,6]
const val1 = arr.filter((num) => num >=4 )     // same line m condition h isliye return keyword ki requirement nhi h
console.log(val1)


// if we use for each loop in place of filter
const n = []                             // empty array for store the result of for each loop
arr.forEach((num) => {
    if(num >= 4){
        n.push(num)                  // push the value to the resultant n array
    }
})
console.log(n)


// **********************************************chaining: apply two or more operators connectively in seq

// chaining
// const n1 = arr.map((num) => num = num*10). map((num) => num = num+1).filter((num) => num = num > 40)        implicit manner to apply chaining


// simple manner to apply cahining 
const n1 = arr
           .map((num) => num = num*10)        // initially this map aply and then it pass the value to tha next map
           . map((num) => num = num+1)        // it works on value given by previous function
           .filter((num) => num = num > 40)   // after all his function it passes the value to the n1 storage
console.log(n1)


// ************************************************* reduce

const n2 = arr.reduce(function (accu, currVal) {      // accu: accumulator, currVal: current value are the parameters
    console.log(`accu ${accu} currVal ${currVal}`);   // to check values of these parameters at each step
    return accu + currVal      // returns the sum of accu and currVal
}, 0)                         // initialize the reduce function through 0, initially accumulator stores 0 
console.log(n2)

/* working of reduce func: it works on two values as accumulator starts with one val then apply function on current value and proceed */


// reduce function using arrow function
const n3 = arr.reduce( (acc, cur) => acc+cur, 0 )      // no requirement to write function
console.log(n3)