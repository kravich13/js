// Создать итератор, который запоминает своё положение в функции и возвращает объект с полями done и value.

const name = ["Vlad", "Kravich", "22 years"]

function iterator (arr) {
    let index = 0 // текущее число

    return { // возвращает объект
        next: function () {
            if (index < arr.length) { // если число меньше длинны массива, выдать arr[index]
                return { value: arr[index++], done: false }
            }
            return { done: true }
        }
    }
}

const it = iterator(name)

console.log(it.next().value) // вернёт первый индекс массива
console.log(it.next().value) // вернёт второй индекс массива
console.log(it.next().value) // вернёт третий индекс массива

// т.е. каждый вызов next() запоминает своё положение и выдаёт следующий результат

