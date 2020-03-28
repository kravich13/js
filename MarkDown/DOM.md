Создание элемента: 

Новые элементы создаются через `document.createElement("table")`

```javascript
document.createElement("tr")
```

Для склеивания тегов используется `table.append(tr)`, append - дописать в конец

`table.prepend(div)` - дописать тег в начало вложенности table, будет выглядеть таким образом: 

```
<table>
    <div></div>
    <tr></tr>
</table>
```

Содержимое элемента можно добавить тремя способами: 
1. `div.innerText = "blabla"`
2. `div.innerHTML = "<b>blabla</b>` 
3. `div.textContent = "hello"` *предпочтительнее использовать этот способ


Псевдомассив дочерних элементов можно получить обратившись к свойству `children`.

```javascript
console.log(table.children) // HTMLCollection(2) [div,tr]
```

Удалить дочерний элемент из родителя можно методом `remove`. Пример: 

```javascript 
div.remove() // <table><tr></tr></table>
```

Обратиться к родительскому элементу из дочернего можно свойством `parentElement`. Пример: 

```javascript
tr.parentElement // table 
```
***

Давай создадим HTML ссылку. Артибут можно установить просто как свойство объекта через точку.

```javascript
let a = document.createElement("a") // <a> </a>

a.href = "http://youtube.com" // "http://youtube.com" 

a // <a href="http://youtube.com"></a>

a.textContent = "youtube" // "youtube"

a // <a href = "http://youtube.com">youtube</a>
```

Есть второй способ установки атрибута:

```javascript
a.setAttribute("title", "ssilka")

a // <a href="http://youtube.com" title="ssilka">youtube</a>
```
***
Чтобы добавить элемент на страницу, нужно использовать `document.body.append/prepend`. Пример: 

```javascript
document.body.prepend(a)
```
***
Можно изменить стиль элемента с помощью свойства `style`. Пример:

```javascript
let text = document.createElement("p")
text.textContent = "lorem"
text.style.color = "red"
document.body.prepend(text) 
```

Так же есть методы для работы с атрибутами: 

* `elem.hasAttribute(name)` – проверить на наличие.
* `elem.getAttribute(name)` – получить значение.
* `elem.setAttribute(name, value)` – установить значение.
* `elem.removeAttribute(name)` – удалить атрибут.
* `elem.attributes` – это коллекция всех атрибутов.

***

Метод `Element.closest()` возвращает ближайший родительский элемент (или сам элемент), который соответствует заданному CSS-селектору или null, если таковых элементов вообще нет.

Другими словами, этот метод нужно использовать вместо метода `element.nodeName == "DIV"`, потому что тег `p` может лежать в теге `li`, который лежит в другом теге т.д. 

```HTML
<div id="block" title="Я - блок">
    <a href="#">Я ссылка в никуда</a>
    <a href="http://site.ru">Я ссылка на сайт</a>
    <div>
       <div id="too"></div>
    </div>
</div>
```

```javascript
let div = document.querySelector("#too") //Это элемент от которого мы начнем поиск

div.closest("#block") //Результат - самый первый блок древа выше
div.closest("div") //Сам блок #too и будет результатом, так как он подходит под селектор "div"
div.closest("a") //null - В предках #too нет ни одного тега "a"!
div.closest("div[title]") //#block - так как ближе нет блоков с атрибутом title.
```

***

Обращение к существующему элементу `getElementById("myid")`

второй способ: `getElementsByClassName(className)`

третий способ: `getElementsByTagName("input")`

Универсальный метод для поиска - `elem.querySelectorAll(css)`, он возвращает все элементы внутри `elem`. Этот метод может использовать любой CSS-селектор.

```javascript
let ul = document.createElement("ul")
let li = document.createElement("li")
li.textContent = "Влад"
ul.append(li)
li = document.createElement("li")
li.textContent = "Кравич"
ul.append(li)

let elements = ul.querySelectorAll('li')
console.log(elements) // выведет два li в первом ul
```
Метод `elem.querySelector(css)` возвращает только первый элемент, соответствующий данному CSS-селектору.

