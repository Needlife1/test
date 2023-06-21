// ------------------Функция обратного вызова-------------------

// const fnA = function (massage, callback) {
//   console.log(massage);

//   console.log(callback);

//   callback(100);
// };

// const fnB = function (number) {
//   console.log(`Это лог при вызове fnB !!!!!!!!!!`, number);
// };

// fnA("wfwfwe", fnB);

// -------------------------------------------------------------

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);

//   console.log(result);
// };

// const add = function (x, y) {
//   return x + y;
// };

// const sub = function (x, y) {
//   return x - y;
// };

// doMath(2, 3, add);
// doMath(10, 3, sub);
// ------------------------Литерал функции-------------------

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);

//   console.log(result);
// };

// doMath(2, 3, function (x, y) {
//   return x + y;
// });
// doMath(10, 3, function (x, y) {
//   return x - y;
// });

// ------------------------РЕГЕСТРАЦИЯ СОБЫТИЙ-----------------------------------

// const button = document.querySelector(".btn");

// const handleButtonClik = function () {
//   console.log("Клик по кнопке");
// };

// button.addEventListener("click", handleButtonClik);

// console.dir(button);
// ---------------------------------------------------------

// const onGatPositionSuccess = function (position) {
//   console.log("Это мое место положение");
//   console.log(position);
// };

// const onGatPositionErroer = function (error) {
//   console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(
//   onGatPositionSuccess,
//   onGatPositionErroer
// );
// -------------------------------------------------------

// const callback = function () {
//   console.log("Через 3 сек в нутри колбека в таймауте");
// };

// console.log("В конце перед таймаутом");

// setTimeout(callback, 2000);

// console.log("В коде после таймаута");

// -----------------Фильтер для масива-------------------------------

// const filter = function (arr, test) {
//   const filteredArr = [];

//   for (const el of arr) {
//     const passed = test(el);

//     if (passed) {
//       filteredArr.push(el);
//     }
//   }
//   return filteredArr;
// };

// const callBack1 = function (value) {
//   return value >= 3;
// };

// console.log(filter([1, 2, 3, 4, 5], callBack1));

// // литерал функции + анонимная функция
// console.log(
//   filter([1, 2, 3, 4, 5, 6, 7, 8, 9], function (value) {
//     return value <= 3;
//   })
// );
// // фильтер для фруктов------------
// const fruts = [
//   { name: "apple", quantity: 250, iFresh: true },
//   { name: "grapse", quantity: 150, iFresh: true },
//   { name: "bananse", quantity: 100, iFresh: true },
// ];

// const filterFruts = function (frut) {
//   return frut.quantity >= 150;
// };

// console.log(filter(fruts, filterFruts));

// -------------Замыкание------------------------------

// const fnA = function (parameter) {
//   const innerVaribl = "Значение внутринейпеременной вункции fnA";

//   const innerFunction = function () {
//     console.log(parameter);
//     console.log(innerVaribl);
//     console.log("Это вызов innerFunction");
//   };
//   return innerFunction;
// };

// const fnB = fnA(555);

// fnB();

// console.log(fnB);

// ---------------------------------------------------------

// const makeSheff = function (name) {
//   const massage = "Hello";
//   const makeDish = function (dish) {
//     console.log(massage);
//     console.log(`${name} готовит ${dish}`);
//   };

//   return makeDish;
// };

// const mango = makeSheff("Mango");
// console.dir(mango);

// mango("Котлетка");
// mango("кофе");

// const polly = makeSheff("Polly");

// console.dir(polly);

// polly("Пирожок");
// polly("Рыба");

// --------------------------------------------------------

// const myLibFactory = function () {
//   let value = 0;

//   const add = function (num) {
//     value += num;
//   };

//   return {
//     add,
//     getValue() {
//       return value;
//     },
//   };
// };

// const myLib = myLibFactory();

// console.log(myLib);

// myLib.add(10);

