const countDown = document.querySelector(".countdown");
const approach = document.querySelector(".approach__text");
const startBtn = document.querySelector(".start__btn");
const stopBtn = document.querySelector(".stop__btn");

let number = 60;
let timerId = null;
let approachValue = 0;

startBtn.onclick = function () {
  number = 60;
  approachValue++;
  clearInterval(timerId);

  timerId = setInterval(() => {
    number--;
    countDown.innerHTML = number;
    approach.innerHTML = (approachValue);
   
    if (number === 0) {
      clearInterval(timerId);
    }
  }, 1000);
};

stopBtn.onclick = function () {
  clearInterval(timerId);
  
  number = 60;
  countDown.innerHTML = number;
  
  approachValue = 0;
  approach.innerHTML = (approachValue);
};