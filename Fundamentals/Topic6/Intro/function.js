// var c = 15;

// function b(a, b, yeniDeyer) {
//   console.log("sum:", (a + b) * yeniDeyer);
// }

// b(3, 4, c);
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
//   var month = prompt("Which do you want month?");
//   var day = prompt("Which do you want day?");

//   switch (month) {
//     case "january":
//       console.log("Bu ayda bayram yoxdur.");
//       console.log("Bu ayda bayram yoxdur.");
//       break;

//     case "february":
//       console.log("14 februrary");
//       break;

//     case "march":
//       if (day == 8) {
//         console.log("8 march");
//       } else if (day == 20) {
//         console.log("20 Newrouz");
//       }

//       break;

//     default:
//       console.log("Biz bayram qeyd etmirik");
//       break;
//   }
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

function noSpace(x) {
  var arrString = x.split(" ");
  return arrString.join("");

  //   var text = "";

  //   for (var i = 0; i < arrString.length; i++) {
  //     if (arrString[i] !== " ") {
  //       text += arrString[i];
  //     }
  //   }
  //   return text;
}

var result = noSpace("8 j 8   mBliB8g  imjB8B8  jl  B");
