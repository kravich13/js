## Настройка стилей теневого DOM

Теневой DOM может содержать теги `<style>` и `<link rel="stylesheet" href="…">`. В последнем случае таблицы стилей кешируются по протоколу HTTP, так что они не будут загружаться повторно при использовании одного шаблона для многих компонентов.

Как правило, локальные стили работают только внутри теневого DOM, а стили документа – вне его. Но есть несколько исключений.
***

## :host

Селектор `:host` позволяет выбрать элемент-хозяин (элемент, содержащий теневое дерево).

Например, мы создаём элемент `<custom-dialog>` который нужно расположить по-центру. Для этого нам необходимо стилизовать сам элемент `<custom-dialog>`.

```html
<template id="tmpl">
    <style>
    /* host и есть сам элемент custom-dialog */
        :host {
            position: fixed;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            display: inline-block;
            border: 1px solid red;
            padding: 10px;
        }
    </style>
    <slot></slot>
</template>

<script>
    customElements.define('custom-dialog', class extends HTMLElement {
        connectedCallback() {
            this.attachShadow({mode: 'open'}).append(tmpl.content.cloneNode(true))
        }
    })
</script>

<custom-dialog>
  Hello!
</custom-dialog>

Hello! по центру страницы
```
***

## Каскадирование

Элемент-хозяин `<custom-dialog>` находится в светлом DOM, поэтому к нему применяются CSS-стили документа.

Если есть некоторое свойство, стилизованное как в `:host` локально, так и в документе, то стиль документа будет приоритетным.

Например, если в документе из примера поставить:

```html
<style>
    custom-dialog {
        padding: 0;
    }
</style>
```

…то `<custom-dialog>` будет без `padding`.

Это очень удобно, поскольку мы можем задать стили «по умолчанию» в компонента в его правиле `:host`, а затем, при желании, легко переопределить их в документе.

Исключение составляет тот случай, когда локальное свойство помечено как `!important`, для таких свойств приоритет имеют локальные стили.
***

## :host(selector)

То же, что и `:host`, но применяется только в случае, если элемент-хозяин подходит под селектор `selector`.

Например, мы бы хотели выровнять по центру `<custom-dialog>`, только если он содержит атрибут `centered`:

```html
<template id="tmpl">
  <style>
    :host([centered]) {
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-color: blue;
    }

    :host {
      display: inline-block;
      border: 1px solid red;
      padding: 10px;
    }
  </style>
  <slot></slot>
</template>

<script>
customElements.define('custom-dialog', class extends HTMLElement {
  connectedCallback() {
    this.attachShadow({mode: 'open'}).append(tmpl.content.cloneNode(true));
  }
});
</script>


<custom-dialog centered>
  Centered!
</custom-dialog>

<custom-dialog>
  Not centered.
</custom-dialog>
```
Теперь дополнительные стили для выравнивания по центру применяются только к первому элементу: `<custom-dialog centered>`.
***

## Стилизация собственного тега

Селекторы типа :host применяют правила к элементу `<custom-dialog>` или `<user-card>`, но как стилизовать элементы теневого DOM внутри них? Например, в `<user-card>` мы хотели бы разрешить внешнему документу изменять внешний вид пользовательских полей.

**Пользовательские свойства CSS существуют одновременно на всех уровнях, как светлом, так и в тёмном DOM.**

Например, в теневом DOM мы можем использовать CSS-переменную `--user-card-field-color` для стилизации полей, а документ будет её устанавливать:

```html
<style>
  user-card {
    --user-card-field-color: green;
  }
</style>

<template id="tmpl">
  <style>
    .field {
      color: var(--user-card-field-color, black);
    }
  </style>
  <div class="field">Имя: <slot name="username"></slot></div>
  <div class="field">Дата рождения: <slot name="birthday"></slot></div>
</template>

<script>
customElements.define('user-card', class extends HTMLElement {
  connectedCallback() {
    this.attachShadow({mode: 'open'});
    this.shadowRoot.append(document.getElementById('tmpl').content.cloneNode(true));
  }
});
</script>

<user-card>
  <span slot="username">John Smith</span>
  <span slot="birthday">01.01.2001</span>
</user-card>
```

Теперь весь текст в теге `<user-card>` будет полностью зеленого цвета, включая теневой DOM.