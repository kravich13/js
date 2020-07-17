// работа с массивом 

let styles = ["Джаз", "Блюз"]
styles[styles.length] = "Рок-н-ролл" // длинна массива 2, 2 - следующий индекс массива после 1 (Блюз)
styles[Math.floor((styles.length - 1) / 2)] = "Классика"    // длинна массива - 1 (последний индекс) / 2 = середина
styles.shift()
styles.unshift("Рэп", "Регги")




// Сумма введённых чисел

function sumInput () {
    const number = []
    let sum = 0

    while(true){
        let numbPrompt = +prompt('Etner a number:')
        if(Number.isNaN(numbPrompt) || !numbPrompt) {
            break 
        }
        number.push(numbPrompt)
    }

    for (let i = 0; i < number.length; i++) {
        sum += number[i]
    }
    return sum
}
sumInput()




// Переведите текст вида border-left-width в borderLeftWidth

function camelize (str) {
    const arr = str.split("-")
    let newStr = ""

    for (let i = 0; i < arr.length; i++) {
        newStr += arr[i][0].toUpperCase() + arr[i].slice(1) 
        // нужно записывать в переменную изменную строку сразу же, если это массив
    }
    return newStr
}
camelize("border-left-width")




// Фильтрация по диапазону

function filterRange (arr, a, b) {
    let newArr = []
    
    return newArr = arr.filter(function(elem) {
        if (elem >= a && elem <= b) {
            return true   
        }
    })
    // в новый массив записывается: arr.filter(хз чё за итем, стрелочная функция, если A <= item ИЛИ item <= b)
}
filterRange([1,2,3,4,5], 1, 3) // результат должен быть 1-3




// Фильтрация по диапазону "на месте"

function filterRangeInPlace (arr, a, b) {
    let newArr = []
    newArr = arr.filter(function(elem) {
        if (elem >= a && elem <= b) {
            return true   
        }
    })
    
    arr.length = 0 // удаляем всё содержимое
    return arr = Array.from(newArr)
}
filterRangeInPlace([1,2,3,4,5], 1, 3)




// Сортировать в порядке по убыванию
let arr = [5, 2, 1, -10, 8]

function sortNaoborot (a, b) {
    return b - a
}
arr.sort(sortNaoborot)




// Скопировать и отсортировать массив
let arr = ["HTML", "JavaScript", "CSS"]

function copySorted (arr) {
    let newArr = Array.from(arr)
    
    function sortirovka (a, b) {
        if (a < b) {
            return - 1
        }
        if (a > b) {
            return 1
        }
    }

    newArr.sort(sortirovka)
    // console.log(arr)
    return newArr
}
copySorted(arr)




// Создать расширяемый калькулятор

// Трансформировать в массив имён

let vasya = { name: "Вася", age: 25 }
let petya = { name: "Петя", age: 30 }
let masha = { name: "Маша", age: 28 }

let users = [ vasya, petya, masha ]

const newUsers = users.map(function (key) {
    return key.name
})
console.log(newUsers)





// Трансформировать в объекты

let vasya = { name: "Вася", surname: "Пупкин", id: 1 }
let petya = { name: "Петя", surname: "Иванов", id: 2 }
let masha = { name: "Маша", surname: "Петрова", id: 3 }

let users = [ vasya, petya, masha ]

const fullNameArray = users.map (function (key) {
    return { fullName: `${key.name} ${key.surname}`, id : `${key.id}` }
})
console.log(fullNameArray)




// Отсортировать пользователей по возрасту

let vasya = { name: "Вася", age: 25 }
let petya = { name: "Петя", age: 30 }
let masha = { name: "Маша", age: 28 }

let arr = [ vasya, petya, masha ]

function sortByAge (a, b) {
    return a.age - b.age
}
arr.sort(sortByAge)

console.log(arr) // 25 28 30




// Перемешайте массив

let arr = [1, 2, 3]

function shuffle (array) {
    array.sort(() => Math.random() - 0.5)
}
shuffle(arr)

console.log(arr)




// Получить средний возраст

let vasya = { name: "Вася", age: 25 }
let petya = { name: "Петя", age: 30 }
let masha = { name: "Маша", age: 29 }
let vlad = { name: "Влад", age: 22 }
let arr = [ vasya, petya, masha, vlad ]

function getAverageAge (array) {
    // обычная функция    
    let result = array.reduce(function(sum, current) {
        return sum + current.age
    }, 0) // 0 нужен, потому что иначе sum будет объект, а не число

    return result / array.length

}
getAverageAge(arr)




// Оставить уникальные элементы массива

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
]

function unique (arr) {
    const newArr = []
   
    // цикл строка в массиве
    for (let str of arr) {
        // если новый массив не содержит строку из старого, то записать в массив
        if (!newArr.includes(str)) {
            newArr.push(str)
        }
    }
   
    return newArr
}
unique(strings)










    




