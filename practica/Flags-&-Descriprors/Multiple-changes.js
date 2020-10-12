// writable - true, значит свойство можно изменить
// enumerable - true, значит свойство будет перечисляться в циклах
// configurable - true, значит свойство можно удалить, а атрибуты можно изменять




// Метод Object.defineProperties позволяет изменять множество свойств сразу

const vlad = {}

Object.defineProperties(vlad, {
    name: {
        value: "Vlad",
        writable: false // только для чтения

    },
    age: {
        value: 22,
        writable: true // можно менять
    }
})

vlad.name = "Maxim" // менять нельзя
vlad.age = 33 

vlad // age: 33, name: "Vlad"





// Метод Object.getOwnPropertyDescriptors позволяет получить дескрипторы всех свойств сразу

const vlad = {}

Object.defineProperties(vlad, { // все свойства по умолчанию false
    name: {
        value: "Vlad",
        // writable: false // только для чтения

    },
    age: {
        value: 22,
        writable: true // можно менять
    }
})

const descriptors = Object.getOwnPropertyDescriptors(vlad, {})

vlad.name = "Maxim" // менять нельзя
vlad.age = 33 

vlad // age: 33, name: "Vlad"

console.log(descriptors) // все свойства дескрипторов

// age: Object { value: 22, writable: true, enumerable: false, … }
// name: Object { value: "Vlad", writable: false, enumerable: false, … }





// Поскольку по умолчанию у такого объекта все флаги равны false, то флаг configurable: true нужно вставлять в ручную! 
// Иначе изменить свойство объекта станет невозможной задаче и это свойство навсегда станет константой

const vlad = {}

Object.defineProperties(vlad, { // все свойства по умолчанию false
    name: {
        value: "Vlad",
        // writable: false // только для чтения
        // configurable: false // стоит по умолчанию, значит это свойство - константа навсегда

    },
    age: {
        value: 22,
        writable: true // можно менять
    }
})

Object.defineProperties(vlad, { // ошибка, изменять нельзя
    name: {
        configurable: true
    }
})

const descriptors = Object.getOwnPropertyDescriptors(vlad, {})

vlad.name = "Maxim" // менять нельзя
vlad.age = 33 

vlad // age: 33, name: "Vlad"

console.log(descriptors) // все свойства дескрипторов





// Клонирование объекта со всеми его флагами!

const vlad = {}

Object.defineProperties(vlad, { // все свойства по умолчанию false
    name: {
        value: "Vlad",
        // writable: false // только для чтения
        configurable: true

    },
    age: {
        value: 22,
        writable: true, // можно менять
        configurable: true
    }
})

const descriptors = Object.getOwnPropertyDescriptors(vlad, {})
console.log(descriptors)
// age: Object { value: 22, writable: true, enumerable: false, … }
// name: Object { value: "Vlad", writable: false, enumerable: false, … }


const clone = Object.defineProperties( {}, Object.getOwnPropertyDescriptors(vlad) )

// Объект полностью скопировался со всеми флагами у всех его свойств!
const cloneDescriprors = Object.getOwnPropertyDescriptors(clone, {})
console.log(cloneDescriprors) 
// age: Object { value: 22, writable: true, enumerable: false, configurable: true }
// name: Object { value: "Vlad", writable: false, enumerable: false, configurable: true }



