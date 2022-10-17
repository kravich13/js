// 1) Автосохранение поля формы

const $textarea = document.getElementById("area")
const $clearButton = document.getElementById("buttClear")


$clearButton.addEventListener("click", function (event) {
    $textarea.value = ""
    localStorage.setItem("textArea", $textarea.value)

})

$textarea.addEventListener("input", function (event) {

    // Записывает в localStorage текущие введенные данные textarea
    localStorage.setItem("textArea", $textarea.value)
})


// Поскольку на новой вкладке никаких новых записывающих данных в localStorage не было, то в value были записаные самые последнние данные из прошлой страницы
console.log(localStorage)
$textarea.value = localStorage.getItem("textArea")