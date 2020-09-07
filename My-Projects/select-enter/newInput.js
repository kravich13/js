const newSelect = document.getElementById("selected")
const divOption = document.getElementById("hiddenTrue")

let i = 0 // счетчик для кликов по кнопке
const arrOption = Array.from(document.getElementsByTagName("option"))


function hiddenDiv (value) {
    divOption.hidden = value
}
hiddenDiv(true)


function hiddenOption (current) {
    let j = 0  

    arrOption.forEach(function (elem) {
        if (elem.textContent.toUpperCase().indexOf(current.toUpperCase()) === 0) {
            elem.hidden = false
        }
        else {
            j++
            elem.hidden = true
        }
    })
    if (j === divOption.children.length) hiddenDiv(true)
    
    return
}



document.addEventListener("click", function (event) {
    if (event.target.closest("#strelka")) {
        
        if (i % 2 === 0) {
            i++
            hiddenDiv(false)
        }
        else {
            i++
            hiddenDiv(true)
        }
    }
    else {
        if (event.target.closest("option")) {
            newSelect.value = event.target.textContent
            i++
            hiddenDiv(true)
            // console.log("тут")
        }
        else {
            i++
            hiddenDiv(true)
        }
    }
    // else if (event.target)

    // if (event.target.closest("option"))
})

newSelect.addEventListener("input", function (event) {
    const currentText = event.target.value

    if (currentText === "") hiddenDiv(true)
    else hiddenDiv(false)

    
    hiddenOption(currentText)
})

newSelect.addEventListener("keydown", function (event) {

    if (event.code === "Enter") {

        const newCurrent = arrOption.filter(function (elem) {
            if (elem.hidden === false) return true
        })
        
        if (!newCurrent[0]) return

        newSelect.value = newCurrent[0].textContent
    }
    hiddenDiv(true)
})


divOption.addEventListener("mouseover", function (event) {
    if (event.target.closest("option")) {
        event.target.style.backgroundColor = "teal"
    }
})

divOption.addEventListener("mouseout", function (event) {
    if (event.target.closest("option")) {
        event.target.style.backgroundColor = ""
    }
})

// divOption.addEventListener("focusout", function (event) {
//     console.log("потеря фокуса")
// })