// 1) Сделать цикл с prompt, который прерывается по нажатию OK и продолжается по нажатию Отмена

for (var i = 0; i < 999; i++) {
    i = prompt ("нажми на отмену и цикл продолжится")    
    if (i == null) {    // при нажатии на отмену сработает continue 
        continue
    }
    else {
        break
    }
}

// 2) Сделать бесконечный цикл, который прерывается с помощью конструкции break, когда Math.random() > 0.9. Подсчитать количество итераций и вывести это число с помощью alert

function number () {
    var quantity = 0
    for (var i = 0; i < Infinity; i++) { // делаем цикл
        i = Math.random() * (1 - 0) + 0     // в цикл пишем random
        console.log(i)
        quantity++
        if (i > 0.9) {  // если рандом больше, чем 0.9 - прерываем цикл
            console.log(`Произведено ${quantity} операций`)
            break
        }
    }
    return quantity
}
number ()

// 3) Сделать цикл с prompt, который прерывается по нажатию OK и продолжается по нажатию Отмена и вывести пустое тело

for (var i = 0; i < 999; i++) {
    i = prompt ("нажми на отмену и цикл продолжится")    
    if (i == null) {    // при нажатии на отмену сработает continue 
        continue
    }
    else {
        while (prompt ("Break?") == null) {
        }
    }
}


// 4) Подсчитать сумму арифметической прогрессии от 1 до N используя цикл for.

function theAmount (input, lenght, index) { // функцию с тремя параметрами: входное число, длинна, шаг прогрессии
    var sum = 0 // создаём переменную сумму, в которую будем записывать сумму складывания чисел в цикле
    var nextNumber = input  // создаём переменную следующее число, в которую сохраняем входное число
    for (var i = 0; i < lenght; i++) {  // делаем цикл с длинной шага 
        console.log(nextNumber) // выводим в консоль следующее число (в цикле)
        sum = nextNumber + sum  // в сумму присваиваем следующее число + предыдущее
        nextNumber = nextNumber + index // в следующее число присваиваем следующее число + шаг прогрессии
    }
    console.log(sum)    // выводми в консоль сумму прогрессии
    return sum  // возвращаем сумму
}
theAmount (1,10,2)  // сумма 100

// вариант два
function progress (first, end, shag) {
    let one = first
    for (let i = one; i < end; i++) {
        console.log(i)
        i += shag - 1
        if (i > end) {
            break
        }
    }
    
    return 
}
progress(1,10,2)




// 6) Сформировать строку " # # # # # " с помощью цикла for

var lattice = " "
for (var i = 0; i < 5; i++) {
    lattice += "# "
}
console.log(lattice)


// 7) Сформировать строку "34567890" с помощью цикла for

var number = "" // переменная с пустой строкой
for (var i = 3; i <= 10; i++) { // цикл от 3 до 10
    number = number + (i % 10)  // в переменную присваиваем i % 10 и получаем 0
}
console.log(number)

// разряды / остаток от деления

console.log(123456 % 1000) // остаток 456
console.log(123456 % 100) // остаток 56
console.log(123456 % 10) // остаток 6

10 % 5 // остаток 0
12 % 5 // остаток 2
17 % 5 // остаток 2



// 8) Сформировать строку c помощью вложенных циклов. Для перевода строки используйте \n. 

var number = ""
for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        number += j
    }
    number += "\n"
}
console.log(number)


// 9) Сформируйте строку с шахматной доской из вложенных циклов. Для перевода строки используйте \n. Код должен поддерживать легкое изменение размеров доски. 

var tochka = ""
for (var i = 0; i < 10; i++) { // кол-во строк вниз
    for(var j = 0; j < 8; j++) { // кол-во строк вправо
        if (i % 2 == 0) { // если остаток 0 от i, то...
            if (j % 2 == 0) {
                tochka += "."
            }
            else {
                tochka += "#"
            }
        }
        else {
            if (j % 2 == 0) {
                tochka += "#"
            }
            else {
                tochka += "."
            }
        }
    }
    tochka += "\n" // перевод строки
}
console.log(tochka)


// 10) Сформируйте массив из N элементов, содержащий в себе квадраты индексов, т. е: [0,1,4,9,16...] 
var arr = []
for (var i = 0; i < 10; i++) {
    arr[i] = i ** 2
}
console.log(arr)

// 11) C помощью вложенного цикла сформируйте массив массивов "таблица умножения".
var arr = []
var tab 
function table(X) {
    for (var i = 0; i < X; i++) {
        arr[i] = []
        for (var j = 0; j < X; j++) {
            arr[i][j] = (i + 1) * (j + 1) // делаю счетчики +1, чтобы не было 0*1 и т.д и таблица отображалась корректно
        }
    }
    return arr
}
tab = table(5)

