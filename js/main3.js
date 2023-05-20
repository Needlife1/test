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

// --------------------------------------------------

// const arr = [1, 2, , 3, , 5];
// const indexOfArrElements = [];

// for (let i = 0; i < arr.length; i += 1) {
//   if (typeof arr[i] === "undefined") {
//     indexOfArrElements.push(i);
//   }
// }
// console.log(indexOfArrElements);

// -------------------------------------------------
// Example 1 - Базовые операции с массивом
// Создайте массив genres с элементами «Jazz» и «Blues».
// Добавьте «Рок-н-ролл» в конец.
// Выведите в консоль первый элемент массива.
// Выведите в консоль последний элемент массива. Код должен работать для массива произвольной длины.
// Удалите первый элемент и выведите его в консоль.
//     Вставьте «Country» и «Reggae» в начало массива.

// const genres = ["Jazz", "Blues"];
// genres.push("Рок-н-ролл");
// console.log(genres);

// console.log(genres[0]);

// const lastEl = genres.length - 1;
// console.log(genres[lastEl]);

// console.log(genres.splice(0, 1)[0]);

// genres.splice(0, 0, "Country", "Reggae");
// console.log(genres);

// genres.unshift("Country", "Reggae");
// console.log(genres);

// ---------------------------------------------

// Example 2 - Массивы и строки
// Напиши скрипт для вычисления площади прямоугольника со сторонами,
// значения которых хранятся в переменной values в виде строки.Значения гарантированно разделены пробелом.

// const values = "8 11";

// const errValues = values.split(" ");

// const sqer = errValues[0] * errValues[1];

// console.log(sqer);

// -----------------------------------------------
// Example 3 - Перебор массива
// Напиши скрипт для перебора массива fruits циклом for.
// Для каждого элемента массива выведи в консоль строку в формате номер_элемента:
// значение_элемента.Нумерация элементов должна начинаться с 1.

// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`${i + 1}: ${fruits[i]}`);
// }

// ----------------------------------------------------

// Example 4 - Массивы и циклы for...in
// Напиши скрипт который выводит в консоль имя и телефонный номер пользователя.
// В переменных names и phones хранятся строки имен и телефонных номеров, разделенные запятыми.
// Порядковый номер имен и телефонов в строках указывают на соответствие.Количество имен и телефонов гарантированно одинаковое.

// const names = "Jacob,William,Solomon,Artemis";
// const phones = "89001234567,89001112233,890055566377,890055566300";

// const arrNames = names.split(",");
// console.log(arrNames);

// const arrPhones = phones.split(",");
// console.log(arrPhones);

// for (const i in arrNames) {
//   console.log(`${arrNames[i]}: ${arrPhones[i]}`);
// }
// ----------------------------------------------------
// Example 5 - Массивы и строки
// Напиши скрипт который выводит в консоль все слова строки кроме первого и последнего.
// Результирующая строка не должна начинаться или заканчиваться пробельным символом.
// Скрипт должен работать для любой строки.

// const string = "Welcome to the future";

// const arrString = string.split(" ");

// const newArr = [];

// for (let i = 1; i < arrString.length - 1; i += 1) {
//   newArr.push(arrString[i]);
// }

// console.log(newArr.join(" "));
//--------------------------------------------------------------

// Example 6 - Массивы и строки
// Напиши скрипт который «разворачивает» строку (обратный порядок букв) и выводит ее в консоль.

// const string = "Welcome to the future";

// const reverseString = string.split("").reverse().join("");

// console.log(reverseString);
// -------------------------------------------------------------
// Example 7 - Сортировка массива с циклом
// Напиши скрипт сортировки массива строк в алфавитном порядке по первой букве элемента.

// const langs = ["python", "javascript", "c++", "haskel", "php", "ruby"];

// const sortLangs = langs.sort().reverse();

// console.log(sortLangs);
// ---------------------------------------------------------------
// Example 8 - Поиск элемента
// Напиши скрипт поиска самого маленького числа в массиве.Код должен работать для любого массива чисел.
// Используй цикл для решения задачи.

// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[0] > numbers[i]) {
//     min = numbers[i];
//   }
// }

// console.log(min);
//
