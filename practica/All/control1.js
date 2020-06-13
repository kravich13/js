// 1) Объединить два массива в один объект. Один массив с ключами, второй - со значениями.

const arrKey = ["name", "surname"]
const arrValue = ["Vlad", "Kravich"]


function objedinenie (keys, values) {
    const user = {}

    if (keys.length != values.length) {
        return console.log("ошибка, в одном из массивов больше элементов чем в другом")
    }

    for (let i = 0; i < keys.length; i++) {
        user[keys[i]] = values[i]
    }
    
    return user
}
objedinenie(arrKey, arrValue)




// 2) Сделать функцию, которая складывает ключи и значения, если они численные
// Результатом является массив по порядку ключей в оргининальном объекте.


const obj = {
    "1": 1, // 2
    "2": 2,  // 4
    3: 3,  // 6
    4: "4", // 8
    name: "Vlad", // no
    age: 22, // no
    5: 5 // 10
}

function slojenie (object) {
    const arr = []

    for (let key in object) {
        if (isNaN(key) === false && isNaN(object[key]) === false) {

            arr.push(+key + +object[key])
        }
    }

    return arr

}
slojenie(obj)




// 3) Напедалить функцию, котоорая воспринимает объект вида {'5': 'number', 'login': 'text', '': password} создает соответствующую форму с значениями-ключами и типами-значениями

const obj = {
    '5': 'number',
    'login': 'text',
    '': "password"
}

function html (object) {
    let str = "<form>"

    for (let key in object) {
        str += ` <input type="${object[key]}", value="${key}">`
    }
    str += "</form>"

    return str
}
document.write(html(obj))




// Создайте функцию, которая будет искать все элементы по селектору и задавать им то или иное свойство в то или иное значение

function isportitVse (selector, type, text) {

    const arrayElem = Array.from(document.querySelectorAll(selector))
    
    for (let i = 0; i < arrayElem.length; i++) {
        arrayElem[i][type] = text
    }

    return console.log("изменено")
}
isportitVse("h1", 'innerText', 'испортим все заголовки на странице')




// Написать функцию, которая перематывает страницу вверх по нажатию на блок, запоминает позицию на странице и возвращается по нажатию вниз при повторном клике.

function tickNaButton () {

    let button = document.createElement("button")
    let top = 0
    let flag = false

    button.style.width = "100px"
    button.style.height = "70px"
    button.style.margin = "10px 0"
    button.style.position = "fixed"
    button.textContent = "↓"
    button.style.backgroundColor = "rgb(200, 5, 25, 0.7)"
    button.style.fontSize = "23px"
    button.style.fontWeight = "900"
    button.style.border = "3px solid white"
    button.style.borderRadius = "7px"
    
    window.addEventListener("scroll", function (event) {
        if (document.body.scrollTop === 0) {
            button.textContent = "↓"
        }
        else {
            button.textContent = "↑"
        }
    })

    button.addEventListener("click", function (event) {
        if (flag === false) {
            // если прокрутка была, запоминаем и кидаем в начало

            top = document.body.scrollTop // BODY, важно!
            window.scrollTo(0, 0)
            flag = true
        }
        else {
            if (document.body.scrollTop != 0) {
                // если после прокрутки вверх была прокрутка вниз, запоминаем новые координаты и кидаем в начало

                top = document.body.scrollTop // BODY, важно!
                window.scrollTo(0,0)
            }
            else { 
                // если после прокрутки наверх захотели вернуться обратно, кидаем на предыдущие координаты

                window.scrollBy(0, top)
                flag = false
            }
        }

    })
    
    return document.body.prepend(button)
}
tickNaButton()