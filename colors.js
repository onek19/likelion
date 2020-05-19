function nightDayHandler(self) {
    var target = document.querySelector('body');
  if(self.value === 'night'){
    body.setbgcolor('black');
    body.setcolor('#01DF74');
    self.value = 'day';
    document.querySelector('.main-name').style.borderColor='#01DF74';
    document.querySelector('#profile').style.borderColor='#01DF74'; //hmmmmm
    document.querySelector('#info').style.borderColor='#01DF74';
    document.querySelector('.panel-footer').style.borderColor='#01DF74';
    document.querySelectorAll('.menubar').forEach((item) => {item.style.borderColor='#01DF74';});
    document.querySelectorAll('a').forEach((item) => {item.style.color='#01DF74'});
    document.querySelectorAll('.photo').forEach((item) => {item.style.borderColor='#01DF74'});

  } else {
    body.setbgcolor('#F8DAB0');
    body.setcolor('black');
    self.value = 'night';
    document.querySelector('.main-name').style.borderColor='black'
    document.querySelector('#profile').style.borderColor='black';
    document.querySelector('#info').style.borderColor='black';
    document.querySelector('.panel-footer').style.borderColor='black';
    document.querySelectorAll('.menubar').forEach((item) => {item.style.borderColor='black'});
    document.querySelectorAll('a').forEach((item) => {item.style.color='black'});
    }
  }

  var body= { //body 변수에 객체 담기
    setcolor : function(color) {
        document.querySelector('body').style.color = color;

    },
    setbgcolor : function(color) {
        document.querySelector('body').style.backgroundColor = color;
    }
} 

