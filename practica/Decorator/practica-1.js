// Закешировать (запомнить) результат функции с одним параметром и при кешировании - выдать результат

function slow (n) {
    return n * 13
}

function cashingDecorator (func) { // запоминание прошлых параметров
    const map = new Map()

    return function (n) {

        // если ключ N присутствует в коллекции - вернуть N
        if (map.has(n)) return `Число ${map.get(n)} уже есть`

        const result  = func(n) // вызов функции в переменную

        map.set(n, result) // записали в key - число, а в value - вызов функции
        
        return result // вернуть результат вызова функции
    }
}

function numbersOfCalls (func) { // количество вызовов функции
    
    let numbCalls = 0
    
    const map = new Map()

    return function (n) {

        numbCalls++

        const result = func(n)

        map.set(n, result)
        
        return `Количество вызовов функции ${func.name}: ${numbCalls}`
    }
}

slow = cashingDecorator(slow) 
slow = numbersOfCalls(slow)
 
slow(3) 
slow(3) // Число 39 уже есть