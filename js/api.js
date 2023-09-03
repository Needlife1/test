// const URL = "https://64f0b29f8a8b66ecf77a068e.mockapi.io/api/todos/";

// function saveTask(taskObj) {
//   console.log("POST");
//   // const options = {
//   //   method: "POST",
//   //   body: JSON.stringify(taskObj),
//   //   headers: {
//   //     "Content-Tipe": "application/json",
//   //   },
//   // };
//   // return fetch(URL, options).catch(console.log);

//   return axios.post(URL, taskObj);
// }

// function loadTasks() {
//   console.log("GET");
//   // return fetch(URL)
//   //   .then((data) => data.json())
//   //   .catch(console.log);

//   return axios
//     .get(URL)
//     .then(({ data }) => data)
//     .catch(console.log);
// }

// function deleteTask(id) {
//   console.log("DELETE");
//   // fetch(`${URL}/${id}`, {
//   //   method: "DELETE",
//   // }).catch(console.log);
//   return axios.delete(`${URL}/${id}`).catch(console.log);
// }

// function updateTask(id, status) {
//   console.log("PUT");
//   // const options = {
//   //   method: "PUT",
//   //   body: JSON.stringify({ isDone: status }),
//   //   headers: {
//   //     "Content-Tipe": "application/json",
//   //   },
//   // };
//   // return fetch(`${URL}/${id}`, options).catch(console.log);
//   return axios.put(`${URL}/${id}`, { isDone: status }).catch(console.log);
// }

// export { saveTask, loadTasks, deleteTask, updateTask };
