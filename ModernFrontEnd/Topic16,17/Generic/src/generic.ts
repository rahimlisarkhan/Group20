interface K<T, P> {
  f: T;
  o: P;
}

const obj: K<number, boolean> = {
  f: 21,
  o: false,
};

type UserInfo = {
  name: "John";
  age: number;
};

type BasketType = {
  id: number;
  products: { name: string }[];
};

interface ReponseType<Data> {
  status: number;
  result: Data[];
}

// interface ReponseUserType {
//   status: number;
//   result: UserInfo[];
// }

// interface ReponseBasketType {
//   status: number;
//   result: BasketType[];
// }

const responseBasket: ReponseType<BasketType> = {
  status: 200,
  result: [
    { id: 212, products: [{ name: "Ciz" }, { name: "Doner" }] },
    { id: 211212, products: [{ name: "Ciz2" }, { name: "Doner" }] },
  ],
};
