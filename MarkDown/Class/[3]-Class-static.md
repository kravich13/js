- [Статические методы](#статические-методы)
- [Статические свойства](#статические-свойства)
- [Наследование статических свойств и методов](#наследование-статических-свойств-и-методов)

## Статические методы

Статические методы, по сути, тоже самое, что методы по типу: `Array.isArray()`, `Object.keys()`, `Object.valued()`, `Object.entries()`, `Object.assign()`, `Object.create()` и множество других. Это самые обычные методы классов. 

Статические методы используются для функциональности, принадлежат к классу в целом, а не относятся к конкретному объекту класса.

В классе такие методы обозначаются словом `static`:

```javascript
class User {
  static staticMethod () {
    console.log(this === User)
  }
}

User.staticMethod() // true
```

Значением `this` при вызове `User.staticMethod()` является сам конструктор класса `User`.

Статические методы используются для реализации функций, принадлежащим классу, но не к каким-то конкретным объектам.

К примеру, есть объекты статей `Article` и нужна функция их сравнения:

```javascript
class Article {
    constructor (title, date) {
      this.title = title
      this.date = date
    }
  
    // функция сортировки 
    static compare (articleA, articleB) {
      return articleA.date - articleB.date
    }
  }

const articles = [
    new Article("HTML", new Date(2019, 1, 1)),
    new Article("CSS", new Date(2019, 0, 1)),
    new Article("JavaScript", new Date(2019, 11, 1))
]

articles.sort(Article.compare) // обращение к самому классу

console.log(articles[0].title) // первым идёт CSS
```

Метод `Article.compare()` стоит над статьями, как способ их сравнения (функция сортировки). Это метод не отдельной статьи, а всего класса в целом.
***

## Статические свойства

Пример создания собственного статического свойства, которое запоминает количество созданных им объектов:

```javascript
class Person {

    static count = 0 // первоначально 0

    constructor (options) {
        this.name = options.name
        Person.count ++ // при создании добавить число
    }
}

const vlad = new Person({ 
    name: "Влад",
})

const maks = new Person({ 
    name: "Макс",
})

Person.count // 2, обращение через сам класс
```

Статические свойства так же можно менять: 

```javascript
Person.count = 100
```
***

## Наследование статических свойств и методов

Статические свойства и методы наследуются.

Метод `Animal.compare` в коде ниже наследуется и доступен как `Rabbit.compare`:

```javascript
class Animal {

    constructor (name, speed) {
        this.speed = speed
        this.name = name
    }

    run (speed = 0) { // обычный метод к объектам
        this.speed += speed
        console.log(`${this.name} бежит со скоростью ${this.speed}`)
    }

    // сортировка
    static compare (animalA, animalB) {
        return animalA.speed - animalB.speed
    }
}

class Rabbit extends Animal { // унаследовал static compare от класса Animal
    hide () {
        console.log(`${this.name} прячется!`)
    }
}

const rabbits = [
    new Rabbit("Белый кролик", 10),
    new Rabbit("Чёрный кролик", 5)
]

rabbits.sort(Rabbit.compare)

rabbits[0].run() // Чёрный кролик бежит со скоростью 5
rabbits[1].hide() // Белый кролик прячется!
```