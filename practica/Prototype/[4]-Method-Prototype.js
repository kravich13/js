// Современные свойства прототипов

const vlad = {
    money: true
}

const kravich = Object.create(vlad)

kravich.money // true

Object.setPrototypeOf(kravich, {}) // изменение прототипа объекта kravich на {}

kravich.money // undefined, прототип был изменен




// Дополнительное свойство и метод новому объекту

const vlad = {
    money: true
}

const kravich = Object.create(vlad, {
    car: {
        value: true,
        configurable: true
    },
    sayHi: {
        value () {
            return console.log("тут")
        }
    }
})

kravich.car // true
kravich.money // true

kravich.sayHi() // привет





// Object.getPrototypeOf(obj)
const user = {
    name: "Vlad"
}

// kravich унаследовал от user
const kravich = Object.create(user) 

console.log(kravich) // <prototype>: Object { name: "Vlad" }

// возвращает свойство [[prototype]] объекта obj
Object.getPrototypeOf(kravich) === user // true





// Object.getPrototypeOf(obj, proto)
//////





// Object.getOwnPropertySymbols(obj) - возвращает массив всех собственных символьных ключей
const vlad = {}

const a = Symbol("a")
const b = Symbol.for("b")

vlad[a] = "localSymbol"
vlad[b] = "globalSymbol"

const arr = Object.getOwnPropertySymbols(vlad)

arr // Array [ Symbol(a), Symbol(b) ]





// Object.getOwnPropertyNames(obj) - возвращает массив, в котором сначала идут собственные цифровые ключи, а после - строковые
const vlad = {
    name: "Vlad",
    1232: 52,
    age: 22,
}

const arr = Object.getOwnPropertyNames(vlad)

arr // Array(3) [ "1232", "name", "age" ]





// Reflect.ownKeys(obj) - возвращает массив собственных ключей
const vlad = {
    name: "Vlad",
    age: 22
}

const arrVlad = []

console.log(Reflect.ownKeys(vlad)) // Array [ "name", "age" ]

console.log(Reflect.ownKeys(arrVlad)) // Array [ "length" ]





// obj.hasOwnProperty(key) - возвращает true, если у obj есть собственное свойство с именем key
const kravich = {
    name: "Kravich",
    age: 22
}

const vlad = Object.create(kravich, {
    name: { 
        value: "Vlad"
    } 
})

vlad.hasOwnProperty("name") // true, есть свой метод
vlad.hasOwnProperty("age") // false, нет своего метода, но есть в прототипе
console.log('age' in vlad)    // true