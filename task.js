// Task

//split("") + filter()

// function countLetter(harf, jumla) {
//   return jumla.split("").filter((a) => a === harf).length;
// }

// console.log(countLetter("e", "engineer"));

//spread(...) + filter()

function countLetter(harf, jumla) {
  return [...jumla].filter((a) => a === harf).length;
}

console.log(countLetter("e", "engineer"));
