var obj1 = {
  name: "Kenan",

  mute() {
    console.log("Hey mute!");
  },
};

// var obj2 = {
//   showName(a, b, c) {
//     console.log("a:", a, b, c);

//     console.log("Bu insanin adi", this.name);
//   },
// };

// obj2.showName.call(obj1, "Salam", "Sagol", "Hi");

function sayHello(a, b, c) {
  console.log("a", a, b, c);

  console.log("name", this.name);

  this.mute();
}

// sayHello.call(obj1, "say", "ds", "dss");
sayHello.apply(obj1, ["say", "ds", "dss"]);

// var newSayHello = sayHello.bind(obj1, "say", "ds", "dss");

// newSayHello();

class Employee {
  // /../ fields name age email
  // age private olsun
  //.. getNameOfEmployee return name
}

var person = new Employee();

function printEmail() {
  // logda email goster demeliyem
}

printEmail.apply();

class Guees {
  guessWord = null;
  win = 0;
  loss = 0;

  constructor(guessWord) {
    this.guessWord = guessWord;
  }

  chooseWord(l) {
    if (this.guessWord === l) {
      this.win += 1;
      alert("You Win!!!!");
    } else {
      this.loss += 1;
    }
  }
}

var game = new Guees("a");

window.onkeydown = function (e) {
  game.chooseWord(e.key);
};
