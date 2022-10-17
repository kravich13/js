// 1) Ошибка создания экземпляра класса

class Animal {

    constructor(name) {
        this.name = name;
    }

}

class Rabbit extends Animal {
    constructor(name) {
        this.name = name;
        this.created = Date.now();
    }
}

let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
alert(rabbit.name);




// Решение

class Animal {

    constructor(name) {
        this.name = name;
    }

}

class Rabbit extends Animal {
    constructor(name) {
        super(name) // super должен быть перед this
        this.created = Date.now();
    }
}

let rabbit = new Rabbit("Белый кролик")
alert(rabbit.name); // Белый кролик






// 2) Улучшенные часы

class ExtendedClock extends Clock {
    constructor (option) {
        super(option)

        let {precision = 1000} = option
        this.precision = precision
    }
}