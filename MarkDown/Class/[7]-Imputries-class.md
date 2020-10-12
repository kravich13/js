## Примеси

В JS можно наследовать только от одного объекта. Объект имеет один единственный `[[Prototype]]`. И класс может расширить только один другой класс. 

Примеси позволяют к примеру из двух классов сделать примесь в одном, или же из объекта достать методы и добавить их к классу.
***

## Пример примеси

Для создания примеси можно создать объект с полезными методами, которые затем могут быть добавлены в прототип любого класса.

Класс `User` в прототипе имеет методы объекта `sayHiMixin`:

```javascript
const sayHiMixin = {
    sayHi () {
        console.log(`Здравствуй ${this.name}`)
    },
    sayBye () {
        console.log(`Прощай ${this.name}`)
    }
}

class User {
    constructor (name) {
        this.name = name
    }
}

console.log(User.prototype) // прототип класса пустой
Object.assign(User.prototype, sayHiMixin)
console.log(User.prototype) // прототип класса имеет все методы из объекта sayHiMixin

new User("Влад").sayHi() // Здравствуй Влад
new User("Влад").sayBye() // Прощай Влад
```

Это не наследование, а простое копирование методов. Класс `User` может наследовать от другого класа, но так же иметь в себе его примеси: 

```javascript
class User extends Person {}

Object.assign(User.prototype, sayHiMixin)

// класс Person остался не тронут
new Person("Влад").sayHi() // is not a function
new User("Влад").sayHi() // Здравствуй Влад
```
***

## Примеси могут наследовать друг у друга

Объект `sayHiMixin` наследует от объекта `sayMixin`:

```javascript
const sayMixin  = {
    say (phrase) {
        // выводит фразу в консоль
        console.log(phrase)
    }
}

const sayHiMixin = {
    // в прототипе имеет метод объекта SayMixin
    __proto__: sayMixin,

    sayHi() {
        // вызываем метод родителя, это и есть фраза
        super.say(`Привет, ${this.name}`) 
    },
    sayBye() {
        super.say(`Пока, ${this.name}`) 
    }
}
console.log(sayHiMixin) // в прототипе имеет метод say от объекта sayMixin


class User {
    constructor (name) {
        this.name = name
    }
}

// в прототип класса user записывается весь объект sayHiMixin с прототипом метода из sayMixin
Object.assign(User.prototype, sayHiMixin)


// класс User имеет методы объекта SayHiMixin, который в свою очередь имеет методы объекта sayMixin
new User("Влад").sayHi() // привет, Влад


// наследование
class Vlad extends User {}

new Vlad("Kravich").sayBye() // Пока, Kravich
```