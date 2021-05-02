- [Тип данных Symbol](#тип-данных-symbol)
- [Символы](#символы)
- [Скрытыие свойства](#скрытыие-свойства)
- [Символы игнорируются циклом for...in](#символы-игнорируются-циклом-forin)
- [Глобальные символы](#глобальные-символы)
- [Symbol.keyFor](#symbolkeyfor)

## Тип данных Symbol

В качестве стандартных ключей для свойств объекта обычно могут использоваться только строки или символы. Ни числа, ни логические значения не подходят, разрешены только два этих типа.

## Символы

Создаются новые символы с помощью функции `Symbol()`

```javascript
const id = Symbol("Kravich")
```

При создании ему можно дать описание в двойных кавычках (не обязательно).

Символы абсолютно уникальны, если записать один и тот же символ в две разные переменные и сравнить их - будет false, потому что каждый символ абсолютно уникален.

```javascript
const id1 = Symbol("Kravich")
const id2 = Symbol("Kravich")
console.log(id1 === id2) // false
```
***

## Скрытыие свойства

Символы позволяют создавать скрытыие свойства объектов, в которым нельзя нечаянно обратиться и перезаписать.

Пример: 

```javascript
const user = {
    name: "Vlad"
    // здесь нет никаких id, а если сделать обращение напрямую - то он есть
}

const id = Symbol("Kravich")

user[id] = 22
console.log(user[id]) // 22
```
***

## Символы игнорируются циклом for...in

Свойства, чьи ключи - символы, не перебираются циклом `for...in`.

```javascript
const id = Symbol("Kravich")
const user = {
    name: "Vlad",
    age: 22,
    [id]: 13000000
}

for (let key in user) console.log(key) // name, age

// хотя при этом можно обратиться на прямую:
console.log(user[id]) // 13000000
```

Это удобно. Если другая библиотека или скрипт будет работать с таким объектом, то при переборе ключей они не получат символьное свойство.

**А вот `Object.assign`, в отличии от `for...in`, копирует и строковые и символьные свойства.**

```javascript
const id = Symbol("Kravich")
const user = {
    [id]: 13000000
}

const clone = Object.assign ({}, user)

console.log(clone[id]) // 13000000
```
***

## Глобальные символы

Когда нужно чтобы символы были с одинаковыми именами и обращение было к одному и тому же символу - нужно использовать метод `Symbol.for(key)`.

**Он проверяет глобальный реестр и при наличии в нём символа с именем `key` и возвращает его**, иначе же создаётся новый `Symbol(key)` и записывается в реестре под ключём `key`.

```javascript
const id = Symbol.for("Kravich") // создал символ с ключём key
const idNew = Symbol.for("Kravich") // читаю его же в другой переменной

console.log(id === idNew) // true
// это один и тот же символ
```
***

## Symbol.keyFor

Для глобальных символов, кроме `Symbol.for(key)`, который ищет только символ по имени, существует обратный метод: `Symbol.keyFor(sym)`, который, наоборот, принимает глобальный символ и возвращает его имя.

```javascript
// получение символа по имени
const sym = Symbol.for("name")
const sym2 = Symbol.for("id")

// получение имени по символу
console.log(Symbol.keyFor(sym)) // name
console.log(Symbol.keyFor(sym2)) // id
```

**Этот метод не работает для неглобальных символов. Если символ неглобальный, метод не сможет его найти и вернёт `undefined`.** 

Для получения имени в таком случае доступно свойство `description`.

```javascript
const globalSymbol = Symbol.for("name")
const localSymbol = Symbol("name")

console.log( Symbol.keyFor(globalSymbol) ) // name, глобальный символ
console.log( Symbol.keyFor(localSymbol) ) // undefined для неглобального символа

console.log(localSymbol.description ) // name
```