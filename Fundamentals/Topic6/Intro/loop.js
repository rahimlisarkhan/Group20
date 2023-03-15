// var array = [5, 6, "Hello", true, false, null, 12, 29, [1, 2], 125];
// var fruits = ["Apple", "Pie", "Watermaloon", "Pineapple"];

// for (var reqem = 0; reqem < array.length; reqem++) {
//   console.log("element:", array[reqem]);
// }

// for (var i = 0; i < fruits.length; i++) {
//   var fruit = fruits[i];

//   if (fruit.length < 6) {
//     console.log("element:", fruits[i]);
//   }
// }

// for (var index in fruits) {
//   console.log(fruits[index]);
// }

// for (var element of fruits) {
//   console.log(element);
// }

// var index = 0;

// while (index < fruits.length) {
//   console.log("index:", fruits[index]);

//   index++;
// }

// do {
//   //   console.log("index:", fruits[index]);
//   console.log("index:", index);

//   index++;
// } while (index < 1);

// var questions = [
//   "Zehmet olmasa Adiniz?",
//   "Zehmet olmasa Soyadiniz?",
//   "Zehmet olmasa yasiniz?",
//   "Peseniz?",
// ];

// var person = [];

// for (var index = 0; index < 4; index++) {
//   var question = questions[index];

//   var answer = prompt(question);

//   if (answer === "") {
//     answer = "Bu xana bosdur";
//   }

//   person.push(answer);
// }

// console.log(person);

var name = "Watermaloon";

for (var i = 0; i < name.length; i = i + 1) {
  console.log("i: ", name[i]);
}
