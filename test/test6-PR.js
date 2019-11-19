// Сделайте калькулятор, который позволит вам исходя из информации о количества этажей в доме и количества квартир на этаже находить подъезд и этаж определенной квартиры по её номеру. Например для 9этажного дома по 4 квартиры на этаж 81 квартира находится на 3м этаже третьего подъезда.
function apartmentNumber(floors, apartmentsPerFloor, numberFloor) {
    var porchFloor = 0
    var porch = 0
    var number = floors * apartmentsPerFloor
    porch = numberFloor / number
    porch = Math.ceil(porch)
    console.log(porch + " подъезд")

    porchFloor = numberFloor % number // 83 % 72 = 11
    porchFloor = porchFloor / apartmentsPerFloor
    porchFloor = Math.ceil(porchFloor)
    return porchFloor + " этаж"
}
apartmentNumber(9, 8, 172)

// Спросите у пользователя пол (confirm). Выведите с помощью alert "Вы мужчина" или "Вы женщина". Сделайте это оператором alert. Используйте тернарный оператор.
var user = confirm("Вы мужчина?")
user == true ? alert("Мужчина") : alert("Женщина")

// С помощью prompt спросить у пользователя его возраст и подсчитать год рождения. Год рождения вывести с помощью alert.
var user = prompt("Введите ваш возраст")
var years = 2019
alert(years - user)

// С помощью prompt спросить у пользователя температуру в градусах Цельсия и перевести их в Фаренгейты и/или наоборот.
var temp = prompt("Введите температуру в Фаренгейта")
var Cel = 0 
Cel = (temp - 32) * 5 / 9
Cel = Math.ceil(Cel)
alert(Cel)

var user = prompt("В каких градусах вы хотите Указать температуру?")
var gradus
var number = 0
if (user == "Цельсия") {
    user = prompt("В какие градусы вы хотите перевести?")
    // debugger
    if (user == "Фаренгейт") {
        gradus = +prompt("Введите кол-во градусов")
        alert((gradus * 9 / 5) + 32 + " градусов Фаренгейта по Цельсию")
    } else {
        if (user == "Кельвин") {
            gradus = +prompt("Введите кол-во градусов")
            alert(gradus - 273, 15 + " градусов Кельвина по Цельсию")
        } else {
            alert("Неверное название градусов")
        }
    }
} else {
    if (user == "Фаренгейт") {
        user = prompt("В какие градусы вы хотите перевести?")
        if (user == "Цельсия") {
            gradus = +prompt("Введите кол-во градусов")
            number = ((gradus - 32) * 5 / 9)
            number = Math.ceil(number)
            alert(number + " градусов Цельсия по Фаренгейту")
        } else {
            if (user == "Кельвин") {
                gradus = +prompt("Введите кол-во градусов")
                number = ((gradus - 32) * 5 / 9 + 273.15)
                number = number.toFixed(2)
                alert(number + " градусов Кельвинов по Фаренгейту")
            } else {
                alert("Неверное название градусов")
            }
        }
    } else {
        if (user == "Кельвин") {
            user = prompt("В какие градусы вы хотите перевести?")
            if (user == "Цельсия") {
                gradus = +prompt("Введите кол-во градусов")
                number = gradus + 273.15
                number = number.toFixed(2)
                alert(number + " градусов Цельсия по Кельвину")
            } else {
                if (user == "Фаренгейт") {
                    gradus = +prompt("Введите кол-во градусов")
                    number = (gradus - 273.15) * 9 / 5 + 32
                    number = number.toFixed(2)
                    alert(number + " градусов Фаренгейта по Кельвину")
                } else {
                    alert("Неверное название градусов")
                }
            }
        }
    }
}
function converter(temp, outOfDegree, inDegrees) {
    var result 
    if (outOfDegree == "C" || outOfDegree == "F" || outOfDegree == "K") {
        if (outOfDegree == "C") {
            if (inDegrees == "F") {
                result = (temp * 9 / 5) + 32 + " градусов Фаренгейта по Цельсию"
            } else {
                if (inDegrees == "K") {
                    result = temp - 273, 15 + " градусов Кельвина по Цельсию"
                } else {
                    console.log("Неверное название градусов")
                }
            }
        }
    }
    else {
        console.log("ошибка")
    }
    return result
}
converter(10, "C", "F")





