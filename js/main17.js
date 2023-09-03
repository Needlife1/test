// const logMassage = () => {
//   console.log("Вызов через 3 сек");
// };

// const { functionsIn } = require("lodash");

// const { date } = require("joi");

// const { remove } = require("lodash");

// console.log("До вызова Settimaut");

// setTimeout(() => {
//   console.log("В нутри колбека setTimeout");
// }, 2000);

// console.log("После вызова setTimeout");

// ----------------------ОПОВЕШЕНИЯ------------------------------

// const notification = document.querySelector(".js-alert");

// const NOTIFICATION_DELAY = 3000;
// let timeoutId = null;

// notification.addEventListener("click", onNotificationClick);

// showNotification();

// function onNotificationClick(e) {
//   hideNotification();
//   clearInterval(timeoutId);
// }

// function showNotification() {
//   notification.classList.remove("not-visible");
//   timeoutId = setTimeout(() => {
//     hideNotification();
//   }, NOTIFICATION_DELAY);
// }

// function hideNotification() {
//   notification.classList.add("not-visible");
// }

// ---------------------НАДОЕДАЛКА------------------------------

// const PROMPT_DELAY = 1000;
// const MAX_PROMPT_ATTEMPTS = 3;

// let promptCounter = 0;
// let hasSubscribed = false;

// const intervalId = setInterval(() => {
//   console.log("Подпешись на рассылку.");
//   promptCounter += 1;

//   if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
//     console.log("Остановить интервал.");
//     clearInterval(intervalId);
//   }
// }, PROMPT_DELAY);

// -----------------------DATA----------------------------------------

// const date1 = new Date().getTime();
// console.log("date1", date1);

// const date2 = Date.now();
// setTimeout(() => {
//   const date2 = Date.now();
//   console.log("date1", date1);
//   console.log("date2", date2);

//   console.log(date2 - date1);
// }, 3000);

// ------------------------Таймер----------------------------------

// const startBtn = document.querySelector(".start-btn");
// const stopBtn = document.querySelector(".stop-btn");
// const clockFace = document.querySelector(".clock-face");

// class Timer {
//   constructor({ onTick }) {
//     this.isActive = false;
//     this.intervalId = null;
//     this.onTick = onTick;
//   }

//   start() {
//     if (this.isActive) return;

//     const startTime = Date.now();
//     this.isActive = true;

//     this.intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       const time = this.getTimeComponents(deltaTime);

//       this.onTick(time);
//     }, 1000);
//   }

//   stop() {
//     clearInterval(this.intervalId);
//     this.isActive = false;
//     const time = this.getTimeComponents(0);
//     this.onTick(time);
//   }

//   pad(value) {
//     return String(value).padStart(2, "0");
//   }

//   getTimeComponents(time) {
//     const hours = this.pad(
//       Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//     );
//     const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
//     return { hours, mins, secs };
//   }
// }

// const timer = new Timer({
//   onTick: updeteClockFace,
// });

// startBtn.addEventListener("click", timer.start.bind(timer));
// stopBtn.addEventListener("click", timer.stop.bind(timer));

// function updeteClockFace({ hours, mins, secs }) {
//   clockFace.textContent = `${hours}:${mins}:${secs}`;
// }

// --------------Таймер обратного отшета до НГ----------------------

// const stopBtn = document.querySelector(".stop-btn");
// const startBtn = document.querySelector(".start-btn");
// const clockFace = document.querySelector(".clock-face");

// stopBtn.addEventListener("click", stopTimer);
// startBtn.addEventListener("click", startTimer);

// const countDownDate = new Date(`Jan 1, ${new Date().getFullYear() + 1}`);

// countDownDateTuNY();

// let timeInterval = setInterval(countDownDateTuNY, 1000);

// function countDownDateTuNY() {
//   const now = Date.now();
//   const diff = countDownDate - now;

//   const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
//   const minutes = Math.floor((diff / (1000 * 60)) % 60);
//   const seconds = Math.floor((diff / 1000) % 60);

//   clockFace.textContent = `${days} d. ${addZero(hours)} h. ${addZero(
//     minutes
//   )} m. ${seconds} s.`;
// }

// function startTimer() {
//   stopBtn.disabled = false;
//   startBtn.disabled = true;
//   timeInterval = setInterval(countDownDateTuNY, 1000);
//   alert("THe timer works!");
// }

// function stopTimer() {
//   stopBtn.disabled = true;
//   startBtn.disabled = false;
//   clearInterval(timeInterval);
//   alert("The timer has been stopped!");
// }

// function addZero(number) {
//   return String(number).padStart(2, 0);
// }
