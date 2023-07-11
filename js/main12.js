// const container = document.querySelector(".container");

// const targetBtn = document.createElement("button");
// targetBtn.textContent = "Целевая кнопка";
// targetBtn.classList.add("js-target-btn");

// const addListenerBtn = document.createElement("button");
// addListenerBtn.textContent = "Добавить слушатель";
// addListenerBtn.classList.add("js-add-btn");

// const removeListenerBtn = document.createElement("button");
// removeListenerBtn.textContent = "Снять слушатель";
// removeListenerBtn.classList.add("js-remove-btn");

// container.append(targetBtn, addListenerBtn, removeListenerBtn);

// function onTargetBtnClick() {
//   console.log("Клик !");
// }

// addListenerBtn.addEventListener("click", () => {
//   console.log("Добавляю слушатель на цлевую кнопку!");
//   targetBtn.addEventListener("click", onTargetBtnClick);
// });

// removeListenerBtn.addEventListener("click", () => {
//   console.log("Удаляю слушатель событий!");
//   targetBtn.removeEventListener("click", onTargetBtnClick);
// });

// ----------------Событие сабмита формы ---------------------

// const formEl = document.querySelector(".js-register-form");

// formEl.addEventListener("submit", onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();

//   const formData = new FormData(event.currentTarget);
//   console.log(formData);

//   formData.forEach((value, name) => {
//     console.log(value);
//     console.log(name);
//   });
// }

// ------------------Свойства key и code----------------------------

// const clearLogBtn = document.querySelector('[data-action="clear"]');
// const logList = document.querySelector(".log-list");
// let keypressCounter = 1;

// document.addEventListener("keydown", logMessage);
// document.addEventListener("keyup", logMessage);
// clearLogBtn.addEventListener("click", reset);

// function logMessage({ type, key, code }) {
//   const markup = `<div class="log-item">
//     <span class="chip">${keypressCounter}</span>
//     <ul>
//       <li><b>Event</b>: ${type}</li>
//       <li><b>Key</b>: ${key}</li>
//       <li><b>Code</b>: ${code}</li>
//     </ul>
//   </div>`;

//   logList.insertAdjacentHTML("afterbegin", markup);

//   if (type === "keyup") {
//     incrementKeypressCounter();
//   }
// }

// function reset() {
//   keypressCounter = 1;
//   logList.innerHTML = "";
// }

// function incrementKeypressCounter() {
//   keypressCounter += 1;
// }

// ----------------------------Событие submit----------------------

// const form = document.querySelector(".form");

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { login, password },
//   } = event.currentTarget;
//   console.log(event.currentTarget.elements);
//   if (login.value === "" || password.value === "") {
//     return console.log("Please fill in all the fields!");
//   }

//   console.log(`Login: ${login.value}, Password: ${password.value}`);
//   event.currentTarget.reset();
// }

// const formData = new FormData(form.currentTarget);
// console.log(formData);
// formData.forEach((x, y) => {
//   console.log(x, y);
// });

// ----------------------------------------------------------

// const select = document.querySelector(".pizza-select");
// const textOutput = document.querySelector(".text-output");
// const valueOutput = document.querySelector(".value-output");

// setOutput();

// select.addEventListener("change", setOutput);

// function setOutput() {
//   const selectedOptionValue = select.value;
//   const selectedOptionIndex = select.selectedIndex;
//   const selectedOptionText = select.options[selectedOptionIndex].text;

//   console.log(select.options[3].text);

//   textOutput.textContent = selectedOptionText;
//   valueOutput.textContent = selectedOptionValue;
// }

// -----------------События focus и blur--------------------------------

// const textInput = document.querySelector(".text-input");
// const setFocusBtn = document.querySelector('[data-action="set"]');
// const removeFocusBtn = document.querySelector('[data-action="remove"]');

// setFocusBtn.addEventListener("click", () => {
//   textInput.focus();
// });

// removeFocusBtn.addEventListener("click", () => {
//   textInput.blur();
// });

// textInput.addEventListener("focus", () => {
//   textInput.value = "This input has focus";
// });

// textInput.addEventListener("blur", () => {
//   textInput.value = "";
// });

// -----------------------------Подключение модалки-------------------------------------

// const refs = {
//   form: document.querySelector("form"),
//   modalBtn: document.querySelector(".modal-btn"),
//   modal: document.querySelector(".modal"),
//   modalClousBtn: document.querySelector(".modal-clous-btn"),
//   modalBox: document.querySelector(".modal-box"),
//   modal: document.querySelector(".modal"),
//   submitBtn: document.querySelector(".modal-submit-btn"),
// };

// refs.modalBtn.addEventListener("click", openModal);
// refs.modalClousBtn.addEventListener("click", openModal);
// refs.modal.addEventListener("click", openModal);
// refs.form.addEventListener("submit", submitForm);

// document.addEventListener("keydown", ({ code }) => {
//   if (code === "Escape" && !refs.modal.classList.contains("is-hidden")) {
//     openModal();
//   }
// });

// function openModal() {
//   refs.modal.classList.toggle("is-hidden");
//   refs.modalBox.classList.toggle("is-hidden");
// }

// function submitForm(event) {
//   event.preventDefault();
//   event.currentTarget.reset();
// }
