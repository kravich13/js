// 1) Написать это:
<html>
<body>
  <div>Пользователи:</div>
  <ul>
    <li>Джон</li>
    <li>Пит</li>
  </ul>
</body>
</html>


let div = document.createElement("div")
div.textContent = "Пользователи: "
let ul = document.createElement("ul")
div.append(ul)
let li = document.createElement("li")
li.textContent = "Джон "
ul.append(li)
li = document.createElement("li")
li.textContent = "Пит "
ul.append(li)
console.log(div)


// 2) Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.

function table (x) {
    let table = document.createElement("table")
    let tr = document.createElement("tr")
    let td = document.createElement("td")

    for (let i = 0; i < x; i++) {
        tr = document.createElement("tr")
        tr.style.textAlign = "center"
        table.append(tr)

        for (let j = 0; j < x; j++) {
            td = document.createElement("td")
            td.textContent = (i + 1) * (j + 1)
            td.style.border = "1px solid rgb(163, 163, 163)"
            td.style.fontFamily = "Helvetica Neue"
            td.style.fontSize = "23px"
            td.style.padding = "7px"
            tr.append(td)
        }
    }
    table.addEventListener("mouseover", function(event) {
        for (let i = 0; i < x; i++) {
            table.rows[i].cells[i].style.backgroundColor = "rgb(206, 46, 46)"
        }
    })
    table.style.margin = "30px"
    return document.body.prepend(table)
}
table(5)


// 3) У нас есть дерево, структурированное как вложенные списки ul/li.

// Напишите код, который выведет каждый элемент списка <li>:
// Какой в нём текст (без поддерева) ?
// Какое число потомков – всех вложенных <li> (включая глубоко вложенные) ?

let div = document.createElement("div")
let ul = document.createElement("ul")

ul.textContent = "SAMP"
let li = document.createElement("li")
div.append(ul)
li.textContent = "Влад"
ul.append(li)
li = document.createElement("li")
li.textContent = "Кравич"
ul.append(li)

ul = document.createElement("ul")
ul.textContent = "Lineage2"
div.append(ul)
li = document.createElement("li")
li.textContent = "Daniel"
ul.append(li)
li = document.createElement("li")
li.textContent = "Defo"
ul.append(li)

for (let ul of div.querySelectorAll('ul')) { // проходится по всем ul в блоке div
    let title = ul.firstChild.data // показывает текст, который есть в тегах ul
    let count = ul.getElementsByTagName('li').length // количество элементов в ul (в данном случае - li)
    console.log(title + ": " + count) 
  }
document.body.prepend(div)


// 4) Cделайте все внешние ссылки оранжевыми, изменяя их свойство style.

// let div = document.createElement("div")
// let ul = document.createElement("ul")
// div.append(ul)

// let li = document.createElement("li")
// let a = document.createElement("a")
// a.style.href = "http://google.com"
// a.textContent = "http://google.com"
// li.append(a)
// ul.append(li)

// li = document.createElement("li")
// a = document.createElement("a")
// a.style.href = "/tutorial"
// a.textContent = "/tutorial.html"
// li.append(a)
// ul.append(li)

// li = document.createElement("li")
// a = document.createElement("a")
// a.style.href = "local/path"
// a.textContent = "local/path"
// li.append(a)
// ul.append(li)

// li = document.createElement("li")
// a = document.createElement("a")
// a.style.href = "ftp://ftp.com/my.zip"
// a.textContent = "ftp://ftp.com/my.zip"
// li.append(a)
// ul.append(li)

// document.body.prepend(div)


// 5) Создайте функцию clear(elem), которая удаляет всё содержимое из elem.

let ol = document.createElement("ol")
ol.id = "elem"
let li = document.createElement("li")
li.textContent = "Влад"
ol.append(li)
li = document.createElement("li")
li.textContent = "Кравич"
ol.append(li)
li = document.createElement("li")
li.textContent = "Куявич"
ol.append(li)
document.body.prepend(ol)

function ochistka(elem) {
  for (let i = 0; i < elem.children.length; i++) {
    let arr = elem.children
    arr[arr.length-1].remove()
    if (arr.length == 1) {
      arr[0].remove()
    }
  }
  return elem
}
setTimeout(ochistka, 5000, ol)
console.log(ol)


// 6) Напишите интерфейс для создания списка.

let ul = document.createElement("ul")
let li = document.createElement("li")

