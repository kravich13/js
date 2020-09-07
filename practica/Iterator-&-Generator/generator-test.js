// Работает как итератор, но запись гораздо короче

const name = ["Vlad", "Kravich", "33 years"]

function* generatorArr (arr) {
    for (let index of arr) {
        yield index
    }
}

const gen = generatorArr(name)

console.log(gen.next().value) // Vlad
console.log(gen.next().value) // Kravich
console.log(gen.next().value) // 33 years




// Псевдослучайный генератор

function* pseudoRandom (seed) {
    let numbSave = seed

    while (true) {
        numbSave = numbSave * 16807 % 2147483647
        yield numbSave 
    }

}

const generator = pseudoRandom(1)

console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)









