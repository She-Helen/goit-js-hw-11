/* Тут я переписала методы таймера в класс и сделала конструктор */

// const refs = {
//   datetime: document.querySelector("#datetime"),
//   days: document.querySelector(".value[data-value='days']"),
//   hours: document.querySelector(".value[data-value='hours']"),
//   mins: document.querySelector(".value[data-value='mins']"),
//   secs: document.querySelector(".value[data-value='secs']"),
//   btn: document.querySelector("#remove"),
// };

// class CountdownTimer {
//   constructor({ selector, targetDate }) {
//     this.selector = selector;
//     this.targetDate = targetDate;
//     this.intervalId = null;
//     this.isActive = false;
//   }

//   start() {
//     if (this.isActive) {
//       this.stop();
//       this.start(this.targetDate);
//       return;
//     } else {
//       this.isActive = true;
//       this.intervalId = setInterval(() => {
//         const currentTime = Date.now();
//         const deltaTime = this.targetDate - currentTime;
//         this.updateTimerItems(deltaTime);
//       }, 1000);
//     }
//   }

//   stop() {
//     clearInterval(this.intervalId);
//     this.isActive = false;
//     this.intervalId = null;
//   }

//   pad(value) {
//     return String(value).padStart(2, "0");
//   }

//   updateTimerItems(time) {
//     const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//     const hours = this.pad(
//       Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//     );
//     const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

//     refs.days.innerHTML = days;
//     refs.hours.innerHTML = hours;
//     refs.mins.innerHTML = mins;
//     refs.secs.innerHTML = secs;
//   }
// }

// let newTimer = new CountdownTimer({
//   selector: "#timer-1",
//   targetDate: new Date("Aug 28, 2020"),
// });

// console.log(newTimer);

// newTimer.start();
