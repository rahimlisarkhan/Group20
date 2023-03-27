// var numbersArr = [1, 2, 3, 9, 10];

// var fruits = ["banana", "apple", "pieapple"]; // "banana-apple-pieapple"

// var result = numbersArr.push(7); // [1, 2, 3, 7]
// var result = numbersArr.pop(); // [1, 2]
// var result = numbersArr.shift(); // [2, 3]
// var result = numbersArr.unshift(0); // [0, 1, 2, 3]
// var result = numbersArr.concat(fruits); // ['a', 'b', 'c']
// var result = numbersArr.concat(); // ['a', 'b', 'c']
// var result = fruits.join("-"); // a-b-c
// var result = numbersArr.slice(2, 4); // [3, 9]
// var result = numbersArr.splice(numbersArr.length - 3, 3); // ['b', 'c']
// var result = numbersArr.splice(1, null, "Banana", "Watermaloon"); // ['b', 'c']
// var result = numbersArr.indexOf(3); // 2
// var result = numbersArr.includes(3); // true
// var result = [3, 5, 6, 8].forEach((n) => n * 2); // 6
// var result = [3, 4, 8, 6].map((n) => n * 2); // [6, 8, 16, 12]
// var result = [3, 5, 6, 8].find((n) => n % 2 === 0); // 6
// var result = [2, 4, 3, 5].findIndex((n) => n % 2 !== 0); // 2
// var result = [1, 4, 7, 8].filter((n) => n % 2 === 0); // [4, 8]
// var result = [3, 5, 6, 8].sort((a, b) => a - b); // true
// var result = [2, 4, 3, 7].reduce((acc, cur) => acc + cur); // 16
// var result = [2, 3, 4, 5].every((x) => x < 6); // true
// var result = [3, 5, 6, 8].some((n) => n > 6); // true
// var result = numbersArr.reverse(); // [4, 3, 2, 1]
// var result = numbersArr.at(-1); // 7

// console.log("result", result);
// console.log(numbersArr);

// function goster(element, index, list) {
//   console.log("----");
//   console.log("index", index);
//   console.log("el", element);
//   console.log("list", list);
// }

// arr.forEach(goster);

// var count = 0;

// var result = arr.forEach(function (element, index, list) {
//   //   console.log("----");
//   //   console.log("index", index);
//   //   console.log("el", element);
//   //   console.log("list", list);
//   count += 1;
// });

// var result = arr.map(function (el, i, list) {
//   console.log("el", el);

//   //   if (i == 0) {
//   //     return "Sehf element";
//   //   }

//   return `<div> <p>${el}</p></div>`;
// });

// console.log("result", result);

// var input = "apple ban"; //["apple 5", "ban 3"]

// // var arr = [];

// // for (var el of input.split(" ")) {
// //   var resultString = `${el} ${el.length}`;
// //   arr.push(resultString);
// // }

// function stringOutput(params) {
//   var oldArr = params.split(" ");

//   var r = oldArr.map(function (el) {
//     return `${el} ${el.length}`;
//   });

//   return r;
// }

// console.log(stringOutput(input));

// console.log("arr", arr);

// var num = 23;
// var arr = [2, 3, 4, 32, 5, 12, 17, 8];
// var arr = ["Kenan", "Semendarli", "      ", 32, 6];

// // var result = arr.reduce(function (total, el) {
// //   return total + el;
// // }, 0);

// var result = arr.every(function (el) {
//   if (el.trim()) {
//     return true;
//   }

//   return false;
// });

// var currentAge;

// var result = arr.some(function (el) {
//   console.log("el:", el);

//   if (el > 18) {
//     currentAge = el;

//     return true;
//   }

//   return false;
// });

// console.log("currentAge", currentAge);

// if (result) {
//   console.log("Buyurun baxcaya xos gelmisiz");
// } else {
//   console.log("Get Boyuyun gelsin");
// }

// console.log("result", result);

// var sortArr = [56, 26, 4, 43, 3, 8];

// var result = arr.sort(function (a, b) {
//   console.log("------");
//   console.log(a);
//   console.log(b);

//   if (a > b) {
//     return 1;
//   }

//   return -1;
// });

// console.log(result);

// var result = arr.find(function (el) {
//   if (el === fruit) {
//     return true;
//   }

//   return false;
// });

// var result = arr.filter(function (el, index) {
//   if (index > 3) {
//     return true;
//   }

//   return false;
// });

// var result = arr.findIndex(function (n) {
//   if (n === 23) {
//     return true;
//   }

//   return false;
// });

// var findI = null;

// for (var i in arr) {
//   if (arr[i] === 23) {
//     findI = parseInt(i);
//     break;
//   }
// }

// console.log(findI);

// function checkPassword(password) {
//   var alphabet = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//   ]
//     .join("")
//     .toUpperCase();

//   var passArr = password.split("");

//   var result = passArr.some(function (symbol) {
//     var isCapitalSymbol = alphabet.includes(symbol);

//     if (isCapitalSymbol) {
//       return true;
//     }

//     return false;
//   });

//   return result;
// }

// console.log(checkPassword("seYmur2121%"));
