let table = document.createElement("table")
document.body.prepend(table)
let tr = document.createElement("tr")
let th = document.createElement("th")
let td = document.createElement("td")

for (let i = 0; i < 4; i++) {
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


function tableName(elem) {
  let arr = elem.querySelectorAll("tr")
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[i]
  }
  newArr.splice(0, 1)

  elem.addEventListener("click", function (event) {
    if (event.target.nodeName == 'TH') {
      let stolbTH = event.target.cellIndex
      console.log(stolbTH)

      function compareNumeric(a, b) {
        if (a.children[stolbTH].innerText > b.children[stolbTH].innerText) {
          return 1
        }
        if (a.children[stolbTH].innerText == b.children[stolbTH].innerText) {
          return 0
        }
        if (a.children[stolbTH].innerText < b.children[stolbTH].innerText) {
          return -1
        }
      }
      newArr.sort(compareNumeric)
      table.rows[1].parentNode.insertBefore(newArr[0],newArr[1]);
      

      // console.log(newArr[0].children[stolbTH].innerText)
    }
  })
  return newArr
}
tableName(table)