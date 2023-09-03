// import { saveTask, loadTasks, deleteTask, updateTask } from "./api.js";

// let currentId = 1;

// const myInput = document.querySelector("#myInput");

// function fillTasksList() {
//   loadTasks()
//     .then((tasks) => {
//       tasks.forEach(({ text, isDone, id }) => createLi(text, isDone, id));
//       return tasks;
//     })
//     .then((tasks) => {
//       currentId = tasks.langth !== 0 ? tasks[tasks.length - 1].id + 1 : 1;
//     });
// }

// function addNewTask() {
//   const inputValue = myInput.value.trim();
//   if (inputValue === "") {
//     alert("You must write something!");
//     return;
//   }

//   createLi(inputValue);
//   myInput.value = "";
//   addTaskToDB(inputValue);
// }

// function createLi(text, isDone = false, id = currentId) {
//   const liEl = document.createElement("li");
//   const liText = document.createTextNode(text);
//   liEl.appendChild(liText);
//   liEl.dataset.id = id;
//   if (isDone) liEl.classList.add("checked");
//   myUL.appendChild(liEl);
//   addCross(liEl);
// }

// function handeleTaskBehaviour({ target }) {
//   if (target.tagName === "LI") {
//     target.classList.toggle("checked");
//     updateTask(target.dataset.id, target.classList.contains("checked"));
//     updateTask({
//       id: +target.dataset.id,
//       status: target.classList.contains("checked"),
//     });
//   } else if (target.classList.contains("close")) {
//     target.parentNode.remove();
//     deleteTask(target.parentNode.dataset.id);
//   }
// }

// function addCross(target) {
//   const span = document.createElement("SPAN");
//   const txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   target.appendChild(span);
// }

// function createTaskObject(text, isDone) {
//   return {
//     text,
//     isDone,
//   };
// }

// function addTaskToDB(text, isDone = false) {
//   saveTask(createTaskObject(text, isDone));
//   currentId += 1;
// }

// export { addNewTask, handeleTaskBehaviour, fillTasksList };
