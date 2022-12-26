const countDown = document.querySelector(".countdown");
const approach = document.querySelector(".approach");
const startBtn = document.querySelector(".start__btn");
const stopBtn = document.querySelector(".stop__btn");

let number = 60;
let timerId = null;
let approachValue = 0;

startBtn.onclick = function () {
  
  approachValue++;
  clearInterval(timerId);

  timerId = setInterval(() => {
    number--;
    approach.innerHTML = (`Подход: ${approachValue}`);
    countDown.innerHTML = number;
    if (number === 0) {
      clearInterval(timerId);
    }
  }, 1000);
};

stopBtn.onclick = function () {
  clearInterval(timerId);
  number = 60;
  approachValue = 0;
  countDown.innerHTML = number;
  approach.innerHTML = approachValue;
}