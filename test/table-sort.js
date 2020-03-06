let table = document.createElement("table")
document.body.prepend(table)
let tr = document.createElement("tr")
let th = document.createElement("th")
let td = document.createElement("td")

for (let i = 0; i < 5; i++) {
  tr = document.createElement("tr")

  for (let j = 0; j < 3; j++) {
    if (i == 0) {
      th = document.createElement("th")
      th.textContent = "1"
      th.style.fontSize = "19px"
      th.style.textAlign = "center"
      th.style.padding = "5px"
      tr.append(th)
    }
    else {
      td = document.createElement("td")
      td.textContent = "2"
      td.style.fontSize = "19px"
      td.style.textAlign = "center"
      td.style.padding = "5px"
      tr.append(td)
    }
  }
  table.append(tr)
}
table.rows[0].cells[0].textContent = "Имя"
table.rows[0].cells[1].textContent = "Фамилия"
table.rows[0].cells[2].textContent = "Возраст"
table.rows[1].cells[0].textContent = "John"
table.rows[1].cells[1].textContent = "Smith"
table.rows[1].cells[2].textContent = "10"
table.rows[2].cells[0].textContent = "Pete"
table.rows[2].cells[1].textContent = "Brown"
table.rows[2].cells[2].textContent = "15"
table.rows[3].cells[0].textContent = "Ann"
table.rows[3].cells[1].textContent = "Lee"
table.rows[3].cells[2].textContent = "5"
table.rows[4].cells[0].textContent = "Vlad"
table.rows[4].cells[1].textContent = "Kravich"
table.rows[4].cells[2].textContent = "22"


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