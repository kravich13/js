- [Class](#class)
- [Class Expression](#class-expression)
- [Геттеры и сеттеры](#геттеры-и-сеттеры)

## Class 

Классы нужны для массового создания объектов с разными ключами и методами одного и того же типа. Достаточно создать один класс, нежели 1000 объектов с одинаковой структурой.

Синтаксист выглядит так: 

```javascript
class User {
    constructor (arg) {...}

    method1 () {...}
    method2 () {...}
    ...
}
```

Затем нужно использовать `new User()`  для создания нового объекта со всеми перечисленными методами.

Метод `constructor()` вызывается автоматически и в нём можно инициализировать объект: 

```javascript
class User {
    
    constructor (options) {
        this.name = options.name
        this.age = options.age
        this.money = options.money
    }

    sayHi () {
        console.log(`Привет ${this.name}`)
    }
}

const vlad = new User({
    name: "Vlad",
    age: 22,
    money: 13000000
})

vlad // Object { name: "Vlad", age: 22, money: 13000000 }
vlad.sayHi() // Привет Vlad
```

**В самом объекте нет тех методов, что есть в классе `User`, но их можно использовать.**

При вызове `new User({...})` происходит следующее:

* создаётся новый объект
* `constructor` запускается с заданным аргументом и сохраняет его в `this.name`

После чего, можно вызвать все методы, такие как `sayHi()`.
***

## Class Expression

Как и функции, классы можно определять внутри переменных, передавать, возвращать, присваивать и т.д.

Класс определнный в переменную может иметь имя: 

```javascript
const User = class MyClass {
    sayHi() {
        console.log(MyClass) // имя MyClass видно только внутри класса
    }
}

new User().sayHi() //class MyClass {}
```

Так же можно динамически создавать классы по запросу: 

```javascript
function makeClass (phrase) {
    return class { // возвращает класс
        sayHi() {
            console.log(phrase)
        }
    }
}

const User = makeClass("Здарова")

new User().sayHi() // Здарова
```
***

## Геттеры и сеттеры

В классах можно объявить геттеры и сеттеры.

Пример с `vlad.name` реализованного с помощью геттера и сеттера: 

```javascript
class User {

    constructor (name) {
        this.name = name
    }

    get name () {
        return this._name 
    }
    set name (value) {
        if (value.length < 4) {
            return console.log("Короткое имя")
        }
        this._name = value
    }

}

let vlad = new User("Влад")

vlad.name // Влад
vlad = new User("Ку") // короткое имя
```

**Классы технически являются функциями, в то время как методы, геттеры и сеттеры записываются в `Class.prototype`.**