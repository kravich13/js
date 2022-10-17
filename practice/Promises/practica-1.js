// Из массива ссылок на скрипты сделать вызовы этих самых скриптов с помощью промисов

const urls = ['https://learn.javascript.ru//article/promise-chaining/one.js', 'https://learn.javascript.ru//article/promise-chaining/two.js', 'https://learn.javascript.ru//article/promise-chaining/three.js']

zapuskScript(urls)

function zapuskScript (arrUrls) {
    
    return Promise.all (arrUrls.map( function (elem) { // вернули один промис из массивов промисов
        return new Promise( (resolve, reject) => { // вернули вместо ссылок промисы
            const script = document.createElement("script")
            script.src = elem
            
            document.body.append(script)

            script.onload = () => resolve(script)
            script.onerror = () => reject( new Error(`Ошибка загрузки скрипта ${elem}`))
        })        
    }))
    // сделали вызовы функций с помощью then.
    // вызывать их можно в каком угодно порядке, потому что всё загрузилось параллельно
    .then (() => one()) // вызывается ровном в том порядке, в котором вызваны .then
    .then (() => three())
    .then (() => two())
}




// Из массива ссылок на скрипты сделать вызовы этих самых скриптов с помощью промисов на await

const urls = ['https://learn.javascript.ru//article/promise-chaining/one.js', 'https://learn.javascript.ru//article/promise-chaining/two.js', 'https://learn.javascript.ru//article/promise-chaining/three.js']

qq()
async function qq () {
    await downloadArrScriptUrls(urls)
    one()
    two()
    three()
}

function downloadArrScriptUrls (arrUrls) {
    
    return Promise.all (arrUrls.map (async function (elem) {

        const script = document.createElement("script")
        script.src = elem
        document.head.append(script)

        await new Promise ( (resolve, reject) => {
            script.addEventListener('load', () => resolve(script))
            script.addEventListener('error', () => reject(new Error(script)))
        })
    }))
}




// запуск одиночного скрипта из ссылки

const urls = ['https://learn.javascript.ru//article/promise-chaining/one.js', 'https://learn.javascript.ru//article/promise-chaining/two.js', 'https://learn.javascript.ru//article/promise-chaining/three.js']


parallelnayaZagruzka(urls)
    .then( () => one() )
    .then( () => two() )
    .then( () => three() )

function parallelnayaZagruzka (arrUrl) {
    return Promise.all (arrUrl.map (function (elem) {
        return zagruzkaOdnogoScriptaNaStranicu(elem)
    }))
}

async function zagruzkaOdnogoScriptaNaStranicu (url) {

    const script = document.createElement('script')
    script.src = url
    document.head.append(script)

    await new Promise ( (resolve, reject) => {
        script.addEventListener('load', () => resolve(script))
        script.addEventListener('error', () => reject(new Error(script)))
    })
}




// Цепочка промисов в цикле

const urls = ['https://learn.javascript.ru//article/promise-chaining/one.js', 'https://learn.javascript.ru//article/promise-chaining/two.js', 'https://learn.javascript.ru//article/promise-chaining/three.js']


posledovatelnayaZagruzka(urls)
    .then ( () => {
        one()
        two()
        three()
    })

async function posledovatelnayaZagruzka(arrUrl) {
    for (let i = 0; i < arrUrl.length; i++) {
        await zagruzkaOdnogoScriptaNaStranicu(arrUrl[i])
    }
}




// Написать функцию, которая принимает функцию, задержку в мс и набор параметров. Возвращает промис, который после переданной задержки вызывает функцию с параметрами. К этой функции можно будет вещать зены с обработчиками.

function hello () {
    return console.log("hello glad")
}

function inviteFunc (fn, ms, ...args) {
    return new Promise ( (resolve, reject) => {
        setTimeout( () => {
            fn(args)
            console.log(args) // здесь массив из null и "str"
            resolve("всё окей")
        }, ms)
    })
}
inviteFunc(hello, 2000, null, "str")
.then (
    result => console.log(result)
)




const p = Promise.resolve(1)

p.then(value => {
    console.log('1st ', value);
    return value + 1;
}).then(value => {
    console.log('2nd ', value);
})

p.then(value => {
    console.log('3rd ', value);
    return value + 2
}).then(value => {
    console.log('4th ', value)
})

p.then(value => {
    console.log('5th ', value)
    return value + 3
}).then(value => {
    console.log('6th ', value)
}).catch(err => console.errror(err))







// функция задержки передаваемой функции с возвратом передаваемых параметров 

const delays = [2000, 3000, 1000]

zaderjka (viewArrMs, 2000, delays)
    .then(result => console.log(result)) // вернёт переданные параметры из передаваемой функции


function zaderjka (fn, ms, ...args) { // функция задержки вызова передаваемой функции

    // возвращаем промис, в котором лежит таймаут с вызовом передаваемой функции внутри
    // промис ждёт, пока выполнится таймаут и после этого возвращает результат
    return new Promise ( (resolve) => {
        setTimeout(() => {  
            resolve( fn(...args))
        }, ms)
    })
}

function viewArrMs (...args) {
    return args
}





// Вывести элементы массива через указанные в них промежутки в мс. Решение в лоб.

const delays = [2000, 3000, 1000]

viewArrMs(delays)

async function viewArrMs (arr) {

    for (const ms of arr) {
        const result = await new Promise ( (resolve) => {
            setTimeout( () => {
                resolve(ms)
            }, ms)
        })
        console.log(result)
    }
}





// Вывести элементы массива через указанные в них промежутки в мс. Более правильное решение.

const delays = [2000, 3000, 1000]

loopDelays(delays)

async function loopDelays (delays) { // передаваемый параметр - массив задержек
    for (const ms of delays) { // делается цикл, где ms - содержимое индекса массива
        await zaderjka( // await ждёт выполнение вызываемой функции
            text => console.log(text), // функцию вызвать
            ms, // задержка
            ms // параметры для функции (тут один)
        )
    }
}

function zaderjka (fn, ms, ...args) { // функция задержки вызова передаваемой функции

    // возвращаем промис, в котором лежит таймаут с вызовом передаваемой функции внутри
    // промис ждёт, пока выполнится таймаут и после этого возвращает результат
    return new Promise ( (resolve) => {
        setTimeout(() => {  
            resolve( fn(...args))
        }, ms)
    })
}