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
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message'),
      body = document.querySelector('#body');


//Assign

minNum.textContent  = min;
maxNum.textContent = max;


//Btn Event listener
guessBtn.addEventListener('click', () => {
    let guess = parseInt(guessInput.value);

    //Validate
    if( isNaN(guess) || guess < min || guess > max ){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red', '20px')
    }

    //Check if player won
    if(guess === winningNum){
       //Disable input
       guessInput.disabled = true;
       //Change Background color when player wins
       body.style.background = 'green';
       setMessage(`You win the correct number is ${winningNum}`, 'black', '25px')
    }else{

    }
});

//Set Message

function setMessage(msg, color, font){
    message.style.color = color;
    message.style.fontSize = font;
    message.textContent = msg;
}
