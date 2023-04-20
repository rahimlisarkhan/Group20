// // function Person(Name, Age) {
// //   this.name = Name;
// //   this.age = Age;

// //   this.sayHello = function () {
// //     console.log("Hello:", this.name);
// //   };
// // }

// // var obj1 = new Person(Kenan, 33);

// // var obj2 = new Person(Aytac, 98);

// // var obj2 = {
// //     name:"Kenan"
// // };

// // var obj2 = {};

// // var obj2 = {};

// var obj2 = {};

// class Person {
//   name = null;
//   age = null;
//   married = false;
//   h1El = document.querySelector("h1");

//   constructor(Name, Age) {
//     console.log("working for: ", Name);
//     this.name = Name;
//     this.age = Age;
//   }

//   sayHello() {
//     this.h1El.innerHTML = this.name;
//     this.changeName();
//   }

//   changeName() {
//     this.name = "None";
//   }

//   changeName() {
//     this.name = "None";
//   }

//   changeName() {
//     this.name = "None";
//   }
//   changeName() {
//     this.name = "None";
//   }

//   changeName() {
//     this.name = "None";
//   }

//   changeName() {
//     this.name = "None";
//   }

//   changeName() {
//     this.name = "None";
//   }

// }

// var obj1 = new Person("Kenan", 33);

// // obj1.sayHello();

// obj1.age = 35;

// delete obj1.age;

// obj1.closeWindow = function () {};

// console.log(obj1);

// // obj1.sayHello();

// // console.log(obj1);

// class Animal {
//   name = "Lion";
//   meat = true;
//   voice = "WOOWXW";

//   constructor(Name, Meat, Voice) {
//     if (!Name || !Meat || !Voice) return;

//     this.name = Name;
//     this.meat = Meat;

//     this.voice = Voice;
//   }

//   useVoice() {
//     console.log(
//       `Hey ${this.name}. Do you eat meat?(${this.meat}) ${this.voice} ${this.voice}`
//     );
//   }
// }

// var catAnimal = new Animal("Cat", true, "Meow");

// var dogAnimal = new Animal();

// catAnimal.useVoice();

// console.log(dogAnimal);

var data = [];

class BankReport {
  name = null;
  salary = null;
  salaryFor3Months = null;
  salaryFor6Months = null;
  salaryForYear = null;
  balance = null;
  xpenses = null;
  data = [];

  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
    this.balance = salary;
    this.salaryFor3Months = salary * 3;
    this.salaryFor6Months = salary * 6;
    this.salaryForYear = salary * 12;
  }

  showBalance() {
    console.log("Your balance:", this.balance);
  }

  addBalance(money) {
    if (!money || typeof money !== "number") return;

    this.balance += money;
  }

  removeBalance(money) {
    if (!money || typeof money !== "number") return;

    this.balance = this.balance <= 0 ? 0 : this.balance - money;

    this.data.push(money);
    this.xpenses += money;
  }
}

var person1 = new BankReport("Kenan", 2700);

person1.removeBalance(100);
person1.removeBalance(70);
person1.removeBalance(20);
person1.addBalance(50);

var employees = [
  { fullname: "Kenan", sallary: 2700 },
  { fullname: "Jale", sallary: 2900 },
  { fullname: "Ilkin", sallary: 2200 },
];

var newEmployees = employees.map((item) => {
  const coolObj = new BankReport(item.fullname, item.sallary);

  return coolObj;
});
