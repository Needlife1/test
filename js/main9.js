// const user = {
//   tag: "Max",
//   showTag() {
//     console.log("user.teg =", this.tag);
//   },
// };

// user.showTag();

// ------------------------------------------------------
// const showTag = function () {
//   console.log("showTag -> this", this);
//   console.log("showTag -> this.tag", this.tag);
// };

// const user = {
//   tag: "Trololo",
// };

// user.showUserTag = showTag;
// console.log(user);
// user.showUserTag();
// ----------------------------------------------------

// const user = {
//   tag: "Trololo",

//   showTag() {
//     console.log("showTag -> this", this);
//     console.log("showTag -> this.tag", this.tag);
//   },
// };

// user.showTag();

// const outerShowTag = user.showTag;

// outerShowTag();

// ---------------------------------------------------

// const user = {
//   tag: "Trololo",

//   showTag() {
//     console.log("showTag -> this", this);
//     console.log("showTag -> this.tag", this.tag);
//   },
// };

// // user.showTag();

// const invokeAction = function (action) {
//   console.log(action);
//   action();
// };

// invokeAction(user.showTag);

// ------------------------------------------------------

// const user = {
//   tag: "Trololo",
// };

// const showTag = function () {
//   console.log("showTag -> this", this);
//   console.log("showTag -> this.tag", this.tag);
// };

// console.log(showTag.call(user));

// ----------------------------------------------------------

// const counter = {
//   value: 0,
//   increment(value) {
//     console.log("incriment this ->", this);
//     this.value += value;
//   },
//   decrement(value) {
//     console.log("decriment this ->", this);
//     this.value -= value;
//   },
// };

// const updeitCounter = function (value, oparation) {
//   oparation(value);
// };

// updeitCounter(10, counter.increment.bind(counter));
// updeitCounter(10, counter.decrement.bind(counter));

// console.log(counter);

// --------------COUNTER!!!!!!!!!!!!!!!!!!!!!---------------------------

// const counter = {
//   value: 0,

//   increment(value) {
//     console.log("incriment this ->", this);
//     this.value += 1;
//   },

//   decrement(value) {
//     console.log("decriment this ->", this);
//     this.value -= 1;
//   },
// };

// const decrementBtn = document.querySelector(".js-decrement");
// const incrementBtn = document.querySelector(".js-increment");
// const valueEl = document.querySelector(".js-values");

// incrementBtn.addEventListener("click", () => {
//   console.log("кликнули на Инкримент");
//   counter.increment();
//   console.log(counter);
//   valueEl.textContent = counter.value;
// });

// decrementBtn.addEventListener("click", () => {
//   console.log("кликнули на Декримент");
//   counter.decrement();
//   console.log(counter);
//   valueEl.textContent = counter.value;
// });
// ----------------------------------------------------------------------

// Example 1 - Мастерская драгоценностей
// Напишите метод calcTotalPrice(stoneName), который принимает название камня и рассчитывает
// и возвращает общую стоимость камней с таким именем, ценой и количеством из свойства stones.

// const chopShop = {
//   stones: [
//     { name: "Emerald", price: 1300, quantity: 4 },
//     { name: "Diamond", price: 2700, quantity: 3 },
//     { name: "Sapphire", price: 1400, quantity: 7 },
//     { name: "Ruby", price: 800, quantity: 2 },
//   ],

//   calcTotalPrice(stoneName) {
//     //   ----------------------Первый способ-----------------------------
//     // const { stones } = this;
//     // for (let i = 0; i < stones.length; i++) {
//     //   if (stones[i].name === stoneName) {
//     //     return stones[i].price * stones[i].quantity;
//     //   }
//     // }
//     //   ----------------------Второй способ-----------------------------
//     const carrentStoun = this.stones.find(({ name }) => name === stoneName);

//     return carrentStoun.price * carrentStoun.quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice("Emerald")); // 5200
// console.log(chopShop.calcTotalPrice("Diamond")); // 8100
// console.log(chopShop.calcTotalPrice("Sapphire")); // 9800
// console.log(chopShop.calcTotalPrice("Ruby")); // 1600

// --------------------------------------------------------------------------

// // Выполните рефакторинг методов объекта phonebook чтобы код заработал.

// const phonebook = {
//   contacts: [],

//   add(contact) {
//     const newContact = {
//       list: "default",
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };

//     this.contacts.push(newContact);
//     return this.contacts;
//   },

//   generateId() {
//     return "_" + Math.random().toString(36).substr(2, 9);
//   },

//   getDate() {
//     return Date.now();
//   },
// };

// console.log(
//   phonebook.add({
//     name: "Mango",
//     email: "mango@mail.com",
//     list: "friends",
//   })
// );

// console.log(
//   phonebook.add({
//     name: "Poly",
//     email: "poly@hotmail.com",
//   })
// );

// ------------------------------------------------------------------------------------

// Example 3 - Калькулятор
// Создайте объект calculator с тремя методами:

// read(a, b)- принимает два значения и сохраняет их как свойства объекта.
// add() - возвращает сумму сохранённых значений.
// mult() - перемножает сохранённые значения и возвращает результат.

// const calculator = {
//   a: 0,
//   b: 0,

//   read(a, b) {
//     (this.a = a), (this.b = b);
//   },

//   add() {
//     return this.a + this.b;
//   },

//   mult() {
//     return this.a * this.b;
//   },
// };

// calculator.read(5, 10);
// console.log(calculator.add());
// console.log(calculator.mult());

// ----------------------------------------------------------------------------------
