// Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.

let input = document.createElement("input")
input.type = "submit"
input.name = "knopka"
input.value = "Нажми и текст изчезнет"
input.onclick = "remove"
document.body.prepend(input)
let p = document.createElement("p")
p.textContent = "Текст"
document.body.prepend(p)


function remove (del = p) {
    del.remove()
}