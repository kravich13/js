## Пользовательские элементы

Можно создавать свои собственные HTML элементы, описываемые собственным классом, со своимими методами, свойствами, событиями и т.д..

Пользовательские элементы можно определить с помощью специального класса, а затем использовать их.

Есть два вида пользовательских элементов: 
1. **Автономные элементы** - полностью новые элементы. расширяющие класс `HTMLElement`.
2. **Встроенные элементы** - модифицированные элементы, к примеру расширяющие кнопку `HTMLButtonElement`.
***

## Автономные элементы 

Синтаксист автономных элементов:

```javascript
class SelectSearch extends HTMLElement {
    constructor () {
        super()

        // элемент создан
    }

    connectedCallback () {
        // браузер вызывает этот метод при добавлении элемента в документ
    }

    disconnectedCallback () {
        // браузер вызывает этот метод при удалении элемента из документа
    }

    static get observedAttributes () {
        return [// массив имён атрибутов для отслеживания их изменений]
    }

    attributeChangeCallback (name, oldValue, newValue) {
        // вызывается при изменении одного из перечисленных выше атрибутов
    }

    adoptedCallback () {
        // вызывается, когда элемент перемещается в новый документ
    }

    // другие методы
}
```

После этого нужно зарегистрировать элемент в браузере: 

```javascript
customElements.define("select-search", SelectSearch)
```

Теперь для любых HTML-элементов  `<select-search>` создаётся эксемпляр `SelectSearch` и вызываются вышеупомянутые методы. Теперь элемент можно использовать в JS: `document.createElement("select-search")`.

**Все имена собственных элементов должны быть через дефис `-`**
***

## Пример `<time-formatted>`
Элемент `<time>` уже существует для даты/времени. Но сам по себе не выполняет никакого форматирования. Создадим элемент `<time-formatted>`, который отображает время в удобном формате с учётом языка: 

```html
<script>
class TimeFormatted extends HTMLElement { // 1)

  connectedCallback() { // Класс вызывает этот метод, когда он добавляется на страницу
    let date = new Date(this.getAttribute('datetime') || Date.now());

    this.innerHTML = new Intl.DateTimeFormat("default", {
      year: this.getAttribute('year') || undefined,
      month: this.getAttribute('month') || undefined,
      day: this.getAttribute('day') || undefined,
      hour: this.getAttribute('hour') || undefined,
      minute: this.getAttribute('minute') || undefined,
      second: this.getAttribute('second') || undefined,
      timeZoneName: this.getAttribute('time-zone-name') || undefined,
    }).format(date);
  }

}

customElements.define("time-formatted", TimeFormatted) // 2) регистрация элемента в браузере
</script>

<!-- 3) использование везде-->
<time-formatted datetime="2019-12-01"
  year="numeric" month="long" day="numeric"
  hour="numeric" minute="numeric" second="numeric"
  time-zone-name="short"
></time-formatted>
```

**Рендеринг происходит в `connectedCallback`, не в `constructor`**:

Когда вызывается `constructor`, действия ещё не готовы. Экземпляр элемента создан, но на этом этапе браузер ещё не обработал/назначил атрибуты: вызовы `getAttribute` вернули бы `null`. Так что мы не можем рендерить здесь.

***

## Модифицированные встроенные элементы

Можно расширять и модифицировать встроенные HTML-элементы, наследуя их классы.

К примеру, кнопки `<button>` являются экземплярами класса `HTMLButtonElement`, создадим элемент на его основе.

```html
<!-- 1) Унаследование HTMLButtonElement нашим классом -->
<script>
class HelloButton extends HTMLButtonElement {
    constructor () {
        super()
        this.addEventListener("click", () => console.log("привет, Кравич"))
    }
}

// 2) Предоставим третий аргумент в customElements.define, указывающий тег
customElements.define("hello-button", HelloButton, {extends: "button"})
</script>


<!-- 3) Для использования модифицированного тега, нужно добавить к нему is="hello-button" -->
<button is="hello-button">...</button>
```

Теперь при клике на кнопку `<button is="hello-button>` будет выскакивать сообщение: привет, Кравич. Также эта кнопка имеет все те же атрибуты, что и обычный тег `<button>`.



