***

Чтобы записать два одинаковых тега в один тег - нужно переприсвоить тег в ту же самую переменную и уже его записать в нужный тег.

```javascript
let table = document.createElement("table")
let tr = document.createElement("tr")
let td = document.createElement("td")

table.prepend(tr) // добавил первый tr в table
td.textContent = "1" // вписал число 1 в тег td
tr.prepend(td)    // добавил td в первый tr 

tr = document.createElement("tr") // переприсвоил второй tr
td = document.createElement("td") // переприсвоил второй td

table.append(tr) // добавил второй tr в table
td.textContent = "2" // вписал число 2 в тег td
tr.append(td)    // добавил td во второй tr
```

***
Чтобы сделать элемент невидимым - нужно использовать свойство `hidden`.
Если это свойство установлено как `true` - будет тоже самое, что в css;  `display: none`.

Чтобы убрать какой либо стиль - нужно использовать `elem.style.display: ""`.

```HTML
<div>Оба тега DIV внизу невидимы</div>

<div hidden>Изчезни!</div>
<div id="elem">Изчезни!</div>

<script>
  elem.hidden = true;
</script>
```
***
Чтобы вставить элемент между элементами как в HTML - нужно использовать метод ```insertAdjacentHTML```.

```elem.insertAdjacentHTML(where, html)``` - где первый параметр указывает куда по отношению к elem производить вставку, а второй - что именно вставить (будь то текст или тег с текстом).

Значение должно быть одним из следующих:
* "beforebegin" – вставить html непосредственно перед elem,
*  "afterbegin" – вставить html в начало elem,
* "beforeend" – вставить html в конец elem,
* "afterend" – вставить html непосредственно после elem.

Пример: 

```javascript 
<div id="div"></div>
<script>
  div.insertAdjacentHTML('beforebegin', '<p>Привет</p>');
  div.insertAdjacentHTML('afterend', '<p>Пока</p>');
</script>
```
Приведёт к:

```HTML 
<p>Привет</p>
<div id="div"></div>
<p>Пока</p>
```
***

## Стили и классы/global

Существует свойство `elem.className`, которое заменяет всю строку с классами. 

Так же можно изменять название лишь одного класса (т.е. одного элемента, а не всех, у которых одинаковый класс) методом `elem.classList`, с помощью которого так же можно сделать добавление/удаление класса у одного элемента. 

Методы `classList`: 

* `elem.classList.add/remove("class")` – добавить/удалить класс.
* `elem.classList.toggle("class")` – добавить класс, если его нет, иначе удалить.
* `elem.classList.contains("class")` – проверка наличия класса, возвращает true/false.

Так же `classList` можно перебрать в цикле с помощью `for..of`.

Пример: 

```HTML
<body class="main page">
  <script>
    for (let name of document.body.classList) {
      console.log(name) // main, затем page
    }
  </script>
</body>
```
***
Чтобы узнать какие есть стили с конкретными размерами (будь то padding, margin и т.д.), нужно использовать метод `getComputedStyle`.

Простой пример: 
```HTML
  <style> 
    body { 
      color: red; 
      margin: 5px;
    } 
  </style>

  <script>
    let computedStyle = getComputedStyle(document.body)

    // сейчас мы можем прочитать отступ и цвет

    alert( computedStyle.marginTop ) // 5px
    alert( computedStyle.color ) // rgb(255, 0, 0)
  </script>
```

`getComputedStyle(element, [pseudo])`: 
* element - значение, для которого нужно получить;
* pseudo - указывается, если нужен стиль псевдоэлемента, например ::before. Пустая строка или отсутствие аргумента означают сам элемент.


*** 

`event.defaultPrevented` - используется для того, чтобы отменить типичное действие у тега.

Свойство `event.defaultPrevented` установлено в `true`, если действие по умолчанию было предотвращено, и `false`, если нет.

