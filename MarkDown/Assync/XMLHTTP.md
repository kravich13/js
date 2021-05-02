- [Основы](#основы)
- [Тип ответа](#тип-ответа)
- [Состояние запроса](#состояние-запроса)
- [Отмена запроса](#отмена-запроса)
- [Синхронные запросы](#синхронные-запросы)
- [HTTP-заголовки](#http-заголовки)
- [POST, FormData](#post-formdata)
- [Процес отправки](#процес-отправки)

## Основы

`XMLHttpRequest` – это встроенный в браузер объект, который даёт возможность делать HTTP-запросы к серверу без перезагрузки страницы.

`XMLHttpRequest` имеет два режима работы: синхронный и асинхронный.

Сначала рассмотрим асинхронный, так как в большинстве случаев используется именно он.

Чтобы сделать запрос, нам нужно выполнить три шага:

1. Создать `XMLHttpRequest`.

```javascript
let xhr = new XMLHttpRequest()
```

2. Инициализировать его.

```javascript
xhr.open = (method, URL, [async, user, password])
```

Этот метод обычно вызывается сразу после `new XMLHttpRequest`. В него передаются основные параметры запроса:

* `method` - HTTP-метод. Обычно это `"GET"` или `POST`;
* `URL` - URL, куда отправляется запрос: строка, может быть и объект URL;
* `async` - если указать `false`, тогда запрос будет выполнен синхронно;
* `user`, `password` - логин и пароль для базовой HTTP-авторизации (если требуется).

3. Послать запрос.

```javascript
xhr.send([body])
```
Этот метод устанавливает соединение и отсылает запрос к серверу. Необязательный параметр `body` содержит тело запроса.

4. Слушать события на `xhr`, чтобы получить ответ.

Три наиболее используемых события:

* `load` - происходит, когда получен какой либо ответ, включая ответы с HTTP-ошибкой, например 404
* `error` - когда запрос не может быть выполнен, например, нет соединения или невалидный URL
* `progress` - происходит периодически во время загрузки ответа, сообщает о процессе.

```javascript
xhr.onload = function () {
    console.log(`Загружено: ${xhr.status} ${xhr.response}`)
}

xhr.onerror = function () {
    console.log("Ошибка соединения")
}

xhr.onprogress = function () {
 // event.loaded - количество загруженных байт
  // event.lengthComputable = равно true, если сервер присылает заголовок Content-Length
  // event.total - количество байт всего (только если lengthComputable равно true)
  console.log(`Загружено ${event.loaded} из ${event.total}`)
}
```
***

## Тип ответа

Можно указать свойство `xhr.responseType`, чтобы указать желательный тип ответа: 

* `""` (по умолчанию) - строка;
* `"text"` - строка;
* `"arraybuffer` - `ArrayBuffer` (для бинарных данных);
* `blob` - `Blob` (для бинарных данных);
* `document` - XML-документ (может использовать XPath и другие XML-методы);
* `json` - JSON (парсится автоматически).

```javascript
let xhr = new XMLHttpRequest() // создали

xhr.open('GET', '/article/xmlhttprequest/example/json') // инициализировали

xhr.responseType = 'json' // указали желаемый тип данных ответа

xhr.send() // послали 

// тело ответа {"сообщение": "Привет, мир!"}
// получили ответ
xhr.onload = function() {
  let responseObj = xhr.response
  console.log(responseObj.message) // Привет, мир!
}
```
***

## Состояние запроса

У `XMLhttpRequest` есть состояния, которые меняются по мере выполнения запроса. Текущее состояние запроса можно посмотреть в свойстве `xhr.readyState`.

Список всех состояний: 

```javascript
UNSENT = 0 // исходное состояние
OPENED = 1 // вызван метод open
HEADERS_RECEIVED = 2 // получены заголовки ответа
LOADING = 3 // ответ в процессе передачи (данные частично получены)
DONE = 4 // запрос завершен
```
Состояние объекта `XMLHttpRequest` меняются в таком порядке: `0` > `1` > `2` > `3` > ... > `3` > `4`. Состояние `3` повторяется каждый раз, когда получена часть данных.

Изменения в состоянии объекта запроса генерируют событие `readystatechange`. 

```javascript
xhr.onreadystatechange = function () {
    if (xhr.readyState === 3) {
        // загрузка
    }
    if (xhr.readyState === 4) {
        // запрос завершен
    }
}
```
***

## Отмена запроса 

Если передумали делать запрос, можно отменить его вызовом `xhr.abort()`

```javascript
hxr.abort() // завершить запрос
```

При этом генерируется событие `abort`, а `xhr.status` устанавливается в `0`.
***

## Синхронные запросы 

Если в методе `open` третий параметр `async` установлен на `false`, запрос выполняется синхронно.

Другими словами, выполнение JavaScript останавливается на `send()` и возобновляется после получения ответа. Так ведут себя, например, функции `alert` или `prompt`.

Вот переписанный пример с параметром `async`, равным `false`: 

```javascript
let xhr = new XMLHttpRequest() // создали

xhr.open("GET", "/article/xmlhttprequest/hello.txt", false) // инициализировали

try {
    xhr.send() // послали запрос
    if (hxr.status != 200) {
        console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`)
    }
    else {
        console.log(xhr.response)
    }
} 
catch (err) {
    console.log("Запрос не удалялся")
}
```
***

## HTTP-заголовки

`XMLHttpRequest` умеет как указывать свои заголовки в запросе, так и читать присланные в ответ.

Для работы с HTTP-заголовками есть 3 метода: 

1. `setRequestHeader (name, value)` - устанавливает заголовок запроса с именем `name` и значением `value`. 

```javascript
xhr.setRequestHeader ("Content-Type", "application/json")
```
2. `getResponseHeader (name)` - возвращает значение заголовка ответа `name` (кроме `Set-Cookie` и `Set-Cookie2`).

```javascript
xhr.getResponseHeader("Content-Type")
```

3. `getAllResponseHeaders()` - возвращает все заголовки ответа, кроме `Set-Cookie` и `Set-Cookie2`.

Заголовки возвращаются в виде единой строки, например: 

```javascript
Cache-Control: max-age=31536000
Content-length: 4260
Content-Type: image/png
Date: Sat, 08 Sep 2012 16:53:16 GMT
```

Между заголовками всегда стоит перевод строки в два символа `"\r\n"` (независимо от ОС), так что мы можем легко разделить их на отдельные заголовки. Значение заголовка всегда отделено двоеточием с пробелом `": "`. Этот формат задан стандартом.

Таким образом, если хочется получить объект с парами заголовок-значение, нам нужно задействовать немного JS.

```javascript
let headers = xhr

.getAllResponseHeaders()
.split ("\r\n") // разделять по следующим знакам
.reduce (function (result, current) { // 
    let [name, value] = current.split(": ") 
    result[name] = value
    return result
}) // // headers['Content-Type'] = 'image/png'
```
***

## POST, FormData

Чтобы сделать POST-запрос, можно использовать встроенный объект `FromData`.

```javascript
let fromData = new FromData ([from]) // создаём объект, по желанию берем данные формы <form>
formData.append(name, value) // добавляем поле
```

Создаём объект, при желании указываем, из какой формы `form` взять данные, затем, если нужно, с помощью метода `append` добавляем дополнительные поля, после чего: 

1. `xhr.open("POST", ...)` - создаём `POST`-запрос;
2. `hxr.send(formData` - отсылаем форму серверу.

```HTML
<form name="person">
  <input name="name" value="Петя">
  <input name="surname" value="Васечкин">
</form>

<script>
  // заполним FormData данными из формы
  let formData = new FormData(document.forms.person)

  // добавим ещё одно поле
  formData.append("middle", "Иванович")

  // отправим данные
  let xhr = new XMLHttpRequest()
  xhr.open("POST", "/article/xmlhttprequest/post/user")
  xhr.send(formData)

  xhr.onload = () => alert(xhr.response)
</script>
```

Обычно форма отсылается в кодировке `multipart/form-data`.

Важно не забыть поставить соответствующий заголовок `Content-Type: application/json`, многие серверные фреймворки автоматически декодируют JSON при его наличии:

```javascript
let xhr = new XMLHttpRequest() // создали

let json = JSON.stingify({ // указали желаемый тип
    name: "Vlad",
    surname: "Kravich"
}) 

xhr.open("POST", "/submit") // инициализировали
xhr.setRequestHeader("Content-type", "application/json, charset=utf-8") // указали заголовок

xhr.send(join) // послали запрос
```

Метод `.send(body)` весьма всеяден. Он может отправить практически что угодно в `body`, включая объекты типа `Blob` и `BufferSource`.
***

## Процес отправки

Событие `progress` срабатывает только на стадии загрузки ответа с сервера.

А именно: если мы отправляем что-то через `POST`-запрос, `XMLHttpRequest` сперва отправит наши данные (тело запроса) на сервер, а потом загрузит ответ сервера. И событие `progress` будет срабатывать только во вовремя загрузки ответа.

Если мы отправляем что-то большое, то нас гораздо больше интересует прогресс отправки данных на сервер. Но `xhr.onprogress` тут не поможет.

Существует другой объект, без методов, только для отслеживания событий отправки: `xhr.upload`.

Он генерирует события, похожие на события `xhr`, но только во время отправки данных на сервер:
* `loadstart` - начало загрузки данных;
* `progress` - генерируется периодически во время отправки на сервер;
* `abort` - загрузка прервана;
* `error` - ошибка, не связанная с HTTP;
* `load` - загрузка успешно завершена;
* `timeout` - вышло время, отведенное на загрузку (при установленом свойстве `timeout`);
* `loadend` - загрузка завершена, все зависимости от того, как - успешно или нет.

```javascript
hxr.upload.onprogress = function (event) {
    console.log(`Отправлено ${event.loaded} из ${event.total} байт`)
}

hxr.upload.onload = function () {
    console.log("Данные успешно отправлены")
}

hxr.upload.onerror = function () {
    console.log(`Произошла ошибка во время отправки: ${xhr.status}`)
}
```
***
