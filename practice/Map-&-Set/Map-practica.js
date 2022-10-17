// Неважен тип данных в ключах, true - ключ, строка - значение

const map = new Map()

map.set("money", true)
map.set(true, "brain")

map.get("money") // true
map.get(true) // brain





// Объекты в качестве ключей

const vlad = { name: "Vlad" }

const personNumber = new Map()

personNumber.set(vlad, "13") // ключ - vlad (объект), значение 13

personNumber.get(vlad) // 13
personNumber // Object { name: "Vlad" } → "13"





// Перебор Map

const recipeMap = new Map([
    ["vlad", 22],
    ["kravich", 13],
    ["maks", 27]
])

for (let name of recipeMap.keys()) console.log(name)
// // vlad, kravich, maks - перебор строк


for (let age of recipeMap.values()) console.log(age)
// 22, 13, 27


for (let all of recipeMap) console.log(all)
// [ "vlad", 22 ], [ "kravich", 13 ], [ "maks", 27 ]


// forEach для Map

recipeMap.forEach( (value, key, map) => {
    console.log(`${key}: ${value}`)
    // vlad: 22, kravich: 13, maks: 27
})





// Object.fromEntries: сделать из массива Map объект

const prices = Object.fromEntries([
    ["Vlad", 22],
    ["Maks", 27],
    ["Kravich", 14]
])

prices // Object { Vlad: 22, Maks: 27, Kravich: 14 }


// Есть данные в мап, которые надо передать в код, который ждёт объект, вот что можно сделать:

const map = new Map()

map.set("Vlad", 22)
map.set("Maks", 27)
map.set("Kravich", 14)

const obj = Object.fromEntries(map.entries())

obj // Object { Vlad: 22, Maks: 27, Kravich: 14 }


