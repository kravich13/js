## Модули

Модули нужны для того, чтобы один огромный код разбить на несколько кодов поменьше. Так лучше читабельность и более лучшая структуризация.

Модуль - это просто файл, один скрипт - один модуль.

Чтобы сделать скрипт модульным, нужно указать его в `index.html` с пометкой `<script type="module>`.
***

## Запуск 

Чтобы сделать код рабочим, нужно на `index.html` включить режим сервера: `live server` в VSCode слева внизу. После этого весь контент из скриптов в модулях станет доступен.
***

## export и import
Модули могут загружать друг друга и использовать директивы `export` и `import`, чтобы обмениваться функциональностью, вызывать функции одного модуля из другого: 

* `export` отмечает переменные и функции, которые должны быть доступны вне текущего модуля
* `import` позволяет импортировать функциональность из других модулей


**Для `import` нужно обязательно указывать путь к файлу через точку (с раширением)! `import './script.js'`.**

К примеру, есть файл `script1.js`, который экспортирует дом-переменную: 

```javascript
// script1.js

// сделал экспортёром в другие файлы
export const $div = document.createElement("div")

// все изменения с экспортированной переменной продолжают работать
$div.style.width = "230px"
$div.style.fontSize = "23px"
$div.textContent = "Было: Vlad Kravich"
}
```

С помощью `script type="module"` можно импортировать её и использовать: 

```HTML
<!-- index.html -->

<script type="module">

// импортировал переменную $div по пути /script1.js
import {$div} from './script1.js'
    
// все манипуляции с переменной работают и блок div выводится на страницу
$div.style.background = "red"
$div.textContent = "Стало: Max Kravich"
document.body.append($div)
        
</script>
```

Можно импортировать всё сразу в виде объекта: 
```javascript
// script1.js

function sayHi (name) {
    console.log(`Привет, ${name}`)
}

function sayBye (name) {
    console.log(`Пока, ${name}`)
}

export {sayHi, sayBye}



// script2.js

import * as say from './say.js'

// say - названный нами Object с передаваемыми функциями внутри
say.sayHi('John') // Привет, Джон
say.sayBye('John') // Пока, Джон
```
***

## Своя область видимости переменных 

Каждый модуль имеет свою собственную область видимости. Переменные и функции, объявленные в модуле, не видны в других скриптах.

К примеру, есть два файла `script1.js` и `script2.js`. В первом лежит переменная `users` и второй файл пытается её использовать - это ошибка, они между собой никак не связаны: 


```html
<!-- index.html -->

<!-- Без экспорта и импорта у этих двух скриптов нет никакой связи -->
<script type="module" src="script1.js"></script>
<script type="module" src="script2.js"></script>
<!-- Поэтому в переменной user в script2 попросту нет -->
```

```javascript
// script1.js
// Эта переменная видна только внутри этого файла
const users = "Vlad"

// Правильный вариант
export const user = "Kravich"



// script2.js
console.log(users) // users is not defined

// Правильный вариант
import {user} from './script1.js'

console.log(user) // Vlad
```
***

## Код в модуле выполняется лишь один раз при импорте

Если один и тот же модуль используется в нескольких местах, то его код выполнится только один раз из того файла, который указал `import` первее, после чего экспортируемая функциональность передаётся всем импортёрам:

```HTML
<!-- index.html -->

<script type="module" src="script2.js"></script> <!-- Вывод будет именно отсюда -->
<script type="module" src="script3.js"></script>
```
```javascript
// script1.js
console.log("Модуль выполнен")


// script2.js
import './script1.js' // выполнится именно отсюда


// script3.js
import './script1.js'
```

Если нужно использовать много раз один и тот же код, нужно его экспортировать: 

```javascript
// script1.js 

// Если модуль импортируется в нескольких файлах, то код модуля будет выполнен только один раз, объект admin будет создан и в дальнейшем будет передан всем импортёрам.
export const admin = {
    name: "Vlad"
}



// script2.js

// Получает объект admin и меняет его поле name на Kravich
import {admin} from './script1.js'
admin.name = "Kravich"



// script3.js

// Выводит изменный объект файлом script2.js и теперь поле admin.name = "Kravich"
import {admin} from './script1.js'
console.log(admin.name) // Kravich
```

