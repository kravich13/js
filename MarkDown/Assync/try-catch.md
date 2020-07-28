Обычно скрипт в случае ошибки падает с выводом ошибки в консоль.

Но есть конструкция `try..catch`, которая позволяет ловить ошибки и делать с ними что-то более осмысленное.

Конструкция `try..catch` состоит из двух блоков: `try` и затем `catch`:

```javascript
try {
    // код самого скрипта (как с погодой к примеру)
}
catch (err) {
    // обработка ошибки
}
```

Работает она так: 
1. Выполняется код внутри блока `try`;
2. Если в нём нет ошибок, блок `catch (err)` игнорируется, то есть выполнение доходит до конца `try` и потом прыгает через `catch`;
3. Если в нём возникает ошибка, то выполнение `try` на ней прерывается и управление прыгает в начало блока `catch (err)`.

    При этом параметр `err` будет содержать объект ошибки с подробной информацией о произошедшем.

<b>Таким образом, при ошибке в `try` скрипт не падает и мы получаем возможность обработать ошибку внутри `catch`. </b> 


Пример без ошибок: при запуске сработают `alert` `(1)` и `(2)`:

```javascript
try {
    alert("Начало блока try") // (1)

    // код без ошибок

    alert("Конец блока try") // (2)

}
catch (err) {
    alert("Блок catch не получает управление, так как нет ошибок") // (3)
}

alert ("Потом код продолжит выполнение...")
```

Пример с ошибкой: при запуске сработают `(1)` и `(3)`:

```javascript
try {

  alert('Начало блока try')  // (1) 

  lalala // ошибка, переменная не определена!

  alert('Конец блока try')  // (2)

} catch (err) {

  alert('Ошибка ' + e.name + ":" + e.message + "\n" + e.stack) // (3) 

}

alert("Потом код продолжит выполнение...")
```

<b> `try..catch` работает только в синхронном коде</b>.

Ошибку, которая произойдет в коде, запланированном "на будущее", например в `setTimeout`, `try..catch` не поймает: 

```javascript
try {
    setTimeout (function () {
        noSuchVariable // скрипт упадёт тут

    }, 1000)
}
catch (err) {
    alert("Не сработает")
}
```

Это потому, что функция выполняется позже, когда движок уже покинул конструкцию `try..catch`.

Чтобы поймать исключение внутри запланированной функции, `try..catch` должен находиться внутри самой этой функции:

```javascript
setTimeout (function () {
    try {
        noSuchVariable // try..catch обрабатывает ошибку!
    }
    catch {
        alert("Ошибка поймана!")
    }
}, 1000)
```
***

## Объект ошибки

Когда возникает ошибка, Javascript генерирует объект, содержащий её детали. Затем этот объект передается как аргумент в блок `catch`: 

```javascript
try {
    // код
}
catch (err) { // объект ошибки 
    // обработка
}
```

Для всех встроенных ошибок этот объект имеет два основных свойства: 

1. `name` - имя ошибки, например, для неопределенной переменной это `ReferenceError`;
2. `message` - текстовое сообщение о деталях ошибки.

    В большинстве окружений доступны и другие, нестандартные свойства. Широкоиспользуемое и поддерживающие - это: 

3. `stack` - текущий стек вызова: строка, содержащая информацию о последовательности вложенных вызовов, которые привели к ошибке. Используется в целях отладки.

```javascript
try {
    kravichBest // ошибка, переменная не определена
}
catch (err) {
    alert(err.name) // ReferenceError
    alert(err.message) // kravichBest is not defined
    alert(err.stack) // ReferenceError: kravichBest is not defined ar (стек вызовов)

    // можно вывести ошибку целиком
    // Ошибка приводится к строке вида "name: message"
    alert(err) // ReferenceError: kravichBest is not defined    
}
```
***

## Блок catch без переменной

Если нам не нужны детали ошибки, в `catch` можно её пропустить: 

```javascript
try {
    // блок кода
}
catch {
    // обработка консолью =)
}
```
***

## Использование try..catch

Обычно `JSON.parse(str)` используется для декорирования данных, полученных по сети от сервера или из другого источника. 

Мы получаем их и вызываем `JSON.parse` вот так: 

```javascript
const json = '{"name":"Vlad", "age": 22}'

const user = JSON.parse(json) // преобразовали текстовое представление в JS-объект

// теперь user - объект со свойствами из строки
console.log(user.name) // Vlad
console.log(user.age) // 22
```

<b>Если `json` неккоретен, `JSON.parse` генерирует ошибку, т.е. код падает.</b>

Получается, что если вдруг что-то не так с данными, то посетитель никогда (если, конечно, не откроет консоль) об этом не узнает. А люди очень не любят, когда что-то «просто падает» без всякого сообщения об ошибке.

Используем `try..catch` для обработки ошибки: 

