// Прототипное наследование с внешней стороны

const kravich = {
    money: true
}

const vlad = {
    car: true
}

// в прототипе vlad есть методы kravich
vlad.__proto__ = kravich

console.log(vlad.money) // у Влада деньги есть
console.log(kravich.car) // undefined





// Прототипное наследование с внутренней стороны

const kravich = {
    money: true,

    more: function () {
        console.log("More Time")
    }
}

const vlad = {
    car: true,

    __proto__: kravich
}

vlad.more() // More Time   




// Цепочка из прототипов

const kravich = {
    money: true,

    more: function () {
        console.log("More Time")
    }
}

const vlad = {
    car: true,

    __proto__: kravich
}

const maks = {
    brain: true,

    __proto__: vlad
}

maks.more() // More Time
maks.car // true




// Операции с записью

const kravich = {
    money: true,

    more: function () {
        console.log("More Time")
    }
}

const vlad = {
    car: true,

    __proto__: kravich
}

vlad.more = function () {
    console.log("Больше Времени")
}

vlad.more() // Больше Времени




// Цикл for...in

const kravich = {
    money: true,
}

const vlad = {
    car: true,

    __proto__: kravich
}

console.log(Object.keys(vlad)) // [ "car" ]

for (let prop in vlad) console.log(prop) // car, money

// фильтрация с помощью метода obj.hasOwnProperty(key)

for (let prop in vlad) {
    const isOwn = vlad.hasOwnProperty(prop)

    if (isOwn) {
        console.log(`Собственное свойство: ${prop}`) // car
    }
    else {
        console.log(`Прототипное свойство: ${prop}`) // money
    }
}