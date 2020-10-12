// Классы нужны для создания объектов в массовых количествах с одним и теми же параметрами (ключами), в которые можно добавлять разные методы.




// Примерное использование классов:

class Vlad {
    
    constructor (options) {
        this.name = options.name
        this.age = options.age
        this.money = options.money
    }

    sayHi () {
        console.log(`Привет ${this.name}`)
    }
}

const vlad = new Vlad({
    name: "Vlad",
    age: 22,
    money: 13000000
})

vlad // Object { name: "Vlad", age: 22, money: 13000000 }
vlad.sayHi() // Привет Vlad






/////////////////
class Kravich {
    
    constructor (name) { // конструктор объекта (key: value)
        this.name = name
    }

    sayHi () { // методы (можно писать что угодно)
        console.log(`Привет, ${this.name}`)
    }
}

const kravich = new Kravich("Vlad")

kravich.sayHi() // Привет, Vlad
kravich.name // Vlad





// Class Expression

// const Kravich = class Kravich


const User = class Kravich {

    sayHi () {
        console.log(Kravich)
    }
}

new User().sayHi() //class Kravich {}




// Динамическое создание классов по запросу

function makeClass (phrase) {
    return class { // возвращает класс
        sayHi() {
            console.log(phrase)
        }
    }
}

const User = makeClass("Здарова")

new User().sayHi() // Здарова





// Геттеры и сеттеры

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

vlad = new User("") // короткое имя

