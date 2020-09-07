## Слоты теневого DOM, композиция

Многим типам компонентов, таким как вкладки, меню, галереи изображений и другие, нужно какое-то содержимое для отображения.

Также, как элемент `<select>` ожидает получить контент внутри элементов `<option>`, компонент `<custom-tabs>` может ожидать, что будет передано фактическое содержимое вкладок, а `<custom-menu>` - пунктов меню.

Пример `<custom-menu>`:

```html
<custom-menu>
  <title>Сладости</title>
  <item>Леденцы</item>
  <item>Фруктовые тосты</item>
  <item>Кексы</item>
</custom-menu>
```

После чего компонент должен правильно его изобразить. Элемент `<title>` должен быть жирным курсивом и заглавным шрифтом, а `<item>` должны быть в виде списка. 

Можно поступить по-разному, делать проверки и прочее, но вместо этого теневой DOM предлагает специальный элемент `<slot>`.
***

## Именованные слоты

Теневой DOM `<user-card>` имеет два слота, заполняемых из обычного DOM:

```html
<script>
    customElements.define('user-card', class extends HTMLElement {

        connectedCallback() {

            this.attachShadow({mode: 'open'})
            this.shadowRoot.innerHTML = `
                <div>Имя:
                <slot name="username"></slot>
                </div>

                <div>Дата рождения:
                <slot name="birthday"></slot>
                </div>
                `
        }
    })
</script>

<user-card>
    <span slot="username">Влад Кравич</span>
    <span slot="birthday">02.09.1997</span>
</user-card>


Имя: Влад Кравич
Дата рождения: 02.09.1997
```

Теперь `#shadow-root` имеет следущую структуру и он сказет, что где находится и что с этим делать:

```html
#shadow-root
    <div>Имя:
        <slot name="username"></slot> <!-- 1 -->
    </div>
    <div>Дата рождения:
        <slot name="birthday"></slot> <!-- 2 -->
    </div>
<span slot="username">Влад Кравич</span> <!-- 1 -->
<span slot="birthday">02.09.1997</span>  <!-- 2 -->
```

В результате выстраивается развёрнутое DOM-дерево:

```html
<user-card>
    #shadow-root
        <div>Имя:
            <slot name="username">
            <!-- элемент слота вставляется в слот -->
                <span slot="username">Иван Иванов</span>
            </slot>
        </div>

        <div>Дата рождения:
            <slot name="birthday">
                <span slot="birthday">01.01.2001</span>
            </slot>
        </div>
</user-card>
```
***

## Содержимое слота по умолчанию

Если добавить данные в `<slot>`, это становится содержимым по умолчанию. Браузер отобразит контент из теневого дома, если в светлом доме отсутствуют данные.

Например, в этой части теневого дерева текст Аноним отображается, если в светлом дереве нет значения `slot="username"`.

```html
<div>Имя:
    <slot name="username">Аноним</slot>
</div>
```
***

## Слот по умолчанию

Первый `<slot>` в теневом доме без атрибута является слотом по умолчанию. Он будет отображать все данные как обычно, но в самом теге писать этот тег будет не нужно.

Пример из `<select-search>`:

```html
<template id="tmpl">
    <input type="text" id="inputValue">
    <div id="menu">
        <!-- slot находится внутри див и именно тут будут находиться все option -->
        <!-- один slot - один option -->
        <slot></slot> 
    </div>
</template>


<!-- Нет никаких тегов slot для чистоты кода -->
<select-search>
    <option>tex1</option>
    <option>Text2</option>
</select-search>
```
***

## Обновление слотов

Что если внешний код хочет динамически добавить или удалить пункты меню?

**Браузер наблюдает за слотами и обновляет отображение при добавлении и удалении элементов в слотах.**

Таким образом, ничего не нужно делать для обновления отображения. Но если код компонента хочет узнать об изменениях в слотах, можно использовать событие `slotchange`.

Например, здесь пункт меню вставляется динамически через 1 секунду, и заголовок меняется через 2 секунды:

```html
<custom-menu id="menu">
  <span slot="title">Сладости</span>
</custom-menu>

<script>
    customElements.define('custom-menu', class extends HTMLElement {
        connectedCallback() {
            this.attachShadow({mode: 'open'})
            this.shadowRoot.innerHTML = `<div class="menu">
            <slot name="title"></slot>
            <ul><slot name="item"></slot></ul>
            </div>`

            // shadowRoot не может иметь обработчиков событий, поэтому используется первый потомок
            this.shadowRoot.firstElementChild.addEventListener('slotchange',
            e => alert("slotchange: " + e.target.name))
        }
    })

    setTimeout(() => {
    menu.insertAdjacentHTML('beforeEnd', '<li slot="item">Леденцы</li>')}
    , 1000)

    setTimeout(() => {
    menu.querySelector('[slot="title"]').innerHTML = "Новое меню"
    }, 2000)
</script>
```

Отображение меню обновляется каждый раз без нашего вмешательства.

Здесь есть два события slotchange:

1. При инициализации:
    * `slotchange: title` запускается сразу же, как только `slot="title"` из обычного дерева попадает в соответствующий слот.
2. Через 1 секунду:
    * `slotchange: item` запускается, когда добавляется новый элемент `<li slot="item">`

*** 

## API слотов

JavaScript смотрит на реальный, а не на развёрнутый DOM. 

Но если у теневого дерева стоит `{mode: 'open'}`, то мы можем выяснить, какие элементы находятся в слоте, и, наоборот, определить слот по элементу, который в нём находится:


* `node.assignedSlot` – возвращает элемент `<slot>`, в котором находится `node`.

* `slot.assignedNodes({flatten: true/false})` – DOM-узлы, которые находятся в слоте. Опция `flatten` имеет значение по умолчанию `false`. Если явно изменить значение на `true`, она просматривает развёрнутый DOM глубже и возвращает вложенные слоты, если есть вложенные компоненты, и резервный контент, если в слоте нет узлов.

* `slot.assignedElements({flatten: true/false})` – DOM-элементы, которые находятся в слоте (то же самое, что выше, но только узлы-элементы).

Эти методы можно использовать не только для отображения содержимого, которое находится в слотах, но и для его отслеживания в JavaScript.