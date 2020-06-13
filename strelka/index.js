
function tickNaButton () {

    let button = document.createElement("button")
    let top = 0
    let flag = false

    button.style.width = "100px"
    button.style.height = "70px"
    button.style.margin = "10px 0"
    button.style.position = "fixed"
    button.textContent = "↓"
    button.style.backgroundColor = "rgb(200, 5, 25, 0.7)"
    button.style.fontSize = "23px"
    button.style.fontWeight = "900"
    button.style.border = "3px solid white"
    button.style.borderRadius = "7px"
    
    window.addEventListener("scroll", function (event) {
        if (document.body.scrollTop === 0) {
            button.textContent = "↓"
        }
        else {
            button.textContent = "↑"
        }
    })

    button.addEventListener("click", function (event) {
        if (flag === false) {
            // если прокрутка была, запоминаем и кидаем в начало

            top = document.body.scrollTop // BODY, важно!
            window.scrollTo(0, 0)
            flag = true
        }
        else {
            if (document.body.scrollTop != 0) {
                // если после прокрутки вверх была прокрутка вниз, запоминаем новые координаты и кидаем в начало

                top = document.body.scrollTop // BODY, важно!
                window.scrollTo(0,0)
            }
            else { 
                // если после прокрутки наверх захотели вернуться обратно, кидаем на предыдущие координаты

                window.scrollBy(0, top)
                flag = false
            }
        }

    })
    
    return document.body.prepend(button)
}
tickNaButton()