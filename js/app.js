/*
    Game Rules:
    -Player must guess a number between a min and max
    -Player gets a certain amount of guesses
    -Notify player of remaining guesses
    -Notify Player of the correct answer if loose
    -Let Player choose to play again
*/

//Game Values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;


//UI Elements
const game = document.querySelector('#game');
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');


      