- [Экспорт отдельно до объявления](#экспорт-отдельно-до-объявления)
- [Импорт](#импорт)
- [Импорт как](#импорт-как)
- [Экмпортировать как](#экмпортировать-как)
- [Экспорт по умолчанию](#экспорт-по-умолчанию)
- [Имя "default"](#имя-default)

## Экспорт отдельно до объявления

`export` можно написать уже после объявления всех функций и переменных:

```javascript
// script1.js

function sayHi (name) {
    console.log(`Привет, ${name}`)
}

function sayBye (name) {
    console.log(`Пока, ${name}`)
}

export {sayHim sayBye}
```
***

## Импорт

Для импорта много чего сразу, можно импортировать в виде объекта, в котором будут храниться те функции и переменные, которые были переданы из `export`:

```javascript
// script2.js

import * as kravich from './script1.js'

kravich.sayHi("Влад") // Привет, Влад
kravich.sayBye("Кравич") // Пока, Кравич

// все переменные и функции доступны через точку
```
***

## Импорт как

Также можно использовать `as`, чтобы импортировать под другими именами.

Импорт функции `sayHi` в локальную переменную `hi`, а `sayBye` импортируем как `bye`:

```javascript
// script2.js

import {sayHi as hi, sayBye as bye} from './script1.js'

hi("Влад") // Привет, Влад
bye("Кравич") // Пока, Кравич
```
***

## Экмпортировать как

Тоже самое существует для `export`.

Экспорт функций, как `hi` и `bye`:

```javascript
// script1.js

...

// hi и bye - официальные имена функций
export {sayHi as hi, sayBye as bye}



// script2.js

import * as say from './script1.js'

say.hi("Влад") // Привет, Влад
say.bye("Кравич") // Пока, Кравич
```
***

## Экспорт по умолчанию

На практике модули встречаются в основном одного из двух типов: 
1. Модуль, содержащий библиотеку или набор функций, как `script1.js` выше
2. **Модуль, который объявляет что-то одно**, например, модуль `script1.js` экспортирует только один `class User`


Модули представляю специальный синтаксис `export default` (экспорт по умолчанию).

Ставим `export default` перед тем, что нужно экспортировать: 

```javascript
// script1.js

export default class User {
    constructor (name) {
        this.name = name
    }
}



// index.html

// импот без фигурных скобок
import User from "./script1.js"

const vlad = new User("Влад")
console.log(vlad.name) // Влад
```

**В модуле может быть не более одного `export default`.**

Т.к. в файле может быть максимум один `export default`, то экспортируемая сущность не обязана иметь имя.

Примеры ниже - всё корректные экспорты по умолчанию: 

```javascript
// Класс без имени
export default class {
    constructor () {...}
}


// Функция без имени
export default function (user) {
    console.log(`Привет, ${user}`)
}


// Массив без имени и т.д.
export default ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
```

Без `default` такой экспорт без имени выдаст ошибку:

```javascript
export class { // Error
    constructor () {...}
}
```
***

## Имя "default"

В некоторых ситуациях для обозначения по умолчанию в качестве имени используется `default`.

К примеру, чтобы экспортировать функцию отдельно от её объявления: 

```javascript
function sayHi (name) {
    console.log(`Привет, ${name}`)
}

// тоже самое, как если бы добавили "export default" перед функцией
export {sayHi as default} 
```

Или модуль `script1.js` экспортирует одну сущность "по умолчанию" и несколько именнованых:

```javascript
// script1.js

export default class User {
    constructor (name) {
        this.name = name
    }
}

export function sayHi (user) {
    console.log(`Привет, ${user}`)
}



// Вот как импортировать экспорт по умолчанию вместе с именованным экспортом:

// script2.js

import {default as User, sayHi} from './script1.js'

const vlad = new User("Влад")
vlad.name // Влад

sayHi(vlad.name) // Привет, Влад
```