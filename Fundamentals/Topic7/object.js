// var person = ["Kenan", 33, true, null];

// console.log(person[0]);

// var person = {
//   name: "Kenan",
//   age: 33,
//   job: null,
//   image: undefined,
//   married: true,
//   children: [
//     {
//       name: "Child1",
//       gender: "male",
//     },
//     {
//       name: "Child2",
//       gender: "female",
//     },
//     {
//       name: "Child3",
//       gender: "female",
//     },
//   ],
//   address: {
//     city: "Baku",
//     country: "Azerbaijan",
//     street: "M.Hadi Suraxani",
//   },
//   email: "kenan@gmail.com",

//   speakRussian: function () {
//     return `Lorem ipsum`;
//   },

//   sayHello: function () {
//     console.log(this);
//     return `Salam menim adim ${this.name}`;
//   },

//   //   speakRussian: function () {
//   //     return `Lorem ipsum`;
//   //   },
// };

// // console.log(person.address.city);
// // console.log(person.children[0].gender);
// // console.log(person.speakRussian());

// console.log(person.sayHello());

// var car = {
//   marka: "Bmw",
//   model: "X6",
//   benzin: false,
//   year: 2009,
//   spead: 0,
//   isNew: true,
// };

// car.country = "Germany";
// car["country"] = "Germany";

// delete car.model;

// console.log(car);

// console.log("country: ", car);

// var car2 = { ...car };
// var car2 = { ...car };

// console.log(car2);

// car.marka = "Mercedes";

// var key = "model";

// var value = car[key];
// var value = car[key];

// car.marka = "Mercedes";
// car["marka"] = "Mercedes";

// console.log("car2: ", car2);

var resultEl = document.querySelector("#result");
var showBtn = document.querySelector("#show");
var gazBtn = document.querySelector("#gaz");
var breakBtn = document.querySelector("#brake");

// var car = {
//   marka: "Bmw",
//   model: "X6",
//   benzin: false,
//   year: 2009,
//   speed: 0,
//   isNew: true,
//   isLight: false,

//   turnOnLight: function () {
//     this.isLight = true;
//   },

//   plusGas: function () {
//     console.log("working....");

//     console.log("this:", this);
//     this.speed += 10;
//   },

//   minusGas: function () {
//     console.log("working....");

//     this.speed = this.speed <= 0 ? 0 : this.speed - 10;
//     // this.speed -= 10;
//   },

//   showSpeed: function () {
//     console.log(`Car: ${this.marka} speed:${this.speed}`);
//     return `Car: ${this.marka} speed:${this.speed}`;
//   },
// };

// showBtn.onclick = function () {
//   resultEl.innerHTML = car.showSpeed();
// };

// gazBtn.onclick = function () {
//   car.plusGas();
// };
// breakBtn.onclick = function () {
//   car.minusGas();
// };

// car.turnOnLight();

// var car2 = { ...car };

// car2.turnOnLight();

// console.log(car);
// console.log("car:", car);
// console.log("car2:", car2);

// var BankAcount = {
//   name: "Mehin",
//   age: null,
//   balance: 0,
//   "first-name": "Test",
//   surname: "Test",

//   addBalance: function (money) {
//     console.log("money: ", money);

//     console.log("dsds:", this);

//     this.balance += money;
//   },

//   // addBalance: (money) => {
//   //   console.log("money: ", money);

//   //   console.log("dsds", this);

//   //   this.balance += money;
//   // },
// };

// delete BankAcount.age;

// BankAcount.showBalance = function () {
//   console.log("Balance", this.balance);
// };

// BankAcount.surname = "Melikova";

// BankAcount["first-name"];

// BankAcount["removeBalance"] = function (money) {
//   this.balance -= money;
// };

// BankAcount.addBalance(250);

// BankAcount.removeBalance(43);

// BankAcount.showBalance();

// console.log("BankAcount", BankAcount);

// function BankCustomer(name, surname, balance, age) {
//   this.name = name;
//   this.surname = surname;
//   this.balance = balance;
//   this.age = age;

//   (this.addBalance = function (money) {
//     console.log("money: ", money);

//     console.log("dsds:", this);

//     this.balance += money;
//   }),
//     (this.removeBalance = function (money) {
//       this.balance -= money;
//     });

//   this.showBalance = function () {
//     console.log("Balance", this.balance);
//   };
// }

// var customerMehinMalikova = new BankCustomer("Mehin", "Melikova", 2700, null);

// var customerKenanSemendarli = new BankCustomer("Kenan", "Semendarli", 100, 33);

// console.log(customerMehinMalikova);

// customerKenanSemendarli.removeBalance(34);
// customerKenanSemendarli.removeBalance(34);

// console.log(customerKenanSemendarli);

// console.log("Gloabaldaki: ", this);

// var car = {
//   name: "BMW",

//   // method: function () {
//   //   console.log("objectDaxili:", this);

//   //   var parentThis = this;

//   //   function methodChild() {
//   //     // console.log("methodChild:", this);

//   //     console.log("parentThis", parentThis);
//   //   }

//   //   // methodChild()

//   //   return methodChild;
//   // },

//   method: function () {
//     console.log("objectDaxili:", this);

//     var methodChild = () => {
//       console.log("methodChild:", this);
//     };

//     // methodChild()

//     return methodChild;
//   },

// method: () => {
//   console.log("objectDaxili:", this);

//   var methodChild = () => {
//     console.log("methodChild:", this);
//   };

//   // methodChild()

//   return methodChild;
// },
// };

// var daxildeYaradilan = car.method();

// console.log(daxildeYaradilan);

// daxildeYaradilan();

var person = {
  name: "John",
  surname: "Doe",
  age: 24,
};

// Object.freeze(person);

person.age = 44;

// for (var key in person) {
//   console.log("value:", person[key]);
// }

// console.log(person.hasOwnProperty("age"));

// var keys = Object.keys(person);
// var values = Object.values(person);
// var array = Object.entries(person); //   [ ["name","John"], ["surname","Doe"], ["age",24] ]

console.log(person);
