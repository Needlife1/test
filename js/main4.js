// const calculaitTotalPrise = function (items) {
//   console.log(items);

//   let total = 0;

//   for (const value of items) {
//     total += value;
//   }
//   return total;
// };

// const r1 = calculaitTotalPrise([1, 2, 3]);

// console.log(r1);
// console.log(calculaitTotalPrise([10, 32, 13]));
// console.log(calculaitTotalPrise([133, 213, 372, 11]));

// --------------------------------------------------------------

// const logins = ["dwer34", "wdfwdf9", "wrfdwer10", "wferwer99"];

// const faindLogin = function (allLogin, loginFinde) {
//   //   if (allLogin.includes(loginFinde)) {
//   //     return `Такой логин есть ! ${loginFinde}`;
//   //   }
//   //   return `Такого логина нет ! ${loginFinde}`;
//   return allLogin.includes(loginFinde)
//     ? `Такой логин есть ! ${loginFinde}`
//     : `Такого логина нет ! ${loginFinde}`;
// };

// console.log(faindLogin(logins, "dfwef3"));
// console.log(faindLogin(logins, "wrfdwer10"));
// console.log(faindLogin(logins, "dfw3ef3"));

// -------------------------------------------------------------------\

// const add = function (...args) {
//   console.log(args);
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4, 4));

// ------------------------------------------------------------------

// function addPositive(a, b) {
//   if (a >= 0 && b >= 0) {
//     return a + b;
//   } else {
//     return 0;
//   }
// }

// const sum = addPositive(-1, 5);
// const sum2 = addPositive(sum, 15);

// console.log(sum2);

// -------------------------------------------------------------------

// ------------------------------------------------------------------

// Example 1 - Индекс массы тела
// Напиши функцию calcBMI(weight, height) которая рассчитывает и возвращает индекс массы тела человека.
// Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.

// Вес и высота будут специально переданы как строки. Нецелые числа могут быть заданы в виде 24.7
// или 24, 7, то есть в качестве разделителя дробной части может быть запятая.

// Индекс массы тела необходимо округлить до одной цифры после запятой;

// const bmi = calcBMI("88,3", "1.75");
// console.log(bmi); // 28.8

// function calcBMI(weight, height) {
//   weight = replaceCommDot(weight);
//   height = replaceCommDot(height);

//   //при математическом вычислении привелось сразу к чеслу
//   return getRoundedNumber(weight / height ** 2);
// }

// function replaceCommDot(string) {
//   return string.replace(",", ".");
// }

// function getRoundedNumber(number) {
//   return Number(number.toFixed(1));
// }

// ---------------------------------------------------------------

// function add(a, b) {
//   return a + b;
// }

// console.log(add(3, 4 + 1));

// ---------------------------------------------------------------

// Example 6 - Поиск наибольшего элемента
// Напиши функцию findLargestNumber(numbers)которая ищет самое большое число в массиве.

// function findLargestNumber(numbers) {
//   let max = numbers[0];

//   for (let i = 0; i <= numbers.length; i++) {
//     if (max < numbers[i]) {
//       max = numbers[i];
//     }
//   }

//   return max;
// }
// ----------------2 вариант-------------------------------------
// function findLargestNumber(numbers) {
//   let max = numbers[0];

//   for (const number of numbers) {
//     if (number > max) {
//       max = number;
//     }
//   }

//   return max;
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

// -----------------------------------------------------------------------

// Example 7 - Среднее значение
// Напишите функцию calAverage() которая принимает произвольное кол -
// во аргументов и возвращает их среднее значение.
//  Все аругменты будут только числами.

// function calAverage(...args) {
//   let sum = 0;
//   let length = args.length;

//   for (let i = 0; i < args.length; i++) {
//     sum += args[i];
//   }

//   return sum / length;
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

// ------------------------------------------------------------------------

// Example 2 - Меньшее из чисел
// Напиши функцию min(a,b), которая возвращает меньшее из чисел a и b.

// function min(a, b) {
//   if (a < b) {
//     return a;
//   } else if (b < a) {
//     return b;
//   } else {
//     return a;
//   }
// }

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1

