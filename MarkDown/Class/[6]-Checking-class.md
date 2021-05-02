- [Проверка класса instanceof](#проверка-класса-instanceof)
- [Статический метод Symbol.hasInstance](#статический-метод-symbolhasinstance)
- [objA.isPrototype(objB)](#objaisprototypeobjb)
- [Object.prototype.toString возвращает тип](#objectprototypetostring-возвращает-тип)
- [Symbol.toStringTag](#symboltostringtag)

## Проверка класса instanceof

Оператор `instanceof` позволяет проверить, к какому классу принадлежит объект с учётом наследования.

Оператор вернёт `true`, если `obj` принадлежит классу `Class` или наследующему от него:

```javascript
class Kravich {}

const vlad = new Kravich()

// vlad принадлежит классу Kravich 
console.log(vlad instanceof Kravich) // true
```

Тоже самое работает с функциями конструкторами: 

```javascript
function Kravich () {}

console.log(new Kravich() instanceof Kravich) // true
```

И для встроенных классов, таких как `Array` и т.д.: 

```javascript
const arr = [1, 2, 3]

console.log(arr instanceof Array) // true, сначала идёт массив
console.log(arr instanceof Object) // true, затем объект
```

`arr` принадлежит сначала к классу `Array`, а уже после этого к классу `Object`.
*** 

## Статический метод Symbol.hasInstance

Обычно `instanceof` просматривает для проверки цепочку прототипов, но с помощью статического метода `Symbol.hasInstance` это поведение можно изменить:

```javascript

class Kravich {
    static [Symbol.hasInstance] (obj) {

        // если в объекте есть поле money или brain - вернуть true
        // это поведение можно настраивать как угодно

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
```

Работает следующим образом:

* Если имеется статический метод `Symbol.hasInstance`, тогда вызвать его: `Class[Symbol.hasInstance](obj)`. Он должен вернуть либо `true`, либо `false`, третьего не дано.
* Большая часть классов не имеет метода `Symbol.hasInstance`. В этом случае используется стандартная логика, равен ли `Class.prototype` одному из прототипов в прототипной цепочке `obj`.

Пример того, как объект `vlad` сравнивается с классом `Kravich`:

`obj vlad --> Vlad.prototype --> Kravich.prototype --> Object.prototype`.
***

## objA.isPrototype(objB)

Есть метод `objA.isPrototypeOf(objB)`, который возвращает `true`, если `objA` есть где-то в прототипной цепочке объекта `objB`:

```javascript
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
```
Сам конструктор `Class` не участвует в процессе проверки, важна только цепочка прототипов `Class.prototype`.
***

## Object.prototype.toString возвращает тип

Обычные объекты преобразуются к строке к строке как `[object Object]`:

```javascript
const obj = {}

alert(obj) // [object Object]
console.log(obj.toString()) // тоже самое
```

Так работает реализация метода `toString`, но у него есть скрытые возможности, которые делают метод более мощным. Можно использовать его расширенную версию `typeof` и как альтернативу `instanceof`:

```javascript
const objectToString = Object.prototype.toString

let age = 22
const qq = true
const arr = []
const nulls = null

console.log( objectToString.call(age) ) // [object Number]
console.log( objectToString.call(qq) ) // [object Boolean]
console.log( objectToString.call(arr) ) // [object Array]
console.log( objectToString.call(nulls) ) // [object Null]
```

Использован `call`, чтобы выполнить функцию `objectToString` в контексте `this=arr`.
***

## Symbol.toStringTag 

Поведение метода объектов `toString` можно настраивать, используя спец. свойство объекта `Symbol.toStringTag`:

```javascript
const user = {
    [Symbol.toStringTag]: "Vlad"
}

console.log( {}.toString.call(user) ) // [object Vlad]
```