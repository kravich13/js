let coins = {
    dollar: 20000000
}

function start () {
    let startK = document.getElementById("start") // кнопка входа в игру
    let endK = document.getElementById("end") // кнопка выхода из игры, если ставка не начата

    let stavki = document.getElementById("ruletka") // сама таблица со ставками

    let gold = {
        TD: ""
    } // объект для хранения ячейки, над которой будут производиться манипуляции
    console.log(gold.TD)
    startK.addEventListener("click", function(event) {
        if (event.target.nodeName == 'INPUT') {
            if (coins.dollar < 10000) {
                console.log("У тебя недостаточно средств для игры")
                return
            }
            
            stavki.addEventListener("mouseover", function(event) {
                if (event.target.nodeName == "TD" || event.target.nodeName == 'P') {
                    if (event.target.style.backgroundColor == "rgb(170, 167, 0);") {
                        event.target.style.backgroundColor == "rgb(170, 167, 0);"
                    }
                    else {
                        event.target.style.backgroundColor = "rgba(6, 113, 201, 0.651)"
                    }
                }
            })

            stavki.addEventListener("mousedown", function(event) {
                event.target.addEventListener("mouseup", function(event) {
                    if (event.target.nodeName == "TD" || event.target.nodeName == 'P') {
                        gold.TD = event.target
                        if (gold.TD.style.backgroundColor == "rgb(170, 167, 0);") {
                            gold.TD.style.backgroundColor = "red"
                            console.log("тут")
                        }
                        else {
                            event.target.style.backgroundColor = "rgb(170, 167, 0);"
                            console.log(gold.TD)
                        }
                    }
                })
            })

            stavki.addEventListener("mouseout", function(event) {
                if (event.target.nodeName == 'TD' || event.target.nodeName == 'P') {
                    if (event.target.style.backgroundColor == "rgb(170, 167, 0);") {
                        event.target.style.backgroundColor == "rgb(170, 167, 0);"
                    }
                    else {
                        event.target.style.backgroundColor = ""
                    }
                }
            })

        }

        endK.addEventListener("click", function(event) {
            if (event.target.nodeName == 'INPUT') {
                console.log("выход")
                return 
            }
        })
    }) 
}
start()