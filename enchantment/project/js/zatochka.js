let inventar = { 
    "Draconic Bow": {
        enchanted: 0,
        SA: "Focus",
        LS: false,
        fullName: "Draconic Bow"
    },                                  // инвентарь с ДБ и Аркой на +4
    "Arcana Mace": {
        enchanted: 1,
        SA: "Acumen",
        LS: true,
        fullName: "Arcana Mace"
    },
    "Heavens Divider": {
        enchanted: 2,
        SA: "Focus",
        LS: true,
        fullName: "Heavens Divider"
    },
    "Saint Spear": {
        enchanted: 4,
        SA: "Hast",
        LS: true,
        fullName: "Saint Spear"
    },
    "Tallum Blade*Dark Legion's Edge": {
        enchanted: 20,
        SA: false,
        LS: true,
        fullName: "Tallum Blade*Dark Legion's Edge"
    },
    "crystals": {
        S: 0
    }
}

let zatochka = {
    "weapon": {
        quantity: 100
    },
    "enchanted": {
        quantity: 100
    }
}



function touch(svitok) {
    let section = document.getElementById("all")

    let nameTarget = document.getElementById("nameTarget")
    let nameWeapon = document.getElementById("nameWeapon")
    
    let richag = document.getElementById("richag")
    let hz = document.getElementById("Hz")
    let oneClick = document.getElementById("theFirstClick")
    oneClick.flag = false
    let error = document.getElementById("error")

    let button = document.getElementById("clickToch")

    let weaponRed = {
        red: oneClick
    }

    error.hidden = true
    oneClick.hidden = false

    nameTarget.hidden = true

    let weapon = Array.from(section.getElementsByClassName("orujie"))
    let indexWeapon = 0

    section.addEventListener("mouseover", function(event) {
        if (!event.target.closest("img")) {
            return
        }

        let eventTarget = event.target.closest("img")

        indexWeapon = weapon.indexOf(eventTarget)

        if (eventTarget.className === "orujie") {

            nameTarget.hidden = false
            nameTarget.style.left = `${eventTarget.offsetLeft}px`
            nameTarget.style.top = `${eventTarget.offsetTop - eventTarget.height}px`

            if (!inventar[eventTarget.getAttribute("alt")].SA === false) {
                nameWeapon.innerHTML = `${eventTarget.getAttribute("alt")} <span id=\"sa\">${inventar[eventTarget.getAttribute("alt")].SA}</span> +${inventar[eventTarget.getAttribute("alt")].enchanted} [S]`
            }
            else {
                nameWeapon.innerHTML =  `${eventTarget.getAttribute("alt")} <span id=\"sa\"></span> +${inventar[eventTarget.getAttribute("alt")].enchanted} [S]`
            }
            
        }

        if (eventTarget.className === "svitki") {
            nameTarget.hidden = false
            nameTarget.style.left = `${eventTarget.offsetLeft}px`
            nameTarget.style.top = `${eventTarget.offsetTop - eventTarget.height}px`
            nameWeapon.innerHTML = `${eventTarget.getAttribute("alt")} <span id=\"sa\"></span>`
        }
    })

    section.addEventListener("mouseout", function(event) {
        if (!event.target.closest("img")) {
            return
        }

        nameTarget.hidden = true
    })


    section.addEventListener("click", function(event) {
        
        if (event.target.closest("button")) {
            if (inventar[weaponRed.red.getAttribute("alt")].enchanted === 20) {
                richag.textContent = "Лимит заточки"
                richag.style.backgroundColor = ""
                console.log("тут")
                return
            }

            if (inventar[weaponRed.red.getAttribute("alt")].enchanted < 3) {
                inventar[weaponRed.red.getAttribute("alt")].enchanted++
                console.log(inventar[weaponRed.red.getAttribute("alt")].enchanted)
                richag.textContent = `${inventar[weaponRed.red.getAttribute("alt")].fullName} +${inventar[weaponRed.red.getAttribute("alt")].enchanted}`
                richag.style.backgroundColor = ""
            }
            else {
                if (inventar[weaponRed.red.getAttribute("alt")].enchanted < 20) {
                    let random = Math.floor(Math.random() * 100)


                    // ПРЯМО ТУТ МЕНЯЕШЬ ШАНС ЗАТОЧКИ, ХОЧЕШЬ 100 - делаешь random >= 0!!!
                    if (random >= 15) {
                    // ПРЯМО ТУТ МЕНЯЕШЬ ШАНС ЗАТОЧКИ, ХОЧЕШЬ 100 - делаешь random >= 0!!!

                    
                        inventar[weaponRed.red.getAttribute("alt")].enchanted++
                        richag.textContent = `${inventar[weaponRed.red.getAttribute("alt")].fullName} +${inventar[weaponRed.red.getAttribute("alt")].enchanted}`
                        console.log(inventar[weaponRed.red.getAttribute("alt")].enchanted)

                        if (inventar[weaponRed.red.getAttribute("alt")].enchanted === 4) {
                            richag.style.backgroundColor = "rgb(00, 156, 255, 0.082)"
                        }
                        else {
                            if (inventar[weaponRed.red.getAttribute("alt")].enchanted > 15) {
                                richag.style.backgroundColor = `rgb(255, 0, 0, 0.${600 + (077 * (inventar[weaponRed.red.getAttribute("alt")].enchanted - 15))})`
                                // console.log("тут")
                            }
                            else {
                                richag.style.backgroundColor = `rgb(00, 156, 255, 0.${082 * (inventar[weaponRed.red.getAttribute("alt")].enchanted - 3)})`
                            }
                        }
                    }
                    else {
                        inventar[weaponRed.red.getAttribute("alt")].enchanted = 3
                        richag.style.backgroundColor = ""

                        richag.textContent = "Точка неудачна и сброшена до +3"
                        console.log(inventar[weaponRed.red.getAttribute("alt")].enchanted)
                    }
                }
            }
        }


        if (!event.target.closest("img")) {
            return
        }
        let eventTarget = event.target.closest("img")

        if (eventTarget.className === "svitki") {
            
            eventTarget.style.border = "2px solid red"     
            
            richag.textContent = "Выберите оружие"
            richag.flag = true
        }

        if (richag.flag === true) {
            if (eventTarget.className === "orujie") {
                if (weaponRed.red.flag === true) {
                    weaponRed.red.style.border = ""
                    eventTarget.style.border = "2px solid red"
                    weaponRed.red = eventTarget
                    weaponRed.red.flag = false
                }
                else {
                    eventTarget.style.border = "2px solid red"
                    weaponRed.red.style.border = ""
                    weaponRed.red = eventTarget
                    weaponRed.red.flag = true
                }
                richag.textContent = "Нажмите точить"
            }
        }
    })

}
touch(zatochka["weapon"].quantity)

