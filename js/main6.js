// const number = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);
// console.log(number);

// ---------------------РОСПЫЛЕНИЕ(SPRED)---------------------------------

// const num = [1000, 2000, 3000];
// const numb = [100, 200, 300];
// const number = [0, 1, 2, ...numb, 3, 4,...num];
// console.log(number);
// ---------------------------------------------------------------------

// const temps = [100, 200, 300, 1, 34, 9, 5];
// console.log(Math.max(temps));
// // розбивает масив на независимый набор аргументов поэтому работает
// console.log(Math.max(...temps));
// // получаеться так Math.max(100, 200, 300, 1, 34, 9, 5)

// ----------------------РОСПЫЛЕНИЕ СЛОЖНИХ ТИПОВ-------------------

// const a = [
//   {
//     x: 1,
//     y: 2,
//     z: 3,
//   },
// ];
// const b = [...a];

// // не копируеться а передаеться по ссылке так как сложный тип
// console.log(a[0] === b[0]);
// console.log(a === b);

// a[0].x = 1000;

// console.log(a);
// console.log(b);

// ------------РОСПЫЛЕНИЕ ОБЕКТОВ----------------------------------------

// const a = {
//   x: 1,
//   y: 2,
// };

// const b = {
//   x: 0,
//   z: 3,
// };

// const c = {
//   name: "Mango",
//   ...a,
//   ...b,
// };
// console.log(c);

// ------------ДЕСТРУКТУРИЗАЦИЯ ОБЕКТА-------------------------------------

// const playlist = {
//   name: "Мой супер плейлист",
//   rating: 5,
//   tracks: ["track1", "'track2'", "track3"],
//   trackCount: 3,
// };

// const { name = "lol", rating, tracks, trackCount, train = true } = playlist;

// console.log(tracks);
// console.log(name);
// console.log(rating);
// console.log(trackCount);
// console.log(train);

// --------------------ПЕРЕИМЕНОВАНИЯ ЗНАЧЕНИЯ В ЛОКАЛЬНОЙ ПЕРЕМЕННОЙ----------------

// const playlist = {
//   name: "Мой супер плейлист",
//   rating: 5,
//   tracks: ["track1", "'track2'", "track3"],
//   trackCount: 3,
// };

// const {
//   name = "lol",
//   rating: x,
//   tracks,
//   trackCount,
//   // переменная переименована и присвоено к ней значение
//   train: p = true,
// } = playlist;

// console.log(x);
// console.log(p);

// ----------------ОБЕКТ В ОБЕКТЕ-------------------------

// const playlist = {
//   name: "Мой супер плейлист",
//   rating: 5,
//   tracks: ["track1", "'track2'", "track3"],
//   trackCount: 3,
//   a: {
//     b: 1,
//     c: 1,
//   },
// };

// const {
//   name,
//   rating,
//   tracks,
//   trackCount,
//   a: { b, c },
// } = playlist;

// console.log(b);

// -------------ДЕСТРУКТАРИЗАЦИЯ МАСИВА-----------------------

// const authors = {
//   max: 3,
//   oleg: 10,
//   vika: 4,
//   tania: 1,
// };

// const entries = Object.entries(authors);

// console.log(entries);

// for (const [name, rating] of entries) {
//   console.log(name, rating);
// }

// -------------------Операция rest (сбор)-----------------

// const playlist = {
//   name: "Мой супер плейлист",
//   rating: 5,
//   tracks: ["track1", "'track2'", "track3"],
//   trackCount: 3,
//   a: {
//     b: 1,
//     c: 1,
//   },
// };

// const { name, rating, ...rest } = playlist;

// // rest делает отдельный обект
// console.log(rest);

// -----------------------------------------------------

// // Change code below this line
// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// console.log(
//   calculateMeanTemperature({
//     today: { low: 10, high: 20 },
//     tomorrow: { low: 20, high: 30 },
//   })
// );

// ------------------------------------------------------

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   const newObgect = { category, priority, ...data, completed };
//   return newObgect;
//   // Change code above this line
// }

// console.log(makeTask({ text: "1111111" }));
// ----------------------------------------------------------

// // Change code below this line
// function findMatches(arr, ...args) {
//   const matches = [];
//   for (let i = 0; i < arr.length; i++) {

//     if (arr.includes(args[i])) {
//       matches.push(args[i]);
//     }
//   }

//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));

// ------------------------------------------------------

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     const { books } = this;

//     let indexBook = books.indexOf(oldName);

//     if (books.includes(oldName)) {
//       books.splice(indexBook, 1, newName);
//     }
//     console.log(books);
//   },
// };

// console.log(bookShelf.updateBook("Haze", "pop"));

