// Сумма с помощью замыканий

function sum (a) {
    return function (b) {
        return a + b
    }
}
sum(1)(2)  // 3
sum(5)(-1) // 4





// Фильтрация с помощью функции

let arr = [1, 2, 3, 4, 5, 6, 7]

function inBetWeen (a, b) {
    return function (x) {
        return a <= x && x <= b // x - содержимое индекса массива
    }
}

function isArray (array) {
    let i = 0
    return function (x) {
        i++
        return array.includes(x)
    }
}
arr.filter(inBetWeen(3,6)) // 3-6
arr.filter(isArray([1,2,10])) // 1-2




// Сортировать по полю

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
]

function byField (field) {
    return function (a, b) {
        if (isNaN(a[field]) && isNaN(b[field])) { 
            if (a[field] < b[field]) {
                return -1
            }
            else {
                return 1
            }
        }
        else {
            return a[field] - b[field]
        }
    }
}

users.sort(byField('name'))
users.sort(byField('age'))




// Армия функций

function makeArmy () {
    let shooters = []

    for (let i = 0; i < 10; i++) {
        let shooter = function() { // функция shooter
            console.log(i) // должна выводить порядковый номер
        }
        shooters.push(shooter)
    }

    return shooters
}

let army = makeArmy()

army[0]() // 0 солдат




// Установка и уменьшение значения счётчика

function makeCounter () {
    let count = 0

    function counter () {
        // counter.decrease = count--
        return count++
    }
    
    counter.decrease = function () {
        return count--
    }

    counter.set = function (val) {
        return count = value
    }

    return counter
}

let counter = makeCounter()


counter() // сначала 0, потом 1, а на 3-й итерации после decrease - -1 и только после +1
counter.decrease() // сначала 2, потом 1
counter.set(value)




// Сумма с произвольным количеством скобок

function sum (a) {
    let sumCurrent = a // записывается А число

    function f (b) { // создается функция с числом Б
        sumCurrent += b // к А прибавляется Б
        return f // возвращается сама функция
    }

    // f.toString = function () {
    //     return sumCurrent
    // }

    return f
}
console.log(sum(10)(3)(4))