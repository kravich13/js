var userName = prompt("Вы админ?", "");


if (userName == "Admin") {

    var pass = prompt("А какой пароль?", "")
    if (pass == "Giant") {
        alert("Здравствуйте");

    } else {
        if (pass == null) {
            alert("Отмэна")
        } else {
            alert("Неа");
        }
    }

} else {
    if (userName == null) {
        alert("Вы нажали отмэна");
    } else {
        alert("я хз кто вы");
    }
}





// выход из цикла - break (когда ровно null)
var i = 0;
while (i < 100) {
    i = prompt("Сколько дашь мне денег?");
    if (i == null) {
        alert("Я обиделась!")
        break
    } else {
        if (i >= 100) {
            alert("Ну пойдем");
        } else {
            if (i <= 100) {
                alert("Козёл, я не шлюха");
            }
        }
    }
}

// Проверка на null (отмэна) в условии цикла

var i = 0;
while (i < 100 && i != null) {
    i = prompt("Сколько дашь мне денег?");
    if (i == null) {
        alert("Я обиделась!")
    } else {
        if (i >= 100) {
            alert("Ну пойдем");
        } else {
            if (i <= 100) {
                alert("Козёл, я не шлюха");
            }
        }
    }
}

// это do
do {        
    i = prompt("Сколько дашь мне денег?");
    if (i == null) {
        alert("Я обиделась!")
        break
    } else {
        if (i >= 100) {
            alert("Ну пойдем");
        } else {
            if (i <= 100) {
                alert("Козёл, я не шлюха");
            }
        }
    }
}
while (i < 100) 




// При помощи цикла for выведите чётные числа от 2 до 10.
for ( var i = 0; i <= 10; i += 2 ) {
    alert (i);
    }




i = 0;
while (i < 3) {
    i++;
    alert(`number ${i}!`);
}

let year = prompt('В каком году появилась спецификация ECMAScript-2015?', '');

if (year < 2015) {
    alert('Это слишком рано...');
} else {
    if (year > 2015) {
        alert('Это поздновато');
    } else {
        if (year == 2015) {
            alert('Верно!');
        } else {
            alert("Хз вообще");
        }
    }
}



// задание 1. Вывести чётные числа от 2 до 10;

// while
i = 0;
while (i <= 8) {
    alert (i);
    (i += 2);
}

// do while
var i = 2;
do {
    alert(i);
    i += 2;
}
while (i <= 10)

// for
for (i = 2; i <= 10; i += 2) {
    alert (i);
}


// задание 2. Вывести значение после слов в алерте 0 меньше 3 (0 1 2); 

// while
i = 0;
while (i < 3) {
    alert( `number ${i}!` );
    ++i;
}

// do
var i = 0;
do {
    alert (`number ${i}!`);
    ++i;
}
while ( i < 3)

// for 
for ( i = 0; i < 3; i++ ) {
    alert (`number ${i}!`)
}


// задание 3. Напишите аналогичный цикл 

// while
var i = 10;
var str = "";
while ( i > 0 ) {
    console.log ( i, str );
    i--, str += "#";
}

// do
var i = 10;
var str = "";
do { 
    console.log ( i, str );
    i--, str += "#";
}
while ( i > 0)


for ( var i = 10, str=""; i > 0; i--, str += "#") {
	console.log ( i, str );
}


var tab = "<table><tr>"
for ( var i = 0; i < 10; i++ ) {
    console.log ( "внешний цикл:" + i );
    for ( k = 0; k < 10; k++) {
        console.log ( "внутрений цикл:" + k );
        tab += "</table></tr>"
        }
    }


var table1 = "<table><tr>";

table1 += "text";
table1 += "</table></tr>";

console.log(table1);


var table1 = "<table><tr>"; // добавляем переменную с первой частью 
var d = 0;  // объявляем числовую переменную (для кол-ва раз для вывода)
while (d < 10) {    // делаем условие в цикле while, которое будет циклить d пока d меньше 10
    d++;    // каждый цикл добавляет +1 и так пока d не станет больше 10
    table1 += ` <td> ${d} </td> `;  // к переменной table1 добавляем текст, внутри которого наша измененная переменная d
}
table1 += "</tr></table>";  // присваиваем конечный текст для переменной table в случае успешного цикла
document.write(table1);     // эта строчка делает пустую страницу с html кодом


var table = "<table>"; 
var d = 0;  
var f = 0;
while (d < 10) {    
    table += ` <tr> ${d} `;  
    d++;    
    
    f = 0;
    while (f < 10) {
        table += `<td> ${f * d} </td>`;
        f++;
    }
    table += " </tr>";
}
table += "</table>";  
document.write(table);
console.log(table);

