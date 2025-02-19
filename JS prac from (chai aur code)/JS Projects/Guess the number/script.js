const r = console.log(parseInt(Math.random() * 100 + 1))

const s = document.querySelector('#sub')
const ui = document.querySelector('#guessField')
const gs = document.querySelector('.guesses')
const lr = document.querySelector('.lastResult')
const lh = document.querySelector('.lowOrHi')
const re = document.querySelector('.result')

const p = document.createElement('p')


let pg = []      // guesses store hote rahenge taaki repeatation na ho
let ng = 1       // count the number of guesses


let playGame = true

// check user is available to play game or not
if(playGame){
    s.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(ui.value)
        validateGuess(guess)                   // pass this value to the next function
    })
}


function validateGuess(guess) {               // validate guess that value is valid or not

    if(isNaN(guess)){
        alert('Please enter a valid number: ')
    }
    else if(guess < 1){
        alert('Please enter a valid number: ')
    }
    else if(guess > 100){
        alert('Please enter a valid number: ')
    }
    else{
        pg.push(guess)                 // if the num is valid then we push it to the previous guess array
        if(ng >= 10){                  // checking that is number of attempt is > 10 or not
            displayGuess(guess)
            displayMessage(`Game over, Random number was ${r}`)
            endGame
        }
        else{                          // if number of attempt is less than 10 the pass it to the checkGuess func
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}


function checkGuess(guess) {              // check guess

    if(guess === r){
        displayMessage(`You guessed it right!`)
    }
    else if(guess < 100){
        displayMessage(`Number is to low`)
    }
    else if(guess > 100){
        displayMessage(`Number is to high`)
    }
    
}


function displayGuess(guess) {              // cleans the guess
    ui.value = ' '                          // display guess ki value empty kr denge for the new guess
    gs.innerHTML += `${guess},  `            // jo bhi guesses honge uski val push krte rahenge
    ng++                                    // increement in number of guesses
    lr.innerHTML = `${11 - ng}`    // remainig guess = 11 - num of guess
}


function displayMessage(message) {
    lh.innerHTML = `<h2>${message}</h2>`    // return the guesses given by other functions
}


function endGame(){
    ui.value = ''
    ui.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame" > Start new Game </h2>`
    re.appendChild(p)
    pg = false
    ng()                        // start a new game because pg is false
}


// all the things which we apply to end the game can pull back to start the new game
function newGame(){

    const ngb = document.querySelector('#ng')       // new game button
    ngb.addEventListener('click', function(e){
        r = parseInt(Math.random() * 100 + 1)
        let pg = []                        // pg empty hojayga 
        let ng = 1                         // ng dobara count hone start hojaynge
        gs.innerHTML = ``                  // guesses empty hojaynge
        lr.innerHTML = `${11 - ng}`
        ui.removeAttribute('disabled')
        re.removeChild(p)

        pg = true

    })

}