Таким образом, экспортирует объект `admin` модуль `script1.js` только ра один раз, `script2.js` его изменяет, а `script3.js` его уже использует в финальном, изменном виде.

Такое поведение позволяет конфигугировать модули при первом импорте. Можно установить свойства один раз, а в дальнейших импортах он уже будет настроенным.

Например, модуль `script1.js `предоставляет определенную функциональность, но ожидает передачи учётных данных в объект `admin` извне: 

```javascript
// script1.js 

// Функция sayHi ждёт поля name из объекта kravich, который в данный момент пуст
export const kravich = { }
export function sayHi () {
    console.log(`Сервер готов, ${kravich.name}!`)
}



// script2.js 

// В объект kravich установили поле name "Vlad"
import {kravich} from './script1.js'
kravich.name = "Vlad"



// script3.js

import {kravich, sayHi} from './script1.js'

console.log(kravich.name) // Vlad, в script2 добавилось новое поле
sayHi() // Сервер готов, Vlad!
```
***

## import.meta

Объект `import.meta` содержит информацию о текущем модуле.

Содержимое зависит от окружения, в браузере он содержит ссылку на скрипт или ссылку на текущую веб-страницу, если модуль встроен в HTML:

```html
<script type="module">
    console.log(import.meta.url) 
    // http://127.0.0.1:5500/practica/Module/%D0%9E%D0%B1%D0%BB%D0%…%B5%D0%BD%D0%B8%D0%B5-%D0%BF%D0%BE-%D1%80%D0%B0%D0%B7%D1%83/
</script>
```
***

## В модуле this не определен

В модуле на верхнем уровне `this` не определен (`undefined`).

В обычном не-модульном скрипте `this` равен глобальному объекту `window`:

```html
<script>
    console.log(this) // Window
</script>

<script type="module">
    console.log(this) // undefined
</script>
```
***

## Модули являются отложенными

Модули всегда выполняются в отложенном режиме:
* загрузка внешних модулей, таких как `<script type="module" src="...">` не блокирует обработку HTML
* модули, даже если загрузились быстро, ожидают полной загрузки HTML документа и только затем выполняются
* сохраняется относительный порядок скриптов: скрипты, которые идут раньше в документе, выполняются раньше

Модули всегда видят полностью загруженную HTML-страницу, включая элементы под ними: 

```html
<!-- Модуль выполнится лишь после всей загрузки HTML документов -->
<script type="module">
    console.log(typeof button) // object, выполнится после загрузки всей страницы
</script>


<!-- Обычный скрипт выполнится сразу, не дожидаясь загрузки HTML документов-->
<script>
    console.log(typeof button) // undefined, выполнится сразу же
</script>
    
<!-- ID создаёт переменную, в которой находится тег button -->
<button id="button">Нажми на кнопочку</button>
```

## Атрибут async работает во встроенных скриптах

Для не-модульных скриптов артибут `async` работает только на внешних скриптах. Скрипты с ним запускаются сразу и кто первый загрузился - первый выполнился.

Для модулей атрибут `async` работает на любых скриптах.

```javascript
// script1.js

export function counter () {
    let i = 1

    return function () {
        return console.log(`Количество вызовов функции: ${i++}`)
    }
}
counter = counter()
```
```html
<!-- модуль не ожидает загрузки документа или других тэгов <script> -->

<script async type="module">
        
    import {counter} from "./script1.js"

    counter() // Количество вызовов функции: 1
    counter() // Количество вызовов функции: 2
    counter() // Количество вызовов функции: 3

</script>
```
***

## Внешние скрипты

Внешние скрипты с артибутом `type="module"` имеют два отличия:
1. Внешние скрипты с одинаковым `src` запускаются только один раз:

```html
<!-- скрипт script1.js загрузится и будет выполнен только один раз -->
<script type="module" src="script1.js"></script>
<script type="module" src="script1.js"></script>
```
2. Если модульный скрипт загружается с другого домена, то удалённый сервер должен установить заголовок `Access-Control-Allow-Origin` означающий, что загрузка скрипта разрешена:

```html
<!-- another-site.com должен указать заголовок Access-Control-Allow-Origin -->
<!-- иначе, скрипт не выполнится -->
<script type="module" src="http://another-site.com/their.js"></script>
```
***