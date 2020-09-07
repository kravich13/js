// Информация о флагах

const kravich = {
    name: "Vlad"
}

const descriptor = Object.getOwnPropertyDescriptor(kravich, "name") // получить полную информацию о флагах для объекта

console.log(JSON.stringify(descriptor, null, 2)) 
// {
//   "value": "Vlad",
//   "writable": true,
//   "enumerable": true,
//   "configurable": true
// }





// Изменение флагов

// Если свойство существует, defineProperty обновит его флаги. В противном случае метод создаёт новое свойство с указанным значением и флагами; если какой-либо флаг не указан явно, ему присваивается значение false.

const kravich = {}

// Все флаги объекта теперь имеют значение false
Object.defineProperty(kravich, "name", {
    value: "Vlad"
})

const descriptor = Object.getOwnPropertyDescriptor(kravich, "name")

console.log(JSON.stringify(descriptor, null, 2))

// {
//     "value": "Vlad",
//     "writable": false,
//     "enumerable": false,
//     "configurable": false
// }





// Только для чтения

const kravich = {
    name: "Vlad"
}

Object.defineProperty(kravich, "name", {
    writable: false
})

kravich.name = "Kravich" // действие произошло, но kravich.name остался неизменным


// Свойство создано с нуля

const kravich = {}

Object.defineProperty(kravich, "name", {
    value: "Vlad",
    enumerable: true,
    configurable: true
})

kravich.name // Vlad
kravich.name = "Kravich" // ничего не произошло





// Неперечислимое свойство

const kravich = {
    name: "Vlad", 

    toString() {
        return this.name
    }
}

for (let key in kravich) console.log(key) // name, toString


// Запрет на вывод свойства в объекте

const kravich = {
    name: "Vlad", 

    toString() {
        return this.name
    }
}

// установка свойства конкретно для метода toString
Object.defineProperty(kravich, "toString", { 
    enumerable: false
})

for (let key in kravich) console.log(key) // name





// Неконфигурируемое свойство

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

console.log( JSON.stringify(descriptor, null, 2 ) )

// {
//     "value": 3.141592653589793,
//     "writable": false,
//     "enumerable": false,
//     "configurable": false
// }





// Метод Object.defineProperties

Object.defineProperties(kravich, { // изменение дескрипторов сразу для нескольких свойств
    name: {
        value: "Vlad",
        writable: false
    },

    surname: {
        value: "Kravich",
        writable: false
    },
})









