// Генерация пользовательских событий

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





// MouseEvent, KeyboardEvent и другие

const event = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    clientX: 100,
    clientY: 100
})

console.log(event.clientX) // 100






// event.preventDefault()

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