// 12) Сделайте вложенный цикл, который формирует HTML-таблицу из любого двумерного массива. Т. е. если в нём использовать результат работы предыдущего задания, то получится таблица умножения HTML, как на занятии;

function tableTwo (table) {
var str = "<table> "
for (var i = 0; i < table.length; i++) { // количество строк в массиве table
    str += " <tr> " // прибавляем 5 tr на каждую строку
    for (var j = 0; j < table[i].length; j++) { // конкретная строка 
        str += " <td> " + tab[i][j] + " </td> "
    }
    str += " </tr> " // закрываем tr перед table 
    }
    str += " </table>"
    console.log(str)
    return str
}
document.write(tableTwo(tab))



// 13) Задание на синий пояс: Треугольник

function pyramid(number) {
    var str = ""
    var num = ((number - 1) / 2) * 2 
    var arr = []
    arr[0] = num    // присваиваем середину (в будущем левый индекс)
    arr[1] = num    // присваиваем середину (в будуем правый индекс)

    for (var i = 0; i < number; i++) {
        for (var j = 0; j < number * 2 - 1; j++) {
            if (j >= arr[0] && j <= arr[1]) {
                str += "#"
            }
            else {
                str += "."
            }
        }
        arr[0]--
        arr[1]++
        str += "\n"
    }
    return str
}
console.log(pyramid(11))








//  Выведите с помощью цикла столбец чисел от 1 до 100.

var str = 0
for (var i = 0; i < 10; i++) {
    str++
    console.log(str)
}


//  Выведите с помощью цикла столбец чисел от 100 до 1

var str = 11
for (var i = 0; i < 10; i++) {
    str--
    console.log(str)
}

// Выведите с помощью цикла столбец четных чисел от 1 до 100

var str = 0
for (var i = 0; i < 10; i++) {
    str++
    if (str % 2 == 0) {
        console.log(str)
    }
}

// Заполните массив 10-ю иксами с помощью цикла

var arr = []
for (var i = 0; i < 10; i++) {
    arr[i] = "x"
}
console.log(arr)

// Заполните массив числами от 1 до 10 с помощью цикла.

var arr = []
for (var i = 0; i < 10; i++) {
    arr[i] = 1 + i
}
console.log(arr)

// Заполните массив 10-ю случайными числами (дробями) от 0 до 1 с помощью цикла. Дроби округляйте до двух знаков в дробной части.

var arr = []
for (var i = 0; i < 10; i++) {
    arr[i] = Math.random() * 1 
    arr[i] = arr[i].toFixed(2)
}
console.log(arr)

// 	Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла

var arr = []
for (var i = 0; i < 10; i++) {
    arr[i] = Math.random() * (10 - 1) + 1
    arr[i] = arr[i].toFixed(0)
}
console.log(arr)

// Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти. 

var arr = [23232323,1,2,7,4,9,76,-2]
for (var i = 0; i < 10; i++) {
    if (arr[i] > 0 && arr[i] < 10) {
        console.log(arr[i])
    }
}

// Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5. Как только будет найден первый такой элемент - выведите 'Есть' и оборвите цикл. Если такого элемента нет - ничего не выводите

var arr = [23232323,1,2,7,9,76,-2]
for (var i = 0; i < 10; i++) {
    if (arr[i] == 5) {
        console.log("есть число 5")
        break
    }
}

// 	Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.

var arr = [233,1,2,7,9,76,-2]
var str = 0
for (var i = 0; i < arr.length; i++ ) {
    str += arr[i]
}
console.log(str)

// Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива

var arr = [233,1,2,7,9,76,-2]
var str = 0
for (var i = 0; i < arr.length; i++) {
    str += arr[i] ** 2
}
console.log(str)

// Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество). 

var arr = [233,1,2,7,9,76,-2]
var str = 0
for (var i = 0; i < arr.length; i++) {
    str += arr[i]
}
str / arr.length
console.log(str)

// C помощью вложенного цикла сформируйте массив массивов "таблица умножения"

var arr = []
function table (X) {
    for (var i = 0; i < X; i++) {
        arr[i] = []
        for (var j = 0; j < X; j++) {
            arr[i][j] = (i + 1) * (j + 1)
        }
    }
    return arr
}
console.table(table(5))

function pow(n, x) {
    if (x === 1) return n
    return n * pow(n, x - 1)
}

pow(2, 10)
1024




