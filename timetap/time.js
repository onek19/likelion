const selectClock = document.querySelector('#selectClock')
const selectStopwatch = document.querySelector('#selectStopwatch')
const selectTimer = document.querySelector('#selectTimer')

const clock = document.querySelector('#clock')
const stopwatch = document.querySelector('#stopwatch')
const timer = document.querySelector('#timer')

selectClock.onclick = function() {
    clock.style.display = 'block';
    stopwatch.style.display = 'none';
    timer.style.display = 'none';
}

selectStopwatch.onclick = function() {
    clock.style.display = 'none';
    stopwatch.style.display = 'block';
    timer.style.display = 'none';
}

selectTimer.onclick = function() {
    clock.style.display = 'none';
    stopwatch.style.display = 'none';
    timer.style.display = 'block';
}



