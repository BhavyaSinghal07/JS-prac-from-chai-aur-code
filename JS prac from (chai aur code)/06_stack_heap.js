// MEMORY: Stack, Heap

/* Stack: agr hm kisi value ka reference lenge toh vo to vo copy krke usse alg se store kr dega aur phir agr hm usse change kre toh original change nhi hogi 
   Heap:  ism age hm reference lenge toh vo use ek hi heap m store krta h jisse hm agr value change kre toh original bhi change hojati h 
*/


// stack memory example
const id = "abc@.com"

let mailId = id         // 1st ka data reference
mailId = "def@.com"     // change

console.log(id)
console.log(mailId)


// heap memory example
let user1 = {
   id1 : "ghi@.com",
   upi : "@sbi",
}

let user2 = user1        // 1st ka data reference liya h
user2.id1 = "jkl@.com"   // change

console.log(user1.id1)
console.log(user2.id1)