// ------------------------------------------------------------

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],

//   getPotions() {
//     let potions = [];
//     for (const potion of this.potions) {
//       potions.push(potion.name);
//     }
//     return potions;
//   },

//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },

//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i++) {
//       if (potionName === this.potions[i].name) {
//         this.potions.splice(i, 1);
//         return;
//       } else {
//         return `Potion ${potionName} is not in inventory!`;
//       }
//     }
//   },

//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i++) {
//       if (this.potions[i].name === oldName) {
//         this.potions[i].name = newName;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
// };
// ----------------------------------------------------------

// // Example 1 - Деструктуризация
// // Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора независимых аргументов.

// function calcBMI({ ...arg }) {
//   const argVal = Object.values(arg);
//   const numericWeight = Number(argVal[0].replace(",", "."));
//   const numericHeight = Number(argVal[1].replace(",", "."));

//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// console.log(
//   calcBMI({
//     weight: "88,3",
//     height: "1.75",
//   })
// );

// console.log(
//   calcBMI({
//     weight: "68,3",
//     height: "1.65",
//   })
// );

// console.log(
//   calcBMI({
//     weight: "118,3",
//     height: "1.95",
//   })
// );

// --------------------------------------------------------------

// Example 2 - Деструктуризация
// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора независимых аргументов.

// function printContactsInfo({ ...args }) {
//   const arrArgs = Object.values(args);
//   const nameList = arrArgs[0].split(",");
//   const phoneList = arrArgs[1].split(",");

//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}:`, Number(phoneList[i]));
//   }
// }

// printContactsInfo({
//   names: "Jacob,William,Solomon,Artemis",
//   phones: "89001234567,89001112233,890055566377,890055566300",
// });

// --------------------------------------------------------------

// Example 3 - Глубокая деструктуризация
// Перепиши функцию так, чтобы она принимала один объект параметров,
//     вместо набора независимых аргументов.

// function getBotReport({ ...args }) {
//   const {
//     companyName,
//     bots: { repair, defence },
//   } = args;

//   return `${companyName} has ${repair + defence} bots in stock`;
// }

// console.log(
//   getBotReport({
//     companyName: "Cyberdyne Systems",
//     bots: {
//       repair: 150,
//       defence: 50,
//     },
//   })
// );

// -----------------------------------------------------------

// Example 4 - Деструктуризация
// Перепиши функцию так, чтобы она принимала объект параметров со свойствами companyName \
// и stock и выводила репорт о количестве товаров на складе любой компании.

// function getStockReport({ ...args }) {
//   const { companyName, stock } = args;
//   const arrNumbers = Object.values(stock);
//   console.log(arrNumbers);
//   let sum = 0;

//   for (const number of arrNumbers) {
//     sum += number;
//   }

//   return `${companyName} has ${sum} items in stock`;
// }

// console.log(
//   getStockReport({
//     companyName: "Cyberdyne Systems",
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   })
// );

// console.log(
//   getStockReport({
//     companyName: "Belacci",
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   })
// );
// ----------------------------------------------------------------

// Example 5 - Операция spread
// Дополни функцию createContact(partialContact) так, чтобы она возвращала новый объект контакта с
// добавленными свойствами id и createdAt, а также list со значением "default" если в partialContact нет такого
// свойства.

// Решение
// function createContact(partialContact) {

//   return {
//     list: "default",
//     ...partialContact,
//     id: generateId(),
//     createdAt: Date.now(),
//   };
// }

// console.log(
//   createContact({
//     name: "Mango",
//     email: "mango@mail.com",
//     list: "friends",
//   })
// );
// console.log(
//   createContact({
//     name: "Poly",
//     email: "poly@hotmail.com",
//   })
// );

// function generateId() {
//   return "_" + Math.random().toString(36).substr(2, 9);
// }
// ------------------------------------------------------------------

// Example 6 - Операция rest
// Напиши функцию transformUsername(user) так, чтобы она возвращала новый обьект со свойством fullName,
//     вместо firstName и lastName.

// Решение
// function transformUsername({ firstName, lastName, ...otherProps }) {
//   const fullName = firstName + " " + lastName;
//   return {
//     ...otherProps,
//     fullName,
//   };
// }

// console.log(
//   transformUsername({
//     id: 1,
//     firstName: "Jacob",
//     lastName: "Mercer",
//     email: "j.mercer@mail.com",
//     friendCount: 40,
//   })
// );

// console.log(
//   transformUsername({
//     id: 2,
//     firstName: "Adrian",
//     lastName: "Cross",
//     email: "a.cross@hotmail.com",
//     friendCount: 20,
//   })
// );
