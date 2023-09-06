let a: number = 15;

const sum = (num1: number, num2: number): number => {
  return num1 + num2;
};

sum(5, 7);

let fullname: string = "Kenan S.";

const personal: { name: string; age: number; married: boolean } = {
  name: "John",
  age: 34,
  married: false,
};

let divEl = document.querySelector("#list") as HTMLDivElement;

divEl.innerHTML = personal.name;