function lisT (tagFirst, tagTwice) {

  tagFirst.textContent = "Список: "
  tagFirst.style.fontSize = "19px"
  tagFirst.style.margin = "10px"
  document.body.prepend(tagFirst)

  let result = ""

  for (let i = 0; i < 9999; i++) {
    tagTwice = document.createElement("li")
    tagTwice.style.marginLeft = "20px"
    result = prompt("Введите текст для элемента списка", "")
    if (result == null || result == "") {
      break
    }
    else {
      tagTwice.textContent = `${result}`
    }
    tagFirst.append(tagTwice)
  }
  return tagFirst
}
lisT(ul, li)


// 7) Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.

let data = {
  "Рыбы": { // 1

    "форель": {}, // 2
    "лосось": {} // 2
  },

  "Деревья": { // 1

    "Огромные": { // 2

      "секвойя": {}, // 3
      "дуб": {} // 3 
    },

    "Цветковые": { // 2

      "яблоня": {}, // 3
      "магнолия": {} // 3
    }
  }
};

function createTree (obj) {
  
  let div = document.createElement("div")
  div.append(ul)
  let ul = document.createElement("ul") // 1
  let li = document.createElement("li")

  div.style.margin = "10px"
  ul.style.marginLeft = "20px"

  for (let key in newObj) {
    li = document.createElement("li")
    li.textContent = newObj[key]
  }
  document.body.prepend(div)
  return div.innerHTML
}
createTree(data)


// 8) Напишите функцию createCalendar(elem, year, month). Таблица-календарь.
let table = document.createElement("table")
table.style.margin = "20px"
table.style.borderCollapse = "collapse"
document.body.prepend(table)

function createCalendar(elem, year, month) {
    let tr = document.createElement("tr")
    let th = document.createElement("th")
    let td = document.createElement("td")

    let month12 = 1 // для 12-о месяца
    let daySunday = 7 // воскресенье
    let trNumber = 0 // для кол-ва строк в цикле

    let data = new Date(year, month - 1)
    let dayWeek = data.getDay()
    let days = data.getDate()

    let dataFiveNumb = new Date(year, month - 1)
    dataFiveNumb.setDate(dataFiveNumb.getDate() + 28)

    let dataFiveSeven = new Date(year, month - 1)
    dataFiveSeven.setDate(dataFiveSeven.getDate() + 32)

    if (dayWeek == 0) {
        trNumber = 7
    } 
    else {
        if (dayWeek == 1) {
            if (dataFiveNumb.getMonth() == 2) {
                trNumber = 5
            } 
            else {
                trNumber = 6
            }
        } 
        else {
            if (dayWeek == 6) {
                if (dataFiveSeven.getMonth() == 0) {
                    trNumber = 7
                } 
                else {
                    trNumber = 6
                }
            } 
            else {
                trNumber = 6
            }
        }
    }

    function startData() {
        for (let i = 0; i < trNumber; i++) {
            tr = document.createElement("tr")

            for (let j = 0; j < 7; j++) {

                if (i < 1) {
                    th = document.createElement("th")
                    th.textContent = "s"
                    th.style.border = "1px solid black"
                    th.style.padding = "5px"
                    th.style.fontSize = "21px"
                    th.style.textAlign = "center"
                    tr.append(th)
                } 
                else {
                    td = document.createElement("td")
                    td.style.border = "1px solid black"
                    td.style.padding = "5px"
                    td.style.fontSize = "21px"
                    td.style.textAlign = "center"
                    td.textContent = ""

                    if (i == 1) {
                        if (dayWeek == 0) {
                            if (j > daySunday - 2) {
                                td.textContent = data.getDate()
                                data.setDate(data.getDate() + 1)
                            }
                        } 
                        else {
                            if (j > dayWeek - 2) {
                                td.textContent = data.getDate()
                                data.setDate(data.getDate() + 1)
                            }
                        }
                    } 
                    else {
                        if (month == 12) {
                            month12 = 0
                            if (data.getMonth() == month12) {
                                td.textContent = ""
                            } 
                            else {
                                td.textContent = data.getDate()
                                data.setDate(data.getDate() + 1)
                            }
                        } 
                        else {
                            if (data.getMonth() == month) {
                                td.textContent = ""
                            } 
                            else {
                                td.textContent = data.getDate()
                                data.setDate(data.getDate() + 1)
                            }
                        }
                    }
                    tr.append(td)
                }
            }
            elem.append(tr)
        }
    }

    startData()

    elem.rows[0].cells[0].textContent = "Пн"
    elem.rows[0].cells[1].textContent = "Вт"
    elem.rows[0].cells[2].textContent = "Ср"
    elem.rows[0].cells[3].textContent = "Чт"
    elem.rows[0].cells[4].textContent = "Пт"
    elem.rows[0].cells[5].textContent = "Сб"
    elem.rows[0].cells[6].textContent = "Вс"

}
createCalendar(table, 1997, 9)



