var numbersArr = [1, 2, 3, 9];

var fruits = ["banana", "apple", "pieapple"]; // "banana-apple-pieapple"

// var result = numbersArr.push(7); // [1, 2, 3, 7]
// var result = numbersArr.pop(); // [1, 2]
// var result = numbersArr.shift(); // [2, 3]
// var result = numbersArr.unshift(0); // [0, 1, 2, 3]
// var result = numbersArr.concat(fruits); // ['a', 'b', 'c']
// var result = numbersArr.concat(); // ['a', 'b', 'c']
// var result = fruits.join("/"); // a-b-c
var result = ["a", "b", "c"].slice(1); // ['b', 'c']
var result = ["a", "b", "c"].splice(1, 1); // ['b', 'c']
var result = ["a", "b", "c"].indexOf("b"); // 1
// var result = ["a", "b", "c"].includes("c"); // true
// // var result = [3, 5, 6, 8].find((n) => n % 2 === 0); // 6
// // var result = [2, 4, 3, 5].findIndex((n) => n % 2 !== 0); // 2
// // var result = [3, 4, 8, 6].map((n) => n * 2); // [6, 8, 16, 12]
// // var result = [1, 4, 7, 8].filter((n) => n % 2 === 0); // [4, 8]
// // var result = [2, 4, 3, 7].reduce((acc, cur) => acc + cur); // 16
// // var result = [2, 3, 4, 5].every((x) => x < 6); // true
// // var result = [3, 5, 6, 8].some((n) => n > 6); // true
var result = numbersArr.reverse(); // [4, 3, 2, 1]
var result = numbersArr.at(-2); // 7

console.log("result", result);
console.log(numbersArr);
