// 	Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да', а если нет - выведите 'нет'. 
var arr = [1, 2, 3, 4, 6, 7, 8, 9, 10]
var isPresent = false // создаем переменную с булевским значением false
for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 5) {
        console.log("Да")
        isPresent = true // в проверку в цикле вписываем переменную со значением true. Если сработает - выход из цикла и всё
        break
    }
}
if (isPresent == false) { // если true не присваивалось - произойдет эта проверка и скажет "нет"
    console.log("Нет")
}

// 	Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы. То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30. Если число не делится - выведите 'false', а если делится - выведите 'true'. 
function isSimple(number) {
    var is = true
    for (var i = 2; i < number / 2; i++) {
        if (number % i == 0) {
            is = false
            break
        }
    }
    return is
}
if (isSimple(14) == true) {
    console.log("Простое число")
} else {
    console.log("Составное число")
}

//  Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'. 
var arr = [1, 2, 3, 4, 5, 5, 6, 6, 7, 8, 9, 9]
// debugger
for (var i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) { // ГЛАВНОЕ ЧТОБЫ [I + 1] БЫЛО ЧИСЛОМ И ОНО БУИТ РАБОТАТ
        console.log(`да, число: ${arr[i]}`)
    }
}

//  Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее. 
function pyramida(symbol, number) {
    var arr = []
    for (var i = 0; i < number; i++) {
        arr[i] = ""
        for (var j = 0; j <= i; j++) {
            arr[i] += symbol
        }
    }
    return arr
}
pyramida("x", 5)

function pyramida(str, number) {
    var arr = [str] // руками добавляем первый символ 
    for (var i = 1; i < number; i++) { // начинаем первую итерацию с 1-о индекса (0 уже есть)
        arr[i] = arr[i - 1] + str // в первый индекс присваиваем индекс -1 (нулевой т.е) + символ
    }
    return arr
}
pyramida("x", 5)

// Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее. 
var arr = []
for (var i = 0; i < 9; i++) {
    arr[i] = i + 1 + ""
    for (var j = 1; j <= i; j++) {
        arr[i] += (i + 1) + ""
    }
}
console.log(arr)

//  Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x']. Показать решение.
function arrayFill(str, number) {
    var arr = []
    for (var i = 0; i < number; i++) {
        arr[i] = str
    }
    return arr
}
arrayFill("x", 5)

// Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти. 
var arr = [1, 6, 3, 9, 6, 6, 8, 2]
var summ = 0
var num = 0
for (var i = 0; i < arr.length; i++) {
    summ += arr[i]
    num = i
    if (summ >= 10) {
        console.log(summ)
        break
    }
}
console.log(num)

// Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
var arr = [
    [1, 2, 3],
    [4, 5],
    [6]
]
var summ = 0
// debugger
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) { // длинна каждого многомерного массива
        summ += arr[i][j] // добавляет каждую строку всего многомерного массива поочередно
    }
}
console.log(summ)

// 	Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным. Показать решение.
var arr = [
    [
        [1, 2],
        [3, 4]
    ],
    [
        [5, 6],
        [7, 8]
    ]
]
var summ = 0
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        for (var k = 0; k < arr[i][j].length; k++) {
            summ += arr[i][j][k]
        }
    }
}
console.log(summ)

// Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false. 
function isNumberInRange (number) {
    if (number > 0 && number < 10) {
        return true
    }
    else {
        return false
    }
}
console.log(isNumberInRange(2))

// 	Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи. 
var arr = [1,15,20,10,3,99]

function isNumberInRange (number) {
    if (number > 0 && number <= 10) {
        return true
    }
    else {
        return false
    }
}

var newArr = []
for (var i = 0; i < arr.length; i++) {
    if (isNumberInRange(arr[i])) { // если функция имеет число из массива (из условий самой функции), то
        newArr.push(arr[i]) // добавляем в новый массив только числа, пройденные из функции
    }
}
console.log(newArr)

//  Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false. 
function isEven (number) {
    if (number % 2 == 0) {
        return true
    }
    else {
        return false
    }
}
console.log(isEven(2))

// Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи. 
var arr = [1,15,20,10,3,99] 

function isEven (number) {
    if (number % 2 == 0) {
        return true
    }
    else {
        return false
    }
}

var newArr = []
for (var i = 0; i < arr.length; i++) {
    if (isEven(arr[i])) { // если у функции есть четные числа, то.. записать их в новый массив на каждом цикле
        newArr.push(arr[i])
    }
}

console.log(newArr)

// Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число). 
function getDivisors(number) {
    var arr = []
    for (var i = 2; i < number / 2; i++) {
        arr[i] = i
        if (number % i) {
            arr[i] = number
        }
    }
    return arr
}
getDivisors(12)




////////////// ПРАКТИКА /////////////////////

// 1) Выведите с помощью цикла столбец чисел от 1 до 100
var numbers = 1
for (var i = 1; i < 101; i++) {
    number = i
    console.log(number)
}

// 2) Выведите с помощью цикла столбец чисел от 100 до 1
var number = 100
for (var i = 100; i > 0; i--) {
    number = i
    console.log(number)
}

// 3) Выведите с помощью цикла столбец четных чисел от 1 до 100.
var number = 0
for (var i = 2; i < 10; i += 2) {
    number = i
    if (number % 2 == 0) {
        console.log(number)
    }
}   

// 4) Заполните массив 10-ю иксами с помощью цикла.
var arr = []
for (var i = 0; i < 10; i++) {
    arr[i] = "x"
}
console.log(arr)

// 5) Заполните массив числами от 1 до 10 с помощью цикла.
var arr = []
for (var i = 0; i < 10; i++) {
    arr[i] = 0
    arr[i] += i + 1
}
console.log(arr)

// 6) Заполните массив 10-ю случайными числами (дробями) от 0 до 1 с помощью цикла. Дроби округляйте до двух знаков в дробной части. 
var arr = []
for (var i = 0; i < 10; i++) {
    arr[i] = Math.random(1)
    arr[i] = arr[i].toFixed(1) // округление до десятых
}
console.log(arr)

// 7) Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла.
var arr = []
for (var i = 0; i < 10; i++) {
    arr[i] = Math.random() * (10 - 1) + 1
    arr[i] = arr[i].toFixed(0)
}
console.log(arr)

// 8) Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.
var arr = [1,8,55,6,121]
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] < 10) {
        console.log(arr[i])
    }
}
// 9) Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5. Как только будет найден первый такой элемент - выведите 'Есть' и оборвите цикл. Если такого элемента нет - ничего не выводите.
