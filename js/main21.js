// const BASE_URl = "http://localhost:3000";

// function obdateBookById(abdeit, bookId) {
//   const options = {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json; charset=UTF-8",
//     },
//     body: JSON.stringify(abdeit),
//   };

//   return fetch(`${BASE_URl}/books/${bookId}`, options).then((res) =>
//     res.json()
//   );
// }

// obdateBookById(
//   {
//     title: "Kukold",
//     author: "Viktorya Vaginella",
//     rating: 9,
//   },
//   1
// );

// function removeBook(bookId) {
//   const options = {
//     method: "DELETE",
//   };
//   return fetch(`${BASE_URl}/books/${bookId}`, options).then((respons) =>
//     respons.json()
//   );
// }
// --------------------------------+api and functions----------------------------------------

// import {
//   addNewTask,
//   handeleTaskBehaviour,
//   fillTasksList,
// } from "./functions.js";

// const addBtn = document.querySelector(".addBtn");
// const myUL = document.querySelector("#myUL");

// addBtn.addEventListener("click", addNewTask);
// myUL.addEventListener("click", handeleTaskBehaviour);
// window.addEventListener("DOMContentLoaded", fillTasksList);
