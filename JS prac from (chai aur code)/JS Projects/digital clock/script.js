const c = document.getElementById('clock')     // we can also use .querySelector

//  let date = new Date()
//  console.log(date.toLocaleTimeString())          this gives us the updated time in console whenever we updates the time hence we don't use it

setInterval(function(){
    let date = new Date()
    //  console.log(date.toLocaleTimeString())      this updates the time self on each second but in the console but we didn't want it hence we ignore it

    // we want time change on our web screen hence we use
    c.innerHTML = date.toLocaleTimeString()

}, 1000)