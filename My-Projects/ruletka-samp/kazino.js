let coins = {
    dollar: 1000000
}


// let rulsNumb = [2,25,17,34,6,27,13,36,11,30,8,32,10,5,24,16,33,1,20,14,31,9,22,18,29,7,28,12,35,3,26,0,32,15,19,4,21]

// function ruls (arr) {
// for (let i = 0; i < rulsNumb.length; i++) {
//         console.log(arr[i])
//     }
//     setTimeout(ruls, 1000, rulsNumb)
// }   



function start () {
    let flag = false // флаг для начала/конца игры

    let startK = document.getElementById("start") // кнопка входа в игру
    let round = document.getElementById("round") // кнопка начала игры
    let endK = document.getElementById("end") // кнопка выхода из игры, если ставка не начата
    let stavki = document.getElementById("ruletka") // сама таблица со ставками
    let off = document.getElementsByClassName("off") // здесь ивент не нужен

    let faik = document.getElementById("faik") // фейк инпут
    let inputNumber = document.getElementById("numbers") // инпут с вводом ставки
    let Ale = document.getElementById("Alert") // поле с ошибками
    let vipavsheeChislo = document.getElementById("ZER") // верхнее поле с числом

    let Gam = document.getElementById("gam")
    let Chi = document.getElementById("Chis")  
    let Vic = document.getElementById("victory")  
    let Los = document.getElementById("loss")  
    let OfM = document.getElementById("offMon")  

    Gam.hidden = true // убираем все сообщения вместе с полем
    Chi.hidden = true
    Vic.hidden = true
    Los.hidden = true
    OfM.hidden = true

    Ale.hidden = true // убираем поле с ошибками
    inputNumber.hidden = true // убираем инпут
    vipavsheeChislo.hidden = true // убираем число, если играем первый раз

    let gold = {
        td: ruletka.rows[1].cells[1]
    } // объект для хранения ячейки, над которой будут производиться манипуляции

    let redTD = document.getElementsByClassName("red")  // хранятся красные числа
    let blackTD = document.getElementsByClassName("black") // хранятся черные числа
    let chisla = document.getElementsByClassName("chisla") // хранятся все числа рулетки


    let listener = function glavniiObrabotchik (event) {
        if (coins.dollar < 10000) {
            Ale.hidden = false
            Ale.innerText = "У вас недостаточно средств для игры"
            console.log("У тебя недостаточно средств для игры")
            return
        }

        flag = true
        faik.hidden = true
        inputNumber.hidden = false
        inputNumber.value = "10000"
        inputNumber.focus() // фокус
        inputNumber.select() // выделение текста
    }
    startK.addEventListener("click", listener)

    round.addEventListener("click", startGames)
    stavki.addEventListener("mouseover", podsvetkaTrue)
    stavki.addEventListener("mouseout", podsvetkaFalse)
    stavki.addEventListener("click", okraskaStavki)

    // function ble (event) {
    //     event.target.backgroundColor = "red"
    // }

    function podsvetkaTrue(event) {
        if (flag == true) {
            if (event.target.nodeName == 'TD' || event.target.nodeName == 'P') {
                
                if (event.target.style.backgroundColor == "rgb(170, 167, 0)") {
                    event.target.style.backgroundColor == "rgb(170, 167, 0)"
                }
                else {
                    if (event.target == off[0] || event.target == off[1]) {
                        event.target.style.backgroundColor = ""
                    }
                    else {
                        if (event.target.nodeName == 'P') {
                            if (isNaN(event.target.children[0])) {
                                event.target.style.backgroundColor = "rgba(6, 113, 201, 0.651)"
                            }
                        }
                        else {
                            if (event.target.children.length == 1) {
                                if (event.target.children[0].style.backgroundColor == "rgb(170, 167, 0)") {
                                    event.target.children[0].style.backgroundColor = "rgb(170, 167, 0)"
                                }
                                else {
                                    event.target.children[0].style.backgroundColor = "rgba(6, 113, 201, 0.651)"
                                }
                            }
                            else {
                                event.target.style.backgroundColor = "rgba(6, 113, 201, 0.651)"
                            }
                        }
                    }
                }
            }
        }
    }

    function podsvetkaFalse(event) {
        if (flag == true) {
            if (event.target.nodeName == 'TD' || event.target.nodeName == 'P') {
                if (event.target.style.backgroundColor == "rgb(170, 167, 0)") {
                    event.target.style.backgroundColor == "rgb(170, 167, 0)"
                } 
                else {
                    if (event.target.nodeName == 'P') {
                        if (isNaN(event.target.children[0])) {
                            event.target.style.backgroundColor = ""

                        }
                    }
                    else {
                        if (event.target.children.length == 1) {
                            if (event.target.children[0].style.backgroundColor == "rgb(170, 167, 0)") {
                                event.target.children[0].style.backgroundColor = "rgb(170, 167, 0)"
                            }
                            else {
                                event.target.children[0].style.backgroundColor = ""
                            }
                        }
                        else {
                            event.target.style.backgroundColor = ""
                        }
                    }
                }
            }
        }
    }

    function okraskaStavki(event) {
        if (flag == true) {
            if (event.target.nodeName == "TD" || event.target.nodeName == 'P') {

                if (gold.td.style.backgroundColor == "rgb(170, 167, 0)") {
                    gold.td.style.backgroundColor = ""
                    // event.target.style.backgroundColor = "rgb(170, 167, 0)" 
                    // console.log(event.target)
                    // console.log(gold.td.style.backgroundColor)
                } 
                else {
                    if (event.target == off[0] || event.target == off[1]) {
                        event.target.style.backgroundColor = ""
                    }
                    else {
                        if (event.target.nodeName == 'P') {
                            if (isNaN(event.target.children[0])) {
                                event.target.style.backgroundColor = "rgb(170, 167, 0)"
                                gold.td = event.target
                            }
                        }
                        else {
                            if (event.target.children.length == 1) {
                                event.target.children[0].style.backgroundColor = "rgb(170, 167, 0)"
                                gold.td = event.target.children[0]
                            }
                            else {
                                event.target.style.backgroundColor = "rgb(170, 167, 0)"
                                gold.td = event.target
                            }
                        }
                        // event.target.style.backgroundColor = "rgb(170, 167, 0)"
                        // gold.td = event.target
                    }
                    // console.log(event.target)
                    // console.log(gold.td.style.backgroundColor)
                }
                // т.е. если я нажал на новую ячейку и прошлая ячейка (объект) была золотой, то красим в золотой ячейку, на которой таргет и красим прошлую яейку (объект) в обычный цвет
            }
        }
    }

    function startGames (event) {
        if (flag == true) {

            let random // здесь хранится число рандома
            let flagGlobal = false
            let flagStartGames = false // флаг для проверки, пытаюсь ли я нажать во время игры кнопку "крутить" ещё раз

            random = Math.floor(Math.random() * 37) // один рандом на всех

            if (gold.td.style.backgroundColor == "rgb(170, 167, 0)") {
                inputNumber.textContent = inputNumber.value // запись числа в текстконтент

                // код, где спрашивается кол-во бабок и указывается минимальная и максимальная сумма
                if (coins.dollar < inputNumber.textContent ) {
                    Ale.hidden = false
                    Ale.innerText = "У вас недостаточно средств для игры"
                    console.log("У вас нет столько денег для игры")
                    return
                }
                else {
                    if (inputNumber.textContent < 10000) {
                        Ale.hidden = false
                        Ale.innerText = "Минимальная ставка 10 000$"
                        console.log("Минимальная ставка 10 000$")
                        inputNumber.focus()
                        inputNumber.select()
                    return
                    }
                    else {
                        if (inputNumber.textContent > 100000) {
                            Ale.hidden = false
                            Ale.innerText = "Максимальная ставка 100 000$"
                            console.log("Максимальная ставка 100 000$")
                            inputNumber.focus()
                            inputNumber.select()
                            return
                        }
                    }
                }
                
                // код с рандомом и привязкой тд к коду 
                if (gold.td.id === "RED") { // цвет ставки (т.е. поставил на красное)
                    flagStartGames = true
                    Ale.hidden = true
                    for (let i = 0; i < redTD.length; i++) {

                        if (random == redTD[i].textContent) {

                            // let rulsNumb = [2,25,17,34,6,27,13,36,11,30,8,32,10,5,24,16,33,1,20,14,31,9,22,18,29,7,28,12,35,3,26,0,32,15,19,4,21]
                            // function printNumbers() {
                            //     let timerId, i = 0

                            //     setTimeout(() => clearInterval(timerId), 10000)

                                
                            //     timerId = setInterval(() => {
                            //         console.log(rulsNumb[i++])

                            //         if (i === rulsNumb.length) {
                            //             i = 0
                            //         }
                                    

                            //     }, 100)
                            // }
                            // printNumbers()

                            coins.dollar -= inputNumber.textContent
                            document.getElementById("dollars").innerHTML = `${coins.dollar}$`
                            flagGlobal = true
                            flagStartGames = false
                            console.log("тут")
                            break
                        }
                    }
                    
                    if (flagGlobal == false) {
                        vipavsheeChislo.hidden = false
                        vipavsheeChislo.innerText = random

                        Gam.hidden = false
                        Chi.hidden = false
                        Vic.hidden = true
                        Chi.innerText = `Выпало число: ${random}`
                        coins.dollar -= inputNumber.textContent
                        document.getElementById("dollars").innerHTML = `${coins.dollar}$`

                        if (coins.dollar === 0) {
                            OfM.hidden = false
                            Vic.hidden = true
                            Los.hidden = true
                            OfM.innerText = "Вы проиграли все деньги!"
                            gold.td.style.backgroundColor = "" 
                            flagStartGames = false
                            console.log("Вы проиграли все деньги")
                        }
                        else {
                            Los.hidden = false
                            Los.innerText = "Вы ничего не выиграли!"
                            gold.td.style.backgroundColor = "" 
                            flagStartGames = false
                        }
                    }
                    else {
                        vipavsheeChislo.hidden = false
                        vipavsheeChislo.innerText = random
                        
                        Gam.hidden = false 
                        Los.hidden = true
                        Chi.hidden = false
                        Vic.hidden = false
                        Chi.innerText = `Выпало число: ${random}`
                        Vic.innerText = `Выигрыш: ${inputNumber.textContent * 2}$`
                        coins.dollar += inputNumber.textContent * 2
                        document.getElementById("dollars").innerHTML = `${coins.dollar}$`
                        flagGlobal = false
                        gold.td.style.backgroundColor = "" 
                    }
                }

                if (gold.td.id === "BLACK") { // цвет ставки (т.е. поставил на красное)

                    for (let i = 0; i < blackTD.length; i++) {

                        if (random == blackTD[i].textContent) {
                            coins.dollar -= inputNumber.textContent
                            document.getElementById("dollars").innerHTML = `${coins.dollar}$`
                            flagGlobal = true
                            flagStartGames = false
                            break
                        }
                    }
                    if (flagGlobal == false) {
                        vipavsheeChislo.hidden = false
                        vipavsheeChislo.innerText = random

                        Gam.hidden = false
                        Chi.hidden = false
                        Vic.hidden = true
                        Chi.innerText = `Выпало число: ${random}`
                        coins.dollar -= inputNumber.textContent
                        document.getElementById("dollars").innerHTML = `${coins.dollar}$`

                        if (coins.dollar === 0) {
                            OfM.hidden = false
                            Vic.hidden = true
                            Los.hidden = true
                            OfM.innerText = "Вы проиграли все деньги!"
                            gold.td.style.backgroundColor = "" 
                            flagStartGames = false
                            console.log("Вы проиграли все деньги")
                        }
                        else {
                            Los.hidden = false
                            Los.innerText = "Вы ничего не выиграли!"
                            gold.td.style.backgroundColor = "" 
                            flagStartGames = false
                        }
                    }
                    else {
                        vipavsheeChislo.hidden = false
                        vipavsheeChislo.innerText = random
                        
                        Gam.hidden = false 
                        Los.hidden = true
                        Chi.hidden = false
                        Vic.hidden = false
                        Chi.innerText = `Выпало число: ${random}`
                        Vic.innerText = `Выигрыш: ${inputNumber.textContent * 2}$`
                        coins.dollar += inputNumber.textContent * 2
                        document.getElementById("dollars").innerHTML = `${coins.dollar}$`
                        flagGlobal = false
                        gold.td.style.backgroundColor = "" 
                    }
                }

                if (gold.td.textContent === "1 st 12") {

                    for (let i = 0; i < chisla.length; i++) {
                        if (chisla[i].innerText >= 1 && chisla[i].innerText <= 12) {
                            // здесь хранятся все числа от 1 до 12     

                            if (random == chisla[i].innerText) {
                                coins.dollar -= inputNumber.textContent
                                document.getElementById("dollars").innerHTML = `${coins.dollar}$`
                                flagGlobal = true
                                flagStartGames = false
                                break
                            }
                        }
                    }
                    if (flagGlobal == false) {
                        vipavsheeChislo.hidden = false
                        vipavsheeChislo.innerText = random

                        Gam.hidden = false
                        Chi.hidden = false
                        Vic.hidden = true
                        Chi.innerText = `Выпало число: ${random}`
                        coins.dollar -= inputNumber.textContent
                        document.getElementById("dollars").innerHTML = `${coins.dollar}$`

                        if (coins.dollar === 0) {
                            OfM.hidden = false
                            Vic.hidden = true
                            Los.hidden = true
                            OfM.innerText = "Вы проиграли все деньги!"
                            gold.td.style.backgroundColor = "" 
                            flagStartGames = false
                            console.log("Вы проиграли все деньги")
                        }
                        else {
                            Los.hidden = false
                            Los.innerText = "Вы ничего не выиграли!"
                            gold.td.style.backgroundColor = "" 
                            flagStartGames = false
                        }
                    }
                    else {
                        vipavsheeChislo.hidden = false
                        vipavsheeChislo.innerText = random
                        
                        Gam.hidden = false 
                        Los.hidden = true
                        Chi.hidden = false
                        Vic.hidden = false
                        Chi.innerText = `Выпало число: ${random}`
                        Vic.innerText = `Выигрыш: ${inputNumber.textContent * 3}$`
                        coins.dollar += inputNumber.textContent * 3
                        document.getElementById("dollars").innerHTML = `${coins.dollar}$`
                        flagGlobal = false
                        gold.td.style.backgroundColor = "" 
                    }
                }

                if (gold.td.textContent === "2 nd 12") {

                    for (let i = 0; i < chisla.length; i++) {
                        if (chisla[i].innerText >= 13 && chisla[i].innerText <= 24) {

                            if (random == chisla[i].innerText) {
                                coins.dollar -= inputNumber.textContent
                                document.getElementById("dollars").innerHTML = `${coins.dollar}$`
                                flagGlobal = true
                                flagStartGames = false
                                break
                            }
                        }

                    }
                    if (flagGlobal == false) {
                        vipavsheeChislo.hidden = false
                        vipavsheeChislo.innerText = random

                        Gam.hidden = false
                        Chi.hidden = false
                        Vic.hidden = true
                        Chi.innerText = `Выпало число: ${random}`
                        coins.dollar -= inputNumber.textContent
                        document.getElementById("dollars").innerHTML = `${coins.dollar}$`

                        if (coins.dollar === 0) {
                            OfM.hidden = false
                            Vic.hidden = true
                            Los.hidden = true
                            OfM.innerText = "Вы проиграли все деньги!"
                            gold.td.style.backgroundColor = "" 
                            flagStartGames = false
                            console.log("Вы проиграли все деньги")
                        }
                        else {
                            Los.hidden = false
                            Los.innerText = "Вы ничего не выиграли!"
                            gold.td.style.backgroundColor = "" 
                            flagStartGames = false
                        }
                    }
                    else {
                        vipavsheeChislo.hidden = false
                        vipavsheeChislo.innerText = random
                        
                        Gam.hidden = false 
                        Los.hidden = true
                        Chi.hidden = false
                        Vic.hidden = false
                        Chi.innerText = `Выпало число: ${random}`
                        Vic.innerText = `Выигрыш: ${inputNumber.textContent * 3}$`
                        coins.dollar += inputNumber.textContent * 3
                        document.getElementById("dollars").innerHTML = `${coins.dollar}$`
                        flagGlobal = false
                        gold.td.style.backgroundColor = "" 
                    }
                }

                if (gold.td.textContent === "3 td 12") {

                    for (let i = 0; i < chisla.length; i++) {
                        if (chisla[i].innerText >= 25 && chisla[i].innerText <= 36) {

                            if (random == chisla[i].innerText) {
                                coins.dollar -= inputNumber.textContent
                                document.getElementById("dollars").innerHTML = `${coins.dollar}$`
                                flagGlobal = true
                                flagStartGames = false
                                break
                            }
                        }

                    }
                    if (flagGlobal == false) {
                        vipavsheeChislo.hidden = false
                        vipavsheeChislo.innerText = random

                        Gam.hidden = false
                        Chi.hidden = false
                        Vic.hidden = true
                        Chi.innerText = `Выпало число: ${random}`
                        coins.dollar -= inputNumber.textContent
                        document.getElementById("dollars").innerHTML = `${coins.dollar}$`

                        if (coins.dollar === 0) {
                            OfM.hidden = false
                            Vic.hidden = true
                            Los.hidden = true
                            OfM.innerText = "Вы проиграли все деньги!"
                            gold.td.style.backgroundColor = "" 
                            flagStartGames = false
                            console.log("Вы проиграли все деньги")
                        }
                        else {
                            Los.hidden = false
                            Los.innerText = "Вы ничего не выиграли!"
                            gold.td.style.backgroundColor = "" 
                            flagStartGames = false
                        }
                    }
                    else {
                        vipavsheeChislo.hidden = false
                        vipavsheeChislo.innerText = random
                        
                        Gam.hidden = false 
                        Los.hidden = true
                        Chi.hidden = false
                        Vic.hidden = false
                        Chi.innerText = `Выпало число: ${random}`
                        Vic.innerText = `Выигрыш: ${inputNumber.textContent * 3}$`
                        coins.dollar += inputNumber.textContent * 3
                        document.getElementById("dollars").innerHTML = `${coins.dollar}$`
                        flagGlobal = false
                        gold.td.style.backgroundColor = "" 
                    }
                }

                if (gold.td.textContent === "1 to 18") {

                    for (let i = 0; i < chisla.length; i++) {
                        if (chisla[i].innerText >= 1 && chisla[i].innerText <= 18) {

                            if (random == chisla[i].innerText) {
                                coins.dollar -= inputNumber.textContent
                                document.getElementById("dollars").innerHTML = `${coins.dollar}$`
                                flagGlobal = true
                                flagStartGames = false
                                break
                            }
                        }

                    }
                    if (flagGlobal == false) {
                        vipavsheeChislo.hidden = false
                        vipavsheeChislo.innerText = random

                        Gam.hidden = false
                        Chi.hidden = false
                        Vic.hidden = true
                        Chi.innerText = `Выпало число: ${random}`
                        coins.dollar -= inputNumber.textContent
                        document.getElementById("dollars").innerHTML = `${coins.dollar}$`

                        if (coins.dollar === 0) {
                            OfM.hidden = false
                            Vic.hidden = true
                            Los.hidden = true
                            OfM.innerText = "Вы проиграли все деньги!"
                            gold.td.style.backgroundColor = "" 
                            flagStartGames = false
                            console.log("Вы проиграли все деньги")
                        }
                        else {
                            Los.hidden = false
                            Los.innerText = "Вы ничего не выиграли!"
                            gold.td.style.backgroundColor = "" 
                            flagStartGames = false
                        }
                    }
                    else {
                        vipavsheeChislo.hidden = false
                        vipavsheeChislo.innerText = random
                        
                        Gam.hidden = false 
                        Los.hidden = true
                        Chi.hidden = false
                        Vic.hidden = false
                        Chi.innerText = `Выпало число: ${random}`
                        Vic.innerText = `Выигрыш: ${inputNumber.textContent * 2}$`
                        coins.dollar += inputNumber.textContent * 2
                        document.getElementById("dollars").innerHTML = `${coins.dollar}$`
                        flagGlobal = false
                        gold.td.style.backgroundColor = "" 
                    }
                }

                if (gold.td.textContent === "19 to 36") {

                    for (let i = 0; i < chisla.length; i++) {
                        if (chisla[i].innerText >= 19 && chisla[i].innerText <= 36) {

                            if (random == chisla[i].innerText) {
                                coins.dollar -= inputNumber.textContent
                                document.getElementById("dollars").innerHTML = `${coins.dollar}$`
                                flagGlobal = true
                                flagStartGames = false
                                break
                            }
                        }

                    }
                    if (flagGlobal == false) {
                        vipavsheeChislo.hidden = false
                        vipavsheeChislo.innerText = random

                        Gam.hidden = false
                        Chi.hidden = false
                        Vic.hidden = true
                        Chi.innerText = `Выпало число: ${random}`
                        coins.dollar -= inputNumber.textContent
                        document.getElementById("dollars").innerHTML = `${coins.dollar}$`

                        if (coins.dollar === 0) {
                            OfM.hidden = false
                            Vic.hidden = true
                            Los.hidden = true
                            OfM.innerText = "Вы проиграли все деньги!"
                            gold.td.style.backgroundColor = "" 
                            flagStartGames = false
                            console.log("Вы проиграли все деньги")
                        }
                        else {
                            Los.hidden = false
                            Los.innerText = "Вы ничего не выиграли!"
                            gold.td.style.backgroundColor = "" 
                            flagStartGames = false
                        }
                    }
                    else {
                        vipavsheeChislo.hidden = false
                        vipavsheeChislo.innerText = random
                        
                        Gam.hidden = false 
                        Los.hidden = true
                        Chi.hidden = false
                        Vic.hidden = false
                        Chi.innerText = `Выпало число: ${random}`
                        Vic.innerText = `Выигрыш: ${inputNumber.textContent * 2}$`
                        coins.dollar += inputNumber.textContent * 2
                        document.getElementById("dollars").innerHTML = `${coins.dollar}$`
                        flagGlobal = false
                        gold.td.style.backgroundColor = "" 
                    }
                }

                if (gold.td.textContent === "EVEN") {

                    for (let i = 1; i < chisla.length; i++) {

                        if (chisla[i].innerText % 2 == 0) {
                            if (random == chisla[i].innerText) {
                                coins.dollar -= inputNumber.textContent
                                document.getElementById("dollars").innerHTML = `${coins.dollar}$`
                                flagGlobal = true
                                flagStartGames = false
                                break
                            }
                        }

                    }
                    if (flagGlobal == false) {
                        vipavsheeChislo.hidden = false
                        vipavsheeChislo.innerText = random

                        Gam.hidden = false
                        Chi.hidden = false
                        Vic.hidden = true
                        Chi.innerText = `Выпало число: ${random}`
                        coins.dollar -= inputNumber.textContent
                        document.getElementById("dollars").innerHTML = `${coins.dollar}$`

                        if (coins.dollar === 0) {
                            OfM.hidden = false
                            Vic.hidden = true
                            Los.hidden = true
                            OfM.innerText = "Вы проиграли все деньги!"
                            gold.td.style.backgroundColor = "" 
                            flagStartGames = false
                            console.log("Вы проиграли все деньги")
                        }
                        else {
                            Los.hidden = false
                            Los.innerText = "Вы ничего не выиграли!"
                            gold.td.style.backgroundColor = "" 
                            flagStartGames = false
                        }
                    }
                    else {
                        vipavsheeChislo.hidden = false
                        vipavsheeChislo.innerText = random
                        
                        Gam.hidden = false 
                        Los.hidden = true
                        Chi.hidden = false
                        Vic.hidden = false
                        Chi.innerText = `Выпало число: ${random}`
                        Vic.innerText = `Выигрыш: ${inputNumber.textContent * 2}$`
                        coins.dollar += inputNumber.textContent * 2
                        document.getElementById("dollars").innerHTML = `${coins.dollar}$`
                        flagGlobal = false
                        gold.td.style.backgroundColor = "" 
                    }
                }

                if (gold.td.textContent === "ODD") {

                    for (let i = 0; i < chisla.length; i++) {

                        if (chisla[i].innerText % 2 == 1) {
                            if (random == chisla[i].innerText) {
                                coins.dollar -= inputNumber.textContent
                                document.getElementById("dollars").innerHTML = `${coins.dollar}$`
                                flagGlobal = true
                                flagStartGames = false
                                break
                            }
                        }
                    }
                    if (flagGlobal == false) {
                        vipavsheeChislo.hidden = false
                        vipavsheeChislo.innerText = random

                        Gam.hidden = false
                        Chi.hidden = false
                        Vic.hidden = true
                        Chi.innerText = `Выпало число: ${random}`
                        coins.dollar -= inputNumber.textContent
                        document.getElementById("dollars").innerHTML = `${coins.dollar}$`

                        if (coins.dollar === 0) {
                            OfM.hidden = false
                            Vic.hidden = true
                            Los.hidden = true
                            OfM.innerText = "Вы проиграли все деньги!"
                            gold.td.style.backgroundColor = "" 
                            flagStartGames = false
                            console.log("Вы проиграли все деньги")
                        }
                        else {
                            Los.hidden = false
                            Los.innerText = "Вы ничего не выиграли!"
                            gold.td.style.backgroundColor = "" 
                            flagStartGames = false
                        }
                    }
                    else {
                        vipavsheeChislo.hidden = false
                        vipavsheeChislo.innerText = random
                        
                        Gam.hidden = false 
                        Los.hidden = true
                        Chi.hidden = false
                        Vic.hidden = false
                        Chi.innerText = `Выпало число: ${random}`
                        Vic.innerText = `Выигрыш: ${inputNumber.textContent * 2}$`
                        coins.dollar += inputNumber.textContent * 2
                        document.getElementById("dollars").innerHTML = `${coins.dollar}$`
                        flagGlobal = false
                        gold.td.style.backgroundColor = "" 
                    }
                }

                if (gold.td.id === "3One") {
                    let numbers = [1,4,7,10,13,16,19,22,25,28,31,34]

                    for (let i = 0; i < numbers.length; i++) {
                        if (random == numbers[i]) {
                            coins.dollar -= inputNumber.textContent
                            document.getElementById("dollars").innerHTML = `${coins.dollar}$`
                            flagGlobal = true
                            flagStartGames = false
                            break
                        }
                    }
                    if (flagGlobal == false) {
                        vipavsheeChislo.hidden = false
                        vipavsheeChislo.innerText = random

                        Gam.hidden = false
                        Chi.hidden = false
                        Vic.hidden = true
                        Chi.innerText = `Выпало число: ${random}`
                        coins.dollar -= inputNumber.textContent
                        document.getElementById("dollars").innerHTML = `${coins.dollar}$`

                        if (coins.dollar === 0) {
                            OfM.hidden = false
                            Vic.hidden = true
                            Los.hidden = true
                            OfM.innerText = "Вы проиграли все деньги!"
                            gold.td.style.backgroundColor = "" 
                            flagStartGames = false
                            console.log("Вы проиграли все деньги")
                        }
                        else {
                            Los.hidden = false
                            Los.innerText = "Вы ничего не выиграли!"
                            gold.td.style.backgroundColor = "" 
                            flagStartGames = false
                        }
                    }
                    else {
                        vipavsheeChislo.hidden = false
                        vipavsheeChislo.innerText = random
                        
                        Gam.hidden = false 
                        Los.hidden = true
                        Chi.hidden = false
                        Vic.hidden = false
                        Chi.innerText = `Выпало число: ${random}`
                        Vic.innerText = `Выигрыш: ${inputNumber.textContent * 3}$`
                        coins.dollar += inputNumber.textContent * 3
                        document.getElementById("dollars").innerHTML = `${coins.dollar}$`
                        flagGlobal = false
                        gold.td.style.backgroundColor = "" 
                    }
                }

                if (gold.td.id === "3Two") {
                    let numbers = [2,5,8,11,14,17,20,23,26,29,32,35]

                    for (let i = 0; i < numbers.length; i++) {
                        if (random == numbers[i]) {
                            coins.dollar -= inputNumber.textContent
                            document.getElementById("dollars").innerHTML = `${coins.dollar}$`
                            flagGlobal = true
                            flagStartGames = false
                            break
                        }
                    }
                    if (flagGlobal == false) {
                        vipavsheeChislo.hidden = false
                        vipavsheeChislo.innerText = random

                        Gam.hidden = false
                        Chi.hidden = false
                        Vic.hidden = true
                        Chi.innerText = `Выпало число: ${random}`
                        coins.dollar -= inputNumber.textContent
                        document.getElementById("dollars").innerHTML = `${coins.dollar}$`

                        if (coins.dollar === 0) {
                            OfM.hidden = false
                            Vic.hidden = true
                            Los.hidden = true
                            OfM.innerText = "Вы проиграли все деньги!"
                            gold.td.style.backgroundColor = "" 
                            flagStartGames = false
                            console.log("Вы проиграли все деньги")
                        }
                        else {
                            Los.hidden = false
                            Los.innerText = "Вы ничего не выиграли!"
                            gold.td.style.backgroundColor = "" 
                            flagStartGames = false
                        }
                    }
                    else {
                        vipavsheeChislo.hidden = false
                        vipavsheeChislo.innerText = random
                        
                        Gam.hidden = false 
                        Los.hidden = true
                        Chi.hidden = false
                        Vic.hidden = false
                        Chi.innerText = `Выпало число: ${random}`
                        Vic.innerText = `Выигрыш: ${inputNumber.textContent * 3}$`
                        coins.dollar += inputNumber.textContent * 3
                        document.getElementById("dollars").innerHTML = `${coins.dollar}$`
                        flagGlobal = false
                        gold.td.style.backgroundColor = "" 
                    }
                }

                if (gold.td.id === "3Three") {
                    let numbers = [3,6,9,12,15,18,21,24,27,30,33,36]

                    for (let i = 0; i < numbers.length; i++) {
                        if (random == numbers[i]) {
                            coins.dollar -= inputNumber.textContent
                            document.getElementById("dollars").innerHTML = `${coins.dollar}$`
                            flagGlobal = true
                            flagStartGames = false
                            break
                        }
                    }
                    if (flagGlobal == false) {
                        vipavsheeChislo.hidden = false
                        vipavsheeChislo.innerText = random

                        Gam.hidden = false
                        Chi.hidden = false
                        Vic.hidden = true
                        Chi.innerText = `Выпало число: ${random}`
                        coins.dollar -= inputNumber.textContent
                        document.getElementById("dollars").innerHTML = `${coins.dollar}$`

                        if (coins.dollar === 0) {
                            OfM.hidden = false
                            Vic.hidden = true
                            Los.hidden = true
                            OfM.innerText = "Вы проиграли все деньги!"
                            gold.td.style.backgroundColor = "" 
                            flagStartGames = false
                            console.log("Вы проиграли все деньги")
                        }
                        else {
                            Los.hidden = false
                            Los.innerText = "Вы ничего не выиграли!"
                            gold.td.style.backgroundColor = "" 
                            flagStartGames = false
                        }
                    }
                    else {
                        vipavsheeChislo.hidden = false
                        vipavsheeChislo.innerText = random
                        
                        Gam.hidden = false 
                        Los.hidden = true
                        Chi.hidden = false
                        Vic.hidden = false
                        Chi.innerText = `Выпало число: ${random}`
                        Vic.innerText = `Выигрыш: ${inputNumber.textContent * 3}$`
                        coins.dollar += inputNumber.textContent * 3
                        document.getElementById("dollars").innerHTML = `${coins.dollar}$`
                        flagGlobal = false
                        gold.td.style.backgroundColor = "" 
                    }
                }
                
                if (gold.td.nodeName === 'P') {
                    if (gold.td.parentElement.classList[0] === "chisla") {
                        
                        if (random == gold.td.innerText) {
                            coins.dollar -= inputNumber.textContent
                            document.getElementById("dollars").innerHTML = `${coins.dollar}$`
                            flagGlobal = true
                            flagStartGames = false
                        }
                        if (flagGlobal == false) {
                            vipavsheeChislo.hidden = false
                            vipavsheeChislo.innerText = random
    
                            Gam.hidden = false
                            Chi.hidden = false
                            Vic.hidden = true
                            Chi.innerText = `Выпало число: ${random}`
                            coins.dollar -= inputNumber.textContent
                            document.getElementById("dollars").innerHTML = `${coins.dollar}$`
    
                            if (coins.dollar === 0) {
                                OfM.hidden = false
                                Vic.hidden = true
                                Los.hidden = true
                                OfM.innerText = "Вы проиграли все деньги!"
                                // gold.td.style.backgroundColor = "" 
                                flagStartGames = false
                            }
                            else {
                                Los.hidden = false
                                Los.innerText = "Вы ничего не выиграли!"
                                // gold.td.style.backgroundColor = "" 
                                flagStartGames = false
                            }
                        }
                        else {
                            vipavsheeChislo.hidden = false
                            vipavsheeChislo.innerText = random
                            
                            Gam.hidden = false 
                            Los.hidden = true
                            Chi.hidden = false
                            Vic.hidden = false
                            Chi.innerText = `Выпало число: ${random}`
                            Vic.innerText = `Выигрыш: ${inputNumber.textContent * 36}$`
                            coins.dollar += inputNumber.textContent * 36
                            document.getElementById("dollars").innerHTML = `${coins.dollar}$`
                            flagGlobal = false
                            // gold.td.style.backgroundColor = "" 
                        }
                    }        
                }
                
                if (gold.td.class == "chisla") {
                    console.log(gold.td.textContent)
                }


                // флаг нужно поместить в сам код с кручением рулетки
                if (flagStartGames == true) {
                    Ale.hidden = false
                    Ale.innerText = "Вы уже начали игру"
                    console.log("Вы уже начали игру")
                }
            }
            else {
                Ale.hidden = false
                Ale.innerText = "Вы не сделали ставку"
                console.log("Ошибка, вы не сделали ставку")
            }
        }
        else {
            Ale.hidden = false
            Ale.innerText = "Вы не начали игру"
            console.log("Ошибка, вы не начали игру")
        }
    }


    endK.addEventListener("click", function(event) {    
        gold.td.style.backgroundColor = ""
        inputNumber.hidden = true
        faik.hidden = false
        flag = false

        Ale.hidden = true
        Gam.hidden = true // убираем все сообщения вместе с полем
        Chi.hidden = true
        Vic.hidden = true
        Los.hidden = true
        OfM.hidden = true

    })
}
start()
