const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');
const time = document.querySelector('.time');

let go = false;
const date = new Date();

play.addEventListener('click', () => {
    console.log('play')
    let dateTime = date.getTime();
    time.innerText = dateTime;
});