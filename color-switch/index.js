/* Задание 1 */
const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  thumb: document.querySelector(".thumb"),
  start: document.querySelector("button[data-action='start']"),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let setBgColor;

const startChangeBgColor = () => {
  refs.start.disabled = true;
  setBgColor = setInterval(() => {
    document.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, 5)];
  }, 1000);
};

const stopChangeBgColor = () => {
  clearInterval(setBgColor);
  refs.start.disabled = false;
};

const changeBgColor = (event) => {
  if (event.target.dataset.action === "start") {
    startChangeBgColor();
  } else if (event.target.dataset.action === "stop") {
    stopChangeBgColor();
  }
};

refs.thumb.addEventListener("click", changeBgColor);
