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

// slow = cashingDecorator(slow) 
slow = numbersOfCalls(slow)
 
slow(3) 
slow(3) 





// Метод call для this для передачи контекста

function hello () {
    console.log(`Привет ${this.name}`) // this-ом является переданный в метод call передаваемый объект
}

const vlad = { name: "Vlad" }
const maks = { name: "Maks" }

hello.call(vlad) // Привет Vlad
hello.call(maks) // привет Maks


// Передача контекста в саму функцию

function say (text) {
    console.log(`${this.name}: ${text}`) // this-ом является переданный в метод call объект kravich
}

const kravich = { name: "Kravich" }

say.call( kravich, "выучил?") // Kravich: выучил?



// Использование контекста для передачи в объект с разными функциями (методами): 

const worker = {
    someMethod () {
        return 1
    },

    slow (x) {
        console.log(`Вызывается с числом: ${x}`)
        return x * this.someMethod() // число умножаем на 1
    }
}

function cashingDecorator (func) {
    const map = new Map()

    return function (x) {
        if (map.has(x)) return `Число ${map.get(x)} уже было`// вернуть число обратно и выйти из функции

        console.log(this) // this - worker
        const result = func.call( this, x ) // 
        map.set(x, result)

        return result
    }
}

worker.slow = cashingDecorator(worker.slow)

worker.slow(2) // вызывается с числом: 2
worker.slow(2) // число 2 уже было





// Использования декораторов с несколькими аргументами с func.apply

const worker = {
    slow (min, max) {
        console.log(`Вызывается с числами ${max} и ${min}`)
        return min + max
    }
}

function cashingDecorator (func, hash) {
    const map = new Map() 

    return function () {
        const key = hash(arguments)

        if (map.has(key)) return `Результат ${map.get(key)} уже был`

        const result = func.call(this, ...arguments)

        map.set(key, result)

        return result
    }
}

function hash (args) {
    return `${args[0]}, ${args[1]}`
}

worker.slow = cashingDecorator(worker.slow, hash)

worker.slow(13, 17)






// Заимствование методов, передача любого количества параметров для хеширования

function hash () {
    return [].join.call(arguments)
}
hash(1,2,3,4,5,6)

