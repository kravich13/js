let tanks = {
    soviet: {
        premium: {
            "IS-6": false,
            "T-50-2": false,
        }
    },
    germany: {
        premium: {
            "Lowe": false,
            "Rheinmetall Skorpion G": false,
            "8,8 cm Pak 43 Jagdtiger": false,
            "Tiger 131": false,

        }
    },
    usa: {
        premium: {
            "T25 Pilot Number 1": false,
            "T28 Concept": false
        }
    }
}

let playerCoins = {
    gold: 0,
    silver: 0,
    case: 1, // сами кейсы
}

// bigCase(playerCoins.case) - вызов функции с параметром 

function bigCase (casse = playerCoins.case) { // функция с коробками, на вход принимает кол-во коробок из объекта

    let gold = 250    // переменная, в которой будет выпадать количество голды (250 голды 100% шанс)
    let silver = 0    // здесь хранится кол-во серебра

    let resultGold = 0    // хранится шанс для золота
    let resultSilver = 0  // хранится шанс для серебра
    let resultTanks = 0   // хранится шанс для танков

    // переменные с танками 
    for (let i = 0; i < casse; i++) {
        text = confirm(`Хотите открыть коробку? Осталось: ${casse - i} штук.`)
        if (text == true) {

            // if для золота
            resultGold = Math.random() * (100 - 1) + 1
            resultGold = resultGold.toFixed(0)
            
            if (resultGold <= 10) {
                alert(`Выпало 500 золота.`)
                playerCoins.gold += gold + 250
                    document.getElementById("gold-green").innerHTML = `+${gold + 250}`
            }
            else {
                if (resultGold <= 5) {
                    alert(`Выпало 750 золота.`)
                    playerCoins.gold += gold + 500
                        document.getElementById("gold-green").innerHTML = `+${gold + 500}`
                }
                else {
                    if (resultGold <= 3) {
                        alert(`Выпало 1000 золота.`)
                        playerCoins.gold += gold + 750
                            document.getElementById("gold-green").innerHTML = `+${gold + 750}`
                    }
                    else {
                        if (resultGold <= 1) {
                            alert(`Выпало 1250 золота.`)
                            playerCoins.gold += gold + 1000
                                document.getElementById("gold-green").innerHTML = `+${gold + 1000}`
                        }
                        else {
                            alert(`Выпало ${gold} золота`)
                            playerCoins.gold += gold
                            document.getElementById("gold-green").innerHTML = `+${gold}`
                        }
                    }
                }
            }

            // if для серебра
            resultSilver = Math.random() * (100 - 1) + 1
            resultSilver = resultSilver.toFixed(0)

            if (resultSilver <= 30) {
                alert(`Выпало 100000 серебра`)
                playerCoins.silver += silver + 100000
                    document.getElementById("silver-green").innerHTML = `+${silver + 100000}`
            }
            else {
                if (resultSilver <= 20) {
                    alert(`Выпало 250000 серебра`)
                    playerCoins.silver += silver + 250000
                        document.getElementById("silver-green").innerHTML = `+${silver + 250000}`
                }
                else {
                    if (resultSilver <= 10) {
                        alert(`Выпало 500000 серебра`)
                        playerCoins.silver += silver + 500000
                        document.getElementById("silver-green").innerHTML = `+${silver + 500000}`
                    }
                    else {
                        document.getElementById("silver-green").innerHTML = `+0`
                    }
                }
            }

            // if для прем танков
            resultTanks = Math.random() * (100 - 1) + 1
            resultTanks = resultTanks.toFixed(0)
            
            if (resultTanks <= 5) { // шанс, что выпадет сам танк
                if (tanks.germany.premium["Rheinmetall Skorpion G"] == false) {
                    alert("Выпал танк Rheinmetall Skorpion G")
                    tanks.germany.premium["Rheinmetall Skorpion G"] = true

                    let scorp = document.createElement("img")
                    scorp.src = "img/rheinmetall_skorpion_g-1.png"
                    // document.body.prepend(scorp)1
                    scorpImg.prepend(scorp)
                } else {
                    alert("Компенсация 11500 голды за танк Rheinmetall Skorpion G")
                    playerCoins.gold += 11500
                        document.getElementById("gold-green").innerHTML = `+11500`                }
            }
        }
        else { // если нажал выход, то выход =)
            break
        }
    }
}




