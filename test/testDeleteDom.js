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
