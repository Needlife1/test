// const pocemon = document.querySelector(".pocemon");
// const form = document.querySelector(".js-form");

// const { log } = require("handlebars");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const pokemonId = form.elements.id.value;

//   fetchPocemon(pokemonId)
//     .then(renderPocemonCard)
//     .catch(onFatchArror)
//     .finally(() => form.reset());
// });

// function fetchPocemon(pocemonId) {
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${pocemonId}`).then(
//     (response) => {
//       return response.json();
//     }
//   );
// }

// function renderPocemonCard(pokemon) {
//   const { sprites, name, weight, height } = pokemon;
//   const markup = `<div class="card">
//       <div class="card-img-top">
//         <img src="${sprites.front_default}" alt="${name}" />
//       </div>
//       <div class="card-body">
//         <h2 class="card-titel">Имя:${name}</h2>
//         <p class="card-text">Вес:${weight}</p>
//         <p class="card-text">Рост:${height}</p>
//       </div>
//     </div>`;
//   pocemon.innerHTML = markup;
// }

// function onFatchArror(error) {
//   alert("Упс, чтото пошло не так !! =(");
// }

// ------------------------------------------------------
