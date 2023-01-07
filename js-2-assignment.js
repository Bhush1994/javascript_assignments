function playbattleship() {

    const positionBattleship = [0, 1, 1, 0, 1]
    let guesscount = 0
    let hitcount = 0

    while (hitcount != 3) {

        //Accept the choice from user
        const choice = Number(prompt('Enter a number (1-5)'))

        //Alert if invalid number entered
        if (choice < 0 || choice > 5) {
            alert('Enter a valid number')
            continue
        }

        guesscount++   //increment the guess count by 1


        //choice if the value in array (at the pos) is 1
        if (positionBattleship[choice - 1] == 1) {
            alert("You have hit a battleship")
            hitcount++
            
            //positionBattleship[choice-1] = 0
            positionBattleship[choice - 1] = 2
        } else if (positionBattleship[choice - 1] == 2) {
            alert('You have already hit this battleship')
        } else {
            alert('You miss the battleship')
        }
    }
    alert('Total guesses:' + guesscount)
}

     // Toggle Function
function changeMessage() {

    //Reading and storing string in the text variable 
    let text = document.getElementById('a').innerHTML

    //Comparing String of Text variable and String of element with ID = a
    if (text == document.getElementById('a').innerText) {

        document.getElementById('a').innerHTML = "Friday it is !!!"
    }

    if (text == document.getElementById('a').innerText) {
        document.getElementById('a').innerHTML = "Welcome to JavaScript"
    }
}


// Calculator Functions
function add() {
    let a = document.getElementById('num1').value
    let b = document.getElementById('num2').value

    let result = Number(a) + Number(b)
    document.getElementById('res').innerHTML = result
}
function subtract() {
    let a = document.getElementById('num1').value
    let b = document.getElementById('num2').value

    let result = Number(a) - Number(b)
    document.getElementById('res').innerHTML = result
}
function multiply() {
    let a = document.getElementById('num1').value
    let b = document.getElementById('num2').value

    let result = Number(a) * Number(b)
    document.getElementById('res').innerHTML = result
}
