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


// let table = document.createElement("table")
// table.style.margin = "20px"
// table.style.borderCollapse = "collapse"
// document.body.prepend(table)

// function createCalendar(elem, year, month) {
//   let tr = document.createElement("tr")
//   let th = document.createElement("th")
//   let td = document.createElement("td")
  
//   let month12 = 1

//   let data = new Date(year, month-1)
//   let dayWeek = data.getDay()
//   let days = data.getDate()
  
//   let trNumber = 0

//   let dataFiveNumb = new Date(year, month-1)
//   dataFiveNumb.setDate(dataFiveNumb.getDate() + 28)

//   let dataFiveSeven = new Date(year, month-1)
//   dataFiveSeven.setDate(dataFiveSeven.getDate() + 32)

//   if (dayWeek == 0) {
//     trNumber = 7
//   } 
//   else {
//     if (dayWeek == 1) {
//         if (dataFiveNumb.getMonth() == 2) {
//             console.log("тут")
//             trNumber = 5
//         }
//         else {
//             trNumber = 6
//         }
//     }
//     else {
//         if (dayWeek == 6) {
//             if (dataFiveSeven.getMonth() == 0) {
//                 trNumber = 7
//             }
//             else {
//                 trNumber = 6
//             }
//         }
//         else {
//             trNumber = 6
//         }
//     }
//   }

//   for (let i = 0; i < trNumber; i++) {
//     tr = document.createElement("tr")

//     for (let j = 0; j < 7; j++) {

//       if (i < 1) {
//         th = document.createElement("th")
//         th.textContent = "s"  
//         th.style.border = "1px solid black"
//         th.style.padding = "5px"
//         th.style.fontSize = "21px"
//         th.style.textAlign = "center"
//         tr.append(th)
//       } 
//       else {
//         td = document.createElement("td")
//         td.style.border = "1px solid black"
//         td.style.padding = "5px"
//         td.style.fontSize = "21px"
//         td.style.textAlign = "center"
//         td.textContent = ""

//         if (dayWeek == 1) { // пн ++++++++++++++++
//             if (month == 12) {
//                 month12 = 0
//                 if (data.getMonth() == month12) {
//                     td.textContent = ""
//                 } 
//                 else {
//                     td.textContent = data.getDate()
//                     data.setDate(data.getDate() + 1)
//                 }
//             }
//             else {
//                 if (data.getMonth() == month) {
//                     td.textContent = ""
//                 } 
//                 else {
//                     td.textContent = data.getDate()
//                     data.setDate(data.getDate() + 1)
//                 }
//             }
//         }

//         if (dayWeek == 2) { // вт ++++++++++++++++++++++++
//             if (i == 1) {
//                 if (j > 0) { // больше пн (вт)
//                     td.textContent = data.getDate()
//                     data.setDate(data.getDate() + 1)
//                 }
//             } 
//             else {
//                 if (month == 12) {
//                     month12 = 0
//                     if (data.getMonth() == month12) {
//                         td.textContent = ""
//                     } 
//                     else {
//                         td.textContent = data.getDate()
//                         data.setDate(data.getDate() + 1)
//                     }
//                 }
//                 else {
//                     if (data.getMonth() == month) {
//                         td.textContent = ""
//                     } 
//                     else {
//                         td.textContent = data.getDate()
//                         data.setDate(data.getDate() + 1)
//                     }
//                 }
//             }
//         }

//         if (dayWeek == 3) { // ср

//             if (i == 1) {
//                 if (j > 1) { // больше вт (ср)
//                     td.textContent = data.getDate()
//                     data.setDate(data.getDate() + 1)
//                 }
//             } 
//             else {
//                 if (month == 12) {
//                     month12 = 0
//                     if (data.getMonth() == month12) {
//                         td.textContent = ""
//                     } 
//                     else {
//                         td.textContent = data.getDate()
//                         data.setDate(data.getDate() + 1)
//                     }
//                 }
//                 else {
//                     if (data.getMonth() == month) {
//                         td.textContent = ""
//                     } 
//                     else {
//                         td.textContent = data.getDate()
//                         data.setDate(data.getDate() + 1)
//                     }
//                 }
//             }
//         }

