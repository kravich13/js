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
    name: "Vlad",
    // surname: "Kravich"
}
var b = {
    name: "Vlad",
    surname: "Kravich"
}
var c = {
    // name: "Vlad",
    surname: "Kravich"
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
        console.log("Нет поля имя")
    }
}





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




