// Сделать функцию extend, которая добавляет один ассоциативный массив во второй:

console.log(extendedPerson); //{name: "Иван", age: 17, surname: "Иванов", fatherName: "Иванович"}


let person = {
    name: "Иван",
    age: 17
}

function extend (objOne, objTwo)  {
    let objNew = {}  
    for (key in objOne) {
        objNew[key] = objOne[key]
    }
    for (key in objTwo) {
        objNew[key] = objTwo[key]
    }
    return objNew
}

extend(person,{
    surname: "Иванов",
    fatherName: "Иванович"
})


// Сделайте функцию copy, которая будет копировать ключи и значения объекта в новый объект. Копирование должно проверять типы данных, и делать копии вложенных массивов. Вложенные объекты не копируются (просто присваиваются)

var someTree = {
    tag: "table", //html tag
    nestedTags: [ //вложенные тэги
        {
                    tag: "tr",
                    nestedTags: [
                        {
                            tag: "td",
                            content: "some text",
                        },
                        {
                            tag: "td",
                            content: "some text 2",
                        }
                    ]
        }
    ],
    options: 
    {
        border: 1,
    },
}

function copy (obj) {

    return
}
copy(someTree)