//         if (dayWeek == 4) { // чт
//             if (i == 1) {
//                 if (j > 2) { // больше ср (чт)
//                     td.textContent = data.getDate()
//                     data.setDate(data.getDate() + 1)
//                 }
//             } 
//             else {
//                 if (month == 12) {
//                     month12 = 0
//                     if (data.getMonth() == month12) {
//                         td.textContent = ""
//                     } 
//                     else {
//                         td.textContent = data.getDate()
//                         data.setDate(data.getDate() + 1)
//                     }
//                 }
//                 else {
//                     if (data.getMonth() == month) {
//                         td.textContent = ""
//                     } 
//                     else {
//                         td.textContent = data.getDate()
//                         data.setDate(data.getDate() + 1)
//                     }
//                 }
//             }
//         }

//         if (dayWeek == 5) { // пт ++++++
//             if (i == 1) {
//                 if (j > 3) { // больше чт (пт)
//                     td.textContent = data.getDate()
//                     data.setDate(data.getDate() + 1)
//                 }
//             } 
//             else {
//                 if (month == 12) {
//                     month12 = 0
//                     if (data.getMonth() == month12) {
//                         td.textContent = ""
//                     } 
//                     else {
//                         td.textContent = data.getDate()
//                         data.setDate(data.getDate() + 1)
//                     }
//                 }
//                 else {
//                     if (data.getMonth() == month) {
//                         td.textContent = ""
//                     } 
//                     else {
//                         td.textContent = data.getDate()
//                         data.setDate(data.getDate() + 1)
//                     }
//                 }
//             }
//         }

//         if (dayWeek == 6) { // сб
//             if (i == 1) {
//                 if (j > 4) { // больше пт (сб)
//                     td.textContent = data.getDate()
//                     data.setDate(data.getDate() + 1)
//                 }
//             } 
//             else {
//                 if (month == 12) {
//                     month12 = 0
//                     if (data.getMonth() == month12) {
//                         td.textContent = ""
//                     } 
//                     else {
//                         td.textContent = data.getDate()
//                         data.setDate(data.getDate() + 1)
//                     }
//                 }
//                 else {
//                     if (data.getMonth() == month) {
//                         td.textContent = ""
//                     } 
//                     else {
//                         td.textContent = data.getDate()
//                         data.setDate(data.getDate() + 1)
//                     }
//                 }
//             }
//         }

//         if (dayWeek == 0) { // вс
//             if (i == 1) {
//                 if (j > 5) { // равно вс
//                     td.textContent = data.getDate()
//                     data.setDate(data.getDate() + 1)
//                 }
//             } 
//             else {
//                 if (month == 12) {
//                     month12 = 0
//                     if (data.getMonth() == month12) {
//                         td.textContent = ""
//                     } 
//                     else {
//                         td.textContent = data.getDate()
//                         data.setDate(data.getDate() + 1)
//                     }
//                 }
//                 else {
//                     if (data.getMonth() == month) {
//                         td.textContent = ""
//                     } 
//                     else {
//                         td.textContent = data.getDate()
//                         data.setDate(data.getDate() + 1)
//                     }
//                 }
//             }
//         }
//         tr.append(td)
//       }
//     }
//     elem.append(tr)
//   }

//   elem.rows[0].cells[0].textContent = "Пн"
//   elem.rows[0].cells[1].textContent = "Вт"
//   elem.rows[0].cells[2].textContent = "Ср"
//   elem.rows[0].cells[3].textContent = "Чт"
//   elem.rows[0].cells[4].textContent = "Пт"
//   elem.rows[0].cells[5].textContent = "Сб"
//   elem.rows[0].cells[6].textContent = "Вс"

// }   
// createCalendar(table, 1997, 12)