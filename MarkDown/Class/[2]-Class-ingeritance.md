- [Наследование классов](#наследование-классов)
- [Переопределение прототипов](#переопределение-прототипов)
- [Переопределение конструктора](#переопределение-конструктора)

## Наследование классов

Есть два независимых класса: Animal и Rabbit

```javascript
// Animal
class Animal {
    constructor (name) {
        this.speed = 0
        this.name = name
    }
    run (speed) {
        this.speed = speed
        console.log(`${this.name} бежит со скоростью ${this.speed}`)
    }
    stop () {
        this.speed = 0
        console.log(`${this.name} стоит`)
    }

}

const animal = new Animal("Волк")

animal.run(10) // Волк бежит со скоростью 10
animal.stop() // Волк стоит


// be Rabbit
class Rabbit {
    constructor (name) {
        this.name = name
    }
    hide () {
        console.log(`${this.name} прячется!`)
    }
}

const rabbit = new Rabbit("Кролик")

rabbit.hide() // Кролик прячется!
```

`Animal` --> `Animal.prototype (object)`

`Rabbit` --> `Rabbit.prototype (object)`

Для того, чтобы класс `Rabbit` расширят `Animal`, нужно использовать метод `extends` и указать родительский класс: 

```javascript
class Animal {
    constructor (name) {
        this.speed = 0
        this.name = name
    }
    run (speed) {
        this.speed = speed
        console.log(`${this.name} бежит со скоростью ${this.speed}`)
    }
    stop () {
        this.speed = 0
        console.log(`${this.name} стоит`)
    }

}

const animal = new Animal("Волк")


class Rabbit extends Animal { // Раббит унаследовал методы от Енимал
    hide () {
        console.log(`${this.name} прячется!`)
    }
}

const rabbit = new Rabbit("Кролик")

animal.name // Волк
rabbit.name // Кролик

rabbit.run(10) // Кролик бежит со скоростью 10
rabbit.hide() // Кролик прячется!

animal.hide() // animal.hide is not a function
```

Метод `extends` работает, используя прототипы. Он устанавливает `Rabbit.prototype.[[Prototype]]` в `Animal.prototype`. Так что если метод не найден в `Rabbit.prototype`, JS автоматом берёт его из `Animal.prototype`.


**После `extends` разрешены любые выражения**

Пример вызова функции, которая генерирует родительский класс: 

```javascript
function f (phrase) {
    return class {
        sayHi () {
            console.log(phrase)
        }
    }
}

class User extends f("Здарова") {}

new User().sayHi() // Здарова
```
***

## Переопределение прототипов

Сейчас `Rabbit` наследует от `Animal` метод `stop`, который устанавливает `this.speed = 0`.

Если переопределить этот метод в классе `Rabbit`, то он будет использоваться взамен родительского:

```javascript
class Rabbit extends Animal {
    stop () {
        // будет использован этот метод
    }
}
```

Но обычно нужно взять метод и что-то с ним сделать, а не полностью перезаписать. Для таких дел есть метод `super`:

* `super.method(...)` вызывает родительский метод
* `super(...)` вызывает родительский конструктор (работает лишь внутри конструктора)

```javascript
class Animal {
    constructor (name) {
        this.speed = 0
        this.name = name
    }
    run (speed) {
        this.speed = speed
        console.log(`${this.name} бежит со скоростью ${this.speed}`)
    }
    stop () {
        this.speed = 0
        console.log(`${this.name} стоит`)
    }

}

const animal = new Animal("Волк")


class Rabbit extends Animal { 
    hide () {
        console.log(`${this.name} прячется!`)
    }

    stop () { // заменяемый метод
    
        super.stop() // вызывается родительский метод stop от класса animal
        this.hide() // и затем сразу hide
    }
}

const rabbit = new Rabbit("Кролик")

rabbit.run(10)
rabbit.stop() // Кролик стоит, Кролик прячется!
``` 
***

## Переопределение конструктора 

Всё это время у `Rabbit` не было своего конструктора, он его брал из класса `Animal`.

Согласно спецификации, если класс расширяет другой класс и не имеет конструктора, то автоматически создаётся такой пустой конструктор: 

```javascript
class Rabbit extends Animal {

    constructor (...args) {
        super(...args)
    }
}
```

Он просто вызывает конструктор родительского класса, так будет происходить, пока не создадим свой собственный конструктор.

Добавление конструктора для `Rabbit`:

```javascript
class Animal {
    constructor (name) {
        this.speed = 0
        this.name = name
    }
}

class Rabbit extends Animal {
    constructor (name, earLength) {
        super(name) // перед this обязательно нужно писать super(options)
        this.earLength = earLength
    }
}

const rabbit = new Rabbit("Кролик", 10)

rabbit.name // Кролик
rabbit.earLength // 10
```

