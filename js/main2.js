// const stars = 3;
// let price;
// switch (stars) {
//   case 1:
//     price = "20$";
//     console.log("20$");
//     break;
//   case 2:
//     price = "40$";
//     console.log("40$");
//     break;
//   case 3:
//     price = "60$";
//     console.log("60$");
//     break;
//   default:
//     console.log("Такого типа звезд нет !");
// }

// const stars = 6;
// let price;

// switch (stars) {
//   case 1:
//   case 2:
//     price = "20$";
//     console.log(price);
//     break;

//   case 3:
//   case 4:
//     price = "40$";
//     console.log(price);
//     break;

//   case 5:
//     price = "60$";
//     console.log(price);
//     break;

//   default:
//     console.log("Отели закончелись !");
// }

// const stars = 4;
// let price;

// if (stars === 1 || stars === 2) {
//   price = "20$";
// } else if (stars === 3 || stars === 4) {
//   price = "40$";
// } else if (stars === 5) {
//   price = "60$";
// } else {
//   price = "Много хочешь мудак !!";
// }
// console.log(price);

// for (let i = 5; i < 10; i += 1) {
//   console.log(i);
// }
// console.log("Все!");

// 1.Указать перемнніе
// 2.делаем цікл
// 3.при віполнении цікла зарпалата +
// 4.консолить

// const imploees = 5;
// let totalSalary = 0;
// const maxSalary = 5000;
// const minSalary = 500;

// for (let i = 1; i <= imploees; i += 1) {
//   const salary = Math.round(
//     Math.random() * (maxSalary - minSalary) + minSalary
//   );

//   console.log(`ЗП работника номер ${i}: ${salary}`);

//   totalSalary += salary;
// }
// console.log(`Общая ЗП ${totalSalary}`);

// 1.Делаем цыкл который ходит по диапазону чисел
//2. опридиляет четные числа
// 3. плюсует их вместе

// const min = 4;
// const max = 14;
// let total = 0;
// -----------1ВАРИАНТ-------------------------------------
// for (let i = min; i <= max; i += 1) {
//   if (i % 2 === 0) {
//     total += i;
//   }
// }
// console.log(total);
// ---------------------2ВАРИАНТ(через CONTINUE БОЛИЕ ПРАВЕЛЬНО)---------------------
// for (let i = min; i <= max; i += 1) {
//   if (i % 2 !== 0) {
//     console.log("Не четные", i);
//     continue;
//   }
//   console.log("Четные числа:", i);
//   total += i;
// }
// console.log("Сумма четных чисел:", total);

// -------------------------------------------------------------------------------------\
// let balance = 10000;
// const paymant = 2000;

// if (paymant <= balance) {
//   console.log(
//     `Общая стоимость заказа ${paymant} кредитов. Поверяем кол-во кредитов у вас на карте.`
//   );
//   balance -= paymant;
//   console.log(`На счету осталось ${balance} кредитов`);
// } else {
//   console.log("На счету не достаточный баланс кредитов !");
// }
// console.log("Операция завершина.");
// ----------------------------------------------------------------------------------------

// let totalSpend = 4900;
// let payment = 500;
// let discount = 0;

// if (totalSpend >= 100 && totalSpend < 1000) {
//   discount = 0.02;
// } else if (totalSpend >= 1000 && totalSpend < 5000) {
//   discount = 0.05;
// } else if (totalSpend >= 5000) {
//   discount = 0.1;
// } else {
//   console.log(`У вас еше нет партнерской скидки !.`);
// }

// payment -= payment * discount;

// console.log(
//   `Оформляем заказ на сумму ${payment} со скидкой ${discount * 100} %.`
// );

// totalSpend += payment;

// console.log(` Обшая потрачиная сумма ${totalSpend}.`);
