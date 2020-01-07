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
***

Обращение к существующему элементу `ElementById("myid")`

второй способ: `getElementsByClassName("header-big")`
