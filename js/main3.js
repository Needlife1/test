// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }
// -------------------------------------------------------------
// const carts = [13, 34, 55, 74, 126];

// let total = 0;

// for (const cart of carts) {
//   total += cart;
// }
// console.log(total);

// 2 вариант

// for (let i = 0; i < carts.length; i += 1) {

//   total += carts[i];
// }
// console.log(total);
// ---------------------------------------------------------------
// ссума четных чисел

// const numbers = [1, 5, 8, 9, 20, 11, 34, 9];

// let totalEvenNumbers = 0;

// for (const number of numbers) {
//   if (number % 2 === 0) {
//     totalEvenNumbers += number;
//   }
// }

// console.log(totalEvenNumbers);

// 2 вариант

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] % 2 === 0) {
//     totalEvenNumbers += numbers[i];
//   }
// }
// console.log(totalEvenNumbers);
// ____________________________________________________________________

// const logins = ["111", "222", "333", "444", "555"];
// const loginToFinde = "515";
// let massege = `Пользователь ${loginToFinde} не найден !!!!!`;

// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];

//   if (loginToFinde === login) {
//     massege = `Пользователь ${loginToFinde} найден !`;
//     break;
//   }
// }
// console.log(massege);

//  2 способ--------

// for (const login of logins) {
//   if (loginToFinde === login) {
//     massege = `Пользователь ${loginToFinde} найден !`;
//     break;
//   }
// }
// console.log(massege);

// 3 способ-------------------------

// if (logins.includes(loginToFinde) === true) {
//   massege = `Пользователь ${loginToFinde} найден !`;
// }

// console.log(massege);

// 4 способ-----------------------

// const massege = logins.includes(loginToFinde)
//   ? `Пользователь ${loginToFinde} найден !`
//   : `Пользователь ${loginToFinde} не найден !`;

// console.log(massege);

// -------------------------------------------------------------------

// const numbers = [12, 22, 13, 83, 10, 4];

// let smallestNumber = numbers[0];

// for (const number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }
// console.log(smallestNumber);

// -------------------------------------

// const friends = ["max", "igor", "sasha", "bogdan"];

// const string = friends.join(", ");

// console.log(string);

// --------------------------------------

// const string = "JavaScript";
// const array = string.split("");
// let invertadString = "";

// for (const arr of array) {
//   if (arr === arr.toLowerCase()) {
//     console.log(`Єто маленькая буква (${arr}) !!!!`);
//     invertadString += arr.toUpperCase();
//   } else {
//     invertadString += arr.toLowerCase();
//   }
// }
// console.log(invertadString);

// 2 способ------------------------------------

// for (const arr of array) {
//   invertadString +=
//     arr === arr.toLowerCase() ? arr.toUpperCase() : arr.toLowerCase();
// }
// console.log(invertadString);

// ----------------------------------------------
// const numbers = [12, 22, 13, 83, 3];
// const number2 = [10, 4, 37, 1];
// const number3 = numbers.concat(number2);
// let total = 0;

// for (const numb of number3) {
//   total += numb;
// }
// console.log(total);
