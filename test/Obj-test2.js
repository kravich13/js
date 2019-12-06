// 1) Нарисовать HTML таблицу из двух колонок, в которой слева будут ключи, а справа - значения: 
var obj = {
    tag: "<table>",
    name: "Ivan",
    surname: "Ivanovv",
    fatherName: "Petrovich",
    tag: "</table>"
}
for (var key in obj) {
    console.log(key+": "+obj[key]); // вывод; name: Ivan
}


// 2) Сделать три ассоциативных массива a, b, c, в каждом из которых должны быть поля name и surname.
var mass = {
    a: {
        name: "Vlad",
        surname: "Kravich"
    },
    b: {
        name: "Vlad",
        surname: "Krabich"
    },
    c: {
        name: "Vlad",
        surname: "Kravchiha"
    }
}
mass.a // вызов ключей со свойствами

// Добавьте некоторые другие поля (например age, fathername, sex (пол)) так, что бы набор полей отличался у разных объектов

mass.a.age = 22
mass.b.fatherName = "Alexasndrovich"
mass.c.sex = "Mужской"
mass.b.fatherName // вывод

// Проверьте наличие необязательных полей у каждого из этих массивов. Если поле найдено, выведите его с помощью alert. Проверку делайте по typeof или in в if.

if ("age" in mass.a) {
    console.log(mass.a.age)

    if ("fatherName" in mass.b) {
        console.log(mass.b.fatherName)

        if ("sex" in mass.c) {
            console.log(mass.c.sex)
        }
    }
}

// 3) Добавьте несколько ассоциативных массивов с персонами в обычный массив persons, например a,b,c. Так же добавьте персону литерально ({...}). Получится обычный массив с элементами-ассоциативными массивами с персонами.