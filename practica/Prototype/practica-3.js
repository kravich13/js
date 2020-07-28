// 1) Добавить функциям метод "f.defer(ms)"

function f () {
    console.log("Vlad Kravich")
}

Function.prototype.defer = function (ms) { // в прототипы всех функций добавил метод defer
    setTimeout(this, ms) // this - f()
}


f.defer(1000) // выведет "Hello!" через 1 секунду





// Добавьте функциям декорирующий метод "defer()"

function f (a, b) {
    return console.log(a + b)
}

Function.prototype.defer = function (ms) {
    const f = this

    return function (...args) { 
        
        setTimeout(() => f.apply(this, args), ms) 
        // apply: первый параметр сама функция, второй - массив из передаваемых параметров для f()
    }
}

f.defer(1000)(7, 6) // выведет 13 через 1 секунду.