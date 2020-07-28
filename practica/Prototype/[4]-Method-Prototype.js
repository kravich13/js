// Современные свойства прототипов

const vlad = {
    money: true
}

const kravich = Object.create(vlad)

kravich.money // true

Object.setPrototypeOf(kravich, {}) // изменение прототипа объекта kravich на {}

kravich.money // undefined, прототип был изменен




// Дополнительно свойство новому объекту

const vlad = {
    money: true
}

const kravich = Object.create(vlad, { // установка доп. свойства в прототип vlad
    car: {
        value: true
    }
})

kravich.car // true

alert(kravich)

