//  document.getElementById('nature2').onclick = function(){         it provide less applications to applicable hence we use another method as eventlistner instead of this
//      alert("nature2 image clicked")
//  }


// event listnermethod
document.getElementById('nature2').addEventListener('click', function(){
    alert("nature2 image clicked")
}, false)            // false is the third parameter which is default parameter if we don't apply otherwise can provide a particular parameter



// study the need of 3rd parameter or about event propogation
document.getElementById('images').addEventListener('click', function(){     
    console.log("clicked inside the ul")      // if we click anywhere on any web page then it is obvious that we click on the image id of ul
}, false)


document.getElementById('nature').addEventListener('click', function(e){
    console.log("Mushroom clicked")           // if we click on the mushroom image then it works first then it gives that above image id also clicked
    // e.stopPropagation()          on using this it stops the back propagation
}, false)

/* 
    Note: because we use false as the third parameter hence there is mushroom clicked work first then ul clicked, if i use true as 3rd parameter then it    give output in seq that ul clicked work first then mushrom clicked work next
*/



// TASK: apply a function that on clicking on an image it wil disappears the images

document.querySelector('#images').addEventListener('click', function(e){
    console.log(e)                 
    console.log(e.target)              // which is targeted 
    console.log(e.target.parentNode)   // parent of target
    console.log(e.target.tagName)      // this gives output as img or text


    // this directly remove method can creates an error as if we click on text list it also delete the images hence we apply some if else conditions
    if(e.target.tagName === 'IMG'){
        let r = e.target.parentNode
        r.remove()
    }
})



