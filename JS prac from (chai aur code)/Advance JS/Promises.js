// the promise object represents the eventual completion or failure of an asynchronous operation and its resulting value
// it has three states: pending, fullfill, rejected

// if promise provide us http error or 404 then it is not reject error it is response outcome


// creation of promise
const p1 = new Promise(function(resolve, reject){
    // now we can do an async task, DB call, cryptography, network

    setTimeout(function(){
        console.log('Async task is complete')
        resolve()    // it connects this function to the p1.then function
    }, 1000)
})

p1.then(function(){            // it returns the data given by above function
    console.log("Promise")
})

// OR , we can create a promise as 

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2 is complete')
        resolve()
    }, 1000)
}).then(function(){            // it returns the data given by above function
    console.log("Promise1")
})



// new promise
const p2 = new Promise(function(resolve, reject){

    setTimeout(function(){
        resolve({        // we can pass the parameters to the resolve
            userName: "Bhavya Singhal",
            email: "abc@.com"
        })
    }, 1000)
})

p2.then(function(user){
    console.log(user)
})



// new promise to use reject parameter
const p3 = new Promise(function(resolve, reject){

    setTimeout(function(){
        let error = false

        if (!error) {
            resolve({        
                userName: "Bhavya Singhal",
                email: "abc@.com"
            })
        }
        else{
            reject('ERROR')
        }

    }, 1000)
})

p3.then((user) => {           // another method to call the function using arrow function
    console.log(user)
    return user.userName      // return userName from user
}).then((userName) => {       // we have to use chaining to access userName
    console.log(userName)
}).catch(function(error){     // use catch function to avoid error
    console.log(error)
}).finally(() => {            // use finally function which always executes even the error throw as to make sure that duration of promise is ended
    console.log("error is either resolved or avoided")
})



// async await : it waits for some time to for the execution of program if after that error is create then it provide error
const p4 = new Promise(function(resolve, reject){

    setTimeout(function(){
        let error = true

        if (!error) {
            resolve({        
                userName: "Bhavya",
                email: "abc@.com"
            })
        }
        else{
            reject('ERROR in js')
        }

    }, 1000)
})

async function P4() {
    try {
        const response = await p4
        console.log(response)
    } catch (error) {                  // we have to use try catch block to catch above frunctions thrown error
        console.log(error)
    }
}
P4()



// API use in async function
async function getUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        // console.log(response)               // this also can give the data but not formated hence we have to use .json() function
        const data = await response.json()     // we've to use await function because it also takes time and otherwise await it doesn't give data in required time
        console.log(data)
    } catch (error) {
        console.log("E")
    }
}
getUser()

// OR : we can access this api also avoiding try catch block

fetch('https://jsonplaceholder.typicode.com/users')
.then((res) => {
    return res.json()
})
.then((d) => {        // it gives the data that is fetch by above .then function
    console.log(d)
})
.catch((error) => console.log(error))
