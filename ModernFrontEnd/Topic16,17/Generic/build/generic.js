"use strict";
const obj = {
  f: 21,
  o: false,
};
// interface ReponseUserType {
//   status: number;
//   result: UserInfo[];
// }
// interface ReponseBasketType {
//   status: number;
//   result: BasketType[];
// }
const responseBasket = {
  status: 200,
  result: [
    { id: 212, products: [{ name: "Ciz" }, { name: "Doner" }] },
    { id: 211212, products: [{ name: "Ciz2" }, { name: "Doner" }] },
  ],
};
