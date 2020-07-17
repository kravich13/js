

// Сделать первый символ заглавным

function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1)
    // символ t делаем большим и добавляем его ко всей строке, начиная от rading
    // СТРОКИ НЕИЗМЕНЯЕМЫЕ
}
ucFirst("trading")




// Проверка на спам

function checkSpam (str) {
    let newStr = str.toUpperCase()
    
    if (newStr.includes("VIAGRA") || newStr.includes("XXX")) {
        return true
    }
    else {
        return false
    }
}

checkSpam('buy ViAgRA now')
checkSpam('free xxxxx') 
checkSpam("innocent rabbit") 




// Усечение строки

function truncate (str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength) + "..." // с нуля до 20 урезали строку, а после добавили ...
    }
}
truncate("Я хочу заработать 13 000 000 долларов США", 20)




// Выделить число

function extractCurrencyValue (str) {
    return +str.slice(1) // с позиции 1 и до конца
}
extractCurrencyValue("$13000000")