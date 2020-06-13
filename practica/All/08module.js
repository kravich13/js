// 1) Написать функцию, которая будет принимать объект и создавать из него массив в котором пары ключ-значения будут идти по очереди (четные - ключи, нечетные - значения)

const obj = {
    foo: 1,
    bar: null,
    baz: undefined
}

function objectToPairs (object) {
    const arr = []

    for (let key in object) {
        arr.push(key)
        arr.push(object[key])
    }

    return arr
}
objectToPairs(obj) // возвращает ['foo', 1, 'bar', null, 'baz', undefined]




// 2) Функция должна преобразовывать объект в два массива ключей и значений и возвращать объект с двумя массивами:

const obj = {
    foo: 1,
    bar: null,
    baz: undefined
}

function objectSplit (object) {

    const newObj = {}

    newObj.keys = Object.keys(object)
    newObj.values = Object.values(object)

    return newObj
}
objectSplit(obj) // {keys: ['foo', 'bar', 'baz'], values: [1, null, undefined]}
