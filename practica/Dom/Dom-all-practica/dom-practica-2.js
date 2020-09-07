// 1) Найти размер прокрутки снизу

// нужно взять общий scrollHeight, от него отнять scrollTop (то, что прокручено вверху) и отнять clientHeight (то, на чём сейчас прокрутка)
let div = document.createElement('div')
div.style.overflowY = 'scroll'
div.style.width = '150px'
// div.style.height = '150px'
div.textContent = "loremd jighsdfhg fdjgh dfjigh fdig hsdhf gdsjhf dsjhfg dshf gdsh fds fauads fhgsadh fhjasdfiuasdfihasd fhads gfhads gfhadsfihasdg ffd gashdf gasdgfdsa fihasd "
document.body.prepend(div)

let ostatok = div.scrollHeight - div.scrollTop - div.clientHeight
console.log(ostatok) // 50px, если height установлен и 0, если высота не указана



// 2) Узнать ширину полосы прокрутки

let div = document.createElement('div')
div.style.overflowY = 'scroll'
div.style.width = '150px'
div.style.height = '150px'
div.textContent = "loremd jighsdfhg fdjgh dfjigh fdig hsdhf gdsjhf dsjhfg dshf gdsh fds fauads fhgsadh fhjasdfiuasdfihasd fhads gfhads gfhadsfihasdg ffd gashdf gasdgfdsa fihasd "
document.body.prepend(div)

let widthDiv = div.offsetWidth - div.clientWidth
console.log(widthDiv) // 17 в моём случае ширина прокрутки (ползунок)



// 3) Поместите мяч в центр поля

let div = document.getElementById("field")
let ball = document.getElementById("ball")

// делим высоту и ширину всего div (внутренней части) на два
let centerHeight = div.clientHeight / 2 
let centerWidth = div.clientWidth / 2

// задаём размеры картинке, иначе узнать размеры не удастся 
ball.style.width = "40px"
ball.style.height = "40px"

// делим высоту и ширину картинки на два
let ballHeight = ball.offsetHeight / 2
let ballWidth = ball.clientHeight / 2
console.log(ballHeight)
console.log(ballWidth)

// ширину и высоту div отнимаем от ширины и высоты картинки и получаем центр
ball.style.top = `${Math.floor(centerHeight - ballHeight)}px`
ball.style.left = `${Math.floor(centerWidth - ballWidth)}px`



// 4) Найдите координаты точек относительно окна браузера

let div = document.getElementById("field")
console.log(div.getBoundingClientRect()) // внешка перед конец 
// P.S. нужно как-то извлечь нужные координаты, то там всё в куче

console.log(`${div.offsetLeft + ((div.offsetWidth - div.clientWidth) / 2)}:${div.offsetTop + ((div.offsetHeight - div.clientHeight) / 2)} `) // внутренний верх 

console.log(`${div.offsetLeft + div.clientWidth + ((div.offsetWidth - div.clientWidth) / 2)}:${div.offsetTop + div.clientHeight + ((div.offsetHeight - div.clientHeight) / 2)} `) // внутренний низ



// 5) Покажите заметку рядом с элементом


let blockquote = document.querySelector('blockquote')

// тут создал текст в диве, который я передал параметром
function showNote(text) {
  let note = document.createElement('div')
  note.className = "note"
  note.innerHTML = text
  document.body.append(note)

}
showNote("note above")
showNote("note at the right")
showNote("note below")
showNote("note above-in")
showNote("note at the right-in")
showNote("note below-in")

let div = document.getElementsByClassName("note")

// тут указал всё, что было в задании и всё пашет как нужно, но сделать несколько вызовов функции сразу нельзя, свет включается по отдельности
function positionAt(anchor, position, elem) {
  let globalPos = anchor.getBoundingClientRect()

  if (position === "top-out") {
    elem.style.top = `${globalPos.top - elem.clientHeight}px`
    elem.style.left = `${globalPos.left}px`
  }
  if (position === "bottom-out") {
    elem.style.top = `${(globalPos.bottom -  elem.clientHeight) + elem.clientHeight}px`
    elem.style.left = `${globalPos.left}px`
  }
  if (position === "right-out") {
    elem.style.top = `${globalPos.top}px`
    elem.style.left = `${globalPos.left + anchor.clientWidth + (anchor.offsetWidth - anchor.clientWidth)}px`
  }
  if (position === "top-in") {
    elem.style.top = `${globalPos.top}px`
    elem.style.left = `${globalPos.left}px`
  }
  if (position === "right-in") {
    elem.style.top = `${globalPos.bottom -  elem.clientHeight}px`
    elem.style.left = `${globalPos.left}px`
  }
  if (position === "bottom-in") {
    elem.style.top = `${globalPos.top}px`
    elem.style.left = `${globalPos.left + anchor.clientWidth - (elem.clientWidth - (anchor.offsetWidth - anchor.clientWidth))}px`
  }


}
positionAt(blockquote, "top-out", div[0])
positionAt(blockquote, "right-out", div[1])
positionAt(blockquote, "bottom-out", div[2])
positionAt(blockquote, "top-in", div[3])
positionAt(blockquote, "right-in", div[4])
positionAt(blockquote, "bottom-in", div[5])
