// 1) Декоратор-шпион

function work (a, b) {
    console.log(a + b); // произвольная функция или метод
}

function spy (func) {
    // -___-
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
    console.log('call:' + args.join()); // "call:1,2", "call:4,5"
}





// 2) Задерживающий декоратор

function f (x) {
    console.log(x);
}

function delay (func, ms) {
    return function () {
        setTimeout(() => func.apply(this, arguments), ms)
    }
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс






// Запомнить параметр и количество вызовов

function f (x) {
    return console.log(x * 13)
}


function saveArg (func) {

    const obj = {}
    let i = 1

    return function (x) {

        console.log(`Количество вызовов функции ${func.name}: ${i++}`)

        if (obj[x] === x) {
            return `Значение ${x} уже было`
        }

        obj[x] = x
        return func(x) 
    }
}

f = saveArg(f)

f(13)


