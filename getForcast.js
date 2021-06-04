const request = require('request')

const forcast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=de9d0f0433247e032a9346012a85ea09&query=${latitude},${longitude}&units=f`
  console.log(url)
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('unable to connect to weather', undefined)
    } else if (response.body.error) {
      callback('unable to find location', undefined)
    } else {
      callback(undefined, {
        weather: response.body.current.weather_descriptions,
        temperature: response.body.current.temperature,
      })
    }
  })
}

module.exports = forcast
