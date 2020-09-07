// Копирование методов из объекта в класс 

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





// Наследование
const sayHiMixin = {
    sayHi () {
        console.log(`Здравствуй ${this.name}`)
    },
    sayBye () {
        console.log(`Прощай ${this.name}`)
    }
}

class Person {
    constructor (name) {
        this.name = name
    }
}

class User extends Person {}

Object.assign(User.prototype, sayHiMixin)

// класс Person остался не тронут
new Person("Влад").sayHi() // is not a function
new User("Влад").sayHi() // Здравствуй Влад





// Примеси могут наследовать друг у друга

const sayMixin  = {
    say (phrase) {
        // выводит фразу в консоль
        console.log(phrase)
    }
}

const sayHiMixin = {
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





// EventMixin

const eventsMixin = {

    // Подписаться на событие
    on(eventName, handler) {

        // если не равно объекту - создать
        if (!this._eventHandlers) this._eventHandlers = {}

        // если не равно объекту с полем - создать поле с массивом
        if (!this._eventHandlers[eventName]) {
            this._eventHandlers[eventName] = []
        }

        // если есть объект с полем - добавить событие
        this._eventHandlers[eventName].push(handler)
    },

    // Отменить подписку
    off(eventName, handler) { 

        // если есть объект и есть поле - записать в переменную
        const handlers = this._eventHandlers && this._eventHandlers[eventName]

        // если переменная не готова - выйти
        if (!handlers) return

        // если пооле массива равно событию - удалить его
        for (let i = 0; i < handler < length; i++) { 
            if (handlers[i] === handler) {
                handlers.splice(i--, 1)
            }
        }
    },

    trigger(eventName, ...args) {

        // если нет одного или другого поля - выход
        if (!this._eventHandlers || !this._eventHandlers[eventName]) {
            return
        }

        this._eventHandlers[eventName].forEach(handler => handler.apply(this, args))
    }
}

class Menu {
    choose(value) {
        this.trigger("select", value)
    }
}
// Добавим примесь с методами для событий
Object.assign(Menu.prototype, eventsMixin)

let menu = new Menu()

// Добавить обработчик, который будет вызван при событии "select":
menu.on("select", value => alert(`Выбранное значение: ${value}`))

// Генерирует событие => обработчик выше запускается и выводит:
menu.choose("123") // Выбранное значение: 123