const express = require('express')
const path = require('path')
const hbs = require('hbs')
// Weather Forcast File
const geocode = require('./utils/getGeoCode')
const forcast = require('./utils/getForcast')

console.log(__dirname)
console.log(__filename)

const app = express()
const port = process.env.PORT || 3000
// Define paths for express config
const public = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// setup static directory to serve
app.use(express.static(public))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Arjun meena',
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Weather App Help',
    name: 'Arjun Meena',
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Arjun Meena',
  })
})

app.get('/product', (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: 'you  must provide a search term',
    })
  }
  res.send({
    product: [],
    hello: req.query.search,
  })
})

app.get('/weather', (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: 'you must provide address',
    })
  }

  geocode(
    req.query.address,
    (error, { latitude, longitude, location } = {}) => {
      if (error) {
        return res.send({ error })
      }

      forcast(latitude, longitude, (error, forcastData) => {
        if (error) {
          return res.send({ error })
        }

        res.send({
          forcast: forcastData,
          location,
          address: req.query.address,
        })
      })
    }
  )

  // res.send({
  //   forcast: 'its snowing',
  //   location: 'kota',
  //   address: req.query.address,
  // })
  //
})

// nodemon express.js -e js,hbs e flaf for extension
// created and render a 404 page with handlerba
app.get('/help/*', (req, res) => {
  res.render('404', {
    errorMessage: 'Help article not found 404',
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    errorMessage: 'no page is fpund',
  })
})

app.listen(port, () => {})
