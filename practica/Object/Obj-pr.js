// Сумма свойств объекта

const salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
}

function sumSalaries (obj) {
    // К массиву ключей (Object.values) применяем метод reduce, который накапливает сумму и возвращает результат сумм всех ключей
    return Object.values(obj).reduce(function (sum, current) {
        return sum + current
    })

}
sumSalaries(salaries) // 650




// Подсчёт количества свойств объекта

const user = {
    name: 'John',
    age: 30
}

function count (obj) {
    return Object.keys(obj).length
}
count(user)