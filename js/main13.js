// --------------ПОДОЙДЕТ ДЛЯ ОПРОСНИКА--------------------

// const tegsContainer = document.querySelector(".list");

// let selectadTag = null;

// tegsContainer.addEventListener("click", ontagsContainerClick);

// function ontagsContainerClick(e) {
//   if (e.target.nodeName !== "BUTTON") {
//     return;
//   }

//   const activBtn = document.querySelector(".activ");

//   if (activBtn) {
//     activBtn.classList.remove("activ");
//   }

//   e.target.classList.add("activ");
//   selectadTag = e.target.dataset.value;
//   console.log(selectadTag);
// }

// ----------------------------2 вариант----------------------\

// const tegsContainer = document.querySelector(".list");

// const selectadTag = new Set();

// tegsContainer.addEventListener("click", ontagsContainerClick);

// function ontagsContainerClick(e) {
//   if (e.target.nodeName !== "BUTTON") {
//     return;
//   }

//   const btn = e.target;
//   const isActivBtn = btn.classList.contains("activ");

//   if (isActivBtn) {
//     selectadTag.delete(e.target.dataset.value);
//   } else {
//     selectadTag.add(e.target.dataset.value);
//   }

//   btn.classList.toggle("activ");

//   console.log(selectadTag);
// }

// ----------------------------color picer-----------------
// const colors = [
//   { hex: "#ffeb3b", rgb: "255.235.59" },
//   { hex: "#ff9800", rgb: "255.152.0" },
//   { hex: "#795548", rgb: "121.85.72" },
//   { hex: "#6f7d8b", rgb: "96.125.139" },
//   { hex: "#607d8b", rgb: "96.125.1" },
//   { hex: "#606d8b", rgb: "96.12.139" },
// ];

// const colorPicerBox = document.querySelector(".color-picer-box");
// const ColorCardMarcap = criateColorCardMarcap(colors);

// colorPicerBox.insertAdjacentHTML("afterbegin", ColorCardMarcap);

// colorPicerBox.addEventListener("click", chengeBgColor);

// function criateColorCardMarcap(colors) {
//   return colors
//     .map(({ hex, rgb }) => {
//       return `<div class="color-card">
//    <div
//    class="color-swatch"
//    data-hex="${hex}"
//    data-rgb="${rgb}"
//    style=" background-color:${hex}">
//    </div>
//    <div class="color-meta">
//    <p>HEX: ${hex} </p>
//    <p>RGB: ${rgb} </p>
//    </div>
//    </div>`;
//     })
//     .join("");
// }

// function chengeBgColor(e) {
//   const colorPicer = e.target.classList.contains("color-swatch");

//   if (!colorPicer) {
//     return;
//   }

//   chengeBodyColor(e.target.dataset.hex);

//   removeClassActiv();

//   animationColorCard(e.target);
// }

// function chengeBodyColor(color) {
//   document.body.style.backgroundColor = color;
// }

// function animationColorCard(card) {
//   const perentColorCard = card.closest(".color-card");

//   perentColorCard.classList.toggle("is-active");
// }

// function removeClassActiv() {
//   const activCard = document.querySelector(".color-card.is-active");

//   if (activCard) {
//     activCard.classList.remove("is-active");
//   }
// }

// -----------------------Калькулятор стоимости продукта-----------------------\

// const container = document.querySelector(".container");
// const marcumCalculater = criateMarcumCalculater();
// container.insertAdjacentHTML("afterbegin", marcumCalculater);

// const form = document.querySelector("#form");
// const calculatorRange = document.querySelector("#quantity");
// const weight = document.querySelector(".amount");
// const inputTextPrice = document.querySelector("#price");
// const totalPrice = document.querySelector(".text-right");

// form.addEventListener("change", showsSelectedWeight);

// function criateMarcumCalculater() {
//   return ` <h2 class="title">Скільки коштуе мясо на шашлики?</h2>
//         <form action="#" class="form" id="form">
//             <label for="price">Ціна грн</label>
//             <input type="text" name="price" id="price" value="50">

//             <label for="quantity">Кількість<span class="amount" id="amount">1</span>кг</label>
//             <input type="range" name="quantity" id="quantity" min="1" max="20" value="1">
//         </form>
//         <p class="text-right total" id="total"></p>`;
// }

// const data = {
//   price: 0,
//   quantity: 0,

//   chengeInputPriceTect() {
//     return (this.price * this.quantity).toFixed(2);
//   },
// };

// dataFill();
// showsTotalPrice();

// function showsSelectedWeight({ target }) {
//   const { value } = target;
//   target.setAttribute("value", value);

//   if (target === calculatorRange) {
//     weight.textContent = value;
//   }

//   dataFill();
//   showsTotalPrice();
// }

// function dataFill() {
//   data.price = inputTextPrice.getAttribute("value");
//   data.quantity = calculatorRange.getAttribute("value");
// }

// function showsTotalPrice() {
//   totalPrice.textContent = data.chengeInputPriceTect() + "грн";
// }
