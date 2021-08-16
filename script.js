'use strict';

//Variables Declaration
let SecretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreCounter = 20;
let highScore = 0;

//Functions
//DisplayMessage
const DisplayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

//DisplayNumber
const DisplayNumber = function (number) {
    document.querySelector('.number').textContent = number;
}

//To Set Secret Number At The Place of ?

//Event Listner For Check Button
document.querySelector('.check').addEventListener('click', function () {
    //Guess Number
    const guess = Number(document.querySelector('.guess').value);

    //If Number Is Entered Or Not
    if (!guess) {
        DisplayMessage('No Value!');
    }

    //If Correct Answer
    else if (guess === SecretNumber) {
        DisplayMessage('Hurray! Winner');

        //Changing The Style For Winner

        //Change Background Color
        document.querySelector('body').style.backgroundColor = '#60b347';

        //Increase The Width of The Text
        document.querySelector('.number').style.width = '30rem';

        //Show The Actual Score To The WInner
        DisplayNumber(SecretNumber);

        //Set HighScore
        if (scoreCounter > highScore) {
            highScore = scoreCounter;
            document.querySelector('.highscore').textContent = highScore;
        }

    }

    else if (guess != SecretNumber) {

        //Ternary Operator
        DisplayMessage(guess > SecretNumber ? 'Too High Number' : 'Too Low Number');

        //For Counter
        if (scoreCounter > 1) {
            scoreCounter--;
            document.querySelector('.score').textContent = scoreCounter;
        } else {
            DisplayMessage('You Lost The Game');
            document.querySelector('.score').textContent = 0;

        }
    }

})

//Event Listner For Again Button
document.querySelector('.again').addEventListener('click', function () {

    // Set The Score to Default
    scoreCounter = 20;

    //Change The Secret Number
    SecretNumber = Math.trunc(Math.random() * 20) + 1;

    //Change The Score To default
    document.querySelector('.score').textContent = scoreCounter;

    //Guess Number To Empty String
    document.querySelector('.guess').value = ' ';

    //Change The Message To Default :Start guessing...
    DisplayMessage('Start guessing...');

    //Set THe ? back to his Place
    DisplayNumber('?');

    //Change The Style To Default
    //Width
    document.querySelector('.number').style.width = '15rem';
    //Background
    document.querySelector('body').style.backgroundColor = '#222';



})
