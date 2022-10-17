class PowerArray extends Array {
    
    // Класс наследует от массива все его методы и таким образом this становится массивом, а не пустым объектом

    isEmpty() {

        console.log(this) // Array
        return this.length === 0
    }
}

const arr = new PowerArray(1, 2, 3, 10, 33)
arr.constructor === PowerArray // true - одно и тоже

console.log(arr.isEmpty()) // false
console.log(arr) // есть prototype Object { с классом внутри }

// класс с массивом приделываем к методу фильтр 
const filterArr = arr.filter(item => item >= 10) 
filterArr.constructor === PowerArray // true - одно и тоже

console.log(filterArr) // 10, 33
console.log(filterArr.isEmpty()) // false








class PowerArray extends Array {

    isEmpty () {
        return this.length === 0
    }

    // встроенные методы массива будут использовать этот метод как конструктор
    static get[Symbol.species] () {
        return Array
    }
}

const arr = new PowerArray(1, 2, 5, 10, 50)

console.log(arr.isEmpty()) // false
console.log(arr) // Prototype Array [], а не Prototype Object {}

const filteredArr = arr.filter(item => item >= 10)

console.log(filteredArr) // возвращает обычный массив
console.log(filteredArr.isEmpty())
