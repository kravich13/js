// флаг g вернёт массив ВСЕХ совпадений

let str = "Vlad Kravich Играл в самп 5 лет и играЛ в л2 ещё 5 лет"
str.match(/играл/gi) // Array [ "Играл", "играЛ" ]



// без флага g вернёт только первое совпадение в виде массива, в котором по индексу 0 находится совпадение и есть свойства доп. инфы о нём

let str = "Vlad Kravich Играл в самп 5 лет и играЛ в л2 ещё 5 лет"

const result = str.match(/играл/i) 
result // Array [ "Играл" ]
result.index // 13
result.input // вся строка str



// без совпадений вернётся null

let matches = "Kravich".match("Defo") || []

if (!matches.length) console.log("нет совпадений")




// str.replace(regexp, replacement) заменяет совпадение с rexexp в строке str на replacement

console.log("Vlad Kravich, None Kravich, none Kravich".replace(/none/i, "Max"))
// заменяет ПЕРВОЕ none на Max
// Vlad Kravich, Max Kravich, none Kravich

console.log("None Kravich, none Kravich".replace(/none/ig, "Max"))
// флаг ig заменяет ВСЕ строки none в строке на Max
// Max Kravich, Max Kravich




// Спецсимволы (не все)

// $& - вставляет текст после найденного совпадения
console.log("Я играл".replace(/играл/i, "$& в SAMP")) // Я играл в SAMP


// $` - вставляет часть строки до совпадения и удаляет это совпадение
console.log("Я в SAMP".replace(/я/i, "$` Был админом")) // Был админом в SAMP


// $' - вставляет часть строки после совпадения
console.log("Я в SAMP".replace(/в/i, "$' Был админом")) // Я SAMP Был админом SAMP





// regexp.test(str) проверяет, есть ли хоть одно совпадение, если да, то возвращает true, иначе false.
let str = "Я Был крутым гладом"
let regexp = /был/i

regexp.test(str) // true

