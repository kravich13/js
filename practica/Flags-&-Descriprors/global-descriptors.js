// Методы для глобального запечатывания всего объекта, а не конкретных свойств


// Object.preventExtensions(obj) - запрещает добавлять любые свойства в объект

const vlad = {
    name: "Vlad",
    family: "Kravich"
}

Object.preventExtensions(vlad)

vlad.age = 22 // запрещено

vlad // Object { name: "Vlad", family: "Kravich" }




// Object.seal(obj) - запрещает удалять/добавлять свойства. Устанавливает configurable: false для всех существующих свойств.

const vlad = {
    name: "Vlad",
    family: "Kravich"
}

Object.seal(vlad)

vlad.age = 22 // запрещено
delete vlad.family // запрещено

vlad // Object { name: "Vlad", family: "Kravich" }




// Object.freeze(obj) - запрещает удалять/добавлять/изменять свойства. Устанавливает configurable: false, writable: false для всех существующих свойств.

const vlad = {
    name: "Vlad",
    family: "Kravich"
}

Object.freeze(vlad)

vlad.age = 22 // запрещено
vlad.name = "Maxim" // запрещено
delete vlad.family // запрещено

vlad // Object { name: "Vlad", family: "Kravich" }





// Методы для глобальной проверки дескрипторов: 

// Object.isExtensible(obj) - возвращает false, если добавление свойств запрещено, иначе - true

const vlad = {
    name: "Vlad",
    family: "Kravich"
}

Object.isExtensible(vlad) // true, свойства можно добавлять

vlad.age = 22

vlad // Object { name: "Vlad", family: "Kravich", age: 22 }




// Object.isSealed(obj) - возвращает true, если удаление/добавление свойств запрещено и для всех существующих свойств установлено configurable: false.

const vlad = {
    name: "Vlad",
    family: "Kravich"
}

Object.seal(vlad) // запретил удаление/добавление свойств

Object.isSealed(vlad) // true, свойства запрещено удалять и добавлять

vlad.age = 22 // запрещено
delete vlad.family // запрещено

vlad // Object { name: "Vlad", family: "Kravich" }




// Object.isFrozen(obj) - возвращает true, если удаление/добавление/изменение свойств запрещено и для всех свойств установлено configurable: false, writable: false.

const vlad = {
    name: "Vlad",
    family: "Kravich"
}

Object.freeze(vlad) // заморозил объект

Object.isFrozen(vlad) // true, запрещено удалять/добавлять и изменять

vlad.age = 22 // запрещено
vlad.name = "Maxim" // запрещено
delete vlad.family // запрещено

vlad // Object { name: "Vlad", family: "Kravich" }
