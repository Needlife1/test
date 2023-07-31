// ------------ФИЛЬТЕР ДЛЯ ПОИСКОВИКА-----------------

// const tech = [
//   { label: "HTML" },
//   { label: "CSS" },
//   { label: "JS" },
//   { label: "Node.js" },
//   { label: "React" },
//   { label: "Piton" },
// ];

// const ref = {
//   jsInput: document.querySelector(".js-input"),
//   jsList: document.querySelector(".js-list"),
// };

// ref.jsInput.addEventListener("input", _.debounce(onFilterChenge, 300));

// const techMarkup = makeMarkupTech(tech);

// function makeMarkupTech(tech) {
//   return tech
//     .map((elm) => {
//       return `<li>${elm.label}</li>`;
//     })
//     .join("");
// }

// ref.jsList.insertAdjacentHTML("afterbegin", techMarkup);

// function onFilterChenge(e) {
//   const filter = e.currentTarget.value.toLowerCase();

//   const filteredItems = tech.filter((t) =>
//     t.label.toLowerCase().includes(filter)
//   );

//   const listItemMarcup = makeMarkupTech(filteredItems);
//   ref.jsList.innerHTML = listItemMarcup;
// }

// ---------------------------throttle------------------------------

// const refs = {
//   standartScrol: document.getElementById("standartScrol"),
//   throttleScrol: document.getElementById("throttleScrol"),
//   standartResize: document.getElementById("standartResize"),
//   throttleResize: document.getElementById("throttleResize"),
// };

// const eventScrol = {
//   standart: 0,
//   throttle: 0,
// };

// document.addEventListener("scroll", () => {
//   eventScrol.standart += 1;

//   refs.standartScrol.textContent = eventScrol.standart;
// });

// document.addEventListener(
//   "scroll",
//   _.throttle(() => {
//     eventScrol.throttle += 1;

//     refs.throttleScrol.textContent = eventScrol.throttle;
//   }, 300)
// );
// // --
// const eventResizeCounter = {
//   standart: 0,
//   throttle: 0,
// };

// window.addEventListener("resize", () => {
//   eventResizeCounter.standart += 1;

//   refs.standartResize.textContent = eventResizeCounter.standart;
// });

// window.addEventListener(
//   "resize",
//   _.throttle(() => {
//     eventResizeCounter.throttle += 1;

//     refs.throttleResize.textContent = eventResizeCounter.throttle;
//   }, 300)
// );

// <!-- -------------------------debounce----------------- -->

// const inputName = document.querySelector("#enterName");

// inputName.addEventListener(
//   "input",
//   _.debounce(functionСallСontrol, 300, { leading: true })
// );

// function functionСallСontrol(e) {
//   console.log(e.target.value);
// }

// --------------------------Проверка на колю введеных символов в инпуте формы---------------------------------

// const form = document.getElementById("form");
// const enterName = document.getElementById("enterName");
// const enterPassword = document.getElementById("enterPassword");

// const classes = {
//   wrong: "wrong",
//   correct: "correct",
// };

// form.addEventListener(
//   "input",
//   _.debounce(({ target }) => {
//     if (target.value.length <= 3 || target.value.length >= 10) {
//       target.classList.add(classes.wrong);
//       target.classList.remove(classes.correct);
//     } else {
//       target.classList.remove(classes.wrong);
//       target.classList.add(classes.correct);
//     }
//     console.log(target.value);
//   }, 1000)
// );

// ---------------------------шляпа------------

// const arr = [84, "f", 434, "o", 22, 90, "P", 11];
// const literFiltred = arr.filter((el) => typeof el !== "number");

// const litterserr = literFiltred.reduce((acc, el) => {
//   return (acc += el.toLowerCase());
// }, "");
// console.log(litterserr);

// -----------------------------------------------
// const obj = {
//   name: "Alex",
//   eyes: "green",
// };

// function foo(msg) {
//   console.log(this);
//   console.log(`${this.name} has ${this.eyes} eyse color`);
//   console.log(msg);
// }

// foo.call(obj, "Hello, world");
// foo.apply(obj, ["Hello, world"]);

// ------------------Сброс формы Reset()--------------------------

// const form = document.getElementById("form");
// console.log(form);

// form.addEventListener("submit", resetForm);

// function resetForm(e) {
//   e.preventDefault();
//   form.reset();
// }

// -----------------Делегирование--------------------------

// const form = document.getElementById("form");

// form.addEventListener("click", ev);

// function ev(e) {
//   console.log(e.currentTarget);

//   console.log(e.target);
// }
