// Data Type
// Primitive - Integer, String, Boolean, Nullish, Undefined
// InPrimitive - Array, Object, Function

//Integer
// var price = 5;
// var raiting = 6.7;

// // String
// var fullname = "Ibrahim Seyidov";
// var name = "6.7";

// //Boolean
// var baseKind = true;
// var married = false;

// //Nullish
// var passportSekili = null;

// //Undefined
// var personnalInfo = undefined;

// console.log(fullname);
// console.log(raiting);
// console.log(name);

// var a = 35;

// var b = 7;

// var c = 2 + 1;

// var string = "12";
// var string = "Hello";

// var d = a;

// var d = a - c;

// var d = string + b;
// var d = string - b;

// var netice = 12 % 2;

// var x = 5;

// // x = x + 12;
// x += 12;

// var x = 5;

// var z = 5;

// var netice = x == z;
// var netice = x === z;
// var netice = x !== z;
// var netice = x <= z;
// var netice = x;

// 0
// ""
// false
// null
// undefined

// var a = 0;

// var netice = !a;

// var a = false;

// var b = 6;

// var netice = a && b;
// var netice = a || b;
// console.log(netice);

// var myValue = prompt("Adiniz nedir?");

// var myValue = confirm("Evlisiz?");

// console.log(myValue);

// var age = 19;

// var country = "Nigeria";

// if (age > 18 && country === "Azerbaijan") {
//   console.log("Xos gelmisiz");
// } else {
//   console.log("Sagolun");
// }

// var age = prompt("Yasiniz necedir");
// // var age = true;

// var type = typeof age === "number";

// if (type === "number" && age > 24 && age < 36) {
//   console.log("Siz artiq universiteti bitirmisiz");
// } else if (type === "number" && age <= 18) {
//   console.log("Universitete hazirlasir");
// } else {
//   console.log("Avaradir veya siz dogru deyer qeyd etmemisiniz");
// }

// var q1 = prompt("Goy uzunun rengi");

// //First condition
// if (q1 === "mavi") {
//   var q2 = confirm("Yarpagin rengi yasildir?");

//   //Second condition
//   if (q2 === true) {
//     var q3 = prompt("Rusiyanin prezidenti?");

//     //Third condition
//     if (q3 === "putin") {
//       console.log("Tebrikler oyun bitdi. 3 suala cavab verdiz");
//     } else {
//       console.log("Tesufki 2 suala cavab verdiz!");
//     }
//   } else {
//     console.log("Tesufki 1 suala cavab verdiz!");
//   }
// } else {
//   console.log("Tesufki cavab vere bilmediz");
// }

// var a = 5;

// var b = 7;

// var c = a + b;

// c = 5;

// var d = c;

// console.log("c", c);
// console.log("d", d);

var array = [5, 6, "Hello", true, false, null, 12, 29, [1, 2], 125];

// console.log("array deyeri", array[5]);

// array[2] = "Bye";

// var number = array[1];

// array[1] = 100;

// console.log(number);

// var netice = array[8][1];
// var netice = array[array.length - 1];

//shift,unshift, push,pop,splice

// var netice = array.push(101);
// var netice = array.pop();
// var netice = array.unshift(34);
var netice = array.shift();

console.log(netice);
console.log(array);

// if (array.length === 0) {
//   console.log("Loading...");
// } else {
//   console.log("Melumatlari gorurem");
// }
