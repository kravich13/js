// 1) Нарисовать HTML таблицу из двух колонок, в которой слева будут ключи, а справа - значения: 
var ivanov = {
    name: "Ivan",
    surname: "Ivanovv",
    fatherName: "Petrovich"
}

// for (var key in ivanov) {
//     debugger
//     console.log(key + ": " + ivanov[key])
// }

function table (obj) {
    var str = "<table>"
    for (var key in ivanov) {
        str += `<tr> <td> <b> ${key} </b> </td> <td> ${ivanov[key]} </td> </tr>` 
    }
    str += "</table>"
    return str
}
document.write(table(ivanov))
    


// 2) Сделать три ассоциативных массива a, b, c, в каждом из которых должны быть поля name и surname.
var a = {
    name: "Just",
    surname: "Fun"
}
var b = {
    name: "Vlad",
    surname: "Kravich"
}
var c = {
    name: "Marshall",
    surname: "Mathers"
}

// Добавьте некоторые другие поля (например age, fathername, sex (пол)) так, что бы набор полей отличался у разных объектов
a.age = 22
b.fatherName = "Alexandrovich"
c.sex = "male"

// Проверьте наличие необязательных полей у каждого из этих массивов. Если поле найдено, выведите его с помощью alert. Проверку делайте по typeof или in в if.
if ("age" in a) {
    console.log(a.age)
}
else {
    console.log("net")
}
//
if ("fatherName" in b) {
    console.log(b.fatherName)
}
else {
    console.log("net")
}
//
if ("sex" in c) {
    console.log(c.sex)
}
else {
    console.log("net")
}

// Добавьте несколько ассоциативных массивов с персонами в обычный массив persons, например a,b,c. Так же добавьте персону литерально ({...}). Получится обычный массив с элементами-ассоциативными массивами с персонами.
var persons = []
persons.push(a, b, c)

// Сделайте цикл, который выводит весь массив persons в форме объектов console.log(persons[i])
for (var i = 0; i < persons.length; i++) {
    console.log(persons[i])
}

// Сделайте цикл, который выводит весь массив persons, но только Имя и Фамилию каждой персоны. Используйте вложенный for для вывода полей персоны, и проверку на то, что ключ - имя или фамилия, а не что-то другое.
for (var i = 0; i < persons.length; i++) {
    if ("name" in persons[i]) {
        console.log(persons[i].name)
        if ("surname" in persons[i]) {
            console.log(persons[i].surname)
        }
        else {
            console.log("Нет поля фамилия")
        }
    }
    else {
        if ("surname" in persons[i]) {
            console.log(persons[i].surname)
        }
        else {
            console.log("Нет поля фамилия")
        }
        console.log("Нет поля имя")
    }
}

// Сделайте цикл, который выводит весь массив persons, но только Имя и Фамилию каждой персоны. Используйте Object.keys и вложенный for для вывода полей персоны
for (var i = 0; i < persons.length; i++) {
    // for (var key in persons[i]) {
        // Object.keys(persons)
    }
}

// Сделайте цикл, который выводит весь массив persons, при этом проверяет наличие других полей (кроме name и surname), и выводит дополнительные сообщения с этими полями. Первые два выводимых поля - name и surname
for (var i = 0; i < persons.length; i++) {
    for (var key in persons[i]) {
        console.log(`Персона ${i + 1}:  ${key}: ${persons[i][key]}`)
    }
}

// Сделайте цикл, которых добавляет поле fullName в каждый объект, содержащий ФИО. Учтите, что поле fathername не является обязательным.
for (var i = 0; i < persons.length; i++) {
    if ("name" in persons[i] && "surname" in persons[i] && "fatherName" in persons[i]) { // проверка на всё сразу (имя, фамилия, отчество)
        persons[i].fullname = `${persons[i].name} ${persons[i].surname} ${persons[i].fatherName}` // фамилия + имя + отчество
    }
}


