## Невидимый элемент template

Встроенный элемент `<template>` предназначен для хранения шаблона HTML. Браузер полностью игнорирует его содержимое, проверяя лишь синтаксис, но мы можем использовать этот элемент в JavaScript, чтобы создать другие элементы.
***

## Использование template

Содержимое шаблона доступно по его свойству `content` в качестве `DocumentFragment` – особый тип DOM-узла.

Можно обращаться с ним так же, как и с любыми другими DOM-узлами, за исключением одной особенности: когда мы его куда-то вставляем, то в это место вставляется не он сам, а его дети.

```html
<template id="tmpl">
    <script>
        console.log("Привет")
    </script>
    <div class="message">Привет, Мир!</div>
</template>

<script>
    let elem = document.createElement('div')

    // Клонируем содержимое шаблона для того, чтобы переиспользовать его несколько раз
    elem.append(tmpl.content.cloneNode(true))

    document.body.append(elem)
    // Сейчас скрипт из <template> выполнится
</script>
```

Пример:

```html
<template id="tmpl">
    <style> p { font-weight: bold } </style>
    <p id="message"></p>
</template>

<div id="elem">Нажми на меня</div>

<script>
    elem.onclick = function () {
    elem.attachShadow({mode: 'open'})

    elem.shadowRoot.append(tmpl.content.cloneNode(true)) 

    elem.shadowRoot.getElementById('message').innerHTML = "Привет из теней!"
  }
</script>
```

При клике на `<div>Нажми на меня</div>` заменится его `innerHTML` на `"Привет из теней!"`, который будет выделен жирным шрифтом.

Когда мы клонируем и вставляем `tmpl.content`, то, так как это `DocumentFragment`, вместо него вставляются его потомки `<style>, <p>`.

Именно они и формируют теневой DOM:


```HTML
<div id="elem">
  #shadow-root
    <style> p { font-weight: bold } </style>
    <p id="message"></p>
</div>
```



