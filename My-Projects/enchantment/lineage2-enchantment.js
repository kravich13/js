// заточка пушки на +16 с шансом и сломом и инвентарём
var bag = { 
    "DB": {
        enchanted: 0,
        SA: "focus",
        LS: false,
        fullName: "Draconic Bow"
    },                                  // инвентарь с ДБ и Аркой на +4
    "AM": {
        enchanted: 4,
        SA: "acumen",
        LS: true,
        fullName: "Arcana Mace"
    },
    "crystals": {
        S: 0
    }
}

enchantSession()    // вызов функции

function enchantSession() { // объявляем функцию

    var whatToEnchant = prompt("Что вы хотите заточить: DB или AM?")    // переменная с предметом
    var currentEntchantment     // переменная с текущей заточкой

    switch (whatToEnchant) {    // свич с проверкой на ввод "ДБ" и "АМ"
        case "DB":
            currentEntchantment = bag["DB"].enchanted
            break;  // выход из промпта

        case "AM":
            currentEntchantment = bag["AM"].enchanted
            break;

        default:    // если введено неверное значение
            alert("У вас нет такой пушки или нет такого названия")
            return  // выходим при неверном значении
    }

    for (var i = 0, agree; i < 15; i++) {   // создаем цикл для заточки (15 раз т.е. на 0 не точим)

        agree = confirm(`Вы уверены, что хотите точнуть ${whatToEnchant} +${currentEntchantment}?`)
        // записываем в переменную agree комфирм с пушкой для точки и его заточкой

        if (agree == true) {    // если заточено, то
            var result = enchant(currentEntchantment) // в переменную пишем функцию с параметром текущей заточки
            if (typeof result == "number") { // проверка типа на число
                alert("Заточка успешна")
                currentEntchantment++   // точим на +1
            } else {    
                if (typeof result == "string") {    // если вылезла строка, то
                    alert(`Неудачная заточка ${result}`)    // неудачная заточка и {получены кристаллы}
                    break   // выходим с концом
                } else {
                    alert("Произошла ошибка при заточке")   // вряд ли будет заюзаной
                }
            }
        } else { // если незаточено, выходим
            break
        }
    }
    bag[whatToEnchant].enchanted = currentEntchantment // пишем в заточку первоначального оружия текущий уровень заточки
} // закрываем функцию 

function enchant(current) { // объявляем функцию с параметром текущей заточки (0)
    if (current == 16) {    // если пушка+16 и хотим точнуть ещё, то будет ошибка
        return "Вы достигли лимита точки"
    }

    if (current < 3) { // если заточка пушки меньше чем 3 - точим на +1 (100% шанс)
        return current + 1
    }

    var result  // объявляем переменную в которой будут выпадать проценты
    var succesChance    // переменная для шанса заточки для каждого заточенного оружия

    succesChance = 70 - (2 * (current - 3))
    // если пушка +4, то нужно отнять на 2% шанс точки с каждой следующей точенной пушкой     
    // т.е.: пушка+8, то шанс -8% = 62%
    console.log(succesChance)
    result = Math.floor(Math.random() * 100)    // в переменную пишем выпадение от 0 до 100
    if (result <= succesChance) {   // если выпавшее значение меньше или равно 70, то...
        console.log("Заточено успешно")
    } else {    // если больше 70, то..
        result = Math.floor(Math.random() * (500 - 200) + 200)  // генерируем кол-во кристаллов от 200 до 500 штук
        result = `Фейл. Получено ${result} кристаллов`  // записываем в переменную кол-во кристаллов
    }
    console.log(result)
    return result;  // возвращаем конечный результат заточки
}




// добавление кристаллов в рюкзак

var bag = { 
    "DB": {
        enchanted: 0,
        SA: "focus",
        LS: false,
        fullName: "Draconic Bow"
    },                                  // инвентарь с ДБ и Аркой на +4
    "AM": {
        enchanted: 4,
        SA: "acumen",
        LS: true,
        fullName: "Arcana Mace"
    },
    crystals: {
        S: 0,
        A: 0,
    }
}

enchantSession()    // вызов функции

function enchantSession() { // объявляем функцию

    var whatToEnchant = prompt("Что вы хотите заточить: DB или AM?")    // переменная с предметом
    var currentEntchantment     // переменная с текущей заточкой
    // var crystalsS 


    switch (whatToEnchant) {    // свич с проверкой на ввод "ДБ" и "АМ"
        case "DB":
            currentEntchantment = bag["DB"].enchanted
            break;  // выход из промпта

        case "AM":
            currentEntchantment = bag["AM"].enchanted
            break;

        default:    // если введено неверное значение
            alert("У вас нет такой пушки или нет такого названия")
            return  // выходим при неверном значении
    }

    for (var i = 0, agree; i < 15; i++) {   // создаем цикл для заточки (15 раз т.е. на 0 не точим)

        agree = confirm(`Вы уверены, что хотите точнуть ${whatToEnchant} +${currentEntchantment}?`)
        // записываем в переменную agree комфирм с пушкой для точки и его заточкой

        if (agree == true) {    // если заточено, то
            var result = enchant(currentEntchantment) // в переменную пишем функцию с параметром текущей заточки
            if (typeof result == "number") { // проверка типа на число
                alert("Заточка успешна")
                currentEntchantment++   // точим на +1
            } else {    
                if (typeof result == "string") {    // если вылезла строка, то
                    alert(`Неудачная заточка ${result}`)    // неудачная заточка и {получены кристаллы}
                    break   // выходим с концом
                } else {
                    alert("Произошла ошибка при заточке")   // вряд ли будет заюзаной
                }
            }
        } else { // если незаточено, выходим
            break
        }
    }
    bag[whatToEnchant].enchanted = currentEntchantment // пишем в заточку первоначального оружия текущий уровень заточки
} // закрываем функцию 

function enchant(current) { // объявляем функцию с параметром текущей заточки (0)
    if (current == 16) {    // если пушка+16 и хотим точнуть ещё, то будет ошибка
        return "Вы достигли лимита точки"
    }

    if (current < 3) { // если заточка пушки меньше чем 3 - точим на +1 (100% шанс)
        return current + 1
    }

    var result  // объявляем переменную в которой будут выпадать проценты
    var succesChance    // переменная для шанса заточки для каждого заточенного оружия
    var numberOfCrystal // переменная с кол-вом кристаллов

    succesChance = 70 - (2 * (current - 3))
    // если пушка +4, то нужно отнять на 2% шанс точки с каждой следующей точенной пушкой     
    // т.е.: пушка+8, то шанс -8% = 62%
    console.log(succesChance)
    result = Math.floor(Math.random() * 100)    // в переменную пишем выпадение от 0 до 100
    if (result <= succesChance) {   // если выпавшее значение меньше или равно 70, то...
        console.log("Заточено успешно")
    } else {    // если больше 70, то..
        numberOfCrystal = Math.floor(Math.random() * (500 - 200) + 200)  // генерируем кол-во кристаллов от 200 до 500 штук
        result = `Фейл. Получено ${numberOfCrystal} кристаллов`  // записываем в переменную кол-во кристаллов
        bag[crystals].S = numberOfCrystal
    }
    console.log(result)
    return result;  // возвращаем конечный результат заточки
}
