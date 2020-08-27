const locationDiv = document.getElementsByClassName('location')[0]
const weatherDiv = document.getElementsByClassName('weather-out')[0]
const iconDiv = document.getElementsByClassName('weather-icon')[0]

const updateWeather = () => {
  const url =  'http://api.openweathermap.org/data/2.5/weather?zip=2000,au&units=metric&appid=e1ec3878f6bdc360d0bd74911e0ba7fa'
  fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((weather) => {
      const location = weather.name
      const temp = weather.main.temp
      const icon = weather.weather[0].icon

      locationDiv.textContent = location
      weatherDiv.textContent = temp
      iconDiv.textContent = icon
      console.log(temp)
      console.log(icon)
    })
}

updateWeather()
