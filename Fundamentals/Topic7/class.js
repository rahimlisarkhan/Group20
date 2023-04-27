class DOMElements {
  h1 = document.querySelector("#result");
  gazBtn = document.querySelector("#gaz");
  brakeBtn = document.querySelector("#brake");
  showBtn = document.querySelector("#show");

  showElements() {
    console.log("---------");
    console.log(h1);
    console.log(gazBtn);
    console.log(brakeBtn);
    console.log(showBtn);
    console.log("---------");
  }
}

class CarStructer extends DOMElements {
  #marka = null;
  #model = null;
  static material = "Demir";
  speed = 0;
  dataInfoCarGaz = [];

  constructor(marka, model) {
    super();

    this.#marka = marka;
    this.#model = model;
  }

  brake(s) {
    this.speed = this.speed <= 0 ? 0 : s ? this.speed - s : this.speed - 10;

    this.show();
  }

  gaz(s) {
    console.log("this.speed", this.speed);

    var handleSpeed = s ? this.speed + s : this.speed + 10;

    this.speed = handleSpeed;

    // this.dataInfoCarGaz.push(s ? s : 10);
    this.dataInfoCarGaz.push(s ?? 10);
    // this.dataInfoCarGaz.push(s || 10);

    this.show();
  }

  show() {
    console.log(this.dataInfoCarGaz);
    this.h1.innerHTML = this.speed;
  }
}

CarStructer.speed;

var germanyCar = new CarStructer("Mercedes", "X6");

var japanModelCar = new CarStructer("Honda", "none");

// germanyCar.gaz(20);

japanModelCar.gazBtn.addEventListener("click", function () {
  japanModelCar.gaz(40);
});

japanModelCar.brakeBtn.addEventListener("click", function () {
  japanModelCar.brake(5);
});

console.log("germanyCar", germanyCar);
