## Флаги свойств

Помимо значения `value`, свойства объекта имеют дополнительные три атрибута (флаги): 

* `writable: true` - свойство можно изменить
* `enumerable: true` - свойство будет перечисляться в циклах
* `configurable: true` - свойство можно удалить, а атрибуты можно изменять
**Установив это свойство как `false`, свойство навсегда останется константой, которую нельзя никак и ничем изменить**.


### Получение текущего значения флагов у конкретного свойства объекта производится с помощью метода ` Object.getOwnPropertyDescriptor`:

```javascript
const descriptor = Object.getOwnPropertyDescriptor(obj, "имя свойства")
```
**У объекта, созданного со свойствами с самого начала, все флаги равны `true` по умолчанию.**

Пример: 

```javascript
const vlad = { // есть свойства с самого начала
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
```
***


### Для изменения флагов можно использовать метод `Object.defineProperty`.

```javascript
Object.defineProperty(obj, "имя свойства", descriptor)
```

Если свойство существует (создано в самом объекте), `defineProperty` обновит его флаги. **Если же у объекта нет никаких свойств и в `defineProperty` флаги не указаны явно, то неуказанные флаги имеют значение `false`.**

Пример: 

```javascript
const vlad = {} // в объекте нет никаких свойств

Object.defineProperty(vlad, "name", {
    value: "Vlad",
    writable: true,
    configurable: true,
    // enumerable: false // свойство не будет перечисляться в циклах
})

const descriptor = Object.getOwnPropertyDescriptor(vlad, "name")

vlad.name = "Maxim" 
vlad // name: "Maxim"

for (let key in vlad) console.log(vlad[key]) 
// Пусто, свойство запрещено перечислять в цикле

console.log(descriptor) 
// { value: "Maxim", writable: true, enumerable: false, configurable: true }
```
***


## Только для чтения

Сделаем свойство `vlad.name` доступным только для чтения, изменив флаг `writable` на `false`:

```javascript
const vlad = {
    name: "Vlad"
}

const descriptor = Object.defineProperty(vlad, "name", {
    writable: false // только для чтения

    // все остальные флаги установлены по умолчанию как true
})

vlad.name = "Maxim"
vlad // Object { name: "Vlad" }
```

Никто не сможет изменить имя, если только не обновит флаг новым вызовом `defineProperty`.
***
## Неперечислимое свойство

Сделаем собственный метод объекта `toString`, который не будет перечисляться в циклах с помощью установки флага `enumerable` как `false`:

```javascript
const vlad = { // свойства с самого начала, все флаги true по умолчанию
    name: "Vlad",

    toString() {  // собственный метод
        return this.name
    }
}

Object.defineProperty(vlad, "toString", { 
    enumerable: false 
})

for (let key in vlad) console.log(key) // name, метод toString скрыт
```

Неперечислимые свойства объекта также не возвращаются `Object.keys`:

```javascript
console.log(Object.keys(vlad)) // Array [ "name" ]
```
***

## Неконфигурируемое свойство

Как сказано в самом начале, **установив свойство `configurable` как `false`, свойство навсегда останется константой, которую нельзя никак и ничем изменить**.

Такое свойство никак нельзя изменить/удалить и даже нельзя изменить какой либо флаг. Таким образом, свойство объекта навсегда останется замороженной константой: 

```javascript
const vlad = {} // нет никаких свойств

Object.defineProperty(vlad, "name", {
    value: "Vlad",

    // никакие флаги не установлены в ручную и по умолчанию равны false
})

const descriptor = Object.getOwnPropertyDescriptor(vlad, "name")
console.log(descriptor) 
// { value: "Vlad", writable: false, enumerable: false, configurable: false }


vlad.name = "Maxim" // изменить нельзя
delete vlad.name // удалить нельзя
for (let key in vlad) console.log(key) // перечислять в цикле нечего


Object.defineProperty(vlad, "name", { // ошибка, нельзя изменять флаги
    configurable: true
})
```
***

## Object.defineProperties

Метод `defineProperties` позволяет определять множество свойств сразу: 

```javascript
const vlad = {}

Object.defineProperties(vlad, {
    name: { // только для чтения
        value: "Vlad",
        writable: false, 
        configurable: true

    },
    age: { // можно менять
        value: 22,
        writable: true, 
        configurable: true
    }
})

vlad.name = "Maxim" // менять нельзя
vlad.age = 33 

vlad // age: 33, name: "Vlad"
```
***

## Object.getOwnPropertyDescriptors

Метод `getOwnProperyDescriptors` может получить все дескрипторы свойств сразу:

```javascript
const vlad = {} // все флаги по умолчанию false

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

vlad.name = "Maxim" // менять нельзя
vlad.age = 33 

vlad // age: 33, name: "Vlad"

console.log(descriptors) // все свойства дескрипторов

// age: Object { value: 22, writable: true, enumerable: false, configurable: true }
// name: Object { value: "Vlad", writable: false, enumerable: false, configurable: true }
```

**Вместе с `Object.defineProperties` этот метод можно использовать для клонирования объекта вместе со всеми его флагами:**

```javascript
const clone = Object.defineProperties( {}, Object.getOwnPropertyDescriptors(obj) )
```
***

## Глобальное запечатывание объекта

Методы, которые ограничивают доступ ко всему объекту: 

* `Object.preventExtensions(obj)` - запрещает добавлять любые свойства в объект
* `Object.seal(obj)` - запрещает удалять/добавлять свойства. Устанавливает `configurable: false` для всех существующих свойств.
* `Object.freeze(obj)` - запрещает удалять/добавлять/изменять свойства. Устанавливает `configurable: false`, `writable: false` для всех существующих свойств.


Методы для глобальной проверки дескрипторов: 

* `Object.isExtensible(obj)` - возвращает `false`, если добавление свойств запрещено, иначе - `true`
* `Object.isSealed(obj)` - возвращает `true`, если удаление/добавление свойств запрещено и для всех существующих свойств установлено `configurable: false`
* `Object.isFrozen(obj)` - возвращает `true`, если удаление/добавление/изменение свойств запрещено и для всех свойств установлено `configurable: false`, `writable: false.`