// -----------------------------------------------------------------------

// Example 3 - Площадь прямоугольника
// Напиши функцию getRectArea(dimensions) для вычисления площади прямоугольника со сторонами,
//     значения которых будут переданы в параметр dimensions в виде строки.
//     Значения гарантированно разделены пробелом.

// function getRectArea(dimensions) {
//   const array = makeArray(dimensions);
//   let arrayNumbers = 0;
//   for (let i = 0; i < array.length; i++) {
//     arrayNumbers = array[i];
//   }
//   const number = array.splice(0, 1);

//   return array.join() * number.join();
// }

// console.log(getRectArea("8 11"));

// function makeArray(arr) {
//   const number = arr.split(" ");

//   return number;
// }

// ----------------------------------------------------------------------------

// Example 4 - Логирование элементов
// Напиши функцию logItems(items), которая получает массив и использует цикл for,
//     который для каждого элемента массива будет выводить в консоль сообщение в формате
//         < номер элемента > - <значение элемента>.
//         Нумерация элементов должна начинаться с 1.

//             Например для первого элемента массива ['Mango', 'Poly', 'Ajax']
//             с индексом 0 будет выведено 1 - Mango, а для индекса 2 выведет 3 - Ajax.

// function logItems(items) {
//   items.unshift(" ");

//   for (let i = 1; i < items.length; i++) {

//     console.log(`${i}: ${items[i]}`);
//   }
// }

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

// -------------------------------------------------------------------------------

// Example 5 - Логирование контактов
// Напиши функцию printContactsInfo(names, phones) которая выводит в консоль имя и телефонный номер пользователя.
// В параметры names и phones будут переданы строки имен и телефонных номеров, разделенные запятыми.
// Порядковый номер имен и телефонов в строках указывают на соответствие.
// Количество имен и телефонов гарантированно одинаковое.

// function printContactsInfo(names, phones) {
//   const arrayNames = names.split(",");
//   const arrayPhones = phones.split(",");

//   for (let i = 0; i < arrayNames.length; i++) {
//     console.log(`${arrayNames[i]}: ${arrayPhones[i]}`);
//   }
// }

// printContactsInfo(
//   "Jacob,William,Solomon,Artemis",
//   "89001234567,89001112233,890055566377,890055566300"
// );

// ---------------------------------------------------------------------------------

// Example 8 - Форматирование времени
// Напиши функцию formatTime(minutes) которая переведёт значение
// minutes(количество минут) в строку в формате часов и минут HH: MM.

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

// function formatTime(totalMinutes) {
//   const hours = Math.floor(totalMinutes / 60);
//   const minutes = totalMinutes % 60;

//   //   console.log(hours);
//   console.log(minutes);

//   const doubleDigitHours = String(hours).padStart(2, 0);
//   const doubleDigitMinutes = String(minutes).padStart(2, 0);
//   const doubleDigitTime = `${doubleDigitHours}:${doubleDigitMinutes}`;
//   return doubleDigitTime;
// }

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"

// ----------------------------------------------------------------------------------

// Example 9 - Коллекция курсов (includes, indexOf, push и т. д.)
// Напишите функции для работы с коллекцией обучающих курсов courses:

// addCourse(name) - добавляет курс в конец коллекции
// removeCourse(name) - удаляет курс из коллекции

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// function addCourse(course) {
//   if (courses.includes(course) === true) {
//     console.log("У вас уже есть такой курс");
//   } else {
//     courses.push(course);
//   }
// }

// function removeCourse(course) {
//   for (let i = 0; i < courses.length; i++) {
//     if (courses[i] !== course) {
//       console.log("Курс с таким имененем не найден");
//     } else {
//       courses.splice(i, 1);
//     }
//   }
// }

// addCourse("Express");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse("CSS"); // 'У вас уже есть такой курс'

// removeCourse("React");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse("Vue"); // 'Курс с таким имененем не найден'

// -------------------------------------------------------------

// function getExtremeElements(array) {
//   // Change code below this line
//   return [array[0], array[array.length - 1]];

//   // Change code above this line
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// --------------------------------------------------------------
