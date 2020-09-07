## Внутренние и внешние интерфейсы

В объекто-ориентированном программировании свойства и методы разделены на две группы: 
* Внутренний интерфейс - методы и свойства, доступные из других методов класса, но не снаружи класса.*
* Внешний интерфейс - методы и свойства, доступные снаружи класса.

***
## Public

Публичное свойство доступно везде: из класса, из класса-потомков и т.д.

```javascript
class Public {
    publicField = "Публичный"
}

const test = new Public()

console.log(test.publicField) // Публичный
test.publicField = "Можно изменить"
console.log(test.publicField) // Можно изменить

class Ext extends Public {}

const test1 = new Ext()

console.log(test1.publicField) // Публичный
test1.publicField = "Можно изменить"
console.log(test1.publicField) // Можно изменить
```
***

## Protected

**Защищённые свойства обычно начинаются с префикса `_` .**

Защищенное свойство доступно только из класса и класса потомков. Если нужно обратиться к этому свойству из инстанса, сделать это можно только через публичный метод в классе.

```javascript
class Protected {
    _protectedField = "Защищенный"

    set protectedField (value) {
        this._protectedField = value
    }
    get protectedField () {
        return this._protectedField
    }
}

const test = new Protected()

console.log(test.protectedField) // Защищенный
test.publicField = "Можно изменить"
console.log(test.publicField) // Можно изменить


class Ext extends Protected {
    set protectedField (value) {
        this._protectedField = value + "!!!"
    }

    get protectedField () {
        return `Вот так получаем защищенные поля от класса _protectedField === ${this._protectedField}`
    }
}

const test1 = new Ext()

console.log(test1.protectedField) // Вот так получаем защищенные поля от класса _protectedField === Защищенный
test1.protectedField = "Можно изменить"
console.log(test1.protectedField) // Вот так получаем защищенные поля от класса _protectedField === Можно изменить!!!
```

## Только для чтения

Чтобы свойство в классе сделать только для чтения и никак нельзя было его изменить - нужно создать один геттер без сеттера и готово: 

```javascript
class CoffeMachine {

    constructor (power) {
        this._power = power
    }

    get power () {
        return this._power
    }
}

const coffeMachine = new CoffeMachine(100) // мощность
coffeMachine.power // 100

coffeMachine.power = 150 // ничего не происходит
```
***

## Private

Приватное свойство - это тоже самое, что и `Protected`, но оно лишёно доступа из классов-потомков. Т.е. потомки лишаются возможности изменить возвращаемое приватное свойство. 

Допустим, класс-родитель установил приватное свойство `#secret = 42`. Если бы оно было `Protected` - классы-потомки могли бы переписать геттеры и сеттер для доступа к нему таким образом, чтобы он возвращал другое значение.

Поскольку это свойство `private`, они не могут написать никакие методы (или пеоеопределить старые) для доступа к этому приватному полю. К нему можно будет обратиться только через оригинальные геттеры и сеттеры из класса-родителя через цепочку прототипов.

```javascript
class Private {
    #privateField = "Приватный"

    getPrivate () {
        return this.#privateField
    }
    setPrivate (value) {
        this.#privateField = value
    }
}

const test = new Private()

console.log(test.getPrivate()) // Приватный
test.setPrivate = "Нельзя изменить"
console.log(test.getPrivate()) // Приватный

class Ext extends Private {
    // из этого потомка никак нельзя обратиться к свойству #private, только через родительские методы
}

test1 = new Ext()

console.log(test1.getPrivate()) // Приватный
test1.setPrivate = "Нельзя изменить"
console.log(test1.getPrivate()) // Приватный

```