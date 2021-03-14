// html tags and assets
const playBtn = document.getElementById("play-btn");
const colorBtns = [...document.getElementsByClassName('btn')];
const sounds = [
  new Audio('https://cdn.glitch.com/57386c19-ee81-4982-8eee-70b135e87830%2Fbasic_tone.wav?v=1615761353294'), 
  new Audio('https://cdn.glitch.com/57386c19-ee81-4982-8eee-70b135e87830%2Fsine.wav?v=1615761357891'), 
  new Audio('https://cdn.glitch.com/57386c19-ee81-4982-8eee-70b135e87830%2Fslider.wav?v=1615761364710'), 
  new Audio('https://cdn.glitch.com/57386c19-ee81-4982-8eee-70b135e87830%2Fstopping_tone.wav?v=1615761365035') 
];
const timer = document.getElementById('timer');
// const values
const TIME_TO_GUESS = 30;
const MAX_MISTAKES = 3;
const MAX_ROUNDS = 10
// vars
let timeLeft = TIME_TO_GUESS;
let timeInterval = null;
let playing = false;
let pattern = [];
let round = 1;
let currentColorIndex = 0;
let selectedColor = '';
let soundInterval = null;
let cluePlayTime = 2000;
let mistakes = 0;

// calls startGame() and changes text in btn
playBtn.addEventListener('click', () => {
    if(!playing) {
        playing = true;
        startGame();
        playBtn.innerText = "Stop";
    } else {
        clearInterval(timeInterval);
        playing = false;
        playBtn.innerText = "Start";
    }
});

// gives each btn the ability to play a sound is pressed and what to do if playing
colorBtns.map((button) => {
    button.addEventListener('mousedown', () => {
        // on mousedown play sound and darken color
        soundInterval = setInterval(() => sounds[colorBtns.indexOf(button)].play(), 100);
        button.id === 'yellow' ? button.style.backgroundColor = 'rgb(200,200,0)' : button.style.backgroundColor = `dark${button.id}`;
        
        if(playing) {
            selectedColor = button.id;
            // if player clicked the right color
            if(pattern[currentColorIndex] === selectedColor) {
                currentColorIndex++;
                // if player got all in a round correct move on to the next
                if(currentColorIndex === round) {
                    if(round === MAX_ROUNDS) {
                        clearInterval(timeInterval);
                        alert('Congrats you got the whole pattern!');
                        playBtn.click(); // to end game
                    } else {
                        // increases pace of clues
                        timeLeft = TIME_TO_GUESS;
                        cluePlayTime -= 100;
                        currentColorIndex = 0;
                        round++;
                        setTimeout(() => pressPattern(), 1500);
                    }
                }
            } else {
                mistakes++;
                if(mistakes >= MAX_MISTAKES) {
                    clearInterval(timeInterval);
                    alert('Game over! You lost.');
                    playBtn.click(); // to stop game
                } else {
                    alert('You made a mistake on color ' + (currentColorIndex+1) + ". Try again! Mistakes: " + (mistakes));
                }
            }
        }
    });
    // on mouseup clear sound interval and turn color to normal
    button.addEventListener('mouseup', () => {
        clearInterval(soundInterval);
        button.style.backgroundColor = button.id;
    });
})

function startGame() {
    timeLeft = TIME_TO_GUESS;
    cluePlayTime = 2000;
    pattern = [];
    for(let i = 0; i < MAX_ROUNDS; i++) {
        pattern.push(colorBtns[Math.floor(Math.random() * 4)].id);
    }
    round = 1;
    currentColorIndex = 0;
    mistakes = 0;
    pressPattern();
    timeInterval = setInterval(() => {
        timeLeft -= 1;
        timer.innerText = timeLeft < 10 ? "00:0" + timeLeft : "00:" + timeLeft;
        if(timeLeft === 0 && playing) {
            clearInterval(timeInterval);
            alert('Ran out of time!');
            playBtn.click();
        }
    }, 1000);
}

function pressPattern() {
    for(let i = 0; i < round; i++) {
        let currentColorBtn = document.getElementById(pattern[i]);
        // queues all sounds to play with a gap in between as timeouts
        setTimeout(() => {
            // doesn't play queued sounds if game is ended
            if(playing) {
                let play = setInterval(() => sounds[colorBtns.indexOf(currentColorBtn)].play(), 100);
                pattern[i] === 'yellow' ? currentColorBtn.style.backgroundColor = 'rgb(200,200,0)' : currentColorBtn.style.backgroundColor = `dark${pattern[i]}`;
                // stops playing sound after a bit
                setTimeout(() => {
                    clearInterval(play);
                    currentColorBtn.style.backgroundColor = pattern[i];
                }, cluePlayTime);
            }
        }, i*(cluePlayTime+500));
    }
}