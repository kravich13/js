// переменные из DOM
const countrySelect = document.getElementById('country')
const citySelect = document.getElementById('city')
let responsesCountry // нужно для ивента т.к. нет доступа к response для ивента

gettingCountry()

async function gettingCountry() {
  try {
    const response = await fetch(
      'https://raw.githubusercontent.com/David-Haim/CountriesToCitiesJSON/master/countriesToCities.json'
    )

    let jsonResponse

    if (!response.ok) {
      throw new Error('The countrylist request not ok!')
    } else {
      jsonResponse = await response.json()
    }

    responsesCountry = jsonResponse
    otrisovkaCountry(jsonResponse)
  } catch (error) {
    console.warn(error.message)
  }
}

function otrisovkaCountry(resp) {
  // console.log(resp.China)
  const responseObj = resp

  // установка всех стран в Select
  const arrCountry = Object.keys(responseObj).sort() // отсортировали в массив

  arrCountry.shift()

  for (let key of arrCountry) {
    // добавили все option с ключами в Select стран
    const option = document.createElement('option')
    option.textContent = key
    countrySelect.append(option)
  }

  otrisovkaCity(responseObj)
}

function otrisovkaCity(resp) {
  // установка городов в Select сразу же после выбранной страны

  const arrCity = Object.values(resp[countrySelect.value])
    .sort() // отсортировали в массив
    .filter(function (elem) {
      // удалили все пробелы
      if (elem != '') return true
    })

  for (let key of arrCity) {
    // добавили все option с ключами в Select городов
    option = document.createElement('option')
    option.textContent = key
    citySelect.append(option)
  }

  getttingWeather(arrCity[0])
}

async function getttingWeather(cityName) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&APPID=a6e0b53bc1cdd84d8dc5e2c134ba6431`
    )

    let jsonResponse

    if (!response.ok) {
      throw new Error('The forecast request is not ok!')
    } else {
      jsonResponse = await response.json()
    }

    otrisovkaWeather(jsonResponse)
  } catch (error) {
    temp.textContent = 'Данные отсутствуют'
    clouds.textContent = 'Данные отсутствуют'
    wind.textContent = 'Данные отсутствуют'
    pressure.textContent = 'Данные отсутствуют'
  }
}

function otrisovkaWeather(resp) {
  const weatherObj = resp

  // span элементы для каждого поля
  const temp = document.getElementById('temp')
  const clouds = document.getElementById('clouds')
  const wind = document.getElementById('wind')
  const pressure = document.getElementById('pressure')

  // установка верных значений и округление двух полей к ближайшему целому
  temp.textContent = `${Math.round(weatherObj.list[0].main.temp)}°C `
  clouds.textContent = `${weatherObj.list[0].weather[0].description}`
  wind.textContent = `${Math.round(weatherObj.list[0].wind.speed)} m/s`
  pressure.textContent = `${weatherObj.list[0].main.pressure} mbar`

  // наводка красоты и все девочки твои
  const newTemp = Math.round(weatherObj.list[0].main.temp)
  const fullSpan = Array.from(document.getElementsByClassName('colorTextSpan'))

  if (newTemp > 5) {
    for (let key of fullSpan) {
      key.style.color = 'rgb(49, 130, 236)'
    }
    document.body.style.backgroundImage = "url('summer.jpg')"

    return
  }

  for (let key of fullSpan) {
    key.style.color = '#cc0505'
  }
  document.body.style.backgroundImage = "url('winter.jpg')"
}

// ивенты на изменение Select-ов
countrySelect.onchange = function () {
  citySelect.innerHTML = ''

  otrisovkaCity(responsesCountry)
}

// citySelect.onchange = function (event) {
//     getttingWeather(event.target.value)
// }

// fetch ("https://raw.githubusercontent.com/David-Haim/CountriesToCitiesJSON/master/countriesToCities.json")

// .then (response => {
//     if (!response.ok) {
//         throw new Error('The countrylist request not ok!')
//     }
//     return response.json()
// })

// .then (function (response) {
//     responsesCountry = response
//     otrisovkaCountry(response)
// })
// .catch (error => {
//     console.warn(error.message)
// })

// // переменные из DOM
// const countrySelect = document.getElementById("country")
// const citySelect = document.getElementById("city")
// let responsesCountry // нужно для ивента т.к. нет доступа к response для ивента

// function otrisovkaCountry (resp) {
//     // console.log(resp.China)
//     const responseObj = resp

//     // установка всех стран в Select
//     const arrCountry = Object.keys(responseObj).sort() // отсортировали в массив

//     arrCountry.shift()

//     for (let key of arrCountry) { // добавили все option с ключами в Select стран
//         const option = document.createElement("option")
//         option.textContent = key
//         countrySelect.append(option)
//     }

//     otrisovkaCity(responseObj)
// }

// function otrisovkaCity (resp) {
//     // установка городов в Select сразу же после выбранной страны

//     const arrCity =
//         Object.values(resp[countrySelect.value])
//         .sort() // отсортировали в массив
//         .filter(function (elem) { // удалили все пробелы
//             if (elem != "") return true
//         })

//     for (let key of arrCity) { // добавили все option с ключами в Select городов
//         option = document.createElement("option")
//         option.textContent = key
//         citySelect.append(option)
//     }

//     getttingWeather(arrCity[0])
// }

// function getttingWeather (cityName) {
//     fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&APPID=a6e0b53bc1cdd84d8dc5e2c134ba6431`)

