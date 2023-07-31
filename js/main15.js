// const sam = (a, b) => a + b;
// sam(3, 18);

// class Hero {
//   constructor(name) {
//     this.name = name;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(newName) {
//     this._name = newName;
//   }
// }

// const h = new Hero("Mango");

// --------------импорт и єкспорт без бандлеров-----------------
// const helloMessage = "hello!";
// const goodbyeMessage = "goodbye!";

// export const hello = () => helloMessage;
// export const goodbye = () => goodbyeMessage;
// -----------------------------------------------------------

// const sqrt = Math.sqrt;
// export const square = (x) => x * x;
// export const diag = (x, y) => sqrt(square(x) * square(y));

// --------------Второй способ - это явно указать объект со свойствами для экспорта.--------

// const sqrt = Math.sqrt;
// const square = (x) => x * x;
// const diag = (x, y) => sqrt(square(x) + square(y));

// export { square, diag };

// -------------------Default export-----------------------
// export default class MyClass {}
