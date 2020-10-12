## import()

Выражение `import(module)` загружает модуль и возвращает промис, результатом которого становится объект модуля, содержащий все его экспорты.

Использовать его можно динамически в любом месте кода:

```javascript
// index.html
const modulePath = prompt("Какой модуль загружать?")

import(modulePath)
    .then(obj => console.log(obj)) // ну привет =)
    .catch(err => console.log(err))



// script1.js
console.log("ну привет =)
```

Или же можно использовать `import()` внутри асинхронной функции:

```javascript
// script2.js 
function hi () {
    console.log(`Привет`)
}

function bye () {
    console.log(`Пока`)
}

export {hi, bye}


// модуль по умолчанию
export default function () {
    console.log("Модуль по умолчанию загружен!")
}



// index.html
async function load () {

    // ждёт загрузки скрипта, после чего выполняется
    const say = await import('./script2.js')

    say.hi() // привет
    say.bye() // пока

    // модуль по умолчанию идёт через "object.default()""
    say.default() // Модуль по умолчанию загружен!
}
load()
```

* **Динамический импорт работает в обычных скриптах, он не требует указания `type="module"`.**

* **`import()` не функция, он похож на `super()`. Поэтому нельзя скопировать `import` в переменную и вызвать при помощи `.call/apply`.**
