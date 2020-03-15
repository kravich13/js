// 1) Скрыть элемент по нажатию кнопки

let div = document.createElement("div")
let button = document.createElement("button")
let p = document.createElement("p")

button.textContent = "Нажми и текст изчезнет, бугага"
button.style.padding = "5px"    
p.textContent = "нажимай на кнопочку и я изчезну"
p.style.padding = "5px"

div.append(button)
div.append(p)
document.body.prepend(div)

button.addEventListener("click", function (event) {
    p.hidden = true
})



// 2) Спрятать кнопку при нажатии самой на себя

let button = document.createElement("button")

button.textContent = "Нажми и я изчезну, бугага"
button.style.padding = "5px"    

document.body.prepend(button)

button.addEventListener("click", function (event) {
    button.hidden = true
})



// 3) Передвинуть мячь по полю при нажатии ЛКМ




