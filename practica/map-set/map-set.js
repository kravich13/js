// Фильтрация уникальных элементов массива

let gosti = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"]

function unique (array) {
    // возвращает новый массив, который с помощью set оставляет лишь уникальные элементы
    return Array.from(new Set (array)) 
}
console.log(unique(gosti))




// Отфильтруйте анаграммы

let slova = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]

function aclean (arr) {
    let map = new Map() // создал коллекцию

    for (let word of arr) { // word - ключ по arr
        let sorted = word.toLowerCase().split("").sort().join("")
        map.set(sorted, word) // записали по ключу sorted значение word
    }

    return Array.from(map.values())
}
console.log(aclean(slova))


