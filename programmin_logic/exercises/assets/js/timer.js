const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');
const time = document.querySelector('.time');

let seconds = 0;
let timer;

function createSeconds(seconds) {
    date = new Date(seconds * 1000);
    return date.toLocaleTimeString('pt-BR', {hour12: false, timeZone: 'UTC'});
}

function clockInit() {
    timer = setInterval(function() {
        seconds++;
        time.innerText = createSeconds(seconds);
    }, 1000);
}

play.addEventListener('click', function(event){
    clearInterval(timer);
    time.style.color = 'black';
    clockInit();
});

pause.addEventListener('click', () => {
    clearInterval(timer);
    time.style.color = 'red';
});

reset.addEventListener('click', () => {
    clearInterval(timer);
    seconds = 0;
    time.innerText = createSeconds(seconds);
    time.style.color = 'black';
})
