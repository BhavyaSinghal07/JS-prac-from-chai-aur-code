// array are of two types continious, holey
// array optimization is of three types: SMI(small integer), packed element, double(float, sting, function)


// packed smi elements
const arr = [1, 2, 3, 4, 5, 6, 7]

// packed double elements
arr.push(8.0)

// packed elements
arr.push('9')

// holey elements
arr[14] = 41      // because the size of upper array is 9 and we push element on 14 hence it creates holes in between

console.log(arr)
console.log(arr.length)
console.log(arr[11])


/* how the array gives arr[11]- undefined, it checks for some steps as holes are present : 
   bound check , 
   hasOwnProperty(arr, 11), 
   hasOwnProperty(arr.prototype, 11),
   hasOwnProperty(Object.prototype, 11), 
*/

/* Optimization sequence:
   SMI > DOUBLE > PACKED
   Holey_SMI > Holey_DOUBLE > Holey_PACKED
*/


// holey SMI elements
const arr1 = new Array(3)     // it gives 3 holes
arr1[0] = '7'      // now it become holey packed elemnts