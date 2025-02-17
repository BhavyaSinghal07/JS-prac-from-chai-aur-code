// In this we try to learn how to create variables and take data from user through variables

const accountId = 12345    // "const" is constant keyword which can not be change able
let accountEmail = "bhavya@google.com"    // "let" keyword avoids the scope* problem 
var accountPassword = "1239"      // "var" keyword is unable to avoid scope* problem
accountCity = "Noida"     // js is more safe language as we can avoid keyword directly store value, but it is not preferable
let accountState;     // js can als provide undefined for not defined values


//  accountId = 2     this provide me error because we can't change the value of const
console.log(accountId);

// all these values can change because they are var, let or not defined variable
accountEmail = "bhav.com"
accountPassword = "890"
accountCity = "Gaz."
console.table([accountEmail, accountPassword, accountCity])   // it provide all the data in table structure and there is no need to repeat console.log for each variable
console.log(accountState)


/* Note: 1. Scope problem is "{}" problem as the user changes var value it change other var values automatically which is solve by let keyword
         2. JS is a dinamically typed lang because data type will automatically assigned at the time of compilation or code execution
*/


// ***************************************************************** SCOPE

// scope problem concept

if(true){
    let a = 10;
    const b = 20;
    var c = 30
}

//  console.log(a)        doen't work out of scope because let is based only on local scope
//  console.log(b)        similar as let, const also work in local scope
console.log(c)       // gives output because var works on global scope which also a demerit of var


// another example of scope and let
let d = 10
if(true){
    let e = 10;
    console.log("inner scope: " + e)
}
console.log(d)


// nested scope

if (true){
    let username = "bhavya"

    {
        let occu = " study"
        console.log(username + occu);       
    }
    // console.log(occu)    doesn't work because out of scope
}
// console.log(username)    doesn't work because out of scope


// another ex of nested scope

function user (){
    let name = "bhavya"

    function site () {
        let web = " YouTube"
        console.log(name)     // it works because it wants to print name which is in the parent func of user
    }

    // console.log(web)    doesn't work because out of scope
    site()       // it prints the name because in site func we call to print name
}

// console.log(name)    doesn't work because out of scope
user() // it doesn't print because no print command in this func
