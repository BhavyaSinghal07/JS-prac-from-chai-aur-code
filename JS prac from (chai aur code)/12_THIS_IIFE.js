// in THIS we learn about THIS function and arrow function and IIFE

// this keyword is used for current scope keys, ex:

const user = {
    name: "bhavya",
    id : "345",

    welcome: function(){
        console.log(`${this.name} is user` )    // this only use for current scope as name is in parent's object
    }
}
user.welcome()

user.name = "sam"    // changes the name 
user.welcome()       // work for another changed name

// this keyword is note use in array
/* Note: For website console, console.log(this) gives window as output because majorly window is use on website but for compiler it give {}
   when we call it in function it gives many different values
 */


// this in function
function one(){
    console.log(this);

    let no = 123
    console.log(this.no);   // gives undefined for itbecause doesn't work as
}
one()
console.log(this)    // this outside function


// Another way to define function
const one2 = function() {
    console.log(this);

    let no2 = 123
    console.log(this.no2);   // gives undefined for itbecause doesn't work as
}
one2()



//********************************************************************** Arrow function
const one1 = () => {
    console.log(this);       // for this it give {}

    let no1 = 123
    console.log(this.no1);   // gives undefined for itbecause doesn't work as
}
one1()


// implicit return in arrow function
const num = (n1, n2) => { return n1 + n2 }     // we have to write return because we use {}, can ignore return if we use ()
console.log(num(3, 4))
                                // OR
const num1 = (n1, n2) => (n1 + n2)     
console.log(num1(3, 4));


/* Note: because after that I'm writing iife so i heve to apply ; after console.log statement for working of iife
*/


// *********************************************************************Immediately Invoked Function Expressions(IIFE)

// to remove the pollution of global scope we use IIFE, it immediately execute the function

// named iife
(function nop() {
    console.log("IIFE example")
})();     // there must need to end iife function with ; and this last () works as an argument


// Arrow function for iife example
( ()=>  {
    console.log("IIFE example 2")
})();     // there must need to end iife function with ;


// another ex
( (name) => {
    console.log(`IIFE example 3 ${name} `)
})("bhavya");     // there must need to end iife function with ;