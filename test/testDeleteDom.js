let data = {
    "Рыбы": { // ul = li

        "форель": {}, // ul = li
        "лосось": {} // 2
    },

    "Деревья": { // 1

        "Огромные": { // 2

            "секвойя": {}, // ul = li
            "дуб": {} // 3 
        },

        "Цветковые": { // 2

            "яблоня": {}, // 3
            "магнолия": {} // 3
        }
    }
};

{/* <ul> ul = li
    <li>Рыбы 
        li = ul
        <ul>
            <li>форель</li>
            <li>лосось</li>
        </ul>
    </li>
</ul>  */}

let div = document.createElement("div")

document.body.prepend(div)

function createTree(container, obj) {
    let ul = document.createElement("ul")
    let li = document.createElement("li")

    for (let key in obj) {
        li = document.createElement("li")
        li.textContent = key
        if (Object.keys(key).length > 0) {
            createTree(container, obj[key])
        }
        else {
            ul = document.createElement("ul")
        }

        ul.append(li)
    }
    container.append(ul)

    return container.innerHTML
}
createTree(div, data)

function createTree(obj) {
    let newObj = obj
    let div = document.createElement("div")
    div.textContent = "Список:"
    div.style.fontSize = "18px"
    let ul = document.createElement("ul") // 1
    div.append(ul)
    let li = document.createElement("li")

    div.style.margin = "10px"
    ul.style.marginLeft = "10px"

    for (let key in newObj) {
        li = document.createElement("li")
        li.textContent = key
        ul.append(li)

        for (let key in newObj.key) {
            console.log("тут")
            ul = document.createElement("ul")
            li = document.createElement("li")
            li.textContent = key
            ul.append(li)
        }
    }
    document.body.prepend(div)
    return div.innerHTML
}
createTree(data)

// let div = document.createElement("div")
// document.body.prepend(div)

// function createCalendar(elem, year, month) {
//     let table = document.createElement("table")
//     let tr = document.createElement("tr")
//     let td = document.createElement("td")

//     for (let i = 0; i < 5; i++) {
//         tr = document.createElement("tr")
//         if (i == 0) {
//             tr.style.fontWeight = 600
//             tr.style.backgroundColor = "grey"
//         }
//         for (let j = 0; j < 7; j++) {
//             td = document.createElement("td")
//             td.style.border = "1px solid black"
//             td.style.textAlign = "center"
//             td.style.padding = "7px"
//             td.style.fontSize = "17px"
//             td.textContent = "hello"
//             tr.append(td)
//         }
//         table.append(tr)
//     }
//       table.rows[0].cells[0].textContent = "Пн"
//       table.rows[0].cells[1].textContent = "Вт"
//       table.rows[0].cells[2].textContent = "Ср"
//       table.rows[0].cells[3].textContent = "Чт"
//       table.rows[0].cells[4].textContent = "Пт"
//       table.rows[0].cells[5].textContent = "Сб"
//       table.rows[0].cells[6].textContent = "Вс"

//     return elem.append(table)
// }
// createCalendar(div, 2031, 9)