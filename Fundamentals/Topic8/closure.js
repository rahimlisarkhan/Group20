// function Ana() {
//   var a = 0;
//   var b = [];

//   return function (num = 2) {
//     a += num;
//     b.push(num);

//     return a;
//   };
// }

// var kenanUcunQurgu = Ana();

// kenanUcunQurgu();
// kenanUcunQurgu();
// kenanUcunQurgu();
// kenanUcunQurgu(15);

// var result = kenanUcunQurgu();

// console.log("result", result);

// var a = 0;

// function B() {
//   return a + 1;
// }

function calc() {
  var a = 0;

  return () => {
    a += 1;

    return a;
  };
}

var A = calc();

A();
A();
A();
A();
A();
A();

var num = A();

console.log("num", num);