//     .then(response => {
// 		if(!response.ok){
// 			throw new Error('The forecast request is not ok!')
// 		}
//         return response.json()
//     })

//     .then(function (response) {
//         otrisovkaWeather(response)
//     })
//     .catch (error => {

//         // установка базового значения в случае ошибки
//         temp.textContent = "Данные отсутствуют"
//         clouds.textContent = "Данные отсутствуют"
//         wind.textContent = "Данные отсутствуют"
//         pressure.textContent = "Данные отсутствуют"
//     })
// }

// function otrisovkaWeather (resp) {
//     const weatherObj = resp

//     // span элементы для каждого поля
//     const temp = document.getElementById("temp")
//     const clouds = document.getElementById("clouds")
//     const wind = document.getElementById("wind")
//     const pressure = document.getElementById("pressure")

//     // установка верных значений и округление двух полей к ближайшему целому
//     temp.textContent = `${Math.round(weatherObj.list[0].main.temp)}°C `
//     clouds.textContent = `${weatherObj.list[0].weather[0].description}`
//     wind.textContent = `${Math.round(weatherObj.list[0].wind.speed)} m/s`
//     pressure.textContent = `${weatherObj.list[0].main.pressure} mbar`

//     // наводка красоты и все девочки твои
//     const newTemp = Math.round(weatherObj.list[0].main.temp)
//     const fullSpan = Array.from(document.getElementsByClassName("colorTextSpan"))

//     if (newTemp > 5) {
//         for (let key of fullSpan) {
//             key.style.color = "rgb(49, 130, 236)"
//         }
//         document.body.style.backgroundImage = "url('summer.jpg')"

//         return
//     }

//     for (let key of fullSpan) {
//         key.style.color = "#cc0505"
//     }
//     document.body.style.backgroundImage = "url('winter.jpg')"
// }

// // ивенты на изменение Select-ов
// countrySelect.onchange = function () {
//     citySelect.innerHTML = ""

//     otrisovkaCity(responsesCountry)
// }

// citySelect.onchange = function (event) {
//     getttingWeather(event.target.value)
// }

// const xhr = new XMLHttpRequest() // сделали xhr

// xhr.open("GET", "https://raw.githubusercontent.com/David-Haim/CountriesToCitiesJSON/master/countriesToCities.json") // инициализировали

// xhr.responseType = "json" // указали желаемый тип данных для получения

// xhr.send() // послали запрос

// xhr.onload = function () { // слушаем запрос
//     if (xhr.status != 200) {
//         return "alert(Отствутствуют данные)"
//     }

//     const responseObj = xhr.response

//     // переменные из DOM
//     const countrySelect = document.getElementById("country")
//     const citySelect = document.getElementById("city")
//     // let option = document.createElement("option")

