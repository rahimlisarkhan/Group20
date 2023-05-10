// // function Ana() {
// //   var a = 0;
// //   var b = [];

// //   return function (num = 2) {
// //     a += num;
// //     b.push(num);

// //     return a;
// //   };
// // }

// // var kenanUcunQurgu = Ana();

// // kenanUcunQurgu();
// // kenanUcunQurgu();
// // kenanUcunQurgu();
// // kenanUcunQurgu(15);

// // var result = kenanUcunQurgu();

// // console.log("result", result);

// // var a = 0;

// // function B() {
// //   return a + 1;
// // }

// function calc() {
//   var a = 0;

//   return () => {
//     a += 1;

//     return a;
//   };
// }

// var A = calc();

// A();
// A();
// A();
// A();
// A();
// A();

// var num = A();

// console.log("num", num);

// function A() {
//   var count = 0;
//   var data = [];

//   function nested(value = 1) {
//     count += value;
//     data.push(value);

//     return { count, data };
//   }

//   return nested;
// }

// var calc = A();

// calc(5);
// calc(5);
// calc(5);
// calc(5);

// const result = calc();

// console.log("result", result);

function calc() {
  var count = 0;

  return function () {
    count += 1;

    return count;
  };
}

var kenanCalc = calc();
var gulxanim = calc();

kenanCalc();
kenanCalc();
kenanCalc();
kenanCalc();
kenanCalc();
kenanCalc();

gulxanim();
gulxanim();
gulxanim();
gulxanim();

{
  let a = 5;
}

console.log(a);
