// Input and Output

// var c = 15;

// function b(a, b, yeniDeyer, paramArray) {
//   console.log("param", paramArray);

//   console.log("sum:", (a + b) * yeniDeyer);
// }

// b(3, 4, c, [1, 2]);
// b(10, 5, c);
// b(12, 7, c);
// b(125, 2, c);

// function checkStudent(fullname, citizen, age) {
//   if (citizen === "azerbaycanli" && age >= 18) {
//     var q1 = confirm("Muqavile ucun ofise yaxinlasacaqsizmi?");

//     console.log(`Hormetli ${fullname}! Siz kursa ugurla qosuldunuz!!!!`);

//     if (q1) {
//       console.log("Sizi sebirsizlikle gozleyirik");
//     } else {
//       var email = prompt("Lutfen emailinizi yazin");
//       console.log(`Online muqavile ${email} emailivize gonderilecek!!!`);
//     }
//   } else if (citizen !== "azerbaycanli" && age >= 26) {
//     console.log(
//       `Hormetli ${fullname}! Siz ${citizen} vetandasligiviz oldugu ucun, sinaq dersine qosulursunuz.Eger hersey yaxsi olsa tam qosula bilersiz`
//     );
//   } else {
//     console.log(
//       `Hormetli ${fullname}!! Efsuslar olsunki siz bizim kriteriyalarimiza uygun olmadigiviz ucun ....`
//     );
//   }
// }

// checkStudent("Sarkhan Rahimli", "azerbaycanli", 28);
// checkStudent("Orkhan Rahimli", "azerbaycanli", 16);
// checkStudent("John Doe", "costaricali", 26);

// function sum(a, b) {
//   var mebleg = a + b;

//   return mebleg;

//   // if (mebleg > 10) {
//   //   return mebleg;
//   // } else if (mebleg === 5) {
//   //   return `Woow this is 5`;
//   // } else {
//   //   var yekun = mebleg + 2;
//   //   return yekun;
//   // }
// }

// var isUcunHesablama = sum(4, 5);

// console.log(isUcunHesablama);

// if(){

// }else if(){}
// }else if(){}
// }else if(){}
// }else if(){}
// else{

// }

// function guessHolidays() {
// var month = prompt("Which do you want month?");
// var day = prompt("Which do you want day?");

// switch (month) {
//   case "january":
//     console.log("Bu ayda bayram yoxdur.");
//     console.log("Bu ayda bayram yoxdur.");
//     break;

//   case "february":
//     console.log("14 februrary");
//     break;

//   case "march":
//     if (day == 8) {
//       console.log("8 march");
//     } else if (day == 20) {
//       console.log("20 Newrouz");
//     }

//     break;

//   default:
//     console.log("Biz bayram qeyd etmirik");
//     break;
// }
// }

// guessHolidays();

// var arr1 = [1, 2, 3, 4, 5];
// var arr2 = ["A", "B", "C", "D", "J"];
// var arr3 = [true, false, null, true];

// // function renderArray(array) {
// //   console.log("---------------------");

// //   for (var element of array) {
// //     console.log("El: ", element);
// //   }
// // }

// renderArray(arr1);
// renderArray(arr2);
// renderArray(arr3);

// function sum() {
//   return 5 + 6;
// }

// var arraymix = [1, 23, 4, 5, "sdsds", sum];

// var sumFunk = arraymix[5]();

// console.log(sumFunk);

// function repeatStr(n, s) {
//   var text = s.repeat(n);

//   return text;
// }

// function repeatStr(n, s) {
//   var text = "";

//   for (var i = 0; i < n; i++) {
//     text += s;
//   }

//   return text;
// }

// var result = repeatStr(5, "Hello");

// console.log(result);

// function noSpace(string, num1, num2) {

//   console.log(arguments);

//   // if (x === "melikmemmed") {
//   //   return 6;
//   // }

//   // if (typeof x !== string) {
//   //   return -1;
//   // }

//   // var a = 2;

//   return 4 + a;

//   // var arrString = x.split(" ");
//   // return arrString.join("");
//   // return 5;
//   // console.log(arrString.join(""));
//   //   var text = "";
//   //   for (var i = 0; i < arrString.length; i++) {
//   //     if (arrString[i] !== " ") {
//   //       text += arrString[i];
//   //     }
//   //   }
//   //   return text;
// }

// var result = noSpace("8 j 8   mBliB8g  imjB8B8  jl  B", 4, 5);

