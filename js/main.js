const countDown = document.querySelector(".countdown");
const startBtn = document.querySelector(".start__btn");
const stopBtn = document.querySelector(".stop__btn");

let number = 60;
let timerId = null;

startBtn.onclick = function () {
  clearInterval(timerId);
  timerId = setInterval(() => {
    number--;
    countDown.innerHTML = number;
    if (number === 0) {
      clearInterval(timerId);
    }
  }, 1000);
};

stopBtn.onclick = function () {
  clearInterval(timerId);
  number = 60;
  countDown.innerHTML = number;
}