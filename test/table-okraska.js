// Сделать таблицу умножения, используя DOM createElement и innerHTML. Создайте таблицу, вложенные строки и ячейки в циклах.

// Подсветить ячейку над которой находится курсор мыши. Используйте события mouseover и mouseout, и style.backgroundColor

// Подсветить строку и столбец, в которой находится подсвеченная ячейка. Используйте parentElement (родительский элемент элемента DOM), и список его детей: childNodes.



function table (x) {
    // объявляем переменные с тегами
    let table = document.createElement("table")
    let tr = document.createElement("tr")
    let td = document.createElement("td")
    let globalInCell = {}

    for (let i = 0; i < x; i++) {
        tr = document.createElement("tr")
        tr.style.textAlign = "center"
        table.append(tr)
        for (let j = 0; j < x; j++) {
            td = document.createElement("td")
            td.textContent = (i + 1) * (j + 1)
            td.style.border = "1px solid rgb(163, 163, 163)"
            td.style.fontFamily = "Helvetica Neue"
            td.style.fontSize = "25px"
            td.style.padding = "7px"
            if (i % 2 == 0) {
                td.style.backgroundColor = "rgb(255, 255, 255)"
                tr.append(td)
            }
            else {
                td.style.backgroundColor = "rgb(233, 233, 233)"
                tr.append(td)
            }
        }
    }

    table.addEventListener("mouseover", function (event) {
        if (event.target.nodeName == 'TD') {
            event.target.style.color = "rgb(255, 255, 255)" 


            // ПОДСВЕТКА СТРОКИ //

            let strTD = event.target.parentElement.rowIndex
            for (let i = 0; i < x; i++) {
                if (table.rows[strTD].cells[i].style.backgroundColor == "rgb(206, 46, 46)") {
                    table.rows[strTD].cells[i].style.backgroundColor = "rgb(206, 46, 46)"
                }
                else {
                    if (table.rows[strTD].cells[i].style.backgroundColor == "rgb(255, 255, 255)") {
                        table.rows[strTD].cells[i].style.backgroundColor = "rgb(133, 197, 37)"
                    }
                    else {
                        if (table.rows[strTD].cells[i].style.backgroundColor = "rgb(233, 233, 233)") {
                            table.rows[strTD].cells[i].style.backgroundColor = "rgb(133, 197, 37)"
                        }
                    }
                }
            }


            // ПОДСВЕТКА СТОЛБА // 

            let stolbTD = event.target.cellIndex 
            for (i = 0; i < x; i++) {
                if (table.rows[i].cells[stolbTD].style.backgroundColor == "rgb(206, 46, 46)") {
                    table.rows[i].cells[stolbTD].style.backgroundColor = "rgb(206, 46, 46)"
                }
                else {
                    if (table.rows[i].cells[stolbTD].style.backgroundColor == "rgb(255, 255, 255)") {
                        table.rows[i].cells[stolbTD].style.backgroundColor = "rgb(133, 197, 37)"
                    }
                    else {
                        if (table.rows[i].cells[stolbTD].style.backgroundColor == "rgb(233, 233, 233)") {
                            table.rows[i].cells[stolbTD].style.backgroundColor = "rgb(133, 197, 37)"
                        }
                    }
                }
            }


            // ПОДСВЕТКА ЯЧЕЙКИ //

            if (event.target.style.backgroundColor == "rgb(255, 255, 255)") {
                let whiteTD = event.target
                globalInCell.cellWhite = whiteTD
                event.target.style.backgroundColor = "rgb(94, 94, 94)"
            }
            else {    
                if (event.target.style.backgroundColor == "rgb(206, 46, 46)") {
                    let redTD = event.target
                    globalInCell.cellRed = redTD
                    event.target.style.backgroundColor = "rgb(94, 94, 94)"
                }
                else {
                    if (event.target.style.backgroundColor == "rgb(233, 233, 233)") {
                        let greyTD = event.target
                        globalInCell.cellGrey = greyTD
                        event.target.style.backgroundColor = "rgb(94, 94, 94)"
                    }
                    else {
                        if (event.target.style.backgroundColor == "rgb(133, 197, 37)") {
                            event.target.style.backgroundColor = "rgb(94, 94, 94)"
                        }
                    }
                }
            }
        }
    })

    table.addEventListener("mouseout", function (event) {
        if (event.target.nodeName == 'TD') {
            event.target.style.color = ""


            // ДЛЯ ОДНОЙ СТРОКИ

            let strTD = event.target.parentElement.rowIndex
            for (let i = 0; i < x; i++) {
                if (strTD % 2 == 0) {
                   if (table.rows[strTD].cells[i].style.backgroundColor == "rgb(206, 46, 46)") {
                       table.rows[strTD].cells[i].style.backgroundColor = "rgb(206, 46, 46)"
                   } 
                   else {
                    table.rows[strTD].cells[i].style.backgroundColor = "rgb(255, 255, 255)"
                   }
                }
                else {
                    if (table.rows[strTD].cells[i].style.backgroundColor == "rgb(206, 46, 46)") {
                        table.rows[strTD].cells[i].style.backgroundColor = "rgb(206, 46, 46)"
                    } 
                    else {
                     table.rows[strTD].cells[i].style.backgroundColor = "rgb(233, 233, 233)"
                    }
                }
            }

            // ДЛЯ ОДНОГО СТОЛБА //

            let stolbTD = event.target.cellIndex 
            for (i = 0; i < x; i++) {
                if (i % 2 == 0) {
                    if (table.rows[i].cells[stolbTD].style.backgroundColor == "rgb(206, 46, 46)") {
                        table.rows[i].cells[stolbTD].style.backgroundColor = "rgb(206, 46, 46)"
                    } 
                    else {
                        table.rows[i].cells[stolbTD].style.backgroundColor = "rgb(255, 255, 255)"
                    }
                }
                else {
                    if (table.rows[i].cells[stolbTD].style.backgroundColor == "rgb(206, 46, 46)") {
                        table.rows[i].cells[stolbTD].style.backgroundColor = "rgb(206, 46, 46)"
                    } 
                    else {
                        table.rows[i].cells[stolbTD].style.backgroundColor = "rgb(233, 233, 233)"
                    }
                }
            }


            // ДЛЯ ОДНОЙ ЯЧЕЙКИ // 

            for (let key in globalInCell) {
                if (key == "cellWhite") {
                    globalInCell[key].style.backgroundColor = "rgb(255, 255, 255)"
                }
                else {
                    if (key == "cellGrey") {
                        globalInCell[key].style.backgroundColor = "rgb(233, 233, 233)"
                    }
                    else {
                        if (key == "cellRed") {
                            globalInCell[key].style.backgroundColor = "rgb(206, 46, 46)"
                        }
                    }
                }
            }
        }
    })

    table.style.margin = "10px"
    table.style.borderSpacing = "1px"

    table.addEventListener("dblclick", function (event) {
        if (event.target.nodeName == 'TD') {
            let input = document.createElement("input")
            input.type = "text"
            input.name = "dblclick"
            input.style.width = "70px"
            input.style.height = "25px"
            let tD = event.target
            let numberInTD = event.target.textContent // хранится первоначальное число в ячейке
            event.target.textContent = "" // удаляем текущее значение ячейки
            input.value = numberInTD // текст по умолчанию в инпуте
            event.target.prepend(input) 
            input.focus()   // фокус 
            input.select() // выделенный текст

            input.addEventListener("keydown", function(event) {
                if (event.code == 'Escape') {
                    tD.textContent = numberInTD // в ячейку td записываем первоначальное число, которое было сохранено в переменную (textcontent)
                }
                if (event.code == "Enter") {
                    if (event.target.value != numberInTD) {
                        tD.textContent = event.target.value
                        tD.style.backgroundColor = "rgb(206, 46, 46)" 
                    }
                    else {
                        tD.textContent = event.target.value
                    }
                }
            })
            input.addEventListener("blur", function(event) {
                if (event.target.value == numberInTD) {
                    tD.textContent = numberInTD
                }
            })
        }
    })  

    return document.body.prepend(table)
}
table(10)





