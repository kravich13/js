// Get data from `https://raw.githubusercontent.com/David-Haim/CountriesToCitiesJSON/master/countriesToCities.json`, display the lists of countries and cities and get weather forecast from `http://api.openweathermap.org`
"use strict"
const listCountryElement = document.querySelector('input[list="country"]')
const countryDataListElement = document.getElementById('country')
const listCityElement = document.querySelector('input[list="city"]')
const cityDataListElement = document.getElementById('city')
const tempEl = document.getElementsByClassName('temp')
const cloudsEl = document.getElementsByClassName('clouds')
const windEl = document.getElementsByClassName('wind')
const pressureEl = document.getElementsByClassName('pressure')
let response, result
getLists()

listCountryElement.addEventListener('click', function(event){
    let key = new KeyboardEvent('keydown', {keyCode: 40})
    setTimeout(() => listCountryElement.dispatchEvent(key), 100)
})

listCountryElement.addEventListener('keydown', function(event){
    console.log(event)
    if(event.keyCode === 40){
        event.preventDefault()
        console.log(event.keyCode)
    }
})

listCountryElement.addEventListener('mouseover', function(){
    this.lastValue = this.value
    this.placeholder = this.value
    this.value = ""
})
listCountryElement.addEventListener('mouseout', function(){
    this.value = this.lastValue
})
listCountryElement.addEventListener('change', function(){
    listCities(result)
})
listCityElement.addEventListener('mouseover', function(){
    this.lastValue = this.value
    this.value = ""
    this.placeholder = this.lastValue
})
listCityElement.addEventListener('mouseout', function(){
    this.value = this.lastValue
})
listCityElement.addEventListener('change', function(){
    getForecast(listCityElement.value)
})

async function getLists(){
    try {
        response = await fetch('https://raw.githubusercontent.com/David-Haim/CountriesToCitiesJSON/master/countriesToCities.json')
        if(response.ok){
            result = await response.json()
            console.log(result)
            listCountries(result)
        } else {
            throw new Error('Not ok!')
        }
    } catch(err) {
        console.error(err)
    }
}

async function listCountries(respondedData){
    const countries = Object.keys(respondedData).sort()
    for(let i=0; i < countries.length; i++){
        const option = document.createElement('option')
        option.value = countries[i]
        countryDataListElement.appendChild(option)
    }
    console.log(countryDataListElement)
}

async function listCities(respondedData){
    const currentCountry = listCountryElement.value
    const cities = respondedData[currentCountry].sort()
    listCityElement.value = cities[0]
    getForecast(listCityElement.value)
    cityDataListElement.innerHTML = ""
    for (let i = 0; i < cities.length; i++) {
        const option = document.createElement('option')
        option.value = cities[i]
        cityDataListElement.appendChild(option)
    }
}

async function getForecast(city, days = 1) {
    try {
        let result, response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=a6e0b53bc1cdd84d8dc5e2c134ba6431`)
        if (response.ok) {
            result = await response.json()
        } else {
            throw new Error('Not ok!')
        }
        for (let i = 0; i < days; i++) {
            tempEl[i].textContent = ''
            tempEl[i].textContent += ` ${Math.round(result.list[0].main.temp)} \u00B0C`
            cloudsEl[i].textContent = ''
            cloudsEl[i].textContent += ` ${result.list[0].weather[0].description}`
            windEl[i].textContent = ''
            windEl[i].textContent += ` ${Math.round(result.list[0].wind.speed)} m/s`
            pressureEl[i].textContent = ''
            pressureEl[i].textContent += ` ${Math.round(result.list[0].main.pressure)} mbar`
        }
    } catch (err) {
        console.error(err)
    }
}