// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

// Например:

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

// Сделайте три варианта решения:

// С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.


function sumTo(n) {
    let sum = 0
    
    for (let i = 0; i < n+1; i++) {
        sum += i
    }

    return sum
}
console.log(sumTo(10))


function sumTo(n) {
    if (n == 1) {
        return n
    }
    else {
        let sum = 0
        sum = n + sumTo(n-1) // делаем знак "+" для суммы чисел
        return sum
    }
}
console.log(sumTo(10))







// Вычислить факториал

// Факториал натурального числа – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!
// Определение факториала можно записать как:

// n! = n * (n - 1) * (n - 2) * ...*1
// Примеры значений для разных n:

// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.


function factorial(n) {
    if (n == 1) {
        return n
    }
    else {
        let factor = 0
        factor = n * factorial(n-1) 
        return factor
    }
}
console.log(factorial(5))




// Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.

// Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....
// Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.
// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

// Пример работы:

// function fib(n) { /* ваш код */ }

// alert(fib(3)); // 2
// alert(fib(7)); // 13
// alert(fib(77)); // 5527939700884757


function fib (n) {
    if (n <= 1) {
        return n
    }
    else {
        let fibo = 0
        fibo = fib(n-1) + fib(n-2) // первая функция -1 плюс вторая функция -1
        return fibo
    }
}
console.log(fib(7)) // 13





// Вывод односвязного списка
// Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
}
// Напишите функцию printList(list), которая выводит элементы списка по одному.

// Сделайте два варианта решения: используя цикл и через рекурсию.


function printList(list) {
    let str = ""

    if ("value" in list) {
        str += list.value
    }
    if ("next" in list) {
        
    }
    

    return str
}
console.log(printList(list))


function printList(list) {
    console.log(list.value) 
    // console.log(list.name)
    if (list.next == null) {
        return
    }
    else {
        printList(list.next)
    }

}
printList(list)


// Сделать HTML-конструктор из деревянной структуры, которая была на прошлом занятии:

let someTree = {
    tagName: "table", //html tag
    subTags: [ //вложенные тэги
        {
            tagName: "tr",
            subTags: [{
                    tagName: "td",
                    text: "some text",
                },
                {
                    tagName: "td",
                    text: "some text 2",
                }
            ]
        }
    ],
    attrs: {
        border: 1,
        style: "color: red"
    },
}

// Для начала сделайте конструктор для верхнего уровня (в примере - table). Потом с помощью копипасты сделайте то же самое с вложенным уровнем nestedTags (tr). Аналогично для уровня td.
// Конструктор должен поддерживать вложенность до 3его уровня (как в примере). В результате работы конструктора из примера выше должен получиться следующий HTML(в строке str):

{/* <table border=1>
    <tr>
        <td>some text</td>
        <td>some text 2</td>
    </tr>
</table> */}

// Переносы строк и отступы в результате не принципиальны, главное - структура HTML Проверьте ваш код на других структурах.

function table (obj) {
    let str = `<${obj.tagName}`

    if ("attrs" in obj) {
        for (var key in obj.attrs) {
            str += ` ${key}="${obj.attrs[key]}"`
        }
    }
    
    str += ">"
 
    if ("text" in obj) {
        str += `${obj.text}`
    }
    // debugger
    if (obj.hasOwnProperty('subTags') == true) {
        for (let i = 0; i < obj.subTags.length; i++)  {
            str += table(obj.subTags[i])
        }
    }
    else {
        return str += `</${obj.tagName}>`
    }

    str += `</${obj.tagName}>`
    return str

}
document.write(table(someTree))






