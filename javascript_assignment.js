function user() {
    let name = prompt('Enter Username')
    console.log(name)
}

// Function for checking No. Wheather it is odd or even
function checkOddEven() {
    let num = prompt('Enter A Number')

    if (num % 2 === 0) {
        console.log(num, "is a even number")
    }
    else if (num % 2 == 1) {
        console.log(num, "is a odd number")
    }
    else {
        console.log("Input Invalid!")
    }
}

// function for finding Number is prime number
function PrimeNumber() {
    let num = prompt("Enter Number to Check prime number")
    let i, isOdd = true;

    if (num == 1) {
        console.log("1 is not a prime number")
    }
    else if (num >= 2) {
        // loop for checking No.
        for (i = 2; i <= num / 2; i++) {
            if (num % i == 0) {
                isOdd = false
                break
            }
        }
        // printing result for prime No. 
        if (isOdd) {
            console.log(num, "is a prime number")
        } else {
            console.log(num, "is not a prime number")
        }
    }
    // if input is other than number 
    else {
        console.log("Error! Input Invalid")
    }
}

// function for calculating maths table for a number
function mathsTable() {
    let i;
    let num = prompt("Enter the Number For printing it's Maths table")
    for (i = 1; i <= 10; i++) {
        console.log(num, '*', i, '=', num * i)
    }
}