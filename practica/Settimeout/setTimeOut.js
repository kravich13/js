let timerOne = setInterval(() => console.log(('число')), 100);
setTimeout(() => {
    clearInterval(timerOne);
}, 12500);


function timeOne() {
    let timerTwo = setInterval(() => console.log(('число')), 150);
    setTimeout(() => {
        clearInterval(timerTwo);
    }, 5000);
}
setTimeout(timeOne, 12500)




function printNumbers (from, to) {
    let current = from 
    let timeId = setInterval(function() {
        console.log(rulsNumb[current])

        if (current == to) {
            current = 0
        }

        setTimeout(() => {
            clearInterval(timeId)
        }, 10000)

        current++ // вывели число 0 и после этого нарастили его до 1 и т.д.

    }, 100); // время, через которое будет появляться каждое число начиная от первого
}
printNumbers(0, 36)


let rulsNumb = [2,25,17,34,6,27,13,36,11,30,8,32,10,5,24,16,33,1,20,14,31,9,22,18,29,7,28,12,35,3,26,0,32,15,19,4,21]


let timerId = setTimeout(tick, 100)

setTimeout(() => {
    clearTimeout(timerId)
}, 10000)

function tick() {
    console.log("тут")
    timerId = setTimeout(tick, 100) 
}



function printNumbersTwo (timeGlobal, localTime) {

}
printNumbersTwo (10000, 50)



let rulsNumb = [2,25,17,34,6,27,13,36,11,30,8,32,10,5,24,16,33,1,20,14,31,9,22,18,29,7,28,12,35,3,26,0,32,15,19,4,21]

function printNumbers() {
    let timerId, i = 0

    setTimeout(() => clearInterval(timerId), 10000)

    timerId = setInterval(() => {
        console.log(rulsNumb[i++])

        if (i === rulsNumb.length) {
            i = 0
        }

    }, 100)
}

printNumbers()

  

let rulsNumb = [2,25,17,34,6,27,13,36,11,30,8,32,10,5,24,16,33,1,20,14,31,9,22,18,29,7,28,12,35,3,26,0,32,15,19,4,21]

function printNumbersTwo (timeGlobal, timeLocal) {
    let localTime = timeLocal
    i = 0

    let timerId = setTimeout(function tick() {
        console.log(rulsNumb[i++])
        timerId = setTimeout(tick, 2000)

        if (i === rulsNumb.length) {
            i = 0
        }

    }, 10000)

}
printNumbersTwo (10000, 50)






// 1) Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Используя setInterval.

function printNumbers (from, to) {
    let current = from

    let timeId = setInterval(function () {
        console.log(current)
        current++

        if (current > to) clearInterval(timeId)
    }, 1000)
}
printNumbers(7, 13)


// Используя рекурсивный setTimeout.

function printNumbers (from, to) {
    let current = from

    setTimeout (function run () {
        console.log(current) 
        current++

        if (current <= to) setTimeout(run, 1000)

    }, 1000)
}
printNumbers(7, 13)

