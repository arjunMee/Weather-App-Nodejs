const geocode = require('./getGeoCode')
const forcast = require('./getForcast')

geocode(process.argv[2], (error, { latitude, longitude, location } = {}) => {
  if (error) {
    return console.log(error)
  }

  forcast(latitude, longitude, (error, forcastData) => {
    if (error) {
      return console.log(error)
    }
    console.log(location)
    console.log(forcastData)
  })
})

//
//
//
//
//
//
//
//
//
//
// https://weatherstack.com/quickstart
//de9d0f0433247e032a9346012a85ea09
// https://www.mapbox.com/  //for Gerolocation address -> leg/long -> weather
//pk.eyJ1IjoiYXJqdW5tZWUiLCJhIjoiY2twZ3puMGQ2Mm1lbjJvbnhhNnY2amM1YiJ9.79twLowoTM0vRuiz-N_Jrw

// const url =  'http://api.weatherstack.com/current?access_key=de9d0f0433247e032a9346012a85ea09&query=37.8267,-122.4233&units=f'

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log('unable to connect to weather')
//   } else if (response.body.error) {
//     console.log('unable to find location')
//   } else {
//     const current = response.body.current
//     console.log(
//       `${current.weather_descriptions[0]}. it is currently ${current.temperature} degree out. it feels like ${current.feelslike} degree out.`
//     )
//   }
// })

// const urlLocation = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYXJqdW5tZWUiLCJhIjoiY2twZ3puMGQ2Mm1lbjJvbnhhNnY2amM1YiJ9.79twLowoTM0vRuiz-N_Jrw&limit=1`

// request({ url: urlLocation, json: true }, (error, response) => {
//   if (error) {
//     console.log('unable to connect to weather')
//   } else if (response.body.error) {
//     console.log('unable to fetch data')
//   } else {
//     const current = response.body.features[0]
//     // console.log(current)
//     console.log(
//       `leg ${current.center[0]} and long ${current.center[1]} of ${current.text} city`
//     )
//   }
// })
