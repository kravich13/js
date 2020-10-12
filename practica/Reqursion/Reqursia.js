// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

function sumTo(n) {
    let sum = 0
    
    for (let i = 0; i < n+1; i++) {
        sum += i
    }

    return sum
}
console.log(sumTo(10))



function sumTo(n) {
    if (n === 1) return n
    
    let sum = 0
    return sum = n + sumTo(n - 1)
}
sumTo(13) // 91




// Вычислить факториал

function factorial (n) {
    if (n === 1) return n 

    let sum = 0
    return sum = n * factorial(n - 1)
}
factorial(13) // 6227020800




// Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.

function fib (n) {
    if (n <= 1) return n

	let sum = 0
	return sum = fib (n - 1) + fib ( n - 2)
}
fib(7) // 13




// Вывод односвязного списка
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

function printList (obj) {
	console.log(obj.value) // вывод value сразу
	if (obj.next === null) return  // если есть null в next - return

	return printList (obj.next) // рекурсия: если первое условие не сработало, тогда вызов объекта next
}
printList(list) // 1, 2, 3, 4




// Вывод односвязного списка в обратном порядке

function printList (obj) {
	if (obj.next) { //  если есть obj.next
        printList(obj.next) // вызываем рекурсию 
    }

    console.log(obj.value) // выводим value
}
printList(list) // 4, 3, 2, 1




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

// function table (obj) {
//     let str = `<${obj.tagName}`

//     if ("attrs" in obj) {
//         for (let key in obj) {
//             str += ` ${key} = "${obj.attrs[key]}"`
//         }
//     }
//     str += ">"

//     return str
// }
// table(someTree)

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






