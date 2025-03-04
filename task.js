// TASK ( A )

//split("") + filter()

// function countLetter(harf, jumla) {
//   return jumla.split("").filter((a) => a === harf).length;
// }

// console.log(countLetter("e", "engineer"));

//spread(...) + filter()

// function countLetter(harf, jumla) {
//   return [...jumla].filter((a) => a === harf).length;
// }

// console.log(countLetter("e", "engineer"));

// TASK  ( B )

// function countDigits(mit) {
//   let count = 0;
//   for (let idx = 0; idx < mit.length; idx++) {
//     if (mit[idx] >= "0" && mit[idx] <= "9") {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countDigits("ad2a54y79wet0sfgb9"));

// function countDigits(str) {
//   return [...str].filter((char) => char >= "0" && char <= "9").length;
// }

// console.log(countDigits("ad2a54y79wet0sfgb9"));

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
//     if (a === "non" && this.non >= b) {
//       this.non -= b;
//       console.log(`${b} ta non sotildi.`);
//     } else if (a === "lagmon" && this.lagmon >= b) {
//       this.lagmon -= b;
//       console.log(`${b} ta lagmon sotildi.`);
//     } else if (a === "cola" && this.cola >= b) {
//       this.cola -= b;
//       console.log(`${b} ta cola sotildi.`);
//     } else {
//       console.log(`Yetarli ${a} yo'q!`);
//     }
//   }

//   qabul(a, b) {
//     if (a === "non") {
//       this.non += b;
//       console.log(`${b} ta non qabul qilindi.`);
//     } else if (a === "lagmon") {
//       this.lagmon += b;
//       console.log(`${b} ta lagmon qabul qilindi.`);
//     } else if (a === "cola") {
//       this.cola += b;
//       console.log(`${b} ta cola qabul qilindi.`);
//     }
//   }
// }

// const shop = new Shop(4, 5, 2);

// shop.mavjud();
// shop.sotish("non", 3);
// shop.qabul("cola", 4);
// setTimeout(() => {
//   shop.mavjud();
// }, 5000);

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
// }, 5000);
