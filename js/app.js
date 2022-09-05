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
    winningNum = getRandomNum(min, max),
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

//Play Again Event listener
game.addEventListener('mousedown', (e) => {
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
});

//Btn Event listener
guessBtn.addEventListener('click', () => {
    let guess = parseInt(guessInput.value);

    //Validate
    if( isNaN(guess) || guess < min || guess > max ){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red', '20px')
    }

    //Check if player won
    if(guess === winningNum){
        gameOver(true, `You win the correct, the winning number is ${winningNum}`)
    }else{
        //Wrong Number
        guessesLeft -= 1;
        
        if(guessesLeft === 0){
            //Game over 
            gameOver(false, `You lose, the correct answer is  ${winningNum}`, 'black', '25px')
        }else{
            //Game Continues- aswer wrong
            setMessage(`${guess} is not correct, you have ${guessesLeft} guesses left`, 'black', '25px')
            body.style.background = 'white';
            //Clear input
            guessInput.value = '';
        }
    }
});


//Game Over
function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';
    
    //Disable input
    guessInput.disabled = true;
    //Change Background color when player wins
    body.style.background = color;
    setMessage(msg);

    //Play again
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

//Get Winning number
function getRandomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//Set Message
function setMessage(msg, color, font){
    message.style.color = color;
    message.style.fontSize = font;
    message.textContent = msg;
}

console.log(winningNum);