- [Blob](#blob)
  - [Blob как URL](#blob-как-url)

# Blob

Объект `Blob` состоит из необязательной строки `type` и `blobParts` - последовательности других объектов `Blob`, строк и `BufferSource`.

Благодаря `type` можно загружать и скачивать `blob`-объекты, где `type` становится `Content-type` в сетевых запросах.

```javascript
new Blob(blobParts, options)
```

* `blobParts` – массив значений `Blob/BufferSource/String`.
* `options` – необязательный объект с дополнительными настройками:
    * `type` – тип объекта, обычно MIME-тип, например. image/png,
    * `endings` – если указан, то окончания строк создаваемого `Blob` будут изменены в соответствии с текущей операционной системой (`\r\n` или `\n`). По умолчанию "`transparent`" (ничего не делать), но также может быть "`native`" (изменять).

```javascript
// создание Blob из типизированного массива и строк
let hello = new Uint8Array([72, 101, 108, 108, 111]) // Hello в бинарках
let blob = new Blob([hello, " ", "Kravich"], {type: "text/plain"})
```

Можно получить срез `Blob`, используя:

```javascript
blob.slice([byteStart], [byteEnd], [contentType]);
```
* `byteStart` – стартовая позиция байта, по умолчанию 0.
* `byteEnd` – последний байт, по умолчанию до конца.
* `contentType` – тип type создаваемого `Blob`-объекта, по умолчанию такой же, как и исходный.

Аргументы – как в `array.slice`, отрицательные числа также разрешены.
***

## Blob как URL

`Blob` может быть использован как URL для `<a>`, `<img>` или других тегов, для показа содержимого.

Загрузка динамически генерируемого файла по нажатию на кнопку: 

```html
<a download="kravich.txt" href='#' id="link">Загрузить</a>

<script>
let blob = new Blob(["Vlad Kravich"], {type: "text/plain})

link.href = URL.createObjectURL(blob)
</script>
```

Также можно создать ссылку динамически и эмулировать на ней клик, используя `link.click()`, тогда загрузка начнётся автоматически.


Создание загрузки `Blob`-объекта на лету:

```javascript
let link = document.createElement("a")
link.download = "kravich.txt"
let blob = new Blob(["Vlad Kravich"], {type: "text/plain"})

link.href = URL.createObjectURL(blob)
link.click()
URL.revokeObjectURL(link.href)
```

**`URL.createObjectURL` берёт `Blob` и создаёт уникальный URL для него в формате `blob:<origin>/<uuid>`.**

Вид сгенерированного URL:

```bash
blob:https://learn.javascript.ru/cf07957e-6bf1-4a1b-9efd-a769800d7031
```

Браузер для каждого URL, сгенерированного через `URL.createObjectURL`, сохраняет внутреннее соответствие `URL` → `Blob`. Таким образом, такие URL короткие, но дают доступ к большому объекту `Blob`.

Сгенерированный url действителен, только пока текущий документ открыт. Это позволяет ссылаться на сгенерированный в нём `Blob` в `<img>`, `<a>` или в любом другом объекте, где ожидается url в качестве одного из параметров.

В данном случае возможен побочный эффект. Пока в карте соответствия существует ссылка на `Blob`, он находится в памяти. Браузер не может освободить память, занятую `Blob`-объектом.

**`URL.revokeObjectURL(url)` удаляет внутреннюю ссылку на объект, что позволяет удалить его (если нет другой ссылки) сборщику мусора, и память будет освобождена.**
***



