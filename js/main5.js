// const playlist = {
//   name: "My playlist",
//   rating: 5,
//   tracks: ["track-1", "track-2", "track-3"],
//   trackCount: 3,
// };

// const propertyName = "name";

// console.log(playlist[propertyName]);
// console.log(playlist.tracks[1]);
// console.log(playlist.trackCount);

// -----------------------------------------------

// const username = "Mango";
// const email = "needLife@.com";

// const user = {
//   username,
//   email,
// };

// console.log(user);

// ------------------------------------------------------

// const username = "Mango";
// const email = "needLife@.com";

// const user = {
//   [username]: email,
// };

// console.log(user);
// -------------------------------------------------------\

// const playlist = {
//   name: "My playlist",
//   rating: 5,
//   tracks: ["track-1", "track-2", "track-3"],

//   changeName(newName) {
//     this.name = newName;

//     console.log(this.name);
//   },

//   addNewTrack(addNewTrack) {
//     this.tracks.push(addNewTrack);

//     console.log(this.tracks);
//   },

//   getTrackCount() {
//     return this.tracks.length;
//   },
// };

// playlist.changeName("Not my playlist");
// playlist.addNewTrack("track-4");

// console.log(playlist);
// console.log(playlist.getTrackCount());

// -----------------------------------------------------

// const playlist = {
//   name: "My playlist",
//   rating: 5,
//   tracks: ["track-1", "track-2", "track-3"],
// };

// const keys = Object.keys(playlist);

// for (const key of keys) {
//   console.log(key);
//   console.log(playlist[key]);
// }

// ---------------Это важно !!!!!!!!!!!---------------

// const friends = [
//   { name: "Max", online: true },
//   { name: "Vova", online: false },
//   { name: "Sara", online: true },
//   { name: "Pompa", online: false },
// ];

// for (const friend of friends) {
//   friend.newprop = 555;

//   console.log(friend);
//   console.log(friend.name);
// }

// console.table(friends);
// ----------------------------------------------------

// const friends = [
//   { name: "Max", online: true },
//   { name: "Vova", online: false },
//   { name: "Sara", online: true },
//   { name: "Pompa", online: false },
// ];

// const findFriendByName = function (allFriends, name) {
//   for (const friend of allFriends) {
//     // console.log(friend);

//     if (friend.name === name) return "НАШЛИ !!!!!!!";
//   }
//   return "НЕ НАШЛИ !!! =(";
// };

// console.log(findFriendByName(friends, "Poly"));
// console.log(findFriendByName(friends, "Pompa"));

// ------------------------------------------------------

// const friends = [
//   { name: "Max", online: true },
//   { name: "Vova", online: false },
//   { name: "Sara", online: true },
//   { name: "Pompa", online: false },
// ];

// const findeFriendByName = function (allFriends) {
//   const name = [];
//   for (const friend of allFriends) {
//     name.push(friend.name);
//   }
//   return name;
// };

// console.log(findeFriendByName(friends));
// -------------------------------------------------------

// const friends = [
//   { name: "Max", online: true },
//   { name: "Vova", online: false },
//   { name: "Sara", online: true },
//   { name: "Pompa", online: false },
// ];

// const findeFriendsOnline = function (friends) {
//   const friendsOnline = [];
//   for (const friend of friends) {
//     if (friend.online) {
//       friendsOnline.push(friend);
//     }
//   }
//   return friendsOnline;
// };

// console.log(findeFriendsOnline(friends));

// ---------------------------------------------------

// const x = {
//   a: 3,
//   b: 8,
//   c: 10,
//   d: 2,
// };

// console.log(Object.keys(x).length);

// ------------------------------------------------------

// Модуль 3. Занятие 1. Объекты
// Example 1 - Основы обьектов
// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
// Код

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const kaysUser = Object.keys(user);

// for (const kay of kaysUser) {
//   console.log(`${kay}: ${user[kay]}`);
// }
// ============================================================

// Example 2 - метод Object.values()
// У нас есть объект, в котором хранятся зарплаты нашей команды.
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.
// Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.

// Код;

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const arrSalaries = Object.values(salaries);
// let sum = 0;

// for (const salarie of arrSalaries) {
//   sum += salarie;
// }
// console.log(sum);

// -----------------------------------------------------------

// Example 3 - Массив объектов
// Напишите ф - цию calcTotalPrice(stones, stoneName),
// которая принимает массив обьектов и строку с названием камня.
//     Ф - ция считает и возвращает общую стоимость камней с таким именем, ценой и количеством из обьекта

// Код

// const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 3 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {
//   for (const stone of stones) {
//     if (stone.name === stoneName) {
//       return stone.price * stone.quantity;
//     }
//   }
// }

// console.log(calcTotalPrice(stones, "Бриллиант"));

// -------------------------------------------------------------------

// Example 4 - Комплексные задачи
// Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   /*
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
//    */
//   createTransaction(amount, type) {
//     return {
//       id: this.transactions.length,
//       amount,
//       type,
//     };
//   },

//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
//   deposit(amount) {
//     this.balance += amount;
//     const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//     this.transactions.push(transaction);
//   },

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {
//     if (amount > this.balance) {
//       console.log("Cнятие такой суммы не возможно, недостаточно средств!!!");
//       return false;
//     }
//     this.balance -= amount;
//     const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
//     this.transactions.push(transaction);
//   },

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//       if (id === transaction.id) {
//         return transaction;
//       }
//     }
//   },

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {
//     let total = 0;
//     for (const transaction of this.transactions) {
//       if (type === transaction.type) {
//         total += transaction.amount;
//       }
//     }
//     return total;
//   },
// };

// console.log(account.getBalance());
// account.deposit(500);
// console.log(account.getBalance());
// account.withdraw(300);
// console.log(account.getBalance());
// console.log(account);
// account.withdraw(500);
// console.log(account.getBalance());
// console.log(account.getTransactionDetails(1));
// console.log(account.getBalance());
// account.deposit(500);
// console.log(account.getBalance());
// account.deposit(500);
// account.deposit(500);
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));

// -------------------------------------------------------------------------

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let totalPrice = 0;

//   for (const product of products) {
//     if (productName === product.name) {
//       totalPrice = product.price * product.quantity;
//     }
//   }
//   return totalPrice;
//   // Пиши код выше этой строки
// }

// console.log(calculateTotalPrice("Droid"));
