// Декоратор-шпион

function work(a, b) {
    console.log(a + b) // произвольная функция или метод
}

function spy (func) {
    console.log(func)
}

work = spy(work)

work(1, 2) // 3
work(4, 5) // 9

for (let args of work.calls) {
    console.log('call:' + args.join()) // "call:1,2", "call:4,5"
}






///////////////


function slow(x) { // создали функцию slow с параметром x 
    console.log(`Called with ${x}`) // вывели
    return x // вернули входной параметр
}

function cachingDecorator(func) {
    let cache = new Map() // создали коллекцию

    return function (x) { // вернули функцию с параметром x (what)
        if (cache.has(x)) {  // если коллекция возвращает true с параметром x
            return cache.get(x) // вернуть значение x 
        }

        let result = func(x) // если false, то записываем func с параметром x 

        cache.set(x, result) //  записываем по ключу параметр x значение result (what)
        return result // вернуть функцию
    }
}

slow = cachingDecorator(slow) // вызываем функцию обёртку

console.log(slow(1)) // вывели число 1
console.log("Again: " + slow(1)) 

console.log(slow(2))
console.log("Again: " + slow(2))