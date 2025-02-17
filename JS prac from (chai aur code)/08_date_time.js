// in this we learn about date and time writing format in js

let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toJSON())


let createdDate = new Date(2025, 2, 13)
console.log(createdDate)
console.log(createdDate.toDateString())     // in js indexing of month start from 0 hence it show march


let time = Date.now()
console.log(time)
console.log(createdDate.getTime());
console.log(Math.floor(time/1000))