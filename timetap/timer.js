const start = document.querySelector('#start');
const reset = document.querySelector('#reset');
let minTimer = document.querySelector('#minTimer');
let secTimer = document.querySelector('#secTimer');

let min = minTimer.value * 60;
let sec = secTimer.value * 1;
let timeCount = min+sec; // total seconds

let timerFunction = function() {
    timeCount--;

    let minute = Math.floor(timeCount / 60);
    let second = timeCount % 60;

    if(minute < 10) minute = '0' + minute;
    if(second < 10) second = '0' + second;
    let timenow = minute +" : "+ second;
    
    let timeshown = document.querySelector('#timer h1');
    timeshown.textContent = timenow;

}

let a;
start.onclick = function() {
    let curstate = document.querySelector('#start').textContent;
    if (curstate === 'start') {
        document.querySelector('#start').textContent = 'stop';
        a = setInterval(timerFunction, 1000); 
    } else {
        document.querySelector('#start').textContent = 'start';
        clearInterval(a);
    }
}

reset.onclick = function() {
    timeCount = 0;
    let timeshown = document.querySelector('#timer h1');
    timeshown.textContent = "00 : 00"
}