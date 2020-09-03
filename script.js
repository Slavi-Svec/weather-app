const fragment = document.createDocumentFragment()
const weatherDiv  = document.getElementsByClassName('weather')[0]
const minDiv = document.getElementsByClassName('min')[0]
const maxDiv = document.getElementsByClassName('max')[0]
const iconDiv = document.getElementsByClassName('icon')[0]
const dayOfWeekDiv = document.getElementsByClassName('weekDay')[0]

const updateWeather = (url) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  fetch(url)
    .then((response) => response.json())
    .then((weather) => {
      const list = weather.list

      for (let i = 0; i < list.length; i = i + 8) {
        let min = Math.round(list[i].main.temp_min)
        let max = Math.round(list[i].main.temp_max)

        const iconCode = list[i].weather[0].icon
        const date = new Date(list[i].dt * 1000);
        const dayOfWeek = days[date.getDay()]
        const iconUrl = 'http://openweathermap.org/img/w/' + iconCode + '.png'

        iconDiv.src = iconUrl
        minDiv.innerText = min
        maxDiv.innerText = max
        dayOfWeekDiv.innerText = dayOfWeek
      }
    })
}

updateWeather('http://api.openweathermap.org/data/2.5/forecast?zip=2000,au&units=metric&appid=e1ec3878f6bdc360d0bd74911e0ba7fa')

        // weatherDiv.innerText = min

        // console.log(weather)

        // const weatherFiveDay = [min, max]

        // weatherFiveDay.forEach(function(weatherFiveDay) {
        // let li = document.createElement('li')
        // li.textContent = weatherFiveDay
        // fragment.appendChild(li)
        // })

        // fiveDayDiv.appendChild(fragment)