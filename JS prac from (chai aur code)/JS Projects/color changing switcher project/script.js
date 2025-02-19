const button = document.querySelectorAll('.button')      // select all the buttons
//  console.log(button)           to print and check the button are correctly selected or not

const body = document.querySelector('body')          // select the body of which we want to change the colour
//  console.log(body)             to print and check the body is correctly selected or not

const h1 = document.querySelector('h1')          // select the h1 heading of which we want to change the colour
//  console.log(h1)               to print and check the h1 is correctly selected or not


// apply for each function to apply the event of switching colour
button.forEach(function(button){
    // console.log(button)

    // apply event listening techniques
    button.addEventListener('click', function(e){        // event listner add kiya h click jo click detect krte hi kuch function perform karega
        console.log(e);
        console.log(e.target);            // kis pr vo event perform hua h ye vo batayga

        if(e.target.id === 'grey'){                     //hm color id compare karenge 
            body.style.backgroundColor = e.target.id    // it changes the colour to grey because we compare to the grey colour, even there can be another colour in block
        }

        if(e.target.id === 'green'){
            body.style.backgroundColor = "rgb(57, 231, 57)"     // agr particular colour change krna h toh " " m uss colour ka code likh skte h
        }

        if(e.target.id === 'brown'){
            body.style.backgroundColor = e.target.id      // if id matches then it changes the same color as written in that id
            h1.style.color = "yellow"                     // to change the colour of heading on targeting particular button
        }

        if(e.target.id === 'pink'){
            body.style.backgroundColor = e.target.id
        }

    })
})

/*Note: 1. box m initially vhi colour hoga jo hmne css m likha h for their particular id, unless id name kuch bhi ho 
        2. for ex: 1st button ka id name grey h pr uski css m puple h toh box ka colour puple h
        3. for each condition i have write comment for particular case
        4. brown block pr click krke h1 yellow hojaygi aur vhi rhegi unless refresh aur we can apply more condtition to change colour
*/