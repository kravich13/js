- [Генерация пользовательских событий](#генерация-пользовательских-событий)
  - [Конструктор Event](#конструктор-event)
  - [Метод dispatchEvent](#метод-dispatchevent)
  - [MouseEvent, KeyboardEvent и другие](#mouseevent-keyboardevent-и-другие)
  - [Пользовательские события](#пользовательские-события)
  - [event.preventDefault()](#eventpreventdefault)

# Генерация пользовательских событий

Можно не только назначать обработчики, но и генерировать события.

Можно генерировать не только совершенно новые, придуманные нами события, но и встроенные, такие как `click`, `mousedown` и другие.
***

## Конструктор Event

Встроенные  классы для событий формируют иерархию аналогично классам DOM-элементов. Её корнем является встроенный класс `Event`.

События встроенного класса `Event` создаются так: 

```javascript
const event = new Event("type", {options})
```

Где: 
* `type` - тип события, строка, к примеру `click` или же любой другой придуманный ивент (`"kravich"`)
* `options` - объект с двумя необязательными свойствами: 
    * `bubbles: true/false` - если `true`, то событие всплывает
    * `cancelable: true/false` - если `true`, тогда можно отменить действие по умолчанию

По умолчанию оба свойства установлены в `false`: `{ bubbles: false, cancelable: false }`.
***

## Метод dispatchEvent

После того, как объект события создан, нужно запустить его на элементе, вызвав метод `elem.dispatchEvent(event)`.

После чего обработчики отреагируют на него, как будто это обычное браузерное событие. Если при создании указал флаг `bubbles` - то оно будет всплывать.

```javascript
const $button = document.createElement("button")
$button.textContent = "Нажми на меня"
document.body.append($button)


// событие сработает здесь
document.addEventListener("hello", function (event) {
    console.log(`Привет от ${event.target.tagName}`)
    // Привет от BUTTON
})

// запуск события на элементе $button, для этого bubbles:true
const event = new Event("hello", {bubbles: true})
$button.dispatchEvent(event)
```
***

## MouseEvent, KeyboardEvent и другие

Для некоторых конкретных типов событий есть свои конструкторы. Небольшой список конструкторов:

* `UIEvent`
* `FocusEvent`
* `MouseEvent`
* `WheelEvent`
* `KeyboardEvent`

Их стоит использовать вместо `new Event`, если нужно создать такие события. К примеру `new MouseEvent("click")`.

Конструктор позволяет указать стандартные свойства для данного типа события.

```javascript
const event = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    clientX: 100,
    clientY: 100
})

console.log(event.clientX) // 100
```
***

## Пользовательские события

Для генерации событий новых типов, таких как `"kravich"`, следует использовать конструктор `new CustomEvent`. Этот конструктор идентичен `Event`, за исключением одной детали.

У второго аргумента-объекта есть дополнительное свойство `detail`, в котором можно указывать информацию для передачи события.

```javascript
const $h1 = document.createElement("h1")
$h1.textContent = "Привет для Кравича!"
document.body.append($h1)


// передача события hello
$h1.addEventListener("hello", function (event) {
    console.log(event.detail.name) // Kravich
})

// Запуск
$h1.dispatchEvent(new CustomEvent("hello", {
    detail: { name: "Kravich" }
}))
```

**Свойство `detail` может содержать любые данные.**
*** 

## event.preventDefault()

Для многих браузерных событий есть "действия по умолчанию", такие как переход по ссылке, выделение и т.д. т.п..

Вызов `event.preventDefault()` является возможность для обработчика событий сообщить в сгенерироваший событие код, что это действие надо отменить.

Тогда вызов `elem.dispatchEvent(event)` возвратит `false` и код, сгенерироваший событие узнает, что продолжать не нужно.

В примере при нажатии на кнопку `button` вылазит окно с вопросом, и, если нажать "ок" - будет отменено действие по умолчанию (скрыть элемент) и элемент `pKravich` останется на месте:

```javascript
const $pKravich = document.createElement("p")
$pKravich.textContent = "Привет, Кравич"
document.body.append($pKravich)


const $button = document.createElement("button")
$button.textContent = "hide()"
document.body.append($button)


function hide () {

    const event = new CustomEvent("hide", {
        cancelable: true // отмена действия по умолчанию
    })

    // если событие не вызвано
    if (!$pKravich.dispatchEvent(event)) { // 2) **
        console.log("Действие отменено обработчиком")
    } 
    else { // если вызвано - убрать поле с текстом
        $pKravich.hidden = true
    }
}

// вызвать функцию при клике на кнопку
$button.addEventListener("click", function (event) {
    hide()
})

$pKravich.addEventListener("hide", function (event) {
    // если нажали "ок" - отменить действие по умолчанию
    if (confirm("Вызвать preventDefault?")) {
        event.preventDefault() // 1) **
    }
})
```

**Cобытие должно содержать флаг `cancelable: true`. Иначе, вызов `event.preventDefault()` будет проигнорирован.**