// Создайте JSON-строку из persons
var json = JSON.stringify(persons)
console.log(typeof json)
json 

// Создайте ассоциативный массив с одной персоной из JSON-строки. Добавьте её в persons
// var Vlad = JSON.parse(`{"name": "Vlad", "age": 22, "sex": false}`);
persons[persons.length] = JSON.parse(`{"name": "Vlad", "age": 22, "sex": false}`)


// HTML 
// Сделайте цикл, который выводит весь массив persons, в форме HTML-таблицы. Имя и Фамилия - колонки.
function tableObj(arr) {
    var str = "<table>"
    for (var i = 0; i < arr.length; i++) {
        if ("name" in arr[i] && "surname" in arr[i]) {
            str += `<tr> <td> ${arr[i].name}</td> <td>${arr[i].surname} </td> </tr>`
        }
    }
    str += "</table"
    return str
}
document.write(tableObj(persons))

// HTML optional fields
// Сделайте цикл, который выводит весь массив persons, в форме HTML-таблицы. Имя и Фамилия, а так же другие поля при наличии.
function tableFull(arr) {
    var str = "<table>"
    for (var i = 0; i < arr.length; i++) {
        for (var key in arr[i]) {
            str += `<tr> <td> Персона ${i + 1} </td> <td> ${key} </td> <td> ${arr[i][key]} </td> </tr>`
        }
    }
    str += "</table>"
    return str
}
document.write(tableFull(persons))

// HTML tr color
// Добавьте к предыдущему примеру раскраску через строчку используя другой стиль тэга tr.
function tableFull(arr) {
    var str = "<table>"
    var j = 0
    // debugger
    for (var i = 0; i < arr.length; i++) {
        for (var key in arr[i]) {
            j++ // добавление счетчика на каждой итерации
            if (j % 2 == 1) {
            str += `<tr style="background: grey"> <td> Персона ${i + 1} </td> <td> ${key} </td> <td> ${arr[i][key]} </td> </tr>`
            }
            else {
                str += `<tr> <td> Персона ${i + 1} </td> <td> ${key} </td> <td> ${arr[i][key]} </td> </tr>`
            }
        }
    }
    str += "</table>"
    return str
}
document.write(tableFull(persons))

// HTML th optional
// Переработайте вывод persons в HTML с поиском всех возможных колонок во всех записях, выводом названий колонок в заголовок HTML-таблицы. Для решения этой задачи вначале узнайте множество полей (ключей) во всех записях, выведите HTML-заголовок используя тэги <th>, а потом выводите все записи.
function unicalniyKey(arr) {
    var j = 0
    var allKey = []
    var flag = false
    for (var i = 0; i < arr.length; i++) {
        for (var key in arr[i]) {
            allKey[j] = key
            j++
        }
    }
    var arrClear = [allKey[0]]
    for (var i = 1; i < allKey.length; i++) {
        for (var j = 0; j < arrClear.length; j++) {
            if (allKey[i] == arrClear[j]) {
                flag = true
                break
            }
            else {
                flag = false
            }
        }
        if (flag == false) {
            arrClear[arrClear.length] = allKey[i]
        }
        else {
            if (flag == true) {
                continue
            }
        }
    }
    console.log(arrClear)
    return arrClear
}
var keys = unicalniyKey(persons)

function tableFull(arr, unicKey) {
    var str = "<table>"
    str += `<tr style="background: #1613">`
    for (var i = 0; i < unicKey.length; i++) {
        str += `<th> ${unicKey[i]} </th>`
    }
    str += "<tr>"

    for (var i = 0; i < arr.length; i++) {
        if (i % 2 == 1) {
            str += `<tr style="background: #248797">`
        }
        else {
            str += "<tr>"
        }
        for (var j = 0; j < unicKey.length; j++) {
                if (unicKey[j] in arr[i]) {
                    str += `<td> ${arr[i][unicKey[j]]} </td>`
                }
                else {
                    str += "<td> </td>"
                }
        }
        str += "</tr>"
    }
    
    str += "</table>"
    return str
}
document.write(tableFull(persons, keys))




