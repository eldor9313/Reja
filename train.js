// console.log("Jack Ma maslahatlari");
// const list = [
//   "yaxshi talaba bo'ling", // 0-20
//   "togri boshliq tanlang va koproq hato qiling", // 20-30
//   "ozingizga ishlashingizni boshlang", // 30-40
//   "siz kuchli bo'lgan narsalarni qiling", //  40-50
//   "yoshlarga investitsiya qiling", // 50-60
//   "endi dam oling, foydasi yo'q endi", // 60
// ];

// CALLBACK =>

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setTimeout(function () {
//       callback(null, list[5]);
//     }, 5000);
//   }
// }

// console.log("passed here 0");
// maslahatBering(65, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("javob:", data);
//   }
// });
// console.log("passed here 1");

// ASYNC function
// ayncronus function => syncronus functionlar to'liq ishga tushgandan so'ng
//  async function natijalari bilan node.js ishlay boshlaydi
// bu single threadimizni umuman band qilmaydigan function

// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(list[5]);
//       }, 5000);
//     });
//   }
// }

// call via than.catch
// console.log("passed here 0");
// maslahatBering(65)
//   .then((data) => {
//     console.log("javob:", data);s
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });
// console.log("passed here 1");

// call via asyn - await
// async function run() {
//   let javob = await maslahatBering(25);
//   console.log(javob);
//   javob = await maslahatBering(70);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }

// run();

// TASK  ( C )
// const moment = require("moment");

// class Shop {
//   constructor(non, lagmon, cola) {
//     this.non = non;
//     this.lagmon = lagmon;
//     this.cola = cola;
//   }

//   mavjud() {
//     const time = moment().format("HH:mm:ss");
//     console.log(
//       `Soat ${time} da ${this.non} ta non, ${this.lagmon} ta lagmon va ${this.cola} ta cola mavjud!`
//     );
//   }

//   sotish(a, b) {
//     if (this[a] >= b) {
//       this[a] -= b;
//       console.log(`${b} ta ${a} sotildi.`);
//     } else {
//       console.log(`Yetarli ${a} yo'q!`);
//     }
//   }

//   qabul(a, b) {
//     this[a] += b;
//     console.log(`${b} ta ${a} qabul qilindi.`);
//   }
// }

// const shop = new Shop(4, 5, 2);

// shop.mavjud();
// shop.sotish("non", 3);
// shop.qabul("cola", 4);
// setTimeout(() => {
//   shop.mavjud();
// }, 4000);

// TASK D
// ... spread operatorda stringni harflarga ajratib, sort() orqali alifbo bo'yicha tartiblaymiz
// va join() bilan string holatda birlashtirib === taqqoslaymiz.
function checkContent(eldor, toby) {
  return [...eldor].sort().join("") === [...toby].sort().join("");
}

console.log(checkContent("mitgroup", "gmtiprou"));
console.log(checkContent("mit26", "52tim"));
