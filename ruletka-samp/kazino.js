let coins = {
    dollar: 200000
}

function start () {
    let startK = document.getElementById("start") // кнопка входа в игру
    let endK = document.getElementById("end") // кнопка выхода из игры, если ставка не начата

    let stavki = document.getElementById("ruletka") // сама таблица со ставками

    let gold = {
        td: ruletka.rows[1].cells[1]
    } // объект для хранения ячейки, над которой будут производиться манипуляции
    // console.log(gold.TD)

    let result = false
    
    startK.addEventListener("click", function one (event) {
        if (event.target.nodeName == 'INPUT') {
            if (coins.dollar < 10000) {
                console.log("У тебя недостаточно средств для игры")
                return
            }
            
            stavki.addEventListener("mouseover", function two (event) {
                if (event.target.nodeName == "TD" || event.target.nodeName == 'P') {
                    if (event.target.style.backgroundColor == "rgb(170, 167, 0)") {
                        event.target.style.backgroundColor == "rgb(170, 167, 0)"
                    }
                    else {
                        event.target.style.backgroundColor = "rgba(6, 113, 201, 0.651)"
                    }
                }
            })

            stavki.addEventListener("mouseout", function three (event) {
                if (event.target.nodeName == 'TD' || event.target.nodeName == 'P') {
                    if (event.target.style.backgroundColor == "rgb(170, 167, 0)") {
                        event.target.style.backgroundColor == "rgb(170, 167, 0)"
                    }
                    else {
                        event.target.style.backgroundColor = ""
                    }
                }
            })
            stavki.addEventListener("click", function four (event) {
                if (event.target.nodeName == "TD" || event.target.nodeName == 'P') {

                    if (gold.td.style.backgroundColor == "rgb(170, 167, 0)") {
                        gold.td.style.backgroundColor = ""
                        // event.target.style.backgroundColor = "rgb(170, 167, 0)" 
                        // console.log(event.target)
                        // console.log(gold.td.style.backgroundColor)
                    }
                    else {
                        event.target.style.backgroundColor = "rgb(170, 167, 0)"
                        gold.td = event.target
                        // console.log(event.target)
                        // console.log(gold.td.style.backgroundColor)
                    }
                    // т.е. если я нажал на новую ячейку и прошлая ячейка (объект) была золотой, то красим в золотой яейку, на которой таргет и красим прошлую яейку (объект) в обычный цвет
                }   
            })
        }
    })
    endK.addEventListener("click", function(event) {    
        if (event.target.nodeName == 'INPUT') {
            
        }
    })
}
start()