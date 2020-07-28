// Set позволяет узнать повторялись ли пользователи на текущей вечеринке =)

const set = new Set()

const vlad = { name: "Vlad" }
const maks = { name: "Maks" }
const kravich = { name: "kravich" }

set.add(vlad)
set.add(maks)
set.add(kravich)
set.add(vlad) // повтор
set.add(maks) // повтор


set.size // 3 - все 3 пользователя, а не 5

for (let user of set) console.log(user.name) 
// Vlad, Maks, Kravich





// Перебор объекта Set

const set = new Set(["Vlad", "Maks", "Kravich"])

for (let value of set) console.log(value) // Vlad, Maks, Kravich

// тоже самое с forEach
set.forEach( (value, valueAgain, set) => {
    console.log(value) // тоже самое
})
