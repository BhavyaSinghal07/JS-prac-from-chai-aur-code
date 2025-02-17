// in this we learn about functions and parameters

// parameters while defining the function
// arguments while invoke or call the function 
// in function there is no need to initialize let or const only initialize it with function and give name to function and pass parameter

function add(num1, num2){      // (parameters) in parenthesis
    console.log(num1 + num2)   // yaha console value print krra h na ki return isliye hm iss result ko kisi var m store nhi kr skte
}
add (3, 4)       // (arguments) in parenthesis while calling it
add (3, "4")     // automatically detect that it is a string
add (3, "a")


// to return the value as we store the result in other var
function add1(num3, num4){
    return num3 + num4      // it returns the result
}
const result = add1 (3, 4) 
console.log(result)



// *******************************************************PART 2

// condition of shoping cart where you don't know how many parameter will come in function
// for this use rest or spread method for multiple unknown parameters

function addCart(...n1){
    return n1
}
console.log(addCart(200, 300, 400))


// to pass object in function

const obj = {
    name : "sam",
    price : 300
}

function Cart(anyObj){
    console.log(` Username is ${anyObj.name} and price is ${anyObj.price} `)    // jo hamare paas function m parameter h uske through call karenge obj ke elements
}
Cart(obj)   // yaha hm object name pass karenge 


// to pass array in function

const arr = [100, 200, 300]
    
function Cart1(anyArr){
    return anyArr[1]
}
console.log(Cart1(arr));   // yaha hm array name pass karenge