//     // span элементы для каждого поля
//     const temp = document.getElementById("temp")
//     const clouds = document.getElementById("clouds")
//     const wind = document.getElementById("wind")
//     const pressure = document.getElementById("pressure")

//     // сортировка от А до Я
//     function sortirovka(a, b) {
//         if (a < b) {
//             return -1
//         }
//         else {
//             return 1
//         }
//     }

//     // установка всех стран в Select
//     const arrCountry = Object.keys(responseObj).sort(sortirovka) // отсортировали в массив

//     arrCountry.shift()

//     for (let key of arrCountry) { // добавили все option с ключами в Select стран
//         const option = document.createElement("option")
//         option.textContent = key
//         countrySelect.append(option)
//     }

//     // установка городов в Select сразу же после выбранной страны

//     const arrCity =
//     Object.values(responseObj[countrySelect.value])
//     .sort(sortirovka) // отсортировали в массив
//     .filter(function (elem) { // удалили все пробелы
//         if (elem != "") return true
//     })

//     for (let key of arrCity) { // добавили все option с ключами в Select городов
//         option = document.createElement("option")
//         option.textContent = key
//         citySelect.append(option)
//     }

//     // Weather запрос сохраненный в функцию для оптимизации кода

//     const inquiry = function (arr) { // i am sexy and i know it

//         xhr.open("GET", `https://api.openweathermap.org/data/2.5/forecast?q=${arr}&units=metric&APPID=a6e0b53bc1cdd84d8dc5e2c134ba6431`)

//         xhr.responseType = "json"

//         xhr.send()

//         xhr.onload = function () {
//             // console.log(weatherObj.list[0]) // тут вся база и от неё отталкивался

//             if (xhr.status != 200) {
//                 // установка базового значения в случае ошибки
//                 temp.textContent = "Данные отсутствуют"
//                 clouds.textContent = "Данные отсутствуют"
//                 wind.textContent = "Данные отсутствуют"
//                 pressure.textContent = "Данные отсутствуют"

//                 return
//             }

//             const weatherObj = xhr.response

//             // установка верных значений и округление двух полей к ближайшему целому
//             temp.textContent = `${Math.round(weatherObj.list[0].main.temp)}°C `
//             clouds.textContent = `${weatherObj.list[0].weather[0].description}`
//             wind.textContent = `${Math.round(weatherObj.list[0].wind.speed)} m/s`
//             pressure.textContent = `${weatherObj.list[0].main.pressure} mbar`

//             // наводка красоты и все девочки твои

//             const newTemp = Math.round(weatherObj.list[0].main.temp)
//             const fullSpan = Array.from(document.getElementsByClassName("colorTextSpan"))

//             if (newTemp > 5) {
//                 for (let key of fullSpan) {
//                     key.style.color = "rgb(49, 130, 236)"
//                 }
//                 document.body.style.backgroundImage = "url('summer.jpg')"

//                 return
//             }

//             for (let key of fullSpan) {
//                 key.style.color = "#cc0505"
//             }
//             document.body.style.backgroundImage = "url('winter.jpg')"
//         }

//         xhr.onerror = function () {
//             console.log("Ошибка соединения, заплатите, пожалуйста, за инет.")
//         }
//     }
//     inquiry(arrCity[0]) // вызвал с параметром Массив[0] (т.е. при установке страны сразу выставляется 0-й индекс (город))

//     // ивент на изменение Select-ов
//     countrySelect.onchange = function (event) {

//         citySelect.innerHTML = ""

//         const arrCity =
//         Object.values(responseObj[event.target.value]).sort(sortirovka)
//         .filter(function (elem) {
//             if (elem != "") return true
//         })

//         for (let key of arrCity) {
//             option = document.createElement("option")
//             option.textContent = key
//             citySelect.append(option)
//         }

//         inquiry(arrCity[0]) // снова вызвал с 0 индексом, иначе данные не обновятся при изменении Select страны с одной на другую
//     }

//     citySelect.onchange = function (event) {
//         const cityName = event.target.value

//         inquiry(cityName) // по факту это не массив, а строка, строка с текущим городом
//     }

// }

// xhr.onerror = function () {
//     console.log("Ошибка соединения, заплатите, пожалуйста, за инет.")
// }
