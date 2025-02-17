// In this we learn about comparisons that how to compare values

console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)

/* Note: this happens because == works differently because it checks the equality while >,<,>=,<= converts the null to 0 then comare it */

// strict check done by === it checks datatype also while comparing
console.log("2" === 2)   // because it compares datatype also