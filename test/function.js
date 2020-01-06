// Напишите функцию cube, которая возвращает число в третьей степени:

function cube (X) {
    let number = X ** 3
    return number
}
console.log(cube(5))


// Напишите функцию avg2, которая рассчитывает среднюю для двух чисел:

function avg2 (x,y) {
    let number = (x / 2) + (y / 2)
    return number
}
console.log(avg2(10,5))


// Напишите функцию sum3 для суммирования 3 чисел:

let arr = [10,5,9,10,115]

function sum3 (arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }

    return sum
}
console.log(sum3(arr))


// Напишите функцию intRandom, которая принимает два параметра: нижнюю и верхнюю границу, и возвращает целое случайное число из этого диапазона включительно:

function intRandom (x,y) {
    let random = Math.random() * (x - y) + y
    random = random.toFixed(0)

    return random
}
intRandom(10,5)


// Сделайтей функцию, которая приветствует всех, кто передан в качестве параметров

let arr = ["Влад", "Максим", "13 миллионов долларов США к 2033 году!"]

function privet (text) {
    let hello = ""
    for (let i = 0; i < text.length; i++) {
        if (text[i] == text[0]) {
            hello += `Привет ${text[i]},`
        }
        else {
            if (text[i] == text[text.length-1]) {
                hello += ` ${text[i]}`
            }
            else {
                hello += ` ${text[i]},`
            }
        }
    }
    return hello
}
console.log(privet(arr))

// альтернативный и самый правильный вариант
let arr = ["Влад", "Максим", "13 миллионов долларов США к 2033 году!"]

function privet (text) {
    let str = "привет"
    for (let i = 0; i < text.length; i++) {
        str += `, ${text[i]}`
    }
    return str
}
privet (arr)




// Напишите функцию sum, которая сумирует любое количество параметров

function sum () {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}
console.log(sum(10,20,30))


// Сделайте функцию avg, которая рассчитывает среднее значение любого количества параметров

function avg () {
    let arr = []
    let center = 0
    for (let i = 0; i < arguments.length; i++) {
        arr[i] = arguments[i] / 2
    }
    for (let i = 0; i < arr.length; i++) {
        center += arr[i]
    }
    center = center / 2
    return center
}
console.log(avg(10,20,40,100))


// Всё предыдущие функции и примеры с ними объедините в функции, которые вызывайте в switch по имени задания:

function cubeSample(){
    console.log(cube(5))
}

function avg2Sample() {
    console.log(avg2(10,5))
}

function intRandomSample() {
    console.log(intRandom(10,5))
}

function sumSample () {
    console.log(sum(10,20,30))
}

function avgSample () {
    console.log(avg(10,20,30,40,100))
}

let sample = prompt("Введите название задания")
switch (sample.toLowerCase()) {
    case "cube":
        cubeSample()
        break

    case "avg2":
        avg2Sample()
        break

    case "intRandom":
        intRandomSample()
        break

    case "sum": 
        sumSample()
        break   

    case "avg": 
        avgSample()
        break
}



// Сделайте функцию inputPerson, которая будет спрашивать у пользователя фамилию, имя, отчество, и возвращать ассоциативный массив с новой персоной:

let persons = [inputPerson("Онацкий", "Владислав", "Александрович"), inputPerson("Кравич", "Владислав", "Александрович"), inputPerson("Красавчик", "Владислав", "Александрович")]
function inputPerson(S,N,F) {
    let obj = {}
        obj.name = S
        obj.surname = N
        obj.fathername = F
    return obj
}
inputPerson("Онацкий", "Владислав", "Александрович")




// Сделайте функцию inputAnything, которая в качестве параметра принимает следующую структуру:

inputStructure = [{
        prompt: "Введите Фамилию",
        default_: "",
        field: "surname"
    },
    {
        prompt: "Введите Имя", // какой текст увидит пользователь
        default_: "",   // значение по умолчанию в promt
        field: "name" // достать "name" и сделать ключем
    },
    {
        prompt: "Введите Отчество",
        default_: "",
        field: "fatherName"
    },
    {
        prompt: "Введите возраст",
        default_: "0",
        field: "age"
    },
]

// Функция с таким параметром будет выводить 4 раза prompt, с текстом из полей prompt структуры ("Введите Фамилию" и так далее), и формировать внутренний объект result с полями field (surname, name и так далее), и значениями, который введет пользователь (вернет функция prompt). default_ в структуре передается в prompt как значение по умолчанию.


function inputAnything (arr) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        if ("field" in arr[i]) {
            obj[arr[i].field] = prompt(arr[i].prompt, arr[i].default_)
        }
    }
    return obj
}
inputAnything(inputStructure)






// Сделайте обобщенную функцию сортировки массива

let persons = [{
        name: "Иван",
        age: 17
    },
    {
        name: "Мария",
        age: 35
    },
    {
        name: "Алексей",
        age: 73
    },
    {
        name: "Яков",
        age: 12
    },
]

sort(persons, "age"); //сортирует по возрасту по возрастанию
sort(persons, "name", false); //сортирует по имени по убыванию

// Функция позволяет отсортировать любой набор данных по имени поля (второй параметр). Третьим параметром идет необязательный Boolean, который в случае true делает сортировку по возрастанию, в случае false - по убыванию. По умолчанию (без третьего параметра) происходит сортировка по возрастанию.
function sort (mass) {
    
    return mass
}
sort(persons )

