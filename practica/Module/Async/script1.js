export function counter () {
    let i = 1

    return function () {
        return console.log(`Количество вызовов функции: ${i++}`)
    }
}
counter = counter()
