// in this we learn about control flow and loops


// control flow manages which line og code execute at that time
const age = 16
if (age > 18) {
    console.log("Can vote");
}
else{                                // execute after if condition become false
    console.log("can't vote");
}

// implicit scope
const bal = 30
if(bal > 20) console.log("yes");


// real life example
const loggedIn = true
const debit = true
if (loggedIn && debit) {       // both must be true for execution of if loop
    console.log("Allow")
}



// ****************************************Switch case

const month = 9
switch (month) {                // we are cheching for month that why we put munth in parameter
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("Jnne");
        break;
    case 7:
        console.log("July");
        break;

    default:
        console.log("Not found");
        break;
}


// nullish coalescing problem (??) : null undefined
let val
val = 5 ?? 10     // special cases
val = null ?? 10  // check the safety if for null it doesn't work then it return 10
val = null ?? undefined
val = undefined ?? 10
console.log(val);


// ternary operator  condition ? true : false
const price = 100
price >= 80 ? console.log("valid") : console.log("invalid")



/* Note : falsy value => false, 0, -0, BigInt, null, undefined, NaN 
          truthy value => other than falsy all were truthy value and also "0", `false`, " ", [], {}, function(){} is also truthy value even func can be empty
*/



// ********************************************************ITERATION : Loops


// for loop
for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element)
}


// for loop array example
let arr = ["flash", "bulb", "tube"]
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element)     // prints elements of array
}


// while loop
let i = 0;
while (i <= 10 ) {                  // condition
    console.log(`even num ${i}`);
    i += 2
}


// do while loop
let h = 1
do {
    console.log(h)
    h++
} while (h<=5);