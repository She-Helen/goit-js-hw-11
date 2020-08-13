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
//     this.objTime = {};
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
//         this.updateViewTime();
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
//     this.objTime.days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//     this.objTime.hours = this.pad(
//       Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//     );
//     this.objTime.mins = this.pad(
//       Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
//     );
//     this.objTime.secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
//   }

//   updateViewTime() {
//     refs.days.innerHTML = this.objTime.days;
//     refs.hours.innerHTML = this.objTime.hours;
//     refs.mins.innerHTML = this.objTime.mins;
//     refs.secs.innerHTML = this.objTime.secs;
//   }
// }

// let newTimer = new CountdownTimer({
//   selector: "#timer-1",
//   targetDate: new Date("Aug 28, 2020"),
// });

// console.log(newTimer);

// newTimer.start();
