## Методы прототипов, объекты без свойства `__proto__`

Свойство `__proto__` считается устаревшим, вместо него нужно использовать современные методы: 

* `Object.create(proto, [descriptors])` - создаёт пустой объект со свойством `[[Prototype]]`, указанным как `proto` и необязательными дескрипторами свойств `descriptors`.
* `Object.getPrototypeOf(obj)` - возвращает свойство `[[Prototype]]` объекта `obj`.
* `Object.getPrototypeOf(obj, proto)` - устанавливает свойство `[[Prototype]]` объекта `obj` как `proto`.

Пример: 

```javascript
const vlad = {
    money: true
}

const kravich = Object.create(vlad)

kravich.money // true, vlad является прототипом kravich

Object.setPrototypeOf(kravich, {}) // изменение прототипа объекта kravich на {}

kravich.money // undefined, прототип был изменен
```

У `Object.create` есть необязательный второй аргумент: дескрипторы свойств. Можно добавить дополнительное свойство новому объекту таким образом:

```javascript
const vlad = {
    money: true
}

const kravich = Object.create(vlad, {
    car: {
        value: true
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
```

Так же можно использовать `Object.create` для продвинутого клонирования объекта, более мощного, чем копирование свойств в цикле `for..in`:

```javascript
const vlad = {
    money: true,
    car: true
}
const clone = Object.create(Object.getPrototypeOf(vlad), Object.getOwnPropertyDescriptors(vlad))

clone // Object { money: true, car: true }
```
***

## Простейший объект

В объекте все ключи работают как ожидается, кроме `__proto__`.

Пример: 

```javascript
const obj = {}

const key = "__proto__" // установка ключа с именем __proto__

obj[key] = "Text" // добавление текста в value

obj // {} - объект пуст
```

Происходит так потому, что свойство `__proto__` особенное: оно должно быть либо объектом, либо `null`, а строка не может быть прототипом.

`__proto__` – это способ доступа к свойству `[[Prototype]]`, это не само свойство `[[Prototype]]`.

Теперь, если мы хотим использовать объект как ассоциативный массив, мы можем сделать это с помощью небольшого трюка:

```javascript
const obj = Object.create(null)

const key = "__proto__"

obj[key] = "Text"

obj // Object { __proto__: "Text" }
```

Теперь геттер/сеттер не унаследован для `__proto__`. Теперь свойство обрабатывается как обычное свойство.
***

## Дополнительные методы

Ещё методы: 


* `Object.keys(obj)` / `Object.values(obj)` / `Object.entries(obj)` – возвращают массив всех перечисляемых собственных строковых ключей/значений/пар ключ-значение.
* `Object.getOwnPropertySymbols(obj)` – возвращает массив всех собственных символьных ключей.
* `Object.getOwnPropertyNames(obj)` – возвращает массив всех собственных строковых ключей.
* `Reflect.ownKeys(obj)` – возвращает массив всех собственных ключей.
* `obj.hasOwnProperty(key)`: возвращает `true`, если у `obj` есть собственное (не унаследованное) свойство с именем `key`.

Все методы, которые возвращают свойства объектов (такие как `Object.keys` и другие), возвращают «собственные» свойства. Если мы хотим получить и унаследованные, можно воспользоваться циклом `for..in`.