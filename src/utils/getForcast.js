const request = require('request')

const forcast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=de9d0f0433247e032a9346012a85ea09&query=${latitude},${longitude}`
  // console.log(url)
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('unable to connect to weather', undefined)
    } else if (body.error) {
      callback('unable to find location', undefined)
    } else {
      const current = body.current
      callback(
        undefined,
        `${current.weather_descriptions[0]}. in currently ${current.temperature} degree out. it feels like ${current.feelslike} degree out.`
      )
    }
  })
}

module.exports = forcast
