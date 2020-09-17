const fragment = document.createDocumentFragment()
const weatherDiv  = document.getElementsByClassName('weather')[0]
const minDiv = document.getElementsByClassName('min')[0]
const maxDiv = document.getElementsByClassName('max')[0]
const iconDiv = document.getElementsByClassName('icon')[0]
const dayOfWeekDiv = document.getElementsByClassName('weekDay')[0]

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const updateWeather = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((weather) => {
      const list = weather.list
      for (let i = 0; i < list.length; i = i + 8) {
        let min = Math.round(list[i].main.temp_min)
        let max = Math.round(list[i].main.temp_max)

        const date = new Date(list[i].dt * 1000);
        const dayOfWeek = days[date.getDay()]

        const iconCode = list[i].weather[0].icon
        const iconUrl = 'http://openweathermap.org/img/w/' + iconCode + '.png'

        const wrapperDiv = document.createElement('div')
        const tempDiv = document.getElementById('temporary-id')
        wrapperDiv.classList.add('weather-wrapper')

        const img = document.createElement('img');
        img.src = iconUrl
        document.body.insertBefore(img, tempDiv);

        const minContent = document.createTextNode(min)
        const maxContent = document.createTextNode(max)
        const dayOfTheWeek = document.createTextNode(dayOfWeek)


        wrapperDiv.appendChild(minContent)
        wrapperDiv.appendChild(maxContent)
        wrapperDiv.appendChild(dayOfTheWeek)

        document.body.insertBefore(wrapperDiv, tempDiv);
      }
    })
}

updateWeather('http://api.openweathermap.org/data/2.5/forecast?zip=2000,au&units=metric&appid=e1ec3878f6bdc360d0bd74911e0ba7fa')

