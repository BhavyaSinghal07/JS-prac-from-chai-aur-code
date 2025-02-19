const form = document.querySelector('form')

// const h = parseInt(document.querySelector('#height').value)   we didn't write this code here because this gives us empty usecase value


form.addEventListener('submit', function (e) {
    e.preventDefault()            // it prevents from any default submit

    const h = parseInt(document.querySelector('#height').value)     // height id pr querySelector apply karenge and then traverse value it gives string value then apply parseInt to convert it in integer
    const w = parseInt(document.querySelector('#weight').value)
    const r = document.querySelector('#result')

    if(h === ' ' || h < 0 || isNaN(h)){                            // if h is invalid then it shows the result as written in innerHTML with the value of h
        r.innerHTML = `Please enter a valid height ${h}`;
    }

    else if(w === ' ' || w < 0 || isNaN(w)){                      // if w is invalid then it shows the result as written in innerHTML with the value of w
        r.innerHTML = `Please enter a valid weight ${w}`;
    }

    // if everything is working correct the apply formula
    else{
        r.innerHTML  = (w / ((h*h) / 10000)).toFixed(2)             // bmi formula                   
    }

})