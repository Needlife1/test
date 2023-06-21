// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// console.log(colorPickerOptions.find((option) => option.label === "blue"));
// console.log(colorPickerOptions.find((option) => option.label === "pink"));
// console.log(colorPickerOptions.find((option) => option.label === "#3F51B5"));

// --------------------------------------------------

// const numbers = [5, 10, 34, 6, 83];

// numbers.forEach((number, index, arr) => {
//     console.log("number", number);
//   console.log("index", index);
//   console.log("arr", arr);
// });

// ---------------------Map()---------------------------------

// const numbers = [5, 10, 34, 6, 83];

// const dablNumbers = numbers.map((number) => number * 2);
// console.log(dablNumbers);

// ------------------Map()для масивов-----------------------------

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// const colors = colorPickerOptions.map((color) => color.label);
// console.log(colors);

// ---------------------------------------------------

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// const newArr = colorPickerOptions.map((color) => ({
//   ...color,
//   label: "xxxx",
// }));
// console.log(newArr);

// -----------------------------------------------------------

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// const red = "green";

// const newErr = colorPickerOptions.map((color) =>
//   red === color.label
//     ? {
//         ...color,
//         label: color.label + "nnnnnn",
//       }
//     : color
// );

// console.log(newErr);

// ----------------------------Filter()-----------------------

// const numbers = [5, 10, 34, 6, 83];

// const filterNum = numbers.filter((number) => number > 15);
// console.log(filterNum);

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// const newColors = colorPickerOptions.filter((color) =>
//   color.color.includes("4")
// );

// console.log(newColors);

// ------------------------finde()-----------------------------

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// const col = "#E91E63";

// const findColorByColor = (ollColors, col) =>
//   ollColors.find(({ color }) => color === col);

// console.log(findColorByColor(colorPickerOptions, col));

// --------------------------reduce()------------------

// const numbers = [5, 10, 34, 6, 83];

// const total = numbers.reduce((acc, number) => acc + number, 0);
// console.log(total);

// -------------------------------------------------------------

// const colorPickerOptions = [
//   { label: "red", color: "#F44336", timePlayed: 34 },
//   { label: "green", color: "#4CAF50", timePlayed: 34 },
//   { label: "blue", color: "#2196F3", timePlayed: 34 },
//   { label: "pink", color: "#E91E63", timePlayed: 34 },
//   { label: "indigo", color: "#3F51B5", timePlayed: 34 },
// ];

// const totalTime = colorPickerOptions.reduce(
//   (total, item) => (total += item.timePlayed),
//   0
// );
// console.log(totalTime);

// --------------------------reduce() Корзина------------------

// const cart = [
//   { tabel: "Apples", prise: 100, quantity: 2 },
//   { tabel: "Bananas", prise: 34, quantity: 3 },
//   { tabel: "Lemonse", prise: 59, quantity: 4 },
// ];

// const totalAmount = cart.reduce(
//   (total, { prise, quantity }) => total + prise * quantity,
//   0
// );

// console.log(totalAmount);

// -----------------------------------------------------------
// const students = [
//   { name: "Манго", courses: ["математика", "физика"] },
//   { name: "Поли", courses: ["информатика", "математика"] },
//   { name: "Киви", courses: ["физика", "биология"] },
// ];
// // через flatMap()
// const allCourses = students.flatMap((stadent) => stadent.courses);
// // console.log(allCourses);

// // через  reduce()
// const allCoursess = students.reduce(
//   (all, student) => [...all, ...student.courses],
//   []
// );
// console.log(allCoursess);

// const quantity = allCoursess.reduce((acc, course) => {
//   if (acc[course]) {
//     return {
//       ...acc,
//       [course]: acc[course] + 1,
//     };
//   }
//   return {
//     ...acc,
//     [course]: 1,
//   };
// }, {});
// console.log(quantity);
// ---------------------Второй вареант------------------------------

// const quantity = allCoursess.reduce(
//   (acc, course) => ({ ...acc, [course]: acc[course] ? acc[course] + 1 : 1 }),
//   {}
// );
// console.log(quantity);

// Перебераем масив на уникальные значения при помоши filter()

// const uniqueCourses = allCourses.filter(
//   (course, index, arr) => arr.indexOf(course) === index
// );
// console.log(uniqueCourses);

// ----------------------------------------------------------------------

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const getTags = (tweets) =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// const tags = getTags(tweets);
// console.log(tags);

// // Вынесем callback-функцию отдельно, а в reducе передадим ссылку на нее.
// // Это стандартная практика если callback-функция довольно большая.

// // Если в объекте-аккумуляторе acc нету своего свойства с ключем tag,
// // то создаем его и записывает ему значение 0.
// // В противном случае увеличиваем значение на 1.
// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// // Начальное значение аккумулятора это пустой объект {}
// const countTags = (tags) => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);

// -----------------------------------------------------------------------

