// --------------импорт и єкспорт без бандлеров-----------------
// import { hello, goodbye } from "./main15.js";

// console.log(hello()); // "hello!"
// console.log(goodbye()); // "goodbye!"

// -----------------------------------------------------------
// import { square, diag } from "./main15.js";
// console.log(square(11));
// console.log(diag(4, 3));

// --------------Второй способ - это явно указать объект со свойствами для экспорта.--------

// import { square, diag } from "./main15.js";
// console.log(square(11));
// console.log(diag(4, 3));

// --------Следующий синтаксис импортирует все экспорты модуля как объект с
// указанным именем.Это называется namespace import.-------------

// import * as myModule from "./main15.js";

// console.log(myModule.square(11)); // 121
// console.log(myModule.diag(4, 3)); // 5

// -------------------Default export-----------------------
// import MyClass from "./main15.js";
// const inst = new MyClass();
// console.log(inst);

// --------------------c lodash библиотекой----------------------------------------

// import lodash from "lodash";
// console.log(lodash.sum([1, 3, 5, 8]));

// ------------------------валидатор форм----------------------

// const validator = require("validator");

// const validateEmail = (email) => {
//   return validator.isEmail(email);
// };

// console.log(
//   "Is mango@mail.com a valid email?: ",
//   validateEmail("mango@mail.com")
// );

// console.log(
//   "Is Mangozedog.com a valid email?: ",
//   validateEmail("Mangozedog.com")
// );
