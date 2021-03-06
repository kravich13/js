- [Shadow DOM](#shadow-dom)
- [Встроенный теневой DOM](#встроенный-теневой-dom)
- [Теневое дерево](#теневое-дерево)
- [Инкапсуляция](#инкапсуляция)

## Shadow DOM

Теневой дом используется для инкапсуляции. Благодаря ему в компоненте есть собственное теневое DOM-древо, к которому нельзя просто так обратиться из главного документа, у него могут быть изолированные CSS-правила и т.д.
***

## Встроенный теневой DOM

Для примера `<input type"range">` (ползунок вправо/влево).

Браузер рисует своими силами и по своему усмотрению. DOM-структура обычно не видна, но её можно посмотреть в инструментах разработчика, этот параметр нужно включить в браузере.

После чего структура тега будет выглядеть так: 

```html
<input type="range"> == $0
    #shadow-root (user-agent)
        <div>
            <div pseudo="webkit-slider-runnable-track" id="track">
                <div id="thumb"></div>
            </div>
        </div>
</input>
```

То, что находится под `#shadow-root` и есть теневой дом.

К нему нельзя получить доступ с помощью обычных JS вызовов или с помощью селекторов. 
***

## Теневое дерево

Каждый DOM-элемент может иметь 2 типа поддеревьев DOM:

1. Light tree - обычное, светлое DOM-поддерево, состоящее из HTML-потомков.
2. Shadow tree - скрытое, теневое DOM-поддерево, не отраженное в HTML.

Если у элемента имеются оба поддерева, браузер отрисовывает только теневое дерево.

К примеру, этот `<show-hello>` элемент прячет свой внутренний DOM в теневом дереве: 

```html
<script>
customElements.define('show-hello', class extends HTMLElement {

  connectedCallback () {
    const shadow = this.attachShadow({mode: 'open'})

    // хранит <p> Hello, "имя атрибута </p>
    shadow.innerHTML = `<p>
      Hello, ${this.getAttribute('name')}
    </p>`
  }
})
</script>

<show-hello name="Kravich"></show-hello>

Hello, Kravich
```

Вот так выглядит Shadow-DOM в инструментах разработчика, весь его контент внутри `#shadow-root`:

```html
<show-hello name="Kravich"> == $0
    #shadow-root (open)
        <p>Hello, Kravich</p>
</show-hello>
```

Вызов `elem.attackShadow({mode: ...})` создаёт теневое дерево.

Есть два ограничения: 

1. Для каждого элемента можно создать только один `shadow root`.
2. В качестве `elem` может быть использован пользовательский элемент, либо один из cледующих элементов: `article`, `aside`, `blockquote`, `body`, `div`, `footer`, `h1…h6`, `header`, `main`, `nav`, `p`, `section` или `span`. Остальные, например, `img`, не могут содержать теневое дерево.


Свойство `mode` задаёт уровень инкапсуляции. У него может быть только два значения:

* `"open"` - корень деневого дерева доступен как `elem.shadowRoot`.
    * Любой код может получить теневое дерево `elem`.
* `"closed"` - `elem.shadowRoot` всегда возвращает `null`.


С возвращаемым методом `attachShadow` объектом корнем теневого дерева, можно работать как с обычным DOM-элементом: менять его `innerHTML` или использовать методы DOM, такие как append, чтобы заполнить его.

Элемент с корнем теневого дерева называется - хозяин (`host`) и он доступен в качестве свойства `host` у `shadow root`:

```javascript
elem.shadowRoot.host === elem // true
```
***

## Инкапсуляция 

Теневой DOM отделён от главного документа.
1. Элементы теневого DOM не видны из обычного DOM через `querySelector`.
2. У теневого DOM свои стили. Стили из внешнего DOM не применятся.

```html
<style>
 /* стили документа не применятся в теневом дереве внутри #elem  */
  p { color: red; }
</style>

<div id="elem"></div>

<script>
  elem.attachShadow({mode: 'open'});
    // у теневого дерева свои стили 
  elem.shadowRoot.innerHTML = `
    <style> p { font-weight: bold; } </style>
    <p>Hello, Kravich!</p>
  `

  // <p> виден только запросам внутри теневого дерева 
</script>

<!-- Результат: жирный курсив, а светлый дом никак не может установить ему красный цвет -->
<b>Hello, Kravich!</b>
```
