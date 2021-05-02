- [Fetch](#fetch)
  - [Заголовки запроса](#заголовки-запроса)
  - [POST-запросы](#post-запросы)
  - [Отправка изображения](#отправка-изображения)

# Fetch

Метод `fetch()` - современный и очень мощный способ для сетевых запросов. 

```javascript
const promise = fetch(url, [option])
```

* `url` - URL для отправки запроса;
* `option` - допольнительные параметры: метод, заголовки и т.д..

Без `option` это просто GET-запрос, скачивающий содержимое по адресу `url`.

Браузер сразу же начинает запрос и возвращает промис, который внешний код использует для получения результата.

Как только приходит ответ с сервера, можно проверить статус HTTP-запроса и определить, выполнится ли он успешно, а так же посмотреть заголовки, но пока без тела ответа.

Промис завершается с ошибкой, если `fetch` не смог выполнить HTTP-запрос, например, при ошибке сети или нет такого сайта, HTTP-статусы такие как 404 или 500 не являются ошибкой.

<b>HTTP-статус можно увидеть в свойствах ответа:</b>

* `status` - код статуса HTTP-запроса, например 200;
* `ok` - будет `true`, если код HTTP-статуса в диапазоне 200-299.

```javascript
const response = await fetch(url)

if (response.ok) { // если HTTP-статус в диапазоне 200-299
    // получаем тело ответа
    const json = await response.json()
}
else {
    console.log("Ошибка HTTP:" + response.status)
}
```

<b>Для получения тела ответа нужно использовать допольнительный вызов метода. </b>

`Response` предоставляет несколько методов, основанных на промисах, для доступа к телу ответа в различных форматах:

* `response.text()` - читает ответ и возвращает обычный текст;
* `response.json()` - декорирует ответ в формате JSON;
* `response.formData()` - возвращает ответ как объект `FormData`;
* `response.blob()` - возвращает объект как `Blob` (бинарные данные с типом);
* `response.arrayBuffer()` - возвращает ответ как ArrayBuffer
* помимо этого, `response.body` - это объект ReadableStream, с помощью которого можно считывать тело запроса по частям.
* `response.headers.get("Заголовок")` - получение заголовка `Headers`.

  Также все существующие заголовки от сервера можно перебрать в цикле: 

  ```javascript
  for (let [key, value] of response.headers) {
        console.log(`${key} = ${value}`)
        // все существующие заголовки
    }
  ```

Например, получим JSON-объект с последними коммитами из репозитория на GitHub:

```javascript
const url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
const response = await fetch(url)

const commits = await response.json() // читаем ответ в формате JSON

console.log(commits[0].author.login) // iliakan
```

<b>Выбирать можно только один метод чтения ответа.</b>

Если мы получили ответ с `response.text()`, тогда `response.json()` не сработает, т.к. данные уже были обработаны.

```javascript
const text = await response.text() // обработано
const json = await response.json() // ошибка (данные уже были обработаны)
```
***

## Заголовки запроса

Для установки заголовка запроса в `fetch` мы можем использовать опцию `headers`. Она содержит объект с исходящими заголовками, например: 

```javascript
const response = await fetch(protectedUrl, {
    headers: {
        Authentication: "secret"
    }
})
```
***

## POST-запросы

Для отправки `POST`-запроса или запроса с другим методом необходимо использовать `fetch` параметры:

* `method` - HTTP метод, например, `POST`;
* `body` - тело запроса, одно из списка:
    * строка (например в формате JSON);
    * объект `FormData` для отправки данных как `form/multipart`;
    * `Blob`/`BufferSource` для отправки бинарных данных;
    * URLSearchParams для отправки данных в кодировке `x-www-forum-urlencode` (используется редко).

Чаще всего используется JSON

Код отправляет объект `user` как JSON:

```javascript
const user = {
    name: "Vlad",
    surname: "Kravich"
}

const response = await fetch("/article/fetch/post/user", {
    method: "POST",
    headers: {
        "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify(user)
})

const result = await response.json()
console.log(result.message)
```

Поскольку тело запроса `body` - строка, то заголовок `Content-type` по умолчанию будет `text/plain;charset=UTF-8`.

Но, т.к. мы посылаем JSON, то используем параметр `headers` для отправки вместо этого `application/json`, правильный `Content-type` для JSON.
***

## Отправка изображения

Можно отправить бинарные данные при помощи `fetch`, используя объекты `Blob` или `BufferSource`.

В этом примере есть элемент `<canvas>`, на котором можно рисовать движением мыши. При нажатии на кнопку "Отправить" изображение отправляется на сервер: 

```HTML
<body style="margin:0">
  <canvas id="canvasElem" width="100" height="80" style="border:1px solid"></canvas>

  <input type="button" value="Отправить" onclick="submit()">

  <script>
    canvasElem.onmousemove = function(e) {
      let ctx = canvasElem.getContext('2d');
      ctx.lineTo(e.clientX, e.clientY);
      ctx.stroke();
    };

    async function submit() {
      let blob = await new Promise(resolve => canvasElem.toBlob(resolve, 'image/png'));
      let response = await fetch('/article/fetch/post/image', {
        method: 'POST',
        body: blob
      });

      // сервер ответит подтверждением и размером изображения
      let result = await response.json();
      alert(result.message);
    }

  </script>
</body>
```

<b>Заметим, что здесь не нужно вручную устанавливать заголовок `Content-type`, потому что объект `Blob` имеет встроенный тип (`image/png`, заданный в `toBlob`). При отправке объектов `Blob` он автоматически становится значением `Content-type`.</b>