//
"use strict"
var table = "<table>";
var size = prompt ("");
console.log(typeof size);   // показывает тип переменной
for ( var i = 1; i < size; i++ ) {
    table += " <tr> ";

    for ( var j = 1; j < size; j++ ) {
        table += `<td> ${ j * i } </td>`;
    }
    table += "</tr>";
}
table += "</table>";
document.write(table);
console.log(table);
//

function sayhi ( name ) {   // функция название; ( от нуля до беск. ) - имена параметров функции
    alert (" PREVED " + name )  // сам код функции   
    return 0
}
sayhi("MV");   // вызов функции - это ее ИМЯ + КРУГЛЕ СКОБКИ !!!!!!!!!!!!!!!


function multiplicationTable(size) {    //  сама функция (см. выше)
    var table = "<table>";
    var size = prompt("");
    console.log(typeof size); // показывает тип переменной
    for (var i = 1; i < size; i++) {
        table += " <tr> ";

        for (var j = 1; j < size; j++) {
            table += `<td> ${ j * i } </td>`;
        }
        table += "</tr>";
    }
    table += "</table>";
    return table;
}
document.write( multiplicationTable() ) // то же самое, что     document.write(table);


var table = "<table>";
var width = prompt ("");
var height = prompt ("");
for ( var i = 1; i < height; i++ ) {
    table += " <tr> ";

    for ( var j = 1; j < width; j++ ) {
        table += `<td> ${ j * i } </td>`;
    }
    table += "</tr>";
}
table += "</table>";
document.write(table);
console.log(table);


function multiplicationTable(width, height) {
    console.log(width, height);
    var table = "<table>";
    for (var i = 1; i < height; i++) {
        table += " <tr> ";

        for (var j = 1; j < width; j++) {
            table += `<td> ${ j * i } </td>`;
        }
        table += "</tr>";
    }
    table += "</table>";
    return table;
}
document.write( multiplicationTable(11, 5) )
document.write( multiplicationTable(7, 4) )
document.write( multiplicationTable(5, 1) )
document.write( multiplicationTable(6, 3) )
// document.write(table);
// console.log(table);

// массивы

var names = ["Вася", "Петя", "Маша", "Даша"];

for (var i = 0; i < 4; i++) {
    console.log (names[i]);
}

//  вывод четных чисел в цикле из массива numbers
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

for (var i = 0; i < 11; i++) {
    if (i % 2 == 1) {
        console.log(numbers[i]);
    }
}

// проверка всего массива на наличие четных чисел. Для вывода нечетных - пишем == 1
var numbers = [1, 20, 30, 4, 5, 6, 70, 80, 50, 10]

for (var i = 0; i < 11; i++) {
    if (numbers[i] % 2 == 0) {
        console.log(numbers[i]);
    }
}

//
var numbers = [1, 20, 30, 4, 5, 6, 70, 80, 50, 10]

for (var i = 0; i < 10; i++) {
    if (numbers[i] % 2 == 0) {
        numbers[i] /= 2;
    }
    else { 
          (numbers[i] % 2 == 1);
          numbers[i] *= 2;
          numbers[i] += " - нечетные числа";
    }
        console.log(numbers[i]);
}


// вывод массива до и после изменений рядом делаются с помощью переменная1 + " " + переменная2
var numbers = [1, 20, 30, 4, 5, 6, 70, 80, 50, 10]  // объявляем массив

for (var i = 0; i < numbers.length; i++) {  // делаем цикл
    var qq = numbers[i];    // объявляем переменную и закидываем в неё массив до изменений

    if (numbers[i] % 2 == 0) {  // объявляем if и вычисляем есть ли в коде четные числа
        numbers[i] /= 2;    // все четные числа делим на два
    }
    else { // ещё
          numbers[i] *= 2;  // все оставшиеся (нечетные) числа умножаем на два
    }
    console.log(qq + " " + numbers[i]); // выводим в консоль переменную с массивом ДО изменений (qq), добавляем строку " пробел " и добавляем переменную с массивом ПОСЛЕ изменений
}


var names = ["Вася", "Петя", "БритниСпирс"];   // объявляем первый массив
function sayHi (massiv) {   // объявляем функцию (название - sayHi) и передаем параметры (massiv)
    var newMassiv = [];     // объявляем пустой массив в функции для перезаписи

    for (var i = 0; i < names.length; i++) {   // делаем цикл первого массива
        newMassiv[i] = "hi " + massiv[i];   // в новый массив записываем "hi" и добавляем первый массив
    }
    return newMassiv;   // возвращаем новый массив  
}
console.log(sayHi(["Вася", "Петя", "БритниСпирс"]));  // вызвал функцию с массивом