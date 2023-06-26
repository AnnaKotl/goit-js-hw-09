const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let intervalId = null;

startBtn.addEventListener('click', () => {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  intervalId = setInterval(onBtnChangeColor, 1000);
});

stopBtn.addEventListener('click', () => {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  clearInterval(intervalId);
});

function onBtnChangeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

// 2 variant
// const startBtn = document.querySelector('[data-start]');
// const stopBtn = document.querySelector('[data-stop]');
// const buttons = document.querySelectorAll('[data-start], [data-stop]');
// const colorBody = document.querySelector('body');

// startBtn.addEventListener('click', onBtnChangeColor);

// function onBtnChangeColor() {
//     timerId = setInterval(() => {
//         colorBody.style.backgroundColor = getRandomHexColor();
//     }, 1000);
// };

// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// };

// startBtn.addEventListener('click', () => {
//   startBtn.disabled = true;
//   stopBtn.disabled = false;
// });

// stopBtn.addEventListener('click', () => {
//   startBtn.disabled = false;
//     stopBtn.disabled = true;
//     clearInterval(timerId); 
// });