// console.log(myLib.getValue());

// ---------СИНТАКСИС СТРЕЛОЧНЫХ ФУНКЦИЙ------------------------

// const add = (a, b, c) => {
//   console.log(a, b, c);

//   return a + b + c;
// };
// // -------------способ 2--------------------

// const add2 = (a, b, c) => a + b + c;

// console.log(add(5, 10, 15));

// console.log(add2(5, 10, 15));

// ------------------------Стрелочная функция в обекте----------------------------------------

// const user = {
//   fullName: "Mango",
//   showName() {
//     console.log("this:", this);
//     console.log("this fullName:", this.fullName);

//     const inner = () => {
//       console.log("this is inner:", this);
//     };

//     inner();
//   },
// };

// user.showName();

// ------------------------------------------------------------

// const objA = {
//   x: 5,
//   showX() {
//     console.log(this.x);

//     const objB = {
//       y: 10,
//       showThis() {
//         console.log("showThis objB:", this.y);
//       },
//     };
//     objB.showThis();
//   },
// };

// objA.showX();
// -------------------------------------------------------------

// Example 1 - Коллбек функции
// Напишите следующие функции:

// createProduct(obj, callback) - принимает объект товара без id, а также колбек.
// Функция создаёт обьект товара, добавляя ему уникальный идентификатор в свойство id и вызывает колбек передавая ему созданный обьект.
// logProduct(product) - коллбек принимающий обьект продукта и логирующий его в консоль
// logTotalPrice(product) - коллбек принимающий обьект продукта и логирующий общую стоимость товара в консоль

// // Решение
// function createProduct(partialProduct, callback) {
//   const product = { id: Date.now(), ...partialProduct };

//   callback(product);
// }

// const logProduct = (product) => console.log(product);

// const logTotalPrice = (product) =>
//   console.log(product.price * product.quantity);

// createProduct({ name: "🍎", price: 30, quantity: 3 }, logProduct);
// createProduct({ name: "🍋", price: 20, quantity: 5 }, logTotalPrice);
// -----------------------------------------------------------------------

// Example 2 - Коллбек функции
// Добавьте объекту account методы withdraw(amount, onSuccess, onError) и deposit(amount, onSuccess, onError),
//     где первый параметр это сумма операции, а второй и третий - колбеки.

// Метод withdraw вызывает onError если amount больше TRANSACTION_LIMIT или this.balance, и onSuccess в противном случае.

// Метод deposit вызывает onError если amount больше TRANSACTION_LIMIT или меньше либо равен нулю, и onSuccess в противном случае.

// Решение
// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: "Jacob",
//   balance: 400,

//   withdraw(amount, onSuccess, onError) {
//     amount > TRANSACTION_LIMIT || amount > this.balance
//       ? onError("Транзакция не прошла !!!")
//       : onSuccess("Все готово !");
//   },

//   deposit(amount, onSuccess, onError) {
//     amount > TRANSACTION_LIMIT || amount <= 0
//       ? onError("Транзакция не прошла !!!")
//       : onSuccess("Все готово !");
//   },
// };

// function handleSuccess(message) {
//   console.log(`✅ Success! ${message}`);
// }
// function handleError(message) {
//   console.log(`❌ Error! ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

// -------------------------------------------------------------------------

// Example 3 - Коллбек функции
// Напишите функцию each(array, callback), которая первым параметром ожидает массив,
//     а вторым - функцию, которая применится к каждому элементу массива.Функция each должна вернуть новый массив,
//         элементами которого будут результаты вызова коллбека.

// Решение
// const each = (array, callback) => array.map(callback);

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   })
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   })
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   })
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   })
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   })
// );

// -------------------------------------------------------------------------------

// Example 4 - Стрелочные функции
// Выполните рефакторинг кода используя стрелочные функции.

// const createProduct = (partialProduct, callback) => {
//   const product = { id: Date.now(), ...partialProduct };
//   callback(product);
// };

