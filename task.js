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

function countDigits(str) {
  return [...str].filter((char) => char >= "0" && char <= "9").length;
}

console.log(countDigits("ad2a54y79wet0sfgb9"));
