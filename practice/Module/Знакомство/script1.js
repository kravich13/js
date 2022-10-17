// сделал экспортёром в другие файлы
export const $div = document.createElement("div")

// все изменения с экспортированной переменной продолжают работать
$div.style.width = "230px"
$div.style.fontSize = "23px"
$div.textContent = "Было: Vlad Kravich"
