// const objC = {
//   c: 5,
// };

// const objB = Object.create(objC);
// objB.b = 10;

// const objA = Object.create(objB);
// objA.a = 15;

// console.log(objA.c);
// objA.c = 1000;

// console.log(objA);

// -------------------Функция конструктор-------------------------

// ({ brend, model, prise } = {}) - дестркутуризация + значение по умолчанию
//   (если ничего не пришло то будет пустой обект)

// const Car = function ({ brend, model, prise } = {}) {
//   this.brend = brend;
//   this.model = model;
//   this.prise = prise;

//   this.chengePrice = function (newPrice) {
//     this.prise = newPrice;
//   };
// };

// Car.prototype.seyHi = function () {
//   console.log("Car.prototype.seyHi -> this", this);
//   console.log("Hello!!!!");
// };

// const myCar = new Car({ brend: "Audi", model: "Q3", prise: 35000 });

// console.log(myCar);

// myCar.seyHi();

// // ---Это статические свойства и статические методы

// Car.massage = "Я статическое свойство и меня нет на экземплярах и в прототипе.";
// Car.logInfo = function (obj) {
//   console.log(obj);
// };

// console.dir(Car);
// console.log(myCar);

// -------------------CounterPlagin----------------------------------------

// // Может приходить обект со свойством initialValue, если вдруг его не передали то будет 0
// const CounterPlagin = function ({
//   rootSelector,
//   initialValue = 0,
//   step = 1,
// } = {}) {
//   this._value = initialValue;
//   this._step = step;

//   this._refs = this._getRefs(rootSelector);
//   this._bindEvents();
//   this.updetValueUI();
// };

// CounterPlagin.prototype._getRefs = function (rootSelector) {
//   const refs = {};
//   refs.container = document.querySelector(rootSelector);
//   refs.incrimentBtn = refs.container.querySelector("[data-increment]");
//   refs.decrimentBtn = refs.container.querySelector("[data-decrement]");
//   refs.value = refs.container.querySelector("[data-value]");
//   //   console.log(refs.incrimentBtn);
//   //   console.log(refs.decrimentBtn);
//   return refs;
// };

// CounterPlagin.prototype._bindEvents = function () {
//   this._refs.incrimentBtn.addEventListener("click", () => {
//     this.incriment();
//     console.log("  this._refs.incrimentBtn", this);
//     this.updetValueUI();
//   });

//   this._refs.decrimentBtn.addEventListener("click", () => {
//     this.decriment();
//     console.log("this._refs.decrimentBtn", this);
//     this.updetValueUI();
//   });
// };

// CounterPlagin.prototype.updetValueUI = function () {
//   this._refs.value.textContent = this._value;
// };

// CounterPlagin.prototype.incriment = function () {
//   this._value += this._step;
// };

// CounterPlagin.prototype.decriment = function () {
//   this._value -= this._step;
// };

// new CounterPlagin({
//   rootSelector: "#counter1",
//   step: 10,
//   initialValue: 100,
// });

// // console.log("counter1", counter1);

// new CounterPlagin({ rootSelector: "#counter2", step: 2 });

// // console.log("counter2", counter2);

// ---------------------Класы---------------------------------------

// class Hero {
//   constructor({ name = "Hero", xp = 0 } = {}) {
//     this.name = name;
//     this.xp = xp;
//   }

//   gainXp(amount) {
//     console.log(`${this.name} полусает ${amount} xp`);
//     this.xp += amount;
//   }
// }

// class Warrior extends Hero {
//   constructor({ weapon, ...config } = {}) {
//     super(config);

//     this.weapon = weapon;
//   }

//   attack() {
//     console.log(`${this.name} атакует используя ${this.weapon}`);
//   }
// }

// class Mage extends Hero {
//   constructor({ spells = [], ...config } = {}) {
//     super(config);

//     this.spells = spells;
//   }
//   cast() {
//     console.log(`${this.name} чтото там кастует !`);
//   }
// }

// const mango = new Warrior({ name: "Mango", xp: 1000, weapon: "алибарда" });
// const poly = new Mage({ name: "poly", xp: 500, spells: ["фаер -бол"] });

// console.log(mango);
// mango.attack();
// mango.gainXp(1000);
// console.log(mango);

// console.log(poly);
// poly.cast();
// poly.gainXp(200);

// ---------------------------------------------------------------
// Example 1 - Блоггер
// Напиши класс Blogger для создания обьекта блоггера со следующим свойствами:

// email - почта, строка
// age - возраст, число
// numberOfPosts - кол-во постов, число
// topics - массив тем на которых специализируется блоггер
// Класс ожидает один параметр - объект настроек с одноимёнными свойствами.

// Добавь метод getInfo(), который, возвращает строку: User ${почта} is ${возраст} years old and has ${кол-во постов} posts.