```javascript
const json = "{ какая-то дичь}"

try {
    const user = JSON.parse(json) // тут ошибка
    alert(user.name) // не сработает
}
catch (err) {
    // выполнение прыгает сюда
    alert("Извините, в данных ошибка, мы попробуем получить их ещё раз.")
    alert(err.name)
    alert(err.message)
}
```
Здесь мы используем блок `catch` только для вывода сообщения, но мы так же можем сделать гораздо больше: отправить сетевой запрос, предложить пользователю альтернативный способ, отослать информацию об ошибке на сервер для логирования, ... Всё лучше, чем просто падение.
***

## Генерация собственных ошибок

Что если `json` синтаксически корретен, но не содержит необходимого свойства `name`?

```javascript
const json = `{ "age": 22 }`

try {
    const user = JSON.parse(json) // выполнится без ошибок
    alert(user.name) // нет свойства name
}
catch (err) {
    alert("Не выполнится")
}
```
<b>Для того, чтобы унифицировать обработку ошибок, мы воспользуемся оператором `throw`.</b>
***
## Оператор throw

Оператор `throw` генерирует ошибку.

В Javascript есть множество встроенных конструкторов для стандартных ошибок: `Error`, `SyntaxError`, `ReferenceError`, `TypeError` и другие. Можно использовать их для создания объектов ошибки: 

```javascript
const error = new Error (message)
// или
const error = new SyntaxError (message)
const error = new ReferenceError (message)
//...
```
Для встроенных ошибок (не для любых объектов, только для ошибок), свойство `name` - это в точности имя конструктора. А свойство `message` берется из аргумента. 

```javascript
const error = new Error ("Ошибочка")

alert(error.name) // Error
alert(error.message) // Ошибочка
```

Посмотрим, какую ошибку генерирует `JSON.parse`:

```javascript
try {
    JSON.parse ("{ bad json }")
}
catch (err) {
    alert (err.name) // SyntaxError
    alert (err.message) // Unexpected token o in JSON at position 2
}
```

Как видим, это `SyntaxError`. В нашем случае отсутствие `name` - это ошибка, ведь пользователи должны иметь имена.

<b>Сгенерируем её: </b>

```javascript
const json = '{ "age": 22 }'

try {
    const user = JSON.parse (json) // выполнится без ошибок

    if (!user.name) {
        throw new SyntaxError ("Данные не полные: нет имени")
    }

    alert(user.name)
}
catch (err) {
    alert("JSON Error: " + err.message) // текст + данные не полные, нет имени
}
```
В строке "данные не полные " оператор `throw` генерирует ошибку `SyntaxError` с сообщением `message`. Точно такого же вида, как генерирует сам Javascript. Выполнение блока `try` немедленно останавливается и поток управления прыгает в `catch`.

Теперь блок `catch` становится единственным местом для обработки всех ошибок: и для `JSON.parse` и для других случаев.
***

## Проброс исключения

В примере выше был использован `try..catch` для обработки некорректных данных. А что, если в блоке `try {}` возникнет другая неожиданная ошибка? Например, <b>програмная (неопределенная переменная)</b> или ещё какая-то, а не ошибка, связана с некорректными данными.

Можно выяснить какую ошибку мы получили, по её свойству `name`:

```javascript
try {
    user = { обработай плиз }
}
catch (err) {
    alert(err.name) // ReferenceError из-за неопределенной переменной
}
```

Есть простое правило: 

<b>Блок `catch` должен обрабатывать только те ошибки, которые ему известны, и "пробрасывать" все остальные.</b>

Техника "проброс подключения" выглядит так: 
1. Блок `catch` получает все ошибки;
2. В блоке `catch (err) { }` мы анализируем объект ошибки `err`;
3. Если мы не знаем как её обработать, тогда делаем `throw err`.

В коде ниже используем проброс исключения, `catch` обрабатывает только `SyntaxError`:

```javascript
const json = `{ "age": 22 }` // данные неполны 
try {
    const user = JSON.parse(json)

    if (!user.name) {
        throw new SyntaxError ("Данные неполны: нет имени")
    }

    blabla() // неожиданная ошибочка    

    alert(user.name)
}
catch (err) {
    if (err.name === "SyntaxError") {
        alert("Извините, в данных ошибка") // сработает эта строка
    }
    else {
        throw err
    }
}
```

Ошибка, которая возникла внутри блока `catch` "выпадает" наружу, как если бы была в обычном коде.

В следующем примере такие ошибки обрабатываются ещё одним, "более внешним" `try..catch`:

```javascript
function readData () {
    const data = `{ "name": "Vlad", "age": 22 }`

    try {
        // ...
        blabla() // oshibka bra't
    }
    catch (err) {
        if (err.name != "SyntaxError") {
            throw err // пробрасываем
        }
    }
}

try {
    readData()
}
catch (err) {
    alert("Поймал во внешнем catch: " + err) // ловим
}
```

Здесь `readData` знает только, как обработать `SyntaxError`, тогда как внешний блок `try..catch` знает, как обработать всё.