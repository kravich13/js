interface AnimalCanWalk {
  walk(): void;
}

interface AnimalCanFly {
  fly(): void;
}

class Dog implements AnimalCanWalk {
  walk() {
    console.log('Walking');
  }
}

class Duck implements AnimalCanWalk, AnimalCanFly {
  walk() {
    console.log('Walking');
  }

  fly() {
    console.log('Flying');
  }
}

// доступен 1 метод
const dog = new Dog();
dog.walk();

// досупно 2 метода
const duck = new Duck();
duck.fly();
duck.walk();
