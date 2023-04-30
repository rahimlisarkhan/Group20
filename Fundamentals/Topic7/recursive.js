// function sum(num) {
//   if (num === 1) {
//     return num;
//   } else {
//     return sum(num - 1);
//   }
// }

// var result = sum(5);

// console.log("result", result);

// var country = [
//   {
//     name: "Azerbaijan",
//     children: [
//       {
//         name: "Baki",
//         children: [
//           {
//             name: "Mestaga",
//             children: null,
//           },
//         ],
//       },
//       {
//         name: "Sumqayit",
//         children: null,
//       },
//     ],
//   },
// ];

// function showCountry(arr, index) {
//   if (!arr) {
//     console.log("Seheri yoxdur");
//     return;
//   }

//   console.log("seherler", arr[index].children);

//   return showCountry(arr[index].children, index + 1);
// }

// showCountry(country, 0);

function hendesisilsile(num) {
  if (num > 96) {
    return num;
  } else {
    return hendesisilsile(num + 3);
  }
}

var result = hendesisilsile(4);

console.log("result", result);
