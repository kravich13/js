# Геттеры и сеттеры - свойства объекта

Геттеры - это свойства-данные только для чтения.
Сеттеры - это свойства-акрессоры для присвоения и получения передаваемого значения.
***
## Геттер и сеттеры

```javascript
const obj = {
    get propName () {
        // getter, срабатывает при чтении obj.propName
    },
    set propName (value) {
        // setter, срабатывает при записи obj.propName = value
    }
}
```

К примеру есть объект со свойствами `name` и `surname`, хотелось бы получить поле `fullName` из этих двух свойств, для такого пригодится геттер:

```javascript
const vlad = {
    name: "Vlad",
    surname: "Kravich",

    get fullName () {
        return `${this.name} ${this.surname}`
    }
}

vlad.fullName // Vlad Kravich
```

Замена имени и фамилии с помощью геттера и сеттера и объединение в поле `fullName`:

```javascript
const vlad = {
    name: "Vlad",
    surname: "Kravich",

    get fullName () { // читает
        return `${this.name} ${this.surname}`
    }, 
    set fullName (value) { // создать массив по разделителю "пробел"
        [this.name, this.surname] = value.split(" ") 
    }
}

vlad.fullName // Vlad Kravich
vlad.fullName = "Maxim Kravich"
vlad.fullName // Maxim Kravich
```

В итоге получено свойство `fullName`, которое можно прочитать и изменить.
***

## Дескрипторы свойств доступа

Дескрипторы свойств-акрессоров отличаются от обычных свойств объекта.

Свойства-акрессоры не имеют `value` и `writable`, но взамен предлагают функции `get` и `set`:

Т.е. дескриптор-акрессора может иметь
* `get` - функция без аргументов, которая сработает при чтении свойства
* `set` - функция с аргументом, которая сработает при присвоении свойства
* И все остальные флаги обычных дескприпторов (`enumerable`, `configurable` и `writable`).

Пример создания акрессора `fullName` при помощи `defineProperty` и возможность передать дескриптор с использованием `get` и `set`:

```javascript
const vlad = {
    name: "Vlad",
    surname: "Kravich"
}

Object.defineProperty(vlad, "fullName", {

    configurable: true,
    // все остальные флаги установлены как false

    get () {
        return `${this.name} ${this.surname}`
    },
    set (value) {
        [this.name, this.surname] = value.split(" ")
    }
})

console.log(vlad.fullName) // Vlad Kravich

for (let key in vlad) console.log(key) // name, surname
// в цикле выводиться не будет, флаг enumerable установлен как false
```
***

## Умные геттеры и сеттеры

Геттеры и сеттеры можно использовать как обёртки над реальными значениями свойств, чтобы получить больше контроля над операциями с ними.

К примеру, если запретить устанавливать короткое имя для `user`, можно использовать сеттер `name` для проверки, а само значение хранить в отдельном свойстве `_name`:


```javascript
const vlad = {
    get name () {
        return this._name
    },
    set name (value) {
        if (value.length < 4) {
            return console.log("Короткое имя")
        }
        this._name = value // значение хранится в переменной _name (общ.согл.)
    }
}

vlad.name = "Vlad" 
vlad.name = "Kra" // Короткое имя
```

Таким образом, само имя хранится в `_name`, доступ к которому производится через геттеры и сеттер. 

**Свойства, которые начинаются с символа "`_`" являются внутренними и к ним не следует обращаться за пределами объекта.**
***

## Использование для совместимости

Объекты в основном хранят первоначальный возраст в объекте в поле `age`, а что, если хранить дату рождения и таким образом иметь свежие данные о пользователе всегда?

Добавление геттера для `age` решит проблему: 

```javascript
function User (name, birthYear) {
    this.name = name
    this.birthYear = birthYear

    Object.defineProperty(this, "age", {
        enumerable: true,

        get () {
            const todayYear = new Date().getFullYear()
            return todayYear - this.birthYear.getFullYear()
        }
    })
}

const vlad = new User("Vlad", new Date(1997, 8, 2))

for (let key in vlad) console.log(`${key}: ${vlad[key]}`)
// name: Vlad, birthYear: Tue Sep 02 1997, age: 23
```

Таким образом, в объектах всегда будет актуальная информация о возрасте пользователя.

***

## Удаление геттеров и сеттеров

Геттеры и сеттеры можно удалять как обычные свойства: 

```javascript
const vlad = {

    get name () {
        return this._name
    },
    set name (value) {
        if (value.length < 4) {
            return console.log("Короткое имя")
        }
        this._name = value // значение хранится в переменной _name (общ.согл.)
    }
}

vlad.name = "Vlad" // подходит под условие

delete vlad._name // сеттер удалён
delete vlad.name // геттер удалён

vlad // {} - объект пустой
```
*** 

## Нельзя иметь метод и геттер с одним именем

В конкретном примере свойство `fullName` существует до тех пор, пока его не перезапишет. 

Цепь следующая: `fullName` --> `get/set fullName` --> `fullName`.

```javascript
const vlad = {
    name: "Vlad",
    surname: "Kravich",

    fullName: "Vlad Kravich", // Uncaught SyntaxError: missing : after property id

    get fullName () {
        return `${this.name} ${this.surname}`
    },
    set fullName (value) {
        [this.name, this.surname] = value.split(" ")
    },
    fullName: "Vlad Kravich"
}

vlad.fullName // в итоге геттеров и сеттеров не станет и останется лишь свойство fullName
```