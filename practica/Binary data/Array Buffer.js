// корневой объект, необработанные бинарные данные
const buffer = new ArrayBuffer(16) // буфер длинной 16 байт
console.log(buffer.byteLength) // 16

buffer.byteLength = 20
console.log(buffer.byteLength) // 16 - изменение невозможно





// Для любых действий с этим объектом нужно использовать views
let view = new Uint32Array(buffer)
console.log(Uint32Array.BYTES_PER_ELEMENT) // 4 байта на каждое целое число

console.log(view.length) // 4, именно столько чисел сейчас хранится в буфере
console.log(view.byteLength) // 16, размер содержимого в байтах

view[0] = 123456

for (let num of view) console.log(num) // 12345, затем 0 три раза











// 1) Соедините типизированные массивы

function concat (arrays) {
    const result = []
    // let strNumb = ""
    
    for (let array of arrays) {
        for (let elem of array) {
            result.push(elem)
        }
    }
    
    return new Uint8Array(result)

}

let chunks = [
    new Uint8Array([0, 1, 2]),
    new Uint8Array([3, 4, 5]),
    new Uint8Array([6, 7, 8])
];

console.log(Array.from(concat(chunks))); // 0, 1, 2, 3, 4, 5, 6, 7, 8
console.log(concat(chunks).constructor.name); // Uint8Array