// createProduct({ name: "🍎", price: 30, quantity: 3 }, (product) =>
//   console.log(product)
// );

// createProduct({ name: "🍋", price: 20, quantity: 5 }, (product) =>
//   console.log(product.price * product.quantity)
// );

// --------------------------------------------------------------------

// Example 5 - Стрелочные функции
// Выполните рефакторинг кода используя стрелочные функции.

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount > this.balance) {
//       onError(`Amount can't exceed account balance of ${this.balance} credits`);
//     } else {
//       this.balance -= amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount <= 0) {
//       onError(`Amount must be more than 0 credits`);
//     } else {
//       this.balance += amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
// };

// const handleSuccess =(message) => {
//   console.log(`✅ Success! ${message}`);
// }
// const handleError=(message) =>{
//   console.log(`❌ Error! ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

// ----------------------------------------------------------------

// Example 6 - Инлайн стрелочные функции
// Выполните рефакторинг кода используя стрелочные функции.

// const each = (array, callback) => {
//   const newArr = [];
//   for (const el of array) {
//     newArr.push(callback(el));
//   }
//   return newArr;
// };

// console.log(each([64, 49, 36, 25, 16], (value) => value * 2));
// console.log(each([64, 49, 36, 25, 16], (value) => value - 10));
// console.log(each([64, 49, 36, 25, 16], (value) => Math.sqrt(value)));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.ceil(value)));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.floor(value)));

// -------------------------------------------------------------------

// Example 7 - Метод forEach
// Выполните рефакторинг кода используя метод forEach и стрелочные функции.

// const logItems = (items) => {

//   items.forEach((element, index) => {
//     console.log(`${index + 1} - ${element}`);
//   });

// };

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

// -------------------------------------------------------------

// Example 8 - Метод forEach
// Выполните рефакторинг кода используя метод forEach и стрелочные функции.

// const printContactsInfo = ({ names, phones }) => {
//   const nameList = names.split(",");

//   const phoneList = phones.split(",");

//   nameList.forEach((element, index) => {
//     console.log(`${element}: ${phoneList[index]}`);
//   });
// };

// printContactsInfo({
//   names: "Jacob,William,Solomon,Artemis",
//   phones: "89001234567,89001112233,890055566377,890055566300",
// });

// -------------------------------------------------------------------------

// Example 9 - Метод forEach
// Выполните рефакторинг кода используя метод forEach и стрелочные функции.

// const calсulateAverage = (...args) => {
//   let total = 0;

//   args.forEach((element) => {
//     total += element;
//   });

//   return total / args.length;
// };

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2

// -----------------------------------------------------------------------

// const processCall = (recipient, onAvailable, onNotAvailable) => {
//   const isRecipientAvailable = Math.random() > 0.5;

//   console.log(isRecipientAvailable);

//   if (!isRecipientAvailable) {
//     onAvailable(recipient);
//     return;
//   }
//   onNotAvailable(recipient);
// };

// const Autoresponder = (name) =>
//   console.log(`Абонент ${name} недоступен, оставьте сообщение.`);

// const callAccepted = (name) => console.log(`Соединяем с ${name}, ожидайте...`);

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступен, записываем голограмму.`);
// }

// processCall("Mango", callAccepted, Autoresponder);
// processCall("Loly", callAccepted, leaveHoloMessage);

// --------------------------------------------------------------------

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],

//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
//     }
//     return onError(pizzaName);
//   },
// };

// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// function onOrderError(error) {
//   return `Error! ${error}`;
// }
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));
// --------------------------------------------------------------------------

// function getCommonElements(firstArray, secondArray) {
//   console.log(firstArray);
//   const commonElements = [];

//   firstArray.forEach((el) => {
//     if (secondArray.includes(el)) {
//       commonElements.push(el);
//     }
//   });

//   return commonElements;
// }

// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

// ----------------------------------------------------------------------
