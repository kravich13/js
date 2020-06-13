// Покажите день недели

let dayW = new Date(2014, 0, 3)

function getWeekDay (date) {
    let dayWeek = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]
    
    let numb = date.getDay()
    return dayWeek[numb]

}
getWeekDay(dayW)




// День недели в европейской нумерации

let day = new Date(2012, 0, 3)

function getLocalDay (date) {
    let day = date.getDay()

    if (day === 0) {
        day = 7
    }

    return day

}
getLocalDay(day)





// Какой день месяца был много дней назад?

let date = new Date(2020, 8, 9)

function getDateAgo (date, days) {
    let dateCopy = new Date(date) // в датакопи клонируем дату извне

    dateCopy.setDate(date.getDate() - days) // датакопи.исправление даты (получить день недели - день из параметра функции)
    return dateCopy.getDate() // получить день недели, который был кол-во дней назад
    // первоначальная дата не изменилась
}
getDateAgo(date, 365)




// Последнее число месяца?

function getLastDayOfMonth (year, month) {
    let date = new Date (year, month + 1, 0) // год, месяц +1, 0 - один день перед первым числом месяца

    return date.getDate()
}
getLastDayOfMonth(2017, 9)




// Сколько сегодня прошло секунд?

function getSecondsToTomorrow() {
    let date = new Date()
    let tomorrow = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)
    let miliSeconds = tomorrow - date
    let seconds = miliSeconds / 1000
    return Math.ceil(seconds)
}
getSecondsToTomorrow()




// Форматирование относительной даты

function formatDate (data) {

    let date = new Date() - data
    if (date < 2000) {
        return "Прямо сейчас"
    }
    
    let sec = Math.floor(date / 1000)
    if (sec < 60) {
        return `${sec} сек. назад`
    }
    
    let min = Math.floor(date / 60000)
    // console.log(sec)
    if (min < 60) {
        return `${min} мин. назад`
    }
}

// console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"
// console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
// console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );