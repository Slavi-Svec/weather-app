const locationDiv = document.getElementsByClassName('location')[0]
const weatherDiv = document.getElementsByClassName('weather-out')[0]
const iconImg = document.getElementsByClassName('weather-icon')[0]

const updateWeather = () => {
  const url =  'http://api.openweathermap.org/data/2.5/forecast?zip=2000,au&units=metric&appid=e1ec3878f6bdc360d0bd74911e0ba7fa'

  fetch(url)
    .then((response) => response.json())
    .then((weather) => {
      // const weatherDayOne = weather.list
      const list = weather.list

      for (let i = 0; i < list.length; i = i + 8) {
        console.log(list[i])
      }
      // const location = weather.name
      // const temp = Math.round(weather.main.temp)
      // const tempMin = weather.main.temp_min
      // const tempMax = weather.main.temp_max
      // const iconCode = weather.weather[0].icon
      // const iconUrl = 'http://openweathermap.org/img/w/' + iconCode + '.png'


      // locationDiv.textContent = location
      // weatherDiv.textContent = temp
      // iconImg.src = iconUrl

      // console.log(temp)
      // console.log(iconCode)
      // console.log(tempMin, tempMax)
      // console.log(weather)
      // console.log(weatherDayOne)
    })
}

updateWeather()

