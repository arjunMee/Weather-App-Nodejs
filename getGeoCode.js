const request = require('request')

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoiYXJqdW5tZWUiLCJhIjoiY2twZ3puMGQ2Mm1lbjJvbnhhNnY2amM1YiJ9.79twLowoTM0vRuiz-N_Jrw&limit=1`

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('unable to connect to weathet service', undefined)
    } else if (body.features.length === 0) {
      callback('unable to connect to location. try another Saerch ?', undefined)
    } else {
      const current = body.features[0]
      callback(undefined, {
        latitude: current.center[1],
        longitude: current.center[0],
        location: current.text,
      })
    }
  })
}

module.exports = geocode
