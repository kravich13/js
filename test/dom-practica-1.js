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

let div = document.createElement("div")
document.body.prepend(div)

function createCalendar(elem, year, month) {
  let table = document.createElement("table")
  let tr = document.createElement("tr")
  let td = document.createElement("td")

  // table.rows[0].cells[0].textContent = "Пн"
  // table.rows[0].cells[0].textContent = "Вт"
  // table.rows[0].cells[0].textContent = "Ср"
  // table.rows[0].cells[0].textContent = "Чт"
  // table.rows[0].cells[0].textContent = "Пт"
  // table.rows[0].cells[0].textContent = "Сб"
  // table.rows[0].cells[0].textContent = "Вс"
  for (let i = 0; i < 5; i++) {
    tr = document.createElement("tr")

    for (let j = 0; j < 6; i++) {
      td = document.createElement("td")

      if (i <= 1) {
        if (j <= 6) {
          td.textContent = "1"
        }
      }
      else {
        td.textContent = "2"
        tr.append(td)
      }
    }
    table.append(tr)
  }

  return elem.append(table)
}
createCalendar(div, 2031, 9)


// 9) Цветные часы с использованием setInterval


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


