"use strict";
let a = 15;
const sum = (num1, num2) => {
    return num1 + num2;
};
sum(5, 7);
let fullname = "Kenan S.";
const personal = {
    name: "John",
    age: 34,
    married: false,
};
let divEl = document.querySelector("#list");
divEl.innerHTML = personal.name;
