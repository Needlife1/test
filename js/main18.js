// const promise = new Promise((resolve, reject) => {
//   const canFulfill = Math.random() > 0.5;

//   setTimeout(() => {
//     if (canFulfill) {
//       resolve("resolve");
//     }

//     reject("reject");
//   }, 2000);
// });

// promise.then(
//   (result) => {
//     console.log(result);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// ------------Цепочка промисов------------------

// promise
//   .then((result) => {
//     console.log(result);
//     return 5;
//   })
//   .then((x) => {
//     console.log(x);
//     throw new Error("Ошибка во 2 this !!");
//     return 10;
//   })
//   .then((y) => {
//     console.log(y);
//   })
//   .catch((error) => console.log(error))
//   .finally(() => console.log("Я выполняюсь в любом случае =)"));

// console.log(promise);

// -----------Промисификация функций --------------------------

// const makeOrder = (dish) => {
//   const DELAY = 1000;

//   return new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5;

//     setTimeout(() => {
//       if (passed) {
//         resolve("Вот ваше блюдо");
//       }
//       reject("Извените закончелись продукты");
//     }, DELAY);
//   });
// };

// makeOrder("Пирожок")
//   .then((x) => console.log(x))
//   .catch((xz) => console.log(xz))
//   .finally(() =>
//     console.log("В любом случае вы можете сесть шкурку с под ореха")
//   );

// ---------------Промисифицыровать промис--------------

// const makeOrder = (dish) => {
//   return Promise.resolve(`Вот вашь заказ, ${dish}`);
// };

// makeOrder("Пирожок")
//   .then((x) => console.log(x))
//   .catch((xz) => console.log(xz))
//   .finally(() =>
//     console.log("В любом случае вы можете сесть шкурку с под ореха")
//   );

// ----------------Покемоны с сервера-----------------------

// const fetchPocemonBiId = (id) => {
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((r) => r.json());
// };

// fetchPocemonBiId(1).then(onFetchSaccess).catch(onFetchError);

// function onFetchSaccess(pokemon) {
//   console.log("onFetchSaccess ===>>");
//   console.log(pokemon);
// }

// function onFetchError(error) {
//   console.log("onFetchError ===>>");
//   console.log(error);
// }

// ----------Эподром на промисах (МАСИВ ПРОМИСОВ)---------------------------

// const horses = ["Вика", "Ника", "Максим", "Люда", "Шляпа"];

// let caunter = 0;

// const refs = {
//   startBtn: document.querySelector(".js-rice-btn"),
//   weenerFilde: document.querySelector(".js-viner"),
//   progresFilde: document.querySelector(".js-progress"),
//   tabletBody: document.querySelector(".js-progres-tab"),
// };

// refs.startBtn.addEventListener("click", onStart);

// function onStart() {
//   caunter += 1;
//   const promises = horses.map(run);

//   updateWeenerFilde("");

//   updateProgresFilde("Заезд начялся!!!!!!");

//   detemrineWinner(promises);

//   waitForAll(promises);
// }

// function detemrineWinner(horsesP) {
//   Promise.race(horsesP).then(({ horse, time }) => {
//     updateWeenerFilde(`Первой пришла ${horse} за ${time}`);
//     updateTabletBody({ horse, time, caunter });
//   });
// }

// function waitForAll(horsesP) {
//   Promise.all(horsesP).then(() => {
//     updateProgresFilde("Заезд окончин, принимаються ставки!!!!!");
//   });
// }

// function updateWeenerFilde(message) {
//   refs.weenerFilde.textContent = message;
// }

// function updateProgresFilde(message) {
//   refs.progresFilde.textContent = message;
// }

// function updateTabletBody({ horse, time, caunter }) {
//   const tr = ` <tr>
//       <td>${caunter}</td>
//       <td>${horse}</td>
//       <td>${time}</td>
//     </tr>`;
//   refs.tabletBody.insertAdjacentHTML("beforeend", tr);
// }

// function run(horse) {
//   return new Promise((resolve, reject) => {
//     const time = getRandomTime(2000, 3500);

//     setTimeout(() => {
//       resolve({ horse, time });
//     }, time);
//   });
// }

// function getRandomTime(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// ---------------------------------------------------------------------------
// // Одинаковые записи (1 вариант)
// let promisData = undefined;

// new Promise((resolve, reject) => {
//   resolve(5);
// }).then((data) => {
//   console.log(data);
// });

// // (2 варинт)
// Promise.resolve(5).then((data) => {
//   console.log(data);
//   promisData = data;
// });

// // Будет undefined так как это синхронная операция и будет исполнена перед then.
// console.log(promisData);

// ----------------------------------------------------

// const sleep = (ms) =>
//   new Promise((res) => {
//     setTimeout(res, ms);
//   });

// Promise.all([sleep(2000), sleep(4000), sleep(6000)]).then(() =>
//   console.log("All promises")
// );