{/* <body>
<div>
    <span>Enter a data please:</span><br/>
    <input type='text' id='name'>
    <input type='text' id='surname'>
</div>
<div>
    <button id='ok'>OK</button>
    <button id='cancel'>Cancel</button>
</div>
</body>

Сделайте декларативную JSON-структуру для тэгов выше, в которой:

    каждый тэг будет объектом
    имя тэга будет полем tagName
    вложенные тэги будут в поле subTags
    текст в тэге будет в поле text
    набор аттрибутов тэга будет в поле attrs.  */}

var html = {
    tagName: 'body',
    subTags: [
        {
            tagName: 'div',
            subTags: [
                {
                    tagName: 'span',
                    text: "Enter a data please:",
                    subTags: [
                        {
                            tagName: 'br',
                            subTags: [
                                {
                                    tagName: "input",
                                    attrs: {
                                        type: "text",
                                        id: "name"
                                    }
                                },
                                {        
                                    tagName: "input",
                                    attrs: {
                                        type: "text",
                                        id: "surname"
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            tagName: 'div',
            subTags: [
                {
                    tagName: "button",
                    attrs: {
                        id: "ok"
                    },
                    text: "OK"
                },
                {    
                    tagName: "button",
                    attrs: {
                        id: "cancel"
                    },
                    text: "Cancel"
                }
            ]
        }
    ]
}
html["id"]

// Выведите значения текста во второй кнопке, используя . и []. Выведите значение атрибута id во втором input, используя . и [].
html.subTags[0].subTags[0].subTags[0].subTags[0].attrs.type // 0 - индекс массива; выведет "text"
html.subTags[0].subTags[0].subTags[0].subTags[1].attrs.id // вывод "surname"



// объекты с промптом

var person = {
    name: prompt("Enter a name"),
    surname: prompt("Enter a surname"),
}

var notebook = {
    brand: prompt("Бренд"),
    type:  prompt("Тип"),
    model: prompt("Модель"),
    ram: +prompt("Кол-во оперативы"),
    size: +prompt("Диагональ экрана"),
    weight: +prompt("Вес ноута"),
    resolution: {
        width: +prompt("Разрешение X"),
        height: +prompt("Разрешение Y"),
    },
};

var phone = {
    brand: prompt("Телефон"),
    model: prompt("Модель"),
    ram: +prompt("Оператива"),
    color: prompt("Цвет"),
};

// Добавьте персоне гаджеты, используя новые поля smartphone и laptop в объекте персоны
// Добавьте владельца в гаджеты, используя новое поле owner в объектах телефона и ноутбука.
// обратите внимание на цикличность ссылок в объектах, если вы все сделали правильно, то...            person.smartphone.owner.laptop.owner.smartphone == person.smartphone

// 1)
person.smarthone = "iPhone 7 Plus"
person.laptop = "Asus"

// 2)
notebook.owner = {} // добавляем пустой объект с именем owner
notebook.owner.name = person.name // создаем в объекте owner поле name и записываем туда имя
notebook.owner.surname = person.surname // аналогично как и выше

phone.owner = {} // добавляем пустой объект с именем owner
phone.owner.name = person.name // создаем в объекте owner поле name и записываем туда имя
phone.owner.surname = person.surname // аналогично как и выше





// Задание на синий пояс.

// Сделать HTML-конструктор из деревянной структуры, которая была на прошлом занятии:

var someTree = {
    tagName: "table", //html tag
    subTags: [ //вложенные тэги
        {
                    tagName: "tr",
                    subTags: [
                        {
                            tagName: "td",
                            text: "some text",
                        },
                        {
                            tagName: "td",
                            text: "some text 2",
                        }
                    ]
        }
    ],
    attrs: 
    {
        border: 1,
        style: "color: red"
    },
}

function tableHTML(derevo) {
    if ("tagName" in derevo == false) {
        return null
    }
    var str = `<${derevo.tagName}`

    if ("attrs" in derevo) {
        for (var key in derevo.attrs) {
            str += ` ${key}="${derevo.attrs[key]}"`
        }
    }
    str += ">"
    
    if ("subTag" )

    // поиск первой вложенности
    
    str += `<${derevo.tagName}>`

    if ("text" in derevo) {
        str += `${derevo}`
    }

    return str
}
// console.log(tableHTML(someTree))
// document.write(tableHTML(someTree))
// Для начала сделайте конструктор для верхнего уровня (в примере - table). Потом с помощью копипасты сделайте то же самое с вложенным уровнем nestedTags (tr). Аналогично для уровня td.
// Конструктор должен поддерживать вложенность до 3его уровня (как в примере). В результате работы конструктора из примера выше должен получиться следующий HTML(в строке str):

{/* <table border=1>
    <tr>
        <td>some text</td>
        <td>some text 2</td>
    </tr>
</table> */}

// Переносы строк и отступы в результате не принципиальны, главное - структура HTML Проверьте ваш код на других структурах.

function tableHTML(derevo) {
    if ("tagName" in derevo == false) {
        return null
    }
    var str = `<${derevo.tagName}`

    if ("attrs" in derevo) {
        for (var key in derevo.attrs) {
            str += ` ${key}="${derevo.attrs[key]}"`
        }
    }
    str += ">"


    // поиск первой вложенности
    if ("subTags" in derevo) {
        for (var i = 0; i < derevo.subTags.length; i++) {
            if ("tagName" in derevo.subTags[i] == false) {
                return null
            }
            str += `<${derevo.subTags[i].tagName}`
        
            if ("attrs" in derevo.subTags[i]) {
                for (var key in derevo.subTags[i].attrs) {
                    str += ` ${key}="${derevo.subTags[i].attrs[key]}"`
                }
            }
            str += ">"
            if ("text" in derevo.subTags[i]) {
                str += `${derevo.subTags[i]}`
            }

            // поиск второй вложенности
            if ("subTags" in derevo.subTags[i]) {
                for (var j = 0; j < derevo.subTags[i].subTags.length; j++) {
                    if ("tagName" in derevo.subTags[i].subTags[j]) {
                        str += ` <${derevo.subTags[i].subTags[j].tagName} `
                        if ("attrs" in derevo.subTags[i].subTags[j]) {
                            for (var key in derevo.subTags[i].subTags[j].attrs) {
                                str += ` ${key}="${derevo.subTags[i].subTags[j].attrs[key]}"`
                            }
                        }
                        str += ">"
                        if ("text" in derevo.subTags[i].subTags[j]) {
                            str += `${derevo.subTags[i].subTags[j].text}`
                        }
                    }

                    // поиск третьей вложенности
                    if ("subTags" in derevo.subTags[i].subTags[j]) {
                        for (var k = 0; k < derevo.subTags[i].subTags[j].subTags.length; k++) {
                            if ("tagName" in derevo.subTags[i].subTags[j].subTags[k]) {
                                str += ` <${derevo.subTags[i].subTags[j].subTags[k]} `
                            }
                            if ("attrs" in derevo.subTags[i].subTags[j]) {
                                for (var key in derevo.subTags[i].subTags[j].subTags[k].attrs) {
                                    str += ` ${key}="${derevo.subTags[i].subTags[j].subTags[k].attrs[key]}"`
                                }
                            }
                            str += ">"
                            if ("text" in derevo.subTags[i].subTags[j].subTags[k]) {
                                str += `${derevo.subTags[i].subTags[j].subTags[k].text}`
                            }
                        }
                    }
                }
            }
            str += `</${derevo.subTags[i].tagName}>`
        }
    }
    str += `<${derevo.tagName}>`

    if ("text" in derevo) {
        str += `${derevo}`
    }

    return str
}
console.log(tableHTML(someTree))
document.write(tableHTML(someTree))

