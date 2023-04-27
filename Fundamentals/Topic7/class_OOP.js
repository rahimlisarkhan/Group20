class Animal {
  type = null;
  eat = null;
  name = null;
  #bla = null;

  constructor(type, name, eat) {
    this.type = type;
    this.eat = eat;
    this.name = name;
    this.#bla = "Test";
  }

  voice(animalVoice) {
    console.log("Hey:!!!! ", animalVoice);
  }
}

class WaterAnimal extends Animal {
  liveTime = null;

  constructor(type, name, eat, time) {
    super();
    this.eat = eat;
    this.type = type;
    this.name = name;
    this.liveTime = time;
  }

  swimTime(time) {
    console.log("This animal", time);
    console.log("Test", this.#bla);
  }
}

// var balina = new WaterAnimal("memeli", "Mavi Balina", "baliq", 30);

// console.log(balina);

class YasilBasOrdek extends WaterAnimal {
  age = null;

  constructor(type, name, eat, time, age) {
    super(type, name, eat, time);

    this.age = age;
  }

  fly() {
    console.log(this.name);
  }
}

var uglyDuck = new YasilBasOrdek("qus", "Dafi", "ot", 720, 47);

uglyDuck.fly();
uglyDuck.voice("dak dak");
// console.log("uglyDuck", uglyDuck);

// var time = new Date("2023-01-02");
