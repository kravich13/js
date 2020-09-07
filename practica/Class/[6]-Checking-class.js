class Kravich {}

const vlad = new Kravich()

// vlad принадлежит классу Kravich 
console.log(vlad instanceof Kravich) // true



// конструкторы
function Kravich () {}

console.log(new Kravich() instanceof Kravich) // true





// instaceof идёт по цепочке прототипов классов. 
// Т.е. массив наследуется от прототипа Array, а прототип Array от прототипа Object

const arr = [1, 2, 3]

console.log(arr instanceof Array) // true, сначала идёт массив
console.log(arr instanceof Object) // true, затем объект


// Объекты
const obj = {}

console.log(obj instanceof Object) // true


// Строки
const numb = new Number(33)

console.log( numb instanceof Number ) // true





// Symbol.hasInstance меняет поведение наследования у классов

class Kravich {
    static [Symbol.hasInstance] (obj) {

        // если в объекте есть поле money - вернуть true
        if (obj.money) return true
        if (obj.brain) return true
    }
}

const vlad = { money: true }
const max = { money: true, brain: true }

console.log(vlad instanceof Kravich) // true
console.log(max instanceof Kravich) // true

// наследование
class Vlad extends Kravich {}

const test = { money: true, brain: true }

console.log(test instanceof Vlad) // true





// Большая часть классов не имеет метода Symbol.hasInstance, по этому проверяется, равен ли Class.prototype одному из прототипов цепочке obj

class Kravich {}
class Vlad extends Kravich {}

const vlad = new Vlad()

console.log(vlad instanceof Kravich) // true

// Фактически, проверяется следующее:
// vlad.__proto__ === Vlad.prototype  // true
// vlad.__proto__.__proto__ == Kravich.prototype // true

// obj vlad --> Vlad.prototype --> Kravich.prototype --> Object.prototype





// Есть метод objA.isPrototypeOf(objB), который возвращает true, если объект objA есть где-то в прототипной цепочке объекта objB

function One () {}
function Two () {}

// в прототип второй функции записали первую функцию
Two.prototype = new One()

function Three () {}

// в прототип третьей функции записали вторую функцию (в ней есть первая)
Three.prototype = new Two()

function Four () {}

// в прототип четвертой функции записали третью функци (в ней есть вторая и первая)
Four.prototype = new Three()

const four = new Four()

// проверка, есть ли Two в прототипной цепочке переменной four (тут вся цепочка функций-классов)
Two.prototype.isPrototypeOf(four) // true


// Сам конструктор Class не участвует в процессе проверки, важна только цепочка прототипов Class.prototype


function Kravich () {}
const vlad = new Kravich()

Kravich.prototype = {} 

console.log(vlad instanceof Kravich) // false, удалили связь





// Object.prototype.soString возвращает тип

const obj = {}

alert(obj) // [object Object]
console.log(obj.toString()) // тоже самое



// Для всего остального и т.д.
const objectToString = Object.prototype.toString

let age = 22
const qq = true
const arr = []
const nulls = null

console.log( objectToString.call(age) ) // [object Number]
console.log( objectToString.call(qq) ) // [object Boolean]
console.log( objectToString.call(arr) ) // [object Array]
console.log( objectToString.call(nulls) ) // [object Null]





// поведение метода объектов toString можно настраивать, используя спец. свойство Symbol.toStringTag

const user = {
    [Symbol.toStringTag]: "Vlad"
}

console.log( {}.toString.call(user) ) // [object Vlad]