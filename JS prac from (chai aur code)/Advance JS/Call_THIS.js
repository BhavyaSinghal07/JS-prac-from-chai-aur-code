// in this we study about call and this 


function setUser(userName){
    this.userName = userName
}

function createUser(userName, email, RegNo){
    // setUser(userName)        // we try to call this to get userName from above function but this doesn't work, the above function only calls but give the userName which we want to get
  
    setUser.call(this, userName)    // hence we have to use call method to call and also get the userName in this finction which calls with this method

    this.email = email
    this.RegNo = RegNo
}

const data = new createUser("bhavya", "abc@.com", '07')
console.log(data)