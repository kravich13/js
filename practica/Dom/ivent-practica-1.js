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
// полный код в папке "HTML_JS\ball-click-DOM.html"

let div = document.getElementById("field")

    div.addEventListener("click", function (event) {
      let ball = document.getElementById("ball")

      let centerX = ball.offsetWidth / 2
      let centerY = ball.offsetHeight / 2
      let posX = event.clientX
      let posY = event.clientY
      let globalCoords = div.getBoundingClientRect()
      let globalTop = globalCoords.top
      let globalLeft = globalCoords.left

      // ширина
      let borderRight = globalLeft + div.clientLeft + div.clientWidth - centerX
      let borderLeft = globalLeft + div.clientLeft + centerX

      if (posX <= borderLeft) {
        ball.style.left = `${div.clientLeft - div.clientLeft}px`
      } 
      else {
        if (posX >= borderRight) {
          ball.style.left = `${div.clientWidth - ball.offsetWidth }px`
        } 
        else {
          ball.style.left = `${posX - globalLeft - centerX - div.clientLeft}px`
        }
      }

      // высота
      let borderTop = globalTop + div.clientTop + centerY
      let borderBottom = globalTop + div.clientTop + div.clientHeight - centerY
      
      if (posY <= borderTop) {
        ball.style.top = `${div.clientTop - div.clientTop}px`
      } 
      else {
        if (posY >= borderBottom) {
          ball.style.top = `${div.clientHeight - ball.offsetHeight}px`
        } 
        else {
          ball.style.top = `${posY - globalTop - div.clientTop - centerY}px`
        }
      }
    })



// 4)  Создать раскрывающееся меню

let div = document.createElement("div")
div.style.marginLeft = "10px"
document.body.prepend(div)

let p = document.createElement("p")
let strelkaBottom = document.createElement("span")
let strelkalRight = document.createElement("span")
strelkaBottom.innerHTML = "▼"
strelkalRight.innerHTML = "▶"

p.textContent = `${strelkalRight.innerHTML}Сладости (нажми на меня)!`

let ul = document.createElement("ul")
let li = document.createElement("li")
li.textContent = "Пироженое"
ul.append(li)
li = document.createElement("li")
li.textContent = "Пончик"
ul.append(li)
li = document.createElement("li")
li.textContent = "Мёд"
ul.append(li)

div.append(p)
div.append(ul)
ul.hidden = true // скрыли весь список

function menu (elem) {
    let flag = false

    elem.addEventListener("click", function(event) {
        if (flag == false) {
            p.textContent = `${strelkaBottom.innerHTML}Сладости (нажми на меня)!`
            ul.hidden = false
            flag = true
        }
        else {
            p.textContent = `${strelkalRight.innerHTML}Сладости (нажми на меня)!`
            ul.hidden = true
            flag = false
        }
    })
}
menu(p)
