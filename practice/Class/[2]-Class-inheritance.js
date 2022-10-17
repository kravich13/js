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





// Эти два класса независымы, но можно получить доступ от одного класса к другому с помощью метода extends:

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



// После extends может быть любое классовское выражение

function f (phrase) {
    return class {
        sayHi () {
            console.log(phrase)
        }
    }
}

class User extends f("Здарова") {}

new User().sayHi() // Здарова





// Переопределение методов

class Rabbit extends Animal {
    stop () {
        console.log(`${this.name} ждёт`)
        // будет использован для rabbit.stop
    }
}


// Но обычно нужно взять метод и что-то с ним сделать, а не полностью перезаписать, для таких дел есть метод super:

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

    stop () {
        super.stop() // вызывается родительский метод stop от класса animal
        this.hide() // и затем сразу hide
    }
}

const rabbit = new Rabbit("Кролик")

rabbit.run(10)
rabbit.stop() // Кролик стоит, Кролик прячется!



// У стрелочных функций нет super

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
    stop () {
        setTimeout( () => super.stop(), 1000) // вызывает родительский stop после 1 сек
    }
}
const rabbit = new Rabbit("Кролик")

rabbit.stop() // Кролик стоит





// Переопределение конструктора

// При расширении одного класса другим и если первый не имеет конструктор, то JS автоматически создаёт пустой конструктор родительского класса. Так будет происходить, пока не создастся собственный конструктор

class Animal {
    constructor (name) {
        this.speed = 0
        this.name = name
    }
}

class Rabbit extends Animal {
    constructor (name, earLength) {
        super(name)
        this.earLength = earLength
    }
}

const rabbit = new Rabbit("Кролик", 10)

rabbit.name // Кролик
rabbit.earLength // 10



