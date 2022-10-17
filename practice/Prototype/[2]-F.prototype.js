// Создание объектов через функцию-конструктор и установка прототипа

const vlad = {
    money: true
}

function Kravich (name) { // функция конструктор объекта
    this.name = name // name: name
}

Kravich.prototype = vlad // прототипирую Kravich объектом vlad

const kravich = new Kravich ("Just")
console.log(kravich) // Object { name: "Just" }

vlad.money // true, конструктор имеет доступ к объекту





// F.prototype по умолчанию, свойство constructor

function Kravich () {
    // Kravich.prototype = { constructor: Kravich }
    // Т.е. прототип установлен по умолчанию
}
console.log(Kravich.prototype.constructor == Kravich) // true



// если ничего не менять, свойство constructor будет доступно всем унаследованным объектам
function Kravich () {

}
const kravich = new Kravich() // наследует от { constructor: Kravich }

console.log(kravich.constructor == Kravich) // true, свойство получено из прототипа



// Использование свойства constructor существующего объекта для создания нового
function Kravich (name) {
    this.name = name // { name: name }
    console.log(name)
}

const kravich = new Kravich("Just") // Object { name: Just }

const kravich2 = new kravich.constructor("Fun") // Object { name: Fun }



// Если заменить прототип по умолчанию на другой объект, то свойства constructor в нём не будет
function Kravich () {}

Kravich.prototype = { // установка прототипом другого объекта
    money: true
}

const kravich = new Kravich() // 

console.log(kravich.constructor === Kravich) // false



// Добавление свойства к прототипу функции конструктору без изменения прототипа
function Kravich () {}

Kravich.prototype.money = true

const kravich = new Kravich ()
kravich.money // true, у прототипа есть такое свойство

