// ----------------------1---------------------
// console.log(document);

// const body = document.body;
// console.log(body);

// const list = body.firstElementChild;
// console.log(list);

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const listItems = list.children;
// console.log(listItems);

// --------------------------------2-------------------------

// const listWithId = document.querySelector("#menu");
// listWithId.style.textTransform = "uppercase";
// listWithId.style.fontSize = "24px";
// console.log(listWithId);

// const listWithClass = document.querySelector(".menu");
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll("li");
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll(".menu-item");
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = "tomato";
// console.log(firstMenuItem);

// --------------------------------------3---------------------------

// //===================================================
// const message = document.querySelector("#message");
// console.log(message.value); // Default textarea message

// //===================================================
// const activeLink = document.querySelector(".btn.active");
// console.log(activeLink.href); // https://s.codepen.io/about

// //===================================================
// const image = document.querySelector(".image");
// console.log(image.src); // https://placeimg.com/640/480/animals
// image.src = "https://placeimg.com/640/480/tech";

// ---------------------------------4------------------------------

// const list = document.querySelector(".usernames");

// // Adds an item to the end of the list
// const lastItem = document.createElement("li");
// lastItem.textContent = "Poly";
// list.append(lastItem);

// // Adds an item to the beginning of the list
// const firstItem = document.createElement("li");
// firstItem.textContent = "Ajax";
// list.prepend(firstItem);

// // Adds a title before the list
// const title = document.createElement("h2");
// title.textContent = "USERNAMES";
// list.before(title);

// // Adds a paragraph after the list
// const text = document.createElement("p");
// text.textContent =
//   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi!";
// list.after(text);

// -----------------------------5-------------------------------

// const article = document.querySelector(".article");
// console.log(article.innerHTML);

// const title = document.querySelector(".article .title");
// console.log(title.innerHTML);

// const text = document.querySelector(".article .text");
// console.log(text.innerHTML);

// const link = document.querySelector(".article .link");
// console.log(link.innerHTML);

// -------------------------------5----Шаблонная разметка---------

// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector(".list");

// const markup = technologies
//   .map((technology) => `<li class="list-item">${technology}</li>`)
//   .join("");

// // Check the console, you'll see a single string with HTML tags
// console.log(markup);

// // Adding all the markup in one operation
// list.innerHTML = markup;

// -----------------.createElement----------------------------

// const titel = document.createElement("h1");
// titel.textContent = "Как я встретил вашу маму";
// titel.classList.add("barny");
// console.log(titel);

// document.body.appendChild(titel);

// ---------------------------appendChild()------------------

// const li = document.createElement("li");
// const a = document.createElement("a");
// a.textContent = "Посмотри на меня !!!!!!!!!!!!!!!!!!!";
// console.log(li);

// li.append(a);

// const ul = document.querySelector("ul");

// ul.append(li);
// ul.prepend(li);
// // ===================insertBefore()=========================
// ul.insertBefore(li, ul.children[4]);
// // ==========================================================
// console.log(ul);

// ---------------Создание колекции элементов-------------------

// const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 3 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 200, quantity: 2 },
// ];

// const stonesPickerContainer = document.querySelector(".js-stones-picker");

// const makeStounPickerOption = (stoun) => {
//   return stoun.map((stone) => {
//     const btnEl = document.createElement("button");
//     btnEl.textContent = stone.name;
//     btnEl.classList.add("stones-picker_options");
//     return btnEl;
//   });
// };

// const element = makeStounPickerOption(stones);

// console.log(element);

// stonesPickerContainer.append(...element);

// --------------------------------------------------------------

// const productBox = document.querySelector(".js-product-box");

// const productEl = document.createElement("article");
// productEl.classList.add("product");

// const titelEl = document.createElement("h2");
// titelEl.textContent = "Товар";
// titelEl.classList.add("product_name");

// const descrEl = document.createElement("p");
// descrEl.classList.add("product_descr");
// descrEl.textContent = "Описание";

// const priceEl = document.createElement("p");
// priceEl.classList.add("product_price");
// priceEl.textContent = "Цена";

// productEl.append(titelEl, descrEl, priceEl);
// console.log(productEl);

// const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 3 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 200, quantity: 2 },
// ];

// const maickProductCart = ({ name, price, quantity }) => {
//   const productEl = document.createElement("article");
//   productEl.classList.add("product");

//   const titelEl = document.createElement("h2");
//   titelEl.textContent = `Этот камеень ${name}!`;
//   titelEl.classList.add("product_name");

//   const quantityEl = document.createElement("p");
//   quantityEl.classList.add("product_descr");
//   quantityEl.textContent = `В наличии ${quantity} шт.`;

//   const priceEl = document.createElement("p");
//   priceEl.classList.add("product_price");
//   priceEl.textContent = `Фктуальная цена ${price}`;

//   productEl.append(titelEl, quantityEl, priceEl);
//   return productEl;
// };

// const elements = stones.map(maickProductCart);

// const productBoxEl = document.querySelector(".js-product-box");

// productBoxEl.append(...elements);

// console.log(productBoxEl);

// -------------------------------------------------------------------------

const technologys = ["css", "html", "js", "react", "node"];

// const divEl = document.querySelector(".js-product-box");
// console.log(divEl);
// const listEl = document.createElement("ul");
// console.log(listEl);

// const criateItem = technologys.map((el) => {
//   const liEl = document.createElement("li");
//   liEl.textContent = el;

//   return liEl;
// });

// divEl.append(...criateItem);

// -----------При помоши inserdAdjecentHTML()----------------

// const divEl = document.querySelector(".js-product-box");

// const markup = technologys
//   .map((technology) => {
//     return `<li>${technology}</li>`;
//   })
//   .join("");

// divEl.insertAdjacentHTML("afterbegin", `<ul>${markup}</ul>`);

// ---------------------------------------------------------------------

// const colors = [
//   {
//     label: "red",
//     color: "#FF0000",
//   },
//   {
//     label: "green",
//     color: "#00FF00",
//   },
//   {
//     label: "blue",
//     color: "#0000FF",
//   },
//   {
//     label: "yellow",
//     color: "#FFFF00",
//   },
// ];

// const divEl = document.querySelector(".js-product-box");

// const buttonMarkup = colors.map((element) => {
//   const buttonEl = document.createElement("button");
//   buttonEl.textContent = element.label;
//   buttonEl.style.backgroundColor = element.color;
//   return buttonEl;
// });

// console.log(buttonMarkup);
// divEl.append(...buttonMarkup);

// --------------------Через forEach--------------------------------
// const divEl = document.querySelector(".js-product-box");
// divEl.style.display = "flex";
// divEl.style.gap = "10px";

// const buttonMarcup = colors.forEach(({ label, color }) => {
//   const btn = document.createElement("button");
//   btn.textContent = label;
//   btn.style.backgroundColor = color;

//   btn.classList.add("pukalka");
//   divEl.appendChild(btn);
// });