const cars = [
  {
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

// // Example 1 - Метод map
// // Пусть функция getModels возвращает массив моделей (поле model) всех автомобилей.

// const getModels = (cars) => {
//   return cars.map((allModel) => allModel.model);
// };

// console.table(getModels(cars));

// -------------------------------------------------------------------------------

// Example 2 - Метод map
// Пусть функция makeCarsWithDiscount возвращает новый массив объектов с изменным значением свойства price
// в зависимости от переданной скидки.

// const makeCarsWithDiscount = (cars, discount) => {
//   return cars.map((car) => ({
//     ...car,
//     price: car.price - car.price * discount,
//   }));
// };

// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));

// -------------------------------------------------------------------------------

// // Example 3 - Метод filter
// // Пусть функция filterByPrice возвращает массив автомобилей
// // цена которых меньше чем значение параметра threshold.

// const filterByPrice = (cars, threshold) => {
//   return cars.filter((car) => car.price < threshold);
// };

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

// --------------------------------------

// Пусть функция getCarsWithDiscount возвращает массив автомобилей свойство onSale которых true.

// const getCarsWithDiscount = (cars) => {
//   return cars.filter((car) => car.onSale);
// };

// console.table(getCarsWithDiscount(cars));
// ------------------------------------------------------

// Пусть функция getCarsWithType возвращает массив автомобилей тип которых совпадает со значением параметра type.

// const getCarsWithType = (cars, type) => {
//   return cars.filter((car) => car.type === type);
// };

// console.table(getCarsWithType(cars, "suv"));
// console.table(getCarsWithType(cars, "sedan"));

// ---------------------------------------------------------

// Example 6 - Метод find
// const getCarByModel = (cars, model) => {
//   return cars.find((car) => car.model === model);
// };

// console.log(getCarByModel(cars, "F-150"));
// console.log(getCarByModel(cars, "CX-9"));

// -------------------------------------------------------------

// // Example 10 - Метод reduce
// // Пусть функция getTotalAmount возвращает общее количество автомобилей(значение свойств amount).

// const getTotalAmount = (cars) => {
//   return cars.reduce((total, car) => total + car.amount, 0);
// };

// console.log(getTotalAmount(cars));

// ----------------------------------------------------------

// Example 11 - Цепочки методов
// Пусть функция getAvailableCarNames возвращает массив моделей автомобилей,
//     но только тех, которые сейчас на распродаже.

// const getModelsOnSale = (cars) => {
//   return cars.filter((cars) => cars.onSale).map((car) => car.model);
// };

// console.table(getModelsOnSale(cars));
// ------------------------------------------------------------------

// Example 12 - Цепочки методов
// Пусть функция getSortedCarsOnSale возвращает массив автомобилей на
// распродаже(свойство onSale), отсортированных по возрастанию цены.

// const getSortedCarsOnSale = (cars) => {
//   return [...cars]
//     .filter((cars) => cars.onSale)
//     .sort((fiorstCar, secondCar) => fiorstCar.price - secondCar.price);
// };

// console.table(getSortedCarsOnSale(cars));
// -----------------------------------------------------------
// Example 7 - Метод sort
// Пусть функция sortByAscendingAmount возвращает новый массив автомобилей отсортированный
// по возврастанию значения свойства amount.

// const sortByAscendingAmount = (cars) =>
//   cars.sort((a, b) => a.amount - b.amount);

// console.table(sortByAscendingAmount(cars));

// -------------------------------------------------------

// Example 8 - Метод sort
// Пусть функция sortByDescendingPrice возвращает новый массив
// автомобилей отсортированный по убыванию значения свойства price.

// const sortByDescendingPrice = (cars) => {
//   return [...cars].sort(
//     (ferstCar, secondCar) => secondCar.price - ferstCar.price
//   );
// };

// console.table(sortByDescendingPrice(cars));
// -----------------------------------------------------------------

// Example 9 - Метод sort
// Пусть функция sortByModel возвращает новый массив автомобилей отсортированный
//  по названию модели в алфавитном и обратном алфавитном порядке, в засисимости от значения параметра order.

// const sortByModel = (cars, order) => {
//   return [...cars].sort((fiorstCar, secondeCar) =>
//     order.includes("asc")
//       ? fiorstCar.make.localeCompare(secondeCar.make)
//       : secondeCar.make.localeCompare(fiorstCar.make)
//   );
// };

// console.table(sortByModel(cars, "asc"));
// console.table(sortByModel(cars, "desc"));

// --------------------------------------------------------

// const players = [
//   {
//     id: "id-1",
//     tag: "Mango",
//     isOnline: false,
//     rank: 200,
//   },
//   {
//     id: "id-2",
//     tag: "Lopu",
//     isOnline: true,
//     rank: 332,
//   },
//   {
//     id: "id-3",
//     tag: "Kukold",
//     isOnline: true,
//     rank: 600,
//   },
//   {
//     id: "id-4",
//     tag: "Banan",
//     isOnline: false,
//     rank: 764,
//   },
//   {
//     id: "id-5",
//     tag: "Max",
//     isOnline: true,
//     rank: 199,
//   },
// ];

// const sortOnlineByRank = (players) => {
//   return players
//     .filter((player) => player.isOnline)
//     .sort((a, b) => a.rank - b.rank);
// };

// console.log(sortOnlineByRank(players));

// ----------------------------------------------------------------
