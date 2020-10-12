// writable - true, значит свойство можно изменить
// enumerable - true, значит свойство будет перечисляться в циклах
// configurable - true, значит свойство можно удалить, а атрибуты можно изменять




// Все дескрипторы у свойств установлены по умолчанию, если у объекта есть свойства

const vlad = {
    name: "Vlad",
    age: 22
}   

const descriptor = Object.getOwnPropertyDescriptor(vlad, "name") 

console.log(descriptor)

// Object {
//     value: "Vlad",
//     writable: true,
//     enumerable: true,
//     configurable: true
// }


// Этот объект можно изменять, его свойства будут видны в цикле и свойство можно удалить:

vlad.age = 33 // изменил возраст
delete vlad.name // удалил свойство name

for (let key in vlad) console.log(`${key}: ${vlad[key]}`) // age: 33





// Флаги можно изменить

const vlad = {
    name: "Vlad"
}

Object.defineProperty(vlad, "name", {
    writable: false // значение нельзя изменить
})

vlad.name = "Maxim"
vlad // Vlad, изменить имя теперь нельзя




// Неперечислимое свойство

const vlad = {
    name: "Vlad",
    toString() {
        return this.name
    }
}

for (let key in vlad) console.log(key) // name, toString

Object.defineProperty(vlad, "toString", {
    enumerable: false
})

for (let key in vlad) console.log(key) // name и только, метод toString скрыт





// У объекта с самого начала нет никаких свойств, по этому у его дескрипторов все флаги равны false

const vlad = {}

Object.defineProperty(vlad, "name", {
    value: "Vlad",
})

const descriptor = Object.getOwnPropertyDescriptor(vlad, "name")

vlad.name = "Maxim" // изменять нельзя
vlad // name: "Vlad"

console.log(descriptor) 
// { value: "Vlad", writable: false, enumerable: false, configurable: false }




// Чтобы изменить такой объект, нужно установить ему флаги true

const vlad = {}

Object.defineProperty(vlad, "name", {
    value: "Vlad",
    writable: true, // изменять можно
    configurable: true // модифицировать можно
})

vlad.name = "Maxim"
vlad // name: "Maxim"




// Если пустому объекту установить свойство configurable: false - его нельзя будет изменить уже никогда

const vlad = {}

Object.defineProperty(vlad, "name", {
    value: "Vlad",
    writable: false,
    configurable: false
})

vlad.name = "Maxim"
vlad // name: "Vlad"

Object.defineProperty(vlad, "name", {
    writable: true
}) // ошибка

vlad




// Флаги нужно запомнить и не путать, иначе можно заморозить поле объекта навсегда

const vlad = {}

Object.defineProperty(vlad, "name", {
    value: "Vlad",
    writable: false,
    configurable: false
})

Object.defineProperty(vlad, "age", {
    value: 22,
    writable: true,
    configurable: true
})

vlad.name = "Maxim" // запрещено и это вечная константа
vlad.age = "27" 

vlad // age: "27", name: "Vlad"











