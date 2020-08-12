/*Тут я сделала без класса, но значение получаю из поля ввода */
const refs = {
  datetime: document.querySelector("#datetime"),
  days: document.querySelector(".value[data-value='days']"),
  hours: document.querySelector(".value[data-value='hours']"),
  mins: document.querySelector(".value[data-value='mins']"),
  secs: document.querySelector(".value[data-value='secs']"),
  btn: document.querySelector("#remove"),
};

const timer = {
  intervalId: null,
  isActive: false,

  start(finishDate) {
    if (this.isActive) {
      this.stop();
      this.start(finishDate);
      return;
    } else {
      this.isActive = true;
      this.intervalId = setInterval(() => {
        const currentTime = Date.now();
        const deltaTime = finishDate - currentTime;
        updateTimerItems(deltaTime);
      }, 1000);
    }
  },

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    this.intervalId = null;
  },
};

const timerStart = timer.start.bind(timer);

const pad = function (value) {
  return String(value).padStart(2, "0");
};

const updateTimerItems = function (time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  refs.days.innerHTML = days;
  refs.hours.innerHTML = hours;
  refs.mins.innerHTML = mins;
  refs.secs.innerHTML = secs;
};

const setTimerOnChange = (evt) => {
  const finishDate = Date.parse(evt.target.value);
  if (finishDate <= Date.now()) {
    return;
  } else if (!isNaN(finishDate)) {
    timerStart(finishDate);
  }
};

const timerClean = () => {
  timer.stop.bind(timer)();
  updateTimerItems(0);
  refs.datetime.value = "";
};

refs.datetime.addEventListener("change", setTimerOnChange);
refs.btn.addEventListener("click", timerClean);
