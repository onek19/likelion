let clockfunction = function() {
    let date = new Date(); 
    //new Date() : 요일, 월, 일, 연도, 시간 추출
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    
    if(hour<10) hour = '0'+hour;
    if(minute<10) minute = '0'+minute;
    if(second<10) second = '0'+second;
    
    let timenow = hour +" : "+ minute +" : "+ second;
    console.log(timenow)
    
    let timeshown = document.querySelector('#clock h1');
    timeshown.textContent = timenow;
}

setInterval(clockfunction, 1000);