// "use strict";

// // var a = 5;

// console.log(a);

// function sum() {
//     var a = 10;

//   function B() {
//     // var a = 3;

//     console.log("B daxilindeki:", a);
//     return a;
//   }

//   console.log("sum daxilindeki:", a);

//   var result = B();
// }

// // console.log("Globaldaki", a);
// sum();
// console.log("Globaldaki, b", b);

// var arr = [];

// function A() {
//   arr.push(5);
// }

// function B() {
//   console.log(arr);
// }

// function sum(a){

//     return function(b){
//         return a + b
//     }
// }

// sum(3)(2)

// var a = 3;

// let x = 2;
// const x = 2;

// var outerFunction = function () {
//   //   var x = 5;

//   var nestedFunction = function () {
//     var y = 7;

//     // What will this print?
//     console.log("X: " + x);

//     // What will this print?
//     console.log("Y: " + y);

//     var z = 10;
//     // What will this print?
//     return "Z (inside): " + z;
//   };

//   return nestedFunction;
// };

// console.log(window);

// var nestedFuntion = outerFunction();
// console.log(nestedFuntion());
//
// console.log(outerFunction()());

//"Z (inside): 10";

// var a = 5;

// // a = 4
// a += 4;

// let a = 5;

// // a = 4
// a += 4;

// const PI = 3.14;

// // PI = 4;

// const SUM = () => {};

// console.log("PI", PI);

// {
//   var a = 5;
//   //   let a = 5;
//   //   const a = 5;
// }

// function A() {
//   var a = 5;

//   let b = 4;

//   const c = 6;
// }

// console.log(a);
// console.log(b);
// console.log(c);

// function A() {
//   for (let i = 0; i < 10; i++) {
//     console.log("i", i);
//   }
//   //   console.log("out i ", i);
// }

// var cat = {
//   name: "Farley",
//   color: "gray",
//   age: 5,

//   printInfo: function () {
//     console.log("inside printInfo()");

//     // What will this print?
//     console.log(this);

//     // What will this print?
//     console.log("Name:", this.name, "Color:", this.color, "Age:", this.age);

//     var generalThis = this;

//     var nestedFunction = function () {
//       console.log("inside nestedFunction()");

//       // What will this print?
//       console.log(generalThis);

//       // What will this print?
//       console.log(
//         "Name:",
//         generalThis.name,
//         "Color:",
//         generalThis.color,
//         "Age:",
//         generalThis.age
//       );
//     };

//     nestedFunction();
//   },
// };

// // calls the printInfo function. Which subsequently calls the nestedFunction()
// cat.printInfo();

function twotop() {
  function two(a) {
    alert("Two: " + a);
  }

  var a = 13;
  two(a);
  return "somthing";
}

// What will get alerted?
twotop();