// var arr1 = [1, 2];

// var arr2 = ["Banana", "Watermaloon", "Apple", "Pie"];

// // var arr3 = arr1.concat(arr2);
// var arr3 = [...arr2, ...arr1]; // spread

// // arr3[0] = "Hello";

// console.log("arr3", arr3);

// function read(a, b, ...params) {
//   //rest operator

//   // var value = "";

//   console.log("a", a);
//   console.log("b", b);
//   console.log("params", params);
// }

// read(1, 2, 3, 4, 5, "Hello", true, null);

// read(...arr2);

// (function sum(a, b) {
//   console.log("sum:", a + b);
// })(4, 7);

// function sum(a, b) {
//   console.log("sum:", a + b);
// };

// sum()

// var arr1 = [1, 2, 3, 4, 5, 6, 7];
// var k = 3;

// function changeElement(array, n) {
//   for (let index = 0; index < n; index++) {
//     var result = array.shift();
//     array.push(result);
//   }

//   console.log("array", array);
// }

// changeElement(arr1, k);

// sum(3)(5)(7)

// var array = [
//   function b() {
//     return 5 + 6;
//   },
//   2,
//   5,
//   "Hello",
//   [1, 2],
// ];

// array[3].toUpperCase();

// function sum(num1) {
//   return function (num2) {
//     return function (num3) {
//       return num1 + num2 + num3;
//     };
//   };
// }

// // var result1 = sum(5);

// // var result = sum(5)(6)(7);

// // console.log(result1(6));
// console.log(result);

// (function sum(a, b) {
//   return a + b;
// })(5, 6);

// Various Arrays
var brands = ["Acer", "Apple", "Sony", "Samsung"];
var heroes = [
  "Black Panther",
  "Cyborg",
  "Black Canary",
  "Donna Troy",
  "Huntress",
  "Blue Beetle",
  "Captain Atom",
];
// var booksOnMyShelf = [
//   "Calculus Early Transcendentals",
//   "Ravens",
//   "The Self Illusion",
//   "Harry Potter",
// ];
// var thingsInFrontOfMe = ["Laptop", "Beanbag", "Cats", "Slippers"];
// var howIFeel = ["Sleep Deprived", "Wired on Coffee", "Excited"];

// function brandsCap(array) {
//   // For Loop for Heroes
//   for (var j = 0; j < array.length; j++) {
//     console.log(array[j]);
//   }
//   console.log("---------");
// }

// brandsCap(brands);
// brandsCap(heroes);
// brandsCap(booksOnMyShelf);
// brandsCap(thingsInFrontOfMe);
// brandsCap(howIFeel);

// var gender = "female";
// var age = 16;

// var personName =
//   gender === "female" ? (age >= 18 ? "Mrs. Marry" : "Marry") : "John";

// // var personName = "John";

// // if (gender === "female") {
// //   personName = "Marry";

// //   if (age >= 18) {
// //     personName = "Mrs. Marry";
// //   }
// // } else {
// //   personName = "John";
// // }

// console.log(personName);

// function str_count(soz, herf) {
//   var count = 0;

//   count += 1;
// }

// console.log(str_count("Salam Aleykum", "a")); //3

// var text = "Aleykum salam";
// var searchtext = "a";

// function str_count(soz, herf) {
//   var textarr = soz.split("");

//   var count = 0;

//   for (var i in textarr) {
//     if (textarr[i] == herf) {
//       count += 1;
//     }
//   }

//   return count;
// }

// str_count(text, searchtext);

// function countLetter(word, letter) {
//   var count = 0;

//   for (var i = 0; i < word.length; i++) {
//     var littleWord = word[i].toLowerCase();

//     if (littleWord === letter) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countLetter("HellLLLLLo", "l"));

// function evenOrOdd(number) {
//   if (number % 2 === 0) {
//     return "Even";
//   }

//   return "Odd";
// }

// console.log(evenOrOdd(9));

// function solution(str) {
//   var result = str.split("").reverse().join("");

//   return result;
// }

// function solution(word) {
//   let reverseText = "";
//   for (let letter of word) {
//     reverseText = letter + reverseText;
//   }
//   return reverseText;
// }

// console.log(solution("world"));

function multible(num) {
  return num * num;
}

function minus(lastValue) {
  var result = multible(lastValue); //400

  return result - 13;
}

function sum(a, b) {
  var resultSum = a + b;

  return minus(resultSum); // 387
}

console.log(sum(8, 12)); //387
