const GAME_TIME = 3;
let score = 0;
let time = GAME_TIME;
let isPlaying = false;
let timeInterval;
let words = [];
let checkInterval;
const wordinput = document.querySelector(".word-input");
const wordDisplay = document.querySelector(".word-display");
const scoreDisplay = document.querySelector(".score");
const timeDisplay = document.querySelector('.time');
const button = document.querySelector('.button');

init();

function init(){
    getWords();
    wordinput.addEventListener('input',checkMatch);
}

function checkStatus(){
    if(isPlaying && time === 0){
        buttonChange("게임종료...");
        clearInterval(checkInterval)
    }
}

function getWords(){
    words = ['Hello','Banana','Apple'];
    buttonChange('게임시작');
}



function checkMatch(){
    if(wordinput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()){
        wordinput.value = "";
        if(!isPlaying){
            return
        }
        score++;
        scoreDisplay.innerText = score;
    }
}


function run(){
    isPlaying = true;
    time = GAME_TIME;
    timeInterval = setInterval(countDown,1000);
    checkInterval = setInterval(checkStatus, 50);
}


function countDown(){
    time > 0 ? time-- : isPlaying = false;
    if(!isPlaying){
        clearInterval(timeInterval);
    }
    timeDisplay.innerText = time;
}

function buttonChange(text){
    button.innerText = text;
    text === '게임시작' ? button.classList.remove('loading') : button.classList.add('loading');
}