// 9) Цветные часы с использованием setInterval
let divs = document.createElement("div")
let hours = document.createElement("span")
let minutes = document.createElement("span")
let seconds = document.createElement("span")
let start = document.createElement("button")
let end = document.createElement("button") 

divs.style.margin = "10px"
hours.style.fontSize = "31px"
hours.style.color = "red"
minutes.style.fontSize = "31px"
minutes.style.color = "blue"
seconds.style.fontSize = "31px"
seconds.style.color = "green"
start.textContent = "Старт"
start.style.fontSize = "25px"
start.style.marginLeft = "20px"
end.textContent = "Стоп"
end.style.fontSize = "25px"


divs.append(hours)
divs.append(minutes)
divs.append(seconds)
divs.append(start)
divs.append(end)

document.body.prepend(divs)

function timeN() {

    let todays = new Date()

    let hoursNumbers = todays.getHours()
    let minutesNumbers = todays.getMinutes()
    let secondsNumbers = todays.getSeconds()

    if (hoursNumbers < 10) {
      hours.textContent = `0${hoursNumbers}:`
    }
    else {
      hours.textContent = `${hoursNumbers}:`
    }

    if (minutesNumbers < 10) {
      minutes.textContent = `0${minutesNumbers}:`
    }
    else {
      minutes.textContent = `${minutesNumbers}:`
    }

    if (secondsNumbers < 10) {
      seconds.textContent = `0${secondsNumbers}`
    }
    else {
      seconds.textContent = `${secondsNumbers}`
    }

}
timeN()

let timeStop

start.addEventListener("click", function(event) {
  timeStop = setInterval(() => {
    timeN()
  }, 1000);
  timeN()
})

end.addEventListener("click", function(event) {
  clearInterval(timeStop)
})



// 10) Вставьте HTML в список
let div = document.createElement("div")
document.body.prepend(div)
let ul = document.createElement("ul")
ul.id = "ul"

let li = document.createElement("li")
li.id = "one"
li.textContent = "1"
ul.append(li)

li = document.createElement("li")
li.id = "four"
li.textContent = "4"
ul.append(li)
div.append(ul)

// вставляем два ли между 1 и 4
one.insertAdjacentHTML(`afterend`, "<li> 2 </li> <li> 3 </li>" )
div.innerHTML



// 11) Сортировка таблицы

function tableName(elem) {
  let arr = elem.querySelectorAll("tr")
  let newArr = []

  table.rows[0].cells[0].flag = false
  table.rows[0].cells[1].flag = false
  table.rows[0].cells[2].flag = false
  console.log(table.rows[0].cells[0].flag)

  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[i]
  }
  newArr.splice(0, 1)

  elem.addEventListener("click", function clickMen (event) {
    if (event.target.nodeName == 'TH') {
      
      let stolbTH = event.target.cellIndex
      console.log(stolbTH)

      console.log(event.target.flag)
  
      function compareNumeric(a, b) {

        // условие, при котором в зависимости от чётности будет условие, в котором b & a и a & b
        if (isNaN(a.children[stolbTH].innerText) && isNaN(b.children[stolbTH].innerText)) {

          if (a.children[stolbTH].innerText > b.children[stolbTH].innerText) { 
            if (event.target.flag == false) {
              return 1
              // возрастание
            }
            else {
              return -1
              // убывание
            }
          }
          else {
            if (event.target.flag == false) {
              return -1
              // возрастание
            }
            else {
              return 1
              // убывание
            }
          }

        }
        else {
          if (event.target.flag == false) {
            return a.children[stolbTH].innerText - b.children[stolbTH].innerText
          // строка "1"-"1" = число 0
          }
          else {
            return b.children[stolbTH].innerText - a.children[stolbTH].innerText
          // строка "1"-"1" = число 0
          }
        }
      }
      newArr.sort(compareNumeric)

      // переопределение флага
      if (event.target.flag == false) {
        event.target.flag = true
      }
      else {
        event.target.flag = false
      }

      for (let i = 0; i < newArr.length; i++) {
        table.append(newArr[i])
      } 
    }
  })
  return newArr
}
tableName(table)


// 12) Напишите функцию showNotification(options), которая создаёт уведомление: <div class="notification"> с заданным содержимым. Уведомление должно автоматически исчезнуть через 1,5 секунды.

function showNotification () {
  let div = document.createElement("div") 
  div.style.left = "10px"
  div.style.right = "10px"
  div.textContent = "Hello"
  div.className = "welcome"
  document.body.prepend(div)
  div.hidden = true

  setInterval(() => {
    if (div.hidden == true) {
      div.hidden = false
    }
    else {
      div.hidden = true
    }
  }, 1500);

}
showNotification ()