// Добавь метод updatePostCount(value), который в параметре value принимает количество постов которые нужно добавить пользователю.

// class User {
//   constructor({ email, age, numberOfPosts, topics } = {}) {
//     this.email = email;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }

//   getInfo() {
//     console.log(
//       `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts`
//     );
//   }
//   updatePostCount(value) {
//     this.numberOfPosts += value;
//   }
// }

// const mango = new User({
//   email: "mango@mail.com",
//   age: 24,
//   numberOfPosts: 20,
//   topics: ["tech", "cooking"],
// });

// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

// const poly = new User({
//   name: "poly@mail.com",
//   age: 19,
//   numberOfPosts: 17,
//   topics: ["sports", "gaming", "health"],
// });
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts

// --------------------------------------------------------------------------------------------

// // Example 2 - Хранилище
// // Напиши класс Storage который создаёт объекты для управления складом товаров.При вызове будет получать один аргумент
// //     - начальный массив товаров, и записывать его в свойство items.

// // Добавь методы класса:

// // getItems() - возвращает массив товаров.
// // addItem(item) - получает новый товар и добавляет его к текущим.
// // removeItem(item) - получает товар и, если он есть, удаляет его из текущих.

// class Storage {
//   static findeElementIndex(frut, item) {
//     return item.indexOf(frut);
//   }

//   constructor([...items] = []) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }
//   addItem(item) {
//     this.items.push(item);
//   }
//   removeItem(item) {
//     const index = Storage.findeElementIndex(item, this.items);
//     return this.items.splice(index, 1);
//   }
// }

// const storage = new Storage(["🍎", "🍋", "🍇", "🍑"]);

// const items = storage.getItems();
// // console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem("🍌");
// // console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem("🍋");
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]

// -----------------------------------------------------------------------------------

// Example 3 - User
// Напиши класс User который создаёт объект со свойствами login и email.Объяви приватные свойства
// #login и #email, доступ к которым сделай через геттер и сеттер login и email.

// class User {
//   #login;
//   #email;

//   constructor({ login, email }) {
//     this.#login = login;
//     this.#email = email;
//   }
//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     this.#email = newEmail;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }
// }

// const mango = new User({
//   login: "Mango",
//   email: "mango@dog.woof",
// });

// console.log(mango.login); // Mango
// mango.login = "Mangodoge";
// console.log(mango.login); // Mangodoge

// const poly = new User({
//   login: "Poly",
//   email: "poly@mail.com",
// });

// console.log(poly.login); // Poly
// poly.login = "Polycutie";
// console.log(poly.login); // Polycutie

// -----------------------------------------------------------
// // Example 4 - Заметки
// // Напиши класс Notes который управляет коллекцией заметок в свойстве items.Заметка это объект со свойствами text и priority.
// // Добавь классу статическое свойство Priority, в котором будет храниться объект с приоритетами.

// class Notes {
//   static Priority = {
//     LOW: "low",
//     NORMAL: "normal",
//     HIGH: "high",
//   };
//   static findNoteByIndex(text, item) {
//     return item.findIndex((note) => note.text === text);
//   }

//   constructor(arr) {
//     this.items = arr;
//   }

//   addNote(note) {
//     this.items.push(note);
//   }
//   removeNote(text) {
//     const index = Notes.findNoteByIndex(text, this.items);
//     this.items.splice(index, 1);
//   }
//   updateNote(text, newPriority) {
//     const index = Notes.findNoteByIndex(text, this.items);
//     this.items[index].priority = newPriority;
//   }
// }

// const myNotes = new Notes([]);

// myNotes.addNote({ text: "Моя первая заметка", priority: Notes.Priority.LOW });
// console.log(myNotes.items);

// myNotes.addNote({
//   text: "Моя вторая заметка",
//   priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);

// myNotes.removeNote("Моя первая заметка");
// console.log(myNotes.items);

// myNotes.updateNote("Моя вторая заметка", Notes.Priority.HIGH);
// console.log(myNotes.items);

// ---------------------------------------------------------------------------------

// Example 5 - Toggle
// Напишите класс Toggle который принимает объект настроек { isOpen: boolean }
// и объявляет одно свойство on - состояние вкл / выкл(true / false).
// По умолчанию значение свойства on должно быть false.

// class Toggle {
//   static ON = true;

//   constructor({ isOpen = false } = {}) {
//     this.on = isOpen;
//   }

//   toggle() {
//     this.on === Toggle.ON ? (this.on = false) : (this.on = Toggle.ON);
//   }
// }

// const firstToggle = new Toggle({ isOpen: true });
// console.group("firstToggle");
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd("firstToggle");

// const secondToggle = new Toggle();
// console.group("secondToggle");
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd("secondToggle");

// -------------------------------------------------------
