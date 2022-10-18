# SOLID

- [SOLID](#solid)
  - [Single responsibility principle](#single-responsibility-principle)
  - [Open closed principle](#open-closed-principle)
  - [Liskov substitution principle](#liskov-substitution-principle)
  - [Interface sergegation principle](#interface-sergegation-principle)
  - [Dependency inversion principle](#dependency-inversion-principle)
    - [Bad](#bad)
    - [Good](#good)

---

## Single responsibility principle

Принцип единой ответственности.

Означает, что **один** класс или функционал **отвечает** за что-то **одно**. Если же они делает запросы, изменение стейта или ещё овер дохрена разных вещей - это класс бога и это является антипаттерном.

```tsx
const MyComponent = () => {
  const getDataForAdmin = () => {
    fetch('.../admin');
  };

  const getDataForUser = () => {
    fetch('.../user');
  };

  return (
    <View>
      <Button title="Get admin data" onPress={getDataForAdmin} />

      <Button title="Get user data" onPress={getDataForUser} />
    </View>
  );
};
```

В реакте не нужно на один `handler` вешать кучу обработчиков и внутри него прописывать миллион условий. Нужно для каждой отдельной логики создавать свой собственный `handler`, как в примере выше.

---

## Open closed principle

Принцип открытости и закрытости.

Означает, что классы, функции, компоненты и т.п. должны быть открыты для расширения, но закрыты для изменения.

```ts
// Делаем абстракцию метода
interface IAttacker {
  attack: () => void;
}

class Weapon implements IAttacker {
  damage: number;
  range: number;

  constructor(damage: number, range: number) {
    this.damage = damage;
    this.range = range;
  }

  attack() {} // Изменить метод не можем, а вот расширить - запросто
}

class Sword extends Weapon {
  // Расширяем метод
  attack() {
    console.log(`Удар мечом с уроном ${this.damage}`);
  }
}

class Crossbow extends Weapon {
  // Расширяем метод
  attack() {
    console.log(`Выстрел из арбалета с уроном ${this.damage}`);
  }
}

const sword = new Sword(13, 3);
const crossbow = new Crossbow(15, 5);

sword.attack(); // Удар мечом с уроном 13
crossbow.attack(); // Выстрел из арбалета с уроном 15
```

---

## Liskov substitution principle

Принцип подстановки Барбары Лисков.

Означает:

- что наследуемые классы не должны иметь методов, в которых просто выкидывается ошибка типа "Этот класс не имеет такого функционала".
- что можно указать в входящих параметрах функции типом родительский класс, а передать дочерний.

```ts
interface IUser {
  say(): void;
}

interface IDeveloper {
  developProject(): void;
}

class User implements IUser {
  say() {
    console.log('Hello by User');
  }
}

class Developer extends User implements IDeveloper {
  say() {
    console.log('Hello by Developer');
  }

  developProject() {
    console.log('I can develop a project');
  }
}

function callMethodForAll(instance: IUser | User) {
  instance.say();
}

function callMethodForDevelopers(instance: IDeveloper | Developer) {
  instance.developProject();
}

const user = new User();
const developer = new Developer();

callMethodForAll(user); // Hello by User
callMethodForAll(developer); // Hello by Developer

callMethodForDevelopers(developer); // I can develop a project
```

---

## Interface sergegation principle

Принцип разделения интерфейса.

Означает, что нельзя оставлять методы интерфейса там, где их нет. Для решения нужно создавать разные интерфейсы и использовать по одному или по несколько там, где нужно.

```ts
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
```

---

## Dependency inversion principle

Принцип инверсии зависимости.

Означает, что модули высокого уровня не должны зависить от модулей низкого уровня.

### Bad

```ts
interface IService {
  say: () => void;
}

class EnglishService implements IService {
  say() {
    console.log('I am English client');
  }
}

class Client {
  private readonly service: IService;

  constructor() {
    this.service = new EnglishService();
  }

  sayHi() {
    this.service.say();
  }
}

const englishClient = new Client();
```

Проблема здесь в том, главный класс `Client` приввязан напрямую к внешнему классу. И в этом классе есть прямая зависимость от `EnglishService`. И если нужно реализовать работу с `FrenchService` - сделать это можно лишь изменив инстанс внутри `Client`. Это очень плохой пример.

---

### Good

```ts
interface IService {
  say: () => void;
}

class EnglishService implements IService {
  say() {
    console.log('I am English client');
  }
}

class FrenchService implements IService {
  say() {
    console.log('I am French client');
  }
}

class Client {
  private readonly service: IService;

  constructor(service: IService) {
    this.service = service;
    // Инстанс класса передаётся как пропс в конструкторе
  }

  sayHi() {
    this.service.say();
  }
}

const frenchClient = new Client(new FrenchService());
const englishClient = new Client(new EnglishService());

frenchClient.sayHi();
englishClient.sayHi();
```

Здесь главный класс `Client` никак не зависит от внешних инстансов. Неважно, какой там будет юзер, хоть японский, всё будет работать правильно и ничего не сломается.
