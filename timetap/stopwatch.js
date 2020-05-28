const start = document.querySelector('#start');
const reset = document.querySelector('#reset');
let timeElapsed = 0;

let stoppwatchFunction = function() {
    timeElapsed++; 
    let minute = Math.floor(timeElapsed / 60);
    let second = timeElapsed % 60;

    if(minute<10) minute = '0'+minute;
    if(second<10) second = '0'+second;
    let timenow = minute +" : "+ second;
    
    let timeshown = document.querySelector('#stopwatch h1');
    timeshown.textContent = timenow;
}

let a;
start.onclick = function() {
    let curstate = document.querySelector('#start').textContent;
    if (curstate === 'start') {
        document.querySelector('#start').textContent = 'stop';
        a = setInterval(stoppwatchFunction, 1000); 
    } else {
        document.querySelector('#start').textContent = 'start';
        clearInterval(a);
    }
}

reset.onclick = function() {
    timeElapsed = 0;
    let timeshown = document.querySelector('#stopwatch h1');
    timeshown.textContent = "00 : 00"
}