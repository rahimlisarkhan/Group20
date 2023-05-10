var a = 1;
var b = false;
var arr = [
  1,
  "string",
  false,
  null,
  undefined,
  [1, 2],
  { name: "Kenan" },
  function A(n) {
    return n + 5;
  },
];

var fN = arr[arr.length - 1];

fN(5);

var obj = {
  children: [],
  name: "Kenan",
  age: 33,
  married: true,
  parent: {
    father: {},
    mother: {},
  },

  sayHello: function () {},
};

var arr3 = [1, 2, 3, 4];

// function fnB() {
//   console.log("Hi");
// }

// function A(a, b) {
//   console.log("a", a[0]);
//   console.log("b", b);

//   b();
// }

// A(arr3, fnB);

// function A(num1, callback) {
//   console.log("A cagirildi");

//   let result = callback(33);

//   console.log("result", result);
// }

// function B(n) {
//   console.log("B cagirildi", n);

//   return n * 2;
// }

// function C(n) {
//   console.log("C cagirildi", n);

//   return n / 2;
// }

// function C() {
//   console.log("Bitdi!");
// }

// A(22, C);

// var renderTodo = (el, index, list) => `<h1> ${el} </h1>`;

// el.innerHtml = arr.map(renderTodo);

// function Toplama(a, b) {
//   return a + b;
// }

// function Vurma(a, b) {
//   return a * b;
// }

// function Kombayn(num1, num2, emeliyyat) {
//   let result = emeliyyat(num1, num2);

//   return `Info : ${result}`;
// }

// console.log(Kombayn(5, 4, Toplama));
// console.log(Kombayn(5, 4, Vurma));

// function myArrMap(callback) {
//   let currentArray = this; //[1,2,3,4,5]

//   let arr = [];

//   for (let i = 0; i < currentArray.length; i++) {
//     let resultEl = callback(currentArray[i], i, currentArray);

//     arr.push(resultEl);
//   }

//   return arr;
// }

// Array.prototype.myArrMap = myArrMap;

// var numbers = [1, 2, 3, 4, 5];

// function renderElement(el, index, list) {
//   return `Hey index ${index}! Hey El: ${el}`;
// }

// var newNumbers = numbers.myArrMap(renderElement);

// console.log("newNumbers", newNumbers);

// const firebase = new Fireabase("31322332223");

// var arrTelebeler = firebase.getOxu("telebeler");
